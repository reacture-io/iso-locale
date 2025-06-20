import { z } from "zod";
import { Alpha2, alpha2 } from "./alpha2";
import { alpha3, type Alpha3 } from "./alpha3";
import { numeric, type Numeric } from "./numeric";
import { country, type Country } from "./country";
import { region, type Region } from "./region";
import { continent, type Continent } from "./continent";

const schema = z.object({
  name: z.custom<Country>((value) => country.safeParse(value).success),
  alpha2: z.custom<Alpha2>((value) => alpha2.safeParse(value).success),
  alpha3: z.custom<Alpha3>((value) => alpha3.safeParse(value).success),
  numeric: z.custom<Numeric>((value) => numeric.safeParse(value).success),
  regions: z.array(
    z.custom<Region>((value) => region.safeParse(value).success)
  ),
  continents: z.array(
    z.custom<Continent>((value) => continent.safeParse(value).success)
  ),
});

/**
 * ISO 3166
 * https://www.iso.org/iso-3166-country-codes.html
 */
export type ISO3166 = z.infer<typeof schema>;

export const isValidISO3166 = (object: unknown) =>
  schema.safeParse(object).success;
