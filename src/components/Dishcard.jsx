import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

 function DishCard({ dish }) {
  const { addToCart } = useCart();

  return (
    <article className="dish">
      <img src={dish.img} alt={dish.name} className="dish__img" loading="lazy" />
      <div className="dish__body">
        <h3 className="dish__name">{dish.name}</h3>
        <p className="dish__desc">{dish.desc}</p>
        <div className="dish__row">
          <span className="dish__price">${dish.price}</span>
          <Link to={`/menu/${dish.id}`} className="dish__link">View dish</Link>
        </div>
        <button className="btn btn--small" onClick={() => addToCart(dish)}>
          Add to cart
        </button>
      </div>
    </article>
  );
}
export default DishCard;