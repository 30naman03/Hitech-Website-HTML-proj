import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Phone } from 'lucide-react';

const ManholeCovers = () => {
  const productGallery = [
    '/products/manhole-rectangular-product.jpg',
    '/products/manhole-circular-frame.jpg',
    '/products/manhole-square-perforated.jpg',
  ];

  const installationGallery = [
    '/products/manhole-brick-installation.jpg',
    '/products/manhole-pathway-installation.jpg',
  ];

  const manholeSpecs = [
    { size: '300x300', grade: 'LD', frameH: '80', coverH: '40', coverDim: '340', weight: '31kg' },
    { size: '300x300', grade: 'MD', frameH: '120', coverH: '70', coverDim: '405', weight: '70kg' },
    { size: '450x450', grade: 'MD', frameH: '120', coverH: '70', coverDim: '538', weight: '100kg' },
    { size: '650x450', grade: 'MD', frameH: '120', coverH: '70', coverDim: '685', weight: '120kg' },
    { size: '600x600', grade: 'MD', frameH: '120', coverH: '70', coverDim: '685', weight: '140kg' },
    { size: '600x600', grade: 'HD', frameH: '165', coverH: '90', coverDim: '740', weight: '280kg' },
    { size: '450Ø', grade: 'HD', frameH: '165', coverH: '90', coverDim: '595', weight: '130kg' },
    { size: '560Ø', grade: 'MD', frameH: '120', coverH: '70', coverDim: '650', weight: '100kg' },
    { size: '560Ø', grade: 'HD', frameH: '165', coverH: '90', coverDim: '700', weight: '182kg' },
    { size: '600Ø', grade: 'MD', frameH: '120', coverH: '70', coverDim: '690', weight: '110kg' },
    { size: '600Ø', grade: 'HD', frameH: '165', coverH: '90', coverDim: '750', weight: '193kg' },
    { size: '700Ø', grade: 'HD', frameH: '165', coverH: '90', coverDim: '840', weight: '230kg' },
  ];

  const features = [
    'Qualitative range with premium materials',
    'Multiple sizes and grades available',
    'High load-bearing capacity',
    'Durable and long-lasting',
    'Suitable for various applications',
    'Easy installation and maintenance',
  ];

  const applications = [
    'Municipalities',
    'Utility access',
    'Infrastructure projects',
    'Urban development',
    'Road construction',
    'Commercial areas',
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Manhole Covers</h1>
          <p className="text-xl text-gray-600 max-w-4xl">
            Premium quality manhole covers constructed using high-grade raw materials. Available in multiple sizes and grades for municipalities, utility access, and infrastructure projects.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img src="/products/manhole-brick-installation.jpg" alt="Manhole Covers Installation" className="w-full h-96 object-cover" />
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Manhole Cover Specifications</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="border border-gray-300 px-3 py-3 text-left font-semibold">Size (mm)</th>
                  <th className="border border-gray-300 px-3 py-3 text-center font-semibold">Grade</th>
                  <th className="border border-gray-300 px-3 py-3 text-center font-semibold">Frame H (mm)</th>
                  <th className="border border-gray-300 px-3 py-3 text-center font-semibold">Cover H (mm)</th>
                  <th className="border border-gray-300 px-3 py-3 text-center font-semibold">Cover Dim (mm)</th>
                  <th className="border border-gray-300 px-3 py-3 text-center font-semibold">Weight</th>
                </tr>
              </thead>
              <tbody>
                {manholeSpecs.map((spec, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="border border-gray-300 px-3 py-2 font-medium">{spec.size}</td>
                    <td className="border border-gray-300 px-3 py-2 text-center">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        spec.grade === 'LD' ? 'bg-green-100 text-green-800' :
                        spec.grade === 'MD' ? 'bg-blue-100 text-blue-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {spec.grade}
                      </span>
                    </td>
                    <td className="border border-gray-300 px-3 py-2 text-center">{spec.frameH}</td>
                    <td className="border border-gray-300 px-3 py-2 text-center">{spec.coverH}</td>
                    <td className="border border-gray-300 px-3 py-2 text-center">{spec.coverDim}</td>
                    <td className="border border-gray-300 px-3 py-2 text-center font-semibold">{spec.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 grid md:grid-cols-3 gap-4 text-sm text-gray-600">
            <p><strong>Grades:</strong> LD = Light Duty, MD = Medium Duty, HD = Heavy Duty</p>
            <p><strong>Note:</strong> Ø = Diameter (Circular covers)</p>
            <p><strong>Weight:</strong> Approximate weight per set</p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Product Photos</h2>
          <p className="text-gray-600 mb-6">High-quality manhole covers and frames</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {productGallery.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow bg-white">
                <img src={image} alt={`Manhole Cover Product ${index + 1}`} className="w-full h-auto object-contain hover:scale-110 transition-transform duration-500" style={{minHeight: '300px'}} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Installation Gallery</h2>
          <p className="text-gray-600 mb-6">Real-world installations showcasing Hitech manhole covers</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {installationGallery.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <img src={image} alt={`Manhole Installation ${index + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white p-12 rounded-xl shadow-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Manhole Covers?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Available in LD, MD, and HD grades for all applications</p>
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

export default ManholeCovers;