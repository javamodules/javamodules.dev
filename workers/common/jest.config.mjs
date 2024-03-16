/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {},
  reporters: [
    "default",
    [
      "jest-junit",
      {
        suiteName: "Site Frontend",
        outputDirectory: "reports",
      },
    ],
  ],
};
