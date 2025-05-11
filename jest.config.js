module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: './', outputName: 'test-results.xml' }]
  ]
};