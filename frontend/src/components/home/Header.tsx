import Logo from '../common/Logo';

const Header = () => {
  return (
    <header className="relative z-10 bg-black/40 backdrop-blur-xl shadow-2xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo />
            <h1 className="text-3xl font-black bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              AuthVerse
            </h1>
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
