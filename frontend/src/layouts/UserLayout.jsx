// src/layouts/UserLayout.jsx
import { Outlet } from 'react-router-dom';

export default function UserLayout() {
  return (
    <>
      {/* Header */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand">Companion</span>
        </div>
      </nav>

      {/* Content */}
      <div className="container py-3">
        <Outlet />
      </div>
    </>
  );
}
