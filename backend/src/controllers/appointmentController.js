import Appointment from "../model/AppointmentDB.js";

export const bookAppointment = async (req, res) => {
    try {
        const newAppointment = new Appointment(req.body);
        await newAppointment.save();
        res.status(201).json({ message: "Appointment booked successfully", appointment: newAppointment });
    } catch (error) {
        res.status(500).json({ error: "Failed to book appointment" });
    }
}