import { useEffect, useState } from 'react';

export default function AdminNotifications() {
  const [notifications, setNotifications] = useState([]);

  // fake fetch
  useEffect(() => {
    setTimeout(() => {
      setNotifications([
        {
          id: 'N1',
          title: 'Có booking mới',
          content: 'User A vừa đặt lịch',
          time: '2 phút trước',
          read: false,
        },
        {
          id: 'N2',
          title: 'Companion đăng ký',
          content: 'Có hồ sơ mới cần duyệt',
          time: '10 phút trước',
          read: false,
        },
        {
          id: 'N3',
          title: 'Thanh toán thành công',
          content: 'Giao dịch #123 hoàn tất',
          time: '1 giờ trước',
          read: true,
        },
      ]);
    }, 1000);
  }, []);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const markOneRead = (id) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)));
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <aside className="bg-dark text-white p-3" style={{ width: 250 }}>
        <h5>Quản trị Companion</h5>

        <div className="nav flex-column">
          <a className="nav-link text-white">Dashboard</a>
          <a className="nav-link text-white">Users</a>
          <a className="nav-link text-white">Moderation</a>
          <a className="nav-link text-white">Transactions</a>
          <a className="nav-link text-white">Tracking</a>
          <a className="nav-link text-white">Disputes</a>
          <a className="nav-link text-white active">Notifications</a>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-grow-1">
        {/* Topbar */}
        <div className="bg-light p-3 d-flex justify-content-between align-items-center">
          <div>
            <h4>Thông báo</h4>
            <small className="text-muted">Cập nhật hệ thống và hoạt động</small>
          </div>

          <div className="d-flex gap-2 align-items-center">
            <span className="badge bg-primary">{unreadCount} chưa đọc</span>

            <button className="btn btn-outline-primary btn-sm" onClick={markAllRead}>
              Đọc tất cả
            </button>

            <button className="btn btn-outline-danger btn-sm">Đăng xuất</button>
          </div>
        </div>

        {/* Content */}
        <div className="p-3">
          <div className="card">
            <div className="card-body p-0">
              {notifications.length === 0 ? (
                <div className="text-center py-5">
                  <div className="spinner-border mb-3"></div>
                  <p className="text-muted">Đang tải thông báo...</p>
                </div>
              ) : (
                notifications.map((n) => (
                  <div
                    key={n.id}
                    className={`p-3 border-bottom ${!n.read ? 'bg-light' : ''}`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => markOneRead(n.id)}
                  >
                    <div className="d-flex justify-content-between">
                      <div>
                        <div className={`fw-${!n.read ? 'bold' : 'normal'}`}>{n.title}</div>
                        <div className="text-muted small">{n.content}</div>
                      </div>

                      <div className="text-end">
                        {!n.read && <span className="badge bg-primary mb-1">new</span>}
                        <div className="text-muted small">{n.time}</div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
