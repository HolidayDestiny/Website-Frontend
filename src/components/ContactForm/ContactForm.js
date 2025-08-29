import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    travelType: '',
    budget: '',
    travelDate: '',
    numberOfTravelers: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const travelTypes = [
    'Beach Vacation',
    'Mountain Adventure',
    'City Break',
    'Cultural Tour',
    'Luxury Escape',
    'Adventure Sports',
    'Honeymoon',
    'Family Trip',
    'Business Travel',
    'Other'
  ];

  const budgetRanges = [
    'Under $1,000',
    '$1,000 - $2,500',
    '$2,500 - $5,000',
    '$5,000 - $10,000',
    'Over $10,000'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        travelType: '',
        budget: '',
        travelDate: '',
        numberOfTravelers: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      <div className="form-header">
        <h2>Get in Touch</h2>
        <p>Ready to start your next adventure? Let us help you plan the perfect trip!</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              placeholder="Enter your first name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name *</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              placeholder="Enter your last name"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="travelType">Type of Travel</label>
            <select
              id="travelType"
              name="travelType"
              value={formData.travelType}
              onChange={handleChange}
            >
              <option value="">Select travel type</option>
              {travelTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="budget">Budget Range</label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
            >
              <option value="">Select budget range</option>
              {budgetRanges.map(budget => (
                <option key={budget} value={budget}>{budget}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="travelDate">Preferred Travel Date</label>
            <input
              type="date"
              id="travelDate"
              name="travelDate"
              value={formData.travelDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="numberOfTravelers">Number of Travelers</label>
            <input
              type="number"
              id="numberOfTravelers"
              name="numberOfTravelers"
              value={formData.numberOfTravelers}
              onChange={handleChange}
              min="1"
              max="20"
              placeholder="Number of people"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject *</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="What's your inquiry about?"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            placeholder="Tell us more about your travel plans, preferences, or any questions you have..."
          ></textarea>
        </div>

        <div className="form-actions">
          <button
            type="submit"
            className={`submit-button ${isSubmitting ? 'loading' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="spinner"></span>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </div>

        {submitStatus && (
          <div className={`submit-status ${submitStatus}`}>
            {submitStatus === 'success' ? (
              <div className="success-message">
                <span className="status-icon">✅</span>
                <div>
                  <h4>Message Sent Successfully!</h4>
                  <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
                </div>
              </div>
            ) : (
              <div className="error-message">
                <span className="status-icon">❌</span>
                <div>
                  <h4>Something went wrong</h4>
                  <p>Please try again or contact us directly at enquiry@holidaydestiny.co.in</p>
                </div>
              </div>
            )}
          </div>
        )}
      </form>

      <div className="contact-info">
        <div className="info-item">
          <span className="info-icon">📧</span>
          <div>
            <h4>Email</h4>
            <p>enquiry@holidaydestiny.co.in</p>
          </div>
        </div>
        <div className="info-item">
          <span className="info-icon">📞</span>
          <div>
            <h4>Phone</h4>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="info-item">
          <span className="info-icon">📍</span>
          <div>
            <h4>Address</h4>
            <p>123 Travel Street, Adventure City, AC 12345</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm; 