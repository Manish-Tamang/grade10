import cx from '@/utils/cx';
import {
  Description,
  Details,
  FooterLink,
  StyledFooter,
} from './footer.styles';

export const Footer = () => {
  return (
    <StyledFooter>
      <Details>
        <FooterLink
          title="Gole Codes"
          href="/"
          className={cx(
            'self-start',
            'flex flex-row items-center text-xs font-bold',
            'no-underline gap-2 saturate-125 dark:saturate-150',
            'hocus:underline hocus:decoration-brand-500',
            'dark:hocus:decoration-brand-300',
          )}
        >
          <span className="text-accent">© Gole Codes</span>
        </FooterLink>
        <Description>
          If any of the site&apos;s content is harming or violating any rules or
          someone&apos;s feelings, please contact us through our contact page.
        </Description>
      </Details>

      <div className="flex flex-row items-center justify-start self-start col-span-2 min-h-6"></div>
    </StyledFooter>
  );
};
