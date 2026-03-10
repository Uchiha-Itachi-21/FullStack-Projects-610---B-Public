import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const alreadyAdded = cartItems.some(
    item => item.id === product.id
  );

  return (
    <div style={{ border: "1px solid gray", padding: 10 }}>
      <img src={product.thumbnail} width="120" />
      <h4>{product.title}</h4>
      <p>₹{product.price}</p>

      <button
        disabled={alreadyAdded}
        onClick={() => dispatch(addToCart(product))}
      >
        {alreadyAdded ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}