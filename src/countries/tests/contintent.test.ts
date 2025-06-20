import { describe, it, expect } from "vitest";
import { continent, isValidContinent } from "../continent";

describe("continent", () => {
  it("should be defined", () => {
    expect(continent).toBeDefined();
  });

  it("should be valid", () => {
    expect(isValidContinent("Asia")).toBe(true);
  });

  it("should not be valid", () => {
    expect(isValidContinent("Asia1")).toBe(false);
  });
});
