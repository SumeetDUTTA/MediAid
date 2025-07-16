import express from 'express';
import { sendAlert } from '../controllers/alertController.js';

const alertRoutes = () => {
  const router = express.Router();

  router.post('/', sendAlert);

  return router;
}

export default alertRoutes;