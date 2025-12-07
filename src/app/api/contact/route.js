import sql from "../utils/sql";

// GET /api/contact - Récupérer les demandes de contact
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const status = searchParams.get("status");
    const limit = parseInt(searchParams.get("limit") || "50");
    const offset = parseInt(searchParams.get("offset") || "0");

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
    let params = [];
    let paramCount = 0;

    if (status) {
      paramCount++;
      query += ` WHERE cr.status = $${paramCount}`;
      params.push(status);
    }

    query += ` ORDER BY cr.created_at DESC`;

    // Pagination
    paramCount++;
    query += ` LIMIT $${paramCount}`;
    params.push(limit);

    paramCount++;
    query += ` OFFSET $${paramCount}`;
    params.push(offset);

    const contacts = await sql(query, params);

    // Count total
    let countQuery = "SELECT COUNT(*) as total FROM contact_requests";
    let countParams = [];

    if (status) {
      countQuery += " WHERE status = $1";
      countParams.push(status);
    }

    const [{ total }] = await sql(countQuery, countParams);

    return Response.json({
      success: true,
      data: contacts,
      pagination: {
        total: parseInt(total),
        limit,
        offset,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des demandes de contact:",
      error,
    );
    return Response.json(
      {
        success: false,
        error: "Erreur lors de la récupération des demandes de contact",
      },
      { status: 500 },
    );
  }
}

// POST /api/contact - Créer une nouvelle demande de contact
export async function POST(request) {
  try {
    const data = await request.json();

    // Validation des champs requis
    const requiredFields = [
      "first_name",
      "last_name",
      "email",
      "subject",
      "message",
    ];
    for (const field of requiredFields) {
      if (!data[field]) {
        return Response.json(
          {
            success: false,
            error: `Le champ ${field} est requis`,
          },
          { status: 400 },
        );
      }
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return Response.json(
        {
          success: false,
          error: "Format d'email invalide",
        },
        { status: 400 },
      );
    }

    const result = await sql`
      INSERT INTO contact_requests (
        first_name, last_name, email, phone, subject, 
        property_type, budget_range, message, property_id
      ) VALUES (
        ${data.first_name}, 
        ${data.last_name}, 
        ${data.email}, 
        ${data.phone || null}, 
        ${data.subject},
        ${data.property_type || null}, 
        ${data.budget_range || null}, 
        ${data.message}, 
        ${data.property_id || null}
      )
      RETURNING *
    `;

    return Response.json(
      {
        success: true,
        data: result[0],
        message: "Demande de contact enregistrée avec succès",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error(
      "Erreur lors de la création de la demande de contact:",
      error,
    );
    return Response.json(
      {
        success: false,
        error: "Erreur lors de la création de la demande de contact",
      },
      { status: 500 },
    );
  }
}
