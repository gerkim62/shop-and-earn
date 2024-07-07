import FloatingProductsButton from "@/components/small/floating-products-button";
import React from "react";
type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <FloatingProductsButton />
      {children}
    </>
  );
}
