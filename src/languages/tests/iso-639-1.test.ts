import { describe, expect, it } from "vitest";
import { iso639_1, isValidISO639_1 } from "../iso-639-1";

describe("ISO 639-1", () => {
  it("should be a valid ISO 639-1 code", () => {
    expect(isValidISO639_1("en")).toBe(true);
  });

  it("should have 184 codes", () => {
    expect(Object.keys(iso639_1.enum).length).toBe(184);
  });
  it("should not be a valid ISO 639-1 code", () => {
    expect(isValidISO639_1("en-US")).toBe(false);
  });
  it("should not be a valid ISO 639-1 code", () => {
    expect(isValidISO639_1("xx")).toBe(false);
  });
});
