/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useContext } from 'react';
import { I18nContext } from 'next-i18next';

const OutlineLogo = () => (
  <g transform="translate(1)" fill="currentColor">
    <path d="M.89 33.292l41.807 5.126L11.584 13.06.63 30.694c.047.866.135 1.739.26 2.598zm42.786 5.839c-.011 0-.023 0-.036-.002L.596 33.851a.295.295 0 0 1-.256-.248 29.68 29.68 0 0 1-.305-2.971.298.298 0 0 1 .045-.171l11.18-17.997a.295.295 0 0 1 .437-.073l32.166 26.216a.295.295 0 0 1-.187.524z" />
    <path d="M47.138 17.504L44.112 37.91l11.653-12.956a27.496 27.496 0 0 0-2.513-7.974l-6.114.524zm-3.462 21.627a.295.295 0 0 1-.292-.338l3.204-21.607a.296.296 0 0 1 .267-.251l6.547-.56a.289.289 0 0 1 .289.161 28.086 28.086 0 0 1 2.679 8.468.3.3 0 0 1-.073.241L43.896 39.033a.295.295 0 0 1-.22.098z" />
    <path d="M27.673 11.735L43.505 37.98l3.072-20.719-4.585-12.208a27.443 27.443 0 0 0-8.467-3.103l-5.852 9.785zm16.003 27.396a.295.295 0 0 1-.252-.142L27.076 11.888a.296.296 0 0 1-.001-.304l6.048-10.113a.294.294 0 0 1 .306-.139 28.003 28.003 0 0 1 8.949 3.261.294.294 0 0 1 .129.153l4.649 12.379a.295.295 0 0 1 .016.147l-3.204 21.607a.294.294 0 0 1-.292.252zM10.207 8.212A27.68 27.68 0 0 0 .594 29.634l10.602-17.067-.989-4.355zM.33 30.912a.295.295 0 0 1-.295-.28A28.27 28.27 0 0 1 10.198 7.446a.295.295 0 0 1 .477.161l1.124 4.947a.295.295 0 0 1-.037.221L.581 30.773a.295.295 0 0 1-.251.139z" />
    <path d="M11.776 12.455l30.77 25.079-15.44-25.596-10.558-7.847a27.752 27.752 0 0 0-5.833 3.693l1.061 4.671zm31.9 26.676a.294.294 0 0 1-.186-.066L11.324 12.848a.295.295 0 0 1-.101-.163l-1.124-4.947a.297.297 0 0 1 .099-.292 28.316 28.316 0 0 1 6.261-3.965.297.297 0 0 1 .3.031l10.746 7.987a.281.281 0 0 1 .077.084l16.347 27.101a.295.295 0 0 1-.253.447z" />
    <path d="M17.162 3.812l10.081 7.492 5.659-9.464a27.875 27.875 0 0 0-4.561-.373c-3.892 0-7.65.788-11.179 2.345zm10.167 8.219a.296.296 0 0 1-.176-.059L16.407 3.986a.297.297 0 0 1-.118-.267.298.298 0 0 1 .17-.238A28.119 28.119 0 0 1 28.341.876c1.717 0 3.429.153 5.088.456a.295.295 0 0 1 .201.442l-6.048 10.113a.293.293 0 0 1-.253.144zM.986 33.899a27.417 27.417 0 0 0 3.801 9.992l36.601-5.038L.986 33.899zm3.653 10.606a.294.294 0 0 1-.249-.137A28.011 28.011 0 0 1 .34 33.603a.295.295 0 0 1 .328-.338l43.044 5.278a.296.296 0 0 1 .26.291.296.296 0 0 1-.255.295L4.679 44.502a.27.27 0 0 1-.04.003z" />
    <path d="M5.138 44.439a27.776 27.776 0 0 0 11.461 9.924l32.034-6.223a27.687 27.687 0 0 0 4.465-6.383l-9.442-2.62-38.518 5.302zm11.433 10.526c-.043 0-.1-.01-.139-.028A28.366 28.366 0 0 1 4.39 44.368a.295.295 0 0 1 .209-.451l39.037-5.374a.32.32 0 0 1 .119.009l9.846 2.732a.294.294 0 0 1 .185.415 28.227 28.227 0 0 1-4.788 6.915.298.298 0 0 1-.159.087l-32.212 6.258a.26.26 0 0 1-.056.006z" />
    <path d="M45.698 39.091l7.666 2.128c.36-.746.689-1.517.98-2.301l-8.646.173zm7.824 2.773a.265.265 0 0 1-.079-.011l-9.846-2.733a.295.295 0 0 1 .074-.579l11.092-.222a.302.302 0 0 1 .245.122c.057.079.072.18.039.272a27.128 27.128 0 0 1-1.261 2.987.297.297 0 0 1-.264.164z" />
    <path d="M55.414 35.324l-9.756 3.177 8.9-.178c.34-.976.626-1.982.856-2.999zm-11.738 3.807a.295.295 0 0 1-.091-.576l12.134-3.951a.295.295 0 0 1 .381.34 28.22 28.22 0 0 1-1.053 3.769.294.294 0 0 1-.272.196l-11.093.222h-.006z" />
    <path d="M55.872 25.718L44.633 38.214l10.922-3.557c.355-1.779.535-3.609.535-5.442 0-1.166-.073-2.339-.218-3.497zM43.676 39.131a.294.294 0 0 1-.219-.492L55.858 24.85a.296.296 0 0 1 .512.154c.206 1.388.311 2.805.311 4.211a28.48 28.48 0 0 1-.581 5.729.296.296 0 0 1-.198.221l-12.134 3.952a.29.29 0 0 1-.092.014zM19.453 54.41l19.971.25a27.573 27.573 0 0 0 8.492-5.78l-28.463 5.53zm20.031.841h-.004l-22.913-.286a.295.295 0 1 1-.052-.586l32.212-6.258a.295.295 0 0 1 .271.492 28.218 28.218 0 0 1-9.396 6.614.296.296 0 0 1-.118.024z" />
    <path d="M16.57 54.965l-.013-.001v.001a.296.296 0 0 1 0-.591h.014c.158 0 .288.125.295.283a.294.294 0 0 1-.296.308" />
    <path d="M18.021 54.983l.146.058a27.623 27.623 0 0 0 10.174 1.925c3.329 0 6.581-.583 9.672-1.733l-19.992-.25zm10.32 2.574a28.216 28.216 0 0 1-11.906-2.619.295.295 0 0 1 .099-.562.282.282 0 0 1 .041-.002l22.913.287c.139.001.258.1.285.237a.294.294 0 0 1-.172.329 28.203 28.203 0 0 1-11.26 2.33z" />
  </g>
);

