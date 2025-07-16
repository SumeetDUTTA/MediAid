import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
    name: String,
    specialization: String,
    location: String,
    contact: String,
    availableSlots: [String],
});

export default mongoose.model('Doctor', doctorSchema);