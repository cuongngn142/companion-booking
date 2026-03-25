import { useEffect, useState } from 'react';

export default function Finance() {
  const [stats, setStats] = useState({
    income: 0,
    available: 0,
    hold: 0,
    accepted: 0,
    completed: 0,
  });

  const [bank, setBank] = useState({
    bankName: '',
    accountNumber: '',
    accountHolder: '',
  });

  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [withdrawals, setWithdrawals] = useState([]);

  // giả lập API
  useEffect(() => {
    setStats({
      income: 5000000,
      available: 2000000,
      hold: 1000000,
      accepted: 12,
      completed: 30,
    });

    setWithdrawals([
      {
        id: 1,
        date: '2026-03-01',
        amount: 1000000,
        fee: 50000,
        received: 950000,
        bank: 'Vietcombank',
        status: 'PENDING',
      },
    ]);
  }, []);

  // handle bank form
  const handleBankSubmit = (e) => {
    e.preventDefault();

    console.log('Bank:', bank);
    // fetch POST /api/bank

    alert('Đã lưu tài khoản ngân hàng');
  };

  // handle withdraw
  const handleWithdraw = (e) => {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      date: new Date().toISOString().slice(0, 10),
      amount: withdrawAmount,
      fee: withdrawAmount * 0.05,
      received: withdrawAmount * 0.95,
      bank: bank.bankName,
      status: 'PENDING',
    };

    setWithdrawals([newItem, ...withdrawals]);
    setWithdrawAmount('');
  };

  return (
    <div className="container py-4">
      {/* Header */}
      <div className="mb-4">
        <h1 className="h3 fw-bold">Tài chính</h1>
        <p className="text-muted">Theo dõi thu nhập và rút tiền</p>
      </div>

      {/* Stats */}
      <section className="card shadow-sm mb-4">
        <div className="card-body p-4">
          <h2 className="h5 mb-3">Thống kê thu nhập</h2>

          <div className="row g-3 text-center">
            <div className="col-md-4">
              <div className="border p-3 rounded">
                Tổng thu nhập
                <br />
                {stats.income} ₫
              </div>
            </div>
            <div className="col-md-4">
              <div className="border p-3 rounded">
                Số dư
                <br />
                {stats.available} ₫
              </div>
            </div>
            <div className="col-md-4">
              <div className="border p-3 rounded">
                Hold
                <br />
                {stats.hold} ₫
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bank */}
      <section className="card shadow-sm mb-4">
        <div className="card-body p-4">
          <h2 className="h5 mb-3">Tài khoản ngân hàng</h2>

          <form onSubmit={handleBankSubmit} className="row g-3">
            <div className="col-md-4">
              <input
                className="form-control"
                placeholder="Ngân hàng"
                value={bank.bankName}
                onChange={(e) => setBank({ ...bank, bankName: e.target.value })}
              />
            </div>

            <div className="col-md-4">
              <input
                className="form-control"
                placeholder="Số tài khoản"
                value={bank.accountNumber}
                onChange={(e) => setBank({ ...bank, accountNumber: e.target.value })}
              />
            </div>

            <div className="col-md-4">
              <input
                className="form-control"
                placeholder="Chủ tài khoản"
                value={bank.accountHolder}
                onChange={(e) => setBank({ ...bank, accountHolder: e.target.value })}
              />
            </div>

            <div className="col-12">
              <button className="btn btn-primary">Lưu</button>
            </div>
          </form>
        </div>
      </section>

      {/* Withdraw */}
      <section className="card shadow-sm">
        <div className="card-body p-4">
          <h2 className="h5 mb-3">Rút tiền</h2>

          <form onSubmit={handleWithdraw} className="row g-3">
            <div className="col-md-4">
              <input
                type="number"
                className="form-control"
                placeholder="Số tiền"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(Number(e.target.value))}
              />
            </div>

            <div className="col-12">
              <button className="btn btn-success">Tạo lệnh rút tiền</button>
            </div>
          </form>

          {/* Table */}
          <div className="table-responsive mt-4">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Ngày</th>
                  <th>Số tiền</th>
                  <th>Phí</th>
                  <th>Nhận</th>
                  <th>Ngân hàng</th>
                  <th>Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {withdrawals.map((w) => (
                  <tr key={w.id}>
                    <td>{w.date}</td>
                    <td>{w.amount}</td>
                    <td>{w.fee}</td>
                    <td>{w.received}</td>
                    <td>{w.bank}</td>
                    <td>{w.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
