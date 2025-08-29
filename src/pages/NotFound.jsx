import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const International = [
    { name: 'Home', path: '/' },
    { name: 'International', path: '/international' },
    { name: 'domestic', path: '/domestic' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Holiday Destiny</title>
        <meta name="description" content="Oops! The page you're looking for seems to have taken a vacation. Let's get you back on track!" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100/30 rounded-full animate-bounce-slow"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-indigo-100/40 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-purple-100/30 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-pink-100/20 rounded-full animate-pulse"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="text-center text-gray-800 max-w-4xl mx-auto">
            {/* 404 Number */}
            <div className="mb-8">
              <h1 className="text-8xl md:text-9xl font-bold font-display mb-4">
                <span className="text-blue-400">4</span>
                <span className="text-indigo-500">0</span>
                <span className="text-purple-500">4</span>
              </h1>
            </div>

            {/* Main Message */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 text-gray-800">
                Oops! Looks like this page
                <span className="block text-indigo-600">took a vacation!</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 mb-6">
                The destination you're looking for seems to have wandered off. 
                Don't worry, we'll help you find your way back!
              </p>
            </div>

            {/* Fun Illustration */}
            <div className="mb-12 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-200 shadow-lg">
                  <span className="text-6xl">🧳</span>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center animate-bounce shadow-md">
                  <span className="text-sm">✈️</span>
                </div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center animate-pulse shadow-md">
                  <span className="text-xs">🌍</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mb-12">
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button
                  onClick={() => navigate(-1)}
                  className="bg-white hover:bg-gray-50 text-gray-700 font-semibold py-4 px-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Go Back
                  </span>
                </button>
                <Link
                  to="/"
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Go Home
                  </span>
                </Link>
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Quick Navigation</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                {International.map((dest, index) => (
                  <Link
                    key={dest.path}
                    to={dest.path}
                    className="group p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200 hover:bg-white hover:shadow-md transition-all duration-300 transform hover:scale-105"
                    onMouseEnter={() => setIsHovered(index)}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {dest.name === 'Home' && '🏠'}
                        {dest.name === 'International' && '🗺️'}
                        {dest.name === 'Domes' && '📦'}
                        {dest.name === 'Gallery' && '📸'}
                        {dest.name === 'About' && 'ℹ️'}
                        {dest.name === 'Contact' && '📞'}
                      </div>
                      <span className="text-sm font-medium text-gray-700">{dest.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Fun Facts */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-gray-200 shadow-sm">
              <h4 className="text-lg font-semibold mb-4 text-gray-800">Did you know? 🤔</h4>
              <div className="text-sm text-gray-600 space-y-2">
                <p>• The 404 error was first introduced by Tim Berners-Lee in 1990</p>
                <p>• Some websites have creative 404 pages with games and easter eggs</p>
                <p>• The most visited 404 page is probably Google's "Page Not Found"</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 animate-bounce-slow">
          <span className="text-4xl">🌴</span>
        </div>
        <div className="absolute top-1/3 right-1/4 animate-pulse">
          <span className="text-3xl">🏖️</span>
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-bounce-slow">
          <span className="text-4xl">🗻</span>
        </div>
        <div className="absolute bottom-1/3 right-1/3 animate-pulse">
          <span className="text-3xl">🏙️</span>
        </div>
      </div>
    </>
  );
};

export default NotFound; 