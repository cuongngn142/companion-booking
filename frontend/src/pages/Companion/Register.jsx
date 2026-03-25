import { useState } from 'react';

export default function CompanionRegister() {
  const [form, setForm] = useState({
    bio: '',
    hobbies: '',
    appearance: '',
    availability: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({
      ...form,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Register:', form);

    // TODO: call API
    alert('Đã gửi đăng ký');
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand">
            <i className="bi bi-heart-pulse-fill me-2"></i>Companion Rental
          </a>

          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="nav">
            <div className="navbar-nav ms-auto">
              <a className="nav-link">Tìm kiếm</a>
              <a className="nav-link">Chính sách</a>
              <a className="nav-link">Dashboard</a>
              <a className="nav-link text-warning">Đăng xuất</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="container py-4">
        <h1 className="h3 fw-bold mb-3">Đăng ký Companion</h1>

        <section className="card" style={{ maxWidth: '800px' }}>
          <div className="card-body">
            <h5>Thông tin hồ sơ</h5>

            <form className="row g-3 mt-2" onSubmit={handleSubmit}>
              <div className="col-12">
                <textarea
                  id="bio"
                  className="form-control"
                  placeholder="Giới thiệu..."
                  value={form.bio}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <input
                  id="hobbies"
                  className="form-control"
                  placeholder="Sở thích"
                  value={form.hobbies}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <input
                  id="appearance"
                  className="form-control"
                  placeholder="Ngoại hình"
                  value={form.appearance}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-12">
                <input
                  id="availability"
                  className="form-control"
                  placeholder="Lịch rảnh"
                  value={form.availability}
                  onChange={handleChange}
                />
              </div>

              <div className="col-12">
                <button className="btn btn-primary">Gửi đăng ký</button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
