import { Link } from 'react-router-dom';
import { authStrategies } from '../../core/utils/authStrategies';

const AuthStrategies = () => {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {authStrategies.map((strategy) => (
          <div key={strategy.id} className="group relative h-full">
            <div className="relative h-full min-h-[500px] bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 transition-all duration-500 transform overflow-hidden flex flex-col">
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500">
                <div className="absolute inset-[1px] rounded-xl bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80"></div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-blue-400/20 blur-sm"></div>
              </div>

              <div className="relative py-8 px-5 z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="relative w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-gray-600/50 group- transition-colors duration-300">
                    {/* Icon glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <svg
                      className="w-7 h-7 text-gray-300 group-hover:text-cyan-300 transition-colors duration-300 relative z-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={strategy.icon.path}
                      />
                    </svg>
                  </div>

                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-800/50 text-cyan-300 border border-gray-600/30 backdrop-blur-sm">
                    {strategy.badge.text}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-100 transition-colors duration-300">
                  {strategy.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {strategy.description}
                </p>

                <div className="space-y-3 mb-8 flex-grow">
                  {strategy.features.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-2 mr-3 flex-shrink-0 shadow-lg shadow-cyan-400/20"></div>
                      <div>
                        <span className="text-gray-100 font-medium group-hover:text-white transition-colors duration-300">
                          {item.feature}
                        </span>
                        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <Link
                    to={strategy.route}
                    className="group/btn relative w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 inline-block text-center border border-gray-600/50 overflow-hidden"
                  >
                    <span className="relative z-10 group-hover/btn:text-white transition-colors duration-300">
                      Explore Implementation
                    </span>
                  </Link>
                </div>
              </div>

              {/* Subtle particles effect */}
              <div className="absolute top-4 right-4 w-1 h-1 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
              <div
                className="absolute bottom-8 left-6 w-0.5 h-0.5 bg-purple-400 rounded-full opacity-40 animate-pulse"
                style={{ animationDelay: '1s' }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AuthStrategies;
