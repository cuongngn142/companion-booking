import { useEffect, useState } from 'react';
import Navbar from "../../components/Navbar";
export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  // giả lập fetch API
  useEffect(() => {
    setTimeout(() => {
      setFavorites([
        {
          id: 1,
          name: 'Companion A',
          avatar: 'https://via.placeholder.com/100',
          description: 'Vui vẻ, thân thiện',
        },
        {
          id: 2,
          name: 'Companion B',
          avatar: 'https://via.placeholder.com/100',
          description: 'Dễ thương, nói chuyện hay',
        },
      ]);
      setLoading(false);
    }, 1200);
  }, []);

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-light min-vh-100">
      <Navbar />

      <main className="container py-4">
        <h1 className="h3 page-title mb-3">
          <i className="bi bi-heart-fill ms-3 me-1 text-danger"></i>
          Companion yêu thích
        </h1>

        <div>
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary mb-3"></div>
              <p className="text-muted mb-0">Đang tải danh sách yêu thích...</p>
            </div>
          ) : favorites.length === 0 ? (
            <p className="text-center text-muted">Bạn chưa có companion yêu thích</p>
          ) : (
            <div className="row g-3">
              {favorites.map((item) => (
                <div key={item.id} className="col-md-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body text-center">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="rounded-circle mb-3"
                        width={80}
                        height={80}
                        style={{ objectFit: 'cover' }}
                      />

                      <h5 className="fw-bold">{item.name}</h5>
                      <p className="text-muted small">{item.description}</p>

                      <div className="d-flex gap-2 justify-content-center">
                        <button className="btn btn-outline-primary btn-sm">Xem chi tiết</button>

                        <button className="btn btn-outline-danger btn-sm" onClick={() => removeFavorite(item.id)}>
                          Bỏ thích
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
