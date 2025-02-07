import { COMPANY_INFO } from "@/constants";

export const About = () => {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About {COMPANY_INFO.name}</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              Welcome to {COMPANY_INFO.name}, your trusted lawn care service provider in {COMPANY_INFO.location}. 
              We take pride in transforming ordinary yards into extraordinary outdoor spaces.
            </p>
            
            <p className="text-lg">
              With years of experience in lawn care and maintenance, our team is dedicated to 
              providing top-quality service that exceeds your expectations.
            </p>
            
            <p className="text-lg">
              We believe in sustainable lawn care practices that not only make your yard look 
              beautiful but also contribute to a healthier environment.
            </p>
          </div>
          
          <div className="bg-secondary p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                Professional and reliable service
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                Experienced team
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                Competitive pricing
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                Satisfaction guaranteed
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}; 