import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Phone } from 'lucide-react';

const RubbermoldPaverBlocks = () => {
  const gallery = [
    '/products/rubbermold-driveway.jpg',
    '/products/rubbermold-pathway-border.jpg',
    '/products/rubbermold-herringbone.jpg',
    '/products/rubbermold-decorative.jpg',
    '/products/rubbermold-checkered.jpg',
    '/products/rubbermold-grass-paver.jpg',
    '/products/rubbermold-garden-zigzag.jpg',
    '/products/rubbermold-interlocking-closeup.jpg',
    '/products/rubbermold-commercial.jpg',
  ];

  const specifications = [
    '250x125x80mm',
    '200x100x80mm',
    '200x100x60mm',
    '200x200x80mm',
    '200x200x60mm',
    '100x100x80mm',
    '100x100x60mm',
    'Round Dumble 60mm',
    'Grass paver 80mm',
  ];

  const features = [
    'Durable interlocking design',
    'High strength and load-bearing capacity',
    'Dimensionally accurate with fine finishings',
    'Multiple shapes, colors, and thicknesses',
    'Manufactured in accordance with IS standards',
    'Perfect for decorative applications',
    'Easy installation and replacement',
  ];

  const applications = [
    'Walkways',
    'Driveways',
    'Gardens',
    'Commercial complexes',
    'Heavy-duty applications',
    'Landscaping projects',
  ];

  return (
    <div className="min-h-screen pt-24 md:pt-28 bg-gray-50">
      <div className="container mx-auto px-4 py-4">
        <Link to="/products" className="inline-flex items-center gap-2 text-gray-600 hover:text-yellow-500 transition">
          <ArrowLeft size={20} /><span>Back to Products</span>
        </Link>
      </div>

      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Rubbermold Paver Blocks</h1>
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">INTERLOCKING PAVERS</h2>
          <p className="text-xl text-gray-600 max-w-4xl mb-4">
            We are a profound industry engaged in trading and supplying premium quality Interlocking Pavers. Backed by experienced professionals and well-equipped infrastructure, this range conforms to the highest quality standards.
          </p>
          <p className="text-lg text-gray-700 max-w-4xl">
            Durable, aesthetically designed in multiple shapes, colours, and thicknesses - perfect for walkways, driveways, gardens, and commercial spaces.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img src={gallery[0]} alt="Rubbermold Paver Blocks" className="w-full h-96 object-cover" />
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Available Sizes</h2>
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
                <img src={image} alt={`Rubbermold Pavers ${index + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white p-12 rounded-xl shadow-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Interested in Rubbermold Paver Blocks?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Available in multiple colors and custom designs</p>
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

export default RubbermoldPaverBlocks;