import dotenv from 'dotenv';
import { Router } from 'express';
import passport from 'passport';
import { User, users } from '../db/user';
import { v4 as uuidv4 } from 'uuid';

type GoogleUser = {
  displayName: string;
  id: string;
  emails: {
    value: string;
    verified: boolean;
  }[];
};

dotenv.config();

const router = Router();

router.get(
  '/google',
  passport.authenticate('google-session', { scope: ['profile', 'email'] })
);

router.get(
  '/google/callback',
  passport.authenticate('google-session', {
    failureRedirect: `${process.env.CLIENT_URL}/login/failed`,
  }),
  (req, res) => {
    if (req.user) {
      const googleUser = req.user as GoogleUser;
      req.session.isGoogle = true;
      const user: Omit<User, 'password'> = {
        email: googleUser.emails[0].value,
        name: googleUser.displayName,
        id: googleUser.id,
      };
      req.session.user = user;
    }
    res.redirect(`${process.env.CLIENT_URL}/server-session`);
  }
);

router.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  const user: User = {
    id: uuidv4(),
    name,
    email,
    password,
  };

  users.push(user);
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
  req.session.user = user;
  req.session.isGoogle = false;
  return res.json({ isAuthenticated: true, user, sessionId: req.sessionID });
});

router.get('/logout', (req, res, next) => {
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

router.get('/get-session-info', (req, res) => {
  console.log(req.session.user, req.sessionID);
  const isGoogle = req.session.isGoogle;
  let user: User | null = null;
  if (isGoogle) {
    user = req.session.user as User;
  } else {
    user = req.session.user as User;
  }
  res.json({
    sessionID: req.sessionID,
    user: user || null,
    isAuthenticated: !!req.session.user,
  });
});

export default router;
