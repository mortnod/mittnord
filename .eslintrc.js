module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
  },
  globals: {
    React: 'writable',
  },
  plugins: ['unused-imports', '@typescript-eslint/eslint-plugin', 'react'],
  extends: [
    'airbnb/hooks',
    'airbnb',
    'airbnb-typescript',
    'prettier', // Deactivates all rules that overlap with Prettier
    'prettier/react', // Same as above, just for React
  ],
  rules: {
    // React is never imported when using Next.js
    'react/react-in-jsx-scope': 'off',

    // Use the rule, but don't complain about theme-ui cx prop
    'react/no-unknown-property': ['error', { ignore: ['sx'] }],

    // Slow @typescript version - https://typescript-eslint.io/rules/no-implied-eval/
    'no-implied-eval': 'error',
    '@typescript-eslint/no-implied-eval': 'off',

    // Slow @typescript version - https://typescript-eslint.io/rules/no-throw-literal/
    'no-throw-literal': 'warn',
    '@typescript-eslint/no-throw-literal': 'off',

    // Slow @typescript version - https://typescript-eslint.io/rules/return-await/
    'no-return-await': 'error',
    '@typescript-eslint/return-await': 'off',

    // Slow @typescript version – https://typescript-eslint.io/rules/dot-notation/
    'dot-notation': 'error',
    '@typescript-eslint/dot-notation': 'off',

    // We don't want to enforce everything to be default exports
    'import/prefer-default-export': 'off',

    // We know, but we use it when we need it
    '@typescript-eslint/ban-ts-comment': 'warn',

    // Switching back and forth between implicit and explicit returns
    // can cause messy commits, as all the content inside gets indented.
    'arrow-body-style': 'off',

    // We use regular javascript syntax for defaults
    'react/require-default-props': 'off',

    // Sometimes spreading is helpful
    'react/jsx-props-no-spreading': 'off',

    // Prevent react console errors
    'react/jsx-key': 'error',

    // Sometimes, in rare cases, destructuring makes less sense
    'react/destructuring-assignment': 'off',

    // Not important enough to fail a CI job
    'react/jsx-no-useless-fragment': 'off',

    // Doesn't make sense for Typescript since we're already checking types
    'react/prop-types': 'off',

    // Allow react functions to defined both as functions and const.
    // Might be beneficial to clamp down harder in the future, though.
    'react/function-component-definition': 'off',

    // Would like to keep this fully enabled, but tanstack/react-table
    // heavily uses this technique to customize table
    'react/no-unstable-nested-components': ['error', { allowAsProps: true }],

    // Combine airbnb and next configuration of this rule
    'jsx-a11y/alt-text': [
      'error',
      {
        elements: ['img', 'object', 'area', 'input[type="image"]'],
        img: ['Image'],
        object: [],
        area: [],
        'input[type="image"]': [],
      },
    ],

    // Already turned on, but we need to override it to add custom components
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: ['Input'],
        depth: 25,
      },
    ],

    // Useful rule, but isn't able to detect that as="button" means we fullfill the requirements!
    'jsx-a11y/anchor-is-valid': 'off',

    // Copied from airbnb-typescript
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],

    'react-hooks/exhaustive-deps': 'error',

    // Consistency is king
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '@konfidens/**',
            group: 'external',
            position: 'after',
          },
        ],
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        pathGroupsExcludedImportTypes: ['@konfidens/**'],
      },
    ],

    // Ban types that regularly causes problems
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          String: {
            message: 'Use string instead',
            fixWith: 'string',
          },

          '{}': {
            message:
              '{} allows a function to be called with any argument.\n' +
              '  - Consider removing the typing entirely.\n' +
              '  - If you explicitly want any Record, use Record<string, unknown>.\n' +
              '  - If you explicitly want an empty object, use Record<never, never>.\n' +
              '  - If you want to allow anything (discouraged), use unknown.',
            fixWith: '',
          },
          'React.FC': {
            message:
              'You do not need to type the return type of a React component. React.FC is discouraged. See https://github.com/facebook/create-react-app/pull/8177',
          },
          FC: {
            message:
              'You do not need to type the return type of a React component. React.FC is discouraged. See https://github.com/facebook/create-react-app/pull/8177',
          },
        },
      },
    ],

    // Use before define often makes more readable files
    // Is disabled for most cases.
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: false,
        typedefs: false,
      },
    ],

    // We like short circuiting and ternaries. 😈
    // Even though rule is set to error, the options
    // will turn most triggers off.
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
        enforceForJSX: false,
      },
    ],

    // We usually don't use classes except when we have to wrt. third party libs.
    // In those cases, we usually don't get to choose how to make our classes.
    'class-methods-use-this': 'off',

    // This allows us to have no empty lines between two class attributes.
    // Rule is automatically fixed with --fix
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],

    // Sometimes, in rare cases, destructuring makes less sense
    'prefer-destructuring': 'off',

    // Do not allow unused variables – a common cause of bugs. Use plugin.
    // Variables named _ will still be ignored.
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],

    'no-console': 'error',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc', // .reduce accumulators
          'e', // dom event
        ],
      },
    ],

    // Conflicts with Prettier
    '@typescript-eslint/indent': 'off',
  },
};
