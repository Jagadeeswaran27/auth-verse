import 'express-session';
import { User } from '../db/user';

declare module 'express-session' {
  interface SessionData {
    user: User;
  }
}
