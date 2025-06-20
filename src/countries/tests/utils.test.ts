import { describe, it, expect } from "vitest";
import {
  findCountryByAlpha2,
  findCountryByAlpha3,
  findCountryByNumeric,
  findCountryByName,
  getCountriesByRegion,
  getCountriesByContinent,
} from "../utils";
import type { Alpha2 } from "../alpha2";
import type { Alpha3 } from "../alpha3";
import type { Numeric } from "../numeric";
import type { Country } from "../country";

const afghan = findCountryByName("Afghanistan");

describe("utils", () => {
  it("should be defined", () => {
    expect(findCountryByAlpha2).toBeDefined();
  });

  it("should find country by alpha2", () => {
    expect(findCountryByAlpha2("AF")).to.deep.equal(afghan);
  });

  it("should find country by alpha3", () => {
    expect(findCountryByAlpha3("AFG")).to.deep.equal(afghan);
  });

  it("should find country by numeric", () => {
    expect(findCountryByNumeric("004")).to.deep.equal(afghan);
  });

  it("should find country by name", () => {
    expect(findCountryByName("Afghanistan")).to.deep.equal(afghan);
  });

  it("should not find country by invalid alpha2", () => {
    expect(findCountryByAlpha2("XX" as Alpha2)).to.be.undefined;
  });

  it("should not find country by invalid alpha3", () => {
    expect(findCountryByAlpha3("XXX" as Alpha3)).to.be.undefined;
  });

  it("should not find country by invalid numeric", () => {
    expect(findCountryByNumeric("000000" as Numeric)).to.be.undefined;
  });

  it("should not find country by invalid name", () => {
    expect(findCountryByName("Wonderland" as Country)).to.be.undefined;
  });

  it("should have 129 countries in EMEA", () => {
    expect(getCountriesByRegion("EMEA").length).toBe(129);
  });

  it("should have 129 countries in AMER", () => {
    expect(getCountriesByRegion("AMER").length).toBe(55);
  });

  it("should have 129 countries in APAC", () => {
    expect(getCountriesByRegion("APAC").length).toBe(64);
  });

  it("should have 129 countries in MEA", () => {
    expect(getCountriesByRegion("MEA").length).toBe(73);
  });

  it("should have 129 countries in LATAM", () => {
    expect(getCountriesByRegion("LATAM").length).toBe(48);
  });

  it("should have 129 countries in NA", () => {
    expect(getCountriesByRegion("NA").length).toBe(37);
  });

  it("should have 129 countries in SA", () => {
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
