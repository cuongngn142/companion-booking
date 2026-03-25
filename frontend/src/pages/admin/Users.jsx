import { useEffect, useState } from 'react';

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [companions, setCompanions] = useState([]);
  const [search, setSearch] = useState('');

  // fake data
  useEffect(() => {
    setUsers([
      {
        id: 'U001',
        username: 'user1',
        email: 'user1@gmail.com',
        role: 'USER',
        status: 'ACTIVE',
      },
      {
        id: 'U002',
        username: 'admin',
        email: 'admin@gmail.com',
        role: 'ADMIN',
        status: 'ACTIVE',
      },
      {
        id: 'U003',
        username: 'user2',
        email: 'user2@gmail.com',
        role: 'USER',
        status: 'BANNED',
      },
    ]);

    setCompanions([
      {
        id: 'C001',
        user: 'user1',
        status: 'APPROVED',
        flag: 0,
        bio: 'Thân thiện',
      },
      {
        id: 'C002',
        user: 'user2',
        status: 'PENDING',
        flag: 2,
        bio: 'Thích chơi game',
      },
    ]);
  }, []);

  const handleWarn = (id) => {
    alert('Cảnh cáo user ' + id);
  };

  const handleBan = (id) => {
    setUsers(users.map((u) => (u.id === id ? { ...u, status: 'BANNED' } : u)));
  };

  const handleReset = (id) => {
    setUsers(users.map((u) => (u.id === id ? { ...u, status: 'ACTIVE' } : u)));
  };

  const filteredUsers = users.filter(
    (u) =>
      u.username.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <aside className="bg-dark text-white p-3" style={{ width: 250 }}>
        <h5>Quản trị Companion</h5>

        <div className="nav flex-column">
          <a className="nav-link text-white">Dashboard</a>
          <a className="nav-link text-white active">Users</a>
          <a className="nav-link text-white">Moderation</a>
          <a className="nav-link text-white">Transactions</a>
          <a className="nav-link text-white">Tracking</a>
          <a className="nav-link text-white">Disputes</a>
          <a className="nav-link text-white">Notifications</a>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-grow-1">
        {/* Topbar */}
        <div className="bg-light p-3 d-flex justify-content-between">
          <div>
            <h4>Quản lý người dùng</h4>
            <small className="text-muted">Xem và quản lý tài khoản</small>
          </div>

          <button className="btn btn-outline-danger btn-sm">Đăng xuất</button>
        </div>

        {/* Content */}
        <div className="p-3">
          {/* USERS */}
          <div className="card mb-3">
            <div className="card-header d-flex justify-content-between">
              <span>Danh sách người dùng</span>
              <button className="btn btn-sm btn-primary">Reload</button>
            </div>

            <div className="card-body">
              {/* Search */}
              <div className="input-group mb-3">
                <input
                  className="form-control"
                  placeholder="Tên hoặc email..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button className="btn btn-outline-primary">Tìm</button>
              </div>

              {/* Table */}
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {filteredUsers.map((u) => (
                    <tr key={u.id}>
                      <td>{u.id}</td>
                      <td>{u.username}</td>
                      <td>{u.email}</td>
                      <td>{u.role}</td>
                      <td>
                        <span className={`badge ${u.status === 'ACTIVE' ? 'bg-success' : 'bg-danger'}`}>
                          {u.status}
                        </span>
                      </td>

                      <td>
                        <button className="btn btn-warning btn-sm me-2" onClick={() => handleWarn(u.id)}>
                          Cảnh cáo
                        </button>

                        <button className="btn btn-danger btn-sm me-2" onClick={() => handleBan(u.id)}>
                          Khóa
                        </button>

                        <button className="btn btn-success btn-sm" onClick={() => handleReset(u.id)}>
                          Reset
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredUsers.length === 0 && <div className="text-center text-muted">Không có dữ liệu</div>}
            </div>
          </div>

          {/* COMPANIONS */}
          <div className="card">
            <div className="card-header">Danh sách Companion</div>

            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>User</th>
                    <th>Status</th>
                    <th>Flag</th>
                    <th>Bio</th>
                  </tr>
                </thead>

                <tbody>
                  {companions.map((c) => (
                    <tr key={c.id}>
                      <td>{c.id}</td>
                      <td>{c.user}</td>
                      <td>
                        <span className="badge bg-info">{c.status}</span>
                      </td>
                      <td>
                        <span className="badge bg-warning">{c.flag}</span>
                      </td>
                      <td>{c.bio}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {companions.length === 0 && <div className="text-center text-muted">Không có dữ liệu</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
