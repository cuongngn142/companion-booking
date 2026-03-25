import { useEffect, useState } from 'react';
import Navbar from "../../components/Navbar";
export default function Search() {
  const [filters, setFilters] = useState({
    keyword: '',
    serviceType: '',
    area: '',
    gender: '',
    minPrice: '',
    maxPrice: '',
    online: '',
  });

  const [companions, setCompanions] = useState([]);
  const [loading, setLoading] = useState(false);

  // giả lập data ban đầu
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);

    setTimeout(() => {
      setCompanions([
        {
          id: 1,
          name: 'Linh',
          price: 200000,
          area: 'HCM',
          gender: 'FEMALE',
          online: true,
        },
        {
          id: 2,
          name: 'Nam',
          price: 150000,
          area: 'Hà Nội',
          gender: 'MALE',
          online: false,
        },
      ]);
      setLoading(false);
    }, 1000);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFilters({
      ...filters,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // giả lập filter (client side)
    let data = [...companions];

    if (filters.keyword) {
      data = data.filter((c) => c.name.toLowerCase().includes(filters.keyword.toLowerCase()));
    }

    if (filters.gender) {
      data = data.filter((c) => c.gender === filters.gender);
    }

    if (filters.area) {
      data = data.filter((c) => c.area.toLowerCase().includes(filters.area.toLowerCase()));
    }

    if (filters.online !== '') {
      data = data.filter((c) => String(c.online) === filters.online);
    }

    if (filters.minPrice) {
      data = data.filter((c) => c.price >= Number(filters.minPrice));
    }

    if (filters.maxPrice) {
      data = data.filter((c) => c.price <= Number(filters.maxPrice));
    }

    setCompanions(data);
  };

  const formatMoney = (v) => Number(v).toLocaleString('vi-VN') + ' VND';

  return (
    <div className="bg-light min-vh-100">
      <Navbar />

      <main className="container py-4">
        <h1 className="h3 mb-4">Tìm kiếm bạn đồng hành</h1>

        {/* FILTER */}
        <div className="card mb-4">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="row g-2 align-items-end">
              <div className="col-md-4">
                <input
                  id="keyword"
                  className="form-control"
                  placeholder="Tên..."
                  value={filters.keyword}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-2">
                <select id="serviceType" className="form-select" value={filters.serviceType} onChange={handleChange}>
                  <option value="">Tất cả</option>
                  <option value="OUTING">Outing</option>
                </select>
              </div>

              <div className="col-md-2">
                <input
                  id="area"
                  className="form-control"
                  placeholder="Khu vực"
                  value={filters.area}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-2">
                <select id="gender" className="form-select" value={filters.gender} onChange={handleChange}>
                  <option value="">Tất cả</option>
                  <option value="MALE">Nam</option>
                  <option value="FEMALE">Nữ</option>
                </select>
              </div>

              <div className="col-md-2">
                <input
                  id="minPrice"
                  type="number"
                  className="form-control"
                  placeholder="Giá từ"
                  value={filters.minPrice}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-2">
                <input
                  id="maxPrice"
                  type="number"
                  className="form-control"
                  placeholder="Giá đến"
                  value={filters.maxPrice}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-2">
                <select id="online" className="form-select" value={filters.online} onChange={handleChange}>
                  <option value="">Tất cả</option>
                  <option value="true">Online</option>
                  <option value="false">Offline</option>
                </select>
              </div>

              <div className="col-md-2 d-grid">
                <button className="btn btn-primary">Lọc</button>
              </div>
            </form>
          </div>
        </div>

        {/* RESULT */}
        {loading ? (
          <div className="text-center py-4">
            <div className="spinner-border text-primary"></div>
          </div>
        ) : (
          <div className="row g-3">
            {companions.length === 0 ? (
              <p className="text-muted">Không có kết quả</p>
            ) : (
              companions.map((c) => (
                <div key={c.id} className="col-md-4">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="fw-bold">{c.name}</h5>

                      <div className="small text-muted">{c.area}</div>

                      <div className="mt-2 fw-semibold text-primary">{formatMoney(c.price)}</div>

                      <div className="mt-2">
                        {c.online ? (
                          <span className="badge bg-success">Online</span>
                        ) : (
                          <span className="badge bg-secondary">Offline</span>
                        )}
                      </div>
                    </div>

                    <div className="card-footer bg-white border-0">
                      <button className="btn btn-outline-primary w-100">Xem chi tiết</button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </main>
    </div>
  );
}