const ColorLogo = () => (
  <>
    <defs>
      <linearGradient x1="50.009%" y1="99.184%" x2="50.009%" y2="3.017%" id="a">
        <stop stopColor="#FFF" offset="0%" />
        <stop stopColor="#D7DF23" offset="100%" />
      </linearGradient>
    </defs>
    <g transform="translate(0 1)" fillRule="nonzero">
      <path
        d="M11.98 11.69L.74 29.79c.05 1 .15 1.99.3 2.96l43.27 5.31-32.33-26.37z"
        fill="#000"
      />
      <path
        d="M44.31 38.05l12.47-13.86c-.45-2.99-1.36-5.82-2.66-8.42l-6.58.56-3.23 21.72z"
        fill="#F15A29"
      />
      <path
        d="M44.31 38.05l3.22-21.72-4.67-12.45a27.933 27.933 0 0 0-8.9-3.24L27.88 10.8l16.43 27.25z"
        fill="url(#a)"
      />
      <path
        d="M10.85 6.72C4.65 11.89.7 19.67.7 28.38c0 .47.01.94.04 1.41L11.98 11.7l-1.13-4.98z"
        fill="#EC008C"
      />
      <path
        d="M44.31 38.05L27.88 10.8l-10.8-8.03a27.942 27.942 0 0 0-6.23 3.94l1.13 4.97 32.33 26.37z"
        fill="#567483"
      />
      <path
        d="M33.96.64C32.32.34 30.63.19 28.9.19c-4.22 0-8.23.93-11.82 2.59l10.8 8.03L33.96.64z"
        fill="#B1DEF7"
      />
      <path
        d="M1.04 32.74c.6 3.89 2 7.52 4.03 10.71l39.25-5.4-43.28-5.31z"
        fill="#006991"
      />
      <path
        d="M5.07 43.45c2.89 4.56 7.05 8.23 11.98 10.52h.01l32.38-6.29c1.91-2.03 3.52-4.35 4.76-6.88l-9.9-2.75-39.23 5.4z"
        fill="#00AEEF"
      />
      <path
        d="M54.21 40.8c.47-.96.89-1.95 1.25-2.97l-11.15.22 9.9 2.75z"
        fill="#C2B59B"
      />
      <path
        d="M55.47 37.83c.43-1.21.78-2.47 1.05-3.75l-12.2 3.97 11.15-.22z"
        fill="#39B54A"
      />
      <path
        d="M56.51 34.08c.38-1.84.58-3.75.58-5.7 0-1.42-.11-2.82-.31-4.19L44.31 38.05l12.2-3.97z"
        fill="#594A42"
      />
      <path
        d="M40.1 54.25c3.56-1.54 6.73-3.79 9.35-6.58l-32.38 6.29 23.03.29z"
        fill="#6DCFF6"
      />
      <path fill="#2361AD" d="M17.05 53.97L17.05 53.97 17.06 53.97z" />
      <path
        d="M17.06 53.97h-.01c.5.23 1 .45 1.51.65 3.2 1.26 6.69 1.96 10.34 1.96 3.65 0 7.14-.69 10.34-1.96l.87-.36-23.05-.29z"
        fill="#2361AD"
      />
    </g>
  </>
);

