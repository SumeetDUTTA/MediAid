import express from 'express';
import { getDoctors, addDoctor } from '../controllers/doctorController.js';

const doctorRoutes = () => {
  const router = express.Router();

  router.get('/doctors', getDoctors);
  router.post('/doctors', addDoctor);

  return router;
}

export default doctorRoutes;