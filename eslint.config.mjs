import js from '@eslint/js';
import json from '@eslint/json';
import globals from 'globals';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */

export default [
  js.configs.recommended,
  json.configs.recommended,
  {
    ignores: ['dist', 'public', 'node_modules', 'coverage', 'eslint.config.mjs'],
  },
  {
    plugins: {
      json: json,
      prettier: prettierPlugin,
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2025,
      },
    },
  },
  {
    files: ['**/*.{js,jsx}'],
    rules: {
      ...js.configs.recommended.rules,
      ...prettierPlugin.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      'prefer-const': 'error',
      'no-undefined': 'error',
      'max-lines': ['warn', { max: 124 }],
      'max-params': ['error', 3],
    },
  },
  {
    files: ['**/*.json'],
    language: 'json/jsonc',
    rules: {
      'json/no-duplicate-keys': 'error',
    },
  },
];
