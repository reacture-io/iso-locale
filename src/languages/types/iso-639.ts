import { z } from "zod";
import { isValidISO639_1, type ISO639_1 } from "./iso-639-1";
import { isValidLanguage, type Language } from "./language";
import { isValidISO639_3, type ISO639_3 } from "./iso-639-3";

export const iso639 = z.object({
  language: z.custom<Language>((value) => isValidLanguage(value)),
  native: z.string(),
  iso639_1: z.custom<ISO639_1>((value) => isValidISO639_1(value)),
  iso639_3: z.custom<ISO639_3>((value) => isValidISO639_3(value)),
});

export type ISO639 = z.infer<typeof iso639>;

export const isValidISO639 = (object: unknown) =>
  iso639.safeParse(object).success;
