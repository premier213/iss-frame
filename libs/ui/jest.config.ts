/* eslint-disable */
export default {
  displayName: "input",
  moduleFileExtensions: ["js", "ts", "tsx"],
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  preset: "../../jest.preset.js",
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.spec.json",
    },
  },
  coverageDirectory: "../../coverage/packages/input",
  setupFilesAfterEnv: ["./jest.setup.ts"],
};
