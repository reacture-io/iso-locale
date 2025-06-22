# @reacture-io/iso-locale

A comprehensive TypeScript library providing ISO standards for handling countries, languages, dialects, and currencies. This package offers full type safety using Zod validation with support for ISO 3166 country codes, ISO 639 language codes, BCP-47 dialects, and ISO 4217 currency codes.

## Features

- 🌍 **Complete ISO 3166-1 Support**: All official country codes (Alpha-2, Alpha-3, and Numeric)
- 🗺️ **Regional Classifications**: Business regions (EMEA, APAC, AMER, LATAM, NA, SA, MEA)
- 🌎 **Continental Classifications**: Geographic continents (Africa, Antarctica, Asia, Europe, North America, Oceania, South America)
- 🌐 **ISO 639 Language Support**: Complete language codes (ISO 639-1 and ISO 639-3)
- 🗣️ **BCP-47 Dialect Support**: Regional language variants with native names
- 💰 **ISO 4217 Currency Support**: Currency codes, symbols, and fractional units
- 🔒 **Type Safety**: Built with TypeScript and Zod for runtime validation
- 📦 **Tree-shakable**: Only import what you need
- 🚀 **Zero Dependencies**: Minimal footprint (only Zod for validation)
- ✅ **Fully Tested**: Comprehensive test coverage

## Installation

```bash
pnpm add @reacture-io/iso-locale
```

**Note**: This package requires pnpm as the package manager. Please use pnpm instead of npm or yarn.

## Usage

### Countries

#### Basic Import

```typescript
import { countries, getCountryByAlpha2, getCountryByAlpha3 } from '@reacture-io/iso-locale/countries';
```

#### Finding Countries

```typescript
// Find by Alpha-2 code (2-letter country code)
const usa = getCountryByAlpha2('US');
console.log(usa);
// {
//   name: "United States of America",
//   alpha2: "US",
//   alpha3: "USA",
//   numeric: "840",
//   continents: ["North America"],
//   regions: ["AMER", "NA"],
//   dialects: ["en-US"],
//   currency: "USD"
// }

// Find by Alpha-3 code (3-letter country code)
const canada = getCountryByAlpha3('CAN');
console.log(canada);
// {
//   name: "Canada",
//   alpha2: "CA",
//   alpha3: "CAN",
//   numeric: "124",
//   continents: ["North America"],
//   regions: ["AMER", "NA"],
//   dialects: ["en-CA", "fr-CA"],
//   currency: "CAD"
// }

// Find by numeric code
const germany = getCountryByNumeric('276');
console.log(germany);
// {
//   name: "Germany",
//   alpha2: "DE",
//   alpha3: "DEU",
//   numeric: "276",
//   continents: ["Europe"],
//   regions: ["EMEA"],
//   dialects: ["de-DE"],
//   currency: "EUR"
// }

// Find by country name
const france = getCountryByName('France');
console.log(france);
// {
//   name: "France",
//   alpha2: "FR",
//   alpha3: "FRA",
//   numeric: "250",
//   continents: ["Europe"],
//   regions: ["EMEA"],
//   dialects: ["fr-FR"],
//   currency: "EUR"
// }
```

#### Working with Regions

```typescript
import { getCountriesByRegion, isPartOfRegion } from '@reacture-io/iso-locale/countries';

// Get all countries in a specific region
const emeaCountries = getCountriesByRegion('EMEA');
console.log(emeaCountries.length); // Number of EMEA countries

// Check if a country belongs to a region
const usa = getCountryByAlpha2('US');
if (usa) {
  console.log(isPartOfRegion(usa, 'AMER')); // true
  console.log(isPartOfRegion(usa, 'EMEA')); // false
}
```

#### Working with Continents

```typescript
import { getCountriesByContinent } from '@reacture-io/iso-locale/countries';

// Get all countries in a specific continent
const europeanCountries = getCountriesByContinent('Europe');
console.log(europeanCountries.length); // Number of European countries

// Some countries span multiple continents
const russia = getCountryByAlpha2('RU');
console.log(russia?.continents); // ["Asia", "Europe"]
```

#### Country Validation

