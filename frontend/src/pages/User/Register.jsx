import { useState } from 'react';

export default function Register() {
  const [form, setForm] = useState({
    username: '',
    password: '',
    email: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({
      ...form,
      [id]: value,
    });
  };

  const validate = () => {
    if (!form.username || !form.password || !form.email) {
      return 'Vui lòng nhập đầy đủ thông tin';
    }
    if (form.password.length < 6) {
      return 'Mật khẩu phải >= 6 ký tự';
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');

    const error = validate();
    if (error) {
      setMessage(error);
      return;
    }

    setLoading(true);

    // giả lập API
    setTimeout(() => {
      setLoading(false);
      setMessage('Đăng ký thành công!');
    }, 1200);
  };

  return (
    <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center">
      <main className="container py-5 d-flex align-items-center justify-content-center">
        <div className="card w-100" style={{ maxWidth: 420 }}>
          <div className="card-body p-4 p-md-5">
            {/* Header */}
            <div className="text-center mb-4">
              <div
                className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                style={{
                  width: 56,
                  height: 56,
                  background: 'linear-gradient(135deg,#10b981,#059669)',
                }}
              >
                <i className="bi bi-person-plus-fill text-white fs-4"></i>
              </div>

              <h1 className="h4 fw-bold mb-1">Tạo tài khoản mới</h1>
              <p className="text-muted small">Đăng ký miễn phí để bắt đầu sử dụng</p>
            </div>

            {/* Message */}
            {message && <div className="alert alert-info mb-3">{message}</div>}

            {/* Form */}
            <form onSubmit={handleSubmit} className="row g-3">
              <div className="col-12">
                <label className="form-label">
                  <i className="bi bi-person me-1"></i>
                  Tên đăng nhập
                </label>
                <input
                  id="username"
                  type="text"
                  className="form-control"
                  placeholder="Chọn tên đăng nhập"
                  value={form.username}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-12">
                <label className="form-label">
                  <i className="bi bi-lock me-1"></i>
                  Mật khẩu
                </label>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  placeholder="Tạo mật khẩu"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-12">
                <label className="form-label">
                  <i className="bi bi-envelope me-1"></i>
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="email@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-12 d-grid mt-4">
                <button type="submit" className="btn btn-primary btn-lg" disabled={loading}>
                  {loading ? 'Đang xử lý...' : 'Đăng ký'}
                </button>
              </div>
            </form>

            {/* Login link */}
            <p className="mt-4 mb-0 text-muted text-center">
              Đã có tài khoản?{' '}
              <a href="/login" className="fw-semibold text-decoration-none">
                Đăng nhập ngay
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
