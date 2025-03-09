module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'airbnb',
    'eslint-config-prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: [
    '@typescript-eslint',
    'import',
    'react',
    'simple-import-sort',
    'jsx-a11y',
    'prettier',
    'react-refresh'
  ],
  settings: {
    'import/no-absolute-path': 'off',
    'import/parsers': {
      '@typescript-eslint/parser': ['*.ts', '*.tsx']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: '<root>/tsconfig.json'
      }
    },
    'jsx-a11y': {
      components: {
        App: 'div'
      }
    }
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'import/no-extraneous-dependencies': [
      'warn',
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false
      }
    ],
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '@/**',
            group: 'external',
            position: 'after'
          }
        ],
        groups: [
          'builtin',
          'external',
          'internal',
          'unknown',
          'parent',
          'sibling',
          'index',
          'object',
          'type'
        ],
        'newlines-between': 'always'
      }
    ],
    'import/prefer-default-export': 'off',
    'jsx-a11y/accessible-emoji': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton']
      }
    ],
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-underscore-dangle': [
      'error',
      { allow: ['__ASSET_MANIFEST__', '__DEV__'] }
    ],
    'no-shadow': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'react/no-array-index-key': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
    ],
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' }
    ],
    'react/prop-types': 'off',
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'react/jsx-props-no-spreading': 'off',
    'react-refresh/only-export-components': 'warn',
    'simple-import-sort/exports': 'error',
    'react/no-danger': 'off'
  }
};

// 'simple-import-sort/imports': [
//   'error',
//   {
//     groups: [
//       // Packages `react` related packages come first.
//       ['^react', '^\\w', '^@hookform', '^@radix-ui'],
//       // npm packages
//       // Anything that starts with a letter (or digit or underscore), or `@` followed by a letter.
//       // ['^\\w'],
//       // Internal packages.
//       ['^@/components(/.*|$)'],
//       ['^@/store(/.*|$)'],
//       ['^@/hooks(/.*|$)'],
//       ['^@/utils(/.*|$)'],
//       // Side effect imports.
//       ['^\\u0000'],
//       // Parent imports. Put `..` last.
//       ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
//       // Other relative imports. Put same-folder imports and `.` last.
//       ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
//       // Style imports.
//       ['^.+\\.?(styled)$']
//     ]
//   }
