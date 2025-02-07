export const getOptimizedImageUrl = (url: string, width: number = 800) => {
  // If using a CDN like Cloudinary, you could transform the URL here
  if (url.includes('unsplash.com')) {
    return `${url}?w=${width}&q=80&auto=format`;
  }
  return url;
};

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
}; 