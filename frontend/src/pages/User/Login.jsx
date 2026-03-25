import { useState } from 'react';

export default function Login() {
  const [form, setForm] = useState({
    username: '',
    password: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // giả lập API login
    setTimeout(() => {
      if (form.username === 'admin' && form.password === '123456') {
        setMessage('Đăng nhập thành công!');
      } else {
        setMessage('Sai tài khoản hoặc mật khẩu');
      }
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center">
      <main className="container py-5 d-flex align-items-center justify-content-center">
        <div className="card mx-auto w-100" style={{ maxWidth: 420 }}>
          <div className="card-body p-4 p-md-5">
            {/* Header */}
            <div className="text-center mb-4">
              <div
                className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                style={{
                  width: 56,
                  height: 56,
                  background: 'linear-gradient(135deg,#3b82f6,#6366f1)',
                }}
              >
                <i className="bi bi-person-fill text-white fs-4"></i>
              </div>

              <h1 className="h4 fw-bold mb-1">Chào mừng trở lại</h1>
              <p className="text-muted small">Đăng nhập để tiếp tục sử dụng dịch vụ</p>
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
                  placeholder="Nhập tên đăng nhập"
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
                  placeholder="Nhập mật khẩu"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-12 d-grid mt-4">
                <button type="submit" className="btn btn-primary btn-lg" disabled={loading}>
                  {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
                </button>
              </div>
            </form>

            {/* Register */}
            <p className="mt-4 mb-0 text-muted text-center">
              Chưa có tài khoản?{' '}
              <a href="/register" className="fw-semibold text-decoration-none">
                Đăng ký ngay
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
