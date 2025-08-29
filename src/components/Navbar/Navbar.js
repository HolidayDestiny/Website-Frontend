

import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import HolidayLogo from "../../assets/images/HolidayLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home", anchor: "home" },
    { path: "/about", label: "About", anchor: "about" },
    { path: "/international", label: "International", anchor: "International" },
    { path: "/domestic", label: "Domestic", anchor: "domestic" },
    { path: "/services", label: "Services", anchor: "services" },
    { path: "/gallery", label: "Gallery", anchor: "gallery" },
    { path: "/contact", label: "Contact", anchor: "contact" },
  ];

  const handleNavigation = (item) => {
    setIsOpen(false);
    if (location.pathname === "/") {
      const element = document.getElementById(item.anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      navigate(`${item.path}#${item.anchor}`);
    }
  };

  // const isHomePage = location.pathname === '/';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/15 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-20 h-20 rounded-full p-1 flex items-center justify-center">
              <img
                src={HolidayLogo}
                alt="Holiday Destiny Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-2xl font-bold font-display bg-gradient-to-r from-green-800 to-red-600 bg-clip-text text-transparent drop-shadow-lg">
              Holiday Destiny
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item)}
                className={`font-medium transition-all duration-300 px-4 py-2 rounded-lg border ${
                  location.pathname === item.path
                    ? "gradient-text bg-white/20 border-white/30 shadow-lg"
                    : isScrolled
                    ? "text-current hover:gradient-text hover:bg-white/10 border-white/20 hover:border-white/40"
                    : "text-current hover:gradient-text hover:bg-white/10 border-white/20 hover:border-white/40"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-current hover:bg-white/20 transition-colors border border-white/30 backdrop-blur-sm"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20 shadow-lg">
            <div className="px-4 py-6 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item)}
                  className={`w-full text-left font-medium transition-all duration-300 px-4 py-3 rounded-lg backdrop-blur-sm border ${
                    location.pathname === item.path
                      ? "gradient-text bg-white/20 border-white/30"
                      : "text-current hover:gradient-text hover:bg-white/10 border-white/20"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
