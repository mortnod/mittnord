/** @jsxImportSource theme-ui */
import React from 'react';
import { ThemeUIStyleObject } from 'theme-ui';

import ScreenReaderOnly from '../screenReaderOnly/screenReaderOnly';

type Props = {
  children: React.ReactNode;
  href: string;
  styles: ThemeUIStyleObject;
  icon: React.ReactNode;
};

const Social = ({ children, href, styles, icon }: Props) => (
  <a
    href={href}
    sx={{
      fontSize: '28px',
      display: 'flex',
      ml: '3',
      color: 'icon',
      lineHeight: 1,
      mt: 1,
      outline: 'none',
      borderRadius: 1,

      '&:focus-visible': {
        boxShadow: 'outline',
      },

      ':hover': {
        color: 'iconHover',
      },

      ...styles,
    }}
  >
    {icon}
    <ScreenReaderOnly>{children}</ScreenReaderOnly>
  </a>
);

export default Social;
