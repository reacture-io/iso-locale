import { z } from "zod";
import { isValidISO639_1, type ISO639_1 } from "./iso-639-1";
import { isValidISO639_3, type ISO639_3 } from "./iso-639-3";

export const dialect = z.object({
  dialect: z.string(),
  native: z.string(),
  iso639_1: z.custom<ISO639_1>((value) => isValidISO639_1(value)).optional(),
  iso639_3: z.custom<ISO639_3>((value) => isValidISO639_3(value)).optional(),
  bcp47: z
    .string()
    .regex(
      /^[a-zA-Z]{2,3}(-[a-zA-Z]{4})?(-[a-zA-Z]{2}|[0-9]{3})?(-[a-zA-Z0-9]{5,8})*(-[a-zA-Z0-9](-[a-zA-Z0-9]{2,8})+)*$/
    ),
});

export type Dialect = z.infer<typeof dialect>;

export const isValidDialect = (object: unknown) =>
  dialect.safeParse(object).success;
