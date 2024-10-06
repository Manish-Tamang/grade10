import type { Metadata } from 'next';

import { config } from './og';

export const createMetadata = (data: {
  title: string;
  description: string;
  keywords?: string | Array<string> | null;
  exactUrl?: string;
  image?: string;
}): Metadata => {
  const { title, description, keywords, exactUrl, image: imageURL } = data;
  const metadata: Metadata = {
    title,
    description,
    keywords,
    authors: [{ name: 'Manish Tamang', url: 'https://prashantiacademy-schooldiary.vercel.app/' }],
    openGraph: {
      title,
      description,
      url: exactUrl || 'https://prashantiacademy-schooldiary.vercel.app/',
      siteName: title,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      title,
      description,
      card: 'summary_large_image',
      creator: '@Manishtamangxyz',
      site: '@Manishtamangxyz',
    },
    verification: {
      google: 'hOFWk3yZv8bXENbTkzzu4iICQAJIxm9lvVlwtpD5XOw',
    },
    metadataBase: new URL('https://prashantiacademy-schooldiary.vercel.app/'),
  };
  if (imageURL && Boolean(imageURL)) {
    const image = {
      url: imageURL,
      type: config.contentType,
      width: config.size.width,
      height: config.size.height,
    };
    if (metadata.openGraph) metadata.openGraph['images'] = image;
    if (metadata.twitter) metadata.twitter['images'] = image;
  }
  return metadata;
};

export const colorMetaTags = [
  'theme-color',
  'msapplication-TileColor',
  'msapplication-navbutton-color',
  'apple-mobile-web-app-status-bar-style',
];
