import React from 'react';

const GlobalStyles = () => {
  return (
    // eslint-disable-next-line react/no-unknown-property
    <style jsx global>{`
      @font-face {
        font-family: 'Azo Sans';
        font-style: normal;
        font-display: fallback;
        font-weight: 400;
        src: url('/fonts/azo-sans-400.woff2') format('woff2');
      }
      @font-face {
        font-family: 'Azo Sans';
        font-style: normal;
        font-display: fallback;
        font-weight: 500;
        src: url('/fonts/azo-sans-500.woff2') format('woff2');
      }
      @font-face {
        font-family: 'Azo Sans';
        font-style: normal;
        font-display: fallback;
        font-weight: 700;
        src: url('/fonts/azo-sans-700.woff2') format('woff2');
      }

      html,
      body,
      #__next {
        height: 100%;
        display: flex;
        flex-direction: column;
      }

      div,
      button,
      a,
      span,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        -webkit-font-smoothing: antialiased; /* Chrome, Safari */
        -moz-osx-font-smoothing: grayscale; /* Firefox */
      }

      /* Modal: Animate open/close */
      .ReactModal__Overlay,
      .ReactModal__Content {
        opacity: 0;
        transition: opacity 200ms ease-out;
      }

      .ReactModal__Overlay--after-open,
      .ReactModal__Content--after-open {
        opacity: 1;
      }

      .ReactModal__Overlay--before-close,
      .ReactModal__Content--before-close {
        opacity: 0;
      }

      .ReactModal__Content {
        transition:
          opacity 200ms ease-out,
          transform 200ms ease-out;
        transform: translateX(100%);
      }

      .ReactModal__Content--after-open {
        transform: translateX(0);
      }

      .ReactModal__Content--before-close {
        transform: translateX(100%);
      }
    `}</style>
  );
};

export default GlobalStyles;
