import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { menuItems } from "../data/MenuData.js";

// Dynamic page: the content depends on the :id in the URL (/menu/3)
 function DishDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const dish = menuItems.find((d) => d.id === Number(id));

  if (!dish) {
    return (
      <main className="container page">
        <h1 className="page-title">Dish not found</h1>
        <p>We could not find this dish.</p>
        <Link to="/menu" className="dish__link">Back to the menu</Link>
      </main>
    );
  }

  return (
    <main className="container page">
      <Link to="/menu" className="dish__link">← Back to the menu</Link>

      <div className="details">
        <img src={dish.img} alt={dish.name} className="details__img" />
        <div>
          <p className="details__eyebrow">{dish.category}</p>
          <h1 className="page-title">{dish.name}</h1>
          <p className="details__desc">{dish.desc}</p>

          <h2 className="details__sub">Ingredients</h2>
          <ul className="details__list">
            {dish.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>

          <p className="details__price">${dish.price}</p>
          <button className="btn" onClick={() => addToCart(dish)}>
            Add to cart
          </button>
        </div>
      </div>
    </main>
  );
}
export default DishDetails;