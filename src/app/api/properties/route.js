import sql from "../utils/sql";

// GET /api/properties - Liste et filtre les propriétés
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    // Paramètres de recherche
    const search = searchParams.get("search");
    const type = searchParams.get("type");
    const transactionType = searchParams.get("transaction_type");
    const status = searchParams.get("status") || "available";
    const minPrice = searchParams.get("min_price");
    const maxPrice = searchParams.get("max_price");
    const city = searchParams.get("city");
    const bedrooms = searchParams.get("bedrooms");
    const sortBy = searchParams.get("sort_by") || "created_at";
    const sortOrder = searchParams.get("sort_order") || "DESC";
    const limit = parseInt(searchParams.get("limit") || "20");
    const offset = parseInt(searchParams.get("offset") || "0");

    // Construction de la requête SQL dynamique
    let query = `
      SELECT 
        p.*,
        CASE 
          WHEN p.transaction_type = 'rent' THEN CONCAT(p.price, '€/mois')
          ELSE CONCAT(p.price, '€')
        END as formatted_price
      FROM properties p 
      WHERE p.status = $1
    `;
    let params = [status];
    let paramCount = 1;

    // Filtres dynamiques
    if (search) {
      paramCount++;
      query += ` AND (LOWER(p.title) LIKE LOWER($${paramCount}) OR LOWER(p.location) LIKE LOWER($${paramCount}) OR LOWER(p.description) LIKE LOWER($${paramCount}))`;
      params.push(`%${search}%`);
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

    if (city) {
      paramCount++;
      query += ` AND LOWER(p.city) LIKE LOWER($${paramCount})`;
      params.push(`%${city}%`);
    }

    if (minPrice) {
      paramCount++;
      query += ` AND p.price >= $${paramCount}`;
      params.push(parseFloat(minPrice));
    }

    if (maxPrice) {
      paramCount++;
      query += ` AND p.price <= $${paramCount}`;
      params.push(parseFloat(maxPrice));
    }

    if (bedrooms) {
      paramCount++;
      query += ` AND p.bedrooms >= $${paramCount}`;
      params.push(parseInt(bedrooms));
    }

    // Tri
    const validSortColumns = ["created_at", "price", "area_sqm", "title"];
    const validSortOrder = ["ASC", "DESC"];

    const safeSortBy = validSortColumns.includes(sortBy)
      ? sortBy
      : "created_at";
    const safeSortOrder = validSortOrder.includes(sortOrder.toUpperCase())
      ? sortOrder.toUpperCase()
      : "DESC";

    query += ` ORDER BY p.${safeSortBy} ${safeSortOrder}`;

    // Pagination
    paramCount++;
    query += ` LIMIT $${paramCount}`;
    params.push(limit);

    paramCount++;
    query += ` OFFSET $${paramCount}`;
    params.push(offset);

    // Exécution de la requête principale
    const properties = await sql(query, params);

    // Requête pour le total (sans pagination)
    let countQuery = `
      SELECT COUNT(*) as total 
      FROM properties p 
      WHERE p.status = $1
    `;
    let countParams = [status];
    let countParamNum = 1;

    // Réappliquer les filtres pour le count
    if (search) {
      countParamNum++;
      countQuery += ` AND (LOWER(p.title) LIKE LOWER($${countParamNum}) OR LOWER(p.location) LIKE LOWER($${countParamNum}) OR LOWER(p.description) LIKE LOWER($${countParamNum}))`;
      countParams.push(`%${search}%`);
    }

    if (type) {
      countParamNum++;
      countQuery += ` AND p.type = $${countParamNum}`;
      countParams.push(type);
    }

    if (transactionType) {
      countParamNum++;
      countQuery += ` AND p.transaction_type = $${countParamNum}`;
      countParams.push(transactionType);
    }

    if (city) {
      countParamNum++;
      countQuery += ` AND LOWER(p.city) LIKE LOWER($${countParamNum})`;
      countParams.push(`%${city}%`);
    }

    if (minPrice) {
      countParamNum++;
      countQuery += ` AND p.price >= $${countParamNum}`;
      countParams.push(parseFloat(minPrice));
    }

    if (maxPrice) {
      countParamNum++;
      countQuery += ` AND p.price <= $${countParamNum}`;
      countParams.push(parseFloat(maxPrice));
    }

    if (bedrooms) {
      countParamNum++;
      countQuery += ` AND p.bedrooms >= $${countParamNum}`;
      countParams.push(parseInt(bedrooms));
    }

    const [{ total }] = await sql(countQuery, countParams);

    // Statistiques rapides
    const statsQuery = `
      SELECT 
        COUNT(*) as total_properties,
        AVG(price) as avg_price,
        MIN(price) as min_price,
        MAX(price) as max_price
      FROM properties 
      WHERE status = $1
    `;
    const [stats] = await sql(statsQuery, [status]);

    return Response.json({
      success: true,
      data: properties,
      pagination: {
        total: parseInt(total),
        limit,
        offset,
        pages: Math.ceil(total / limit),
      },
      stats: {
        total_properties: parseInt(stats.total_properties),
        avg_price: parseFloat(stats.avg_price || 0),
        min_price: parseFloat(stats.min_price || 0),
        max_price: parseFloat(stats.max_price || 0),
      },
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des propriétés:", error);
    return Response.json(
      {
        success: false,
        error: "Erreur lors de la récupération des propriétés",
      },
      { status: 500 },
    );
  }
}

// POST /api/properties - Créer une nouvelle propriété
export async function POST(request) {
  try {
    const data = await request.json();

    // Validation des champs requis
    const requiredFields = [
      "title",
      "type",
      "transaction_type",
      "price",
      "location",
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

    const result = await sql`
      INSERT INTO properties (
        title, description, type, status, transaction_type, price, 
        location, address, city, postal_code, area_sqm, bedrooms, 
        bathrooms, floor_level, total_floors, parking, terrace, 
        garden, elevator, furnished, energy_rating, latitude, 
        longitude, images, features
      ) VALUES (
        ${data.title}, ${data.description || null}, ${data.type}, 
        ${data.status || "available"}, ${data.transaction_type}, ${data.price},
        ${data.location}, ${data.address || null}, ${data.city || null}, 
        ${data.postal_code || null}, ${data.area_sqm || null}, ${data.bedrooms || null},
        ${data.bathrooms || null}, ${data.floor_level || null}, ${data.total_floors || null}, 
        ${data.parking || false}, ${data.terrace || false}, ${data.garden || false}, 
        ${data.elevator || false}, ${data.furnished || false}, ${data.energy_rating || null}, 
        ${data.latitude || null}, ${data.longitude || null}, ${JSON.stringify(data.images) || null}, 
        ${JSON.stringify(data.features) || null}
      )
      RETURNING *
    `;

    return Response.json(
      {
        success: true,
        data: result[0],
        message: "Propriété créée avec succès",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Erreur lors de la création de la propriété:", error);
    return Response.json(
      {
        success: false,
        error: "Erreur lors de la création de la propriété",
      },
      { status: 500 },
    );
  }
}
