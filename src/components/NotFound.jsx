import { Link } from "react-router-dom";

 function NotFound() {
  return (
    <main className="container page">
      <h1 className="page-title">Page not found</h1>
      <p className="cart-page__empty">Sorry, we couldn't find that page.</p>
      <Link to="/" className="btn">
        Back to home <span aria-hidden="true">→</span>
      </Link>
    </main>
  );
}
export default NotFound;