```typescript
import { isValidAlpha2, isValidAlpha3, isValidCountry, isValidRegion, isValidContinent } from '@reacture-io/iso-locale/countries';

// Validate Alpha-2 codes
console.log(isValidAlpha2('US')); // true
console.log(isValidAlpha2('XX')); // false

// Validate Alpha-3 codes
console.log(isValidAlpha3('USA')); // true
console.log(isValidAlpha3('XXX')); // false

// Validate country names
console.log(isValidCountry('United States of America')); // true
console.log(isValidCountry('Wonderland')); // false

// Validate regions
console.log(isValidRegion('EMEA')); // true
console.log(isValidRegion('INVALID')); // false

// Validate continents
console.log(isValidContinent('Europe')); // true
console.log(isValidContinent('Invalid')); // false
```

### Languages

#### Basic Import

```typescript
import { languages, getLanguageByCode } from '@reacture-io/iso-locale/languages';
```

#### Finding Languages

```typescript
// Find by ISO 639-1 code (2-letter language code)
const english = getLanguageByCode('en');
console.log(english);
// {
//   language: "English",
//   native: "English",
//   iso639_1: "en",
//   iso639_3: "eng"
// }

// Find by ISO 639-3 code (3-letter language code)
const french = getLanguageByCode('fra');
console.log(french);
// {
//   language: "French",
//   native: "Français",
//   iso639_1: "fr",
//   iso639_3: "fra"
// }

// Access all languages
console.log(languages.length); // Number of supported languages
```

#### Language Validation

```typescript
import { isValidISO639_1, isValidISO639_3, isValidLanguage } from '@reacture-io/iso-locale/languages';

// Validate ISO 639-1 codes
console.log(isValidISO639_1('en')); // true
console.log(isValidISO639_1('xx')); // false

// Validate ISO 639-3 codes
console.log(isValidISO639_3('eng')); // true
console.log(isValidISO639_3('xxx')); // false

// Validate language objects
console.log(isValidLanguage({ language: "English", native: "English", iso639_1: "en", iso639_3: "eng" })); // true
```

### Dialects

#### Basic Import

```typescript
import { dialects, getDialectByCode, getDialectsByCode } from '@reacture-io/iso-locale/languages';
```

#### Finding Dialects

```typescript
// Find by BCP-47 code (language-region code)
const usEnglish = getDialectByCode('en-US');
console.log(usEnglish);
// {
//   dialect: "English (United States)",
//   native: "English (United States)",
//   iso639_1: "en",
//   iso639_3: "eng",
//   bcp47: "en-US"
// }

// Find all dialects for a language
const englishDialects = getDialectsByCode('en');
console.log(englishDialects.length); // Number of English dialects

// Access all dialects
console.log(dialects.length); // Number of supported dialects
```

#### Dialect Validation

```typescript
import { isValidBCP47, isValidDialect } from '@reacture-io/iso-locale/languages';

// Validate BCP-47 codes
console.log(isValidBCP47('en-US')); // true
console.log(isValidBCP47('en-XX')); // false

// Validate dialect objects
console.log(isValidDialect({ dialect: "English (United States)", native: "English (United States)", iso639_1: "en", iso639_3: "eng", bcp47: "en-US" })); // true
```

### Currencies

#### Basic Import

```typescript
import { currencies, getCurrencyByISO4217, getCurrenciesBySymbol } from '@reacture-io/iso-locale/currencies';
```

#### Finding Currencies

```typescript
// Find by ISO 4217 code (3-letter currency code)
const usd = getCurrencyByISO4217('USD');
console.log(usd);
// {
//   name: "United States dollar",
//   symbol: "$",
//   iso4217: "USD",
//   factionalUnit: "Cent"
// }

// Find currencies by symbol
const dollarCurrencies = getCurrenciesBySymbol('$');
console.log(dollarCurrencies.length); // Number of currencies using $ symbol

// Find currencies by name
const euroCurrencies = getCurrenciesByName('Euro');
console.log(euroCurrencies);
// [{
//   name: "Euro",
//   symbol: "€",
//   iso4217: "EUR",
//   factionalUnit: "Cent"
// }]

// Access all currencies
console.log(currencies.length); // Number of supported currencies
```

#### Currency Validation

