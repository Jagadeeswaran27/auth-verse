import axios from 'axios';
import { LoginFormData, SignupFormData } from '../../types/auth';
import { User } from '../../types/user';

const SERVER_URL = import.meta.env.VITE_BACKEND_URL;

export type LoginResponse = {
  token: string;
  user: User;
};

export type SignupResponse = {
  success: boolean;
};

export const signup = async (formData: SignupFormData): Promise<boolean> => {
  try {
    const { data }: { data: SignupResponse } = await axios.post(
      `${SERVER_URL}/jwt-auth/signup`,
      {
        email: formData.email,
        name: formData.name,
        password: formData.password,
      }
    );
    console.log(data);
    return data.success;
  } catch (error: any) {
    console.error(error);
    return false;
  }
};

export const login = async (formData: LoginFormData): Promise<User | null> => {
  console.log('Logging in with:', formData);
  try {
    const { data }: { data: LoginResponse } = await axios.post(
      `${SERVER_URL}/jwt-auth/login`,
      {
        email: formData.email,
        password: formData.password,
      }
    );
    console.log(data);
    localStorage.setItem('token', data.token);
    return data.user;
  } catch (error: any) {
    if (error.response?.status === 401) {
      console.error('Invalid credentials:', error.response.data.error);
    } else {
      console.error('Login error:', error);
    }
    return null;
  }
};

export const googleLogin = () => {
  window.open(`${SERVER_URL}/jwt-auth/google`, '_self');
};
