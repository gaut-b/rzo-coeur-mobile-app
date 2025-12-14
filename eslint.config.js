const { defineConfig, globalIgnores } = require('eslint/config');

const prettier = require('eslint-plugin-prettier');
const unicorn = require('eslint-plugin-unicorn');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const unusedImports = require('eslint-plugin-unused-imports');
const simpleImportSort = require('eslint-plugin-simple-import-sort');
const reactCompiler = require('eslint-plugin-react-compiler');
const js = require('@eslint/js');
const globals = require('globals');

const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});
const path = require('path');

module.exports = defineConfig([
  {
    extends: compat.extends('expo', 'prettier'),

    plugins: {
      prettier,
      unicorn,
      '@typescript-eslint': typescriptEslint,
      'unused-imports': unusedImports,
      'simple-import-sort': simpleImportSort,
      'react-compiler': reactCompiler,
    },

    languageOptions: {
      globals: {
        ...globals.node,
      },
    },

    rules: {
      'prettier/prettier': 'warn',

      // 'unicorn/filename-case': [
      //   'error',
      //   {
      //     case: 'kebabCase',
      //     ignore: ['/android', '/ios'],
      //   },
      // ], // Disabled - rule not available in newer unicorn version

      'max-params': ['error', 3],
      'max-lines-per-function': ['error', 200],
      'react/display-name': 'off',
      'react/no-inline-styles': 'off',
      'react/destructuring-assignment': 'off',
      'react/require-default-props': 'off',
      '@typescript-eslint/comma-dangle': 'off',

      'import/prefer-default-export': 'off',

      'import/no-cycle': [
        'error',
        {
          maxDepth: '∞',
        },
      ],

      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',

      'unused-imports/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],

    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },

    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
          disallowTypeAnnotations: true,
        },
      ],
    },
  },
  {
    files: ['src/translations/*.json'],
    extends: compat.extends('plugin:i18n-json/recommended'),

    rules: {
      'i18n-json/valid-message-syntax': [
        2,
        {
          syntax: path.resolve('./scripts/i18next-syntax-validation.js'),
        },
      ],

      'i18n-json/valid-json': 2,

      'i18n-json/sorted-keys': [
        2,
        {
          order: 'asc',
          indentSpaces: 2,
        },
      ],

      'i18n-json/identical-keys': 0,

      'prettier/prettier': [
        0,
        {
          singleQuote: true,
          endOfLine: 'auto',
        },
      ],
    },
  },
  {
    files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    extends: compat.extends('plugin:testing-library/react'),
  },
  globalIgnores([
    '**/node_modules',
    '**/__tests__/',
    '**/.vscode/',
    '**/android/',
    '**/coverage/',
    '**/ios/',
    '**/.expo',
    '**/.expo-shared',
    '**/docs/',
    '**/cli/',
  ]),
]);
