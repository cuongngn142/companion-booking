import { useEffect, useState } from 'react';

export default function AdminDisputes() {
  const [disputes, setDisputes] = useState([]);

  // giả lập fetch API
  useEffect(() => {
    setDisputes([
      {
        id: 'D001',
        reporter: 'User A',
        reported: 'Companion B',
        reason: 'Không đúng mô tả',
        status: 'PENDING',
      },
      {
        id: 'D002',
        reporter: 'User C',
        reported: 'Companion D',
        reason: 'Không đến đúng giờ',
        status: 'PENDING',
      },
    ]);
  }, []);

  const handleResolve = (id) => {
    setDisputes(disputes.map((d) => (d.id === id ? { ...d, status: 'RESOLVED' } : d)));
  };

  const handleReject = (id) => {
    setDisputes(disputes.map((d) => (d.id === id ? { ...d, status: 'REJECTED' } : d)));
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
          <a className="nav-link text-white active">Disputes</a>
          <a className="nav-link text-white">Notifications</a>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-grow-1">
        {/* Topbar */}
        <div className="bg-light p-3 d-flex justify-content-between">
          <div>
            <h4>Xử lý tranh chấp</h4>
            <small className="text-muted">Giải quyết báo cáo và SOS</small>
          </div>
          <button className="btn btn-outline-danger btn-sm">Đăng xuất</button>
        </div>

        {/* Content */}
        <div className="p-3">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <span>Danh sách báo cáo</span>
              <button className="btn btn-sm btn-primary">Tải lại</button>
            </div>

            <div className="card-body">
              <div className="text-muted small mb-3">Chứng từ chat / GPS / check-in được xử lý nội bộ.</div>

              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Người báo cáo</th>
                      <th>Người bị báo cáo</th>
                      <th>Lý do</th>
                      <th>Trạng thái</th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody>
                    {disputes.map((d) => (
                      <tr key={d.id}>
                        <td>{d.id}</td>
                        <td>{d.reporter}</td>
                        <td>{d.reported}</td>
                        <td>{d.reason}</td>
                        <td>
                          <span
                            className={`badge ${
                              d.status === 'PENDING'
                                ? 'bg-warning'
                                : d.status === 'RESOLVED'
                                  ? 'bg-success'
                                  : 'bg-danger'
                            }`}
                          >
                            {d.status}
                          </span>
                        </td>
                        <td>
                          {d.status === 'PENDING' && (
                            <>
                              <button className="btn btn-success btn-sm me-2" onClick={() => handleResolve(d.id)}>
                                Giải quyết
                              </button>
                              <button className="btn btn-danger btn-sm" onClick={() => handleReject(d.id)}>
                                Từ chối
                              </button>
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {disputes.length === 0 && <div className="text-center text-muted">Không có dữ liệu</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
