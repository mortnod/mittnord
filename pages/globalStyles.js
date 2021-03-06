import React from 'react';

const GlobalStyles = () => {
  return (
    <style jsx global>{`
      /* Other global styles such as 'html, body' etc... */

      html,
      body,
      #__next {
        height: 100%;
        display: flex;
        flex-direction: column;
      }

      /*
        This will hide the focus indicator if the element receives focus via the mouse,
        but it will still show up on keyboard focus.
      */
      .js-focus-visible :focus:not(.focus-visible) {
        outline: none;
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
        transition: opacity 200ms ease-out, transform 200ms ease-out;
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
