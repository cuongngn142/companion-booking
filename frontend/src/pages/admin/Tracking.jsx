import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';

export default function AdminTracking() {
  const [bookings, setBookings] = useState([]);
  const [selected, setSelected] = useState(null);

  const mapRef = useRef(null);
  const leafletMap = useRef(null);

  // fake data
  useEffect(() => {
    setBookings([
      {
        id: 'B001',
        status: 'IN_PROGRESS',
        customer: 'User A',
        companion: 'Companion B',
        time: '10:00',
        location: 'Cafe ABC',
        customerPos: [10.776, 106.7],
        companionPos: [10.778, 106.702],
        meetingPoint: [10.777, 106.701],
      },
    ]);
  }, []);

  // init map
  useEffect(() => {
    if (!leafletMap.current) {
      leafletMap.current = L.map(mapRef.current).setView([10.776, 106.7], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(leafletMap.current);
    }
  }, []);

  // render markers khi chọn booking
  useEffect(() => {
    if (!selected || !leafletMap.current) return;

    const map = leafletMap.current;

    map.eachLayer((layer) => {
      if (layer instanceof L.Marker || layer instanceof L.Polyline) {
        map.removeLayer(layer);
      }
    });

    const customerMarker = L.marker(selected.customerPos).addTo(map);
    const companionMarker = L.marker(selected.companionPos).addTo(map);
    const meetingMarker = L.marker(selected.meetingPoint).addTo(map);

    const path = L.polyline([selected.customerPos, selected.meetingPoint, selected.companionPos], {
      color: 'orange',
    }).addTo(map);

    map.fitBounds(path.getBounds());
  }, [selected]);

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <aside className="bg-dark text-white p-3" style={{ width: 250 }}>
        <h5>Quản trị Companion</h5>

        <div className="nav flex-column">
          <a className="nav-link text-white">Dashboard</a>
          <a className="nav-link text-white">Users</a>
          <a className="nav-link text-white">Moderation</a>
          <a className="nav-link text-white">Transactions</a>
          <a className="nav-link text-white active">Tracking</a>
          <a className="nav-link text-white">Disputes</a>
          <a className="nav-link text-white">Notifications</a>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-grow-1">
        {/* Topbar */}
        <div className="bg-light p-3 d-flex justify-content-between">
          <div>
            <h4>Theo dõi đơn & GPS</h4>
            <small className="text-muted">Theo dõi vị trí realtime</small>
          </div>

          <button className="btn btn-outline-primary btn-sm">Tải lại</button>
        </div>

        {/* Content */}
        <div className="p-3">
          <div className="row">
            {/* Table */}
            <div className="col-lg-5">
              <div className="card">
                <div className="card-header">Đơn đang theo dõi</div>

                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Status</th>
                      <th>Khách</th>
                      <th>Companion</th>
                    </tr>
                  </thead>

                  <tbody>
                    {bookings.map((b) => (
                      <tr key={b.id} style={{ cursor: 'pointer' }} onClick={() => setSelected(b)}>
                        <td>{b.id}</td>
                        <td>{b.status}</td>
                        <td>{b.customer}</td>
                        <td>{b.companion}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Map */}
            <div className="col-lg-7">
              <div className="card">
                <div className="card-header">Bản đồ — {selected?.id || '---'}</div>

                <div className="card-body">
                  <div ref={mapRef} style={{ height: 400 }}></div>

                  <div className="mt-3 small text-muted">
                    {selected ? `Khách: ${selected.customer} | Companion: ${selected.companion}` : 'Chọn đơn để xem'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
