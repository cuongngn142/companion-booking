import { useEffect, useState } from 'react';
import Navbar from "../../components/Navbar";
export default function Chat() {
  const [threads, setThreads] = useState([]);
  const [currentThread, setCurrentThread] = useState(null);
  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState('');
  const [callInfo, setCallInfo] = useState('');
  const [location, setLocation] = useState(null);

  // giả lập load danh sách chat
  useEffect(() => {
    setThreads([
      { id: 1, name: 'Companion A', bookingId: 'BK001' },
      { id: 2, name: 'Companion B', bookingId: 'BK002' },
    ]);
  }, []);

  // load message khi chọn thread
  useEffect(() => {
    if (!currentThread) return;

    // fake API
    setMessages([
      { id: 1, sender: 'me', text: 'Xin chào' },
      { id: 2, sender: 'other', text: 'Chào bạn' },
    ]);

    // giả lập vị trí realtime
    setLocation({
      lat: 10.7769,
      lng: 106.7009,
    });
  }, [currentThread]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: 'me',
      text: content,
    };

    setMessages([...messages, newMsg]);
    setContent('');
  };

  const handleCallInfo = () => {
    setCallInfo('Call ID: 123456 | Token: abcxyz');
  };

  return (
    <div className="bg-light min-vh-100">
      <Navbar />

      <main className="container py-4">
        <div className="card">
          <div className="card-body p-4">
            {/* Header */}
            <div className="d-flex align-items-center gap-3 mb-4">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: 48,
                  height: 48,
                  background: 'linear-gradient(135deg,#3b82f6,#6366f1)',
                }}
              >
                <i className="bi bi-chat-dots-fill text-white"></i>
              </div>
              <h1 className="h4 mb-0 fw-bold">Tin nhắn</h1>
            </div>

            <div className="row g-3">
              {/* LEFT: thread list */}
              <div className="col-lg-4">
                <div className="border rounded-3 bg-white overflow-hidden">
                  <div className="p-3 border-bottom fw-semibold bg-light">Danh sách trò chuyện</div>

                  <div style={{ maxHeight: 420, overflow: 'auto' }}>
                    {threads.map((t) => (
                      <div
                        key={t.id}
                        className={`list-group-item list-group-item-action ${
                          currentThread?.id === t.id ? 'bg-light' : ''
                        }`}
                        style={{ cursor: 'pointer' }}
                        onClick={() => setCurrentThread(t)}
                      >
                        <div className="fw-semibold">{t.name}</div>
                        <div className="small text-muted">Booking: {t.bookingId}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT: chat */}
              <div className="col-lg-8">
                <div className="d-flex justify-content-between mb-2">
                  <div>
                    <div className="fw-semibold">
                      {currentThread ? currentThread.name : 'Chưa chọn cuộc trò chuyện'}
                    </div>
                    <div className="text-muted small">Booking ID: {currentThread?.bookingId || '-'}</div>
                  </div>

                  <button className="btn btn-outline-success btn-sm" onClick={handleCallInfo}>
                    Lấy thông tin Call
                  </button>
                </div>

                {/* Call info */}
                {callInfo && <div className="alert alert-success mb-2">{callInfo}</div>}

                {/* Location */}
                <div className="border rounded-3 p-3 mb-3 bg-white small">
                  <div className="fw-semibold mb-2 text-primary">Vị trí realtime</div>

                  {!location ? (
                    <div className="text-muted">Chọn cuộc trò chuyện để xem vị trí</div>
                  ) : (
                    <div>
                      Lat: {location.lat} | Lng: {location.lng}
                      <div className="mt-2 border rounded" style={{ height: 200 }}>
                        {/* sau này gắn Google Map */}
                      </div>
                    </div>
                  )}
                </div>

                {/* Chat list */}
                <div
                  className="border rounded-3 p-3 mb-3"
                  style={{
                    height: 340,
                    overflow: 'auto',
                    background: 'linear-gradient(135deg,#f8fafc,#f1f5f9)',
                  }}
                >
                  {messages.map((m) => (
                    <div
                      key={m.id}
                      className={`mb-2 d-flex ${m.sender === 'me' ? 'justify-content-end' : 'justify-content-start'}`}
                    >
                      <div
                        className={`p-2 rounded ${m.sender === 'me' ? 'bg-primary text-white' : 'bg-white border'}`}
                        style={{ maxWidth: '70%' }}
                      >
                        {m.text}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input */}
                <form onSubmit={handleSend} className="input-group">
                  <input
                    className="form-control"
                    placeholder="Nhập tin nhắn..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                  <button className="btn btn-primary">Gửi</button>
                </form>
              </div>
            </div>

            <div className="mt-3"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
