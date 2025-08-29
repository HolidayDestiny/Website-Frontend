// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { HelmetProvider } from 'react-helmet-async';
// import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';
// import ScrollToTop from './components/ScrollToTop/ScrollToTop';
// import Home from './pages/Home';
// import International from './pages/International';
// import Domestic from './pages/Domestic';
// import Gallery from './pages/Gallery';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import NotFound from './pages/NotFound';

// function App() {
//   return (
//     <HelmetProvider>
//       <Router>
//         <div className="min-h-screen bg-gray-50">
//           <Navbar />
//           <main className="pt-16 md:pt-20">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/international" element={<International />} />
//               <Route path="/domestic" element={<Domestic />} />
//               <Route path="/gallery" element={<Gallery />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/contact" element={<Contact />} />
//               <Route path="*" element={<NotFound />} />
//             </Routes>
//           </main>
//           <Footer />
//           <ScrollToTop />
//         </div>
//       </Router>
//     </HelmetProvider>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToHash from './components/Scroll/ScrollToHash';
import ScrollToTopButton from './components/ScrollToTop/ScrollToTop'; // Your Scroll-to-Top button component
import Home from './pages/Home';
import International from './pages/International';
import Domestic from './pages/Domestic';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import NotFound from './pages/NotFound';

// New component for automatic scroll-to-top on route change
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AutoScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AutoScrollToTop /> {/* This handles automatic scrolling on page navigation */}
        <ScrollToHash />    {/* This handles hash links like #flights */}
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="pt-16 md:pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/international" element={<International />} />
              <Route path="/domestic" element={<Domestic />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <ScrollToTopButton /> {/* Your button that appears on scroll */}
      </Router>
    </HelmetProvider>
  );
}

export default App;