import { describe, expect, it } from "vitest";
import { languages } from "../languages";

describe("Languages", () => {
  it("should have 184 languages", () => {
    expect(languages.length).toBe(184);
  });
});
