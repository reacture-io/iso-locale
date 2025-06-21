import { describe, expect, it } from "vitest";
import { countries } from "../../countries";
import type { Dialect } from "../dialect";
import { isValidLanguage, language } from "../language";
import { languages } from "../languages";

describe("Language", () => {
  it("should be a valid language", () => {
    expect(isValidLanguage("English")).toBe(true);
  });

  it("should have 184 codes", () => {
    expect(Object.keys(language.enum).length).toBe(184);
  });

  it("should not be a valid language", () => {
    expect(isValidLanguage("English-US")).toBe(false);
  });

  it("should support 184 languages", () => {
    expect(languages.length).toBe(184);
  });
});
