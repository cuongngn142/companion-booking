import { useEffect, useState } from 'react';
import Navbar from "../../components/Navbar";
export default function Booking() {
  const [companions, setCompanions] = useState([]);
  const [services, setServices] = useState([]);
  const [venues, setVenues] = useState([]);

  const [form, setForm] = useState({
    companionId: '',
    servicePriceId: '',
    rentalVenue: '',
    bookingTime: '',
    duration: 60,
    locationEnabled: true,
    locationStreet: '',
    locationProvince: '',
    locationDistrict: '',
    note: '',
    image: null,
  });

  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // giả lập load companion
  useEffect(() => {
    setCompanions([
      { id: 1, name: 'Companion A' },
      { id: 2, name: 'Companion B' },
    ]);
  }, []);

  // khi chọn companion → load service + venue
  useEffect(() => {
    if (!form.companionId) return;

    // giả lập API
    setServices([
      { id: 1, name: 'Đi ăn', price: 200 },
      { id: 2, name: 'Đi chơi', price: 300 },
    ]);

    setVenues(['Quán cafe', 'Nhà hàng', 'Công viên']);
  }, [form.companionId]);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;

    setForm({
      ...form,
      [id]: type === 'checkbox' ? checked : value,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setForm({ ...form, image: file });
    setPreview(URL.createObjectURL(file));
  };

  const clearImage = () => {
    setForm({ ...form, image: null });
    setPreview(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // giả lập submit
    setTimeout(() => {
      setLoading(false);
      setMessage('Đặt lịch thành công!');
    }, 1500);
  };

  return (
    <div className="bg-light min-vh-100">
      <Navbar />

      <main className="container py-4">
        <div className="card mx-auto" style={{ maxWidth: '760px' }}>
          <div className="card-body p-4">
            {/* Header */}
            <div className="d-flex align-items-center gap-3 mb-4">
              <div
                className="d-inline-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: 48,
                  height: 48,
                  background: 'linear-gradient(135deg,#3b82f6,#6366f1)',
                }}
              >
                <i className="bi bi-calendar-plus-fill text-white"></i>
              </div>
              <div>
                <h1 className="h4 mb-0 fw-bold">Gửi yêu cầu đặt lịch</h1>
                <p className="text-muted small mb-0">Chọn companion và thời gian phù hợp</p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="row g-3">
              {/* Companion */}
              <div className="col-md-6">
                <label className="form-label">Companion</label>
                <select
                  id="companionId"
                  className="form-select"
                  value={form.companionId}
                  onChange={handleChange}
                  required
                >
                  <option value="">Chọn</option>
                  {companions.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Service */}
              <div className="col-md-6">
                <label className="form-label">Dịch vụ</label>
                <select
                  id="servicePriceId"
                  className="form-select"
                  value={form.servicePriceId}
                  onChange={handleChange}
                  required
                >
                  <option value="">Chọn</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} - {s.price}k
                    </option>
                  ))}
                </select>
              </div>

              {/* Venue */}
              <div className="col-12">
                <label className="form-label">Nơi thuê</label>
                <select
                  id="rentalVenue"
                  className="form-select"
                  value={form.rentalVenue}
                  onChange={handleChange}
                  disabled={!venues.length}
                  required
                >
                  <option value="">Chọn</option>
                  {venues.map((v, i) => (
                    <option key={i}>{v}</option>
                  ))}
                </select>
              </div>

              {/* Time */}
              <div className="col-md-6">
                <label className="form-label">Thời gian</label>
                <input
                  id="bookingTime"
                  type="datetime-local"
                  className="form-control"
                  value={form.bookingTime}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Duration */}
              <div className="col-md-6">
                <label className="form-label">Thời lượng</label>
                <select id="duration" className="form-select" value={form.duration} onChange={handleChange}>
                  {[30, 60, 90, 120, 150, 180, 240].map((d) => (
                    <option key={d} value={d}>
                      {d} phút
                    </option>
                  ))}
                </select>
              </div>

              {/* Location toggle */}
              <div className="col-12">
                <div className="form-check form-switch">
                  <input
                    type="checkbox"
                    id="locationEnabled"
                    className="form-check-input"
                    checked={form.locationEnabled}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">Thêm địa điểm gặp</label>
                </div>
              </div>

              {/* Note */}
              <div className="col-12">
                <textarea
                  id="note"
                  className="form-control"
                  rows="3"
                  placeholder="Ghi chú"
                  value={form.note}
                  onChange={handleChange}
                />
              </div>

              {/* Image */}
              <div className="col-12">
                <input type="file" className="form-control" onChange={handleImage} />
              </div>

              {preview && (
                <div className="col-12">
                  <img src={preview} alt="preview" className="img-fluid" style={{ maxHeight: 200 }} />
                  <button type="button" className="btn btn-sm btn-secondary mt-2" onClick={clearImage}>
                    Xóa ảnh
                  </button>
                </div>
              )}

              {/* Submit */}
              <div className="col-12 d-grid">
                <button className="btn btn-primary btn-lg" disabled={loading}>
                  {loading ? 'Đang xử lý...' : 'Xác nhận đặt lịch'}
                </button>
              </div>
            </form>

            {/* Message */}
            {message && <div className="alert alert-success mt-3">{message}</div>}
          </div>
        </div>
      </main>
    </div>
  );
}
