// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Hero = () => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const popularInternational = [
//     'Bali, Indonesia',
//     'Santorini, Greece',
//     'Swiss Alps',
//     'Tokyo, Japan',
//     'Machu Picchu, Peru',
//     'Maldives'
//   ];

//   const handleSearch = (e) => {
//     e.preventDefault();
//     console.log('Searching for:', searchQuery);
//   };

//   const handleInternationalSelect = (destination) => {
//     setSearchQuery(destination);
//   };

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <img 
//           src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
//           alt="Beautiful travel destination"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/50"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 container-custom text-center text-white">
//         <div className="max-w-4xl mx-auto">
//           {/* Main Heading */}
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 leading-tight">
//             Discover Your Perfect
//             <span className="block gradient-text"> Holiday Destination</span>
//           </h1>

//           {/* Subtitle */}
//           <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
//             Explore breathtaking destinations, create unforgettable memories, and experience 
//             the world's most beautiful places with our curated travel packages.
//           </p>

//           {/* Search Section */}
//           <div className="mb-12">
//             <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
//               <div className="flex flex-col md:flex-row gap-4 bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20">
//                 <input
//                   type="text"
//                   placeholder="Where do you want to go?"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="flex-1 px-6 py-4 bg-white/90 text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-transparent"
//                 />
//                 <button
//                   type="submit"
//                   className="px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-gray-800 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
//                 >
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                   </svg>
//                   Search
//                 </button>
//               </div>
//             </form>

//             {/* Popular International */}
//             <div className="mt-6 flex flex-wrap justify-center gap-3">
//               <span className="text-gray-300 font-medium">Popular:</span>
//               {popularInternational.map((destination, index) => (
//                 <button
//                   key={index}
//                   onClick={() => handleInternationalSelect(destination)}
//                   className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/20"
//                 >
//                   {destination}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//             <div className="text-center">
//               <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">500+</div>
//               <div className="text-gray-300 text-sm uppercase tracking-wider">International</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">10K+</div>
//               <div className="text-gray-300 text-sm uppercase tracking-wider">Happy Travelers</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">24/7</div>
//               <div className="text-gray-300 text-sm uppercase tracking-wider">Support</div>
//             </div>
//           </div>

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link to="/international" className="btn-primary text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
//               Explore Internationals
//             </Link>
//             <Link to="/domestic" className="bg-white/20 hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-xl border border-white/30 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
//               View domestic
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero; 



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
        <div className="bg-white/20 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/30">
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
      </div>
    </section>
  );
};

export default Hero;



// import React from 'react';
// import { Link } from 'react-router-dom';

// const Hero = () => {


 

//   return (
//     <section className="relative min-h-screen flex items-center py-20 justify-center overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <img 
//           src="https://wallpapers.com/images/featured/travel-background-we1aqvt6zacj99uk.jpg"
//           alt="Beautiful travel destination"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 container-custom text-center text-white">
//         <div className="max-w-4xl mx-auto">
//           {/* Main Heading */}
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 leading-tight">
//             Discover Your Perfect
//             <span className="block gradient-text"> Holiday Destination</span>
//           </h1>

//           {/* Subtitle */}
//           <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
//             Explore breathtaking destinations, create unforgettable memories, and experience 
//             the world's most beautiful places with our curated travel packages.
//           </p>

          

//           {/* Stats */}
//           <div className="flex justify-center flex-wrap gap-8 mb-12">
//             <div className="text-center">
//               <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">500+</div>
//               <div className="text-gray-300 text-sm uppercase tracking-wider">International</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">10K+</div>
//               <div className="text-gray-300 text-sm uppercase tracking-wider">Happy Travelers</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">24/7</div>
//               <div className="text-gray-300 text-sm uppercase tracking-wider">Support</div>
//             </div>
//           </div>

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link to="/international" className="btn-primary font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
//               Explore Internationals
//             </Link>
//             <Link to="/domestic" className="bg-white/20 hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-xl border border-white/30 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
//               View Domestic Trips
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
