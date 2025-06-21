import { describe, expect, it } from "vitest";
import { iso639 } from "../iso-639";

describe("ISO 639", () => {
  it("should not be a valid ISO 639 code => us is not valid", () => {
    const issues = iso639.safeParse({
      language: "English",
      iso639_1: "us",
      bcp47: "en-US",
      native: "American English",
    }).error?.issues;

    expect(issues).toHaveLength(2);
    expect(issues?.[0].message).toBe("Invalid input");
    expect(issues?.[0].path).toEqual(["iso639_1"]);
  });
});
