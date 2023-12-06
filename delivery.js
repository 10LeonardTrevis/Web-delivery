/* eslint-disable @typescript-eslint/no-var-requires */
const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('./tsconfig.json')
module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',

  images: {
    domains: ['ipfs.io']
  },

  moduleDirectories: ['node_modules', '<rootDir>/node_modules', '.'],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
    /* Handle CSS imports (with CSS modules)

  publicRuntimeConfig: {
    // Will be available on both server and client
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    settings
  }
}
