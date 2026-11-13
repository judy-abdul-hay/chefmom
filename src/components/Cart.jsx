import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

 function Cart() {
  const { items, updateQty, removeFromCart, clearCart, cartTotal } = useCart();

  if (items.length === 0) {
    return (
      <main className="container page">
        <h1 className="page-title">Your cart</h1>
        <p className="cart-page__empty">Your cart is empty.</p>
        <Link to="/menu" className="btn">
          Browse the menu <span aria-hidden="true">→</span>
        </Link>
      </main>
    );
  }

  return (
    <main className="container page">
      <h1 className="page-title">Your cart</h1>

      <ul className="cart-list">
        {items.map((item) => (
          <li key={item.id} className="cart-item">
            {item.img && <img src={item.img} alt="" className="cart-item__img" />}
            <div className="cart-item__info">
              <Link to={`/menu/${item.id}`} className="cart-item__name">{item.name}</Link>
              <span className="cart-item__price">${item.price} each</span>
            </div>

            <div className="qty" role="group" aria-label={`Quantity of ${item.name}`}>
              <button
                className="qty__btn"
                aria-label={`Remove one ${item.name}`}
                onClick={() => updateQty(item.id, item.qty - 1)}
              >
                −
              </button>
              <span className="qty__value" aria-live="polite">{item.qty}</span>
              <button
                className="qty__btn"
                aria-label={`Add one ${item.name}`}
                onClick={() => updateQty(item.id, item.qty + 1)}
              >
                +
              </button>
            </div>

            <span className="cart-item__subtotal">${item.qty * item.price}</span>

            <button
              className="cart-item__remove"
              aria-label={`Remove ${item.name} from cart`}
              onClick={() => removeFromCart(item.id)}
            >
              ×
            </button>
          </li>
        ))}
      </ul>

      <div className="cart-summary">
        <button className="cart-summary__clear" onClick={clearCart}>Clear cart</button>
        <p className="cart-summary__total">
          Total <strong>${cartTotal}</strong>
        </p>
      </div>
    </main>
  );
}
export default Cart; 
