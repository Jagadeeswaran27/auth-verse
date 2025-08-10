const Hero = () => {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-semibold tracking-wide uppercase backdrop-blur-sm">
            Developer Tools
          </span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
          Explore Authentication
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl py-3">
            Strategies
          </span>
        </h2>
        <p className="mt-8 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed font-light">
          Master authentication patterns through hands-on experimentation.
          Compare JWT tokens with local storage against traditional server-side
          sessions in a real-world development environment.
        </p>

        {/* Floating Elements */}
        <div className="relative mt-12">
          <div className="absolute -top-4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute -top-8 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute top-4 right-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></div>

          {/* Additional Space Elements around Hero */}
          <div className="absolute -top-12 left-1/2 w-0.5 h-8 bg-gradient-to-b from-white to-transparent opacity-60 animate-pulse"></div>
          <div className="absolute top-8 left-1/6 w-1 h-1 bg-white rounded-full opacity-70 animate-ping"></div>
          <div className="absolute -top-6 right-1/6 w-2 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent opacity-50 animate-pulse"></div>

          {/* Constellation Pattern */}
          <svg
            className="absolute -top-16 left-1/3 w-20 h-20 opacity-20"
            viewBox="0 0 100 100"
          >
            <circle
              cx="20"
              cy="20"
              r="1"
              fill="white"
              className="animate-pulse"
            />
            <circle
              cx="80"
              cy="30"
              r="0.5"
              fill="blue"
              className="animate-ping"
            />
            <circle
              cx="50"
              cy="70"
              r="1.5"
              fill="purple"
              className="animate-bounce"
            />
            <line
              x1="20"
              y1="20"
              x2="80"
              y2="30"
              stroke="white"
              strokeWidth="0.5"
              opacity="0.3"
            />
            <line
              x1="80"
              y1="30"
              x2="50"
              y2="70"
              stroke="white"
              strokeWidth="0.5"
              opacity="0.3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
