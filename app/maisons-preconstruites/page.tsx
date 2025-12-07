'use client';

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Home,
  Clock,
  Leaf,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Phone,
  Euro,
  Users,
  Bath,
  Car,
  Mountain,
  Star,
  Award,
  Settings,
  Package,
} from "lucide-react";

export default function MaisonsPreconstruitesPage() {
  const houseModels = [
    {
      id: "eco-compact",
      name: "Éco-Compact 80",
      category: "Maison Écologique",
      price: "145 000",
      surface: "80 m²",
      rooms: 3,
      bedrooms: 2,
      bathrooms: 1,
      parking: true,
      deliveryTime: "4 mois",
      image:
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Construction bois écologique",
        "Isolation haute performance",
        "Panneaux solaires inclus",
        "Système de récupération d'eau",
        "VMC double flux",
        "Terrasse bois 15m²",
      ],
      description:
        "Maison compacte et écologique, parfaite pour un couple ou jeune famille. Construction bois avec matériaux durables.",
      included: [
        "Fondations et raccordements",
        "Structure et isolation",
        "Menuiseries PVC triple vitrage",
        "Électricité et plomberie",
        "Chauffage pompe à chaleur",
        "Finitions intérieures",
      ],
    },
    {
      id: "family-design",
      name: "Family Design 120",
      category: "Maison Familiale",
      price: "195 000",
      surface: "120 m²",
      rooms: 5,
      bedrooms: 3,
      bathrooms: 2,
      parking: true,
      deliveryTime: "5 mois",
      image:
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Architecture moderne",
        "Grande baie vitrée salon",
        "Cuisine américaine équipée",
        "Suite parentale avec dressing",
        "Garage intégré",
        "Terrasse couverte 25m²",
      ],
      description:
        "Maison familiale moderne avec des espaces de vie généreux et une architecture contemporaine.",
      included: [
        "Fondations et raccordements",
        "Structure béton cellulaire",
        "Menuiseries alu avec volets",
        "Équipements sanitaires complets",
        "Cuisine équipée moderne",
        "Carrelage et parquet",
      ],
    },
    {
      id: "villa-premium",
      name: "Villa Premium 180",
      category: "Maison de Prestige",
      price: "285 000",
      surface: "180 m²",
      rooms: 7,
      bedrooms: 4,
      bathrooms: 3,
      parking: true,
      deliveryTime: "6 mois",
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Architecture bioclimatique",
        "Piscine prête à installer",
        "Domotique intégrée",
        "Cave à vin",
        "Bureau indépendant",
        "Terrasse panoramique 40m²",
      ],
      description:
        "Villa haut de gamme avec finitions premium, domotique et équipements de luxe pour un confort maximal.",
      included: [
        "Fondations spéciales et VRD",
        "Structure haute qualité",
        "Menuiseries bois-alu premium",
        "Domotique complète",
        "Équipements haut de gamme",
        "Aménagement paysager",
      ],
    },
    {
      id: "studio-modulaire",
      name: "Studio Modulaire 35",
      category: "Module Indépendant",
      price: "65 000",
      surface: "35 m²",
      rooms: 2,
      bedrooms: 1,
      bathrooms: 1,
      parking: false,
      deliveryTime: "2 mois",
      image:
        "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Construction modulaire",
        "Facilement déplaçable",
        "Idéal résidence secondaire",
        "Équipement compact optimisé",
        "Bardage bois naturel",
        "Terrasse amovible 10m²",
      ],
      description:
        "Module compact et mobile, parfait pour résidence secondaire, bureau indépendant ou location saisonnière.",
      included: [
        "Structure bois préfabriquée",
        "Isolation complète",
        "Équipements intégrés",
        "Électricité et plomberie",
        "Mobilier sur-mesure",
        "Transport et montage",
      ],
    },
  ];

  const advantages = [
    {
      icon: Clock,
      title: "Délais Maîtrisés",
      description:
        "Construction en atelier et assemblage rapide sur site. Livraison en 2 à 6 mois selon le modèle.",
    },
    {
      icon: Euro,
      title: "Prix Transparents",
      description:
        "Prix fixes sans surprise, incluant la plupart des équipements. Financement facilité avec nos partenaires.",
    },
    {
      icon: Leaf,
      title: "Éco-Responsable",
      description:
        "Matériaux durables, performance énergétique optimale, certifications environnementales.",
    },
    {
      icon: Shield,
      title: "Garantie Étendue",
      description:
        "Garantie constructeur 10 ans, assistance technique et service après-vente premium.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Choix du Modèle",
      description:
        "Sélection du modèle de base et définition de vos besoins spécifiques",
    },
    {
      step: "02",
      title: "Personnalisation",
      description:
        "Adaptation des plans, choix des finitions et options complémentaires",
    },
    {
      step: "03",
      title: "Fabrication",
      description: "Construction en atelier avec contrôles qualité permanents",
    },
    {
      step: "04",
      title: "Livraison",
      description:
        "Transport et assemblage sur votre terrain, finitions et mise en service",
    },
  ];

  const customizations = [
    {
      icon: Settings,
      title: "Plans Modifiables",
      description: "Adaptation des plans selon votre terrain et vos besoins",
    },
    {
      icon: Package,
      title: "Options Premium",
      description:
        "Large gamme d'options : piscine, garage, véranda, domotique",
    },
    {
      icon: Award,
      title: "Finitions au Choix",
      description: "Sélection personnalisée des matériaux et équipements",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1B2951] to-[#2C3E50] text-white py-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Maisons Préconstruites
            <span className="block text-[#FF8C42]">
              Innovantes & Écologiques
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Découvrez nos modèles de maisons modulaires, conçues pour allier
            performance énergétique, design contemporain et délais de
            construction optimisés
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#modeles"
              className="bg-gradient-to-r from-[#FF8C42] to-[#FFA726] text-white px-8 py-4 rounded-xl font-semibold hover:from-[#FF7043] hover:to-[#FF9800] transition-all duration-300 shadow-lg"
            >
              Découvrir nos modèles
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#1B2951] transition-colors"
            >
              Demander un devis
            </a>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2951] dark:text-white mb-4">
              Les Avantages de nos Maisons Préfabriquées
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Innovation, qualité et rapidité pour votre projet de construction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-[#1E1E1E] p-6 rounded-2xl shadow-lg text-center border border-[#EAEAEA] dark:border-[#333333] hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#FF8C42] to-[#FFA726] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1B2951] dark:text-white mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modèles de maisons */}
      <section id="modeles" className="py-16 bg-gray-50 dark:bg-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2951] dark:text-white mb-4">
              Nos Modèles de Maisons
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Une gamme complète adaptée à tous vos besoins et budgets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {houseModels.map((house) => (
              <div
                key={house.id}
                className="bg-white dark:bg-[#262626] rounded-2xl shadow-lg overflow-hidden border border-[#EAEAEA] dark:border-[#333333] hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={house.image}
                    alt={house.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-[#FF8C42] to-[#FFA726] text-white px-3 py-2 rounded-full text-sm font-semibold">
                      {house.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white dark:bg-[#1E1E1E] px-3 py-2 rounded-full">
                    <span className="text-[#1B2951] dark:text-white font-bold text-sm">
                      À partir de {house.price}€
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-[#1B2951] dark:text-white">
                      {house.name}
                    </h3>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Livraison
                      </div>
                      <div className="text-[#FF8C42] font-semibold">
                        {house.deliveryTime}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {house.description}
                  </p>

                  {/* Caractéristiques */}
                  <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 dark:bg-[#1E1E1E] rounded-xl">
                    <div className="flex items-center space-x-2">
                      <Home size={16} className="text-[#FF8C42]" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {house.surface}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users size={16} className="text-[#FF8C42]" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {house.rooms} pièces
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mountain size={16} className="text-[#FF8C42]" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {house.bedrooms} chambres
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Bath size={16} className="text-[#FF8C42]" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {house.bathrooms} SDB
                      </span>
                    </div>
                  </div>

                  {/* Features principales */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-[#1B2951] dark:text-white mb-3">
                      Caractéristiques principales :
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {house.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle
                            size={14}
                            className="text-[#FF8C42] flex-shrink-0"
                          />
                          <span className="text-gray-600 dark:text-gray-400 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="/contact"
                      className="flex-1 bg-gradient-to-r from-[#FF8C42] to-[#FFA726] text-white px-4 py-3 rounded-xl font-semibold hover:from-[#FF7043] hover:to-[#FF9800] transition-all duration-300 text-center"
                    >
                      Demander un devis
                    </a>
                    <button className="border-2 border-[#1B2951] text-[#1B2951] dark:border-white dark:text-white px-4 py-3 rounded-xl font-semibold hover:bg-[#1B2951] hover:text-white dark:hover:bg-white dark:hover:text-[#1B2951] transition-colors">
                      Voir les détails
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus de commande */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2951] dark:text-white mb-4">
              Processus de Commande
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              De la conception à la livraison en 4 étapes simples
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#FF8C42] to-[#FFA726] rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-xl">
                      {step.step}
                    </span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 dark:bg-gray-600 -z-10"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-[#1B2951] dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personnalisation */}
      <section className="py-16 bg-gray-50 dark:bg-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2951] dark:text-white mb-4">
              Personnalisation & Options
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Adaptez votre maison selon vos goûts et besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {customizations.map((custom, index) => {
              const Icon = custom.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-[#262626] p-6 rounded-2xl shadow-lg text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#FF8C42] to-[#FFA726] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1B2951] dark:text-white mb-3">
                    {custom.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {custom.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-white dark:bg-[#262626] p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#1B2951] dark:text-white mb-6 text-center">
              Options Disponibles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-[#1B2951] dark:text-white">
                  Équipements
                </h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle size={14} className="text-[#FF8C42] mr-2" />
                    Domotique complète
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={14} className="text-[#FF8C42] mr-2" />
                    Panneaux solaires
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={14} className="text-[#FF8C42] mr-2" />
                    Pompe à chaleur
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={14} className="text-[#FF8C42] mr-2" />
                    VMC double flux
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-[#1B2951] dark:text-white">
                  Extensions
                </h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle size={14} className="text-[#FF8C42] mr-2" />
                    Garage intégré/attenant
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={14} className="text-[#FF8C42] mr-2" />
                    Véranda bioclimatique
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={14} className="text-[#FF8C42] mr-2" />
                    Piscine prête à poser
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={14} className="text-[#FF8C42] mr-2" />
                    Abri de jardin
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-[#1B2951] dark:text-white">
                  Finitions
                </h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle size={14} className="text-[#FF8C42] mr-2" />
                    Choix des revêtements
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={14} className="text-[#FF8C42] mr-2" />
                    Cuisine sur-mesure
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={14} className="text-[#FF8C42] mr-2" />
                    Salle de bain premium
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={14} className="text-[#FF8C42] mr-2" />
                    Dressing intégré
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1B2951] to-[#2C3E50] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à Concrétiser Votre Projet ?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Découvrez en détail nos modèles et obtenez un devis personnalisé
            pour votre future maison
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-[#FF8C42] to-[#FFA726] text-white px-8 py-4 rounded-xl font-semibold hover:from-[#FF7043] hover:to-[#FF9800] transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
            >
              <Phone size={20} />
              <span>Demander un devis</span>
            </a>
            <a
              href="/projets"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#1B2951] transition-colors"
            >
              Voir nos réalisations
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
