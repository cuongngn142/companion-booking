import { Outlet, NavLink } from 'react-router-dom';

export default function CompanionLayout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/companion">
            Companion Center
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#companionNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="companionNav">
            <div className="navbar-nav ms-auto">
              <NavLink to="/companion" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                <i className="bi bi-grid-1x2 me-1"></i>Tổng quan
              </NavLink>
              <NavLink to="/companion/profile" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                <i className="bi bi-person-circle me-1"></i>Hồ sơ
              </NavLink>
              <NavLink to="/companion/operations" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                <i className="bi bi-calendar-range me-1"></i>Lịch & Dịch vụ
              </NavLink>
              <NavLink to="/companion/bookings" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                <i className="bi bi-bag-check me-1"></i>Đơn hàng
              </NavLink>
              <NavLink to="/companion/finance" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                <i className="bi bi-currency-dollar me-1"></i>Tài chính
              </NavLink>
              <NavLink to="/companion/chat" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                <i className="bi bi-chat-dots me-1"></i>Chat/Call
              </NavLink>
              <NavLink
                to="/companion/notifications"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                <i className="bi bi-bell me-1"></i>Thông báo
              </NavLink>
              <NavLink to="/" className="nav-link text-warning">
                <i className="bi bi-box-arrow-right me-1"></i>Đăng xuất
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      <main className="container py-4">
        <Outlet />
      </main>
    </>
  );
}