const SolidLogo = () => (
  <g transform="translate(1 1)" fill="currentColor">
    <path d="M10.988 12.235L.038 29.861c.043.741.118 1.506.225 2.277l41.367 5.071-30.642-24.974m44.76 11.568a27.773 27.773 0 0 0-2.417-7.704l-5.762.493-2.895 19.525 11.074-12.314m-12.38 12.464l2.994-20.195L41.746 3.78A27.703 27.703 0 0 0 33.515.746l-5.762 9.635 15.615 25.886M0 27.515l10.152-16.342L9.295 7.4A28.057 28.057 0 0 0 0 27.515" />
    <g transform="translate(10)">
      <path d="M31.306 35.308l-14.773-24.49L5.948 2.95A28.034 28.034 0 0 0 .386 6.47L1.4 10.932l29.906 24.376M7.276 2.354l9.551 7.1L22.172.516C17.034-.244 11.943.41 7.276 2.354" />
    </g>
    <path d="M.477 33.444a27.753 27.753 0 0 0 3.648 9.477l34.692-4.776-38.34-4.701m4.411 10.653a28.131 28.131 0 0 0 11.193 9.549l32.554-6.324a28.045 28.045 0 0 0 4.253-6.015l-9.195-2.552-38.805 5.342m48.577-3.947c.248-.527.481-1.067.696-1.615l-6.075.121 5.379 1.494m1.162-2.895c.248-.73.467-1.48.654-2.239l-7.283 2.372 6.629-.133m-8.833-.484l9.803-3.193c.337-1.753.507-3.539.507-5.313 0-.919-.047-1.858-.141-2.8L45.794 36.771m-6.479 17.192a27.894 27.894 0 0 0 7.699-5.034l-24.809 4.82 17.11.214m-19.846 1.022a28.185 28.185 0 0 0 16.471.206l-16.471-.206" />
  </g>
);

