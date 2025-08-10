const SpaceElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Floating Stars */}
      <div className="absolute top-20 left-10 w-1 h-1 bg-white rounded-full animate-ping opacity-70"></div>
      <div className="absolute top-40 right-20 w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-60 left-1/3 w-1.5 h-1.5 bg-purple-300 rounded-full animate-bounce opacity-50"></div>
      <div className="absolute bottom-40 right-1/4 w-1 h-1 bg-cyan-300 rounded-full animate-ping opacity-80"></div>
      <div className="absolute bottom-60 left-20 w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-70"></div>

      {/* Cosmic Particles */}
      <div className="absolute top-32 right-40 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse opacity-40"></div>
      <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-bounce opacity-50"></div>
    </div>
  );
};

export default SpaceElements;
