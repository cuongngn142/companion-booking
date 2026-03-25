import { useEffect, useState } from 'react';
import Navbar from "../../components/Navbar";
export default function Home() {
  const [companions, setCompanions] = useState([]);
  const [loading, setLoading] = useState(true);

  // giả lập API
  useEffect(() => {
    setTimeout(() => {
      setCompanions([
        {
          id: 1,
          name: 'Companion A',
          avatar: 'https://via.placeholder.com/300',
          price: 200,
        },
        {
          id: 2,
          name: 'Companion B',
          avatar: 'https://via.placeholder.com/300',
          price: 300,
        },
        {
          id: 3,
          name: 'Companion C',
          avatar: 'https://via.placeholder.com/300',
          price: 250,
        },
      ]);
      setLoading(false);
    }, 1200);
  }, []);

  return (
    <div className="bg-light min-vh-100">
      <Navbar />

      <main className="container py-4">
        {/* Hero */}
        <section className="p-4 p-md-5 mb-4 bg-white rounded shadow-sm">
          <h1 className="display-6 mb-2 fw-bold">
            <i className="bi bi-stars me-2"></i>
            Khu vực khách hàng
          </h1>
          <p className="lead mb-0 text-muted">Tìm companion, đặt lịch, theo dõi lịch hẹn, đánh giá và báo cáo nhanh.</p>
        </section>

        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="h4 mb-0 fw-bold">
            <i className="bi bi-fire text-danger me-2"></i>
            Companion nổi bật
          </h2>

          <a href="/search" className="btn btn-outline-primary btn-sm">
            <i className="bi bi-search me-1"></i>
            Xem tất cả
          </a>
        </div>

        {/* List */}
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary mb-3"></div>
            <p className="text-muted">Đang tải...</p>
          </div>
        ) : (
          <div className="row g-3">
            {companions.map((c) => (
              <div key={c.id} className="col-md-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={c.avatar}
                    className="card-img-top"
                    alt={c.name}
                    style={{ height: 200, objectFit: 'cover' }}
                  />

                  <div className="card-body">
                    <h5 className="fw-bold">{c.name}</h5>

                    <p className="text-muted small mb-2">Giá: {c.price}k / giờ</p>

                    <div className="d-flex gap-2">
                      <button className="btn btn-primary btn-sm w-100">Đặt lịch</button>

                      <button className="btn btn-outline-danger btn-sm">
                        <i className="bi bi-heart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
