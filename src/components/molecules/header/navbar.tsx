import type { TWComponentProps } from '@/utils/cx';
import cx from '@/utils/cx';

import { SocialLinks } from '../social-links';

import { NavToggle } from './nav-toggle';
import {
  ButtonsGroup,
  LinksList,
  Nav,
  NavItem,
  NavLink,
  ExtraNavLinks,
  NavPageLink,
  NavPageLinkText,
} from './navbar.styles';
import { ThemeToggle } from './theme-toggle';

const toolbarLinksList = [
  {
    title: 'About',
    href: '/about',
    className: 'text-green',
  },
  {
    title: 'Contact',
    href: '/contact',
    className: 'text-orange',
  },
];

interface NavbarProps extends TWComponentProps<typeof Nav> {
  path?: string;
  expanded?: boolean;
  onNavToggleClick?: () => void;
}

export const Navbar = (props: NavbarProps) => {
  const { expanded, className } = props;
  return (
    <Nav id={'navigation'} className={className}>
      <NavLink
        title={'School Diary 2080 - Home Page'}
        href={'/'}
        className={'gap-2 hocus:bg-toolbar-highlight'}
        aria-current={props.path === '/' ? 'page' : undefined}
      >
        <span className={'text-accent saturate-125 dark:saturate-150'}>
          School Diaries 2080
        </span>
      </NavLink>
      <LinksList
        className={
          expanded
            ? 'max-h-full opacity-100 select-auto pointer-events-auto visible'
            : ''
        }
      >
        {toolbarLinksList.map((link) => {
          const isActive = props.path?.startsWith(link.href) || false;
          return (
            <NavItem
              key={link.href}
              className={isActive ? 'before:bg-toolbar-highlight' : ''}
            >
              <NavPageLink
                title={`${link.title} page`}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={cx(
                  `hocus:${link.className}`,
                  isActive ? link.className : '',
                  isActive ? 'saturate-125 dark:saturate-150' : '',
                )}
                prefetch={!isActive}
              >
                <NavPageLinkText>{link.title}</NavPageLinkText>
              </NavPageLink>
            </NavItem>
          );
        })}
        <ExtraNavLinks aria-hidden={'true'} />
        <ExtraNavLinks className={'mx-auto'}>
          <SocialLinks />
        </ExtraNavLinks>
      </LinksList>
      <ButtonsGroup>
        <li>
          <ThemeToggle />
        </li>
        <li>
          <NavToggle
            title={`${expanded ? 'Collapse' : 'Expand'} menu`}
            aria-label={`${expanded ? 'Collapse' : 'Expand'} menu`}
            aria-expanded={expanded}
            aria-controls={'header'}
            onClick={props.onNavToggleClick}
          />
        </li>
      </ButtonsGroup>
    </Nav>
  );
};
