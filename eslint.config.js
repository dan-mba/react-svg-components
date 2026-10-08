// @ts-check

import eslint from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';
import reactLint from '@eslint-react/eslint-plugin';
import eslintPluginStorybook from "eslint-plugin-storybook";

export default defineConfig([
  globalIgnores(['storybook-static/**']),
  {
    ignores: ['dist/**', '.storybook/**/*', 'eslint.config.js', 'src/vite-env.d.ts'],
    files: ['**/*.{js,jsx,ts,tsx}'],
    extends: [
      eslint.configs.recommended,
      reactLint.configs["recommended-typescript"],
      tseslint.configs.recommended,
      eslintPluginStorybook.configs["flat/recommended"],
    ],
    languageOptions: {
      // Use TypeScript ESLint parser for TypeScript files
      parser: tseslint.parser,
      parserOptions: {
        // Enable project service for better TypeScript integration
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);