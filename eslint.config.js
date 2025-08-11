import eslint from '@eslint/js';
// import prettier from 'eslint-config-prettier';
// import reactHooks from 'eslint-plugin-react-hooks';
import { includeIgnoreFile } from '@eslint/compat';
import importPlugin from 'eslint-plugin-import';
import { join } from 'node:path';
import typescript from 'typescript-eslint';

export default typescript.config(
    includeIgnoreFile(join(import.meta.dirname, '.gitignore')),
    {
        files: ['**/*.js', '**/*.ts', '**/*.tsx'],
        plugins: {
            import: importPlugin,
        },
        extends: [
            eslint.configs.recommended,
            ...typescript.configs.recommended,
            ...typescript.configs.recommendedTypeChecked,
            ...typescript.configs.stylisticTypeChecked,
        ],
        rules: {
            // ...turboPlugin.configs.recommended.rules,
            '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
            '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports', fixStyle: 'separate-type-imports' }],
            '@typescript-eslint/no-misused-promises': [2, { checksVoidReturn: { attributes: false } }],
            '@typescript-eslint/no-unnecessary-condition': ['error', { allowConstantLoopConditions: true }],
            '@typescript-eslint/no-non-null-assertion': 'error',
            'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
        },
    },
    // {
    //     files: ['**/*.tsx'],
    //     extends: [...react.configs.flat.recommended, ...react.configs.flat['jsx-runtime']],
    //     languageOptions: {
    //         globals: {
    //             ...globals.browser,
    //         },
    //     },
    //     rules: {
    //         'react/react-in-jsx-scope': 'off',
    //         'react/prop-types': 'off',
    //         'react/no-unescaped-entities': 'off',
    //     },
    //     settings: {
    //         react: {
    //             version: 'detect',
    //         },
    //     },
    // },

    // import reactPlugin from "eslint-plugin-react";
    // import * as reactHooks from "eslint-plugin-react-hooks";
    //
    // /** @type {Awaited<import('typescript-eslint').Config>} */
    // export default [
    //     reactHooks.configs.recommended,
    //     {
    //         files: ["**/*.ts", "**/*.tsx"],
    //         plugins: {
    //             react: reactPlugin,
    //         },
    //         rules: {
    //             ...reactPlugin.configs["jsx-runtime"].rules,
    //             "react-hooks/react-compiler": "error",
    //         },
    //         languageOptions: {
    //             globals: {
    //                 React: "writable",
    //             },
    //         },
    //     },
    // ];

    //     {
    //         plugins: {
    //             'react-hooks': reactHooks,
    //         },
    //         rules: {
    //             'react-hooks/rules-of-hooks': 'error',
    //             'react-hooks/exhaustive-deps': 'warn',
    //         },
    //     },
    {
        // languageOptions: { parserOptions: { projectService: true } },
        linterOptions: { reportUnusedDisableDirectives: true },
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
);

// /** @type {import('eslint').Linter.Config[]} */
// export default [
//     js.configs.recommended,
//     ...typescript.configs.recommended,
//     {
//         ...react.configs.flat.recommended,
//         ...react.configs.flat['jsx-runtime'], // Required for React 17+
//         languageOptions: {
//             globals: {
//                 ...globals.browser,
//             },
//         },
//         rules: {
//             'react/react-in-jsx-scope': 'off',
//             'react/prop-types': 'off',
//             'react/no-unescaped-entities': 'off',
//         },
//         settings: {
//             react: {
//                 version: 'detect',
//             },
//         },
//     },
//     {
//         plugins: {
//             'react-hooks': reactHooks,
//         },
//         rules: {
//             'react-hooks/rules-of-hooks': 'error',
//             'react-hooks/exhaustive-deps': 'warn',
//         },
//     },
//     {
//         ignores: ['vendor', 'node_modules', 'public', 'bootstrap/ssr', 'tailwind.config.js'],
//     },
//     prettier, // Turn off all rules that might conflict with Prettier
// ];