```typescript
import { isValidISO4217, isValidSymbol, isValidCurrency } from '@reacture-io/iso-locale/currencies';

// Validate ISO 4217 codes
console.log(isValidISO4217('USD')); // true
console.log(isValidISO4217('XXX')); // false

// Validate currency symbols
console.log(isValidSymbol('$')); // true
console.log(isValidSymbol('INVALID')); // false

// Validate currency objects
console.log(isValidCurrency({ name: "United States dollar", symbol: "$", iso4217: "USD", factionalUnit: "Cent" })); // true
```

## API Reference

### Countries

#### Types

#### `Country`
The main country object type containing all country information:
```typescript
type Country = {
  name: CountryName;
  alpha2: Alpha2;
  alpha3: Alpha3;
  numeric: Numeric;
  continents: Continent[];
  regions: Region[];
  dialects: string[];
  currency: string;
}
```

#### `CountryName`
Type for valid country names (e.g., "United States of America", "Canada")

#### `Alpha2`
Type for 2-letter country codes (e.g., "US", "CA", "DE")

#### `Alpha3`
Type for 3-letter country codes (e.g., "USA", "CAN", "DEU")

#### `Numeric`
Type for 3-digit numeric country codes (e.g., "840", "124", "276")

#### `Region`
Type for business regions: "EMEA" | "APAC" | "AMER" | "LATAM" | "NA" | "SA" | "MEA"

#### `Continent`
Type for geographic continents: "Africa" | "Antarctica" | "Asia" | "Europe" | "North America" | "Oceania" | "South America"

#### Functions

#### `getCountryByAlpha2(alpha2: Alpha2): Country`
Finds a country by its Alpha-2 code.

#### `getCountryByAlpha3(alpha3: Alpha3): Country`
Finds a country by its Alpha-3 code.

#### `getCountryByNumeric(numeric: Numeric): Country`
Finds a country by its numeric code.

#### `getCountryByName(name: CountryName): Country`
Finds a country by its official name.

#### `getCountriesByRegion(region: Region): Country[]`
Returns all countries that belong to the specified region.

#### `getCountriesByContinent(continent: Continent): Country[]`
Returns all countries that belong to the specified continent.

#### `isPartOfRegion(country: Country, region: Region): boolean`
Checks if a country belongs to the specified region.

#### `isValidAlpha2(value: unknown): boolean`
Validates if a value is a valid Alpha-2 country code.

#### `isValidAlpha3(value: unknown): boolean`
Validates if a value is a valid Alpha-3 country code.

#### `isValidCountry(value: unknown): boolean`
Validates if a value is a valid country name.

#### `isValidRegion(value: unknown): boolean`
Validates if a value is a valid region.

#### `isValidContinent(value: unknown): boolean`
Validates if a value is a valid continent.

### Languages

#### Types

#### `Language`
The main language object type:
```typescript
type Language = {
  language: LanguageName;
  native: string;
  iso639_1: ISO639_1;
  iso639_3: ISO639_3;
}
```

#### `LanguageName`
Type for valid language names (e.g., "English", "French", "German")

#### `ISO639_1`
Type for 2-letter language codes (e.g., "en", "fr", "de")

#### `ISO639_3`
Type for 3-letter language codes (e.g., "eng", "fra", "deu")

#### Functions

#### `getLanguageByCode(code: ISO639_1 | ISO639_3): Language`
Finds a language by its ISO 639-1 or ISO 639-3 code.

#### `isValidISO639_1(value: unknown): boolean`
Validates if a value is a valid ISO 639-1 language code.

#### `isValidISO639_3(value: unknown): boolean`
Validates if a value is a valid ISO 639-3 language code.

#### `isValidLanguage(value: unknown): boolean`
Validates if a value is a valid language object.

### Dialects

#### Types

#### `Dialect`
The main dialect object type:
```typescript
type Dialect = {
  dialect: string;
  native: string;
  iso639_1?: ISO639_1;
  iso639_3?: ISO639_3;
  bcp47: BCP47;
}
```

#### `BCP47`
Type for BCP-47 language-region codes (e.g., "en-US", "fr-FR", "de-DE")

#### Functions

#### `getDialectByCode(bcp47: BCP47): Dialect`
Finds a dialect by its BCP-47 code.

