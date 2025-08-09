import dotenv from 'dotenv';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

dotenv.config();

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const SERVER_URL = process.env.SERVER_URL;

if (!CLIENT_ID || !CLIENT_SECRET || !SERVER_URL) {
  throw new Error('Missing environment variables');
}

passport.use(
  'google-session',
  new GoogleStrategy(
    {
      clientID: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      callbackURL: `${SERVER_URL}/session-auth/google/callback`,
      scope: ['profile', 'email'],
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('Google profile:', profile);
      return done(null, profile);
    }
  )
);
passport.use(
  'google-jwt',
  new GoogleStrategy(
    {
      clientID: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      callbackURL: `${SERVER_URL}/jwt-auth/google/callback`,
      scope: ['profile', 'email'],
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('Google profile:', profile);
      return done(null, profile);
    }
  )
);

passport.serializeUser((user: any, done) => {
  console.log('serializing the user', user);
  done(null, {
    id: user.id,
    name: user.displayName,
    email: user.emails[0].value,
  });
});

passport.deserializeUser((user: any, done) => {
  done(null, user);
});
