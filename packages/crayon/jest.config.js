const createJestConfig = require('../../test-utils/createJestConfig')

module.exports = createJestConfig(__dirname, {
  displayName: 'crayon',
  testEnvironment: 'node',
})
