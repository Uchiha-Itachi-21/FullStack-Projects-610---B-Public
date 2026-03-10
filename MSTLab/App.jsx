import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartPanel from "./components/CartPanel";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <Header />
      <ProductList />
      <CartPanel />
    </div>
  );
}