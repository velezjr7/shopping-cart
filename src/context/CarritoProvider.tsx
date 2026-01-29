import { useState, type ReactNode } from "react";
import { CarritoContext } from "./CarritoContext";
import type { ItemCarrito, Producto } from "../interfaces";

interface Props {
  children: ReactNode;
}

export const CarritoProvider = ({ children }: Props) => {
  const [carrito, setCarrito] = useState<ItemCarrito[]>([]);

  const agregar = (producto: Producto) => {
    setCarrito((prev) =>
      prev.some((p) => p.id === producto.id)
        ? prev.map((p) =>
            p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
          )
        : [...prev, { ...producto, cantidad: 1 }]
    );
  };

  const disminuir = (id: number) => {
    setCarrito((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, cantidad: p.cantidad - 1 } : p))
        .filter((p) => p.cantidad > 0)
    );
  };

  const eliminar = (id: number) => {
    setCarrito((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregar, disminuir, eliminar }}>
      {children}
    </CarritoContext.Provider>
  );
};
