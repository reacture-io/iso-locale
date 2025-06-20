# @reacture-io/iso-locale

A TypeScript library providing ISO standards for handling countries and languages. This package offers comprehensive ISO 3166 country code support with full type safety using Zod validation, including regional and continental classifications.

## Features

- 🌍 **Complete ISO 3166-1 Support**: All official country codes (Alpha-2, Alpha-3, and Numeric)
- 🗺️ **Regional Classifications**: Business regions (EMEA, APAC, AMER, LATAM, NA, SA, MEA)
- 🌎 **Continental Classifications**: Geographic continents (Africa, Antarctica, Asia, Europe, North America, Oceania, South America)
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

### Basic Import

```typescript
import { countries, findCountryByAlpha2, findCountryByAlpha3 } from '@reacture-io/iso-locale/countries';
```

### Finding Countries

```typescript
// Find by Alpha-2 code (2-letter country code)
const usa = findCountryByAlpha2('US');
console.log(usa);
// {
//   name: "United States of America (the)",
//   alpha2: "US",
//   alpha3: "USA",
//   numeric: "840",
//   regions: ["AMER", "NA"],
//   continents: ["North America"]
// }

// Find by Alpha-3 code (3-letter country code)
const canada = findCountryByAlpha3('CAN');
console.log(canada);
// {
//   name: "Canada",
//   alpha2: "CA",
//   alpha3: "CAN",
//   numeric: "124",
//   regions: ["AMER", "NA"],
//   continents: ["North America"]
// }

// Find by numeric code
const germany = findCountryByNumeric('276');
console.log(germany);
// {
//   name: "Germany",
//   alpha2: "DE",
//   alpha3: "DEU",
//   numeric: "276",
//   regions: ["EMEA"],
//   continents: ["Europe"]
// }

// Find by country name
const france = findCountryByName('France');
console.log(france);
// {
//   name: "France",
//   alpha2: "FR",
//   alpha3: "FRA",
//   numeric: "250",
//   regions: ["EMEA"],
//   continents: ["Europe"]
// }
```

### Working with Regions

```typescript
import { getCountriesByRegion, isPartOfRegion } from '@reacture-io/iso-locale/countries';

// Get all countries in a specific region
const emeaCountries = getCountriesByRegion('EMEA');
console.log(emeaCountries.length); // Number of EMEA countries

// Check if a country belongs to a region
const usa = findCountryByAlpha2('US');
if (usa) {
  console.log(isPartOfRegion(usa, 'AMER')); // true
  console.log(isPartOfRegion(usa, 'EMEA')); // false
}
```

### Working with Continents

```typescript
import { getCountriesByContinent } from '@reacture-io/iso-locale/countries';

// Get all countries in a specific continent
const europeanCountries = getCountriesByContinent('Europe');
console.log(europeanCountries.length); // Number of European countries

// Some countries span multiple continents
const russia = findCountryByAlpha2('RU');
console.log(russia?.continents); // ["Asia", "Europe"]
```

### Validation

```typescript
import { isValidAlpha2, isValidAlpha3, isValidCountry, isValidRegion, isValidContinent } from '@reacture-io/iso-locale/countries';

// Validate Alpha-2 codes
console.log(isValidAlpha2('US')); // true
console.log(isValidAlpha2('XX')); // false

// Validate Alpha-3 codes
console.log(isValidAlpha3('USA')); // true
console.log(isValidAlpha3('XXX')); // false

// Validate country names
console.log(isValidCountry('United States of America (the)')); // true
console.log(isValidCountry('Wonderland')); // false

// Validate regions
console.log(isValidRegion('EMEA')); // true
console.log(isValidRegion('INVALID')); // false

// Validate continents
console.log(isValidContinent('Europe')); // true
console.log(isValidContinent('Invalid')); // false
```

### Accessing All Countries

```typescript
import { countries } from '@reacture-io/iso-locale/countries';

// Get all countries
console.log(countries.length); // 249 countries
```

## API Reference

### Types

#### `ISO3166`
The main country object type containing all country information:
```typescript
type ISO3166 = {
  name: Country;
  alpha2: Alpha2;
  alpha3: Alpha3;
  numeric: Numeric;
  regions: Region[];
  continents: Continent[];
}
```

#### `Country`
Type for valid country names (e.g., "United States of America (the)", "Canada")

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

### Functions

#### `findCountryByAlpha2(alpha2: Alpha2): ISO3166 | undefined`
Finds a country by its Alpha-2 code.

#### `findCountryByAlpha3(alpha3: Alpha3): ISO3166 | undefined`
Finds a country by its Alpha-3 code.

#### `findCountryByNumeric(numeric: Numeric): ISO3166 | undefined`
Finds a country by its numeric code.

#### `findCountryByName(name: Country): ISO3166 | undefined`
Finds a country by its official name.

#### `getCountriesByRegion(region: Region): ISO3166[]`
Returns all countries that belong to the specified region.

#### `getCountriesByContinent(continent: Continent): ISO3166[]`
Returns all countries that belong to the specified continent.

#### `isPartOfRegion(country: ISO3166, region: Region): boolean`
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

#### `isValidISO3166(value: unknown): boolean`
Validates if a value is a valid ISO 3166 country object.

### Data

#### `countries: ISO3166[]`
Array containing all 249 ISO 3166-1 countries with their complete information including regions and continents.

## ISO 3166-1 Standard

This package implements the ISO 3166-1 standard which defines:

- **Alpha-2 codes**: Two-letter country codes (e.g., "US", "CA")
- **Alpha-3 codes**: Three-letter country codes (e.g., "USA", "CAN") 
- **Numeric codes**: Three-digit numeric codes (e.g., "840", "124")

The data is sourced from the official ISO 3166-1 standard maintained by the International Organization for Standardization.

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
