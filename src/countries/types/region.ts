import { z } from "zod";

export const region = z.enum([
  "EMEA",
  "APAC",
  "AMER",
  "LATAM",
  "NA",
  "SA",
  "MEA",
]);

export type Region = z.infer<typeof region>;

export const isValidRegion = (_region: unknown) =>
  region.safeParse(_region).success;
