import { Outlet } from 'react-router-dom';

export default function AdminLayout() {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">Sidebar Admin</aside>

      <div className="admin-main">
        <header className="admin-topbar">Topbar Admin</header>

        <main className="admin-content">
          <Outlet /> {/* QUAN TRỌNG */}
        </main>
      </div>
    </div>
  );
}
