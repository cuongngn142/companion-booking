export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom">
      <div className="container">
        <a className="navbar-brand fw-bold" href="/">
          <i className="bi bi-heart-pulse-fill me-2"></i>
          Companion Rental
        </a>

        <div className="app-nav d-flex align-items-center flex-wrap gap-1">{/* sau này render menu bằng state */}</div>
      </div>
    </nav>
  );
}
