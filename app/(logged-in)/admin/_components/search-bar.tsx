"use client";

import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useLocalStorage } from "usehooks-ts";
import {
    SEARCH_LOCALSTORAGE_KEY
} from "../_constants";
import { Search } from "../_types";

export function SearchBar() {
  const [search, setSearch] = useLocalStorage<Search>(SEARCH_LOCALSTORAGE_KEY, {
    term: "",
    target: "orders",
  });

//   const [searchTarget, setSearchTarget] = useLocalStorage<SearchTarget>(
//     SEARCH_TARGET_LOCALSTORAGE_KEY,
//     search.target
//   );

  return (
    <div className="flex space-x-4 mb-4">
      <div className="flex-1 relative">
        <Input
          type="text"
          placeholder="Search..."
          value={search.term}
          onChange={(e) => {
            setSearch({
              term: e.target.value,
              target: search.target,
            });
          }}
          className="pl-10 border-purple-200 rounded-full text-purple-700"
        />
        <SearchIcon
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400"
          size={18}
        />
      </div>
    </div>
  );
}
