import React from "react";
import { Link } from "react-router-dom";
import HolidayLogo from "../../assets/images/HolidayLogo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    International: [
      { name: "Beach Destinations", path: "/international?category=beach" },
      { name: "Mountain Adventures", path: "/international?category=mountain" },
      { name: "City Breaks", path: "/international?category=city" },
      { name: "Island Getaways", path: "/international?category=island" },
      { name: "Adventure Tours", path: "/international?category=adventure" },
    ],
    Domestic: [
      { name: "Nature Trips", path: "/domestic?category=nature" },
      { name: "Pilgrimage Tours", path: "/domestic?category=pilgrimage" },
      { name: "Group Tours", path: "/domestic?category=group" },
      { name: "Family Vacations", path: "/domestic?category=family" },
      { name: "Honeymoon Packages", path: "/domestic?category=honeymoon" },
    ],
    services: [
      { name: "Flight Booking", path: "/services#flights" },
      { name: "Hotel Reservations", path: "/services#hotels" },
      { name: "Travel Insurance", path: "/services#insurance" },
      { name: "Visa Services", path: "/services#visa" },
      { name: "Guided Tours", path: "/services#tours" },
    ],
    support: [
      { name: "Contact Us", path: "/contact" },
      { name: "FAQs", path: "/faqs" },
      { name: "Travel Tips", path: "/travel-tips" },
      { name: "Customer Reviews", path: "/reviews" },
      { name: "Emergency Support", path: "/emergency" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", icon: "📘", url: "https://facebook.com" },
    { name: "Twitter", icon: "🐦", url: "https://twitter.com" },
    { name: "Instagram", icon: "📷", url: "https://instagram.com" },
    { name: "YouTube", icon: "📺", url: "https://youtube.com" },
    { name: "LinkedIn", icon: "💼", url: "https://linkedin.com" },
    { name: "WhatsApp", icon: "🟢", url: "https://wa.me/+919885164442" },
  ];

  return (
    <footer className=" bg-gradient-to-r from-red-200 to-red-100">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-24 h-24 rounded-xl flex items-center justify-center overflow-hidden bg-white/10 backdrop-blur-sm">
                <img
                  src={HolidayLogo}
                  alt="Holiday Destiny Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-3xl gradient-text font-bold font-display">
                Holiday Destiny
              </span>
            </div>
            <p className="mb-6 leading-relaxed">
              Your trusted partner for unforgettable travel experiences. We
              specialize in creating personalized journeys that transform your
              dreams into reality.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  title={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-primary-text mb-4">
              International
            </h4>
            <ul className="space-y-2">
              {footerLinks.International.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="opacity-80 hover:opacity-100 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-primary-text mb-4">
              Domestic
            </h4>
            <ul className="space-y-2">
              {footerLinks.Domestic.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="opacity-80 hover:opacity-100 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-primary-text mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="opacity-80 hover:opacity-100 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 opacity-60 text-sm">
            <a
              href="mailto:enquiry@holidaydestiny.co.in"
              className="flex items-center gap-2"
            >
              <span className="text-lg">📧</span>
              <span>enquiry@holidaydestiny.co.in</span>
            </a>
            <a href="tel:+919885164442" className="flex items-center gap-2">
              <span className="text-lg">📞</span>
              <span>+91 9885 164 442</span>
            </a>
            <a
              href="https://wa.me/919885164442"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <span className="text-lg">📲</span>
              <span>+91 9885 164 442</span>
            </a>
            <a
              href="https://maps.google.com/?q=309, Babukhan mall, somajiguda, Hyderabad 500016"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <span className="text-lg">📍</span>
              <span>309, Babukhan Mall, Somajiguda, Hyderabad 500016</span>
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="opacity-60 text-sm">
              © {currentYear} Holiday Destiny. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
