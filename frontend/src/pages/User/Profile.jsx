import { useEffect, useState } from 'react';
import Navbar from "../../components/Navbar";
export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // giả lập API
  useEffect(() => {
    setTimeout(() => {
      setProfile({
        id: 1,
        name: 'Companion A',
        avatar: 'https://via.placeholder.com/150',
        bio: 'Vui vẻ, thân thiện, thích đi ăn và nói chuyện.',
        location: 'TP.HCM',
        rating: 4.8,
        services: [
          { name: 'Đi ăn', price: 200 },
          { name: 'Đi chơi', price: 300 },
        ],
      });
      setLoading(false);
    }, 1200);
  }, []);

  return (
    <div className="bg-light min-vh-100">
      <Navbar />

      <main className="container py-4">
        <div className="card p-4">
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary mb-3"></div>
              <p className="text-muted">Đang tải hồ sơ...</p>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="text-center mb-4">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="rounded-circle mb-3"
                  width={120}
                  height={120}
                  style={{ objectFit: 'cover' }}
                />

                <h2 className="fw-bold">{profile.name}</h2>
                <p className="text-muted">{profile.location}</p>

                <div className="text-warning">
                  <i className="bi bi-star-fill"></i> {profile.rating}
                </div>
              </div>

              {/* Bio */}
              <div className="mb-4">
                <h5 className="fw-semibold">Giới thiệu</h5>
                <p className="text-muted">{profile.bio}</p>
              </div>

              {/* Services */}
              <div className="mb-4">
                <h5 className="fw-semibold">Dịch vụ</h5>
                <div className="row g-2">
                  {profile.services.map((s, i) => (
                    <div key={i} className="col-md-6">
                      <div className="border rounded p-2 d-flex justify-content-between">
                        <span>{s.name}</span>
                        <span className="text-primary fw-semibold">{s.price}k</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="d-flex gap-2">
                <button className="btn btn-primary w-100">Đặt lịch</button>

                <button className="btn btn-outline-danger">
                  <i className="bi bi-heart"></i>
                </button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
