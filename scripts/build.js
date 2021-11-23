/* eslint-disable @typescript-eslint/no-var-requires */
const exec = require('child_process').execSync
const path = require('path')
const assert = require('assert')
const fs = require('fs-extra')
const consola = require('consola')
const packages = require('./packages')

const rootDir = path.resolve(__dirname, '..')
const packageJSONDir = path.join(rootDir, 'package.json')

const metaFiles = [
  'LICENSE',
]

assert(process.cwd() !== __dirname)

async function buildMetaFiles(packageVersion) {
	const rawPackageJSON = await fs.readFile(packageJSONDir)
	const rootPackageJSON = JSON.parse(rawPackageJSON)

	for (const [pkg, options] of packages) {
		const packageDist = path.resolve(__dirname, '..', 'dist', pkg)
    const packageSrc = path.resolve(__dirname, '..', 'packages', pkg)

		for (const metaFile of metaFiles) {
			await fs.copyFile(path.join(rootDir, metaFile), path.join(packageDist, metaFile))
		}

		if (pkg === 'utils')
      await fs.copyFile(path.join(rootDir, 'README.md'), path.join(packageDist, 'README.md'))
    else
      await fs.copyFile(path.join(packageSrc, 'README.md'), path.join(packageDist, 'README.md'))

			const packageJSON = {
				name: `@rayuse/${pkg}`,
				description: options.description || rootPackageJSON.description,
				version: packageVersion,
				main: 'index.cjs.js',
				typings: 'index.d.ts',
				module: 'index.esm.js',
				unpkg: 'index.umd.min.js',
				jsdelivr: 'index.umd.min.js',
				browser: 'index.esm.js',
				repository: {
					"type": "git",
					"url": "git+https://github.com/SuperRay3/utils.git"
				},
				keywords: [
					'utils',
					...(options.keywords || []),
				],
				author: "SuperRay3 <https://github.com/SuperRay3>",
				license: 'MIT',
				bugs: {
					url: "https://github.com/SuperRay3/utils/issues"
				},
				homepage: "https://github.com/SuperRay3/utils#readme",
			}

			await fs.writeFile(path.join(packageDist, 'package.json'), `${JSON.stringify(packageJSON, null, 2)}\n`)
	}
}

async function build() {
	const rawPackageJSON = await fs.readFile(packageJSONDir)
	const packageJSON = JSON.parse(rawPackageJSON)
	const packageVersion = packageJSON.version

	consola.info('Clean up')
  exec('npm run clean', { stdio: 'inherit' })

	consola.info('Generate Declarations')
  exec('npm run typings', { stdio: 'inherit' })

	consola.info('Rollup')
  exec('rollup -c', { stdio: 'inherit' })

	await buildMetaFiles(packageVersion)
}

async function cli() {
  try {
    await build()
  }
  catch (e) {
    console.error(e)
    process.exit(1)
  }
}

module.exports = {
	build
}

if (require.main === module)
  cli()
