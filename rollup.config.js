/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  input: 'dist/esm/index.js',
  output: {
    file: 'dist/umd/index.js',
    format: 'umd',
    name: 'utils',
  },
  plugins: [
    require('rollup-plugin-local-resolve')(),
  ],
}
