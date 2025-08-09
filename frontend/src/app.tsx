import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { ROUTES } from './config/routes';
import ServerSessionPage from './pages/ServerSessionPage';
import JwtAuthPage from './pages/JwtAuthPage';
import JwtAuthSuccessPage from './pages/JwtAuthSuccessPage';

export function App() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<HomePage />} />
      <Route path={ROUTES.serverSession} element={<ServerSessionPage />} />
      <Route path={ROUTES.jwtAuth} element={<JwtAuthPage />} />
      <Route path={ROUTES.jwtAuthSuccess} element={<JwtAuthSuccessPage />} />
    </Routes>
  );
}

export default App;
