import NextJest from 'next/jest'

const createJestConfig = NextJest({
  dir: './',
})

const customJestConfig = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
      babelConfig: '.babelrc.js',
      useESM: true,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  modulePaths: ['<rootDir>/src'],
  testPathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
    'node_modules/(?!swiper|ssr-window|dom7).*/',
    '<rootDir>/tailwind.config.*/',
  ],
  transformIgnorePatterns: ['<rootDir>/node_modules/?!(swiper)'],
  moduleNameMapper: {
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
    '^src/(.*)$': '<rootDir>/src/$1',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^constants/(.*)$': '<rootDir>/src/constants/$1',
    '^hook/(.*)$': '<rootDir>/src/hook/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
    '^redux/(.*)$': '<rootDir>/src/redux/$1',
    '^styles/(.*)$': '<rootDir>/src/styles/$1',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
  },
  watchPathIgnorePatterns: ['dist'],
}
module.exports = createJestConfig(customJestConfig)
