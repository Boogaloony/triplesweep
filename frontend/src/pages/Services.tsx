import { Scissors, Home, Trash } from "lucide-react";
import { COMPANY_INFO } from "@/constants";

const services = [
  {
    title: "Lawn Mowing",
    description: "Regular lawn mowing service to keep your yard looking pristine. We ensure the perfect cut height for your grass type and season.",
    icon: Scissors,
    price: "From $30",
  },
  {
    title: "Garden Maintenance",
    description: "Complete garden care including weeding, pruning, and plant care to keep your garden healthy and beautiful.",
    icon: Home,
    price: "From $45",
  },
  {
    title: "Gutter Cleaning",
    description: "Thorough gutter cleaning service to prevent water damage and maintain your home's integrity.",
    icon: Trash,
    price: "From $80",
  },
];

export const Services = () => {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
          At {COMPANY_INFO.name}, we offer a comprehensive range of lawn care and maintenance 
          services to keep your outdoor space looking its best all year round.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-primary font-semibold">{service.price}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg mb-4">Contact us for a free quote</p>
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Call {COMPANY_INFO.phone}
          </a>
        </div>
      </div>
    </div>
  );
}; 