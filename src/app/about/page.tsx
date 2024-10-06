import { Link } from '@/components/atoms/link';
import { Section } from '@/components/atoms/section';
import { SocialLinks } from '@/components/molecules/social-links';
import { getColoredTextClasses } from '@/utils/colored-text';
import { createMetadata } from '@/utils/metadata';

import Photo from './photo';

const jsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  dateCreated: new Date('1997-01-28T18:30:00-05:00').toISOString(),
  dateModified: new Date().toISOString(),
  mainEntity: {
    '@id': '#main-author',
    '@type': 'Person',
    name: 'Prashanti Academy',
    alternateName: ['Prashanti Academy', 'Prashanti Sikhsya Sadan'],
    description: 'A gallery collection of SEE batch 2080 of Prashanti Academy',
    image: 'https://prashantiacademy-schooldiary.vercel.app/class10.jpeg',
  },
});

export default function AboutPage() {
  return (
    <>
      <Section id={'about'}>
        <h1 className={getColoredTextClasses('green')}>About</h1>
        <p className={'max-w-nice'}>
          <span role={'img'} aria-label={'waving hand'}>
            🙏
          </span>{' '}
          Namaste! I&apos;m Manish Tamang, a tech enthusiast and coding nerd who
          loves creating websites.{' '}
          <Link
            title={'Portfolio'}
            href={'https://www.manishtamang.com/'}
            data-umami-event={'My portfolio'}
          >
            Portfolio{' '}
          </Link>{' '}
        </p>
        <p className={'max-w-nice'}>
          During my holiday period after the SEE examination, I worked on this
          open-source project, the source code for which is available on my{' '}
          <Link title={'GitHub'} href={'https://github.com/Manish-Tamang'}>
            GitHub
          </Link>{' '}
          . It was a great learning experience, and I'm excited to share it with
          the community.
        </p>
        {/* <Photo /> */}
        <p className={'max-w-nice'}>
          I created this website to store the photos and moments we captured
          during our school days, all the way up to the last day of school (2080
          batch). The memories we made together will always be preserved here,
          making it a place where we can reminisce about the special moments
          with friends, teachers, and our school journey.
        </p>

        <p className={'max-w-nice'}>
          If you have more photos or memories from our school days that aren't
          part of this gallery, I'd love to include them! Feel free to email me
          any additional photos at{' '}
          <Link
            title={'Email'}
            href={'mailto:maneshtamang833@gmail.com?subject=Hi%20Manish!'}
          >
            maneshtamang833@gmail.com
          </Link>
          , and I'll make sure they’re added to keep our shared memories alive
          for everyone to cherish.
        </p>
      </Section>
      <Section id={'contact'} className={'-mt-5 gap-2.5'}>
        <h2 className={'mb-1'} style={{ fontSize: '1rem' }}>
          If any image or content on this website unintentionally harms or
          violates anyone's feelings, or if you'd like any specific image or
          content to be removed, please don't hesitate to contact me. I take
          such concerns seriously and will address them promptly.
        </h2>
        <p>
          Feel free to reach out to me at{' '}
          <Link
            title={'Email'}
            href={'mailto:maneshtamang833@gmail.com?subject=Hi%20Manish!'}
          >
            maneshtamang833@gmail.com
          </Link>
          , or find me on social media:
        </p>
        <SocialLinks />
      </Section>
    </>
  );
}

export const metadata = createMetadata({
  title: 'About – School Diary 2080',
  description:
    'Capturing and archieving those wonderful mermories we made during school days. #PrashantiAcademyBatch2080',
  exactUrl: 'https://prashantiacademy-schooldiary.vercel.app/about',
  keywords: ['bio', 'biography', 'information', 'about', 'career'],
});
