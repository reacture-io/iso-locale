import { describe, it, expect } from "vitest";
import { continents, countries, regions } from "../data";

describe("countries", () => {
  it("should be defined", () => {
    expect(countries).toBeDefined();
  });

  it("should support 249 countries", () => {
    expect(countries.length).toBe(249);
  });

  it("should support 7 continents", () => {
    expect(continents.length).toBe(7);
  });

  it("should support 7 regions", () => {
    expect(regions.length).toBe(7);
  });
});
