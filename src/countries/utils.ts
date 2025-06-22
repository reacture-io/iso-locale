import { assert } from "../utils/assert";
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

export function getCountryByAlpha2(alpha2: Alpha2): ISO3166 {
  const country = countries.find((country) => country.alpha2 === alpha2);
  assert(country, `Country with alpha2 ${alpha2} not found`);
  return country;
}

export function getCountryByAlpha3(alpha3: Alpha3): ISO3166 {
  const country = countries.find((country) => country.alpha3 === alpha3);
  assert(country, `Country with alpha3 ${alpha3} not found`);
  return country;
}

export function getCountryByNumeric(numeric: Numeric): ISO3166 {
  const country = countries.find((country) => country.numeric === numeric);
  assert(country, `Country with numeric ${numeric} not found`);
  return country;
}

export function getCountryByName(name: Country): ISO3166 {
  const country = countries.find((country) => country.name === name);
  assert(country, `Country with name ${name} not found`);
  return country;
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
