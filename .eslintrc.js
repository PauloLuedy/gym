const { rules: baseStyleRules } = require('eslint-config-airbnb-base/rules/style');

module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript/base',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',

  },
  plugins: [
    // '@typescript-eslint',
    'import',
  ],
  rules: {
    'linebreak-style': 'off',
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'import/no-cycle': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/indent': [2, 2, {
      ...baseStyleRules.indent[2],
      ignoredNodes: [
        ...baseStyleRules.indent[2].ignoredNodes,
        'PropertyDefinition[decorators]',
        'TSUnionType',
        'FunctionExpression[params]:has(Identifier[decorators])',
      ],
    }],
  },
};
