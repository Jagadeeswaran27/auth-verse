import { Router } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../db/user';

dotenv.config();

const router = Router();

router.use((req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  console.log('Token received:', token);
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = decoded as Omit<User, 'password'>;
    return next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: 'Unauthorized' });
  }
});

export default router;
