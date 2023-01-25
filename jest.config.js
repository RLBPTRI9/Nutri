/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  clearMocks: true,
  coverageProvider: 'v8',
  rootDir: './__tests__/',
  transformIgnorePatterns: ['/node_modules/'],
  testPathIgnorePatterns: ['utils'],
  preset: 'ts-jest',
  testEnvironment: 'node',
};
