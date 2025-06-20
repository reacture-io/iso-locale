import { describe, it, expect } from "vitest";
import { isValidISO3166 } from "../iso-3166";
import { findCountryByName } from "../utils";

const afghan = findCountryByName("Afghanistan");

describe("country schema", () => {
  it("should be defined", () => {
    expect(isValidISO3166).toBeDefined();
  });

  it("should be a valid country object", () => {
    expect(isValidISO3166(afghan)).toBe(true);
  });

  it("should not be a valid country object with invalid alpha2", () => {
    expect(isValidISO3166({ ...afghan, alpha2: "XX" })).toBe(false);
  });

  it("should not be a valid country object with invalid alpha3", () => {
    expect(isValidISO3166({ ...afghan, alpha3: "XXX" })).toBe(false);
  });

  it("should not be a valid country object with invalid numeric", () => {
    expect(isValidISO3166({ ...afghan, numeric: "999" })).toBe(false);
  });

  it("should not be a valid country object with missing name", () => {
    expect(isValidISO3166({ ...afghan, name: undefined })).toBe(false);
  });

  it("should not be a valid country object with wrong types", () => {
    expect(isValidISO3166({ ...afghan, name: 123 })).toBe(false);
  });

  it("should not be a valid country object with null values", () => {
    expect(isValidISO3166({ ...afghan, name: null })).toBe(false);
  });

  it("should not be a valid country object with undefined values", () => {
    expect(isValidISO3166({ ...afghan, name: undefined })).toBe(false);
  });

  it("should not be a valid country object with empty string name", () => {
    expect(isValidISO3166({ ...afghan, name: "" })).toBe(false);
  });

  it("should validate multiple valid countries", () => {
    const validCountries = [
      {
        name: "United States of America",
        alpha2: "US",
        alpha3: "USA",
        numeric: "840",
        continents: ["North America"],
        regions: ["AMER"],
      },
      {
        name: "Canada",
        alpha2: "CA",
        alpha3: "CAN",
        numeric: "124",
        continents: ["North America"],
        regions: ["AMER"],
      },
      {
        name: "United Kingdom of Great Britain and Northern Ireland",
        alpha2: "GB",
        alpha3: "GBR",
        numeric: "826",
        continents: ["Europe"],
        regions: ["EMEA"],
      },
    ];

    validCountries.forEach((country) => {
      expect(isValidISO3166(country)).toBe(true);
    });
  });
});
