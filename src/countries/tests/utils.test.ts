import { describe, expect, it } from "vitest";
import {
  findCountryByAlpha2,
  findCountryByAlpha3,
  findCountryByNumeric,
  findCountryByName,
  isPartOfRegion,
  getCountriesByRegion,
  getCountriesByContinent,
} from "../utils";

describe("countries utils", () => {
  it("should have 129 countries in EMEA", () => {
    expect(getCountriesByRegion("EMEA").length).toBe(129);
  });

  it("should have 55 countries in AMER", () => {
    expect(getCountriesByRegion("AMER").length).toBe(55);
  });

  it("should have 64 countries in APAC", () => {
    expect(getCountriesByRegion("APAC").length).toBe(64);
  });

  it("should have 73 countries in MEA", () => {
    expect(getCountriesByRegion("MEA").length).toBe(73);
  });

  it("should have 48 countries in LATAM", () => {
    expect(getCountriesByRegion("LATAM").length).toBe(48);
  });

  it("should have 37 countries in NA", () => {
    expect(getCountriesByRegion("NA").length).toBe(37);
  });

  it("should have 18 countries in SA", () => {
    expect(getCountriesByRegion("SA").length).toBe(18);
  });

  it("should have 60 countries in Europe", () => {
    expect(getCountriesByContinent("Europe").length).toBe(60);
  });

  it("should have 59 countries in Africa", () => {
    expect(getCountriesByContinent("Africa").length).toBe(59);
  });

  it("should have 5 countries in Antarctica", () => {
    expect(getCountriesByContinent("Antarctica").length).toBe(5);
  });

  it("should have 56 countries in Asia", () => {
    expect(getCountriesByContinent("Asia").length).toBe(56);
  });

  it("should have 26 countries in Oceania", () => {
    expect(getCountriesByContinent("Oceania").length).toBe(26);
  });

  it("should have 18 countries in South America", () => {
    expect(getCountriesByContinent("South America").length).toBe(18);
  });

  it("should have 37 countries in North America", () => {
    expect(getCountriesByContinent("North America").length).toBe(37);
  });
});
