import { assert } from "../utils/assert";

import type { BCP47 } from "./types/bcp-47";
import { dialects } from "./dialects";
import { languages } from "./languages";
import type { Dialect, ISO639_1, ISO639_3, Language } from "./types";

export function getLanguageByCode(code: ISO639_1 | ISO639_3): Language {
  const language = languages.find(
    (_language) => _language.iso639_1 === code || _language.iso639_3 === code
  );
  assert(language, `Language with code ${code} not found`);
  return language;
}

export function getDialectsByCode(code: ISO639_1 | ISO639_3): Array<Dialect> {
  return dialects.filter(
    (dialect) => dialect.iso639_1 === code || dialect.iso639_3 === code
  );
}

export function getDialectByCode(bcp47: BCP47): Dialect {
  const dialect = dialects.find((_dialect) => _dialect.bcp47 === bcp47);
  assert(dialect, `Dialect with bcp47 ${bcp47} not found`);
  return dialect;
}

export function isValidBCP47(bcp47: string): boolean {
  return dialects.some((dialect) => dialect.bcp47 === bcp47);
}
