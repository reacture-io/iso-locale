import { z } from "zod";

import { isValidBCP47 } from "../utils";

import { type BCP47 } from "./bcp-47";
import { type ISO639_1,isValidISO639_1 } from "./iso-639-1";
import { type ISO639_3,isValidISO639_3 } from "./iso-639-3";

export const dialect = z.object({
  dialect: z.string(),
  native: z.string(),
  iso639_1: z.custom<ISO639_1>((value) => isValidISO639_1(value)).optional(),
  iso639_3: z.custom<ISO639_3>((value) => isValidISO639_3(value)).optional(),
  bcp47: z.custom<BCP47>(isValidBCP47),
});

export type Dialect = z.infer<typeof dialect>;

export const isValidDialect = (object: unknown) =>
  dialect.safeParse(object).success;
