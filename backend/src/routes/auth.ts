import dotenv from 'dotenv';
import { Router } from 'express';
import passport from 'passport';
import { User, users } from '../db/user';
import { v4 as uuidv4 } from 'uuid';

dotenv.config();

const router = Router();

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: `${process.env.CLIENT_URL}/login/failed`,
    successRedirect: `${process.env.CLIENT_URL}/`,
  })
);

router.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  // validation -> emial, pass length
  const user: User = {
    id: uuidv4(),
    name,
    email,
    password,
  };

  users.push(user);
  // save to db
  res.json({ success: true });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find((user) => user.email === email);
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  if (user.password !== password) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  // all success

  req.session.user = user;
  return res.json({ isAuthenticated: true, user, sessionId: req.sessionID });
});

router.get('/logout', (req, res, next) => {
  console.log('logout');
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      res.clearCookie('connect.sid');
      res.status(200).json({
        message: 'Logged out successfully',
        redirectUrl: `${process.env.CLIENT_URL}/login`,
      });
    });
  });
});

export default router;
