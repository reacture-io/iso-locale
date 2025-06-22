import { z } from "zod";

export const bcp47 = z
  .string()
  .regex(
    /^[a-zA-Z]{2,3}(-[a-zA-Z]{4})?(-[a-zA-Z]{2}|[0-9]{3})?(-[a-zA-Z0-9]{5,8})*(-[a-zA-Z0-9](-[a-zA-Z0-9]{2,8})+)*$/
  );

export type BCP47 = z.infer<typeof bcp47>;
