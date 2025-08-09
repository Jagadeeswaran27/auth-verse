import axios from 'axios';
import { useEffect, useState } from 'react';
import { User } from '../types/user';

const SERVER_URL = import.meta.env.VITE_BACKEND_URL;
interface Session {
  sessionId: string;
  user: User;
  isAuthenticated: boolean;
}
const ServerSessionPage = () => {
  const [session, setSession] = useState<Session | null>(null);
  useEffect(() => {
    const getSession = async () => {
      const { data } = await axios.get(
        `${SERVER_URL}/session-auth/get-session-info`,
        {
          withCredentials: true,
        }
      );
      console.log(data);
      setSession(data);
    };
    getSession();
  }, []);
  const googleLogin = () => {
    window.open(`${SERVER_URL}/session-auth/google`, '_self');
  };
  const logout = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/session-auth/logout`, {
        withCredentials: true,
      });
      console.log(response.data);
      setSession(null);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const signup = async () => {
    try {
      const { data } = await axios.post(
        `${SERVER_URL}/session-auth/signup`,
        {
          email: 'abc@gmail.com',
          name: 'User1',
          password: '12345',
        },
        {
          withCredentials: true,
        }
      );
      console.log(data);
      alert('signup successful');
    } catch (error) {
      console.error(error);
    }
  };

  const login = async () => {
    try {
      const { data } = await axios.post(
        `${SERVER_URL}/session-auth/login`,
        {
          email: 'abc@gmail.com',
          password: '12345',
        },
        {
          withCredentials: true,
        }
      );
      console.log(data);
      setSession(data);
      alert('login successful');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <ul className="flex gap-10">
        <button onClick={signup}>Signup</button>
        <button onClick={login}>Login</button>
        <button onClick={googleLogin}>Google</button>
        <button onClick={logout}>logout</button>
      </ul>
      <div>{session?.user?.name}</div>
      <div>
        {session?.isAuthenticated ? 'Authenticated' : 'Not Authenticated'}
      </div>
    </div>
  );
};

export default ServerSessionPage;
