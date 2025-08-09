import axios from 'axios';
import { useEffect, useState } from 'react';
import { User } from '../types/user';

const SERVER_URL = import.meta.env.VITE_BACKEND_URL;

const JwtAuthPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const googleLogin = () => {
    window.open(`${SERVER_URL}/jwt-auth/google`, '_self');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  useEffect(() => {
    const getCurrentUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;
      const { data } = await axios.get(`${SERVER_URL}/jwt-auth/get-user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
      setUser(data.user);
    };
    getCurrentUser();
  }, []);

  const handleSignup = async () => {
    try {
      const { data } = await axios.post(`${SERVER_URL}/jwt-auth/signup`, {
        email: 'abc@gmail.com',
        name: 'User1',
        password: '12345',
      });
      console.log(data);
      if (data.success) {
        alert('signup successful');
        return;
      }
      alert('signup failed');
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async () => {
    try {
      const { data } = await axios.post(`${SERVER_URL}/jwt-auth/login`, {
        email: 'abc@gmail.com',
        password: '12345',
      });
      console.log(data);
      localStorage.setItem('token', data.token);
      setUser(data.user);
      alert('login successful');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div className="flex gap-2">
        <button onClick={googleLogin}>Google</button>
        <button onClick={handleLogout}>Logout</button>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleSignup}>Signup</button>
      </div>
      <div>{user ? user.name : 'No User'}</div>
      <div>{user ? 'Authenticated' : 'Not Authenticated'}</div>
    </div>
  );
};

export default JwtAuthPage;
