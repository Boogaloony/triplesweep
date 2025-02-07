import { COMPANY_INFO, SOCIAL_LINKS } from '@/constants';
import { Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-secondary py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center md:text-left">
          <h3 className="font-bold text-lg mb-4">{COMPANY_INFO.name}</h3>
          <p>{COMPANY_INFO.description}</p>
        </div>
        
        <div className="text-center">
          <h3 className="font-bold text-lg mb-4">Contact</h3>
          <p>Phone: {COMPANY_INFO.phone}</p>
          <p>Email: {COMPANY_INFO.email}</p>
          <p>{COMPANY_INFO.location}</p>
        </div>
        
        <div className="text-center md:text-right">
          <h3 className="font-bold text-lg mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-end">
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" 
               className="hover:text-primary transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 pt-8 border-t border-gray-200">
        <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}; 