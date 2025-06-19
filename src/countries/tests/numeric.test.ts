import { describe, it, expect } from "vitest";
import { numeric, isValidNumeric } from "../numeric";

describe("numeric", () => {
  it("should be defined", () => {
    expect(numeric).toBeDefined();
  });

  it("should be a valid numeric code", () => {
    expect(isValidNumeric("124")).toBe(true);
  });

  it("should not allow invalid numeric code", () => {
    expect(isValidNumeric("100000")).toBe(false);
  });

  it("should not allow number", () => {
    expect(isValidNumeric(100000)).toBe(false);
  });

  it("should not allow null", () => {
    expect(isValidNumeric(null)).toBe(false);
  });

  it("should not allow undefined", () => {
    expect(isValidNumeric(undefined)).toBe(false);
  });
});
