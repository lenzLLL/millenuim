import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  PenTool,
  Settings,
  Home,
  Wrench,
  Target,
  Calculator,
  Eye,
  ShoppingCart,
  Building,
  Compass,
  Lightbulb,
  Shield,
  CheckCircle,
  ArrowRight,
  Phone,
} from "lucide-react";

export default function ServicesPage() {
  const mainServices = [
    {
      id: "architecture",
      icon: PenTool,
      title: "Architecture Immobilière",
      description:
        "Conception architecturale complète avec notre équipe d'architectes DPLG expérimentés.",
      features: [
        "Étude de faisabilité architecturale",
        "Plans d'architecture détaillés",
        "Dossier de permis de construire",
        "Assistance maîtrise d'œuvre",
        "Rénovation et extension",
        "Mise aux normes et accessibilité",
      ],
      process: [
        "Analyse du terrain et contraintes",
        "Conception des plans préliminaires",
        "Validation avec le client",
        "Plans d'exécution détaillés",
        "Dépôt des autorisations",
        "Suivi de construction",
      ],
      image:
        "https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "modelisation",
      icon: Settings,
      title: "Conception et Modélisation 3D",
      description:
        "Visualisation réaliste de vos projets grâce à notre technologie BIM et 3D avancée.",
      features: [
        "Modélisation 3D haute définition",
        "Visites virtuelles immersives",
        "Rendu photoréaliste",
        "Modélisation BIM (Building Information Modeling)",
        "Réalité virtuelle et augmentée",
        "Plans interactifs",
      ],
      process: [
        "Saisie des données du projet",
        "Modélisation 3D détaillée",
        "Rendu et texturage réaliste",
        "Création de la visite virtuelle",
        "Ajustements selon retours",
        "Livraison fichiers finaux",
      ],
      image:
        "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "plans",
      icon: Compass,
      title: "Création de Plans Personnalisés",
      description:
        "Plans sur-mesure adaptés à vos besoins spécifiques et contraintes du terrain.",
      features: [
        "Plans d'aménagement personnalisés",
        "Optimisation de l'espace",
        "Plans techniques (plomberie, électricité)",
        "Plans de façades et coupes",
        "Plans d'implantation",
        "Détails constructifs",
      ],
      process: [
        "Analyse des besoins client",
        "Étude du terrain existant",
        "Conception des plans",
        "Présentation et validation",
        "Ajustements et finalisation",
        "Livraison des plans techniques",
      ],
      image:
        "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "maisons-modulaires",
      icon: Home,
      title: "Maisons Préconstruites / Modulaires",
      description:
        "Maisons préfabriquées innovantes, écologiques et personnalisables.",
      features: [
        "Catalogue de modèles personnalisables",
        "Construction écologique",
        "Délais de livraison réduits",
        "Prix maîtrisés",
        "Maisons modulables et évolutives",
        "Garantie constructeur",
      ],
      process: [
        "Choix du modèle de base",
        "Personnalisation et options",
        "Validation technique",
        "Fabrication en atelier",
        "Transport et assemblage",
        "Finitions et livraison",
      ],
      image:
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "construction",
      icon: Wrench,
      title: "Construction et Accompagnement Clé-en-Main",
      description:
        "Prise en charge complète de votre projet de la conception à la livraison.",
      features: [
        "Gestion complète du projet",
        "Coordination des corps de métier",
        "Suivi qualité permanent",
        "Planning et délais respectés",
        "Garantie décennale",
        "Service après-vente",
      ],
      process: [
        "Étude de faisabilité complète",
        "Conception et plans",
        "Obtention des autorisations",
        "Préparation du chantier",
        "Réalisation et suivi",
        "Réception et livraison",
      ],
      image:
        "https://images.pexels.com/photos/1082355/pexels-photo-1082355.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "conseil-investissement",
      icon: Target,
      title: "Conseil en Investissement Immobilier",
      description:
        "Accompagnement expert pour optimiser vos investissements immobiliers.",
      features: [
        "Analyse de rentabilité",
        "Étude de marché local",
        "Conseil en défiscalisation",
        "Montage financier",
        "Sélection des emplacements",
        "Suivi patrimonial",
      ],
      process: [
        "Analyse de votre situation",
        "Définition des objectifs",
        "Recherche d'opportunités",
        "Étude de rentabilité",
        "Accompagnement financement",
        "Suivi post-investissement",
      ],
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "etude-faisabilite",
      icon: Calculator,
      title: "Étude de Faisabilité",
      description:
        "Analyse complète de la viabilité technique et économique de vos projets.",
      features: [
        "Étude technique du terrain",
        "Analyse réglementaire",
        "Évaluation des coûts",
        "Étude de rentabilité",
        "Analyse des risques",
        "Recommandations stratégiques",
      ],
      process: [
        "Visite et analyse du site",
        "Recherche réglementaire",
        "Chiffrage détaillé",
        "Analyse financière",
        "Rapport de faisabilité",
        "Présentation des conclusions",
      ],
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "suivi-chantier",
      icon: Eye,
      title: "Suivi de Chantier",
      description:
        "Supervision professionnelle de vos travaux pour garantir qualité et délais.",
      features: [
        "Contrôle qualité permanent",
        "Respect des délais",
        "Coordination des entreprises",
        "Rapports d'avancement",
        "Gestion des imprévus",
        "Réception des travaux",
      ],
      process: [
        "Planning détaillé des travaux",
        "Visites régulières de chantier",
        "Points de contrôle qualité",
        "Reporting client",
        "Gestion des modifications",
        "Réception finale",
      ],
      image:
        "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "materiaux-solutions",
      icon: ShoppingCart,
      title: "Vente de Matériaux et Solutions Techniques",
      description:
        "Fourniture de matériaux de qualité et solutions techniques innovantes.",
      features: [
        "Matériaux éco-responsables",
        "Solutions domotiques",
        "Systèmes énergétiques",
        "Prix négociés fournisseurs",
        "Livraison sur chantier",
        "Support technique",
      ],
      process: [
        "Analyse des besoins",
        "Sélection des produits",
        "Devis détaillé",
        "Commande et approvisionnement",
        "Livraison coordonnée",
        "Support installation",
      ],
      image:
        "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  const advantages = [
    {
      icon: Lightbulb,
      title: "Innovation Permanente",
      description:
        "Nous intégrons les dernières technologies et méthodes de construction pour vous offrir des solutions d'avant-garde.",
    },
    {
      icon: Shield,
      title: "Garanties Étendues",
      description:
        "Toutes nos réalisations sont couvertes par nos garanties constructeur et décennale pour votre tranquillité d'esprit.",
    },
    {
      icon: Target,
      title: "Approche Sur-Mesure",
      description:
        "Chaque projet est unique. Nous adaptons nos services à vos besoins spécifiques et votre budget.",
    },
    {
      icon: Building,
      title: "Expertise Complète",
      description:
        "De l'architecture à la construction, nous maîtrisons toute la chaîne de réalisation de vos projets.",
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
              "url(https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=1600)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Nos Services
            <span className="block text-[#FF8C42]">
              d'Architecture & Construction
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Solutions complètes et innovantes pour tous vos projets immobiliers,
            de la conception architecturale à la construction clé-en-main
          </p>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              const isReversed = index % 2 !== 0;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12`}
                >
                  {/* Image */}
                  <div className="lg:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute top-6 left-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#FF8C42] to-[#FFA726] rounded-xl flex items-center justify-center">
                          <Icon className="text-white" size={24} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1B2951] dark:text-white mb-4">
                      {service.title}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-[#1B2951] dark:text-white mb-4">
                        Nos prestations :
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-3"
                          >
                            <CheckCircle
                              size={16}
                              className="text-[#FF8C42] flex-shrink-0"
                            />
                            <span className="text-gray-600 dark:text-gray-400 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Process */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-[#1B2951] dark:text-white mb-4">
                        Notre processus :
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.process.map((step, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-3"
                          >
                            <div className="w-6 h-6 bg-[#FF8C42] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                              {idx + 1}
                            </div>
                            <span className="text-gray-600 dark:text-gray-400 text-sm">
                              {step}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="/contact"
                        className="bg-gradient-to-r from-[#FF8C42] to-[#FFA726] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF7043] hover:to-[#FF9800] transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <Phone size={18} />
                        <span>Demander un devis</span>
                      </a>
                      <a
                        href="/projets"
                        className="border-2 border-[#1B2951] text-[#1B2951] dark:border-white dark:text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#1B2951] hover:text-white dark:hover:bg-white dark:hover:text-[#1B2951] transition-colors flex items-center justify-center space-x-2"
                      >
                        <span>Voir nos réalisations</span>
                        <ArrowRight size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 bg-gray-50 dark:bg-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2951] dark:text-white mb-4">
              Pourquoi Choisir Build Millennium Group ?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Les avantages qui font de nous votre partenaire de confiance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-[#262626] p-6 rounded-2xl shadow-lg text-center border border-[#EAEAEA] dark:border-[#333333]"
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1B2951] to-[#2C3E50] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à Démarrer Votre Projet ?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Nos experts vous accompagnent de la première esquisse à la remise
            des clés
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-[#FF8C42] to-[#FFA726] text-white px-8 py-4 rounded-xl font-semibold hover:from-[#FF7043] hover:to-[#FF9800] transition-all duration-300 shadow-lg"
            >
              Demande de devis gratuit
            </a>
            <a
              href="/maisons-preconstruites"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#1B2951] transition-colors"
            >
              Voir nos maisons préfabriquées
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
