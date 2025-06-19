import { describe, it, expect } from "vitest";
import { countries } from "../countries";

describe("countries", () => {
  it("should be defined", () => {
    expect(countries).toBeDefined();
  });

  it("should support 249 countries", () => {
    expect(countries.length).toBe(249);
  });
});
