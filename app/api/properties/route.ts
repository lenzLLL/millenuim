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

    // Paramètres de recherche
    const search = searchParams.get('search');
    const type = searchParams.get('type');
    const transactionType = searchParams.get('transaction_type');
    const status = searchParams.get('status') || 'available';
    const minPrice = searchParams.get('min_price');
    const maxPrice = searchParams.get('max_price');
    const city = searchParams.get('city');
    const bedrooms = searchParams.get('bedrooms');
    const sortBy = searchParams.get('sort_by') || 'created_at';
    const sortOrder = searchParams.get('sort_order') || 'DESC';
    const limit = parseInt(searchParams.get('limit') || '20');
    const offset = parseInt(searchParams.get('offset') || '0');

    // Construction de la requête SQL dynamique
    let query = `
      SELECT 
        p.*,
        CASE 
          WHEN p.transaction_type = 'rent' THEN CONCAT(p.price, '€/mois')
          ELSE CONCAT(p.price, '€')
        END as formatted_price
      FROM properties p 
      WHERE 1=1
    `;
    let params: any[] = [];
    let paramCount = 0;

    if (status) {
      paramCount++;
      query += ` AND p.status = $${paramCount}`;
      params.push(status);
    }

    if (type) {
      paramCount++;
      query += ` AND p.type = $${paramCount}`;
      params.push(type);
    }

    if (transactionType) {
      paramCount++;
      query += ` AND p.transaction_type = $${paramCount}`;
      params.push(transactionType);
    }

    if (minPrice) {
      paramCount++;
      query += ` AND p.price >= $${paramCount}`;
      params.push(parseInt(minPrice));
    }

    if (maxPrice) {
      paramCount++;
      query += ` AND p.price <= $${paramCount}`;
      params.push(parseInt(maxPrice));
    }

    if (city) {
      paramCount++;
      query += ` AND LOWER(p.location) LIKE LOWER($${paramCount})`;
      params.push(`%${city}%`);
    }

    if (bedrooms) {
      paramCount++;
      query += ` AND p.bedrooms = $${paramCount}`;
      params.push(parseInt(bedrooms));
    }

    if (search) {
      paramCount++;
      query += ` AND (LOWER(p.title) LIKE LOWER($${paramCount}) OR LOWER(p.description) LIKE LOWER($${paramCount}))`;
      params.push(`%${search}%`);
      paramCount--; // Réutiliser le même paramètre
    }

    query += ` ORDER BY p.${sortBy} ${sortOrder} LIMIT $${paramCount + 1} OFFSET $${paramCount + 2}`;
    params.push(limit, offset);

    const result = await sql(query, params);

    return NextResponse.json({
      data: result,
      limit,
      offset,
    });
  } catch (error) {
    console.error('Properties API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch properties' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      title,
      description,
      type,
      transaction_type,
      price,
      location,
      bedrooms,
      bathrooms,
    } = body;

    const result = await sql(
      `INSERT INTO properties (title, description, type, transaction_type, price, location, bedrooms, bathrooms, status, created_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, NOW())
       RETURNING *`,
      [
        title,
        description,
        type,
        transaction_type,
        price,
        location,
        bedrooms,
        bathrooms,
        'available',
      ]
    );

    return NextResponse.json(result[0], { status: 201 });
  } catch (error) {
    console.error('Properties API POST error:', error);
    return NextResponse.json(
      { error: 'Failed to create property' },
      { status: 500 }
    );
  }
}
