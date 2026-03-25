import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Chart from 'chart.js/auto';

export default function Dashboard() {
  const bookingChartRef = useRef(null);
  const statusChartRef = useRef(null);

  useEffect(() => {
    // Booking chart
    const bookingChart = new Chart(bookingChartRef.current, {
      type: 'line',
      data: {
        labels: ['T1', 'T2', 'T3', 'T4', 'T5'],
        datasets: [
          {
            label: 'Booking',
            data: [5, 10, 7, 15, 20],
          },
        ],
      },
    });

    // Status chart
    const statusChart = new Chart(statusChartRef.current, {
      type: 'doughnut',
      data: {
        labels: ['Pending', 'Accepted', 'Completed'],
        datasets: [
          {
            data: [5, 8, 12],
          },
        ],
      },
    });

    return () => {
      bookingChart.destroy();
      statusChart.destroy();
    };
  }, []);

  return (
    <div className="container py-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="h3 fw-bold">Tổng quan Companion</h1>
          <p className="text-muted mb-0">Quản lý dịch vụ và theo dõi hiệu suất</p>
        </div>
        <span className="badge text-bg-primary">User</span>
      </div>

      {/* Quick Nav */}
      <section className="card shadow-sm mb-4">
        <div className="card-body p-4">
          <h2 className="h5">Điều hướng nhanh</h2>

          <div className="row g-3 mt-2">
            <div className="col-md-3">
              <Link to="/companion/profile" className="btn btn-outline-primary w-100">
                Hồ sơ
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/companion/bookings" className="btn btn-outline-primary w-100">
                Đơn hàng
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/companion/chat" className="btn btn-outline-success w-100">
                Chat
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="card shadow-sm mb-4">
        <div className="card-body p-4">
          <h2 className="h5">Workflow đơn hàng</h2>

          <div className="row g-3 mt-2 text-center">
            <div className="col-md-3">
              <div className="border p-3 rounded">Pending: 0</div>
            </div>
            <div className="col-md-3">
              <div className="border p-3 rounded">Upcoming: 0</div>
            </div>
            <div className="col-md-3">
              <div className="border p-3 rounded">Running: 0</div>
            </div>
            <div className="col-md-3">
              <div className="border p-3 rounded">Done: 0</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="card shadow-sm mb-4">
        <div className="card-body p-4">
          <h2 className="h5">Thống kê</h2>

          <div className="row g-3 mt-2 text-center">
            <div className="col-md-4">
              <div className="border p-3 rounded">Income: 0</div>
            </div>
            <div className="col-md-4">
              <div className="border p-3 rounded">Available: 0</div>
            </div>
            <div className="col-md-4">
              <div className="border p-3 rounded">Hold: 0</div>
            </div>
          </div>
        </div>
      </section>

      {/* Charts */}
      <section className="card shadow-sm">
        <div className="card-body p-4">
          <h2 className="h5 mb-3">Biểu đồ</h2>

          <div className="row">
            <div className="col-lg-8">
              <canvas ref={bookingChartRef}></canvas>
            </div>
            <div className="col-lg-4">
              <canvas ref={statusChartRef}></canvas>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
