import axios from 'axios';
import { useEffect, useState } from 'react';
import { User } from '../types/user';
import SignupForm from '../components/jwt/SignupForm';
import LoginForm from '../components/jwt/LoginForm';
import JwtHero from '../components/jwt/JwtHero';
import UserStatusCard from '../components/jwt/UserStatusCard';
import UserDetailsCard from '../components/jwt/UserDetailsCard';
import FormCardHeader from '../components/jwt/FormCardHeader';
import TimingSelector from '../components/jwt/TimingSelector';

const SERVER_URL = import.meta.env.VITE_BACKEND_URL;

const JwtAuthPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isSignupMode, setIsSignupMode] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const toggleMode = () => {
    setIsSignupMode(!isSignupMode);
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

  return (
    <div className="pt-32 px-4 sm:px-6 lg:px-8">
      <JwtHero />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
        <UserStatusCard user={user} />

        {!user ? (
          <div className="flex flex-col">
            {/* Timing Selector above the form */}
            <TimingSelector />

            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl h-full">
              <FormCardHeader isSignupMode={isSignupMode} />

              {isSignupMode ? (
                <SignupForm
                  setIsSignupMode={setIsSignupMode}
                  toggleMode={toggleMode}
                />
              ) : (
                <LoginForm setUser={setUser} toggleMode={toggleMode} />
              )}
            </div>
          </div>
        ) : (
          <UserDetailsCard logout={handleLogout} user={user} />
        )}
      </div>

      {/* ReactFlow Demo Section */}
    </div>
  );
};

export default JwtAuthPage;
