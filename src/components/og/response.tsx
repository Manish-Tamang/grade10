// src/components/og/response.tsx
import type { SatoriOptions } from 'next/dist/compiled/@vercel/og/satori';
// import { ImageResponse } from 'next/og';

import { config } from '@/utils/og';

import type { PathName } from './logo-title';
// import { OgImage } from './og';

const getManropeFont = async (): Promise<
  SatoriOptions['fonts'] | undefined
> => {
  const url = new URL('../../assets/fonts/Manrope-Bold.ttf', import.meta.url);
  try {
    const fontData = await fetch(url)
      .then((res) => res.arrayBuffer())
      .catch(null);
    return [
      {
        name: 'Manrope',
        data: fontData,
        style: 'normal',
      },
    ];
  } catch (e) {
    return undefined;
  }
};

export const getOgImage = async (
  path?: string | null,
  title?: string | null,
  hero?: string | null,
) => {
  const actualPath = (path || '').toLowerCase() as PathName;
  let actualHero = hero || '/class10.jpg';
  if (actualHero.startsWith('/')) actualHero = actualHero.substring(1);

  // Removing ImageResponse related code
  return {
    path: actualPath,
    title,
    hero: actualHero,
    width: config.size.width,
    height: config.size.height,
    emoji: 'fluent',
    fonts: await getManropeFont(),
  };
};
