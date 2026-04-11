import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Phone } from 'lucide-react';

const SaucerDrainCovers = () => {
  const gallery = [
    'https://images.pexels.com/photos/185039/pexels-photo-185039.jpeg',
    'https://images.unsplash.com/photo-1637939911694-dd0c58c18271',
    'https://images.unsplash.com/photo-1545459720-aac8509eb02c',
  ];

  const saucerDrainSpecs = [
    { item: '1', type: '', w: '300', rl: '300', th: '90/100', weight: '17.5' },
    { item: '2', type: '', w: '300', rl: '300', th: '75/80', weight: '11' },
    { item: '3', type: '(perforated)', w: '300', rl: '300', th: '90/100', weight: '16' },
    { item: '4', type: '', w: '450', rl: '300', th: '90/100', weight: '23.5' },
    { item: '5', type: '', w: '450', rl: '450', th: '90/100', weight: '37.5' },
    { item: '6', type: '(perforated)', w: '450', rl: '600', th: '90/100', weight: '50.5' },
    { item: '7', type: 'New KCD', w: '300', rl: '300', th: '155', weight: '23.5' },
  ];

  const slabSpecs = [
    { label: 'A', type: '', w: '450', rl: '600', th: '65/70', weight: '37.5' },
    { label: 'A', type: '', w: '450', rl: '600', th: '90/100', weight: '51.5' },
    { label: 'B', type: '(Perforated)', w: '450', rl: '600', th: '65/70', weight: '37.5' },
    { label: 'B', type: '(Perforated)', w: '450', rl: '600', th: '90/100', weight: '60.5' },
  ];

  const features = [
    'Durable and accurately cast',
    'Efficient surface water management',
    'Smooth water flow design',
    'Clog-resistant',
    'Easy maintenance',
    'Suitable for high-traffic areas',
  ];

  const applications = [
    'Roadsides',
    'Pathways',
    'Parking areas',
    'Commercial premises',
    'Water management systems',
    'Urban infrastructure',
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Saucer and Drain Covers</h1>
          <p className="text-xl text-gray-600 max-w-4xl">
            Durable, accurately cast saucer and drain covers for efficient surface water management along roadsides, pathways, parking areas, and commercial premises.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img src={gallery[0]} alt="Saucer and Drain Covers" className="w-full h-96 object-cover" />
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
          <ul className="grid md:grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Saucer Drains Specifications</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Item No.</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Type</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">W (mm)</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">RL (mm)</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">TH (mm)</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Wt. (kg)</th>
                </tr>
              </thead>
              <tbody>
                {saucerDrainSpecs.map((spec, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="border border-gray-300 px-4 py-2 text-center font-medium">{spec.item}</td>
                    <td className="border border-gray-300 px-4 py-2">{spec.type}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">{spec.w}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">{spec.rl}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">{spec.th}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">{spec.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-8">Slabs Specifications</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Label</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Type</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">W (mm)</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">RL (mm)</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">TH (mm)</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Wt. (kg)</th>
                </tr>
              </thead>
              <tbody>
                {slabSpecs.map((spec, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="border border-gray-300 px-4 py-2 text-center font-medium">{spec.label}</td>
                    <td className="border border-gray-300 px-4 py-2">{spec.type}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">{spec.w}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">{spec.rl}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">{spec.th}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">{spec.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p className="text-sm text-gray-600 mt-4">
            <strong>Note:</strong> W = Width, RL = Running Length, TH = Thickness
          </p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <img src={image} alt={`Drain Covers ${index + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white p-12 rounded-xl shadow-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Drainage Solutions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Get efficient water management products for your project</p>
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

export default SaucerDrainCovers;