import { z } from "zod";

export const iso639_3 = z.string().regex(/^[a-z]{3}$/);

export type ISO639_3 = z.infer<typeof iso639_3>;

export const isValidISO639_3 = (object: unknown) =>
  iso639_3.safeParse(object).success;
