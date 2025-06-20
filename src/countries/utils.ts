import type { Alpha2 } from "./alpha2";
import type { Alpha3 } from "./alpha3";
import type { Continent } from "./continent";
import { countries } from "./countries";
import type { Country } from "./country";
import type { ISO3166 } from "./iso-3166";
import type { Numeric } from "./numeric";
import type { Region } from "./region";

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

export function isPartOfRegion(country: ISO3166, region: Region) {
  return country.regions.includes(region);
}

export function getCountriesByRegion(region: Region) {
  return countries.filter((country) => country.regions.includes(region));
}

export function getCountriesByContinent(continent: Continent) {
  return countries.filter((country) => country.continents.includes(continent));
}
