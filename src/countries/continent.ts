import { z } from "zod";

export const continent = z.enum([
  "Africa",
  "Antarctica",
  "Asia",
  "Europe",
  "North America",
  "Oceania",
  "South America",
]);

export type Continent = z.infer<typeof continent>;

export const isValidContinent = (_continent: unknown) =>
  continent.safeParse(_continent).success;
