import { describe, it, expect } from "vitest";
import { region, isValidRegion } from "../region";

describe("region", () => {
  it("should be defined", () => {
    expect(region).toBeDefined();
  });

  it("should be valid", () => {
    expect(isValidRegion("EMEA")).toBe(true);
  });

  it("should not be valid", () => {
    expect(isValidRegion("EMEA1")).toBe(false);
  });
});
