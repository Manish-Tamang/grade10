"use client"
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

import { storage } from '@/firebase/config';

export const Gallary = () => {
  const [images, setImages] = useState<string[]>([]); 

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const listRef = ref(storage, 'gallery/GbI6BuTDqRehcJ9p0exj6qc9chl2/');
        const result = await listAll(listRef);
        const urlPromises = result.items.map((imageRef) =>
          getDownloadURL(imageRef),
        );
        const urls = await Promise.all(urlPromises);
        setImages(urls);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className={'grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'}>
      {images.map((src, index) => (
        <div key={index}>
          <Zoom>
            <img
              className={
                'object-cover object-center w-full h-40 max-w-full rounded-lg'
              }
              src={src}
              alt={`gallery-photo-${index}`}
            />
          </Zoom>
        </div>
      ))}
    </div>
  );
};
