'use client';

import { useEffect, useState } from 'react';

interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  formatted_price: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
}

export default function PropertiesPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('/api/properties?limit=20');
        const data = await response.json();
        setProperties(data.data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) return <div>Chargement...</div>;

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Propriétés</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold mb-2">{property.title}</h2>
            <p className="text-gray-600 mb-2">{property.location}</p>
            <p className="text-2xl font-bold text-green-600 mb-4">{property.formatted_price}</p>
            <div className="flex justify-between text-sm text-gray-600">
              <span>{property.bedrooms} chambre(s)</span>
              <span>{property.bathrooms} salle(s) de bain</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
