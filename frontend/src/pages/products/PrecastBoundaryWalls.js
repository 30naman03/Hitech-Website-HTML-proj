import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Phone } from 'lucide-react';

const PrecastBoundaryWalls = () => {
  const installationGallery = [
    '/products/boundary-wall-red-pavers.png',
    '/products/boundary-wall-white-panels.png',
    '/products/boundary-wall-striped-garden.png',
    '/products/boundary-wall-construction.png',
    '/products/boundary-wall-industrial.png',
  ];

  const productTypes = [
    'Compound Walls',
    'Godown Walls',
    'Concrete Boundary Walls',
    'Precast Boundary Walls',
    'Prestressed Boundary Walls',
  ];

  const specifications = [
    'Thickness: 2 inch or 3 inch options',
    'Custom heights and lengths',
    'Prestressed options available',
    'Quick installation process',
    'High security and durability',
    'Cost-effective solution',
    'Various design options',
  ];

  const features = [
    'Complete boundary wall solutions',
    'Industry-standard designs and parameters',
    'Provides security and clear property limits',
    'Fast and easy installation',
    'Long-lasting durability',
    'Low maintenance requirements',
    'Custom designs available',
  ];

  const applications = [
    'Property boundaries',
    'Industrial sites',
    'Warehouses',
    'Residential complexes',
    'Security perimeters',
    'Commercial properties',
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Precast Boundary Walls</h1>
          <div className="max-w-4xl space-y-4 text-lg text-gray-700">
            <p>
              At Hitech Concrete Products, we specialize in high-quality <strong>precast concrete boundary walls</strong> that provide both security and clear property demarcation. Our walls are designed to meet industry standards, offering the perfect solution for defining property limits while ensuring durability and aesthetic appeal.
            </p>
            <p>
              Available in <strong>2 inch or 3 inch thickness</strong> with custom heights and lengths, our precast boundary walls combine strength, quick installation, and minimal maintenance for long-term value in residential, commercial, and industrial applications.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img src="/products/boundary-wall-red-pavers.png" alt="Precast Boundary Walls" className="w-full h-96 object-cover" />
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
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
                <li key={index} className="flex items-start gap-3">
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
              <span key={index} className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">{app}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Installation Gallery</h2>
          <p className="text-gray-600 mb-6">Real-world installations showcasing Hitech precast boundary walls in various settings</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {installationGallery.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <img src={image} alt={`Boundary Wall Installation ${index + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white p-12 rounded-xl shadow-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Boundary Wall Solutions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Custom-designed precast walls for your property</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-yellow-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-600 transition-all inline-block">Request a Quote</Link>
            <a href="tel:+919839001962" className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all inline-flex items-center justify-center gap-2">
              <Phone size={20} />Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrecastBoundaryWalls;