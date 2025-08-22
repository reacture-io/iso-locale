import { describe, expect, it } from "vitest";

import { dialects } from "../dialects";
import { languages } from "../languages";
import { languageName } from "../types";

describe("verification supported data (languages & dialects)", () => {
  it("should support 389 dialects", () => {
    expect(dialects.length).toBe(389);
  });

  it("should have 184 languages", () => {
    expect(languages.length).toBe(184);
  });

  it("should have 184 iso-639-1 codes", () => {
    expect(Object.keys(languageName.Values).length).toBe(184);
  });

  it("should have only unique dialects", () => {
    const bcp47s = dialects.map((dialect) => dialect.bcp47);
    expect(new Set(bcp47s).size).toBe(dialects.length);
  });
});
