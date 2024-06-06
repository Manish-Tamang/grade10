'use client';

import { useEffect, useState } from 'react';

const greetings = [
  'नमस्कार',
  'ज:याः',
  'लाːसो',
  'नमस्ते',
  'प्रणाम',
  'चिभा लासा',
  'Sewaro',
];

export const WavingHello = () => {
  const [hello, setHello] = useState(0);
  useEffect(() => {
    const changeHello = setInterval(() => {
      setHello((helloo) => (helloo >= greetings.length - 1 ? 0 : helloo + 1));
    }, 2500);
    return () => clearInterval(changeHello);
  }, []);
  return <>&nbsp;&nbsp;{greetings[hello]}!</>;
};
