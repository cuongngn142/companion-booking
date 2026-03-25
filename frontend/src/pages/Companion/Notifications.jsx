import { useEffect, useState } from 'react';

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);

  // giả lập load dữ liệu
  useEffect(() => {
    setTimeout(() => {
      setNotifications([
        {
          id: 1,
          title: 'Bạn có booking mới',
          content: 'Khách hàng A vừa đặt lịch với bạn',
          time: '5 phút trước',
          read: false,
          type: 'booking',
        },
        {
          id: 2,
          title: 'Booking đã hoàn tất',
          content: 'Bạn vừa hoàn thành một đơn',
          time: '1 giờ trước',
          read: true,
          type: 'success',
        },
      ]);
    }, 500);
  }, []);

  const unreadCount = notifications.filter((n) => !n.read).length;

  // mark 1 notification
  const markAsRead = (id) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
  };

  // mark all
  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const getIcon = (type) => {
    switch (type) {
      case 'booking':
        return 'bi-bag-check text-primary';
      case 'success':
        return 'bi-check-circle text-success';
      default:
        return 'bi-bell';
    }
  };

  return (
    <div className="container py-4" style={{ maxWidth: 800 }}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="h3 fw-bold">Thông báo</h1>
          <p className="text-muted mb-0">Cập nhật mới nhất về booking và dịch vụ</p>
        </div>

        <div className="d-flex gap-2 align-items-center">
          <span className="badge bg-primary">{unreadCount} chưa đọc</span>

          <button className="btn btn-outline-primary btn-sm" onClick={markAllRead}>
            Đọc tất cả
          </button>
        </div>
      </div>

      {/* List */}
      <div className="card overflow-hidden">
        {notifications.length === 0 ? (
          <div className="text-center py-5">
            <div className="spinner-border mb-3"></div>
            <p className="text-muted">Đang tải...</p>
          </div>
        ) : (
          notifications.map((n) => (
            <div
              key={n.id}
              onClick={() => markAsRead(n.id)}
              className={`d-flex gap-3 align-items-start p-3 border-bottom ${!n.read ? 'bg-light' : ''}`}
              style={{ cursor: 'pointer' }}
            >
              {/* icon */}
              <div>
                <i className={`bi ${getIcon(n.type)}`} />
              </div>

              {/* content */}
              <div className="flex-grow-1">
                <div className="d-flex justify-content-between">
                  <strong>{n.title}</strong>
                  <span className="text-muted small">{n.time}</span>
                </div>
                <div className="text-muted small">{n.content}</div>
              </div>

              {/* dot */}
              {!n.read && (
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#8b5cf6',
                  }}
                />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
