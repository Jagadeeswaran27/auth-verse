import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';
import authRoutes from './routes/auth';
import './config/passport';

dotenv.config();

const app = express();
const PORT = 3000;

const SESSION_SECRET = process.env.SESSION_SECRET;

if (!SESSION_SECRET) {
  throw new Error('SESSION_SECRET is not set');
}

app.use(express.json());
app.use(
  cors({
    origin: [
      process.env.CLIENT_URL || 'http://localhost:5173',
      'http://localhost:5173',
      'http://localhost:3000',
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  })
);

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);

app.get('/api/session-info', (req, res) => {
  console.log(req.session.user, req.sessionID);
  res.json({
    sessionID: req.sessionID,
    user: req.user || req.session.user || null,
    isAuthenticated: !!req.user || !!req.session.user,
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
