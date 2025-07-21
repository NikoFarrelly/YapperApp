// eslint.config.js
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactNative from 'eslint-plugin-react-native';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: './tsconfig.json',
            },
            globals: {
                ...globals.es2021,
                ...globals.node,
                ...globals.browser,
                __DEV__: true, // Expo-specific global
            },
        },
        plugins: {
            react,
            'react-native': reactNative,
            'react-hooks': reactHooks,
        },
        rules: {
            curly: 'off',
            'react-native/no-inline-styles': 'warn',
            'react/react-in-jsx-scope': 'off',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            '@typescript-eslint/no-unused-vars': ['warn'],
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
];
