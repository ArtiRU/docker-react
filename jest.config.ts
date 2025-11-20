import type { Config } from 'jest';

const config: Config = {
  coverageDirectory: '<rootDir>/coverage',
  preset: 'ts-jest/presets/js-with-babel',
  rootDir: './',
  verbose: true,
  maxWorkers: 4,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/src/test/setup-tests.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  // testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleDirectories: ['node_modules', 'src'],
  transformIgnorePatterns: [],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {}],
  },
};

export default config;
