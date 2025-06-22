import { dialects } from "./dialects";
import type { Dialect, ISO639, ISO639_1, ISO639_3, Language } from "./types";
import { languages } from "./languages";
import type { ISO3166 } from "../countries";

export function getLanguageByCode(
  code: ISO639_1 | ISO639_3
): ISO639 | undefined {
  return languages.find(
    (language) => language.iso639_1 === code || language.iso639_3 === code
  );
}

export function getDialectsByCode(code: ISO639_1 | ISO639_3): Array<Dialect> {
  return dialects.filter(
    (dialect) => dialect.iso639_1 === code || dialect.iso639_3 === code
  );
}
