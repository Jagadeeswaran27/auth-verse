import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { ROUTES } from './config/routes';
import ServerSessionPage from './pages/ServerSessionPage';

export function App() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<HomePage />} />
      <Route path={ROUTES.serverSession} element={<ServerSessionPage />} />
    </Routes>
  );
}

export default App;
