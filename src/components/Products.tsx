import { useCarrito } from "../context/CarritoContext";

const productos = [
  { id: 1, nombre: "Laptop", precio: 1000 },
  { id: 2, nombre: "Mouse", precio: 25 },
  { id: 3, nombre: "Teclado", precio: 50 },
];

export const Products = () => {
  const { agregar } = useCarrito();
  return (
    <div>
      <h2>Productos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - ${producto.precio}
            <button onClick={() => agregar(producto)}>
              Agregar al carrito
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
