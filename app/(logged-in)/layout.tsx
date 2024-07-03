import ProductSearch from "@/components/layout/product-search";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      {children}
    </>
  );
}
