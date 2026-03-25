// realtimeBroadcastService.js
import { Server } from 'socket.io';

let io;

/**
 * Khởi tạo Socket.IO server. Gọi khi server HTTP đã sẵn sàng.
 * @param {import('http').Server} server
 */
export function initRealtime(server) {
  io = new Server(server, {
    cors: {
      origin: '*', // giới hạn domain nếu cần
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);

    socket.on('disconnect', () => {
      console.log('Client disconnected:', socket.id);
    });
  });

  return io;
}

/**
 * Gửi chat message đến tất cả client đang nghe booking cụ thể
 * @param {Object} msg - object ChatMessage, đã populate booking và sender
 */
export function publishChatMessage(msg) {
  if (!io) return;
  const payload = {
    id: msg._id,
    bookingId: msg.booking._id,
    senderId: msg.sender._id,
    senderUsername: msg.sender.username,
    content: msg.content,
    createdAt: msg.createdAt ? msg.createdAt.toISOString() : null,
  };
  io.to(`booking_${msg.booking._id}`).emit('chat_message', payload);
}

/**
 * Gửi notification đến user cụ thể
 * @param {Object} n - object Notification, đã populate user
 */
export function publishNotification(n) {
  if (!io) return;
  const payload = {
    id: n._id,
    title: n.title,
    content: n.content,
    isRead: Boolean(n.isRead),
    createdAt: n.createdAt ? n.createdAt.toISOString() : null,
  };
  io.to(`user_${n.user._id}`).emit('notification', payload);
}

/**
 * Đồng bộ vị trí realtime giữa khách và companion (cùng booking)
 * @param {String|ObjectId} bookingId
 * @param {Object} payload
 */
export function publishBookingLiveLocation(bookingId, payload) {
  if (!io) return;
  io.to(`booking_${bookingId}`).emit('booking_live_location', payload);
}
