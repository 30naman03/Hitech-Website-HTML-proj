import React, { useState } from 'react';
import axios from 'axios';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product_interest: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const productOptions = [
    'Automatic Paver Blocks',
    'RCC Pipes',
    'Rubbermold Paver Blocks',
    'Interlocking Pavers',
    'Kerb Stones',
    'Saucer and Drain Covers',
    'Manhole Covers',
    'Precast Boundary Walls',
    'Other / General Inquiry',
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await axios.post(`${API}/inquiries`, formData);
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        product_interest: '',
        message: '',
      });
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err.response?.data?.detail || 'Failed to submit inquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: ['+91 9839001970', '+91 6390164990'],
      link: 'tel:+919839001970',
      isMultiple: true,
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'hitecht09@gmail.com',
      link: 'mailto:hitecht09@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Address',
      content: 'Hitech Concrete Product, Village Mohammadpur Chowki, Post Safedabad, Barabanki -225003',
      link: 'https://www.google.com/maps/place/Hitech+Concrete+Product/@26.9003149,81.0958083,888m/data=!3m1!1e3!4m6!3m5!1s0x39995f676e346041:0x9aec9976e544c18e!8m2!3d26.900411!4d81.098413!16s%2Fg%2F11bwq968j0?entry=tts',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon - Sat: 9:00 AM - 6:00 PM',
      link: null,
    },
  ];

  return (
    <div className="min-h-screen pt-24 md:pt-28">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Get in touch for quotes, inquiries, or custom solutions
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition text-center"
                  data-testid={`contact-info-${index}`}
                >
                  <Icon className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                  {info.isMultiple ? (
                    <div className="space-y-1">
                      {info.content.map((item, idx) => (
                        <a
                          key={idx}
                          href={idx === 0 ? 'tel:+919839001970' : 'tel:+916390164990'}
                          className="block text-gray-600 hover:text-yellow-500 transition"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  ) : info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-gray-600 hover:text-yellow-500 transition cursor-pointer hover:underline"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-600">{info.content}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Send Us an Inquiry</h2>
              <p className="text-xl text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            {success && (
              <div
                className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg mb-6 flex items-center gap-3"
                data-testid="success-message"
              >
                <CheckCircle className="flex-shrink-0" />
                <div>
                  <p className="font-semibold">Thank you for your inquiry!</p>
                  <p className="text-sm">We'll contact you shortly.</p>
                </div>
              </div>
            )}

            {error && (
              <div
                className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-lg mb-6"
                data-testid="error-message"
              >
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    minLength={2}
                    maxLength={100}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
                    placeholder="Your name"
                    data-testid="contact-form-name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
                    placeholder="your@email.com"
                    data-testid="contact-form-email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    minLength={10}
                    maxLength={15}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
                    placeholder="+91-XXXXXXXXXX"
                    data-testid="contact-form-phone"
                  />
                </div>
                <div>
                  <label htmlFor="product_interest" className="block text-gray-700 font-semibold mb-2">
                    Product Interest *
                  </label>
                  <select
                    id="product_interest"
                    name="product_interest"
                    value={formData.product_interest}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
                    data-testid="contact-form-product"
                  >
                    <option value="">Select a product</option>
                    {productOptions.map((product, index) => (
                      <option key={index} value={product}>
                        {product}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  minLength={10}
                  maxLength={1000}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Tell us about your requirements..."
                  data-testid="contact-form-message"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-yellow-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-600 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                data-testid="contact-form-submit"
              >
                {loading ? (
                  <>
                    <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Inquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;