const ArcReactorGlow = () => {
  return (
    <div className="absolute top-[360px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[38rem] h-[38rem] opacity-[0.12]">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <radialGradient id="reactorGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#22d3ee" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="90" fill="url(#reactorGlow)" />
        <g
          className="animate-spin"
          style={{
            transformOrigin: '100px 100px',
            animationDuration: '20s',
          }}
        >
          <circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            stroke="#67e8f9"
            strokeOpacity="0.4"
            strokeWidth="2"
          />
          <circle
            cx="100"
            cy="100"
            r="50"
            fill="none"
            stroke="#22d3ee"
            strokeOpacity="0.35"
            strokeWidth="2"
          />
          <circle
            cx="100"
            cy="100"
            r="30"
            fill="none"
            stroke="#93c5fd"
            strokeOpacity="0.3"
            strokeWidth="2"
          />
          {[...Array(6)].map((_, i) => (
            <rect
              key={i}
              x="96"
              y="16"
              width="8"
              height="18"
              rx="2"
              fill="#7dd3fc"
              opacity="0.6"
              transform={`rotate(${i * 60} 100 100)`}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default ArcReactorGlow;
