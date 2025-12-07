import { neon } from '@neondatabase/serverless';
import { NextRequest, NextResponse } from 'next/server';

const NullishQueryFunction = () => {
  throw new Error(
    'No database connection string was provided to `neon()`. Perhaps process.env.DATABASE_URL has not been set'
  );
};
NullishQueryFunction.transaction = () => {
  throw new Error(
    'No database connection string was provided to `neon()`. Perhaps process.env.DATABASE_URL has not been set'
  );
};

const sql = process.env.DATABASE_URL ? neon(process.env.DATABASE_URL) : NullishQueryFunction;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const status = searchParams.get('status');
    const limit = parseInt(searchParams.get('limit') || '50');
    const offset = parseInt(searchParams.get('offset') || '0');

    let query = `
      SELECT 
        cr.*,
        p.title as property_title,
        p.location as property_location,
        a.first_name as agent_first_name,
        a.last_name as agent_last_name
      FROM contact_requests cr
      LEFT JOIN properties p ON cr.property_id = p.id
      LEFT JOIN agents a ON cr.agent_id = a.id
    `;
    let params: any[] = [];
    let paramCount = 0;

    if (status) {
      paramCount++;
      query += ` WHERE cr.status = $${paramCount}`;
      params.push(status);
    }

    query += ` ORDER BY cr.created_at DESC LIMIT $${paramCount + 1} OFFSET $${paramCount + 2}`;
    params.push(limit, offset);

    const result = await sql(query, params);

    const countResult = await sql(
      'SELECT COUNT(*) as count FROM contact_requests' + (status ? ` WHERE status = $1` : ''),
      status ? [status] : []
    );

    return NextResponse.json({
      data: result,
      total: countResult[0]?.count || 0,
      limit,
      offset,
    });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contact requests' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, property_id, agent_id } = body;

    const result = await sql(
      `INSERT INTO contact_requests (name, email, phone, message, property_id, agent_id, status, created_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, NOW())
       RETURNING *`,
      [name, email, phone, message, property_id || null, agent_id || null, 'new']
    );

    return NextResponse.json(result[0], { status: 201 });
  } catch (error) {
    console.error('Contact API POST error:', error);
    return NextResponse.json(
      { error: 'Failed to create contact request' },
      { status: 500 }
    );
  }
}