#### `getDialectsByCode(code: ISO639_1 | ISO639_3): Dialect[]`
Returns all dialects for a specific language.

#### `isValidBCP47(value: unknown): boolean`
Validates if a value is a valid BCP-47 code.

#### `isValidDialect(value: unknown): boolean`
Validates if a value is a valid dialect object.

### Currencies

#### Types

#### `Currency`
The main currency object type:
```typescript
type Currency = {
  name: CurrencyName;
  symbol?: Symbol;
  iso4217?: ISO4217;
  factionalUnit?: FactionalUnit;
}
```

#### `CurrencyName`
Type for valid currency names (e.g., "United States dollar", "Euro")

#### `Symbol`
Type for currency symbols (e.g., "$", "€", "£")

#### `ISO4217`
Type for 3-letter currency codes (e.g., "USD", "EUR", "GBP")

#### `FactionalUnit`
Type for fractional unit names (e.g., "Cent", "Pence", "Centime")

#### Functions

#### `getCurrencyByISO4217(iso4217: ISO4217): Currency`
Finds a currency by its ISO 4217 code.

#### `getCurrenciesBySymbol(symbol: Symbol): Currency[]`
Returns all currencies that use the specified symbol.

#### `getCurrenciesByName(name: CurrencyName): Currency[]`
Returns all currencies with the specified name.

#### `isValidISO4217(value: unknown): boolean`
Validates if a value is a valid ISO 4217 currency code.

#### `isValidSymbol(value: unknown): boolean`
Validates if a value is a valid currency symbol.

#### `isValidCurrency(value: unknown): boolean`
Validates if a value is a valid currency object.

### Data

#### `countries: Country[]`
Array containing all 249 ISO 3166-1 countries with their complete information including regions and continents.

#### `languages: Language[]`
Array containing all supported languages with their ISO 639-1 and ISO 639-3 codes.

#### `dialects: Dialect[]`
Array containing all supported language dialects with their BCP-47 codes.

#### `currencies: Currency[]`
Array containing all supported currencies with their ISO 4217 codes and symbols.

## ISO Standards

This package implements multiple ISO standards:

### ISO 3166-1 (Countries)
Defines country codes:
- **Alpha-2 codes**: Two-letter country codes (e.g., "US", "CA")
- **Alpha-3 codes**: Three-letter country codes (e.g., "USA", "CAN") 
- **Numeric codes**: Three-digit numeric codes (e.g., "840", "124")

### ISO 639 (Languages)
Defines language codes:
- **ISO 639-1**: Two-letter language codes (e.g., "en", "fr")
- **ISO 639-3**: Three-letter language codes (e.g., "eng", "fra")

### BCP-47 (Dialects)
Defines language-region codes for dialects and regional variants (e.g., "en-US", "fr-FR")

### ISO 4217 (Currencies)
Defines currency codes:
- **Three-letter codes**: Currency identifiers (e.g., "USD", "EUR")
- **Symbols**: Currency symbols (e.g., "$", "€")
- **Fractional units**: Subdivision names (e.g., "Cent", "Pence")

## Regional Classifications

The package includes business-oriented regional classifications:

- **EMEA**: Europe, Middle East, and Africa
- **APAC**: Asia-Pacific
- **AMER**: Americas
- **LATAM**: Latin America
- **NA**: North America
- **SA**: South America
- **MEA**: Middle East and Africa

## Continental Classifications

Geographic continental classifications are also provided:

- **Africa**: African continent
- **Antarctica**: Antarctic continent
- **Asia**: Asian continent
- **Europe**: European continent
- **North America**: North American continent
- **Oceania**: Oceanian continent
- **South America**: South American continent

## Development

### Prerequisites

- Node.js >= 22.0.0
- pnpm >= 10.0.0

### Scripts

```bash
# Build the package
pnpm build

# Development mode with watch
pnpm dev

# Run tests
pnpm test

# Format code
pnpm format

# Lint code
pnpm lint
```

### Testing

The package includes comprehensive tests for all functionality:

```bash
pnpm test
```

## License

MIT © Indy Van Canegem

## Contributing

Contributions are welcome! Please ensure all tests pass and code is properly formatted before submitting a pull request.
