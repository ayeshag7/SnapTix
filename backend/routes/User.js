import {loginController, logoutController, signupController} from '../controllers/User.js';
import express from 'express';
const route = express.Router();

route.post('/new', signupController);
route.post('/login', loginController);
route.post('/logout', logoutController);

export default route;