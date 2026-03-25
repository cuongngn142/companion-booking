import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function CompanionChat() {
  const [threads, setThreads] = useState([]);
  const [selectedThread, setSelectedThread] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    // mock threads
    setThreads([
      { id: 1, name: 'Nguyễn A', bookingId: 101 },
      { id: 2, name: 'Trần B', bookingId: 102 },
    ]);
  }, []);

  const handleSelectThread = (thread) => {
    setSelectedThread(thread);

    // mock messages
    setMessages([
      { id: 1, sender: 'user', content: 'Chào bạn' },
      { id: 2, sender: 'me', content: 'Chào bạn, mình hỗ trợ gì?' },
    ]);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: 'me',
      content: input,
    };

    setMessages((prev) => [...prev, newMsg]);
    setInput('');
  };

  return (
    <div className="bg-light min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/companion">
            <i className="bi bi-stars me-2"></i>Companion Center
          </Link>

          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/companion">
              Tổng quan
            </Link>
            <Link className="nav-link" to="/companion/profile">
              Hồ sơ
            </Link>
            <Link className="nav-link" to="/companion/operations">
              Lịch & Dịch vụ
            </Link>
            <Link className="nav-link" to="/companion/bookings">
              Đơn hàng
            </Link>
            <Link className="nav-link" to="/companion/finance">
              Tài chính
            </Link>
            <Link className="nav-link active" to="/companion/chat">
              Chat/Call
            </Link>
            <Link className="nav-link" to="/companion/notifications">
              Thông báo
            </Link>
          </div>
        </div>
      </nav>

      <main className="container py-4">
        <div className="card shadow-sm">
          <div className="card-body p-4">
            <div className="d-flex justify-content-between mb-4">
              <div>
                <h1 className="h4 fw-bold">
                  <i className="bi bi-chat-dots-fill me-2"></i>
                  Chat/Call
                </h1>
                <p className="text-muted">Nhắn tin theo từng booking</p>
              </div>
            </div>

            <div className="row g-3">
              {/* THREAD LIST */}
              <div className="col-lg-4">
                <div className="border rounded bg-white">
                  <div className="p-3 border-bottom fw-semibold bg-light">Danh sách chat</div>

                  <div style={{ maxHeight: 420, overflow: 'auto' }}>
                    {threads.map((t) => (
                      <div
                        key={t.id}
                        className={`p-3 border-bottom cursor-pointer ${selectedThread?.id === t.id ? 'bg-light' : ''}`}
                        onClick={() => handleSelectThread(t)}
                        style={{ cursor: 'pointer' }}
                      >
                        <div className="fw-semibold">{t.name}</div>
                        <small className="text-muted">Booking #{t.bookingId}</small>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CHAT AREA */}
              <div className="col-lg-8">
                <div className="d-flex justify-content-between mb-2">
                  <div>
                    <div className="fw-semibold">{selectedThread ? selectedThread.name : 'Chưa chọn'}</div>
                    <small className="text-muted">Booking ID: {selectedThread?.bookingId || '-'}</small>
                  </div>

                  <button className="btn btn-outline-success btn-sm">
                    <i className="bi bi-telephone-fill me-1"></i>
                    Call
                  </button>
                </div>

                {/* Call Info */}
                <div className="mb-3 small text-muted">(Call info sẽ load từ API/WebRTC)</div>

                {/* Live Location */}
                <div className="border rounded p-3 mb-3 bg-white small">
                  <div className="fw-semibold text-primary mb-2">Vị trí realtime</div>
                  <div className="text-muted">(Map sẽ tích hợp sau)</div>
                </div>

                {/* Chat list */}
                <div
                  className="border rounded p-3 mb-3 bg-white"
                  style={{
                    height: 340,
                    overflow: 'auto',
                  }}
                >
                  {messages.map((m) => (
                    <div
                      key={m.id}
                      className={`mb-2 d-flex ${m.sender === 'me' ? 'justify-content-end' : 'justify-content-start'}`}
                    >
                      <div
                        className={`p-2 rounded ${m.sender === 'me' ? 'bg-primary text-white' : 'bg-light'}`}
                        style={{ maxWidth: '70%' }}
                      >
                        {m.content}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input */}
                <form className="input-group" onSubmit={handleSend}>
                  <input
                    className="form-control"
                    placeholder="Nhập tin nhắn..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                  <button className="btn btn-primary">
                    <i className="bi bi-send-fill"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