const NordText = ({ fill }) => (
  <g transform="translate(68 15)" fill={fill || '#A7A9AC'} fillRule="nonzero">
    <path d="M10.47 16.06c-1.65-2.22-3.2-4.37-4.79-6.58l-.07.04c.04 2.43.07 4.89.07 7.36v9.47H.3V.85h5.28l7.64 10.28c1.65 2.22 3.2 4.37 4.79 6.58l.07-.04c-.04-2.43-.07-4.89-.07-7.36V.84h5.39v25.49h-5.28l-7.65-10.27zm15.67-2.47C26.14 6.16 31.88.46 39.45.46s13.31 5.7 13.31 13.13c0 7.43-5.74 13.13-13.31 13.13-7.57.01-13.31-5.7-13.31-13.13zm21.02 0c0-4.51-3.31-8.06-7.71-8.06s-7.71 3.56-7.71 8.06 3.31 8.06 7.71 8.06c4.4.01 7.71-3.55 7.71-8.06zM55.51.85h7.99c3.03 0 5.88.42 7.92 1.69 1.87 1.16 3.06 3.06 3.06 5.99 0 3.27-1.8 5.95-5.18 7.04l7.18 10.77h-6.44L63.6 16.27h-2.5v10.07h-5.6V.85h.01zm8.41 11.23c1.51 0 2.68-.18 3.52-.6.95-.49 1.44-1.34 1.44-2.57 0-1.2-.42-1.97-1.44-2.5-.88-.46-2.25-.67-4.19-.67H61.1v6.34h2.82zM77.73.85h7.15c4.54 0 8.06.74 10.7 2.57 3.13 2.18 4.89 5.77 4.89 10.14 0 4.01-1.51 7.43-4.23 9.65-2.61 2.11-6.27 3.13-11.62 3.13h-6.9V.85h.01zm7.15 20.6c3.63 0 5.95-.63 7.53-2.01 1.51-1.3 2.47-3.34 2.47-5.88 0-2.68-1.06-4.93-2.96-6.27-1.8-1.27-4.23-1.55-7.08-1.55h-1.51v15.7h1.55v.01z" />
  </g>
);

