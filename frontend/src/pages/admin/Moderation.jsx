import { useEffect, useState } from 'react';

export default function AdminModeration() {
  const [search, setSearch] = useState('');
  const [pending, setPending] = useState([]);
  const [reviews, setReviews] = useState([]);

  const [selected, setSelected] = useState(null);

  // fake data
  useEffect(() => {
    setPending([
      {
        id: 'C001',
        user: 'Nguyen Van A',
        bio: 'Thân thiện, vui vẻ',
      },
      {
        id: 'C002',
        user: 'Tran Thi B',
        bio: 'Thích cafe',
      },
    ]);

    setReviews([
      {
        id: 'R001',
        booking: 'B001',
        rating: 1,
        comment: 'Dịch vụ tệ',
        status: 'FLAGGED',
      },
    ]);
  }, []);

  const handleApprove = (id) => {
    setPending(pending.filter((p) => p.id !== id));
  };

  const handleReject = (id) => {
    setPending(pending.filter((p) => p.id !== id));
  };

  const handleReviewApprove = (id) => {
    setReviews(reviews.map((r) => (r.id === id ? { ...r, status: 'APPROVED' } : r)));
  };

  const handleReviewReject = (id) => {
    setReviews(reviews.map((r) => (r.id === id ? { ...r, status: 'REMOVED' } : r)));
  };

  const filtered = pending.filter((p) => p.user.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <aside className="bg-dark text-white p-3" style={{ width: 250 }}>
        <h5>Quản trị Companion</h5>

        <div className="nav flex-column">
          <a className="nav-link text-white">Dashboard</a>
          <a className="nav-link text-white">Users</a>
          <a className="nav-link text-white active">Moderation</a>
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
            <h4>Kiểm duyệt nội dung</h4>
            <small className="text-muted">Duyệt hồ sơ và quản lý đánh giá</small>
          </div>
          <button className="btn btn-outline-danger btn-sm">Đăng xuất</button>
        </div>

        {/* Content */}
        <div className="p-3">
          {/* Search */}
          <div className="input-group mb-3">
            <input
              className="form-control"
              placeholder="Nhập tên..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-outline-primary">Tìm</button>
          </div>

          {/* Pending companion */}
          <div className="card mb-3">
            <div className="card-header d-flex justify-content-between">
              <span>Hồ sơ chờ duyệt</span>
              <button className="btn btn-sm btn-primary">Reload</button>
            </div>

            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Người dùng</th>
                    <th>Tiểu sử</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {filtered.map((p) => (
                    <tr key={p.id}>
                      <td>{p.id}</td>
                      <td>{p.user}</td>
                      <td>{p.bio}</td>
                      <td>
                        <button
                          className="btn btn-info btn-sm me-2"
                          onClick={() => setSelected(p)}
                          data-bs-toggle="modal"
                          data-bs-target="#modal"
                        >
                          Xem
                        </button>

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

              {filtered.length === 0 && <div className="text-muted text-center">Không có dữ liệu</div>}
            </div>
          </div>

          {/* Reviews */}
          <div className="card">
            <div className="card-header">Đánh giá vi phạm</div>

            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Booking</th>
                    <th>Rating</th>
                    <th>Comment</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {reviews.map((r) => (
                    <tr key={r.id}>
                      <td>{r.id}</td>
                      <td>{r.booking}</td>
                      <td>{r.rating}</td>
                      <td>{r.comment}</td>
                      <td>
                        <span className="badge bg-warning">{r.status}</span>
                      </td>
                      <td>
                        <button className="btn btn-success btn-sm me-2" onClick={() => handleReviewApprove(r.id)}>
                          Duyệt
                        </button>
                        <button className="btn btn-danger btn-sm" onClick={() => handleReviewReject(r.id)}>
                          Xóa
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {reviews.length === 0 && <div className="text-center text-muted">Không có dữ liệu</div>}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div className="modal fade" id="modal" tabIndex="-1">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Chi tiết hồ sơ</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">
              {selected && (
                <div>
                  <p>
                    <strong>ID:</strong> {selected.id}
                  </p>
                  <p>
                    <strong>User:</strong> {selected.user}
                  </p>
                  <p>
                    <strong>Bio:</strong> {selected.bio}
                  </p>
                </div>
              )}
            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal">
                Đóng
              </button>

              {selected && (
                <>
                  <button className="btn btn-danger" onClick={() => handleReject(selected.id)}>
                    Từ chối
                  </button>

                  <button className="btn btn-success" onClick={() => handleApprove(selected.id)}>
                    Duyệt
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
