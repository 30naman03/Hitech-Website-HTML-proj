import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Award, Users, Clock, Shield } from 'lucide-react';

const HomePage = () => {
  const featuredProducts = [
    {
      name: 'Automatic Paver Blocks',
      description: 'Premium quality paver blocks manufactured using fully automatic machinery for uniform compaction and superior strength.',
      image: '/products/auto-paver-colors.jpeg',
      features: ['High Compressive Strength', 'Uniform Finish', 'Durable & Low Maintenance'],
    },
    {
      name: 'RCC Pipes',
      description: 'Manufactured to IS 458:2003 standards. Available in diameters from 150mm to 2400mm for all drainage and sewage needs.',
      image: '/products/rcc-pipe-closeup.jpg',
      features: ['IS 458:2003 Certified', 'Custom Lengths', 'NP2, NP3 & NP4 Classes'],
    },
  ];

  const stats = [
    { icon: Award, value: '20+', label: 'Years Experience' },
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Shield, value: 'IS Certified', label: 'Quality Standards' },
    { icon: Clock, value: '24/7', label: 'Customer Support' },
  ];

  const usps = [
    {
      title: 'Modern Technology',
      description: 'Fully automatic plants ensuring consistent quality and precision',
      icon: '🏭',
    },
    {
      title: 'Stringent Quality Control',
      description: 'Every product tested to meet IS standards',
      icon: '✓',
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored engineering packages for your projects',
      icon: '⚙️',
    },
    {
      title: 'Timely Execution',
      description: 'On-time delivery',
      icon: '⏱️',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(/hero-background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Hitech Concrete Product
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Premium quality precast concrete products manufactured with modern technology and stringent quality control since 2004
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/products"
              className="bg-yellow-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-600 transition-all hover:scale-105 inline-flex items-center justify-center gap-2 btn-primary"
              data-testid="hero-explore-products-btn"
            >
              Explore Our Products <ArrowRight />
            </Link>
            <Link
              to="/contact"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
              data-testid="hero-get-quote-btn"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                  <div className="text-4xl font-bold text-yellow-400 mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our flagship products trusted by hundreds of clients across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden product-card"
                data-testid={`featured-product-${index}`}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/products"
                    className="text-yellow-500 font-semibold hover:text-yellow-600 inline-flex items-center gap-2"
                  >
                    View Details <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Hitech?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Excellence in every aspect of concrete product manufacturing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {usps.map((usp, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
                data-testid={`usp-card-${index}`}
              >
                <div className="text-5xl mb-4">{usp.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{usp.title}</h3>
                <p className="text-gray-600">{usp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-20 text-white"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1717386255773-a456c611dc4e)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gray-900/80"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get in touch with us today for custom solutions and competitive pricing
          </p>
          <Link
            to="/contact"
            className="bg-yellow-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-600 transition-all hover:scale-105 inline-flex items-center gap-2 btn-primary"
            data-testid="cta-contact-btn"
          >
            Contact Us Now <ArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;