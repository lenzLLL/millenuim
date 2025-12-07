"use client"
import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    propertyType: "",
    budget: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          property_type: formData.propertyType,
          budget_range: formData.budget,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Erreur lors de l'envoi du message");
      }

      setIsSubmitted(true);
      setIsSubmitting(false);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          propertyType: "",
          budget: "",
        });
      }, 3000);
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      setIsSubmitting(false);
      // You could add error state handling here
      alert("Erreur lors de l'envoi du message. Veuillez réessayer.");
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      details: ["+33 1 23 45 67 89", "+33 6 12 34 56 78"],
      action: "tel:+33123456789",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@immobilier.fr", "commercial@immobilier.fr"],
      action: "mailto:contact@immobilier.fr",
    },
    {
      icon: MapPin,
      title: "Adresse",
      details: ["123 Avenue des Champs", "75008 Paris, France"],
      action: "https://goo.gl/maps/example",
    },
    {
      icon: Clock,
      title: "Horaires",
      details: ["Lun-Ven: 9h-18h", "Sam: 9h-17h", "Dim: Fermé"],
      action: null,
    },
  ];

  const offices = [
    {
      name: "Agence Paris Centre",
      address: "123 Avenue des Champs, 75008 Paris",
      phone: "+33 1 23 45 67 89",
      email: "paris@immobilier.fr",
      hours: "Lun-Ven: 9h-18h, Sam: 9h-17h",
    },
    {
      name: "Agence Neuilly",
      address: "45 Boulevard Victor Hugo, 92200 Neuilly",
      phone: "+33 1 23 45 67 90",
      email: "neuilly@immobilier.fr",
      hours: "Lun-Ven: 9h-18h, Sam: 9h-16h",
    },
    {
      name: "Agence Boulogne",
      address: "78 Rue de la République, 92100 Boulogne",
      phone: "+33 1 23 45 67 91",
      email: "boulogne@immobilier.fr",
      hours: "Lun-Ven: 9h-18h, Sam: 9h-16h",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Nos experts sont à votre disposition pour répondre à toutes vos
            questions
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-[#1E1E1E] p-6 rounded-2xl shadow-lg border border-[#EAEAEA] dark:border-[#333333] text-center hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#FFD700] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-black" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-[#111111] dark:text-white mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p
                        key={idx}
                        className="text-gray-600 dark:text-gray-400 text-sm"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                  {info.action && (
                    <a
                      href={info.action}
                      className="inline-block mt-4 text-[#FFD700] hover:text-[#FFE55C] transition-colors font-medium"
                    >
                      {info.title === "Téléphone"
                        ? "Appeler"
                        : info.title === "Email"
                          ? "Écrire"
                          : "Voir la carte"}
                    </a>
                  )}
                </div>
              );
            })}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-lg border border-[#EAEAEA] dark:border-[#333333] p-8">
                <h2 className="text-2xl font-bold text-[#111111] dark:text-white mb-6">
                  Envoyez-nous un message
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle
                      size={64}
                      className="text-green-500 mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold text-[#111111] dark:text-white mb-2">
                      Message envoyé !
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Nous vous recontacterons dans les plus brefs délais.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-[#111111] dark:text-white mb-2"
                        >
                          Prénom *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-[#404040] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFD700] bg-white dark:bg-[#262626] text-black dark:text-white"
                          placeholder="Votre prénom"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-[#111111] dark:text-white mb-2"
                        >
                          Nom *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-[#404040] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFD700] bg-white dark:bg-[#262626] text-black dark:text-white"
                          placeholder="Votre nom"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-[#111111] dark:text-white mb-2"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-[#404040] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFD700] bg-white dark:bg-[#262626] text-black dark:text-white"
                          placeholder="votre@email.com"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-[#111111] dark:text-white mb-2"
                        >
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-[#404040] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFD700] bg-white dark:bg-[#262626] text-black dark:text-white"
                          placeholder="+33 1 23 45 67 89"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-[#111111] dark:text-white mb-2"
                      >
                        Sujet *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-[#404040] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFD700] bg-white dark:bg-[#262626] text-black dark:text-white"
                      >
                        <option value="">Choisissez un sujet</option>
                        <option value="estimation">Estimation de bien</option>
                        <option value="vente">Vendre mon bien</option>
                        <option value="achat">Acheter un bien</option>
                        <option value="location">Location</option>
                        <option value="gestion">Gestion locative</option>
                        <option value="investissement">
                          Conseil investissement
                        </option>
                        <option value="autre">Autre demande</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="propertyType"
                          className="block text-sm font-medium text-[#111111] dark:text-white mb-2"
                        >
                          Type de bien
                        </label>
                        <select
                          id="propertyType"
                          name="propertyType"
                          value={formData.propertyType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-[#404040] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFD700] bg-white dark:bg-[#262626] text-black dark:text-white"
                        >
                          <option value="">Sélectionnez</option>
                          <option value="appartement">Appartement</option>
                          <option value="maison">Maison</option>
                          <option value="studio">Studio</option>
                          <option value="villa">Villa</option>
                          <option value="terrain">Terrain</option>
                          <option value="commerce">Local commercial</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="budget"
                          className="block text-sm font-medium text-[#111111] dark:text-white mb-2"
                        >
                          Budget
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-[#404040] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFD700] bg-white dark:bg-[#262626] text-black dark:text-white"
                        >
                          <option value="">Budget approximatif</option>
                          <option value="100k-300k">100k - 300k €</option>
                          <option value="300k-500k">300k - 500k €</option>
                          <option value="500k-800k">500k - 800k €</option>
                          <option value="800k-1M">800k - 1M €</option>
                          <option value="1M+">Plus de 1M €</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-[#111111] dark:text-white mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-[#404040] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFD700] bg-white dark:bg-[#262626] text-black dark:text-white resize-none"
                        placeholder="Décrivez votre projet ou posez votre question..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#FFD700] text-black px-6 py-4 rounded-xl font-semibold hover:bg-[#FFE55C] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <span>Envoi en cours...</span>
                      ) : (
                        <>
                          <Send size={20} />
                          <span>Envoyer le message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Map and Offices */}
            <div className="space-y-8">
              {/* Map */}
              <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-lg border border-[#EAEAEA] dark:border-[#333333] overflow-hidden">
                <div className="h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.295!3d48.8566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fec70fb1b89%3A0x40b82c3688c9460!2sChamps-%C3%89lys%C3%A9es%2C%20Paris%2C%20France!5e0!3m2!1sen!2sfr!4v1645564332"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* Offices */}
              <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-lg border border-[#EAEAEA] dark:border-[#333333] p-6">
                <h3 className="text-xl font-bold text-[#111111] dark:text-white mb-6">
                  Nos Agences
                </h3>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-200 dark:border-[#333333] last:border-b-0 pb-4 last:pb-0"
                    >
                      <h4 className="font-semibold text-[#111111] dark:text-white mb-2">
                        {office.name}
                      </h4>
                      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center space-x-2">
                          <MapPin size={16} />
                          <span>{office.address}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone size={16} />
                          <a
                            href={`tel:${office.phone}`}
                            className="hover:text-[#FFD700] transition-colors"
                          >
                            {office.phone}
                          </a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail size={16} />
                          <a
                            href={`mailto:${office.email}`}
                            className="hover:text-[#FFD700] transition-colors"
                          >
                            {office.email}
                          </a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock size={16} />
                          <span>{office.hours}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 bg-gray-50 dark:bg-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl p-8 lg:p-12">
            <MessageSquare size={48} className="mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Besoin d'une réponse rapide ?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Contactez-nous directement sur WhatsApp pour une réponse immédiate
            </p>
            <a
              href="https://wa.me/33123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-colors"
            >
              Ouvrir WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
