import express from 'express';
import { bookAppointment } from '../controllers/appointmentController.js';

const appointmentRoutes = () => {
  const router = express.Router();

  router.post('/', bookAppointment);

  return router;
}

export default appointmentRoutes;