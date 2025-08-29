import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import banner from "../assets/images/contact-banner.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    travelType: "",
    travelDate: "",
    numberOfTravelers: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const travelTypes = [
    "International",
    "Domestic",
    "Others",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://website-backend-oupq.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          travelType: "",
          travelDate: "",
          numberOfTravelers: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const googleMapsAddress = encodeURIComponent("309, Babukhan Mall, Somajiguda, Hyderabad 500016");
  const googleMapsUrl = `https://maps.google.com/maps?q=${googleMapsAddress}&t=&z=15&ie=UTF8&iwloc=B&output=embed`;

  return (
    <>
      <Helmet>
        <title>Contact Us - Holiday Destiny</title>
        <meta
          name="description"
          content="Get in touch with us for personalized travel planning and support."
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
            Get in{" "}
            <span className="gradient-text bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Ready to start your next adventure? Let us help you plan the perfect
            trip!
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold gradient-text mb-6">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="travelType"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Type of Travel
                    </label>
                    <select
                      id="travelType"
                      name="travelType"
                      value={formData.travelType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Select travel type</option>
                      {travelTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
  <label
    htmlFor="travelDate"
    className="block text-sm font-medium text-gray-700 mb-2"
  >
    Preferred Travel Date
  </label>
  <input
    type="date"
    id="travelDate"
    name="travelDate"
    value={formData.travelDate}
    onChange={handleChange}
    min={new Date().toISOString().split('T')[0]}
    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
  />
</div>
                </div>

                <div>
                  <label
                    htmlFor="numberOfTravelers"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Number of Travelers
                  </label>
                  <input
                    type="number"
                    id="numberOfTravelers"
                    name="numberOfTravelers"
                    value={formData.numberOfTravelers}
                    onChange={handleChange}
                    min="1"
                    max="20"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Number of people"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="What's your inquiry about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-vertical"
                    placeholder="Tell us more about your travel plans, preferences, or any questions you have..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 flex items-center justify-center gap-2 btn-primary text-white font-bold rounded-lg transition-colors duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>

                {submitStatus && (
                  <div
                    className={`p-4 rounded-lg ${
                      submitStatus === "success"
                        ? "bg-green-50 border border-green-200 text-green-800"
                        : "bg-red-50 border border-red-200 text-red-800"
                    }`}
                  >
                    {submitStatus === "success" ? (
                      <div className="flex items-center gap-3">
                        <svg
                          className="w-5 h-5 text-green-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <div>
                          <h4 className="font-semibold">
                            Message Sent Successfully!
                          </h4>
                          <p className="text-sm">
                            Thank you for contacting us. We'll get back to you
                            within 24 hours.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <svg
                          className="w-5 h-5 text-red-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <div>
                          <h4 className="font-semibold">
                            Something went wrong
                          </h4>
                          <p className="text-sm">
                            Please try again or contact us directly at
                            enquiry@holidaydestiny.co.in
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information & Map */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold gradient-text">
                  Contact Information
                </h2>
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-red-300 rounded-lg flex items-center justify-center flex-shrink-0">
                    <EnvelopeIcon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      Email
                    </h3>
                    <p className="text-gray-600">
                      enquiry@holidaydestiny.co.in
                    </p>
                    <p className="text-sm text-gray-500">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-red-300 rounded-lg flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      Phone
                    </h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-sm text-gray-500">
                      Available during working hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-red-300 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      Address
                    </h3>
                    <p className="text-gray-600">
                      309, Babukhan Mall, Somajiguda, Hyderabad 500016
                    </p>
                    <p className="text-sm text-gray-500">
                      Visit us during office hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div>
                <h2 className="text-3xl font-bold gradient-text mb-6">
                  Find Us
                </h2>
                <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-2xl h-[250px] w-full">
                  <iframe
                    title="Our Location"
                    src={googleMapsUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;


// import React from 'react';
// import { Helmet } from 'react-helmet-async';
// import image from '../assets/images/hero-banner.jpg'; // You'll need to add a contact banner image
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

// const Contact = () => {
//   return (
//     <>
//       <Helmet>
//         <title>Contact Us - Holiday Destiny</title>
//         <meta
//           name="description"
//           content="Get in touch with Holiday Destiny. Contact us for any travel inquiries, support, or bookings."
//         />
//       </Helmet>

//       {/* Hero Section */}
//       <section
//         className="relative bg-cover bg-center text-white min-h-[55vh] flex items-center"
//         style={{
//           backgroundImage: `url(${image})`,
//         }}
//       >
//         {/* Black overlay */}
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//         <div className="container-custom text-center relative z-10">
//           <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
//             Get in{" "}
//             <span className="gradient-text bg-clip-text text-transparent">
//               Touch
//             </span>
//           </h1>
//           <p className="text-xl text-white/90 max-w-2xl mx-auto">
//             We're here to help you plan your perfect journey. Contact our team
//             of travel experts today!
//           </p>
//         </div>
//       </section>

//       {/* Contact Details & Form Section */}
//       <section className="section-padding bg-gray-50">
//         <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Details */}
//           <div>
//             <h2 className="text-4xl font-bold text-gray-800 mb-6">
//               Contact <span className="gradient-text">Details</span>
//             </h2>
//             <p className="text-lg text-gray-600 mb-6 leading-relaxed">
//               Have questions about a tour or need assistance? Reach out to us
//               using the information below. We're available 24/7 to help you.
//             </p>
//             <div className="space-y-6">
//               <div className="flex items-center space-x-4">
//                 <FaPhoneAlt className="text-primary-600 text-2xl" />
//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
//                   <p className="text-gray-600">+91 98765 43210</p>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <FaEnvelope className="text-primary-600 text-2xl" />
//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-800">Email</h3>
//                   <p className="text-gray-600">contact@holidaydestiny.com</p>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <FaMapMarkerAlt className="text-primary-600 text-2xl" />
//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-800">Address</h3>
//                   <p className="text-gray-600">123 Travel Lane, City, Country</p>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <FaGlobe className="text-primary-600 text-2xl" />
//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-800">Website</h3>
//                   <p className="text-gray-600">www.holidaydestiny.com</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
//             <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
//               Send us a <span className="gradient-text">Message</span>
//             </h2>
//             <form className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
//                   placeholder="Your Name"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
//                   placeholder="Your Email"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
//                   placeholder="Subject of your message"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows="4"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
//                   placeholder="Your Message"
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full py-3 px-6 rounded-lg font-bold text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-300"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* Map Section */}
//       <section className="bg-white py-16">
//         <div className="container-custom">
//           <div className="text-center mb-10">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">
//               Find <span className="gradient-text">Us</span>
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Visit our office or find us on the map below.
//             </p>
//           </div>
//           <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-2xl h-[400px] w-full">
//             <iframe
//               title="Our Location"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.7890656096057!2d76.7645100762634!3d30.59604169651594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffb0b9a8f4c29%3A0x33b1e389d4948a2!2sIndo%20World!5e0!3m2!1sen!2sin!4v1709403565352!5m2!1sen!2sin"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Contact;
