import { describe, expect, it } from "vitest";
import { getCountryByAlpha2 } from "../../countries";
import {
  getDialectByCode,
  getDialectsByCode,
  getLanguageByCode,
} from "../utils";

describe("languages utils", () => {
  it("should find language by iso-639-1 code", () => {
    const language = getLanguageByCode("en");
    expect(language?.iso639_1).toBe("en");
    expect(language?.language).toBe("English");
    expect(language?.native).toBe("English");
    expect(language?.iso639_3).toBe("eng");
  });

  it("should find dialect by iso-639-1 code", () => {
    const dialects = getDialectsByCode("nl");
    expect(dialects.length).toBe(7);
  });

  it("should find dialect by iso-639-3 code", () => {
    const dialects = getDialectsByCode("nld");
    expect(dialects.length).toBe(7);
  });

  it("should give 3 dialects for Belgiun", () => {
    const belgium = getCountryByAlpha2("BE");
    const dialects = belgium.dialects.map((dialect) =>
      getDialectByCode(dialect)
    );
    expect(dialects.length).toBe(3);
    expect(dialects.map((dialect) => dialect.bcp47)).toEqual([
      "nl-BE",
      "fr-BE",
      "de-BE",
    ]);
  });
});
