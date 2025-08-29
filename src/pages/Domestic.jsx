
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import PackageCard from '../components/PackageCard/PackageCard';
import domesticData from '../data/domestic.json';
import banner from "../assets/images/domestic-banner.jpg";


const Domestic = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Updated categories to match your domestic.json file
  const categories = ['all', 'nature', 'cultural', 'beach', 'pilgrimage'];

  // This effect synchronizes the component state with the URL query parameter
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl && categories.includes(categoryFromUrl.toLowerCase())) {
      setSelectedCategory(categoryFromUrl.toLowerCase());
    } else {
      setSelectedCategory('all');
    }
  }, [searchParams, categories]);

  const filteredDomestic = domesticData.filter(packageItem => {
    const matchesSearch = packageItem.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          packageItem.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || packageItem.category.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCategoryClick = (category) => {
    if (category === 'all') {
      setSearchParams({}); // Clear all search parameters
    } else {
      setSearchParams({ category }); // Set the 'category' parameter in the URL
    }
  };

  return (
    <>
      <Helmet>
        <title>Travel Domestic - Holiday Destiny</title>
        <meta name="description" content="Explore our curated travel package designed to give you the best experience." />
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
            Domestic <span className="gradient-text bg-clip-text text-transparent">Trips</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Handpicked travel packages designed to give you the best experience
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
                  placeholder="Search domestic tours..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* domestic Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {filteredDomestic.length > 0 ? (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  {filteredDomestic.length} Package{filteredDomestic.length !== 1 ? 's' : ''} Found
                </h2>
                {searchQuery && (
                  <p className="text-gray-600">
                    Showing results for "{searchQuery}"
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {filteredDomestic.map((packageItem) => (
                  <PackageCard key={packageItem.id} package={packageItem} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No trips found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  handleCategoryClick('all');
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

export default Domestic;