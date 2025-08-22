import { z } from "zod";

import { type ISO4217,isValidISO4217 } from "../../currencies";
import { type BCP47 } from "../../languages/types/bcp-47";
import { isValidBCP47 } from "../../languages/utils";

import { Alpha2, isValidAlpha2 } from "./alpha2";
import { type Alpha3,isValidAlpha3 } from "./alpha3";
import { type Continent,isValidContinent } from "./continent";
import { type CountryName,isValidCountryName } from "./country-name";
import { isValidNumeric, type Numeric } from "./numeric";
import { isValidRegion, type Region } from "./region";

export const country = z.object({
  name: z.custom<CountryName>((value) => isValidCountryName(value)),
  alpha2: z.custom<Alpha2>((value) => isValidAlpha2(value)),
  alpha3: z.custom<Alpha3>((value) => isValidAlpha3(value)),
  numeric: z.custom<Numeric>((value) => isValidNumeric(value)),
  regions: z.array(z.custom<Region>((value) => isValidRegion(value))),
  continents: z.array(z.custom<Continent>((value) => isValidContinent(value))),
  dialects: z.array(z.custom<BCP47>((value) => isValidBCP47(value))),
  currency: z.custom<ISO4217>((value) => isValidISO4217(value)),
});

/**
 * ISO 3166
 * https://www.iso.org/iso-3166-country-codes.html
 */
export type Country = z.infer<typeof country>;

export const isValidCountry = (_country: unknown) =>
  country.safeParse(_country).success;
