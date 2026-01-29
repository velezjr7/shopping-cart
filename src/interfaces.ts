export interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

export interface CarritoContextProps {
  carrito: ItemCarrito[];
  agregar: (producto: Producto) => void;
  disminuir: (id: number) => void;
  eliminar: (id: number) => void;
}

export interface ItemCarrito extends Producto {
  cantidad: number;
}
