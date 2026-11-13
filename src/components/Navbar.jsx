import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

 function Navbar() {
  const [open, setOpen] = useState(false);
  const { cartCount } = useCart();
  const { pathname } = useLocation();
  const overlay = pathname === "/"; // sits on top of the hero photo

  return (
    <header className={"navbar" + (overlay ? " navbar--overlay" : "")}>
      <div className="container navbar__inner">
        <Link to="/" className="logo" aria-label="Chef Mom, home" onClick={() => setOpen(false)}>
          <span className="logo__text">
            Chef<span className="logo__heart" aria-hidden="true">♥</span>Mom
          </span>
          {/* little whisk under the name */}
          <svg className="logo__whisk" viewBox="0 0 120 20" aria-hidden="true">
            <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              <path d="M62 10 C44 -1, 12 -1, 4 10 C12 21, 44 21, 62 10" />
              <path d="M62 10 C46 3, 20 3, 12 10 C20 17, 46 17, 62 10" />
              <path d="M62 10 C50 6, 30 6, 22 10 C30 14, 50 14, 62 10" />
            </g>
            <rect x="62" y="7.5" width="7" height="5" rx="1.5" fill="currentColor" />
            <rect x="69" y="6" width="47" height="8" rx="4" fill="var(--teal)" />
          </svg>
        </Link>

        <nav className={`navbar__links ${open ? "is-open" : ""}`} aria-label="Main">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                "navbar__link" + (isActive ? " navbar__link--active" : "")
              }
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar__actions">
          <Link
            to="/cart"
            className="cart"
            aria-label={`Cart, ${cartCount} ${cartCount === 1 ? "item" : "items"}`}
            onClick={() => setOpen(false)}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"
                 stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="20" r="1.4" />
              <circle cx="18" cy="20" r="1.4" />
              <path d="M2 3h3l2.7 11.5a1 1 0 0 0 1 .8h8.6a1 1 0 0 0 1-.8L20 7H6" />
            </svg>
            <span className="cart__badge">{cartCount}</span>
          </Link>

          <button
            className="burger"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
