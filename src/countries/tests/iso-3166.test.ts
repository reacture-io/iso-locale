import { describe, it, expect } from "vitest";
import { isValidISO3166 } from "../iso-3166";
import { findCountryByName } from "../utils";

describe("country schema", () => {
  it("should be defined", () => {
    expect(isValidISO3166).toBeDefined();
  });
});
