


import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import DestinationCard from "../components/DestinationCard/DestinationCard";
import PackageCard from "../components/PackageCard/PackageCard";
import InternationalData from "../data/international.json";
import domesticData from "../data/domestic.json";
import image from "../assets/images/FounderVenu.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { images as GalleryImages } from './Gallery.jsx';


const Home = () => {
  const featuredInternational = InternationalData;
  const featuredDomestic = domesticData;
  const imagesToDisplay = GalleryImages.slice(0, 8);

  const responsiveSettings = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <Helmet>
        <title>
          Holiday Destiny - Discover Your Perfect Holiday Destination
        </title>
        <meta
          name="description"
          content="Explore breathtaking destinations, create unforgettable memories, and experience the world's most beautiful places with our curated travel packages."
        />
        <meta
          name="keywords"
          content="travel, vacation, destinations, packages, holiday, tour, booking"
        />
      </Helmet>

      {/* Hero Section */}
      <section id="home" className="relative">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              About <span className="gradient-text">Holiday Destiny</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're passionate about creating unforgettable travel experiences
              that transform your dreams into reality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Best Price Guarantee</h3>
              <p className="text-gray-600">
                We offer competitive prices and price matching to ensure you get
                the best deals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 8v4l3 3" />
                  <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Our dedicated team is available round the clock to assist you
                with any queries.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Curated Experiences</h3>
              <p className="text-gray-600">
                Carefully selected destinations and activities for unforgettable
                memories.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="/about" className="btn-primary text-lg px-8 py-4">
              About Us
            </a>
          </div>
        </div>
      </section>

      {/* Featured International */}
      <section id="International" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Popular <span className="gradient-text">International Tours</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the world's most amazing places and create memories that
              last a lifetime
            </p>
          </div>

          <div className="relative w-full pb-16">
            <Carousel
              responsive={responsiveSettings}
              ssr={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={4000}
              keyBoardControl={true}
              customTransition="all .5s linear"
              transitionDuration={2000}
              containerClass="carousel-container"
              itemClass="carousel-item-padding-40-px cursor-grab select-none"
              renderButtonGroupOutside={true}
            >
              {featuredInternational.map((destination) => (
                <div key={destination.id} className="px-2">
                  <DestinationCard destination={destination} />
                </div>
              ))}
            </Carousel>
          </div>

          <div className="text-center mt-12">
            <a href="/international" className="btn-primary text-lg px-8 py-4">
              View All International
            </a>
          </div>
        </div>
      </section>

      {/* Featured domestic */}
      <section id="domestic" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Featured <span className="gradient-text">Domestic Tours</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handpicked travel packages designed to give you the best
              experience
            </p>
          </div>

          <div className="relative w-full pb-16">
            <Carousel
              responsive={responsiveSettings}
              ssr={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={4000}
              keyBoardControl={true}
              customTransition="all .5s linear"
              transitionDuration={2000} // Increased from 300ms to 2000ms for a smoother slide
              containerClass="carousel-container"
              itemClass="carousel-item-padding-40-px cursor-grab select-none"
              renderButtonGroupOutside={true}
            >
              {featuredDomestic.map((packageItem) => (
                <div key={packageItem.id} className="px-2">
                  <PackageCard package={packageItem} />
                </div>
              ))}
            </Carousel>
          </div>

          <div className="text-center mt-12">
            <a href="/domestic" className="btn-primary text-lg px-8 py-4">
              View All Domestics
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section-padding bg-white">
  <div className="container-custom">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
        Travel <span className="gradient-text">Gallery</span>
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Explore stunning destinations through our curated collection of travel
        photos
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {imagesToDisplay.map((image) => (
        <div
          key={image.id}
          className="group relative overflow-hidden rounded-xl cursor-pointer"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-bold">{image.title}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="text-center mt-12">
      <Link to="/gallery" className="btn-primary text-lg px-8 py-4">
        View Full Gallery
      </Link>
    </div>
  </div>
</section>

      {/* Founder Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-red-500 to-white text-gray-800">
        <div className="container mx-auto px-4 md:grid md:grid-cols-2 md:gap-16 items-center">
          {/* Image */}
          <div className="flex justify-center p-8 md:p-0 mb-8 md:mb-0">
            <img
              src={image}
              alt="Mr. Venu Gopal"
              className="rounded-full shadow-lg w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover border-4 border-red-500"
            />
          </div>
          {/* Text */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-gray-800">
              Meet Our Founder
            </h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed text-gray-800">
              Mr. Venu Gopal, the visionary behind Holiday Destiny, has
              dedicated over a decade to crafting unforgettable travel
              experiences for thousands of travelers worldwide. His deep
              understanding of the tourism industry, coupled with a passion for
              customer satisfaction, has made Holiday Destiny a trusted name in
              travel.
            </p>
            <div>
              <p className="text-2xl md:text-3xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-gray-800">
                Mr. Venu Gopal
              </p>
              <p className="text-base md:text-lg text-gray-800 mb-2">
                Founder & Head of Operations
              </p>
              <p className="text-sm md:text-base text-gray-800">📞 9885164442</p>
              <p className="text-sm md:text-base text-gray-800">
                ✉️{" "}
                <a href="mailto:chitta_venu@yahoo.com" className="hover:underline">
                  chitta_venu@yahoo.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section
        id="contact"
        className="section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50"
      >
        <div className="container-custom">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to start your next adventure? Reach out to us and we’ll help
              you plan the perfect trip!
            </p>
          </div>

          {/* Contact Info */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Email Card */}
            <div className="bg-white shadow-lg hover:shadow-xl transition rounded-2xl p-8 flex items-center space-x-4">
              <div className="w-14 h-14 btn-secondary rounded-full flex items-center justify-center text-white text-2xl">
                ✉️
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email Us</h3>
                <p className="text-gray-600">enquiry@holidaydestiny.co.in</p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white shadow-lg hover:shadow-xl transition rounded-2xl p-8 flex items-center space-x-4">
              <div className="w-14 h-14 btn-secondary rounded-full flex items-center justify-center text-white text-2xl">
                📞
              </div>
              <div>
                <h3 className="text-lg font-semibold">Call Us</h3>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="/contact"
              className="inline-block btn-primary text-white font-semibold text-lg px-10 py-4 rounded-xl shadow-md hover:scale-105 hover:shadow-xl transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[url('https://myholidayhappiness.com/uploads/andhra-pradesh-5299.jpg')] bg-cover bg-center bg-no-repeat relative">
        <div className="container-custom text-center bg-black/40 p-8 rounded-2xl">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of happy travelers who have discovered amazing
            destinations with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/international"
              className="btn-primary font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Explore Internationals
            </a>
            <a
              href="/contact"
              className="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-xl border-2 border-white transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
