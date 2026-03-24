import mongoose from 'mongoose';

const scheduleSchema = new mongoose.Schema({
  partner: { type: mongoose.Schema.Types.ObjectId, ref: 'Partner' },

  date: Date,
  isAvailable: Boolean,
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

export default Schedule;
