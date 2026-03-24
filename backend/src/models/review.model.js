import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    partner: { type: mongoose.Schema.Types.ObjectId, ref: 'Partner' },

    rating: Number,
    comment: String,
  },
  { timestamps: true }
);

const Review = mongoose.model('Review', reviewSchema);

export default Review;
