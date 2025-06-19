import { describe, it, expect } from "vitest";
import {
  findCountryByAlpha2,
  findCountryByAlpha3,
  findCountryByNumeric,
  findCountryByName,
} from "../utils";
import type { Alpha2 } from "../alpha2";
import type { Alpha3 } from "../alpha3";
import type { Numeric } from "../numeric";
import type { Country } from "../country";

describe("utils", () => {
  it("should be defined", () => {
    expect(findCountryByAlpha2).toBeDefined();
  });

  it("should find country by alpha2", () => {
    expect(findCountryByAlpha2("AF")).to.deep.equal({
      name: "Afghanistan",
      alpha2: "AF",
      alpha3: "AFG",
      numeric: "004",
    });
  });

  it("should find country by alpha3", () => {
    expect(findCountryByAlpha3("AFG")).to.deep.equal({
      name: "Afghanistan",
      alpha2: "AF",
      alpha3: "AFG",
      numeric: "004",
    });
  });

  it("should find country by numeric", () => {
    expect(findCountryByNumeric("004")).to.deep.equal({
      name: "Afghanistan",
      alpha2: "AF",
      alpha3: "AFG",
      numeric: "004",
    });
  });

  it("should find country by name", () => {
    expect(findCountryByName("Afghanistan")).to.deep.equal({
      name: "Afghanistan",
      alpha2: "AF",
      alpha3: "AFG",
      numeric: "004",
    });
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
});
