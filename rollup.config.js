/* eslint-disable @typescript-eslint/no-var-requires */
const { uglify } = require('rollup-plugin-uglify')
const resolve = require('rollup-plugin-local-resolve')

const createDefault = () => ({
  input: 'dist/esm/index.js',
  output: {
    file: 'dist/umd/index.js',
    format: 'umd',
    name: 'utils',
  },
  plugins: [
    resolve(),
  ],
})

const createMinified = () => {
  const config = createDefault()

  config.output.file = 'dist/umd/index.min.js'
  config.plugins.push(uglify())

  return config
}

module.exports = [createDefault(), createMinified()]
