import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
export default function Report() {
  const [form, setForm] = useState({
    reportedUserId: '',
    reportCategory: 'FAKE_PROFILE',
    reason: '',
    isEmergency: false,
  });

  const [location, setLocation] = useState(null);
  const [message, setMessage] = useState('');
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  // load history giả lập
  useEffect(() => {
    setTimeout(() => {
      setReports([
        {
          id: 1,
          userId: 2,
          category: 'LATE',
          status: 'Đã xử lý',
        },
        {
          id: 2,
          userId: 3,
          category: 'HARASSMENT',
          status: 'Đang xử lý',
        },
      ]);
      setLoading(false);
    }, 1200);
  }, []);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setForm({
      ...form,
      [id]: type === 'checkbox' ? checked : value,
    });
  };

  const toggleSOS = () => {
    setForm({ ...form, isEmergency: !form.isEmergency });
  };

  const getLocation = () => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      () => {
        setMessage('Không lấy được vị trí');
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');

    if (form.isEmergency) {
      getLocation();
    }

    // giả lập submit
    setTimeout(() => {
      setMessage('Gửi tố cáo thành công');
    }, 1000);
  };

  return (
    <div className="bg-light min-vh-100">
      <Navbar />

      <main className="container py-4">
        <div className="row g-3">
          {/* LEFT FORM */}
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body p-4">
                {/* Header */}
                <div className="d-flex gap-3 mb-4">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: 48,
                      height: 48,
                      background: 'linear-gradient(135deg,#ef4444,#dc2626)',
                    }}
                  >
                    <i className="bi bi-exclamation-triangle-fill text-white"></i>
                  </div>
                  <div>
                    <h1 className="h4 fw-bold mb-0">Gửi tố cáo / khiếu nại</h1>
                    <p className="text-muted small mb-0">Báo cáo hành vi vi phạm</p>
                  </div>
                </div>

                {/* SOS */}
                <div className="alert alert-danger d-flex justify-content-between align-items-center">
                  <div>
                    <div className="fw-semibold">Cần hỗ trợ khẩn cấp?</div>
                    <div className="small">Bật SOS để ưu tiên xử lý</div>
                  </div>

                  <button type="button" className="btn btn-light btn-sm" onClick={toggleSOS}>
                    {form.isEmergency ? 'Tắt SOS' : 'Bật SOS'}
                  </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="row g-3">
                  <div className="col-12">
                    <label className="form-label">ID user bị tố cáo</label>
                    <input
                      id="reportedUserId"
                      type="number"
                      className="form-control"
                      value={form.reportedUserId}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label">Loại vấn đề</label>
                    <select
                      id="reportCategory"
                      className="form-select"
                      value={form.reportCategory}
                      onChange={handleChange}
                    >
                      <option value="FAKE_PROFILE">Không giống ảnh</option>
                      <option value="LATE">Đi trễ</option>
                      <option value="HARASSMENT">Quấy rối</option>
                      <option value="BAD_ATTITUDE">Thái độ không tốt</option>
                      <option value="OTHER">Khác</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <textarea
                      id="reason"
                      className="form-control"
                      rows="4"
                      placeholder="Mô tả..."
                      value={form.reason}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12 form-check ms-2">
                    <input
                      id="isEmergency"
                      type="checkbox"
                      className="form-check-input"
                      checked={form.isEmergency}
                      onChange={handleChange}
                    />
                    <label className="form-check-label text-danger">SOS khẩn cấp</label>
                  </div>

                  {location && (
                    <div className="col-12 small text-success">
                      Vị trí: {location.lat}, {location.lng}
                    </div>
                  )}

                  <div className="col-12 d-grid">
                    <button className="btn btn-warning">Gửi tố cáo</button>
                  </div>
                </form>

                {message && <div className="alert alert-info mt-3">{message}</div>}
              </div>
            </div>
          </div>

          {/* RIGHT HISTORY */}
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body p-4">
                <h2 className="h5 fw-bold mb-3">Lịch sử tố cáo</h2>

                {loading ? (
                  <div className="text-center py-4">
                    <div className="spinner-border text-primary"></div>
                  </div>
                ) : reports.length === 0 ? (
                  <p className="text-muted">Không có dữ liệu</p>
                ) : (
                  reports.map((r) => (
                    <div key={r.id} className="border rounded p-2 mb-2">
                      <div>ID user: {r.userId}</div>
                      <div>Loại: {r.category}</div>
                      <div className="small text-muted">{r.status}</div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
