const Footer = () => {
  return (
    <footer className="relative z-10 bg-black/60 backdrop-blur-xl border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <p className="text-gray-400 font-medium">
            Crafted for developers to master authentication patterns
          </p>
          <div className="mt-4 flex justify-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-150"></div>
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
