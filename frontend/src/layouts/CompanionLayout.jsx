import { Outlet, Link } from 'react-router-dom';

export default function CompanionLayout() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/companion">
            Companion Center
          </Link>

          <div className="d-flex gap-3">
            <Link to="/companion" className="text-white">
              Dashboard
            </Link>
            <Link to="/companion/bookings" className="text-white">
              Bookings
            </Link>
            <Link to="/companion/chat" className="text-white">
              Chat
            </Link>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}
