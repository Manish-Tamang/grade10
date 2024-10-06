import { unstable_cache as cache } from 'next/cache';

// Define a single image and alt text
const imageSrc = '/class10.jpeg'; // Use root-relative path for the public folder
const imageAlt = "Group Photo of 2080 Batch";

export const getAboutImage = cache(
  async () => {
    // Instead of importing, just return the image path
    return {
      src: imageSrc, // Directly return the image path
      alt: imageAlt,
    };
  },
  {
    keys: ['about-image'],
    revalidate: 86400, // Cache for one day (86400 seconds)
  },
); 
