import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest", // Use ts-jest to handle TypeScript files
  testEnvironment: "node",
};

export default config;
