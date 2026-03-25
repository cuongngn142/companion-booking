import { useEffect, useState } from 'react';

export default function AdminTransactions() {
  const [commission, setCommission] = useState(0.2);
  const [withdrawals, setWithdrawals] = useState([]);
  const [search, setSearch] = useState('');

  // fake fetch
  useEffect(() => {
    setWithdrawals([
      {
        id: 'W001',
        companion: 'Nguyen Van A',
        bank: 'Vietcombank',
        account: '123456789',
        amount: 1000000,
        commission: 200000,
        receive: 800000,
        status: 'PENDING',
      },
      {
        id: 'W002',
        companion: 'Tran Thi B',
        bank: 'ACB',
        account: '987654321',
        amount: 2000000,
        commission: 400000,
        receive: 1600000,
        status: 'PENDING',
      },
    ]);
  }, []);

  const handleSaveCommission = (e) => {
    e.preventDefault();
    alert('Đã lưu commission: ' + commission);
  };

  const handleApprove = (id) => {
    setWithdrawals(withdrawals.map((w) => (w.id === id ? { ...w, status: 'APPROVED' } : w)));
  };

  const handleReject = (id) => {
    setWithdrawals(withdrawals.map((w) => (w.id === id ? { ...w, status: 'REJECTED' } : w)));
  };

  const filtered = withdrawals.filter((w) => w.id.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <aside className="bg-dark text-white p-3" style={{ width: 250 }}>
        <h5>Quản trị Companion</h5>

        <div className="nav flex-column">
          <a className="nav-link text-white">Dashboard</a>
          <a className="nav-link text-white">Users</a>
          <a className="nav-link text-white">Moderation</a>
          <a className="nav-link text-white active">Transactions</a>
          <a className="nav-link text-white">Tracking</a>
          <a className="nav-link text-white">Disputes</a>
          <a className="nav-link text-white">Notifications</a>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-grow-1">
        {/* Topbar */}
        <div className="bg-light p-3 d-flex justify-content-between">
          <div>
            <h4>Giao dịch & dòng tiền</h4>
            <small className="text-muted">Hoa hồng và lệnh rút tiền</small>
          </div>

          <button className="btn btn-outline-danger btn-sm">Đăng xuất</button>
        </div>

        {/* Content */}
        <div className="p-3">
          {/* Commission */}
          <div className="card mb-3">
            <div className="card-header">Tỷ lệ hoa hồng</div>

            <div className="card-body">
              <form className="row g-2" onSubmit={handleSaveCommission}>
                <div className="col-md-4">
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="1"
                    className="form-control"
                    value={commission}
                    onChange={(e) => setCommission(e.target.value)}
                  />
                </div>

                <div className="col-md-2">
                  <button className="btn btn-primary w-100">Lưu</button>
                </div>
              </form>
            </div>
          </div>

          {/* Withdrawals */}
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <span>Lệnh rút tiền</span>
              <button className="btn btn-sm btn-primary">Reload</button>
            </div>

            <div className="card-body">
              {/* Search */}
              <div className="input-group mb-3">
                <input
                  className="form-control"
                  placeholder="Nhập ID..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button className="btn btn-outline-primary">Tìm</button>
              </div>

              {/* Table */}
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Companion</th>
                    <th>Bank</th>
                    <th>STK</th>
                    <th>Thu nhập</th>
                    <th>Hoa hồng</th>
                    <th>Nhận</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {filtered.map((w) => (
                    <tr key={w.id}>
                      <td>{w.id}</td>
                      <td>{w.companion}</td>
                      <td>{w.bank}</td>
                      <td>{w.account}</td>
                      <td>{w.amount}</td>
                      <td>{w.commission}</td>
                      <td>{w.receive}</td>
                      <td>
                        <span className="badge bg-warning">{w.status}</span>
                      </td>
                      <td>
                        <button className="btn btn-success btn-sm me-2" onClick={() => handleApprove(w.id)}>
                          Duyệt
                        </button>
                        <button className="btn btn-danger btn-sm" onClick={() => handleReject(w.id)}>
                          Từ chối
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filtered.length === 0 && <div className="text-center text-muted">Không có dữ liệu</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
