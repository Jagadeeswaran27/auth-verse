import { Router } from 'express';
import dotenv from 'dotenv';
import { User, users } from '../db/user';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import jwtMiddleware from '../middlewares/jwtMiddleware';
import bcrypt from 'bcrypt';

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
  passport.authenticate('google-jwt', { scope: ['profile', 'email'] })
);

router.get(
  '/google/callback',
  passport.authenticate('google-jwt', {
    failureRedirect: `${process.env.CLIENT_URL}/login/failed`,
  }),
  (req, res) => {
    if (req.user) {
      const googleUser = req.user as GoogleUser;
      const user: Omit<User, 'password'> = {
        email: googleUser.emails[0].value,
        name: googleUser.displayName,
        id: googleUser.id,
      };
      const token = jwt.sign(
        { id: user.id, email: user.email, name: user.name },
        process.env.JWT_SECRET as string,
        { expiresIn: '1h' }
      );

      return res.redirect(
        `${process.env.CLIENT_URL}/jwt-auth/success?token=${token}`
      );
    }
    return res.redirect(`${process.env.CLIENT_URL}/login/failed`);
  }
);

router.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  const saltRounds = 12;
  const hashedPassword = bcrypt.hashSync(password, saltRounds);
  const user: User = {
    id: uuidv4(),
    name,
    email,
    password: hashedPassword,
  };

  users.push(user);
  res.json({ success: true });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const user = users.find((user) => user.email === email);
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });

  const isPasswordValid = await bcrypt.compareSync(password, user.password);
  if (!isPasswordValid)
    return res.status(401).json({ error: 'Invalid credentials' });

  const userData = { id: user.id, email: user.email, name: user.name };
  const token = jwt.sign(userData, process.env.JWT_SECRET as string, {
    expiresIn: '1h',
  });
  return res.json({ token, user: userData });
});

router.get('/get-user', jwtMiddleware, (req, res) => {
  const user = req.user as Omit<User, 'password'>;
  console.log('Current user:', user);
  return res.json({ user });
});
export default router;
