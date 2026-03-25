import { useEffect, useState } from 'react';
import Navbar from "../../components/Navbar";
export default function Appointments() {
  const [loading, setLoading] = useState(true);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // giả lập fetch API
    setTimeout(() => {
      setAppointments([]); // sau này thay bằng API thật
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="bg-light min-vh-100">
      <Navbar />

      <main className="container py-4">
        <h1 className="h3 page-title mb-3">
          <i className="bi bi-calendar-event ms-3 me-1"></i>
          Quản lý lịch hẹn
        </h1>

        <div className="alert alert-info d-flex align-items-start gap-2">
          <i className="bi bi-info-circle-fill mt-1"></i>
          <div>
            <strong>Chính sách hủy/hoàn:</strong> trước 24h hoàn 100% cọc, từ 6h-24h hoàn 50%, dưới 6h không hoàn.
          </div>
        </div>

        <div id="appointment-list">
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary mb-3" role="status"></div>
              <p className="text-muted mb-0">Đang tải danh sách lịch hẹn...</p>
            </div>
          ) : appointments.length === 0 ? (
            <p className="text-center text-muted">Không có lịch hẹn nào</p>
          ) : (
            appointments.map((item) => <div key={item.id}>{/* render item */}</div>)
          )}
        </div>
      </main>
    </div>
  );
}
