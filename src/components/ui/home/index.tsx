/* eslint-disable max-len */
import { Icon } from '@/components/atoms/icon';
import { LinkButton } from '@/components/atoms/link-button';
import { Section } from '@/components/atoms/section';
import cx from '@/utils/cx';

import { Name, SubHeader, WavingSpan } from './intro.styles';
import { WavingHello } from './waving-hello';

export const Intro = () => {
  return (
    <Section id={'intro'} className={'gap-6'}>
      <div
        className={
          'flex flex-col gap-5 tablet-sm:block tablet-sm:space-y-4'
        }
      >
        <h1 className={'flex flex-col gap-1 tablet-sm:!-mt-2'}>
          <p
            className={
              'flex flex-row items-center gap-1 text-shadow shadow-yellow-300 dark:text-shadow-none min-h-8'
            }
          >
            <WavingSpan role={'img'} aria-label={'waving hand'}>
              🙏
            </WavingSpan>
            <WavingHello />
          </p>
          <SubHeader>
            <span>
              You&apos;re welcome to <Name>School Dairy</Name>
            </span>
          </SubHeader>
        </h1>
        <p className={'text-pretty flex flex-col gap-2 w-full'}>
          <span>
            This Page is Created by student of Grade 10 of Prashanti Academy
            Batch 2080 for recalling all those memory.
          </span>
          <span>
            In order to preserve all those memories with friends, teacher and
            School, this page has been established under NextJS.
          </span>
          <span>
            All the images are fetched from{' '}
            <a href={'https://schooldiary.vercel.app'}>
              schooldiary.vercel.app
            </a>{' '}
            (An open source Gallery for Grade 10 2080 Batch of Prashanti Academy
            developed by <a href={'https://manishtamang.xyz/'}>Manish Tamang</a>
            ).
          </span>
        </p>
      </div>
      <div
        className={cx(
          'flex flex-col gap-3 items-center',
          'mobile-lg:flex-row mobile-lg:flex-wrap',
        )}
      >
        <LinkButton
          title={'About Developer'}
          href={'https://manishtamang.xyz'}
          className={cx(
            'pr-3.5',
            'justify-center max-mobile-lg:w-full',
            'mobile-lg:self-start mobile-lg:justify-start',
          )}
          data-umami-event={'More about me'}
        >
          <Icon
            className={'size-5'}
            path={
              'M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z'
            }
          />
          <span>About Developer</span>
        </LinkButton>
      </div>
    </Section>
  );
};
