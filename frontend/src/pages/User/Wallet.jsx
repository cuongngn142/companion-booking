import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
export default function Wallet() {
  const [balance, setBalance] = useState(0);

  const [form, setForm] = useState({
    depositAmount: '',
    provider: 'MOMO',
  });

  const [transactions, setTransactions] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  // load dữ liệu giả lập
  useEffect(() => {
    setTimeout(() => {
      setBalance(500000);

      setTransactions([
        {
          id: 1,
          time: '2026-03-20 10:00',
          type: 'DEPOSIT',
          provider: 'MOMO',
          content: 'Nạp tiền',
          amount: 200000,
        },
        {
          id: 2,
          time: '2026-03-21 14:30',
          type: 'PAYMENT',
          provider: '-',
          content: 'Thanh toán booking',
          amount: -150000,
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

  const formatMoney = (value) => {
    return Number(value).toLocaleString('vi-VN') + ' VND';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');

    const amount = Number(form.depositAmount);

    if (!amount || amount < 1000) {
      setMessage('Số tiền tối thiểu là 1,000');
      return;
    }

    // giả lập nạp tiền
    const newTransaction = {
      id: Date.now(),
      time: new Date().toLocaleString(),
      type: 'DEPOSIT',
      provider: form.provider,
      content: 'Nạp tiền',
      amount: amount,
    };

    setBalance(balance + amount);
    setTransactions([newTransaction, ...transactions]);

    setMessage('Nạp tiền thành công');

    setForm({
      depositAmount: '',
      provider: 'MOMO',
    });
  };

  return (
    <div className="bg-light min-vh-100">
      <Navbar />

      <main className="container py-4">
        <div className="row g-3">
          {/* LEFT - WALLET */}
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body p-4">
                {/* Balance */}
                <div className="d-flex gap-3 mb-3">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: 48,
                      height: 48,
                      background: 'linear-gradient(135deg,#10b981,#059669)',
                    }}
                  >
                    <i className="bi bi-wallet2 text-white"></i>
                  </div>

                  <div>
                    <h6 className="fw-bold mb-0">Số dư ví</h6>
                    <div className="h4 text-primary fw-bold">{formatMoney(balance)}</div>
                  </div>
                </div>

                <hr />

                {/* Deposit */}
                <h6 className="fw-bold mb-3">Nạp tiền</h6>

                <form onSubmit={handleSubmit} className="row g-2">
                  <div className="col-12">
                    <input
                      id="depositAmount"
                      type="number"
                      className="form-control"
                      placeholder="Nhập số tiền"
                      value={form.depositAmount}
                      onChange={handleChange}
                      min={1000}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <select id="provider" className="form-select" value={form.provider} onChange={handleChange}>
                      <option value="MOMO">MoMo</option>
                      <option value="VNPAY">VNPay</option>
                      <option value="BANK_TRANSFER">Chuyển khoản</option>
                    </select>
                  </div>

                  <div className="col-12 d-grid mt-2">
                    <button className="btn btn-primary">Nạp tiền</button>
                  </div>
                </form>

                {message && <div className="alert alert-info mt-3">{message}</div>}
              </div>
            </div>
          </div>

          {/* RIGHT - TRANSACTIONS */}
          <div className="col-lg-8">
            <div className="card">
              <div className="card-body p-4">
                <h2 className="h5 fw-bold mb-3">Lịch sử giao dịch</h2>

                {loading ? (
                  <div className="text-center py-4">
                    <div className="spinner-border text-primary"></div>
                  </div>
                ) : (
                  <div className="table-responsive">
                    <table className="table table-sm align-middle">
                      <thead>
                        <tr>
                          <th>Thời gian</th>
                          <th>Loại</th>
                          <th>Kênh</th>
                          <th>Nội dung</th>
                          <th>Số tiền</th>
                        </tr>
                      </thead>
                      <tbody>
                        {transactions.map((t) => (
                          <tr key={t.id}>
                            <td>{t.time}</td>
                            <td>{t.type}</td>
                            <td>{t.provider}</td>
                            <td>{t.content}</td>
                            <td className={t.amount > 0 ? 'text-success' : 'text-danger'}>{formatMoney(t.amount)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
