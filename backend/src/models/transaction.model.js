import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema(
  {
    booking: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking' },

    amount: Number,

    method: String, // momo, vnpay...
    status: {
      type: String,
      enum: ['pending', 'paid', 'failed'],
    },
  },
  { timestamps: true }
);

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;
