import { useSelector } from "react-redux";

export default function Header() {
  const items = useSelector(state => state.cart.items);

  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <h2>
      🛒 Product Store | Cart Items: {totalItems}
    </h2>
  );
}