import { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    profit: 0,
    transactions: 0,
    cancelled: 0,
  });

  const [pending, setPending] = useState([]);

  const eventsChartRef = useRef(null);
  const sourceChartRef = useRef(null);

  // init fake data
  useEffect(() => {
    setStats({
      profit: 12000000,
      transactions: 320,
      cancelled: 12,
    });

    setPending([
      {
        id: '1',
        user: 'Nguyen Van A',
        bio: 'Thân thiện, vui vẻ',
        status: 'PENDING',
      },
      {
        id: '2',
        user: 'Tran Thi B',
        bio: 'Thích cafe',
        status: 'PENDING',
      },
    ]);
  }, []);

  // init charts
  useEffect(() => {
    const eventsChart = new Chart(eventsChartRef.current, {
      type: 'line',
      data: {
        labels: ['T1', 'T2', 'T3', 'T4'],
        datasets: [
          {
            label: 'Booking',
            data: [10, 20, 15, 30],
          },
        ],
      },
    });

    const sourceChart = new Chart(sourceChartRef.current, {
      type: 'doughnut',
      data: {
        labels: ['App', 'Web'],
        datasets: [
          {
            data: [70, 30],
          },
        ],
      },
    });

    return () => {
      eventsChart.destroy();
      sourceChart.destroy();
    };
  }, []);

  const handleApprove = (id) => {
    setPending(pending.filter((p) => p.id !== id));
  };

  const handleReject = (id) => {
    setPending(pending.filter((p) => p.id !== id));
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <aside className="bg-dark text-white p-3" style={{ width: 250 }}>
        <h5>Quản trị Companion</h5>

        <div className="nav flex-column">
          <a className="nav-link text-white active">Dashboard</a>
          <a className="nav-link text-white">Users</a>
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
            <h4>Bảng điều khiển</h4>
            <small className="text-muted">Tổng quan hoạt động nền tảng</small>
          </div>
          <button className="btn btn-outline-danger btn-sm">Đăng xuất</button>
        </div>

        {/* Content */}
        <div className="p-3">
          {/* Stats */}
          <div className="row mb-4">
            <div className="col-md-4">
              <div className="border p-3">
                <div>Lợi nhuận</div>
                <h5>{stats.profit}</h5>
              </div>
            </div>

            <div className="col-md-4">
              <div className="border p-3">
                <div>Giao dịch</div>
                <h5>{stats.transactions}</h5>
              </div>
            </div>

            <div className="col-md-4">
              <div className="border p-3">
                <div>Đơn hủy</div>
                <h5>{stats.cancelled}</h5>
              </div>
            </div>
          </div>

          {/* Charts */}
          <div className="card mb-4">
            <div className="card-header">Biểu đồ</div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-8">
                  <canvas ref={eventsChartRef}></canvas>
                </div>
                <div className="col-lg-4">
                  <canvas ref={sourceChartRef}></canvas>
                </div>
              </div>
            </div>
          </div>

          {/* Pending */}
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <span>Companion chờ duyệt</span>
              <button className="btn btn-sm btn-primary">Reload</button>
            </div>

            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Người dùng</th>
                    <th>Tiểu sử</th>
                    <th>Trạng thái</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {pending.map((p) => (
                    <tr key={p.id}>
                      <td>{p.id}</td>
                      <td>{p.user}</td>
                      <td>{p.bio}</td>
                      <td>
                        <span className="badge bg-warning">{p.status}</span>
                      </td>
                      <td>
                        <button className="btn btn-success btn-sm me-2" onClick={() => handleApprove(p.id)}>
                          Duyệt
                        </button>
                        <button className="btn btn-danger btn-sm" onClick={() => handleReject(p.id)}>
                          Từ chối
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {pending.length === 0 && <div className="text-center text-muted">Không có dữ liệu</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
