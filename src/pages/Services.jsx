import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import banner from "../assets/images/services-banner.jpg";

const Services = () => {
const services = [
  {
    id: "flights",
    title: "Flight Booking",
    description:
      "Find and book the best deals on flights to destinations worldwide. We offer flexible options and competitive prices for all your travel needs.",
    icon: "✈️",
  },
  {
    id: "hotels",
    title: "Hotel Reservations",
    description:
      "Choose from a wide range of accommodations, from luxury resorts to budget-friendly stays. Our selection ensures you find the perfect place to relax.",
    icon: "🏨",
  },
  {
    id: "insurance",
    title: "Travel Insurance",
    description:
      "Protect your trip with comprehensive travel insurance. We offer plans that cover cancellations, medical emergencies, and lost baggage for peace of mind.",
    icon: "🛡️",
  },
  {
    id: "visa",
    title: "Visa Services",
    description:
      "Simplify your international travel with our expert visa assistance. We guide you through the application process to ensure a smooth and hassle-free experience.",
    icon: "🛂",
  },
  {
    id: "tours",
    title: "Guided Tours",
    description:
      "Discover local culture and hidden gems with our curated guided tours. Our experienced guides provide unique insights and unforgettable adventures.",
    icon: "🗺️",
  },
  {
    id: "foreign-exchange",
    title: "Foreign Exchange",
    description:
      "Get the best exchange rates for your currency needs. We provide secure and convenient services to handle your foreign cash and traveler's checks.",
    icon: "💵",
  },
  {
    id: "event-planning",
    title: "Event Planning",
    description:
      "From corporate events to destination weddings, our team plans and manages every detail to ensure a memorable and successful occasion.",
    icon: "🎉",
  },
];

  return (
    <>
      <Helmet>
        <title>Our Services - Holiday Destiny</title>
        <meta
          name="description"
          content="Explore the range of travel services offered by Holiday Destiny, including flight booking, hotel reservations, and more."
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
            Our{" "}
            <span className="gradient-text bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Your complete travel solution. From booking to boarding, we've got
            you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              What We Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide a comprehensive suite of travel services to make your
              journey seamless and enjoyable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Flex container for icon and button, with justify-between */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{service.icon}</div>
                    <Link
                      to="/contact"
                      className="inline-block px-4 py-2  text-white rounded-full text-sm font-medium btn-primary transition-colors duration-300"
                    >
                      Explore
                    </Link>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Plan Your Journey?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Get in touch with our travel experts to create a custom itinerary
            that suits your needs and budget.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
