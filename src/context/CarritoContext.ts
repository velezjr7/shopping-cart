import { createContext, useContext } from "react";
import type { CarritoContextProps } from "../interfaces";

export const CarritoContext = createContext<CarritoContextProps | undefined>(
  undefined
);

export const useCarrito = () => {
  const context = useContext(CarritoContext);
  if (!context) {
    throw new Error("useCarrito must be within a CarritoProvider");
  }
  return context;
};
