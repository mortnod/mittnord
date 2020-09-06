/** @jsx jsx */
import { jsx } from 'theme-ui';

import CardHeading from './cardHeading';
import { gradientAnimation } from '../../utils/gradientAnimation';

const AspectRatioOuter = ({ children }) => (
  <div
    sx={{
      position: 'relative',
      width: '100%',
      pb: '100%',
      boxShadow: 3,
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

export default function Card({ heading, icon, href }) {
  const Icon = icon;

  return (
    <AspectRatioOuter>
      <AspectRatioInner>
        <a
          href={href}
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: [3, 5, 8],
            textDecoration: 'none',
            bg: 'card',
            color: 'icon',
            outline: 'none',
            position: 'relative',

            ':hover': {
              color: 'iconHover',
              bg: 'cardHover',
            },

            '&.focus-visible': {
              ...gradientAnimation('background', 'large'),
            },

            '@media (pointer: fine)': {
              ':active': {
                top: '2px',
              },
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
