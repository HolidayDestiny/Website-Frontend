
import React from "react";
import { Helmet } from "react-helmet-async";
import image from "../assets/images/about-banner.jpg";
import AboutSectionImage from '../assets/images/AboutPage.png'

const About = () => {
  const stats = [
    { number: "500+", label: "Destinations" },
    { number: "10K+", label: "Happy Travelers" },
    { number: "15+", label: "Years Experience" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Holiday Destiny</title>
        <meta
          name="description"
          content="Learn about Holiday Destiny's mission, vision, and commitment to delivering unforgettable travel experiences."
        />
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white min-h-[55vh] flex items-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
            About{" "}
            <span className="gradient-text bg-clip-text text-transparent">
              Holiday Destiny
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            “Holiday Destiny (A Unit of Indo World Pvt Ltd)” — turning your
            travel dreams into memorable journeys since 2012.
          </p>
        </div>
      </section>



      {/* About Us Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            About <span className="gradient-text">Us</span>
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              “Holiday Destiny (A Unit of Indo World Pvt Ltd)” strives to
              provide our customers with the very best service in the industry
              today. We are committed to offering travel services of the highest
              quality, combining our energy and enthusiasm with our 15 years of
              experience.
            </p>
            <p>
              Established in 2012, Holiday Destiny has focused on delivering
              quality travel experiences, anticipating the demands of the future
              while meeting the needs of the present.
            </p>
            <p>
              We bridge cultural gaps, promote India & international business,
              and serve as a major source of travel information — offering
              everything from domestic and international tours, flights, hotel
              bookings, passport & visa services, travel insurance, foreign
              exchange, and even event management such as destination weddings.
            </p>
            <p>
              Our goal is to make travel simple, worry-free, and fun for
              corporate, leisure, and student travelers alike. Your satisfaction
              is our top priority, and our 24/7 Traveler's Hotline is always
              available worldwide.
            </p>
          </div>
        </div>
      </section>

            {/* Mission Section */}
            <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Holiday Destiny, we believe that travel has the power to
                transform lives. Our mission is to create extraordinary journeys
                that inspire, educate, and connect people with the world's most
                beautiful destinations.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We're committed to providing exceptional service, competitive
                prices, and unforgettable experiences that exceed your
                expectations. Every trip we plan is crafted with care, attention
                to detail, and a deep understanding of what makes travel truly
                special.
              </p>
             
            </div>
            <div className="relative">
              <img
                src={AboutSectionImage}
                alt="Travel destination"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-primary-600">15+</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Numbers that reflect our passion and dedication
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our <span className="gradient-text">Vision</span>
          </h2>
          <p className="text-2xl font-semibold text-primary-text mb-8">
            “WE MAKE YOUR DESTINATIONS MEMORABLE”
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Thank you for your immense support and the confidence you have
            placed in us. With every tour, we work tirelessly to meet and exceed
            your expectations — making your journey enjoyable, responsible, and
            truly memorable.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
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
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Passion</h3>
              <p className="text-gray-600">
                We're passionate about travel and committed to sharing that
                passion with our clients.
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
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
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Excellence
              </h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our service, from
                planning to execution.
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Community
              </h3>
              <p className="text-gray-600">
                We believe in building lasting relationships with our clients
                and partners.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
