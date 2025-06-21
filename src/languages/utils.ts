import { dialects } from "./dialects";
import type { ISO639_1 } from "./iso-639-1";
import type { ISO639_3 } from "./iso-639-3";
import { languages } from "./languages";

export function getLanguageByCode(code: ISO639_1 | ISO639_3) {
  return languages.find(
    (language) => language.iso639_1 === code || language.iso639_3 === code
  );
}

export function getDialectByCode(code: ISO639_1 | ISO639_3) {
  return dialects.find(
    (dialect) => dialect.iso639_1 === code || dialect.iso639_3 === code
  );
}
