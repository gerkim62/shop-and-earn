type Search = {
  term: string;
  target: SearchTarget;
};

type SearchTarget = "orders" | "products" | "users";

export type { Search, SearchTarget };
