import { describe, it, expect } from "vitest";
import { alpha3, isValidAlpha3 } from "../alpha3";

describe("alpha3", () => {
  it("should be defined", () => {
    expect(alpha3).toBeDefined();
  });

  it("should be a valid alpha3 code", () => {
    expect(isValidAlpha3("AFG")).toBe(true);
  });

  it("should not be a valid alpha3 code", () => {
    expect(isValidAlpha3("afg")).toBe(false);
  });

  it("should not allow number", () => {
    expect(isValidAlpha3(10)).toBe(false);
  });

  it("should not allow null", () => {
    expect(isValidAlpha3(null)).toBe(false);
  });

  it("should not allow undefined", () => {
    expect(isValidAlpha3(undefined)).toBe(false);
  });

  it("should not allow boolean", () => {
    expect(isValidAlpha3("Africa")).toBe(false);
  });
});
