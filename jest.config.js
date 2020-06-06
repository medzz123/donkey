module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testPathIgnorePatterns: [`node_modules`, `\\.next`],
    moduleNameMapper: {
      "^@components(.*)$": "<rootDir>/src/components$1",
      "^@theme(.*)$": "<rootDir>/src/theme$1",
      "^@utils(.*)$": "<rootDir>/src/utils$1",
      "^@pages(.*)$": "<rootDir>/src/pages$1",
    },
    globals: {
      "ts-jest": {
        tsConfig: "tsconfig.jest.json"
      }
    }
  };