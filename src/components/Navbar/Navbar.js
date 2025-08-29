// import React, { useState, useEffect } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import HolidayLogo from '../../assets/images/HolidayLogo.png';

// // This is the self-contained WhatsAppButton component for integration
// const WhatsAppButton = ({
//   phoneNumber = '918897097568',
//   message = 'Hello, I would like to chat on WhatsApp.',
//   children = 'Chat on WhatsApp',
// }) => {
//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

//   const handleClick = () => {
//     // Note: The `window.open` call to wa.me may be blocked by the browser's security policy,
//     // especially in sandboxed environments like the Canvas. This is not a code error,
//     // but a security feature. The button will work in a regular browser environment.
//     window.open(whatsappUrl, '_blank');
//   };

//   return (
//     <button
//       className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold py-2 px-6 rounded-lg border border-white/30 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 shadow-lg"
//       onClick={handleClick}
//     >
//       <span className="inline-flex items-center space-x-2">
//         {/* Lucide Message Square Text SVG icon for a consistent look */}
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-text">
//             <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
//             <path d="M12 7h4"/>
//             <path d="M12 11h4"/>
//             <path d="M8 7h0"/>
//             <path d="M8 11h0"/>
//         </svg>
//         <span>{children}</span>
//       </span>
//     </button>
//   );
// };

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { path: '/', label: 'Home', anchor: 'home' },
//     { path: '/international', label: 'International', anchor: 'International' },
//     { path: '/domestic', label: 'domestic', anchor: 'domestic' },
//     { path: '/gallery', label: 'Gallery', anchor: 'gallery' },
//     { path: '/about', label: 'About', anchor: 'about' },
//     { path: '/contact', label: 'Contact', anchor: 'contact' }
//   ];

//   const handleNavigation = (item) => {
//     setIsOpen(false);

//     if (location.pathname === '/') {
//       // On home page, scroll to anchor
//       const element = document.getElementById(item.anchor);
//       if (element) {
//         element.scrollIntoView({
//           behavior: 'smooth',
//           block: 'start'
//         });
//       }
//     } else {
//       // On other pages, navigate to page with anchor
//       navigate(`${item.path}#${item.anchor}`);
//     }
//   };

//   const isHomePage = location.pathname === '/';

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//       isScrolled
//         ? 'bg-white/15 backdrop-blur-md shadow-lg border-b border-gray-200'
//         : 'bg-transparent'
//     }`}>
//       <div className="container-custom">
//         <div className="flex items-center justify-between h-16 md:h-20">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2">
//             <div className="w-10 h-10 bg-gradient-to-r from-red-200 to-white rounded-full p-1 flex items-center justify-center ">
//             <img
//       src={HolidayLogo}
//       alt="Holiday Destiny Logo"
//       className="w-full h-full object-contain"
//     />
//             </div>
//             <span className="text-2xl font-bold font-display gradient-text drop-shadow-lg">
//               Holiday Destiny
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-2">
//             {navItems.map((item) => (
//               <button
//                 key={item.path}
//                 onClick={() => handleNavigation(item)}
//                 className={`font-medium transition-all duration-300 px-4 py-2 rounded-lg border ${
//                   location.pathname === item.path
//                     ? 'text-red-600 bg-white/20 border-white/30 shadow-lg'
//                     : isScrolled
//                     ? 'text-red-600 hover:text-amber-300 hover:bg-white/10 border-white/20 hover:border-white/40'
//                     : 'text-red-600 hover:text-amber-300 hover:bg-white/10 border-white/20 hover:border-white/40'
//                 }`}
//               >
//                 {item.label}
//               </button>
//             ))}
//           </div>

//           {/* CTA Button */}
//           <div className="hidden md:block">
//             <WhatsAppButton />
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden p-2 rounded-lg text-red hover:bg-white/20 transition-colors border border-white/30 backdrop-blur-sm"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               {isOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20 shadow-lg">
//             <div className="px-4 py-6 space-y-3">
//               {navItems.map((item) => (
//                 <button
//                   key={item.path}
//                   onClick={() => handleNavigation(item)}
//                   className={`w-full text-left font-medium transition-all duration-300 px-4 py-3 rounded-lg backdrop-blur-sm border ${
//                     location.pathname === item.path
//                       ? 'text-red-200 bg-white/20 border-white/30'
//                       : 'text-red-600 hover:text-red-200 hover:bg-white/10 border-white/20'
//                   }`}
//                 >
//                   {item.label}
//                 </button>
//               ))}
//               <div className="pt-4">
//                 <WhatsAppButton />
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

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
