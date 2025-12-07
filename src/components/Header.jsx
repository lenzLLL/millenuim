import React, { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "À Propos", href: "/about" },
    { name: "Nos Services", href: "/services" },
    { name: "Maisons Préfabriquées", href: "/maisons-preconstruites" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white dark:bg-[#1E1E1E] border-b border-[#E7E8EC] dark:border-[#333333] sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-[#1B2951] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>contact@buildmillennium.fr</span>
              </div>
            </div>
            <div className="hidden md:block text-sm">
              Lun-Ven 9h-18h | Sam 9h-17h
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3">
            <img
              src="https://ucarecdn.com/31f50039-6f9c-4f27-a912-1a93ef40deb5/-/format/auto/"
              alt="Build Millennium Group"
              className="h-10 w-auto"
            />
            <div className="text-xl font-bold text-[#1B2951] dark:text-white">
              Build Millennium Group
            </div>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#666A6F] dark:text-gray-400 hover:text-[#1B2951] dark:hover:text-white font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <a
              href="/contact"
              className="bg-gradient-to-r from-[#FF8C42] to-[#FFA726] text-white px-6 py-2 rounded-xl font-medium hover:from-[#FF7043] hover:to-[#FF9800] transition-all duration-300 shadow-lg"
            >
              Demander un devis
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-[#666A6F] hover:text-[#1B2951] dark:text-gray-400 dark:hover:text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-[#E7E8EC] dark:border-[#333333]">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-[#666A6F] dark:text-gray-400 hover:text-[#1B2951] dark:hover:text-white font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <a
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-[#FF8C42] to-[#FFA726] text-white px-6 py-2 rounded-xl font-medium hover:from-[#FF7043] hover:to-[#FF9800] transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Demander un devis
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
