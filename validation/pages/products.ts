import { z } from "zod";

const ProductsPageSearchParamsSchema = z.object({
  page: z.coerce.number().int().positive().catch(1),
  search: z.string().default("").catch(""),
  brand: z.string().default("").catch(""),
});

export default ProductsPageSearchParamsSchema;
