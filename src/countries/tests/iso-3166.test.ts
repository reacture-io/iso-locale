import { describe, it, expect } from "vitest";
import { isValidISO3166 } from "../iso-3166";

describe("country schema", () => {
  it("should be defined", () => {
    expect(isValidISO3166).toBeDefined();
  });

  it("should be a valid country object", () => {
    const validCountry = {
      name: "Afghanistan",
      alpha2: "AF",
      alpha3: "AFG",
      numeric: "004",
    };
    expect(isValidISO3166(validCountry)).toBe(true);
  });

  it("should not be a valid country object with invalid alpha2", () => {
    const invalidCountry = {
      name: "Afghanistan",
      alpha2: "XX", // Invalid alpha2
      alpha3: "AFG",
      numeric: "004",
    };
    expect(isValidISO3166(invalidCountry)).toBe(false);
  });

  it("should not be a valid country object with invalid alpha3", () => {
    const invalidCountry = {
      name: "Afghanistan",
      alpha2: "AF",
      alpha3: "XXX", // Invalid alpha3
      numeric: "004",
    };
    expect(isValidISO3166(invalidCountry)).toBe(false);
  });

  it("should not be a valid country object with invalid numeric", () => {
    const invalidCountry = {
      name: "Afghanistan",
      alpha2: "AF",
      alpha3: "AFG",
      numeric: "999", // Invalid numeric
    };
    expect(isValidISO3166(invalidCountry)).toBe(false);
  });

  it("should not be a valid country object with missing name", () => {
    const invalidCountry = {
      alpha2: "AF",
      alpha3: "AFG",
      numeric: "004",
    };
    expect(isValidISO3166(invalidCountry)).toBe(false);
  });

  it("should not be a valid country object with wrong types", () => {
    const invalidCountry = {
      name: 123, // Should be string
      alpha2: "AF",
      alpha3: "AFG",
      numeric: "004",
    };
    expect(isValidISO3166(invalidCountry)).toBe(false);
  });

  it("should not be a valid country object with null values", () => {
    const invalidCountry = {
      name: null,
      alpha2: null,
      alpha3: null,
      numeric: null,
    };
    expect(isValidISO3166(invalidCountry)).toBe(false);
  });

  it("should not be a valid country object with undefined values", () => {
    const invalidCountry = {
      name: undefined,
      alpha2: undefined,
      alpha3: undefined,
      numeric: undefined,
    };
    expect(isValidISO3166(invalidCountry)).toBe(false);
  });

  it("should not be a valid country object with empty string name", () => {
    const invalidCountry = {
      name: "",
      alpha2: "AF",
      alpha3: "AFG",
      numeric: "004",
    };
    expect(isValidISO3166(invalidCountry)).toBe(false);
  });

  it("should validate multiple valid countries", () => {
    const validCountries = [
      {
        name: "United States of America (the)",
        alpha2: "US",
        alpha3: "USA",
        numeric: "840",
      },
      {
        name: "Canada",
        alpha2: "CA",
        alpha3: "CAN",
        numeric: "124",
      },
      {
        name: "United Kingdom of Great Britain and Northern Ireland (the)",
        alpha2: "GB",
        alpha3: "GBR",
        numeric: "826",
      },
    ];

    validCountries.forEach((country) => {
      expect(isValidISO3166(country)).toBe(true);
    });
  });
});
