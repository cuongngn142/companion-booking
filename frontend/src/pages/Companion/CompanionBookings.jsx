import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function CompanionBookings() {
  const [workflow, setWorkflow] = useState({
    pending: 0,
    upcoming: 0,
    running: 0,
    done: 0,
  });

  const [bookings, setBookings] = useState([]);
  const [consultations, setConsultations] = useState([]);

  useEffect(() => {
    // mock API (sau thay bằng fetch thật)
    setWorkflow({
      pending: 2,
      upcoming: 3,
      running: 1,
      done: 5,
    });

    setBookings([
      {
        id: 1,
        customer: 'Nguyễn A',
        time: '2026-03-26 10:00',
        duration: 60,
        status: 'PENDING',
      },
    ]);

    setConsultations([
      {
        id: 1,
        customer: 'Trần B',
        question: 'Có hỗ trợ đi sự kiện không?',
        answer: '',
        status: 'WAITING',
      },
    ]);
  }, []);

  return (
    <div className="bg-light min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/companion">
            <i className="bi bi-stars me-2"></i>Companion Center
          </Link>

          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/companion">
              Tổng quan
            </Link>
            <Link className="nav-link" to="/companion/profile">
              Hồ sơ
            </Link>
            <Link className="nav-link" to="/companion/operations">
              Lịch & Dịch vụ
            </Link>
            <Link className="nav-link active" to="/companion/bookings">
              Đơn hàng
            </Link>
            <Link className="nav-link" to="/companion/finance">
              Tài chính
            </Link>
            <Link className="nav-link" to="/companion/chat">
              Chat/Call
            </Link>
            <Link className="nav-link" to="/companion/notifications">
              Thông báo
            </Link>
            <button className="nav-link text-warning border-0 bg-transparent">Đăng xuất</button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="container py-4">
        <div className="d-flex justify-content-between mb-4">
          <div>
            <h1 className="h3 fw-bold">
              <i className="bi bi-bag-check me-2"></i>
              Đơn hàng & Tư vấn
            </h1>
            <p className="text-muted">Quản lý booking và phản hồi tư vấn</p>
          </div>
        </div>

        {/* Workflow */}
        <section className="card shadow-sm mb-4">
          <div className="card-body p-4">
            <h2 className="h5 mb-3">Workflow đơn hàng</h2>
            <div className="row g-3">
              <StatBox label="Chờ xử lý" value={workflow.pending} />
              <StatBox label="Sắp diễn ra" value={workflow.upcoming} />
              <StatBox label="Đang chạy" value={workflow.running} />
              <StatBox label="Đã xong" value={workflow.done} />
            </div>
          </div>
        </section>

        {/* Booking Table */}
        <section className="card shadow-sm mb-4">
          <div className="card-body p-4">
            <h2 className="h5 mb-3">Danh sách booking</h2>

            <div className="table-responsive">
              <table className="table table-striped align-middle">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Khách hàng</th>
                    <th>Thời gian</th>
                    <th>Thời lượng</th>
                    <th>Trạng thái</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((b) => (
                    <tr key={b.id}>
                      <td>{b.id}</td>
                      <td>{b.customer}</td>
                      <td>{b.time}</td>
                      <td>{b.duration} phút</td>
                      <td>
                        <span className="badge bg-warning">{b.status}</span>
                      </td>
                      <td>
                        <button className="btn btn-sm btn-outline-primary">Chat</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="small text-muted mt-2">Mẹo: dùng Chat để trao đổi nhanh với khách</div>
          </div>
        </section>

        {/* Consultation */}
        <section className="card shadow-sm">
          <div className="card-body p-4">
            <h2 className="h5 mb-3">Tư vấn từ khách hàng</h2>

            <div className="table-responsive">
              <table className="table table-striped align-middle">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Khách</th>
                    <th>Câu hỏi</th>
                    <th>Trả lời</th>
                    <th>Trạng thái</th>
                  </tr>
                </thead>
                <tbody>
                  {consultations.map((c) => (
                    <tr key={c.id}>
                      <td>{c.id}</td>
                      <td>{c.customer}</td>
                      <td>{c.question}</td>
                      <td>{c.answer || <button className="btn btn-sm btn-outline-success">Trả lời</button>}</td>
                      <td>
                        <span className="badge bg-secondary">{c.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

/* Component nhỏ tái sử dụng */
function StatBox({ label, value }) {
  return (
    <div className="col-md-3">
      <div className="p-3 border rounded text-center bg-white">
        <div className="text-muted small">{label}</div>
        <div className="h5 mb-0">{value}</div>
      </div>
    </div>
  );
}
