import { useEffect, useState } from 'react';
import Navbar from "../../components/Navbar";
export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  // giả lập API
  useEffect(() => {
    setTimeout(() => {
      setNotifications([
        {
          id: 1,
          title: 'Đặt lịch thành công',
          message: 'Bạn đã đặt lịch với Companion A',
          time: '2 phút trước',
          unread: true,
        },
        {
          id: 2,
          title: 'Tin nhắn mới',
          message: 'Companion B đã gửi tin nhắn',
          time: '10 phút trước',
          unread: true,
        },
        {
          id: 3,
          title: 'Hoàn tất lịch hẹn',
          message: 'Bạn đã hoàn tất booking',
          time: '1 giờ trước',
          unread: false,
        },
      ]);
      setLoading(false);
    }, 1200);
  }, []);

  const unreadCount = notifications.filter((n) => n.unread).length;

  const markAllRead = () => {
    const updated = notifications.map((n) => ({ ...n, unread: false }));
    setNotifications(updated);
  };

  const markOneRead = (id) => {
    const updated = notifications.map((n) => (n.id === id ? { ...n, unread: false } : n));
    setNotifications(updated);
  };

  return (
    <div className="bg-light min-vh-100">
      <Navbar />

      <main className="container py-4" style={{ maxWidth: 800 }}>
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="h3 page-title">
            <i className="bi bi-bell-fill ms-3 me-1"></i>
            Thông báo
          </h1>

          <div className="d-flex gap-2 align-items-center">
            <span className="badge bg-primary">{unreadCount} chưa đọc</span>

            <button className="btn btn-outline-primary btn-sm" onClick={markAllRead}>
              Đọc tất cả
            </button>
          </div>
        </div>

        {/* List */}
        <div className="card overflow-hidden">
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary mb-3"></div>
              <p className="text-muted">Đang tải thông báo...</p>
            </div>
          ) : notifications.length === 0 ? (
            <p className="text-center py-5 text-muted">Không có thông báo</p>
          ) : (
            notifications.map((n) => (
              <div
                key={n.id}
                className={`p-3 border-bottom ${n.unread ? 'bg-light' : ''}`}
                style={{ cursor: 'pointer' }}
                onClick={() => markOneRead(n.id)}
              >
                <div className="d-flex justify-content-between">
                  <div>
                    <div className={`fw-semibold ${n.unread ? 'fw-bold' : ''}`}>{n.title}</div>
                    <div className="small text-muted">{n.message}</div>
                  </div>

                  <div className="text-end">
                    <div className="small text-muted">{n.time}</div>
                    {n.unread && (
                      <span
                        className="d-inline-block bg-primary rounded-circle mt-1"
                        style={{ width: 8, height: 8 }}
                      ></span>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
