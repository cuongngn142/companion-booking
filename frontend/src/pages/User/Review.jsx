import { useEffect, useState } from 'react';
import Navbar from "../../components/Navbar";
export default function Review() {
  const [form, setForm] = useState({
    bookingId: '',
    rating: 0,
    comment: '',
  });

  const [bookings, setBookings] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  // giả lập load data
  useEffect(() => {
    setTimeout(() => {
      setBookings([
        { id: 1, name: 'Booking #1' },
        { id: 2, name: 'Booking #2' },
      ]);

      setReviews([
        {
          id: 1,
          bookingId: 1,
          rating: 5,
          comment: 'Rất tốt!',
        },
        {
          id: 2,
          bookingId: 2,
          rating: 4,
          comment: 'Ổn áp',
        },
      ]);

      setLoading(false);
    }, 1200);
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({
      ...form,
      [id]: value,
    });
  };

  const setRating = (value) => {
    setForm({
      ...form,
      rating: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');

    if (!form.bookingId || form.rating === 0) {
      setMessage('Vui lòng chọn booking và số sao');
      return;
    }

    // giả lập submit
    const newReview = {
      id: Date.now(),
      ...form,
    };

    setReviews([newReview, ...reviews]);
    setMessage('Gửi đánh giá thành công!');

    // reset form
    setForm({
      bookingId: '',
      rating: 0,
      comment: '',
    });
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
                      background: 'linear-gradient(135deg,#f59e0b,#f97316)',
                    }}
                  >
                    <i className="bi bi-star-fill text-white"></i>
                  </div>
                  <div>
                    <h1 className="h4 fw-bold mb-0">Gửi đánh giá</h1>
                    <p className="text-muted small mb-0">Chia sẻ trải nghiệm của bạn</p>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="row g-3">
                  <div className="col-12">
                    <label className="form-label">Lịch hẹn đã hoàn thành</label>
                    <select id="bookingId" className="form-select" value={form.bookingId} onChange={handleChange}>
                      <option value="">Chọn booking</option>
                      {bookings.map((b) => (
                        <option key={b.id} value={b.id}>
                          {b.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Rating */}
                  <div className="col-12">
                    <label className="form-label">Số sao</label>
                    <div className="d-flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          className="btn btn-link p-0"
                          onClick={() => setRating(star)}
                          style={{
                            fontSize: 24,
                            color: star <= form.rating ? '#f59e0b' : '#ccc',
                          }}
                        >
                          ★
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="col-12">
                    <textarea
                      id="comment"
                      className="form-control"
                      rows="4"
                      placeholder="Nhận xét..."
                      value={form.comment}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12 d-grid">
                    <button className="btn btn-primary">Gửi đánh giá</button>
                  </div>
                </form>

                {message && <div className="alert alert-info mt-3">{message}</div>}
              </div>
            </div>
          </div>

          {/* RIGHT LIST */}
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body p-4">
                <h2 className="h5 fw-bold mb-3">Đánh giá của bạn</h2>

                {loading ? (
                  <div className="text-center py-4">
                    <div className="spinner-border text-primary"></div>
                  </div>
                ) : reviews.length === 0 ? (
                  <p className="text-muted">Không có đánh giá</p>
                ) : (
                  reviews.map((r) => (
                    <div key={r.id} className="border rounded p-2 mb-2">
                      <div>Booking #{r.bookingId}</div>

                      <div style={{ color: '#f59e0b' }}>{'★'.repeat(r.rating)}</div>

                      <div className="small text-muted">{r.comment}</div>
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
