/** @jsx jsx */
import { jsx } from 'theme-ui';

import { i18n } from '../../i18n';
import CardHeading from './cardHeading';
import { gradientAnimation } from '../../utils/gradientAnimation';
import { event } from '../../utils/gtag';

const AspectRatioOuter = ({ children }) => (
  <div
    sx={{
      position: 'relative',
      width: '100%',
      pb: '100%',
      boxShadow: 3,

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

const AspectRatioInner = ({ children }) => (
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

export default function Card({ heading, icon, href, analyticsAction }) {
  const Icon = icon;

  const handleClick = () => {
    event({ category: 'Links', action: analyticsAction });
  };

  // Supports both href provided as string or object
  // 'https://some.link'
  // '{ nb: '...', 'en': '...'}
  const getHref = () => {
    if (typeof href === 'string') {
      console.log(href);
      return href;
    }

    if (typeof href === 'object' && href !== null) {
      return href[i18n.language];
    }

    throw new Error('Unsupported href provided');
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

            '&.focus-visible': {
              ...gradientAnimation({ variant: 'background', size: 'large' }),
            },
          }}
        >
          <CardHeading>{heading}</CardHeading>
          <Icon />
        </a>
      </AspectRatioInner>
    </AspectRatioOuter>
  );
}
