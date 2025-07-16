import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import appointmentRoutes from './routes/appointmentRoutes.js';
import doctorRoutes from './routes/doctorRoutes.js';
import symptomRoutes from './routes/symptomRoutes.js';
import alertRoutes from './routes/alertRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
    res.send('MediAid API Running');
});

app.use('/api/symptoms', symptomRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/alerts', alertRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
