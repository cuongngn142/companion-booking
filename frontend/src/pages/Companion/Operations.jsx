import { useEffect, useState } from 'react';

export default function CompanionOperations() {
  const [availability, setAvailability] = useState([]);
  const [services, setServices] = useState([]);

  const [form, setForm] = useState({
    name: '',
    price: '',
    description: '',
  });

  // giả lập fetch API
  useEffect(() => {
    setAvailability([
      { start: '08:00', end: '10:00', busy: false, note: '' },
      { start: '10:00', end: '12:00', busy: true, note: 'Đã có booking' },
    ]);

    setServices([{ name: 'Chơi game', price: 100000, description: 'Online' }]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setServices([
      ...services,
      {
        name: form.name,
        price: form.price,
        description: form.description,
      },
    ]);

    setForm({ name: '', price: '', description: '' });
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand">
            <i className="bi bi-stars me-2"></i>Companion Center
          </a>

          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="nav">
            <div className="navbar-nav ms-auto">
              <a className="nav-link">Tổng quan</a>
              <a className="nav-link">Hồ sơ</a>
              <a className="nav-link active">Lịch & Dịch vụ</a>
              <a className="nav-link">Đơn hàng</a>
              <a className="nav-link">Tài chính</a>
              <a className="nav-link">Chat</a>
              <a className="nav-link">Thông báo</a>
              <a className="nav-link text-warning">Đăng xuất</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="container py-4">
        <h1 className="h3 fw-bold mb-3">Lịch & Dịch vụ</h1>

        {/* Availability */}
        <section className="card mb-4">
          <div className="card-body">
            <h5>Lịch hoạt động</h5>

            <div className="table-responsive mt-3">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Bắt đầu</th>
                    <th>Kết thúc</th>
                    <th>Trạng thái</th>
                    <th>Ghi chú</th>
                  </tr>
                </thead>
                <tbody>
                  {availability.map((item, i) => (
                    <tr key={i}>
                      <td>{item.start}</td>
                      <td>{item.end}</td>
                      <td>
                        <span className={`badge ${item.busy ? 'bg-danger' : 'bg-success'}`}>
                          {item.busy ? 'Bận' : 'Rảnh'}
                        </span>
                      </td>
                      <td>{item.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Service */}
        <section className="card">
          <div className="card-body">
            <h5>Bảng giá dịch vụ</h5>

            {/* Form */}
            <form className="row g-3 mt-2" onSubmit={handleSubmit}>
              <div className="col-md-4">
                <input
                  className="form-control"
                  placeholder="Tên dịch vụ"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>

              <div className="col-md-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Giá"
                  value={form.price}
                  onChange={(e) => setForm({ ...form, price: e.target.value })}
                  required
                />
              </div>

              <div className="col-md-5">
                <input
                  className="form-control"
                  placeholder="Mô tả"
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                />
              </div>

              <div className="col-12">
                <button className="btn btn-outline-primary">Thêm bảng giá</button>
              </div>
            </form>

            {/* Table */}
            <div className="table-responsive mt-3">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Dịch vụ</th>
                    <th>Giá/giờ</th>
                    <th>Mô tả</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((s, i) => (
                    <tr key={i}>
                      <td>{s.name}</td>
                      <td>{s.price}</td>
                      <td>{s.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
