import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Calendar,
  Clock,
  ArrowRight,
  User,
  Tag,
  Lightbulb,
  Home,
  Leaf,
  Settings,
  TrendingUp,
  Building,
} from "lucide-react";

export default function BlogPage() {
  const featuredArticle = {
    id: "architecture-bioclimatique-2024",
    title: "L'Architecture Bioclimatique : L'Avenir de la Construction Durable",
    excerpt:
      "Découvrez comment l'architecture bioclimatique révolutionne la construction moderne en alliant confort, économies d'énergie et respect de l'environnement.",
    content:
      "L'architecture bioclimatique représente une approche innovante qui tire parti des conditions climatiques locales pour optimiser le confort intérieur tout en minimisant l'impact environnemental...",
    image:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Marie Dubois-Martin",
    date: "15 Novembre 2024",
    readTime: "8 min",
    category: "Architecture",
    tags: ["Bioclimatique", "Écologie", "Innovation"],
  };

  const articles = [
    {
      id: "domotique-maison-connectee",
      title: "Domotique et Maison Connectée : Guide Complet 2024",
      excerpt:
        "Tout ce que vous devez savoir sur la domotique moderne pour transformer votre maison en habitat intelligent.",
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Thomas Leroy",
      date: "12 Novembre 2024",
      readTime: "6 min",
      category: "Technologie",
      tags: ["Domotique", "Maison connectée", "Innovation"],
    },
    {
      id: "materiaux-eco-construction",
      title: "Matériaux Éco-Responsables : Les Nouvelles Tendances",
      excerpt:
        "Focus sur les matériaux de construction durables qui façonnent l'avenir de l'habitat écologique.",
      image:
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Jean-Pierre Millennium",
      date: "8 Novembre 2024",
      readTime: "5 min",
      category: "Construction",
      tags: ["Écologie", "Matériaux", "Durabilité"],
    },
    {
      id: "prefabrication-avantages",
      title: "Préfabrication : Pourquoi Choisir une Maison Modulaire ?",
      excerpt:
        "Les avantages de la construction préfabriquée : rapidité, qualité, personnalisation et respect de l'environnement.",
      image:
        "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Marie Dubois-Martin",
      date: "5 Novembre 2024",
      readTime: "7 min",
      category: "Construction",
      tags: ["Préfabrication", "Modulaire", "Efficacité"],
    },
    {
      id: "permis-construire-guide",
      title: "Permis de Construire : Guide Pratique et Conseils",
      excerpt:
        "Tout savoir sur les démarches administratives pour obtenir votre permis de construire rapidement.",
      image:
        "https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Thomas Leroy",
      date: "2 Novembre 2024",
      readTime: "10 min",
      category: "Réglementation",
      tags: ["Permis", "Administratif", "Guide"],
    },
    {
      id: "renovation-energetique",
      title: "Rénovation Énergétique : Optimisez Votre Habitat",
      excerpt:
        "Comment améliorer la performance énergétique de votre maison tout en valorisant votre patrimoine.",
      image:
        "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Jean-Pierre Millennium",
      date: "29 Octobre 2024",
      readTime: "9 min",
      category: "Rénovation",
      tags: ["Énergie", "Rénovation", "Performance"],
    },
    {
      id: "tendances-architecture-2024",
      title: "Tendances Architecturales 2024 : Design et Innovation",
      excerpt:
        "Découvrez les courants architecturaux qui marquent cette année et inspirent nos créations.",
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Marie Dubois-Martin",
      date: "25 Octobre 2024",
      readTime: "6 min",
      category: "Architecture",
      tags: ["Tendances", "Design", "2024"],
    },
  ];

  const categories = [
    { name: "Architecture", count: 12, icon: Building },
    { name: "Construction", count: 8, icon: Home },
    { name: "Technologie", count: 6, icon: Settings },
    { name: "Écologie", count: 10, icon: Leaf },
    { name: "Rénovation", count: 7, icon: TrendingUp },
    { name: "Innovation", count: 9, icon: Lightbulb },
  ];

  const popularTags = [
    "Bioclimatique",
    "Domotique",
    "Écologie",
    "Matériaux",
    "Préfabrication",
    "Performance énergétique",
    "Design",
    "Innovation",
    "Durabilité",
    "Maison connectée",
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1B2951] to-[#2C3E50] text-white py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Blog Build Millennium
            <span className="block text-[#FF8C42]">
              Architecture & Innovation
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Découvrez nos actualités, conseils et tendances dans l'architecture,
            la construction moderne et les technologies de l'habitat
          </p>
        </div>
      </section>

      {/* Article à la une */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#1B2951] dark:text-white mb-2">
              Article à la Une
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF8C42] to-[#FFA726] rounded"></div>
          </div>

          <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-xl overflow-hidden border border-[#EAEAEA] dark:border-[#333333]">
            <div className="lg:flex">
              <div className="lg:w-1/2">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-gradient-to-r from-[#FF8C42] to-[#FFA726] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {featuredArticle.category}
                  </span>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <Calendar size={16} className="mr-2" />
                    {featuredArticle.date}
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <Clock size={16} className="mr-2" />
                    {featuredArticle.readTime}
                  </div>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-[#1B2951] dark:text-white mb-4">
                  {featuredArticle.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <User
                      size={16}
                      className="text-gray-500 dark:text-gray-400"
                    />
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      {featuredArticle.author}
                    </span>
                  </div>

                  <a
                    href={`/blog/${featuredArticle.id}`}
                    className="bg-gradient-to-r from-[#FF8C42] to-[#FFA726] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF7043] hover:to-[#FF9800] transition-all duration-300 flex items-center space-x-2"
                  >
                    <span>Lire l'article</span>
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles récents + Sidebar */}
      <section className="py-16 bg-gray-50 dark:bg-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:space-x-12">
            {/* Articles */}
            <div className="lg:w-2/3">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#1B2951] dark:text-white mb-2">
                  Articles Récents
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#FF8C42] to-[#FFA726] rounded"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {articles.map((article) => (
                  <article
                    key={article.id}
                    className="bg-white dark:bg-[#262626] rounded-2xl shadow-lg overflow-hidden border border-[#EAEAEA] dark:border-[#333333] hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-[#FF8C42] to-[#FFA726] text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {article.date}
                        </div>
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          {article.readTime}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-[#1B2951] dark:text-white mb-3 line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <User
                            size={14}
                            className="text-gray-500 dark:text-gray-400"
                          />
                          <span className="text-gray-600 dark:text-gray-400 text-sm">
                            {article.author}
                          </span>
                        </div>

                        <a
                          href={`/blog/${article.id}`}
                          className="text-[#FF8C42] hover:text-[#FF7043] font-semibold text-sm flex items-center space-x-1 transition-colors"
                        >
                          <span>Lire plus</span>
                          <ArrowRight size={14} />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 mt-12 lg:mt-0">
              {/* Catégories */}
              <div className="bg-white dark:bg-[#262626] rounded-2xl shadow-lg p-6 mb-8 border border-[#EAEAEA] dark:border-[#333333]">
                <h3 className="text-xl font-bold text-[#1B2951] dark:text-white mb-4">
                  Catégories
                </h3>
                <div className="space-y-3">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <a
                        key={category.name}
                        href={`/blog/category/${category.name.toLowerCase()}`}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-[#1E1E1E] transition-colors group"
                      >
                        <div className="flex items-center space-x-3">
                          <Icon size={18} className="text-[#FF8C42]" />
                          <span className="text-gray-700 dark:text-gray-300 group-hover:text-[#FF8C42] transition-colors">
                            {category.name}
                          </span>
                        </div>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          {category.count}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Tags populaires */}
              <div className="bg-white dark:bg-[#262626] rounded-2xl shadow-lg p-6 mb-8 border border-[#EAEAEA] dark:border-[#333333]">
                <h3 className="text-xl font-bold text-[#1B2951] dark:text-white mb-4">
                  Tags Populaires
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <a
                      key={tag}
                      href={`/blog/tag/${tag.toLowerCase().replace(" ", "-")}`}
                      className="bg-gray-100 dark:bg-[#1E1E1E] text-gray-700 dark:text-gray-300 px-3 py-2 rounded-lg text-sm hover:bg-[#FF8C42] hover:text-white transition-colors"
                    >
                      #{tag}
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-[#1B2951] to-[#2C3E50] rounded-2xl shadow-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Recevez nos derniers articles et conseils directement dans
                  votre boîte mail
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="w-full px-4 py-3 rounded-lg bg-white text-[#1B2951] focus:outline-none focus:ring-2 focus:ring-[#FF8C42]"
                  />
                  <button className="w-full bg-gradient-to-r from-[#FF8C42] to-[#FFA726] text-white py-3 rounded-lg font-semibold hover:from-[#FF7043] hover:to-[#FF9800] transition-all duration-300">
                    S'abonner
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1B2951] to-[#2C3E50] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Besoin de Conseils Personnalisés ?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Nos experts sont à votre disposition pour vous accompagner dans
            votre projet
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-[#FF8C42] to-[#FFA726] text-white px-8 py-4 rounded-xl font-semibold hover:from-[#FF7043] hover:to-[#FF9800] transition-all duration-300 shadow-lg"
            >
              Nous contacter
            </a>
            <a
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#1B2951] transition-colors"
            >
              Nos services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
