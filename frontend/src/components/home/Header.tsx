import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
import { ROUTES } from '../../config/routes';

const Header = () => {
  return (
    <header className="sticky top-0 left-0 z-50 bg-black/40 backdrop-blur-xl shadow-2xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo />
            <Link
              to={ROUTES.home}
              className="text-3xl font-black bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
            >
              AuthVerse
            </Link>
          </div>
          <div className="text-sm text-gray-300 font-medium tracking-wider uppercase">
            Authentication Playground
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
