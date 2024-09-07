import cookieParser from 'cookie-parser';
import User from '../models/Users.js';
import jwt from 'jsonwebtoken';

const AuthonticateUser = async (req, res, next) => {
  const token = req.cookies.authToken;

  if (!token) {
    return res.status(401).json({ message: 'Token Expired' });
  }

  try {
    const decoded = jwt.verify(token, 'faisal');
    if (!decoded){
      return res.status(404).json({ message: 'Invalid Token' });
    }

    const email = decoded.email;
    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(404).json({ message: 'Invalid Token' });
    }

    req.user = userExist.email; // Pass the email to the next middleware or route handler
    next();
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: 'Invalid Token' });
  }
};

export default AuthonticateUser;
