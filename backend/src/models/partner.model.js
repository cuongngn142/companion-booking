import mongoose from 'mongoose';

const partnerSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

    fullName: String,
    birthDate: Date,
    gender: String,
    phone: String,
    address: String,
    bio: String,

    avatar: String,

    skills: [{ type: ObjectId, ref: 'Category' }],
    pricePerHour: Number,
    pricePerDay: Number,

    rating: { type: Number, default: 0 },
    totalReviews: { type: Number, default: 0 },

    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending',
    },
  },
  { timestamps: true }
);

const Partner = mongoose.model('Partner', partnerSchema);

export default Partner;
