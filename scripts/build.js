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