const UniversityNorwegianText = ({ fill }) => (
  <g transform="translate(68 44)" fill={fill || '#000'} fillRule="nonzero">
    <path d="M2.14 5.51H.47V4.49H3.4v5.53c0 1.44.22 2.72 2.04 2.72 2.1 0 3.43-1.9 3.43-3.88V5.52H7.2V4.5h2.93v7.77c0 .27.15.4.41.4h1.06v1h-1.58c-.78 0-1.11-.33-1.11-1.02v-.46c0-.36.02-.66.02-.66H8.9c-.24.69-1.39 2.35-3.69 2.35-2.15 0-3.06-1.17-3.06-3.56V5.51h-.01zm10.95 7.13h1.58V5.91c0-.27-.15-.4-.41-.4H13V4.49h1.78c.78 0 1.13.33 1.13 1.02v.53c0 .36-.07.66-.07.66h.04c.26-.69 1.47-2.43 3.8-2.43 2.3 0 3.1 1.29 3.1 3.56v4.81h1.58v1.02h-2.84V8.15c0-1.44-.24-2.72-2.04-2.72-2.06 0-3.54 1.79-3.54 3.81v3.39h1.58v1.02h-4.41v-1.01h-.02zm12.51 0h1.58V5.51h-1.67V4.49h2.93v8.15h1.58v1.02h-4.41v-1.02h-.01zM27.1.84h1.43v1.55H27.1V.84zm3.47 3.64h3.86V5.5h-1.34l2.34 6.15c.13.33.19.71.19.71h.06s.06-.38.19-.71l2.34-6.15h-1.34V4.48h3.86V5.5h-1.22l-3.17 8.15h-1.35L31.82 5.5H30.6V4.48h-.03zm15.68-.21c2.58 0 3.91 1.95 3.91 4.23 0 .22-.06.58-.06.58h-7.16c.06 2.35 1.69 3.68 3.62 3.68 1.71 0 2.84-1.09 2.84-1.09l.57.93s-1.34 1.28-3.45 1.28c-2.78 0-4.88-1.97-4.88-4.8 0-3.01 2.08-4.81 4.61-4.81zm2.59 3.9c-.07-1.93-1.26-2.86-2.63-2.86-1.56 0-2.91 1-3.21 2.86h5.84zm3.12 4.47h1.45V5.91c0-.27-.15-.4-.41-.4h-1.26V4.49h1.76c.78 0 1.13.31 1.13 1.04v.62c0 .38-.04.69-.04.69h.04c.46-1.39 1.5-2.44 2.95-2.44.26 0 .52.05.52.05v1.22s-.24-.04-.48-.04c-2.1 0-2.95 2.32-2.95 4.14v2.86h1.45v1.02h-4.16v-1.01zm7.29-1.83h1.15v.66c0 .93 1.35 1.33 2.43 1.33 1.19 0 2.19-.51 2.19-1.44 0-1.06-1.19-1.42-2.52-1.91-1.41-.51-2.89-1.13-2.89-2.74 0-1.68 1.67-2.44 3.23-2.44 1.26 0 3.1.53 3.1 1.79v1.06h-1.15v-.67c0-.67-.93-1.09-1.91-1.09-1.04 0-1.97.44-1.97 1.33 0 1 1.13 1.42 2.36 1.86 1.45.51 3.04 1.11 3.04 2.75 0 1.59-1.45 2.59-3.52 2.59-1.72 0-3.52-.77-3.52-2.17v-.91h-.02zm8.74 1.83h1.58V5.51H67.9V4.49h2.93v8.15h1.58v1.02H68v-1.02h-.01zm1.5-11.8h1.43v1.55h-1.43V.84zm5.38 4.67H73.2V4.49h1.69V1.96h1.24v2.53h2.36v1.02h-2.36v4.7c0 2.15 1.39 2.44 2.11 2.44.26 0 .43-.04.43-.04v1.08s-.22.04-.54.04c-1.08 0-3.26-.35-3.26-3.41V5.51zm9.76-1.24c2.58 0 3.91 1.95 3.91 4.23 0 .22-.06.58-.06.58h-7.16c.06 2.35 1.69 3.68 3.62 3.68 1.71 0 2.84-1.09 2.84-1.09l.58.93s-1.34 1.28-3.45 1.28c-2.78 0-4.88-1.97-4.88-4.8 0-3.01 2.08-4.81 4.6-4.81zm2.6 3.9c-.07-1.93-1.26-2.86-2.63-2.86-1.56 0-2.91 1-3.21 2.86h5.84zm4.18-2.66h-1.67V4.49h1.69V1.96h1.24v2.53h2.36v1.02h-2.36v4.7c0 2.15 1.39 2.44 2.11 2.44.26 0 .43-.04.43-.04v1.08s-.22.04-.54.04c-1.08 0-3.26-.35-3.26-3.41V5.51z" />
  </g>
);

