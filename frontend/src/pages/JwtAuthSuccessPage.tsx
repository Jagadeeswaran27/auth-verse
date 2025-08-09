import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ROUTES } from '../config/routes';

const JwtAuthSuccessPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get('token');

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
      navigate(ROUTES.jwtAuth);
    }
  }, [token, navigate]);

  return <div>Loading...</div>;
};

export default JwtAuthSuccessPage;
