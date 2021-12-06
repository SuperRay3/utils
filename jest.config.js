module.exports = {
	preset: 'ts-jest',
	testEnvironment: "node",
	coverageDirectory: "coverage",
	coverageProvider: "v8",
	coverageThreshold: {
    "./packages/**/*.ts": {
      "branches": 100,
      "functions": 100,
      "lines": 100,
      "statements": 100
    }
  },
  roots: [
    '<rootDir>/packages',
  ],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
}
