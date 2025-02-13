import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';  // Remove PrismIcon import since it's no longer needed

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const logoUrl = "https://dbawonxtljsjrsbrjruh.supabase.co/storage/v1/object/public/public-assets//prismlogo.png"; // Define the logo URL

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-2">
              <img src={logoUrl} alt="Prism Partners Logo" className="h-8 w-8" />  {/* Use img tag for logo */}
              <span className="font-inter font-bold text-xl text-prism-charcoal">
                Prism Partners
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link to="/" className="font-manrope text-gray-700 hover:text-prism-indigo">
              Home
            </Link>
            <Link to="/about" className="font-manrope text-gray-700 hover:text-prism-indigo">
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-prism-indigo"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/about"
              className="block px-3 py-2 text-base font-manrope text-gray-700 hover:text-prism-indigo"
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
