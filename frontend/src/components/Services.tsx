import { Scissors, Home, Trash } from "lucide-react";

const services = [
  {
    title: "Lawn Mowing",
    description: "Professional lawn mowing services to keep your yard looking pristine",
    icon: Scissors,
  },
  {
    title: "Gardening",
    description: "Complete garden maintenance and care services",
    icon: Home,
  },
  {
    title: "Gutter Cleaning",
    description: "Thorough gutter cleaning to protect your home",
    icon: Trash,
  },
];

export const Services = () => {
  return (
    <section className="py-16 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">{service.title}</h3>
              <p className="text-center text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};