export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  preset: 'ts-jest',
  testMatch: [
    //"**/child.test.ts",
    //"**/child-v2.test.ts",
    //"**/parent.test.ts",
    "**/child-v3.test.ts",
    "**/parent-v2.test.ts",
  ],
};
