// @ts-check

import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactJsx from 'eslint-plugin-react/configs/jsx-runtime.js';
import eslintPluginStorybook from "eslint-plugin-storybook";

export default tseslint.config(
  {
    ignores: ['storybook-static/**/*','dist/**/*'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ...eslint.configs.recommended,
    ...reactRecommended,
    ...reactJsx,
    languageOptions: {
      ...reactRecommended.languageOptions,
      globals: {
        ...globals.browser,
      }
    },
    rules: {
    },
  },
  ...tseslint.configs.recommended,
  ...eslintPluginStorybook.configs["flat/recommended"],
);