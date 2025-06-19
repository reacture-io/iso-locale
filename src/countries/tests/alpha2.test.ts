import { describe, it, expect } from "vitest";
import { alpha2, isValidAlpha2 } from "../alpha2";

describe("alpha2", () => {
  it("should be defined", () => {
    expect(alpha2).toBeDefined();
  });

  it("should be a valid alpha2 code", () => {
    expect(isValidAlpha2("AF")).toBe(true);
  });

  it("should not allow lowercase", () => {
    expect(isValidAlpha2("af")).toBe(false);
  });

  it("should not allow number", () => {
    expect(isValidAlpha2(10)).toBe(false);
  });

  it("should not allow null", () => {
    expect(isValidAlpha2(null)).toBe(false);
  });

  it("should not allow undefined", () => {
    expect(isValidAlpha2(undefined)).toBe(false);
  });

  it("should not allow boolean", () => {
    expect(isValidAlpha2("Africa")).toBe(false);
  });
});
