module.exports = {
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  testURL: 'http://localhost/',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
