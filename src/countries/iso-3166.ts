import { z } from "zod";
import { isValidDialect, type Dialect } from "../languages/dialect";
import { Alpha2, isValidAlpha2 } from "./alpha2";
import { isValidAlpha3, type Alpha3 } from "./alpha3";
import { isValidContinent, type Continent } from "./continent";
import { isValidCountry, type Country } from "./country";
import { isValidNumeric, type Numeric } from "./numeric";
import { isValidRegion, type Region } from "./region";

export const iso3166 = z.object({
  name: z.custom<Country>((value) => isValidCountry(value)),
  alpha2: z.custom<Alpha2>((value) => isValidAlpha2(value)),
  alpha3: z.custom<Alpha3>((value) => isValidAlpha3(value)),
  numeric: z.custom<Numeric>((value) => isValidNumeric(value)),
  regions: z.array(z.custom<Region>((value) => isValidRegion(value))),
  continents: z.array(z.custom<Continent>((value) => isValidContinent(value))),
  dialects: z.array(z.custom<Dialect>((value) => isValidDialect(value))),
});

/**
 * ISO 3166
 * https://www.iso.org/iso-3166-country-codes.html
 */
export type ISO3166 = z.infer<typeof iso3166>;

export const isValidISO3166 = (object: unknown) =>
  iso3166.safeParse(object).success;
