interface MetaTagsProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export const MetaTags = ({
  title = "TripleSweep - Professional Lawn Care",
  description = "Expert lawn care and gardening services in Townsville",
  image = "/og-image.png",
  url = "https://triplesweep.com"
}: MetaTagsProps) => {
  return (
    <>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </>
  );
}; 