const UniversityEnglishText = ({ fill }) => (
  <g transform="translate(68 45)" fill={fill || '#000'} fillRule="nonzero">
    <path d="M1.67 1.55H.11V.56h4.32v.99H2.87v6.54c0 .87.17 1.63.53 2.19.56.87 1.58 1.34 2.87 1.34 1.27 0 2.35-.49 2.87-1.39.34-.58.53-1.31.53-2.18V1.54H8.1V.55h4.32v.99h-1.56V8.1c0 1.1-.27 2.11-.77 2.82-.78 1.16-2.18 1.79-3.82 1.79-1.67 0-3.09-.65-3.86-1.8-.51-.75-.73-1.68-.73-2.8V1.55h-.01zm11.8 10.01h1.44V5.29c0-.26-.14-.37-.37-.37h-1.16v-.95h1.63c.71 0 1.04.31 1.04.95v.49c0 .34-.07.61-.07.61h.03c.24-.65 1.34-2.26 3.48-2.26 2.11 0 2.84 1.21 2.84 3.31v4.49h1.44v.95h-2.6V7.38c0-1.34-.22-2.53-1.87-2.53-1.89 0-3.25 1.67-3.25 3.55v3.16h1.44v.95h-4.04v-.95h.02zm11.46 0h1.44V4.91h-1.53v-.95h2.69v7.6h1.44v.95h-4.04v-.95zM26.3.57h1.31v1.44H26.3V.57zm3.18 3.4h3.54v.95H31.8l2.14 5.73c.12.31.17.66.17.66h.05s.05-.36.17-.66l2.14-5.73h-1.22v-.95h3.54v.95h-1.12l-2.91 7.6h-1.24l-2.91-7.6h-1.12v-.95h-.01zm14.37-.21c2.36 0 3.59 1.82 3.59 3.94 0 .2-.05.54-.05.54h-6.56c.05 2.19 1.55 3.43 3.31 3.43 1.56 0 2.6-1.02 2.6-1.02l.53.87s-1.22 1.19-3.16 1.19c-2.55 0-4.47-1.84-4.47-4.47-.01-2.8 1.9-4.48 4.21-4.48zm2.38 3.64c-.07-1.8-1.16-2.67-2.41-2.67-1.43 0-2.67.94-2.94 2.67h5.35zm2.85 4.16h1.33V5.29c0-.26-.14-.37-.37-.37h-1.16v-.95h1.61c.71 0 1.04.29 1.04.97v.58c0 .36-.03.65-.03.65h.03c.42-1.29 1.38-2.28 2.7-2.28.24 0 .48.05.48.05v1.14s-.22-.03-.44-.03c-1.92 0-2.7 2.16-2.7 3.86v2.67h1.33v.95h-3.81v-.97h-.01zm6.68-1.7h1.05v.61c0 .87 1.24 1.24 2.23 1.24 1.09 0 2.01-.48 2.01-1.34 0-.99-1.09-1.33-2.31-1.79-1.29-.48-2.65-1.05-2.65-2.55 0-1.56 1.53-2.28 2.96-2.28 1.16 0 2.84.49 2.84 1.67v.99h-1.05v-.63c0-.63-.85-1.02-1.75-1.02-.95 0-1.8.41-1.8 1.24 0 .93 1.04 1.33 2.16 1.73 1.33.48 2.79 1.04 2.79 2.57 0 1.48-1.33 2.41-3.23 2.41-1.58 0-3.23-.71-3.23-2.02v-.83h-.02zm8.01 1.7h1.44V4.91h-1.53v-.95h2.69v7.6h1.44v.95h-4.04v-.95zM65.15.57h1.31v1.44h-1.31V.57zm4.93 4.35h-1.53v-.95h1.55V1.6h1.14v2.36h2.16v.95h-2.16v4.38c0 2.01 1.27 2.28 1.94 2.28.24 0 .39-.03.39-.03v1s-.2.03-.49.03c-.99 0-2.99-.32-2.99-3.18V4.92h-.01zm6.14 10.15c.76 0 1.31-.61 1.63-1.36l.48-1.14-3.06-7.65h-1.12v-.95h3.59v.95H76.5l2.24 5.83c.1.32.14.61.14.61h.05s.05-.29.17-.61l2.24-5.83H80.1v-.95h3.54v.95h-1.12l-3.64 9.18c-.49 1.22-1.43 1.99-2.62 1.99-.97 0-1.62-.51-1.62-.51l.44-.92s.49.41 1.14.41z" />
  </g>
);

const Nord = ({ sx, variant, color, logoColor, textColor }) => {
  const { i18n } = useContext(I18nContext);

  return (
    <svg
      width="1em"
      height="0.366863905em" // viewbox height / viewbox width
      viewBox="0 0 169 62"
      xmlns="http://www.w3.org/2000/svg"
      sx={sx}
    >
      <NordText fill={color || textColor} />

      {i18n.language === 'en' ? (
        <UniversityEnglishText fill={color || textColor} />
      ) : (
        <UniversityNorwegianText fill={color || textColor} />
      )}

      {variant === 'color' && <ColorLogo />}
      {variant === 'outline' && <OutlineLogo fill={color || logoColor} />}
      {variant === 'solid' && <SolidLogo fill={color || logoColor} />}
    </svg>
  );
};

Nord.defaultProps = {
  variant: 'color',
};

export default Nord;
