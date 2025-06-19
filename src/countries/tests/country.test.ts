import { describe, expect, it } from "vitest";
import { country, isValidCountry } from "../country";

describe("country", () => {
  it("should be defined", () => {
    expect(country).toBeDefined();
  });

  it("should be a valid country", () => {
    expect(isValidCountry("Afghanistan")).toBe(true);
  });

  it("should not be a valid country", () => {
    expect(isValidCountry("Afghanistan1")).toBe(false);
  });

  it("should not allow lowercase", () => {
    expect(isValidCountry("afghanistan")).toBe(false);
  });

  it("should not allow empty string", () => {
    expect(isValidCountry("")).toBe(false);
  });

  it("should not allow number", () => {
    expect(isValidCountry(10)).toBe(false);
  });

  it("should not allow null", () => {
    expect(isValidCountry(null)).toBe(false);
  });

  it("should not allow undefined", () => {
    expect(isValidCountry(undefined)).toBe(false);
  });

  it("should not allow boolean", () => {
    expect(isValidCountry(false)).toBe(false);
  });

  it("should not allow boolean", () => {
    expect(isValidCountry(true)).toBe(false);
  });
});
