import typescript2 from "rollup-plugin-typescript2"
import { uglify } from 'rollup-plugin-uglify'
import { babel } from '@rollup/plugin-babel'
import dts from 'rollup-plugin-dts'

const packages = require('./scripts/packages')
const configs = []

for (const [pkg] of packages) {
	configs.push({
		input: `packages/${pkg}/index.ts`,
		output: [
			{
        file: `dist/${pkg}/index.cjs.js`,
        format: 'cjs',
      },
      {
        file: `dist/${pkg}/index.esm.js`,
        format: 'esm',
      },
			{
        file: `dist/${pkg}/index.umd.js`,
        format: 'umd',
				name: `rayuse${pkg}`,
      },
			{
        file: `dist/${pkg}/index.umd.min.js`,
        format: 'umd',
				name: `rayuse${pkg}`,
        plugins: [
          uglify(),
        ],
      },
		],
		plugins: [
			typescript2(
				{
					tsconfigOverride: {
						compilerOptions: {
							declaration: false,
						},
					},
      	}
			),
			babel({
				babelHelpers: 'bundled',
				exclude: 'node_modules/**',
      	extensions: ['.js', '.ts'], // 这句是关键，必须加上 .ts 不然不编译
			}),
		]
	})

	configs.push({
    input: `./typings/${pkg}/index.d.ts`,
    output: {
      file: `dist/${pkg}/index.d.ts`,
      format: 'es',
    },
    plugins: [
      dts(),
    ],
  })
}

export default configs
