import { useState } from "react";
import { Link } from "react-router-dom";
import DishCard from "./Dishcard.jsx";
import { menuItems, categories } from "../data/MenuData.js";

function Menu() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const show = menuItems.filter(
    (dish) =>
      (category === "All" || dish.category === category) &&
      dish.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <main className="container page">
      <h1 className="page-title"> Our Menu</h1>
      <div className="filters">
        <input
          type="search"
          className="input"
          placeholder="Search for a dishe"
          aria-label="Search for a dishe"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="chips">
          {categories.map((c) => (
            <button
              key={c}
              className={"chip" + (category === c ? " chip--active" : "")}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      {show.length === 0 ? (
        <p>No dishes found.Try another name or category.</p>
      ) : (
        <div className="featured__grid">
          {show.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      )}
    </main>
  );
}
export default Menu;
