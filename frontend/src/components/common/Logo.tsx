const Logo = () => {
  return (
    <div className="relative w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-2xl shadow-cyan-500/30 border border-cyan-300/30 bg-black/50">
      <svg viewBox="0 0 100 100" className="w-10 h-10">
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="#67e8f9"
          strokeOpacity="0.35"
          strokeWidth="2"
        />
        <g
          className="animate-spin"
          style={{
            transformOrigin: '50px 50px',
            animationDuration: '8s',
          }}
        >
          {[...Array(6)].map((_, i) => (
            <rect
              key={i}
              x="48"
              y="14"
              width="4"
              height="12"
              rx="1"
              fill="#a5f3fc"
              opacity="0.8"
              transform={`rotate(${i * 60} 50 50)`}
            />
          ))}
          <circle
            cx="50"
            cy="50"
            r="22"
            fill="none"
            stroke="#22d3ee"
            strokeOpacity="0.6"
            strokeWidth="2"
          />
        </g>
        <circle cx="50" cy="50" r="8" fill="#67e8f9" opacity="0.8" />
      </svg>
      <div className="absolute inset-0 rounded-full blur-md bg-cyan-400/20 animate-pulse"></div>
    </div>
  );
};

export default Logo;
