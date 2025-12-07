'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  MapPin,
  Home,
  Users,
  Award,
  Calendar,
  ArrowRight,
  Filter,
  ChevronDown,
  Building,
  Zap,
  Leaf,
  Eye,
} from 'lucide-react';

export default function ProjetsPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedView, setSelectedView] = useState('grid');

  const projects = [
    {
      id: 1,
      title: 'Résidence Montfort',
      location: 'Paris 15e',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'Residential',
      category: 'Maison Individuelle',
      surface: '250 m²',
      bedrooms: 5,
      bathrooms: 3,
      year: '2023',
      status: 'Terminé',
      description: 'Maison moderne avec terrasse et garage, finitions premium',
      features: ['Domotique intégrée', 'Panneaux solaires', 'Piscine', 'Garage double'],
    },
    {
      id: 2,
      title: 'Villa Côte d\'Azur',
      location: 'Cannes',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'Residential',
      category: 'Villa de Prestige',
      surface: '350 m²',
      bedrooms: 6,
      bathrooms: 4,
      year: '2022',
      status: 'Terminé',
      description: 'Villa de prestige avec vue panoramique sur la mer',
      features: ['Vue mer', 'Piscine à débordement', 'Terrasses spacieuses', 'Sauna'],
    },
    {
      id: 3,
      title: 'Immeuble Résidentiel Downtown',
      location: 'Grenoble',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'Collectif',
      category: 'Immeuble',
      surface: '2500 m²',
      bedrooms: 12,
      bathrooms: 12,
      year: '2024',
      status: 'En cours',
      description: 'Immeuble résidentiel avec commerces en rez-de-chaussée',
      features: ['Parking souterrain', 'Espaces verts', 'Ascenseurs modernes', 'Chaufferie biomasse'],
    },
    {
      id: 4,
      title: 'Studio Modulaire',
      location: 'Lyon',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'Residential',
      category: 'Studio',
      surface: '35 m²',
      bedrooms: 1,
      bathrooms: 1,
      year: '2023',
      status: 'Terminé',
      description: 'Studio modulaire écologique et fonctionnel',
      features: ['Construction bois', 'Isolation haute performance', 'Terrasse amovible', 'Efficace énergétiquement'],
    },
    {
      id: 5,
      title: 'Rénovation Haussmannien',
      location: 'Paris 6e',
      image: 'https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'Rénovation',
      category: 'Appartement',
      surface: '180 m²',
      bedrooms: 4,
      bathrooms: 2,
      year: '2023',
      status: 'Terminé',
      description: 'Rénovation complète d\'un appartement haussmannien avec respect des codes',
      features: ['Parquets originaux restaurés', 'Cuisine équipée', 'Salle de bain moderne', 'Moulures conservées'],
    },
    {
      id: 6,
      title: 'Extension Maison de Campagne',
      location: 'Normandie',
      image: 'https://images.pexels.com/photos/1571450/pexels-photo-1571450.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'Rénovation',
      category: 'Maison',
      surface: '150 m² ajoutés',
      bedrooms: 3,
      bathrooms: 2,
      year: '2023',
      status: 'Terminé',
      description: 'Extension moderne intégrée à une maison existante',
      features: ['Baies vitrées panoramiques', 'Chauffage au sol', 'Isolation renforcée', 'Terrasse bois'],
    },
  ];

  const categories = [
    { name: 'Tous', value: 'all' },
    { name: 'Maison Individuelle', value: 'Maison Individuelle' },
    { name: 'Villa de Prestige', value: 'Villa de Prestige' },
    { name: 'Immeuble', value: 'Immeuble' },
    { name: 'Rénovation', value: 'Rénovation' },
    { name: 'Studio', value: 'Studio' },
  ];

  const filteredProjects = selectedFilter === 'all'
    ? projects
    : projects.filter(p => p.category === selectedFilter);

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1B2951] to-[#2C3E50] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Nos Réalisations
            <span className="block text-[#FF8C42]">
              Projets & Référence
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Découvrez nos projets résidentiels et commerciaux réalisés avec excellence
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-gray-50 dark:bg-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedFilter(cat.value)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                    selectedFilter === cat.value
                      ? 'bg-gradient-to-r from-[#FF8C42] to-[#FFA726] text-white shadow-lg'
                      : 'bg-white dark:bg-[#262626] text-[#1B2951] dark:text-white border border-[#E7E8EC] dark:border-[#333333] hover:border-[#FF8C42]'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-[#1B2951] dark:text-white">Affichage:</span>
              <button
                onClick={() => setSelectedView('grid')}
                className={`p-2 rounded ${selectedView === 'grid' ? 'bg-[#FF8C42] text-white' : 'bg-white dark:bg-[#262626] text-[#1B2951] dark:text-white'}`}
              >
                ⊞
              </button>
              <button
                onClick={() => setSelectedView('list')}
                className={`p-2 rounded ${selectedView === 'list' ? 'bg-[#FF8C42] text-white' : 'bg-white dark:bg-[#262626] text-[#1B2951] dark:text-white'}`}
              >
                ≡
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid/List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {selectedView === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-lg overflow-hidden border border-[#EAEAEA] dark:border-[#333333] hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${
                        project.status === 'Terminé' 
                          ? 'bg-gradient-to-r from-[#FF8C42] to-[#FFA726]'
                          : 'bg-blue-500'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="text-xs font-semibold text-[#FF8C42] uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#1B2951] dark:text-white mb-2">
                      {project.title}
                    </h3>

                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                      <MapPin size={16} className="mr-2" />
                      <span className="text-sm">{project.location}</span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3 mb-6 pb-6 border-b border-[#EAEAEA] dark:border-[#333333]">
                      <div>
                        <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">Surface</div>
                        <div className="text-sm font-bold text-[#1B2951] dark:text-white">{project.surface}</div>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">Année</div>
                        <div className="text-sm font-bold text-[#1B2951] dark:text-white">{project.year}</div>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">Chambres</div>
                        <div className="text-sm font-bold text-[#1B2951] dark:text-white">{project.bedrooms}</div>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">Salles de bain</div>
                        <div className="text-sm font-bold text-[#1B2951] dark:text-white">{project.bathrooms}</div>
                      </div>
                    </div>

                    {/* CTA */}
                    <button className="w-full bg-gradient-to-r from-[#FF8C42] to-[#FFA726] text-white py-3 rounded-xl font-semibold hover:from-[#FF7043] hover:to-[#FF9800] transition-all duration-300 flex items-center justify-center space-x-2">
                      <span>Voir plus</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-lg overflow-hidden border border-[#EAEAEA] dark:border-[#333333] hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row"
                >
                  {/* Image */}
                  <div className="md:w-1/3 h-64 md:h-auto overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:w-2/3 flex flex-col justify-between">
                    <div>
                      <div className="mb-3 flex items-center justify-between">
                        <span className="text-xs font-semibold text-[#FF8C42] uppercase tracking-wider">
                          {project.category}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                          project.status === 'Terminé' 
                            ? 'bg-gradient-to-r from-[#FF8C42] to-[#FFA726]'
                            : 'bg-blue-500'
                        }`}>
                          {project.status}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-[#1B2951] dark:text-white mb-2">
                        {project.title}
                      </h3>

                      <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                        <MapPin size={16} className="mr-2" />
                        <span>{project.location}</span>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {project.description}
                      </p>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-4 gap-4 mb-6">
                        <div>
                          <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">Surface</div>
                          <div className="text-sm font-bold text-[#1B2951] dark:text-white">{project.surface}</div>
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">Chambres</div>
                          <div className="text-sm font-bold text-[#1B2951] dark:text-white">{project.bedrooms}</div>
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">Salles de bain</div>
                          <div className="text-sm font-bold text-[#1B2951] dark:text-white">{project.bathrooms}</div>
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">Année</div>
                          <div className="text-sm font-bold text-[#1B2951] dark:text-white">{project.year}</div>
                        </div>
                      </div>
                    </div>

                    <button className="bg-gradient-to-r from-[#FF8C42] to-[#FFA726] text-white py-3 rounded-xl font-semibold hover:from-[#FF7043] hover:to-[#FF9800] transition-all duration-300 flex items-center justify-center space-x-2 w-full md:w-auto">
                      <span>Découvrir le projet</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Aucun projet trouvé dans cette catégorie
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1B2951] to-[#2C3E50] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à Démarrer Votre Projet ?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Découvrez comment nous pouvons concrétiser votre vision architecturale
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-[#FF8C42] to-[#FFA726] text-white px-8 py-4 rounded-xl font-semibold hover:from-[#FF7043] hover:to-[#FF9800] transition-all duration-300 shadow-lg"
            >
              Demander un devis
            </a>
            <a
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#1B2951] transition-colors"
            >
              Voir nos services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
