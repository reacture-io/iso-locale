import { z } from "zod";

import { type CurrencyName,isValidCurrencyName } from "./currency-name";
import { type FactionalUnit,isValidFactionalUnit } from "./factional-unit";
import { type ISO4217,isValidISO4217 } from "./iso-4217";
import { isValidSymbol, type Symbol } from "./symbol";

export const currency = z.object({
  name: z.custom<CurrencyName>((value) => isValidCurrencyName(value)),
  symbol: z.custom<Symbol>((value) => isValidSymbol(value)).optional(),
  iso4217: z.custom<ISO4217>((value) => isValidISO4217(value)).optional(),
  factionalUnit: z
    .custom<FactionalUnit>((value) => isValidFactionalUnit(value))
    .optional(),
});

export type Currency = z.infer<typeof currency>;

export const isValidCurrency = (_currency: unknown) =>
  currency.safeParse(_currency).success;
