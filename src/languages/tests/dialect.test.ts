import { describe, it, expect } from "vitest";
import { dialects } from "../dialects";
import { isValidDialect } from "../dialect";

describe("Dialect", () => {
  it("should be a valid dialect", () => {
    expect(
      isValidDialect({
        dialect: "English",
        native: "English",
        iso639_1: "en",
        bcp47: "en-US",
      })
    ).toBe(true);
  });

  it("should not contain the same bcp47 twice", () => {
    const bcp47Codes = dialects.map((dialect) => dialect.bcp47);
    const uniqueBcp47Codes = [...new Set(bcp47Codes)];
    expect(bcp47Codes.length).toBe(uniqueBcp47Codes.length);
  });

  it("should support 389 dialects", () => {
    expect(dialects.length).toBe(389);
  });
});
