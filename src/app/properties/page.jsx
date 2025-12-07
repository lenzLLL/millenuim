"use client";

import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Search,
  MapPin,
  Bed,
  Bath,
  Ruler,
  Filter,
  Grid3X3,
  List,
  Heart,
  Phone,
  MessageCircle,
} from "lucide-react";

export default function PropertiesPage() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    search: "",
    type: "",
    transaction_type: "",
    min_price: "",
    max_price: "",
    city: "",
    bedrooms: "",
    sort_by: "created_at",
    sort_order: "DESC",
  });
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [pagination, setPagination] = useState({
    total: 0,
    limit: 12,
    offset: 0,
    pages: 0,
  });
  const [stats, setStats] = useState({
    total_properties: 0,
    avg_price: 0,
    min_price: 0,
    max_price: 0,
  });

  // Fetch properties from API
  const fetchProperties = async () => {
    setLoading(true);
    setError(null);

    try {
      const searchParams = new URLSearchParams();

      // Add filters to search params
      Object.entries(filters).forEach(([key, value]) => {
        if (value) {
          searchParams.append(key, value);
        }
      });

      searchParams.append("limit", pagination.limit.toString());
      searchParams.append("offset", pagination.offset.toString());

      const response = await fetch(
        `/api/properties?${searchParams.toString()}`,
      );

      if (!response.ok) {
        throw new Error(`Erreur ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error(
          data.error || "Erreur lors de la récupération des propriétés",
        );
      }

      setProperties(data.data);
      setPagination(data.pagination);
      setStats(data.stats);
    } catch (error) {
      console.error("Erreur lors de la récupération des propriétés:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchProperties();
  }, [filters, pagination.offset]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
    setPagination((prev) => ({
      ...prev,
      offset: 0,
    }));
  };

  const handleSearch = () => {
    fetchProperties();
  };

  const clearFilters = () => {
    setFilters({
      search: "",
      type: "",
      transaction_type: "",
      min_price: "",
      max_price: "",
      city: "",
      bedrooms: "",
      sort_by: "created_at",
      sort_order: "DESC",
    });
  };

  const handlePageChange = (newOffset) => {
    setPagination((prev) => ({
      ...prev,
      offset: newOffset,
    }));
  };

  const formatPrice = (price, transactionType) => {
    const numPrice = parseFloat(price);
    if (transactionType === "rent") {
      return `${numPrice.toLocaleString("fr-FR")} €/mois`;
    }
    return `${numPrice.toLocaleString("fr-FR")} €`;
  };

  const getFirstImage = (images) => {
    if (!images) return "/placeholder-property.jpg";
    try {
      const imageArray = JSON.parse(images);
      return imageArray.length > 0
        ? imageArray[0]
        : "/placeholder-property.jpg";
    } catch {
      return "/placeholder-property.jpg";
    }
  };

  const propertyTypes = [
    { value: "", label: "Tous les types" },
    { value: "appartement", label: "Appartement" },
    { value: "maison", label: "Maison" },
    { value: "studio", label: "Studio" },
    { value: "villa", label: "Villa" },
    { value: "terrain", label: "Terrain" },
    { value: "commerce", label: "Local commercial" },
  ];

  const transactionTypes = [
    { value: "", label: "Achat et Location" },
    { value: "sale", label: "Achat" },
    { value: "rent", label: "Location" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1600)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Catalogue Immobilier
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Découvrez notre sélection de {stats.total_properties} biens
              immobiliers
            </p>
          </div>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl p-6 max-w-4xl mx-auto shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Rechercher par lieu, titre..."
                  value={filters.search}
                  onChange={(e) => handleFilterChange("search", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-2">
                <select
                  value={filters.type}
                  onChange={(e) => handleFilterChange("type", e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-black"
                >
                  {propertyTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                <select
                  value={filters.transaction_type}
                  onChange={(e) =>
                    handleFilterChange("transaction_type", e.target.value)
                  }
                  className="px-4 py-3 border border-gray-300 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-black"
                >
                  {transactionTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                <button
                  onClick={handleSearch}
                  className="px-8 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
                >
                  <Search size={20} />
                  <span>Rechercher</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Controls & Filters */}
      <section className="py-6 bg-gray-50 dark:bg-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Results count */}
            <div className="text-[#111111] dark:text-white">
              <span className="text-lg font-semibold">
                {pagination.total} biens
              </span>
              <span className="text-gray-600 dark:text-gray-400 ml-2">
                trouvés {filters.search && `pour "${filters.search}"`}
              </span>
            </div>

            {/* Controls */}
            <div className="flex flex-wrap gap-4 items-center">
              {/* View mode toggle */}
              <div className="flex bg-white dark:bg-[#262626] rounded-lg p-1 border border-[#E7E8EC] dark:border-[#404040]">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    viewMode === "grid"
                      ? "bg-black dark:bg-white text-white dark:text-black"
                      : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                  }`}
                >
                  <Grid3X3 size={16} className="mr-2 inline" />
                  Grille
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    viewMode === "list"
                      ? "bg-black dark:bg-white text-white dark:text-black"
                      : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                  }`}
                >
                  <List size={16} className="mr-2 inline" />
                  Liste
                </button>
              </div>

              {/* Sort */}
              <select
                value={filters.sort_by}
                onChange={(e) => handleFilterChange("sort_by", e.target.value)}
                className="px-4 py-2 border border-[#E7E8EC] dark:border-[#404040] rounded-lg bg-white dark:bg-[#262626] text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
              >
                <option value="created_at">Plus récents</option>
                <option value="price">Prix croissant</option>
                <option value="area_sqm">Surface</option>
              </select>

              {/* Advanced filters toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2 ${
                  showFilters
                    ? "bg-black dark:bg-white text-white dark:text-black"
                    : "border border-[#E7E8EC] dark:border-[#404040] text-black dark:text-white hover:bg-gray-50 dark:hover:bg-[#333]"
                }`}
              >
                <Filter size={16} />
                <span>Filtres</span>
              </button>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-6 bg-white dark:bg-[#262626] rounded-xl p-6 border border-[#E7E8EC] dark:border-[#404040]">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <input
                  type="text"
                  placeholder="Ville"
                  value={filters.city}
                  onChange={(e) => handleFilterChange("city", e.target.value)}
                  className="px-4 py-2 border border-gray-300 dark:border-[#404040] rounded-lg bg-white dark:bg-[#1E1E1E] text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                />
                <input
                  type="number"
                  placeholder="Prix min"
                  value={filters.min_price}
                  onChange={(e) =>
                    handleFilterChange("min_price", e.target.value)
                  }
                  className="px-4 py-2 border border-gray-300 dark:border-[#404040] rounded-lg bg-white dark:bg-[#1E1E1E] text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                />
                <input
                  type="number"
                  placeholder="Prix max"
                  value={filters.max_price}
                  onChange={(e) =>
                    handleFilterChange("max_price", e.target.value)
                  }
                  className="px-4 py-2 border border-gray-300 dark:border-[#404040] rounded-lg bg-white dark:bg-[#1E1E1E] text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                />
                <select
                  value={filters.bedrooms}
                  onChange={(e) =>
                    handleFilterChange("bedrooms", e.target.value)
                  }
                  className="px-4 py-2 border border-gray-300 dark:border-[#404040] rounded-lg bg-white dark:bg-[#1E1E1E] text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                >
                  <option value="">Chambres</option>
                  <option value="1">1+ chambres</option>
                  <option value="2">2+ chambres</option>
                  <option value="3">3+ chambres</option>
                  <option value="4">4+ chambres</option>
                  <option value="5">5+ chambres</option>
                </select>
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 border border-gray-300 dark:border-[#404040] rounded-lg text-black dark:text-white hover:bg-gray-50 dark:hover:bg-[#333] transition-colors"
                >
                  Effacer
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Properties Grid/List */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black dark:border-white mx-auto"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Chargement des propriétés...
              </p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-600 dark:text-red-400 mb-4">
                Erreur: {error}
              </p>
              <button
                onClick={fetchProperties}
                className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                Réessayer
              </button>
            </div>
          ) : properties.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Aucune propriété trouvée
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                Effacer les filtres
              </button>
            </div>
          ) : (
            <>
              {/* Properties Grid */}
              <div
                className={`grid gap-6 ${
                  viewMode === "grid"
                    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    : "grid-cols-1"
                }`}
              >
                {properties.map((property) => (
                  <div
                    key={property.id}
                    className={`bg-white dark:bg-[#1E1E1E] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-[#EAEAEA] dark:border-[#333333] ${
                      viewMode === "list" ? "flex flex-col sm:flex-row" : ""
                    }`}
                  >
                    {/* Image */}
                    <div
                      className={`relative ${viewMode === "list" ? "sm:w-80 flex-shrink-0" : ""}`}
                    >
                      <img
                        src={getFirstImage(property.images)}
                        alt={property.title}
                        className={`w-full object-cover ${
                          viewMode === "list" ? "h-64 sm:h-full" : "h-48"
                        }`}
                      />
                      <div className="absolute top-4 left-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            property.transaction_type === "rent"
                              ? "bg-blue-500 text-white"
                              : "bg-[#FFD700] text-black"
                          }`}
                        >
                          {property.transaction_type === "rent"
                            ? "Location"
                            : "Vente"}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <button className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                          <Heart size={20} className="text-gray-600" />
                        </button>
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className={`p-6 ${viewMode === "list" ? "flex-1 flex flex-col justify-between" : ""}`}
                    >
                      <div>
                        <h3 className="text-xl font-semibold text-[#111111] dark:text-white mb-2 line-clamp-2">
                          {property.title}
                        </h3>

                        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
                          <MapPin size={16} className="mr-2 flex-shrink-0" />
                          <span className="text-sm">{property.location}</span>
                        </div>

                        <div className="text-2xl font-bold text-[#111111] dark:text-white mb-4">
                          {formatPrice(
                            property.price,
                            property.transaction_type,
                          )}
                        </div>

                        {/* Property details */}
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                          {property.bedrooms && (
                            <div className="flex items-center">
                              <Bed size={16} className="mr-1" />
                              <span>{property.bedrooms} ch.</span>
                            </div>
                          )}
                          {property.bathrooms && (
                            <div className="flex items-center">
                              <Bath size={16} className="mr-1" />
                              <span>{property.bathrooms} sdb</span>
                            </div>
                          )}
                          {property.area_sqm && (
                            <div className="flex items-center">
                              <Ruler size={16} className="mr-1" />
                              <span>{property.area_sqm} m²</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                        <a
                          href={`/properties/${property.id}`}
                          className="flex-1 bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors text-center"
                        >
                          Voir le détail
                        </a>
                        <div className="flex gap-2">
                          <button className="w-10 h-10 border border-gray-300 dark:border-[#404040] rounded-xl flex items-center justify-center hover:bg-gray-50 dark:hover:bg-[#333] transition-colors">
                            <Phone
                              size={16}
                              className="text-gray-600 dark:text-gray-400"
                            />
                          </button>
                          <button className="w-10 h-10 border border-gray-300 dark:border-[#404040] rounded-xl flex items-center justify-center hover:bg-gray-50 dark:hover:bg-[#333] transition-colors">
                            <MessageCircle
                              size={16}
                              className="text-gray-600 dark:text-gray-400"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {pagination.pages > 1 && (
                <div className="mt-12 flex justify-center">
                  <div className="flex space-x-2">
                    {pagination.offset > 0 && (
                      <button
                        onClick={() =>
                          handlePageChange(
                            Math.max(0, pagination.offset - pagination.limit),
                          )
                        }
                        className="px-4 py-2 border border-gray-300 dark:border-[#404040] rounded-lg hover:bg-gray-50 dark:hover:bg-[#333] transition-colors"
                      >
                        Précédent
                      </button>
                    )}

                    {Array.from(
                      { length: Math.min(5, pagination.pages) },
                      (_, i) => {
                        const currentPage = Math.floor(
                          pagination.offset / pagination.limit,
                        );
                        const pageNumber = i + Math.max(0, currentPage - 2);

                        if (pageNumber >= pagination.pages) return null;

                        return (
                          <button
                            key={pageNumber}
                            onClick={() =>
                              handlePageChange(pageNumber * pagination.limit)
                            }
                            className={`px-4 py-2 rounded-lg transition-colors ${
                              pageNumber === currentPage
                                ? "bg-black dark:bg-white text-white dark:text-black"
                                : "border border-gray-300 dark:border-[#404040] hover:bg-gray-50 dark:hover:bg-[#333]"
                            }`}
                          >
                            {pageNumber + 1}
                          </button>
                        );
                      },
                    )}

                    {pagination.offset + pagination.limit <
                      pagination.total && (
                      <button
                        onClick={() =>
                          handlePageChange(pagination.offset + pagination.limit)
                        }
                        className="px-4 py-2 border border-gray-300 dark:border-[#404040] rounded-lg hover:bg-gray-50 dark:hover:bg-[#333] transition-colors"
                      >
                        Suivant
                      </button>
                    )}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
