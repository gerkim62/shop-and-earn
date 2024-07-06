"use client";

import React, { createContext } from "react";

type CartContextType = {
  cartProductIds: number[];
  setCartProductIds: React.Dispatch<React.SetStateAction<number[]>>;
} | null;

const CartContext = createContext<CartContextType>(null);

type Props = {};

export function CartProvider({ children }: React.PropsWithChildren<Props>) {
  const [cartProductIds, setCartProductIds] = React.useState<number[]>([]);

  return (
    <CartContext.Provider value={{ cartProductIds, setCartProductIds }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
