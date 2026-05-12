import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const products = [
    'Automatic Paver Blocks',
    'RCC Pipes',
    'Rubbermold Pavers',
    'Kerb Stones',
    'Saucer Drain',
    'Manhole Covers',
    'Precast Boundary Walls',
  ];

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img
              src="/hitech-logo.png"
              alt="Hitech"
              className="h-16 mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 mb-4">
              Leading manufacturer of high-quality precast concrete products since 2004. We precast concrete with precision and excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-yellow-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-yellow-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-yellow-400 transition">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-yellow-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Our Products</h3>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product}>
                  <Link
                    to="/products"
                    className="text-gray-400 hover:text-yellow-400 transition text-sm"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-yellow-400 mt-1 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+919839001970"
                    className="text-gray-400 hover:text-yellow-400 transition"
                  >
                    +91 9839001970
                  </a>
                  <a
                    href="tel:+916390164990"
                    className="text-gray-400 hover:text-yellow-400 transition"
                  >
                    +91 6390164990
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-yellow-400 mt-1 flex-shrink-0" />
                <a
                  href="mailto:hitecht09@gmail.com"
                  className="text-gray-400 hover:text-yellow-400 transition break-all"
                >
                  hitecht09@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-yellow-400 mt-1 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps/place/Hitech+Concrete+Product/@26.9003149,81.0958083,888m/data=!3m1!1e3!4m6!3m5!1s0x39995f676e346041:0x9aec9976e544c18e!8m2!3d26.900411!4d81.098413!16s%2Fg%2F11bwq968j0?entry=tts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition cursor-pointer hover:underline"
                >
                  Hitech Concrete Product, Village Mohammadpur Chowki, Post Safedabad, Barabanki -225003
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} Hitech Concrete Product. All rights reserved. | Manufactured in accordance with IS Standards
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/hitech-concrete-product/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
                aria-label="Visit our LinkedIn page"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;