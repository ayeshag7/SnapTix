import errorMiddleware from '../middlewares/error.js';
import User from '../models/Users.js';
import bcrypt from "bcrypt";

import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import { successResponse } from '../middlewares/apiResonse.js';


const privateKey = "faisal"

const signupController = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Some Fields are Missing' });
  }
  const userExist = await User.findOne({ email });
  if (userExist) {
    return res.status(400).json({ message: 'User Already Exist' });
  }

  bcrypt.hash(password, 10, function (err, hash) {
    // Store hash in your password DB.
    const newUser = new User({name: name, email: email, password: hash})
    newUser.save();
  });


  return next(successResponse(res, "User Added Successfully"))
  // return res.status(201).json({message: "User Added Successfully!"})
//   next(errorMiddleware({status: 201, message: "Signed Up", description: "User Signed Up Successfully"}))

};

const loginController = async (req, res, next) =>{
  const { email, password } = req.body;
  if (!password || !email) {
    res.status(400).json({ message: 'username or Email is missing!' });
  }

  const userExist = await User.findOne({ email });
  if (!userExist) {
    res.status(404).json({ message: 'User Not Fount!' });
  }

  // Load hash from your password DB.
  const isValid = await bcrypt.compare(password, userExist.password);
  if (!isValid){
    res.status(401).json({message: "Invalid Credentials"})
  }

  var token = jwt.sign({ email: email }, privateKey);
  res.cookie('authToken', token)
  
  return res.status(201).json({token})

}

const logoutController = async (req, res, next) =>{
  res.cookie('authToken', null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  return successResponse(res, "Logged out successfully")
}


export { signupController, loginController, logoutController };