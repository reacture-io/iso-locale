import type { Alpha2 } from "./alpha2";
import type { Alpha3 } from "./alpha3";
import { countries } from "./countries";
import type { Country } from "./country";
import type { Numeric } from "./numeric";

export function findCountryByAlpha2(alpha2: Alpha2) {
  return countries.find((country) => country.alpha2 === alpha2);
}

export function findCountryByAlpha3(alpha3: Alpha3) {
  return countries.find((country) => country.alpha3 === alpha3);
}

export function findCountryByNumeric(numeric: Numeric) {
  return countries.find((country) => country.numeric === numeric);
}

export function findCountryByName(name: Country) {
  return countries.find((country) => country.name === name);
}
