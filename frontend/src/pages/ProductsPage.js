import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Automatic Paver Blocks',
      category: 'pavers',
      featured: true,
      slug: 'automatic-paver-blocks',
      image: '/products/auto-paver-pathway.jpeg',
      description: 'Manufactured using fully automatic machinery for uniform compaction, precise dimensions, and superior strength.',
      specifications: [
        'Brick Type: 200x100x80/60mm',
        'Zigzag Type: 225x112.5x80/60mm',
        'Square Type: 200SQ 80/60mm',
        'High compressive strength',
        'Uniform finish and accurate dimensions',
      ],
      applications: ['Driveways', 'Parking areas', 'Footpaths', 'Industrial yards', 'Commercial pavements'],
    },
    {
      id: 2,
      name: 'RCC Pipes (Hume Pipes)',
      category: 'pipes',
      featured: true,
      slug: 'rcc-pipes',
      image: '/products/rcc-pipe-closeup.jpg',
      description: 'Manufactured to Indian Standard Specification IS 458:2003 for drainage, sewage, and irrigation systems.',
      specifications: [
        'Diameters: 150mm to 2400mm',
        'Standard Lengths: 2.0m to 2.5m',
        'Classes: NP2, NP3 & NP4',
        'Types: Plain, Collar Joint, Flush Joint, Socket & Spigot',
        'IS 458:2003 Certified',
      ],
      applications: ['Drainage systems', 'Sewage lines', 'Irrigation projects', 'Underground pipelines'],
    },
    {
      id: 3,
      name: 'Rubbermold Paver Blocks',
      category: 'pavers',
      featured: false,
      slug: 'rubbermold-paver-blocks',
      image: '/products/rubbermold-driveway.jpg',
      description: 'Durable, aesthetically designed in multiple shapes, colours, and thicknesses.',
      specifications: [
        '250x125x80mm',
        '200x100x80mm',
        '200x100x60mm',
        '200x200x80mm',
        '200x200x60mm',
        '100x100x80mm',
        '100x100x60mm',
        'Grass paver and Round Dumble available on request',
      ],
      applications: ['Walkways', 'Driveways', 'Gardens', 'Commercial complexes', 'Heavy-duty applications'],
    },
    {
      id: 4,
      name: 'Kerb Stones',
      category: 'others',
      featured: false,
      slug: 'kerb-stones',
      image: '/products/kerb-installation-landscape.jpg',
      description: 'Durable, precisely molded for road edges, pathways, parking lots, and landscaping applications.',
      specifications: [
        'Types: Taper, Round, Moulding',
        'Various dimensions and weights',
        'Colored options: Black, Red',
        'High durability',
        'Precise molding',
      ],
      applications: ['Road edges', 'Pathways', 'Parking lots', 'Landscaping', 'Garden borders'],
    },
    {
      id: 5,
      name: 'Saucer and Drain Covers',
      category: 'others',
      featured: false,
      slug: 'saucer-drain-covers',
      image: '/products/kerb-cover-installation.webp',
      description: 'Durable, accurately cast for efficient surface water management.',
      specifications: [
        'Multiple types with specific dimensions',
        'Curved profile for smooth water flow',
        'Reduces clogging',
        'Perforated and solid slabs',
        'Long-lasting performance',
      ],
      applications: ['Roadsides', 'Pathways', 'Parking areas', 'Commercial premises', 'Water management'],
    },
    {
      id: 6,
      name: 'Manhole Covers',
      category: 'others',
      featured: false,
      slug: 'manhole-covers',
      image: '/products/manhole-brick-installation.jpg',
      description: 'Qualitative range constructed using premium quality raw material.',
      specifications: [
        'Rectangular: 300x300, 450x450, 600x600',
        'Circular: 450Ø, 560Ø, 600Ø, 700Ø',
        'Grades: LD, MD, HD',
        'Various frame and cover heights',
        'Heavy-duty construction',
      ],
      applications: ['Municipalities', 'Utility access', 'Infrastructure projects', 'Urban development'],
    },
    {
      id: 7,
      name: 'Precast Boundary Walls',
      category: 'others',
      featured: false,
      slug: 'precast-boundary-walls',
      image: '/products/boundary-wall-red-pavers.png',
      description: 'Complete boundary wall solutions including compound walls, godown walls, and prestressed walls.',
      specifications: [
        'Custom heights and lengths',
        'Prestressed options available',
        'Quick installation',
        'High security and durability',
        'Cost-effective',
      ],
      applications: ['Property boundaries', 'Industrial sites', 'Warehouses', 'Residential complexes', 'Security perimeters'],
    },
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'pavers', name: 'Paver Blocks' },
    { id: 'pipes', name: 'RCC Pipes' },
    { id: 'others', name: 'Other Products' },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 md:pt-28">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Products</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Comprehensive range of precast concrete products for all your construction needs
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white shadow-md sticky top-20 md:top-24 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-yellow-500 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                data-testid={`category-filter-${category.id}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden product-card"
                data-testid={`product-card-${product.id}`}
              >
                {product.featured && (
                  <div className="bg-yellow-500 text-white px-4 py-2 text-sm font-bold">
                    ⭐ FEATURED PRODUCT
                  </div>
                )}
                <div className="h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Specifications:</h4>
                    <ul className="space-y-1">
                      {product.specifications.slice(0, 3).map((spec) => (
                        <li key={spec} className="text-sm text-gray-600 flex items-start gap-2">
                          <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.slice(0, 3).map((app) => (
                        <span
                          key={app}
                          className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={`/products/${product.slug}`}
                    className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-all inline-flex items-center gap-2 w-full justify-center"
                    data-testid={`view-details-${product.id}`}
                  >
                    View Details <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Need Custom Solutions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We provide tailored engineering packages and custom-designed products for your specific requirements
          </p>
          <a
            href="/contact"
            className="bg-yellow-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-600 transition-all inline-block hover:scale-105"
            data-testid="products-cta-contact"
          >
            Request a Quote
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;