import { Mail, Phone, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/constants";

export const Contact = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <Phone className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <a href={`tel:${COMPANY_INFO.phone}`} className="text-gray-600 hover:text-primary">
              {COMPANY_INFO.phone}
            </a>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <Mail className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <a href={`mailto:${COMPANY_INFO.email}`} className="text-gray-600 hover:text-primary">
              {COMPANY_INFO.email}
            </a>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <MapPin className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-600 text-center">
              {COMPANY_INFO.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};