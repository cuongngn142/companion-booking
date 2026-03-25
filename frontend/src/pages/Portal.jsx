import { Link } from 'react-router-dom';

export default function Portal() {
  return (
    <div
      className="d-flex align-items-center justify-content-center position-relative"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg,#0f172a 0%,#1e1b4b 40%,#312e81 70%,#4c1d95 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Background Orbs */}
      <div
        style={{
          position: 'absolute',
          width: 400,
          height: 400,
          background: '#8b5cf6',
          borderRadius: '50%',
          filter: 'blur(80px)',
          opacity: 0.3,
          top: -100,
          right: -100,
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: 300,
          height: 300,
          background: '#ec4899',
          borderRadius: '50%',
          filter: 'blur(80px)',
          opacity: 0.3,
          bottom: -80,
          left: -80,
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: 250,
          height: 250,
          background: '#3b82f6',
          borderRadius: '50%',
          filter: 'blur(80px)',
          opacity: 0.3,
          bottom: '20%',
          right: '15%',
        }}
      />

      {/* Card */}
      <div
        className="text-center text-white"
        style={{
          background: 'rgba(255,255,255,0.07)',
          backdropFilter: 'blur(24px)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '1.5rem',
          padding: '3rem',
          maxWidth: 720,
          width: '100%',
          zIndex: 1,
        }}
      >
        <h1 className="fw-bold mb-2">
          <i className="bi bi-heart-pulse-fill me-2"></i>
          Companion Rental
        </h1>

        <p className="text-white-50 mb-4">Nền tảng kết nối bạn đồng hành</p>

        <div className="row g-3">
          {/* USER */}
          <div className="col-md-4">
            <Link to="/user" className="text-decoration-none text-white">
              <div
                className="p-4 text-center"
                style={{
                  borderRadius: '1rem',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: '0.3s',
                }}
              >
                <div
                  className="mb-2 d-flex align-items-center justify-content-center"
                  style={{
                    width: 60,
                    height: 60,
                    margin: '0 auto',
                    borderRadius: '1rem',
                    background: 'linear-gradient(135deg,#3b82f6,#6366f1)',
                  }}
                >
                  <i className="bi bi-person-fill text-white fs-4"></i>
                </div>

                <div className="fw-bold">Khách hàng</div>
                <small className="text-white-50">Tìm & đặt lịch</small>
              </div>
            </Link>
          </div>

          {/* COMPANION */}
          <div className="col-md-4">
            <Link to="/companion" className="text-decoration-none text-white">
              <div
                className="p-4 text-center"
                style={{
                  borderRadius: '1rem',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <div
                  className="mb-2 d-flex align-items-center justify-content-center"
                  style={{
                    width: 60,
                    height: 60,
                    margin: '0 auto',
                    borderRadius: '1rem',
                    background: 'linear-gradient(135deg,#8b5cf6,#a78bfa)',
                  }}
                >
                  <i className="bi bi-stars text-white fs-4"></i>
                </div>

                <div className="fw-bold">Companion</div>
                <small className="text-white-50">Quản lý dịch vụ</small>
              </div>
            </Link>
          </div>

          {/* ADMIN */}
          <div className="col-md-4">
            <Link to="/admin" className="text-decoration-none text-white">
              <div
                className="p-4 text-center"
                style={{
                  borderRadius: '1rem',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <div
                  className="mb-2 d-flex align-items-center justify-content-center"
                  style={{
                    width: 60,
                    height: 60,
                    margin: '0 auto',
                    borderRadius: '1rem',
                    background: 'linear-gradient(135deg,#ec4899,#f472b6)',
                  }}
                >
                  <i className="bi bi-shield-lock-fill text-white fs-4"></i>
                </div>

                <div className="fw-bold">Quản trị</div>
                <small className="text-white-50">Dashboard</small>
              </div>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 text-white-50 small">
          <Link to="/policy" className="text-white-50">
            Chính sách
          </Link>{' '}
          • © 2026 Companion Rental
        </div>
      </div>
    </div>
  );
}
