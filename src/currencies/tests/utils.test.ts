import { describe, expect, it } from "vitest";
import {
  getCurrenciesByName,
  getCurrenciesBySymbol,
  getCurrencyByISO4217,
} from "../utils";
import { iso4217, symbol, currencyName } from "../types";
import { getCountryByAlpha2 } from "../../countries";

describe("currencies utils", () => {
  it("should find currency by iso4217 code", () => {
    const currency = getCurrencyByISO4217("USD");
    expect(currency.iso4217).toBe("USD");
    expect(currency.name).toBe("United States dollar");
    expect(currency.symbol).toBe("$");
  });

  it("should find currency by symbol", () => {
    const currencies = getCurrenciesBySymbol("$");
    expect(currencies.length).toBe(22);
  });

  it("should find currency by name", () => {
    const currencies = getCurrenciesByName("United States dollar");
    expect(currencies.length).toBe(1);
    expect(currencies[0].iso4217).toBe("USD");
    expect(currencies[0].name).toBe("United States dollar");
    expect(currencies[0].symbol).toBe("$");
  });

  it("should give euro for belgium", () => {
    const belgium = getCountryByAlpha2("BE");
    const currency = getCurrencyByISO4217(belgium.currency);
    expect(currency.iso4217).toBe("EUR");
    expect(currency.name).toBe("Euro");
    expect(currency.symbol).toBe("€");
  });
});
