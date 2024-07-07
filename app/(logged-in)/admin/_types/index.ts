type Search = {
  term: string;
  target: SearchTarget;
};

type SearchTarget = "orders" | "products" | "users";

type Pagination = {
  currentPage: number;
  totalPages: number;
};

export type { Search, SearchTarget, Pagination };
