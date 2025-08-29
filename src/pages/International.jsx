// // import React, { useState } from 'react';
// // import { Helmet } from 'react-helmet-async';
// // import DestinationCard from '../components/DestinationCard/DestinationCard';
// // import InternationalData from '../data/international.json';

// // const International = () => {
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [selectedCategory, setSelectedCategory] = useState('all');

// //   const categories = ['all', 'beach', 'mountain', 'city', 'island', 'adventure', 'luxury'];

// //   const filteredInternational = InternationalData.filter(destination => {
// //     const matchesSearch = destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //                          destination.description.toLowerCase().includes(searchQuery.toLowerCase());
// //     const matchesCategory = selectedCategory === 'all' || destination.category.toLowerCase() === selectedCategory;
// //     return matchesSearch && matchesCategory;
// //   });

// //   return (
// //     <>
// //       <Helmet>
// //         <title>International - Holiday Destiny</title>
// //         <meta name="description" content="Explore our curated collection of amazing International destinations around the world." />
// //       </Helmet>

// //       {/* Hero Section */}
// //       <section
// //   className="relative bg-cover bg-center text-white min-h-[55vh] flex items-center"
// //   style={{ backgroundImage: `url('https://codewithsadee.github.io/tourly/assets/images/hero-banner.jpg')` }}
// // >
// //   {/* Black overlay */}
// //   <div className="absolute inset-0 bg-black bg-opacity-50"></div>
// //   <div className="container-custom text-center relative z-10">
// //     <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
// //       Explore <span className="gradient-text bg-clip-text text-transparent">International</span>
// //     </h1>
// //     <p className="text-xl text-white/90 max-w-2xl mx-auto">
// //       Discover amazing places around the world and find your next adventure
// //     </p>
// //   </div>
// // </section>

// //       {/* Search and Filter Section */}
// //       <section className="bg-white py-12 border-b">
// //         <div className="container-custom">
// //           <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
// //             {/* Search */}
// //             <div className="flex-1 max-w-md">
// //               <div className="relative">
// //                 <input
// //                   type="text"
// //                   placeholder="Search International..."
// //                   value={searchQuery}
// //                   onChange={(e) => setSearchQuery(e.target.value)}
// //                   className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
// //                 />
// //                 <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
// //                 </svg>
// //               </div>
// //             </div>

// //             {/* Category Filter */}
// //             <div className="flex flex-wrap gap-2">
// //               {categories.map((category) => (
// //                 <button
// //                   key={category}
// //                   onClick={() => setSelectedCategory(category)}
// //                   className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
// //                     selectedCategory === category
// //                       ? 'bg-primary-600 text-white'
// //                       : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
// //                   }`}
// //                 >
// //                   {category.charAt(0).toUpperCase() + category.slice(1)}
// //                 </button>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* International Grid */}
// //       <section className="section-padding bg-gray-50">
// //         <div className="container-custom">
// //           {filteredInternational.length > 0 ? (
// //             <>
// //               <div className="text-center mb-12">
// //                 <h2 className="text-3xl font-bold text-gray-800 mb-2">
// //                   {filteredInternational.length} Destination{filteredInternational.length !== 1 ? 's' : ''} Found
// //                 </h2>
// //                 {searchQuery && (
// //                   <p className="text-gray-600">
// //                     Showing results for "{searchQuery}"
// //                   </p>
// //                 )}
// //               </div>

// //               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //                 {filteredInternational.map((destination) => (
// //                   <DestinationCard key={destination.id} destination={destination} />
// //                 ))}
// //               </div>
// //             </>
// //           ) : (
// //             <div className="text-center py-16">
// //               <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
// //                 <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
// //                 </svg>
// //               </div>
// //               <h3 className="text-2xl font-bold text-gray-800 mb-2">No International found</h3>
// //               <p className="text-gray-600 mb-6">
// //                 Try adjusting your search or filter criteria
// //               </p>
// //               <button
// //                 onClick={() => {
// //                   setSearchQuery('');
// //                   setSelectedCategory('all');
// //                 }}
// //                 className="btn-primary"
// //               >
// //                 Clear Filters
// //               </button>
// //             </div>
// //           )}
// //         </div>
// //       </section>
// //     </>
// //   );
// // };

// // export default International;

// import React, { useState, useEffect } from 'react';
// import { Helmet } from 'react-helmet-async';
// import { useSearchParams } from 'react-router-dom';
// import DestinationCard from '../components/DestinationCard/DestinationCard';
// import InternationalData from '../data/international.json';

// const International = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('all');

//   const categories = ['all', 'beach', 'mountain', 'city', 'island', 'adventure', 'luxury'];

//   useEffect(() => {
//     const categoryFromUrl = searchParams.get('category');
//     if (categoryFromUrl && categories.includes(categoryFromUrl.toLowerCase())) {
//       setSelectedCategory(categoryFromUrl.toLowerCase());
//     } else {
//       setSelectedCategory('all');
//     }
//   }, [searchParams, categories]);

