import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="wrap">
      <h1 className="page-title">This page doesn't exist</h1>
      <p className="page-intro">The link may be mistyped. Head back home to keep exploring.</p>
      <Link className="btn primary" to="/">Go to home</Link>
    </div>
  );
}
