import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const products = [
    'Automatic Paver Blocks',
    'RCC Pipes',
    'Rubbermold Pavers',
    'Kerb Stones',
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
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition">
                <Instagram size={20} />
              </a>
            </div>
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
              {products.map((product, index) => (
                <li key={index}>
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
                <a
                  href="tel:+919839001962"
                  className="text-gray-400 hover:text-yellow-400 transition"
                >
                  +91 9839001962
                </a>
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
                <span className="text-gray-400">
                  M/s Hitech Concrete Products
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            © {currentYear} Hitech Concrete Products. All rights reserved. | Manufactured in accordance with IS Standards
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;