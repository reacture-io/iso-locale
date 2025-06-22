import { describe, expect, it } from "vitest";
import { getLanguageByCode, getDialectsByCode } from "../utils";
import { language } from "../types";

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
});
