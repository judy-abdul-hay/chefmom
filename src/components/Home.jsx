import { Link } from "react-router-dom";
import DishCard from "../components/Dishcard.jsx";
import { menuItems } from "../data/MenuData.js";

// Small olive sprig used on both sides of the eyebrow text
function Sprig({ flip = false }) {
  return (
    <svg
      className={"sprig" + (flip ? " sprig--flip" : "")}
      viewBox="0 0 44 18"
      aria-hidden="true"
    >
      <path d="M2 13 Q20 12 42 5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M12 12.5 q1 -8 8 -9 q0 7 -8 9z" fill="currentColor" />
      <path d="M18 11.5 q6 4 11 1 q-5 -5 -11 -1z" fill="currentColor" />
      <path d="M26 9 q2 -7 9 -7 q-1 6 -9 7z" fill="currentColor" />
      <path d="M8 13 q4 4 9 2 q-4 -4 -9 -2z" fill="currentColor" />
    </svg>
  );
}

export default function Home() {
  const featured = menuItems.slice(0, 4);

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div
          className="hero__media"
          role="img"
          aria-label="A table of Lebanese dishes: tabbouleh, kibbeh, sambousek, grape leaves, shish barak and cheesecake"
        />

        <div className="container hero__inner">
          <div className="hero__text">
            <p className="hero__eyebrow">
              <Sprig />
              Authentic Lebanese Cuisine
              <Sprig flip />
            </p>

            <h1 className="hero__title">
              A Taste of Home,
              <br />
              A Touch of Lebanon
            </h1>

            {/* hand-drawn underline with a heart */}
            <svg className="hero__swash" viewBox="0 0 240 40" aria-hidden="true">
              <path
                d="M4 30 C50 22, 120 34, 196 27 C204 26, 210 25, 214 24"
                fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"
              />
              <path
                d="M214 24 C206 19 200 15 200 10.5 C200 7 202.5 5 205.5 5 C208.5 5 211.5 7 214 10 C216.5 7 219.5 5 222.5 5 C225.5 5 228 7 228 10.5 C228 15 222 19 214 24 Z"
                fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round"
              />
            </svg>

            <p className="hero__subtitle">
              Homemade Lebanese favorites,
              <br />
              crafted with care and served with love.
            </p>

            <Link to="/menu" className="btn btn--hero">
              Discover Our Kitchen <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED DISHES */}
      <section className="featured container">
        <div className="featured__head">
          <h2 className="section-title">From our kitchen</h2>
          <Link to="/menu" className="dish__link">See the full menu</Link>
        </div>
        <div className="featured__grid">
          {featured.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      </section>
    </main>
  );
}
