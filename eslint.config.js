import { join } from 'node:path';

import { includeIgnoreFile } from '@eslint/compat';
import eslint from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import typescriptESLint from 'typescript-eslint';

export default typescriptESLint.config(
    // Include .gitignore patterns
    includeIgnoreFile(join(import.meta.dirname, '.gitignore')),

    // Base TypeScript configuration
    {
        files: ['**/*.js', '**/*.ts', '**/*.tsx'],
        plugins: {
            import: importPlugin,
            'simple-import-sort': simpleImportSortPlugin,
        },
        extends: [
            eslint.configs.recommended,
            ...typescriptESLint.configs.recommended,
            ...typescriptESLint.configs.recommendedTypeChecked,
            ...typescriptESLint.configs.stylisticTypeChecked,
        ],
        rules: {
            // TypeScript rules
            '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
            '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports', fixStyle: 'separate-type-imports' }],
            '@typescript-eslint/no-misused-promises': [2, { checksVoidReturn: { attributes: false } }],
            '@typescript-eslint/no-unnecessary-condition': ['error', { allowConstantLoopConditions: true }],
            '@typescript-eslint/no-non-null-assertion': 'error',

            // Import rules
            'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],

            // Import sorting rules
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
        },
    },

    // React configuration for .tsx files
    {
        files: ['**/*.tsx'],
        plugins: {
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
        },
        rules: {
            // React rules
            ...reactPlugin.configs.recommended.rules,
            ...reactPlugin.configs['jsx-runtime'].rules,
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',

            // React Hooks rules
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
        },
        languageOptions: {
            globals: {
                ...globals.browser,
                React: 'writable',
            },
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },

    // TypeScript parser configuration
    {
        linterOptions: {
            reportUnusedDisableDirectives: true,
        },
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },

    // Prettier integration (must be last)
    prettierConfig,
);
