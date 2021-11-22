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
	extends: ["plugin:@typescript-eslint/recommended"]
};
