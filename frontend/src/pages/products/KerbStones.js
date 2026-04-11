import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Phone } from 'lucide-react';

const KerbStones = () => {
  const gallery = [
    '/products/kerb-taper.jpeg',
    '/products/kerb-round.jpeg',
    '/products/kerb-moulding.jpeg',
  ];

  const galleryLabels = ['Taper Type', 'Round Type', 'Moulding Type'];

  const kerbStoneSpecs = [
    { type: 'Taper', h: '250', rl: '600', th: '150', weight: '48' },
    { type: 'Taper', h: '450', rl: '300', th: '150', weight: '43' },
    { type: 'Taper', h: '350', rl: '300', th: '150', weight: '38' },
    { type: 'Taper', h: '300', rl: '300', th: '150', weight: '28' },
    { type: 'Taper', h: '300', rl: '300', th: '100', weight: '17.5' },
    { type: 'Taper', h: '200', rl: '300', th: '150', weight: '17.5' },
    { type: 'Round', h: '300', rl: '300', th: '150', weight: '28' },
    { type: 'Round', h: '300', rl: '450', th: '150', weight: '38.5' },
    { type: 'Moulding', h: '250', rl: '450', th: '150', weight: '35.5' },
  ];

  const features = [
    'Durable and precisely molded',
    'Perfect for road edges and pathways',
    'Available in multiple colors',
    'High load-bearing capacity',
    'Long-lasting finish',
    'Easy installation',
  ];

  const applications = [
    'Road edges',
    'Pathways',
    'Parking lots',
    'Landscaping',
    'Garden borders',
    'Driveway edging',
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Kerb Stones</h1>
          <p className="text-xl text-gray-600 max-w-4xl">
            Durable, precisely molded kerb stones perfect for road edges, pathways, parking lots, and landscaping applications. Available in multiple types and colors.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img src={gallery[0]} alt="Kerb Stones" className="w-full h-96 object-cover" />
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
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Color Options</h3>
              <div className="flex gap-4">
                <span className="px-4 py-2 bg-gray-800 text-white rounded-lg">Black</span>
                <span className="px-4 py-2 bg-red-600 text-white rounded-lg">Red</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Specifications Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Type</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">H (mm)</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">RL (mm)</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">TH (mm)</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Wt. (kg)</th>
                  </tr>
                </thead>
                <tbody>
                  {kerbStoneSpecs.map((spec, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="border border-gray-300 px-4 py-2 font-medium">{spec.type}</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">{spec.h}</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">{spec.rl}</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">{spec.th}</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">{spec.weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              <strong>Note:</strong> H = Height, RL = Running Length, TH = Thickness
            </p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Product Types Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img src={image} alt={galleryLabels[index]} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="bg-gray-800 text-white text-center py-3 font-semibold">
                  {galleryLabels[index]}
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 mt-6 text-center">
            <em>Onsite installation photos will be added soon to showcase real-world applications</em>
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white p-12 rounded-xl shadow-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Kerb Stones for Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Available in taper, round, and moulding types with color options</p>
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

export default KerbStones;