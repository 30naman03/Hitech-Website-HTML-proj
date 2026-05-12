import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Phone } from 'lucide-react';

const RCCPipes = () => {
  const gallery = [
    '/products/rcc-pipe-factory1.jpeg',
    '/products/rcc-pipe-closeup.jpg',
    '/products/rcc-pipe-manufacturing.jpeg',
    '/products/rcc-pipe-storage.jpeg',
    '/products/rcc-pipe-factory2.jpeg',
  ];

  const specifications = [
    'Diameters: 150mm to 2400mm',
    'Standard Lengths: 2.0m to 2.5m',
    'Classes: NP2, NP3 & NP4',
    'IS 458:2003 Certified',
    'Custom lengths available on request',
  ];

  const pipeTypes = [
    'Plain',
    'Collar Joint',
    'Flush Joint',
    'Socket & Spigot (S&S)',
  ];

  const features = [
    'Manufactured to Indian Standard Specification IS 458:2003',
    'High strength and durability',
    'Expert design capabilities for custom pipes',
    'Total engineering packages for pipeline projects',
    'Suitable for all drainage and sewage applications',
    'Quality tested for structural integrity',
  ];

  const applications = [
    'Drainage systems',
    'Sewage lines',
    'Irrigation projects',
    'Underground pipelines',
    'Stormwater management',
    'Municipal infrastructure',
  ];

  return (
    <div className="min-h-screen pt-24 md:pt-28 bg-gray-50">
      <div className="container mx-auto px-4 py-4">
        <Link to="/products" className="inline-flex items-center gap-2 text-gray-600 hover:text-yellow-500 transition">
          <ArrowLeft size={20} />
          <span>Back to Products</span>
        </Link>
      </div>

      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-bold">⭐ FEATURED PRODUCT</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">RCC Pipes (Hume Pipes)</h1>
          <p className="text-xl text-gray-600 max-w-4xl">
            High-quality reinforced cement concrete pipes manufactured to IS 458:2003 standards. Perfect for drainage, sewage, and irrigation systems with superior strength and durability.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img src={gallery[0]} alt="RCC Pipes" className="w-full h-96 object-cover" />
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Specifications</h2>
            <ul className="space-y-3">
              {specifications.map((spec, index) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{spec}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Types of Pipes</h3>
              <ul className="space-y-2">
                {pipeTypes.map((type, index) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-700">{type}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Applications</h2>
          <div className="flex flex-wrap gap-3">
            {applications.map((app, index) => (
              <span key={feature} className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">{app}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((image, index) => (
              <div key={feature} className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <img src={image} alt={`RCC Pipes ${index + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white p-12 rounded-xl shadow-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need RCC Pipes for Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Get IS certified pipes with custom dimensions and engineering support</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-yellow-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-600 transition-all inline-block">Request a Quote</Link>
            <a href="tel:+919839001970" className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all inline-flex items-center justify-center gap-2">
              <Phone size={20} />Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RCCPipes;