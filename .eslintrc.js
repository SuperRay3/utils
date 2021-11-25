module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
		jest: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
		'jest'
  ],
	rules: {
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/no-null': 'off',
    'unicorn/filename-case': 'off',
    'no-new': 'off',
    'import/order': 'off',
		"semi": [2, 'never']
  },
	extends: ["plugin:@typescript-eslint/recommended"]
};
