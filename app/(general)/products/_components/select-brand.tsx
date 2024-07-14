"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

type Props = {
  brands: string[];
  selectedBrand: string;
};

export default function SelectBrand({ brands, selectedBrand }: Props) {
  function handleChange() {
    const form = document.querySelector("form");
    if (form) {
      form.requestSubmit();
    } else toast.info("Click 'Search Products' to apply filter...");
  }
  return (
    <div className="w-full sm:w-1/4">
      <Select
        onValueChange={handleChange}
        name="brand"
        defaultValue={selectedBrand || ""}
      >
        <SelectTrigger className="w-full rounded-full sm:rounded-r-none">
          <SelectValue placeholder="All Brands" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="ALL">All Brands</SelectItem>
          {brands.map((b) => (
            <SelectItem key={b} value={b}>
              {b.charAt(0).toUpperCase() + b.slice(1)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
