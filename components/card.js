/** @jsx jsx */
import { jsx } from 'theme-ui';

import Heading from './heading';

const AspectRatioOuter = ({ children }) => (
  <div
    sx={{
      position: 'relative',
      bg: 'card',
      width: '100%',
      pb: '100%',
      borderRadius: 2,
      boxShadow: 3,
      overflow: 'hidden',

      ':hover': {
        bg: 'cardHover',
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

export default function Card({ heading, icon }) {
  const Icon = icon;
  return (
    <AspectRatioOuter>
      <AspectRatioInner>
        <div
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: [3, 5, 8],
            color: 'icon',

            ':hover': {
              color: 'iconHover',
            },
          }}
        >
          <Heading>{heading}</Heading>
          <Icon />
        </div>
      </AspectRatioInner>
    </AspectRatioOuter>
  );
}
