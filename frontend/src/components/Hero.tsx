import { PhoneCall } from "lucide-react";
import { useState, useEffect } from "react";
import { COMPANY_INFO } from "@/constants";

export const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageUrl = "/images/background-hero.jpg";  // Update this to match your image's exact filename

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setImageLoaded(true);
  }, [imageUrl]);

  return (
    <div className="relative h-[600px] flex items-center justify-center">
      <div
        className={`absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-500 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `url('${imageUrl}')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-800" />
      )}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">TripleSweep</h1>
        <p className="text-xl md:text-2xl mb-8">Professional Lawn Care Services in Townsville</p>
        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-md font-medium"
        >
          <PhoneCall className="mr-2 h-5 w-5" />
          Call {COMPANY_INFO.phone}
        </a>
      </div>
    </div>
  );
};