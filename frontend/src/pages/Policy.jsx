import { Link } from 'react-router-dom';

export default function Policy() {
  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white border-bottom">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            <i className="bi bi-heart-pulse-fill me-2"></i>
            Companion Rental
          </Link>

          <div className="d-flex align-items-center gap-2">
            <Link className="btn btn-link text-decoration-none" to="/search">
              <i className="bi bi-search me-1"></i>Tìm kiếm
            </Link>

            <Link className="btn btn-outline-primary btn-sm" to="/login">
              Đăng nhập
            </Link>

            <Link className="btn btn-primary btn-sm" to="/register">
              Đăng ký
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="container py-5 flex-grow-1" style={{ maxWidth: 800 }}>
        <div className="text-center mb-4">
          <div
            className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
            style={{
              width: 64,
              height: 64,
              background: 'linear-gradient(135deg,#3b82f6,#8b5cf6)',
            }}
          >
            <i className="bi bi-file-earmark-text-fill text-white fs-4"></i>
          </div>

          <h1 className="h2 fw-bold">Chính sách & Điều khoản Dịch vụ</h1>
        </div>

        <div className="alert alert-warning d-flex gap-2">
          <i className="bi bi-exclamation-triangle-fill mt-1"></i>
          <div>
            <strong>LƯU Ý:</strong> Đây là dịch vụ cung cấp bạn đồng hành cho các hoạt động lành mạnh. Mọi hành vi vi
            phạm pháp luật sẽ bị xử lý nghiêm khắc.
          </div>
        </div>

        {/* Section 1 */}
        <div className="card mb-3">
          <div className="card-body p-4">
            <h2 className="h5 fw-bold mb-3">
              <i className="bi bi-bullseye text-primary me-2"></i>
              1. Mục đích dịch vụ
            </h2>
            <p className="text-secondary mb-0">
              Dịch vụ nhằm cung cấp người đồng hành cho các hoạt động như: xem phim, ăn uống, chơi game, đi sự kiện hoặc
              trò chuyện tư vấn.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="card mb-3">
          <div className="card-body p-4">
            <h2 className="h5 fw-bold mb-3">
              <i className="bi bi-people-fill text-success me-2"></i>
              2. Quy tắc ứng xử
            </h2>
            <ul className="text-secondary mb-0 ps-3">
              <li className="mb-2">
                Không được phép có hành vi liên quan đến tình dục hoặc vi phạm thuần phong mỹ tục.
              </li>
              <li className="mb-2">Tôn trọng quyền riêng tư và thân thể của bạn đồng hành.</li>
              <li>Không sử dụng chất kích thích, ma túy trong quá trình hẹn gặp.</li>
            </ul>
          </div>
        </div>

        {/* Section 3 */}
        <div className="card mb-3">
          <div className="card-body p-4">
            <h2 className="h5 fw-bold mb-3">
              <i className="bi bi-calendar-check-fill text-info me-2"></i>
              3. Quy trình đặt lịch
            </h2>
            <p className="text-secondary mb-0">
              Khách hàng đặt lịch qua hệ thống. Companion có quyền từ chối nếu không phù hợp. Mọi giao dịch phải thực
              hiện qua hệ thống.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="card mb-3">
          <div className="card-body p-4">
            <h2 className="h5 fw-bold mb-3">
              <i className="bi bi-shield-exclamation text-danger me-2"></i>
              4. Xử lý vi phạm
            </h2>
            <p className="text-secondary mb-0">
              Các hành vi vi phạm sẽ bị khóa tài khoản hoặc chuyển cơ quan chức năng nếu cần thiết.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 border-top bg-white">
        <p className="text-muted mb-0">© 2026 Companion Rental. Tất cả quyền được bảo lưu.</p>
      </footer>
    </div>
  );
}
