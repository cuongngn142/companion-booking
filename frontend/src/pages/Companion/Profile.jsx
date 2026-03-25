import { useEffect, useState } from 'react';

export default function CompanionProfile() {
  const [form, setForm] = useState({
    bio: '',
    hobbies: '',
    appearance: '',
    availabilityText: '',
    serviceType: '',
    area: '',
    rentalVenues: '',
    identityNumber: '',
    identityImageUrl: '',
    portraitImageUrl: '',
    introMediaUrls: '',
    skills: '',
    online: false,
  });

  const [status, setStatus] = useState('N/A');

  // giả lập fetch profile
  useEffect(() => {
    const fakeData = {
      bio: 'Companion thân thiện',
      hobbies: 'Game, Cafe',
      appearance: 'Cao 1m7',
      availabilityText: 'Tối 18h-22h',
      serviceType: 'Chơi game',
      area: 'TP.HCM',
      rentalVenues: 'Cafe ABC\nCông viên XYZ',
      online: true,
    };

    setForm((prev) => ({ ...prev, ...fakeData }));
    setStatus('PENDING');
  }, []);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setForm({
      ...form,
      [id]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Submit profile:', form);

    // TODO: call API
    alert('Đã lưu hồ sơ');
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
              <a className="nav-link active">Hồ sơ</a>
              <a className="nav-link">Lịch & Dịch vụ</a>
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
        <h1 className="h3 fw-bold mb-3">Hồ sơ Companion</h1>

        <section className="card">
          <div className="card-body">
            <h5>Thông tin cá nhân</h5>

            <form className="row g-3 mt-2" onSubmit={handleSubmit}>
              <div className="col-12">
                <textarea
                  id="bio"
                  className="form-control"
                  placeholder="Tiểu sử"
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
                  id="availabilityText"
                  className="form-control"
                  placeholder="Lịch rảnh"
                  value={form.availabilityText}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6">
                <input
                  id="serviceType"
                  className="form-control"
                  placeholder="Loại dịch vụ"
                  value={form.serviceType}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6">
                <input
                  id="area"
                  className="form-control"
                  placeholder="Khu vực"
                  value={form.area}
                  onChange={handleChange}
                />
              </div>

              <div className="col-12">
                <textarea
                  id="rentalVenues"
                  className="form-control"
                  placeholder="Danh sách nơi thuê (mỗi dòng 1 nơi)"
                  value={form.rentalVenues}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4">
                <input
                  id="identityNumber"
                  className="form-control"
                  placeholder="CCCD"
                  value={form.identityNumber}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4">
                <input
                  id="identityImageUrl"
                  className="form-control"
                  placeholder="URL CCCD"
                  value={form.identityImageUrl}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4">
                <input
                  id="portraitImageUrl"
                  className="form-control"
                  placeholder="URL ảnh"
                  value={form.portraitImageUrl}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6">
                <textarea
                  id="introMediaUrls"
                  className="form-control"
                  placeholder="Album media"
                  value={form.introMediaUrls}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6">
                <textarea
                  id="skills"
                  className="form-control"
                  placeholder="Kỹ năng"
                  value={form.skills}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6">
                <span className="badge bg-secondary">{status}</span>
              </div>

              <div className="col-md-6 form-check form-switch">
                <input
                  type="checkbox"
                  id="online"
                  className="form-check-input"
                  checked={form.online}
                  onChange={handleChange}
                />
                <label className="form-check-label">Online</label>
              </div>

              <div className="col-12">
                <button className="btn btn-primary">Lưu hồ sơ</button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
