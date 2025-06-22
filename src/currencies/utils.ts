import { assert } from "../utils/assert";
import { currencies } from "./currencies";
import type { Currency, CurrencyName, ISO4217, Symbol } from "./types";

export function getCurrencyByISO4217(iso4217: ISO4217): Currency {
  const currency = currencies.find((currency) => currency.iso4217 === iso4217);
  assert(currency, `Currency with ISO4217 code ${iso4217} not found`);
  return currency;
}

export function getCurrenciesBySymbol(symbol: Symbol): Array<Currency> {
  return currencies.filter((currency) => currency.symbol === symbol);
}

export function getCurrenciesByName(name: CurrencyName): Array<Currency> {
  return currencies.filter((currency) => currency.name === name);
}
