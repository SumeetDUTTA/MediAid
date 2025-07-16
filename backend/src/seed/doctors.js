import mongoose from "mongoose";
import dotenv from 'dotenv';
import Doctor from "../model/doctorsDB.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB connected');
        return seedDoctors();
    })
    .catch((error) => console.error('MongoDB connection error:', error));

const seedDoctors = async () => {
    try {
        await Doctor.deleteMany();
        const doctors = [
            {
                name: 'Dr. Arjun Singh',
                specialization: 'Cardiologist',
                location: 'Delhi',
                contact: '9876543210',
                availableSlots: ['10:00', '10:30', '11:00']
            },
            {
                name: 'Dr. Meera Patil',
                specialization: 'Dermatologist',
                location: 'Mumbai',
                contact: '9123456789',
                availableSlots: ['09:30', '10:00', '11:30']
            },
            {
                name: 'Dr. Rahul Verma',
                specialization: 'General Physician',
                location: 'Bangalore',
                contact: '9988776655',
                availableSlots: ['14:00', '14:30', '15:00']
            },
            {
                name: 'Dr. Ayesha Khan',
                specialization: 'Neurologist',
                location: 'Hyderabad',
                contact: '9345678901',
                availableSlots: ['13:00', '13:30', '14:30']
            }
        ];

        await Doctor.insertMany(doctors);
        console.log('Doctors seeded successfully');
        process.exit();
    } catch (error) {
        console.error('Error seeding doctors:', error);
        process.exit(1);
    }
}