import "./App.css";
import { Cart } from "./components/Cart";
import { Products } from "./components/Products";
import { CarritoProvider } from "./context/CarritoProvider";

function App() {
  return (
    <CarritoProvider>
      <Products />
      <Cart />
    </CarritoProvider>
  );
}

export default App;
