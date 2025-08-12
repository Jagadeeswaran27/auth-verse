import { useAuthFlowContext } from '../../store/AuthFlowContext';

const TimingSelector = () => {
  const customOptions = [6, 8, 10];

  const { seconds, setSeconds } = useAuthFlowContext();

  const handleModeChange = (mode: 'auto' | 'custom') => {
    if (mode === 'auto') {
      setSeconds('auto');
    } else {
      setSeconds(4);
    }
  };

  const isCustomMode = seconds !== 'auto';

  return (
    <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 shadow-lg mb-4">
      <div className="flex items-center justify-between">
        <span className="text-white/80 text-sm font-medium">Flow Timing:</span>

        <div className="flex items-center space-x-3">
          {/* Mode Toggle - Compact */}
          <div className="bg-white/10 rounded-lg p-0.5 flex">
            <button
              onClick={() => handleModeChange('auto')}
              className={`px-2 py-1 text-xs rounded transition-all duration-200 ${
                !isCustomMode
                  ? 'bg-blue-500 text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Auto
            </button>
            <button
              onClick={() => handleModeChange('custom')}
              className={`px-2 py-1 text-xs rounded transition-all duration-200 ${
                isCustomMode
                  ? 'bg-blue-500 text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Custom
            </button>
          </div>

          {/* Custom Timeline - Horizontal */}
          {isCustomMode && (
            <div className="flex items-center space-x-2">
              {customOptions.map((s) => (
                <button
                  key={s}
                  onClick={() => setSeconds(s)}
                  className={`w-8 h-8 rounded-full text-xs font-semibold transition-all duration-200 ${
                    seconds === s
                      ? 'bg-blue-500 text-white shadow-md scale-110'
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white hover:scale-105'
                  }`}
                >
                  {s}
                </button>
              ))}
              <span className="text-white/60 text-xs ml-1">sec</span>
            </div>
          )}

          {!isCustomMode && (
            <span className="text-blue-400 text-xs">Optimal</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimingSelector;
