import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github } from 'lucide-react';  // Remove PrismIcon import

const Footer = () => {
  const logoUrl = "https://dbawonxtljsjrsbrjruh.supabase.co/storage/v1/object/public/public-assets//prismlogo.png"; // Define the logo URL

  return (
    <footer className="bg-prism-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logoUrl} alt="Prism Partners Logo" className="h-8 w-8" />  {/* Use img tag for logo */}
              <span className="font-inter font-bold text-xl">Prism Partners</span>
            </Link>
            <p className="font-manrope text-gray-400">
              Illuminate Your Financial Strategy with AI-Driven Insights
            </p>
          </div>

          <div>
            <h3 className="font-inter font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 font-manrope">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-inter font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 font-manrope">
              <li><Link to="/case-studies" className="text-gray-400 hover:text-white">Case Studies</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-inter font-semibold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://github.com" className="text-gray-400 hover:text-white">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 font-manrope">
            © {new Date().getFullYear()} Prism Partners. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
