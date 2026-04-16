import React from 'react';
import { CheckCircle, Award, Target, Users } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Every product manufactured to the highest IS standards with rigorous quality control',
    },
    {
      icon: Target,
      title: 'Customer Focus',
      description: 'Dedicated to providing custom solutions and total engineering packages',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled professionals with decades of combined experience in concrete technology',
    },
  ];

  const milestones = [
    { year: '2004', event: 'Hitech Concrete Product established' },
    { year: '2008', event: 'Installed first fully automatic paver block plant' },
    { year: '2012', event: 'IS 458:2003 certification achieved for RCC Pipes' },
    { year: '2015', event: 'Expanded product range to 8+ categories' },
    { year: '2020', event: 'Served 500+ satisfied clients across India' },
    { year: '2024', event: 'Continuing innovation in precast concrete technology' },
  ];

  return (
    <div className="min-h-screen pt-24 md:pt-28">
      {/* Hero Section */}
      <section
        className="relative py-20 text-white"
        style={{
          backgroundImage: 'url(/about-hero-daman.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gray-900/67"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Hitech</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Two decades of excellence in precast concrete manufacturing
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">We Precast Concrete</h2>
              <p className="text-lg text-gray-700 mb-6">
                Established in <strong className="text-yellow-600">2004</strong>, Hitech Concrete Product has earned a reputation for manufacturing, popularizing, and marketing high-quality precast concrete products through modern technology, stringent quality control, timely execution, and continuous research and development.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We specialize in providing custom-made solutions and total engineering packages for pipeline projects and infrastructure development. Our fully automatic plants ensure uniform quality, precise dimensions, and superior strength in every product.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                  <span className="text-gray-700 text-lg">Manufactured to IS Standards (IS 458:2003)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                  <span className="text-gray-700 text-lg">Premium raw materials and quality control</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                  <span className="text-gray-700 text-lg">Custom design and engineering capabilities</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                  <span className="text-gray-700 text-lg">Timely delivery and installation support</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/products/auto-paver-pathway.jpeg"
                alt="Automatic Paver Block Installation"
                className="rounded-lg shadow-lg h-64 object-cover"
              />
              <img
                src="/products/kerb-installation-landscape.jpg"
                alt="Kerb Stone Installation"
                className="rounded-lg shadow-lg h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that drive our commitment to excellence
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition"
                  data-testid={`value-card-${index}`}
                >
                  <Icon className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Milestones in our commitment to quality and innovation
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex gap-6 mb-8 group"
                data-testid={`milestone-${index}`}
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1 bg-white p-6 rounded-lg shadow-md group-hover:shadow-xl transition">
                  <p className="text-lg text-gray-700">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Quality Certifications</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            All our products are manufactured in accordance with Indian Standard Specifications
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white/10 backdrop-blur px-8 py-6 rounded-lg">
              <p className="text-2xl font-bold text-yellow-400">IS 458:2003</p>
              <p className="text-gray-300">RCC Pipes Certified</p>
            </div>
            <div className="bg-white/10 backdrop-blur px-8 py-6 rounded-lg">
              <p className="text-2xl font-bold text-yellow-400">IS Standards</p>
              <p className="text-gray-300">Paver Blocks Compliant</p>
            </div>
            <div className="bg-white/10 backdrop-blur px-8 py-6 rounded-lg">
              <p className="text-2xl font-bold text-yellow-400">Quality Assured</p>
              <p className="text-gray-300">Stringent Testing</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;