import express from 'express';
import { publishEvent, updateEvent, deleteEvent } from '../controllers/Event.js';

import AuthonticateUser from '../middlewares/Auth.js';


const router = express.Router();

// Route for publishing a new event (Agent only)
router.post('/publish', publishEvent);

// Route for updating an event (Agent only)
router.put('/update/:id', updateEvent);

// Route for deleting an event (Agent only)
router.delete('/delete/:id', deleteEvent);

export default router;
