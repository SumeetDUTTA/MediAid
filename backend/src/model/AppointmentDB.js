import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    doctorId: {type: mongoose.Schema.Types.ObjectId, ref: 'Doctor'},
    userName: String,
    userContact: String,
    date: Date,
    time: String,
})

export default mongoose.model('Appointment', appointmentSchema);