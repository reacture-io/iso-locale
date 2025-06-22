import { describe, expect, it } from "vitest";
import { languages } from "../languages";
import { dialects } from "../dialects";
import { language } from "../types";

describe("verification supported data (languages & dialects)", () => {
  it("should support 389 dialects", () => {
    expect(dialects.length).toBe(389);
  });

  it("should have 184 languages", () => {
    expect(languages.length).toBe(184);
  });

  it("should have 184 iso-639-1 codes", () => {
    expect(Object.keys(language.Values).length).toBe(184);
  });
});
