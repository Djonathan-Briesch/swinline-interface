// eslint.config.js
import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import importPlugin from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
  // Ignorar pastas de build
  {
    ignores: ['dist', 'build', 'node_modules'],
  },

  // Configuração principal
  {
    files: ['**/*.{ts,tsx,js,jsx}'],

    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      react.configs.flat.recommended,
    ],

    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier,
      import: importPlugin,
    },

    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      // React Hooks
      ...reactHooks.configs.recommended.rules,

      // React Refresh
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // React 17+ não precisa mais do React no scope
      'react/react-in-jsx-scope': 'off',

      // === e !== sempre
      eqeqeq: ['error', 'always'],

      // camelCase em variáveis e propriedades
      camelcase: ['error', { properties: 'always' }],

      // JSX preferências
      'react/jsx-boolean-value': ['error', 'never'],
      'react/self-closing-comp': ['error', { component: true, html: true }],
      'react/jsx-curly-spacing': 'off',

      // Imports organizados
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'object',
            'type',
          ],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],

      // Variáveis não usadas
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn'],

      'prettier/prettier': 'error',
    },
  },
])
