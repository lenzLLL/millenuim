import sql from "../../utils/sql";

// GET /api/properties/[id] - Récupérer une propriété spécifique
export async function GET(request, { params }) {
  try {
    const { id } = params;

    if (!id || isNaN(parseInt(id))) {
      return Response.json(
        {
          success: false,
          error: "ID de propriété invalide",
        },
        { status: 400 },
      );
    }

    const result = await sql`
      SELECT 
        p.*,
        CASE 
          WHEN p.transaction_type = 'rent' THEN CONCAT(p.price, '€/mois')
          ELSE CONCAT(p.price, '€')
        END as formatted_price,
        a.first_name as agent_first_name,
        a.last_name as agent_last_name,
        a.phone as agent_phone,
        a.email as agent_email,
        a.photo_url as agent_photo
      FROM properties p
      LEFT JOIN contact_requests cr ON p.id = cr.property_id
      LEFT JOIN agents a ON cr.agent_id = a.id
      WHERE p.id = ${parseInt(id)}
      LIMIT 1
    `;

    if (result.length === 0) {
      return Response.json(
        {
          success: false,
          error: "Propriété non trouvée",
        },
        { status: 404 },
      );
    }

    const property = result[0];

    // Récupérer les propriétés similaires
    const similarProperties = await sql`
      SELECT id, title, price, location, images, type, transaction_type,
        CASE 
          WHEN transaction_type = 'rent' THEN CONCAT(price, '€/mois')
          ELSE CONCAT(price, '€')
        END as formatted_price
      FROM properties 
      WHERE id != ${parseInt(id)} 
        AND type = ${property.type} 
        AND status = 'available'
        AND transaction_type = ${property.transaction_type}
      ORDER BY 
        CASE 
          WHEN city = ${property.city} THEN 0 
          ELSE 1 
        END,
        ABS(price - ${property.price})
      LIMIT 4
    `;

    return Response.json({
      success: true,
      data: {
        property,
        similar_properties: similarProperties,
      },
    });
  } catch (error) {
    console.error("Erreur lors de la récupération de la propriété:", error);
    return Response.json(
      {
        success: false,
        error: "Erreur lors de la récupération de la propriété",
      },
      { status: 500 },
    );
  }
}

// PUT /api/properties/[id] - Mettre à jour une propriété
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const data = await request.json();

    if (!id || isNaN(parseInt(id))) {
      return Response.json(
        {
          success: false,
          error: "ID de propriété invalide",
        },
        { status: 400 },
      );
    }

    // Vérifier que la propriété existe
    const existingProperty = await sql`
      SELECT id FROM properties WHERE id = ${parseInt(id)}
    `;

    if (existingProperty.length === 0) {
      return Response.json(
        {
          success: false,
          error: "Propriété non trouvée",
        },
        { status: 404 },
      );
    }

    // Construire la requête de mise à jour dynamiquement
    const updateFields = [];
    const updateValues = [];
    let paramCount = 0;

    const allowedFields = [
      "title",
      "description",
      "type",
      "status",
      "transaction_type",
      "price",
      "location",
      "address",
      "city",
      "postal_code",
      "area_sqm",
      "bedrooms",
      "bathrooms",
      "floor_level",
      "total_floors",
      "parking",
      "terrace",
      "garden",
      "elevator",
      "furnished",
      "energy_rating",
      "latitude",
      "longitude",
      "images",
      "features",
    ];

    for (const [key, value] of Object.entries(data)) {
      if (allowedFields.includes(key) && value !== undefined) {
        paramCount++;
        updateFields.push(`${key} = $${paramCount}`);
        // Traitement spécial pour les champs JSON
        if (key === "images" || key === "features") {
          updateValues.push(JSON.stringify(value));
        } else {
          updateValues.push(value);
        }
      }
    }

    if (updateFields.length === 0) {
      return Response.json(
        {
          success: false,
          error: "Aucun champ valide à mettre à jour",
        },
        { status: 400 },
      );
    }

    // Ajouter la mise à jour de updated_at
    paramCount++;
    updateFields.push(`updated_at = $${paramCount}`);
    updateValues.push(new Date().toISOString());

    // Ajouter l'ID pour la clause WHERE
    paramCount++;
    updateValues.push(parseInt(id));

    const updateQuery = `
      UPDATE properties 
      SET ${updateFields.join(", ")}
      WHERE id = $${paramCount}
      RETURNING *
    `;

    const result = await sql(updateQuery, updateValues);

    return Response.json({
      success: true,
      data: result[0],
      message: "Propriété mise à jour avec succès",
    });
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la propriété:", error);
    return Response.json(
      {
        success: false,
        error: "Erreur lors de la mise à jour de la propriété",
      },
      { status: 500 },
    );
  }
}

// DELETE /api/properties/[id] - Supprimer une propriété
export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    if (!id || isNaN(parseInt(id))) {
      return Response.json(
        {
          success: false,
          error: "ID de propriété invalide",
        },
        { status: 400 },
      );
    }

    // Vérifier que la propriété existe
    const existingProperty = await sql`
      SELECT id FROM properties WHERE id = ${parseInt(id)}
    `;

    if (existingProperty.length === 0) {
      return Response.json(
        {
          success: false,
          error: "Propriété non trouvée",
        },
        { status: 404 },
      );
    }

    // Supprimer la propriété (les contraintes de clé étrangère vont gérer les relations)
    await sql`
      DELETE FROM properties WHERE id = ${parseInt(id)}
    `;

    return Response.json({
      success: true,
      message: "Propriété supprimée avec succès",
    });
  } catch (error) {
    console.error("Erreur lors de la suppression de la propriété:", error);
    return Response.json(
      {
        success: false,
        error: "Erreur lors de la suppression de la propriété",
      },
      { status: 500 },
    );
  }
}