//   const filteredInternational = InternationalData.filter(destination => {
//     const matchesSearch = destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                           destination.description.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesCategory = selectedCategory === 'all' || destination.category.toLowerCase() === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//     if (category === 'all') {
//       setSearchParams({});
//     } else {
//       setSearchParams({ category });
//     }
//   };

//   return (
//     <>
//       <Helmet>
//         <title>International - Holiday Destiny</title>
//         <meta name="description" content="Explore our curated collection of amazing International destinations around the world." />
//       </Helmet>

//       {/* Hero Section */}
//       <section
//         className="relative bg-cover bg-center text-white min-h-[55vh] flex items-center"
//         style={{ backgroundImage: `url('https://codewithsadee.github.io/tourly/assets/images/hero-banner.jpg')` }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//         <div className="container-custom text-center relative z-10">
//           <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
//             Explore <span className="gradient-text bg-clip-text text-transparent">International</span>
//           </h1>
//           <p className="text-xl text-white/90 max-w-2xl mx-auto">
//             Discover amazing places around the world and find your next adventure
//           </p>
//         </div>
//       </section>

//       {/* Search and Filter Section */}
//       <section className="bg-white py-12 border-b">
//         <div className="container-custom">
//           <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
//             {/* Search */}
//             <div className="flex-1 max-w-md">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Search International..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                 />
//                 <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                 </svg>
//               </div>
//             </div>

//             {/* Category Filter */}
//             <div className="flex flex-wrap gap-2">
//               {categories.map((category) => (
//                 <button
//                   key={category}
//                   onClick={() => handleCategoryClick(category)}
//                   className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                     selectedCategory === category
//                       ? 'bg-primary-600 text-white'
//                       : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                   }`}
//                 >
//                   {category.charAt(0).toUpperCase() + category.slice(1)}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* International Grid */}
//       <section className="section-padding bg-gray-50">
//         <div className="container-custom">
//           {filteredInternational.length > 0 ? (
//             <>
//               <div className="text-center mb-12">
//                 <h2 className="text-3xl font-bold text-gray-800 mb-2">
//                   {filteredInternational.length} Destination{filteredInternational.length !== 1 ? 's' : ''} Found
//                 </h2>
//                 {searchQuery && (
//                   <p className="text-gray-600">
//                     Showing results for "{searchQuery}"
//                   </p>
//                 )}
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {filteredInternational.map((destination) => (
//                   <DestinationCard key={destination.id} destination={destination} />
//                 ))}
//               </div>
//             </>
//           ) : (
//             <div className="text-center py-16">
//               <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                 </svg>
//               </div>
//               <h3 className="text-2xl font-bold text-gray-800 mb-2">No International found</h3>
//               <p className="text-gray-600 mb-6">
//                 Try adjusting your search or filter criteria
//               </p>
//               <button
//                 onClick={() => {
//                   setSearchQuery('');
//                   handleCategoryClick('all');
//                 }}
//                 className="btn-primary"
//               >
//                 Clear Filters
//               </button>
//             </div>
//           )}
//         </div>
//       </section>
//     </>
//   );
// };

// export default International;

import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import DestinationCard from "../components/DestinationCard/DestinationCard";
import InternationalData from "../data/international.json";
import banner from "../assets/images/hero-banner.jpg";

const International = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "all",
    "beach",
    "mountain",
    "city",
    "island",
    "adventure",
  ];

  // This effect synchronizes the component state with the URL query parameter
  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    if (categoryFromUrl && categories.includes(categoryFromUrl.toLowerCase())) {
      setSelectedCategory(categoryFromUrl.toLowerCase());
    } else {
      setSelectedCategory("all");
    }
  }, [searchParams, categories]);

  const filteredInternational = InternationalData.filter((destination) => {
    const matchesSearch =
      destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      destination.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      destination.category.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // New function to handle category clicks and update the URL
  const handleCategoryClick = (category) => {
    if (category === "all") {
      setSearchParams({}); // Clear all search parameters
    } else {
      setSearchParams({ category }); // Set the 'category' parameter in the URL
    }
  };

  return (
    <>
      <Helmet>
        <title>International - Holiday Destiny</title>
        <meta
          name="description"
          content="Explore our curated collection of amazing International destinations around the world."
        />
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white min-h-[55vh] flex items-center"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
            Explore{" "}
            <span className="gradient-text bg-clip-text text-transparent">
              International
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover amazing places around the world and find your next
            adventure
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-white py-12 border-b">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search International..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-primary-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* International Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {filteredInternational.length > 0 ? (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  {filteredInternational.length} Destination
                  {filteredInternational.length !== 1 ? "s" : ""} Found
                </h2>
                {searchQuery && (
                  <p className="text-gray-600">
                    Showing results for "{searchQuery}"
                  </p>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredInternational.map((destination) => (
                  <DestinationCard
                    key={destination.id}
                    destination={destination}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                No International found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  handleCategoryClick("all");
                }}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default International;
