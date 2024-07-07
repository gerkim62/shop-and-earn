"use client";

import SubmitButton from "@/components/small/submit-button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useLocalStorage } from "usehooks-ts";
import {
  SEARCH_LOCALSTORAGE_KEY,
  SEARCH_TARGET_LOCALSTORAGE_KEY,
} from "../_constants";
import { Search, SearchTarget } from "../_types";
import executeSearch from "../_actions/search";

export function SearchBar() {
  const [search, setSearch] = useLocalStorage<Search>(SEARCH_LOCALSTORAGE_KEY, {
    term: "",
    target: "orders",
  });

  const [searchTarget] = useLocalStorage<SearchTarget>(
    SEARCH_TARGET_LOCALSTORAGE_KEY,
    search.target
  );

  return (
    <form action={executeSearch} className={`flex333 mb-4 hidden`}>
      <div className="relative flex-grow">
        <input type="hidden" name="search_target" value={searchTarget} />
        <Input
          name="search_term"
          autoFocus
          disabled={searchTarget === "orders"}
          type="text"
          placeholder={`Search ${searchTarget}...`}
          value={search.term}
          onChange={(e) => setSearch({ ...search, term: e.target.value })}
          className="pl-10 pr-4 py-2 w-full border-purple-200 border-r-0 rounded-l-full focus:ring-purple-300 focus:border-purple-300 text-purple-700"
        />
        <SearchIcon
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400"
          size={18}
        />
      </div>
      <SubmitButton
        disabled={searchTarget === "orders" || search.term.trim() === ""}
        type="submit"
        className="bg-purple-600 hover:bg-purple-700 text-white rounded-r-full border-l-0 px-4 py-2 focus:ring-purple-300 focus:border-purple-300"
      >
        Search
      </SubmitButton>
    </form>
  );
}
