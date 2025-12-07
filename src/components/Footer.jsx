import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  const footerLinks = {
    services: [
      { name: "Achat & Vente", href: "/services#achat-vente" },
      { name: "Location", href: "/services#location" },
      { name: "Gestion Immobilière", href: "/services#gestion" },
      { name: "Estimation", href: "/services#estimation" },
      { name: "Conseil Investissement", href: "/services#conseil" },
    ],
    company: [
      { name: "À Propos", href: "/about" },
      { name: "Nos Services", href: "/services" },
      { name: "Blog", href: "/blog" },
      { name: "Carrières", href: "/careers" },
      { name: "Partenaires", href: "/partners" },
    ],
    resources: [
      { name: "Centre d'aide", href: "/faq" },
      { name: "Témoignages", href: "/testimonials" },
      { name: "Guides pratiques", href: "/blog" },
      { name: "Calculateurs", href: "/tools" },
    ],
    legal: [
      { name: "Mentions légales", href: "/legal" },
      { name: "Politique de confidentialité", href: "/privacy" },
      { name: "Cookies", href: "/cookies" },
      { name: "CGV", href: "/terms" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-[#1B2951] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="https://ucarecdn.com/31f50039-6f9c-4f27-a912-1a93ef40deb5/-/format/auto/"
                alt="Build Millennium Group"
                className="h-8 w-auto"
              />
              <div className="text-xl font-bold">Build Millennium Group</div>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Votre partenaire de confiance en immobilier depuis 15 ans.
              Expertise, professionnalisme et accompagnement personnalisé.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-sm">
                <Phone size={16} className="text-[#FF8C42]" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail size={16} className="text-[#FF8C42]" />
                <span>contact@buildmillennium.fr</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin size={16} className="text-[#FF8C42]" />
                <span>123 Avenue des Champs, 75008 Paris</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-8 h-8 bg-[#2C3E50] rounded-full flex items-center justify-center hover:bg-[#FF8C42] transition-colors"
                    aria-label={social.name}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-[#FF8C42]">Nos Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-[#FF8C42]">Entreprise</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4 text-[#FF8C42]">Ressources</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-3 text-sm">Newsletter</h4>
              <p className="text-gray-400 text-xs mb-3">
                Restez informé de nos dernières offres
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded-l-lg text-sm text-black focus:outline-none focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-[#FF8C42] to-[#FFA726] text-white rounded-r-lg text-sm font-medium hover:from-[#FF7043] hover:to-[#FF9800] transition-all duration-300">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#2C3E50] pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-6 mb-4 lg:mb-0">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-xs transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="text-gray-400 text-xs">
              © 2024 Build Millennium Group. Tous droits réservés.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
