interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
}

export const SEO = ({ 
  title = "TripleSweep - Professional Lawn Care Services",
  description = "Professional lawn care and gardening services in Townsville. Offering lawn mowing, gardening, and gutter cleaning.",
  image = "/og-image.png"
}: SEOProps) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
}; 