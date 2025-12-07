'use client';

import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  Search,
  MapPin,
  Home,
  Users,
  Award,
  ArrowRight,
  Star,
  Phone,
  CheckCircle,
  Building,
  Compass,
  Wrench,
  Lightbulb,
  Zap,
  Target,
  PenTool,
  Settings,
} from 'lucide-react';

export default function HomePage() {
  const stats = [
    { value: '200+', label: 'Projets réalisés' },
    { value: '15', label: "Ans d'expérience" },
    { value: '98%', label: 'Clients satisfaits' },
    { value: '25+', label: 'Architectes experts' },
  ];

  const services = [
    {
      icon: PenTool,
      title: 'Architecture Immobilière',
      description:
        "Conception architecturale sur-mesure avec notre équipe d'architectes expérimentés.",
      href: '/services#architecture',
    },
    {
      icon: Settings,
      title: 'Modélisation 3D',
      description:
        'Visualisation réaliste de vos projets grâce à notre technologie 3D avancée.',
      href: '/services#modelisation',
    },
    {
      icon: Home,
      title: 'Maisons Préfabriquées',
      description:
        'Maisons modulaires innovantes, écologiques et personnalisables selon vos besoins.',
      href: '/maisons-preconstruites',
    },
    {
      icon: Wrench,
      title: 'Construction Clé-en-Main',
      description:
        'Accompagnement complet de la conception à la livraison de votre projet.',
      href: '/services#construction',
    },
  ];

  const featuredProjects = [
    {
      id: 1,
      image:
        'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Villa Moderne Éco-Responsable',
      location: 'Neuilly-sur-Seine',
      type: 'Construction Neuve',
      surface: '180 m²',
      features: [
        'Architecture bioclimatique',
        'Panneaux solaires',
        'Domotique',
      ],
    },
    {
      id: 2,
      image:
        'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Maison Modulaire Design',
      location: 'Saint-Cloud',
      type: 'Maison Préfabriquée',
      surface: '120 m²',
      features: ['Modulable', 'Éco-matériaux', 'Livraison 6 mois'],
    },
    {
      id: 3,
      image:
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Extension Contemporaine',
      location: 'Boulogne-Billancourt',
      type: 'Rénovation & Extension',
      surface: '85 m²',
      features: [
        'Verrière design',
        'Terrasse suspendue',
        'Isolation renforcée',
      ],
    },
  ];

  const testimonials = [
    {
      name: 'Claire Lefevre',
      role: 'Propriétaire',
      content:
        'Build Millennium Group a transformé notre rêve en réalité. Une équipe professionnelle et créative !',
      rating: 5,
    },
    {
      name: 'Marc Dubois',
      role: 'Investisseur',
      content:
        'Leur expertise en maisons préfabriquées nous a fait économiser du temps et de l\'argent. Résultat parfait !',
      rating: 5,
    },
    {
      name: 'Sophie Moreau',
      role: 'Architecte',
      content:
        'Collaboration exceptionnelle sur notre projet d\'extension. Qualité et innovation au rendez-vous.',
      rating: 5,
    },
  ];

  const innovations = [
    {
      icon: Lightbulb,
      title: 'Innovation Technologique',
      description:
        'Intégration des dernières technologies : BIM, réalité virtuelle, domotique avancée.',
    },
    {
      icon: Target,
      title: 'Éco-Construction',
      description:
        'Matériaux durables, performance énergétique optimale, certifications environnementales.',
    },
    {
      icon: Zap,
      title: "Rapidité d'Exécution",
      description:
        'Méthodes de construction accélérées, préfabrication, délais maîtrisés.',
    },
    {
      icon: Compass,
      title: 'Sur-Mesure',
      description:
        'Chaque projet est unique, conçu selon vos besoins spécifiques et votre budget.',
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
              'url(https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Construisons ensemble
              <span className="block text-[#FF8C42]">l'habitat de demain</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Architecture innovante, construction moderne et solutions
              sur-mesure. Build Millennium Group transforme vos projets
              immobiliers en réalité avec expertise et créativité.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href="/services"
                className="bg-gradient-to-r from-[#FF8C42] to-[#FFA726] text-white px-8 py-4 rounded-xl font-semibold hover:from-[#FF7043] hover:to-[#FF9800] transition-all duration-300 shadow-lg"
              >
                Découvrir nos services
              </a>
              <a
                href="/maisons-preconstruites"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#1B2951] transition-colors"
              >
                Maisons préfabriquées
              </a>
              <a
                href="/contact"
                className="border-2 border-[#FF8C42] text-[#FF8C42] px-8 py-4 rounded-xl font-semibold hover:bg-[#FF8C42] hover:text-white transition-colors"
              >
                Demande de devis
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50 dark:bg-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#1B2951] dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2951] dark:text-white mb-4">
              Nos Services d'Excellence
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              De la conception architecturale à la construction clé-en-main,
              nous vous accompagnons dans tous vos projets immobiliers innovants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-[#1E1E1E] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-[#EAEAEA] dark:border-[#333333] group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#FF8C42] to-[#FFA726] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1B2951] dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <a
                    href={service.href}
                    className="text-[#FF8C42] dark:text-[#FFA726] font-medium flex items-center space-x-2 group-hover:translate-x-2 transition-transform"
                  >
                    <span>En savoir plus</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-16 bg-gray-50 dark:bg-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2951] dark:text-white mb-4">
              Innovation & Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Ce qui nous distingue dans le secteur de la construction moderne
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {innovations.map((innovation, index) => {
              const Icon = innovation.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-[#262626] p-6 rounded-2xl shadow-lg text-center border border-[#EAEAEA] dark:border-[#333333]"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#FF8C42] to-[#FFA726] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1B2951] dark:text-white mb-3">
                    {innovation.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {innovation.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2951] dark:text-white mb-4">
              Projets Réalisés
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Découvrez quelques-unes de nos réalisations d'exception
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-[#262626] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-[#FF8C42] to-[#FFA726] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1B2951] dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
                    <MapPin size={16} className="mr-2" />
                    <span>{project.location}</span>
                  </div>
                  <div className="text-lg font-bold text-[#1B2951] dark:text-white mb-3">
                    {project.surface}
                  </div>
                  <div className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                      >
                        <CheckCircle
                          size={14}
                          className="mr-2 text-[#FF8C42]"
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/projets"
              className="bg-gradient-to-r from-[#FF8C42] to-[#FFA726] text-white px-8 py-4 rounded-xl font-semibold hover:from-[#FF7043] hover:to-[#FF9800] transition-all duration-300 shadow-lg"
            >
              Voir tous nos projets
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50 dark:bg-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2951] dark:text-white mb-4">
              Témoignages Clients
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              La satisfaction de nos clients, notre plus belle récompense
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#1E1E1E] p-8 rounded-2xl shadow-lg border border-[#EAEAEA] dark:border-[#333333]"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-[#FF8C42] fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-[#1B2951] dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1B2951] to-[#2C3E50] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à donner vie à votre projet ?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Nos architectes et ingénieurs vous accompagnent de la conception à
            la réalisation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-[#FF8C42] to-[#FFA726] text-white px-8 py-4 rounded-xl font-semibold hover:from-[#FF7043] hover:to-[#FF9800] transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
            >
              <Phone size={20} />
              <span>Demande de devis gratuit</span>
            </a>
            <a
              href="/maisons-preconstruites"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#1B2951] transition-colors"
            >
              Découvrir nos maisons
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
