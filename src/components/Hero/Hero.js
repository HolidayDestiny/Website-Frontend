import React from 'react';
import { Link } from 'react-router-dom';
import { FiGlobe, FiUsers, FiHeadphones } from 'react-icons/fi';
import BackGroundImg from '../../assets/images/bg.jpg'

// The Hero component with the new glass morphism effect
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20 justify-center overflow-hidden font-inter">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={BackGroundImg}
          alt="Beautiful travel destination"
          className="w-full h-full object-cover"
          // Fallback image in case of load error
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/1920x1080/4F46E5/ffffff?text=Travel+Background"; }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-8 max-w-7xl mx-auto text-center text-white">
        {/* The new container for the glass morphism effect */}
          <div className="max-w-4xl mx-auto">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 leading-tight">
              Discover Your Perfect
              <span className="block  gradient-text"> Holiday Destination</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
              Explore breathtaking destinations, create unforgettable memories, and experience 
              the world's most beautiful places with our curated travel packages.
            </p>

            {/* Stats */}
            <div className="flex justify-center flex-wrap gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  500+
                </div>
                <div className="text-gray-300 text-sm uppercase tracking-wider">International</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  10K+
                </div>
                <div className="text-gray-300 text-sm uppercase tracking-wider">Happy Travelers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  24/7
                </div>
                <div className="text-gray-300 text-sm uppercase tracking-wider">Support</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/international" className="btn-primary text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                Explore Internationals
              </Link>
              <Link to="/domestic" className="bg-black/40 hover:bg-black/50 text-white font-semibold py-4 px-8 rounded-xl border border-white/30 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                View Domestic Trips
              </Link>
            </div>
          </div>
        
      </div>
    </section>
  );
};

export default Hero;
