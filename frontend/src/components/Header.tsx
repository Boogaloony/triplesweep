import { COMPANY_INFO } from "@/constants";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            {COMPANY_INFO.name}
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/services" className="hover:text-primary transition-colors">
              Services
            </Link>
            <Link to="/pictures" className="hover:text-primary transition-colors">
              Pictures
            </Link>
            <Link to="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col gap-4">
              <Link 
                to="/" 
                className="hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className="hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/pictures" 
                className="hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Pictures
              </Link>
              <Link 
                to="/contact" 
                className="hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}; 