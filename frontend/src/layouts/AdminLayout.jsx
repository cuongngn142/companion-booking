import { Outlet, NavLink } from 'react-router-dom';

export default function AdminLayout() {
  return (
    <div className="admin-layout d-flex">
      {/* SIDEBAR */}
      <aside className="admin-sidebar p-3 bg-dark text-white" style={{ width: '250px', minHeight: '100vh' }}>
        <div className="sidebar-brand fw-bold mb-3">Quản trị Companion</div>

        <nav className="nav flex-column gap-1">
          <NavLink to="/admin" end className="nav-link text-white">
            <i className="bi bi-grid-1x2-fill me-2"></i>Bảng điều khiển
          </NavLink>

          <NavLink to="/admin/users" className="nav-link text-white">
            <i className="bi bi-people-fill me-2"></i>Người dùng
          </NavLink>

          <NavLink to="/admin/moderation" className="nav-link text-white">
            <i className="bi bi-shield-check me-2"></i>Kiểm duyệt
          </NavLink>

          <NavLink to="/admin/transactions" className="nav-link text-white">
            <i className="bi bi-cash-stack me-2"></i>Giao dịch
          </NavLink>

          <NavLink to="/admin/tracking" className="nav-link text-white">
            <i className="bi bi-geo-alt-fill me-2"></i>Tracking
          </NavLink>

          <NavLink to="/admin/disputes" className="nav-link text-white">
            <i className="bi bi-flag-fill me-2"></i>Tranh chấp
          </NavLink>

          <NavLink to="/admin/notifications" className="nav-link text-white">
            <i className="bi bi-bell-fill me-2"></i>Thông báo
          </NavLink>
        </nav>
      </aside>

      {/* MAIN */}
      <div className="admin-main flex-grow-1 d-flex flex-column">
        {/* TOPBAR */}
        <header className="admin-topbar d-flex justify-content-between align-items-center px-4 py-2 bg-dark text-white">
          <div>
            <h5 className="mb-0">Admin Panel</h5>
            <small className="text-muted">Quản trị hệ thống</small>
          </div>

          <button className="btn btn-outline-light btn-sm">
            <i className="bi bi-box-arrow-right me-1"></i>Đăng xuất
          </button>
        </header>

        {/* CONTENT */}
        <main className="admin-content p-4 bg-light flex-grow-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
