import { describe, expect, it } from "vitest";
import { currencies } from "../currencies";
import { currencyName, iso4217 } from "../types";

describe("verification supported data (currencies)", () => {
  it("should support 155 currencies", () => {
    expect(currencies.length).toBe(155);
  });

  it("should have 169 unique currency names", () => {
    expect(Object.values(currencyName.Values).length).toBe(169);
  });

  it("should have 155 iso codes", () => {
    expect(Object.values(iso4217.Values).length).toBe(155);
  });

  it("All currencies should have a unique iso4217 code", () => {
    const iso4217Codes = new Set(
      currencies.map((currency) => currency.iso4217)
    );
    expect(iso4217Codes.size).toBe(currencies.length);
  });

  it("should not have duplicate ISO 4217 codes", () => {
    const iso4217Codes = new Set(
      currencies.map((currency) => currency.iso4217)
    );
    expect(iso4217Codes.size).toBe(currencies.length);
  });
});
