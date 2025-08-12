import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { ROUTES } from './config/routes';
import ServerSessionPage from './pages/ServerSessionPage';
import JwtAuthPage from './pages/JwtAuthPage';
import JwtAuthSuccessPage from './pages/JwtAuthSuccessPage';
import RootPage from './pages/RootPage';
import ScrollToTop from './components/common/ScrollToTop';
import AuthFlowProvider from './store/AuthFlowContext';

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AuthFlowProvider>
        <Routes>
          <Route path={ROUTES.home} element={<RootPage />}>
            <Route path={ROUTES.home} element={<HomePage />} />
            <Route
              path={ROUTES.serverSession}
              element={<ServerSessionPage />}
            />
            <Route path={ROUTES.jwtAuth} element={<JwtAuthPage />} />
            <Route
              path={ROUTES.jwtAuthSuccess}
              element={<JwtAuthSuccessPage />}
            />
          </Route>
        </Routes>
      </AuthFlowProvider>
    </BrowserRouter>
  );
}

export default App;
