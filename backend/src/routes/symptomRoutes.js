import express from 'express'
import { checkSymptom } from '../controllers/symptomsController.js';

const router = express.Router();

router.post('/', checkSymptom);

export default router;
