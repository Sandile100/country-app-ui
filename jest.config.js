module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  coverageDirectory: 'coverage',
  testRegex: '(/__tests__/.*|(\\.|/))(test|spec)\\.(jsx?|ts?|tsx?)$',
};