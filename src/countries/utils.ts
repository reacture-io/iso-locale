import { countries } from "./countries";
import type {
  Alpha2,
  Alpha3,
  Continent,
  Country,
  ISO3166,
  Numeric,
  Region,
} from "./types";

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
