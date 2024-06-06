import '@/styles/globals.scss';
import { type PropsWithChildren } from 'react';
import { Analytics } from "@vercel/analytics/react"
import { Main } from '@/components/atoms/main';
import { Footer } from '@/components/molecules/footer';
import { Providers } from '@/providers';
import { Inter, Manrope } from '@/styles/fonts';
import cx from '@/utils/cx';
import { createMetadata } from '@/utils/metadata';

import { Meta } from './meta';

export const metadata = {
  ...createMetadata({
    title: 'Prashanti Academy School Diary',
    description:
      'This Page is created with the intention of storing all those memories we made in school days with friends, teachers, and others.',
    keywords: [
      'prashanti academy',
      'manish tamang',
      'school dairy',
      'grade 10 gallery',
      'open-source',
      'manish gole',
      'samir bastola',
      'sajak dhital',
      'प्रशान्ति एकेडेमी ',
      'students of prahanti',
      'parshanti',
      'prasanti academy',
      'school near kathmandu, budanilkantha',
      'hari shrestha',
    ],
  }),
};

const { IS_TEMPLATE = 'true' } = process.env;

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html
      id="page"
      lang="en"
      className={cx(
        Inter.variable,
        Manrope.variable,
        IS_TEMPLATE === 'true' ? 'template' : '',
      )}
      suppressHydrationWarning
    >
      <head>
        <Meta />
      </head>
      <body>
        <Providers>
          <Main>{props.children}</Main>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
