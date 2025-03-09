/** @jsxImportSource theme-ui */

import gradientAnimation from '../../utils/gradientAnimation';
import { event } from '../../utils/gtag';
import isDarkTheme from '../../utils/isDarkTheme';

import CardHeading from './cardHeading';

const AspectRatioOuter = ({ children }: { children: React.ReactNode }) => (
  <div
    sx={{
      position: 'relative',
      width: '100%',
      pb: '100%',
      boxShadow: isDarkTheme() ? 'dark' : 3,

      '@media (pointer: fine)': {
        ':active': {
          top: '2px',
        },
      },
    }}
  >
    {children}
  </div>
);

const AspectRatioInner = ({ children }: { children: React.ReactNode }) => (
  <div
    sx={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0',
      left: '0',
    }}
  >
    {children}
  </div>
);

type Props = {
  heading: string;
  icon: React.ReactNode;
  href: string | { nb: string; en: string };
  analyticsAction: string;
};

export default function Card({ heading, icon, href, analyticsAction }: Props) {
  const handleClick = () => {
    event({ category: 'Links', action: analyticsAction });
  };

  // Supports both href provided as string or object
  // 'https://some.link'
  // '{ nb: '...', 'en': '...'}
  const getHref = () => {
    if (typeof href === 'string') {
      return href;
    }

    if (typeof href === 'object' && href !== null) {
      return href.nb;
    }

    throw new Error(
      '[Card] Unsupported href prop provided. Must be either a string or object',
    );
  };

  return (
    <AspectRatioOuter>
      <AspectRatioInner>
        <a
          href={getHref()}
          rel="noreferrer noopener"
          target="_blank"
          onClick={handleClick}
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            py: [3, 5, 8],
            px: [3, 5],
            textDecoration: 'none',
            bg: 'card',
            color: 'icon',
            outline: 'none',
            position: 'relative',
            textAlign: 'center',

            ':hover': {
              color: 'iconHover',
              bg: 'cardHover',
            },

            // Don't show hover colors on phones
            '@media (pointer: coarse)': {
              ':hover': {
                color: 'icon',
                bg: 'card',
              },
            },

            // @ts-expect-error It totally works, but something is wrong with the typing
            '&.focus-visible': {
              ...gradientAnimation({ variant: 'background', size: 'large' }),
            },
          }}
        >
          <CardHeading>{heading}</CardHeading>
          {icon}
        </a>
      </AspectRatioInner>
    </AspectRatioOuter>
  );
}
