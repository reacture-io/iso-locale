import { z } from "zod";

import { type ISO639_1,isValidISO639_1 } from "./iso-639-1";
import { type ISO639_3,isValidISO639_3 } from "./iso-639-3";
import { isValidLanguageName, type LanguageName } from "./language-name";

export const language = z.object({
  language: z.custom<LanguageName>((value) => isValidLanguageName(value)),
  native: z.string(),
  iso639_1: z.custom<ISO639_1>((value) => isValidISO639_1(value)),
  iso639_3: z.custom<ISO639_3>((value) => isValidISO639_3(value)),
});

export type Language = z.infer<typeof language>;

export const isValidLanguage = (object: unknown) =>
  language.safeParse(object).success;
