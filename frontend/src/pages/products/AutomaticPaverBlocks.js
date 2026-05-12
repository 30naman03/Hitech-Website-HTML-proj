import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Phone } from 'lucide-react';

const AutomaticPaverBlocks = () => {
  const gallery = [
    '/products/auto-paver-colors.jpeg',
    '/products/auto-paver-pathway.jpeg',
    '/products/auto-paver-road.jpeg',
    '/products/auto-paver-park.jpg',
    '/products/auto-paver-herringbone.png',
    '/products/auto-paver-circular.png',
    '/products/auto-paver-zr80.jpg',
    '/products/auto-paver-zigzag.png',
    '/products/auto-paver-square.jpeg',
  ];

  const specifications = [
    'Brick Type Paver: 200x100x80/60mm',
    'Zigzag Type Paver: 225x112.5x80/60mm',
    'Square Type Paver: 200SQ 80/60mm',
    'Available in multiple attractive colors',
    'Interlocking and designer patterns',
  ];

  const features = [
    'Manufactured using fully automatic machinery',
    'Uniform compaction ensuring precise dimensions',
    'Premium raw materials with strict quality control',
    'Excellent durability and abrasion resistance',
    'Long service life with minimal maintenance',
    'Wide range of colors and patterns',
  ];

  const applications = [
    'Driveways',
    'Parking areas',
    'Footpaths',
    'Industrial yards',
    'Commercial pavements',
    'Public spaces',
    'Residential pathways',
  ];

  return (
    <div className="min-h-screen pt-24 md:pt-28 bg-gray-50">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-4">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-yellow-500 transition"
          data-testid="back-to-products"
        >
          <ArrowLeft size={20} />
          <span>Back to Products</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-bold">
              ⭐ FEATURED PRODUCT
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Automatic Paver Blocks
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mb-4">
            Hitech Concrete Product manufactures high-quality Automatic Paver Blocks using fully automatic machinery to ensure uniform compaction, precise dimensions, and superior strength. Made from premium raw materials under strict quality control, these paver blocks offer excellent durability, abrasion resistance, and long service life.
          </p>
          <p className="text-lg text-gray-700 max-w-4xl">
            Perfect for driveways, parking areas, footpaths, industrial yards, and commercial pavements. Available in multiple attractive colors and designer patterns to enhance any space.
          </p>
        </div>
      </section>

      {/* Main Image */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            src={gallery[0]}
            alt="Automatic Paver Blocks"
            className="w-full h-96 object-cover"
          />
        </div>
      </section>

      {/* Content Grid */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Features */}
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

          {/* Specifications */}
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
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Applications</h2>
          <div className="flex flex-wrap gap-3">
            {applications.map((app, index) => (
              <span
                key={feature}
                className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold"
              >
                {app}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((image, index) => (
              <div
                key={feature}
                className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <img
                  src={image}
                  alt={`Automatic Paver Blocks ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white p-12 rounded-xl shadow-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interested in Automatic Paver Blocks?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for quotes, technical specifications, or custom requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-yellow-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-600 transition-all inline-block"
            >
              Request a Quote
            </Link>
            <a
              href="tel:+919839001970"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutomaticPaverBlocks;