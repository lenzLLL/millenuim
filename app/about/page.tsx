'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  Users,
  Target,
  Heart,
  Shield,
  Award,
  Calendar,
  CheckCircle,
  Building,
  TrendingUp,
  Eye,
} from 'lucide-react';

export default function AboutPage() {
  const founders = [
    {
      name: 'Jean-Pierre Millennium',
      role: 'PDG & Fondateur',
      image:
        'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      description:
        "Avec plus de 20 ans d'expérience dans l'immobilier, Jean-Pierre a fondé Build Millennium Group avec la vision de révolutionner le secteur immobilier français.",
    },
    {
      name: 'Marie Dubois-Martin',
      role: 'Directrice Générale',
      image:
        'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      description:
        'Diplômée d\'HEC Paris, Marie apporte son expertise en gestion et développement d\'entreprise pour faire grandir notre groupe.',
    },
    {
      name: 'Thomas Leroy',
      role: 'Directeur Technique',
      image:
        'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
      description:
        'Expert en construction et rénovation, Thomas supervise tous nos projets de développement immobilier avec un œil sur la qualité et l\'innovation.',
    },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description:
        'Nous sommes passionnés par l\'immobilier et mettons cette passion au service de nos clients.',
    },
    {
      icon: Shield,
      title: 'Confiance',
      description:
        'La transparence et l\'honnêteté sont au cœur de toutes nos relations avec nos clients.',
    },
    {
      icon: Users,
      title: 'Accompagnement',
      description:
        'Nous accompagnons nos clients à chaque étape de leur projet immobilier.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description:
        'Nous visons l\'excellence dans tous nos services et dépassons les attentes.',
    },
  ];

  const timeline = [
    {
      year: '2009',
      title: 'Création de Build Millennium Group',
      description:
        'Fondation de l\'entreprise avec une équipe de 3 personnes à Paris.',
    },
    {
      year: '2012',
      title: 'Première expansion',
      description:
        'Ouverture de notre deuxième agence à Neuilly-sur-Seine et recrutement de 10 agents.',
    },
    {
      year: '2015',
      title: 'Diversification des services',
      description:
        'Lancement de nos services de gestion locative et conseil en investissement.',
    },
    {
      year: '2018',
      title: 'Innovation digitale',
      description:
        'Développement de notre plateforme en ligne et outils de visite virtuelle.',
    },
    {
      year: '2021',
      title: 'Expansion régionale',
      description: 'Ouverture d\'agences à Lyon, Marseille et Bordeaux.',
    },
    {
      year: '2024',
      title: 'Leadership national',
      description:
        'Plus de 50 agents experts et 2500+ biens vendus. Référence nationale en immobilier.',
    },
  ];

  const certifications = [
    {
      name: 'FNAIM',
      description: 'Membre de la Fédération Nationale de l\'Immobilier',
      logo: '/placeholder-logo.png',
    },
    {
      name: 'ISO 9001',
      description: 'Certification qualité pour nos services',
      logo: '/placeholder-logo.png',
    },
    {
      name: 'SNPI',
      description: 'Syndicat National des Professionnels Immobiliers',
      logo: '/placeholder-logo.png',
    },
    {
      name: 'UNIS',
      description: 'Union des Syndicats de l\'Immobilier',
      logo: '/placeholder-logo.png',
    },
  ];

  const expertise = [
    {
      icon: Building,
      title: 'Immobilier résidentiel',
      description:
        'Spécialistes de l\'achat, vente et location d\'appartements et maisons',
    },
    {
      icon: TrendingUp,
      title: 'Investissement locatif',
      description: 'Conseil en investissement et optimisation de rentabilité',
    },
    {
      icon: Users,
      title: 'Gestion patrimoniale',
      description:
        'Accompagnement dans la constitution et gestion de votre patrimoine',
    },
    {
      icon: Award,
      title: 'Immobilier de prestige',
      description: 'Expertise dans les biens d\'exception et propriétés de luxe',
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
              'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            À propos de
            <span className="block text-[#FF8C42]">Build Millennium Group</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Depuis 15 ans, nous accompagnons nos clients dans leurs projets
            immobiliers avec passion, expertise et professionnalisme.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Mission */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF8C42] to-[#FFA726] rounded-full flex items-center justify-center mx-auto mb-6">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1B2951] dark:text-white mb-4">
                Notre Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Accompagner chaque client dans la réalisation de son projet
                immobilier en offrant un service personnalisé, transparent et de
                qualité exceptionnelle.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF8C42] to-[#FFA726] rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1B2951] dark:text-white mb-4">
                Notre Vision
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Devenir la référence nationale en immobilier en alliant
                innovation technologique et expertise humaine pour créer des
                expériences exceptionnelles.
              </p>
            </div>

            {/* Values */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF8C42] to-[#FFA726] rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1B2951] dark:text-white mb-4">
                Nos Valeurs
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Confiance, passion, excellence et proximité guident chacune de
                nos actions pour bâtir des relations durables avec nos clients.
              </p>
            </div>
          </div>

          {/* Values Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-[#1E1E1E] p-6 rounded-2xl shadow-lg border border-[#EAEAEA] dark:border-[#333333] text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#FF8C42] to-[#FFA726] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold text-[#1B2951] dark:text-white mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50 dark:bg-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2951] dark:text-white mb-4">
              Notre Histoire
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              15 années d'innovation, de croissance et d'excellence dans
              l'immobilier français
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 h-full w-0.5 bg-gradient-to-b from-[#FF8C42] to-[#FFA726]"></div>

              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-[#FF8C42] to-[#FFA726] rounded-full flex items-center justify-center z-10">
                    <span className="text-white font-bold text-sm">
                      {item.year.slice(2)}
                    </span>
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}
                  >
                    <div className="bg-white dark:bg-[#262626] p-6 rounded-2xl shadow-lg">
                      <div className="text-[#FF8C42] font-bold text-lg mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold text-[#1B2951] dark:text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2951] dark:text-white mb-4">
              Notre Équipe Dirigeante
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Des leaders expérimentés au service de votre réussite
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#1E1E1E] rounded-2xl overflow-hidden shadow-lg border border-[#EAEAEA] dark:border-[#333333] text-center"
              >
                <div className="p-8">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-[#1B2951] dark:text-white mb-2">
                    {founder.name}
                  </h3>
                  <div className="text-[#FF8C42] font-medium mb-4">
                    {founder.role}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {founder.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-gray-50 dark:bg-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2951] dark:text-white mb-4">
              Notre Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Des domaines de compétence étendus pour tous vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-[#262626] p-6 rounded-2xl shadow-lg text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#FF8C42] to-[#FFA726] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1B2951] dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2951] dark:text-white mb-4">
              Certifications & Partenaires
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Reconnus par les institutions du secteur immobilier
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#1E1E1E] p-6 rounded-2xl shadow-lg border border-[#EAEAEA] dark:border-[#333333] text-center"
              >
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Award size={32} className="text-[#FF8C42]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1B2951] dark:text-white mb-2">
                  {cert.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1B2951] to-[#2C3E50] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Rejoignez notre communauté de clients satisfaits
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Découvrez pourquoi plus de 2500 clients nous font confiance pour
            leurs projets immobiliers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/properties"
              className="bg-gradient-to-r from-[#FF8C42] to-[#FFA726] text-white px-8 py-4 rounded-xl font-semibold hover:from-[#FF7043] hover:to-[#FF9800] transition-all duration-300 shadow-lg"
            >
              Voir nos biens
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#1B2951] transition-colors"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
