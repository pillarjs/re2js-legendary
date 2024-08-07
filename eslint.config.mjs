import ultraMegaConfig from 'eslint-config-ultra-mega';

export default [
  ...ultraMegaConfig,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        // mocha globals
        describe: 'readonly',
        it: 'readonly',
      },
    },
  },
  {
    files: ['test/**'],
    languageOptions: { ecmaVersion: 5 },
    rules: { 'no-var': 'off' },
  },
  { ignores: ['index.cjs'] },
];
