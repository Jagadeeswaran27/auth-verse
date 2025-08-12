import { Outlet } from 'react-router-dom';
import ArcReactorGlow from '../components/home/ArcReactorGlow';
import Footer from '../components/home/Footer';
import Header from '../components/home/Header';
import SpaceElements from '../components/home/SpaceElements';
import AuthFlow from '../components/jwt/AuthFlow';

const RootPage = () => {
  return (
    <div className="min-h-screen bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20"></div>
      <SpaceElements />

      <ArcReactorGlow />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <Header />
      <Outlet />
      <AuthFlow />

      <Footer />
    </div>
  );
};

export default RootPage;
