import { useCarrito } from "../context/CarritoContext";

export const Cart = () => {
  const { carrito, disminuir, eliminar } = useCarrito();

  const total = carrito.reduce((acc, item) => acc + item.precio, 0);

  return (
    <div>
      <h2>Carrito</h2>
      {carrito.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <ul>
          {carrito.map((item) => (
            <li key={item.id}>
              {item.nombre} - ${item.precio} x {item.cantidad}
              <button onClick={() => disminuir(item.id)}>-</button>
              <button onClick={() => eliminar(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total}</h3>
    </div>
  );
};
