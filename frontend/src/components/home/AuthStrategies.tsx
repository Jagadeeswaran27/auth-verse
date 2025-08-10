import { Link } from 'react-router-dom';
import { authStrategies } from '../../utils/authStrategies';

const AuthStrategies = () => {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {authStrategies.map((strategy) => (
          <div key={strategy.id} className="group relative">
            <div
              className={`relative bg-white/5 backdrop-blur-sm rounded-lg shadow-xl border border-white/10 group-hover:border-${strategy.colors.accent}/30 transition-all duration-300 transform group-hover:scale-[1.02] overflow-hidden`}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`relative w-12 h-12 bg-gradient-to-br ${strategy.icon.colorClass} rounded-lg flex items-center justify-center shadow-lg`}
                  >
                    <svg
                      className="w-6 h-6 text-white"
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
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${strategy.badge.colorClass} border`}
                  >
                    {strategy.badge.text}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {strategy.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {strategy.description}
                </p>

                <div className="space-y-3 mb-8">
                  {strategy.features.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div
                        className={`w-1.5 h-1.5 bg-${strategy.colors.accent} rounded-full mt-2 mr-3 flex-shrink-0`}
                      ></div>
                      <div>
                        <span className="text-white font-medium">
                          {item.feature}
                        </span>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  to={strategy.route}
                  className={`group/btn relative w-full bg-${strategy.colors.primary} hover:bg-${strategy.colors.secondary} text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 inline-block text-center border border-${strategy.colors.secondary}/20 hover:border-${strategy.colors.accent}/40`}
                >
                  <span className="relative z-10">Explore Implementation</span>
                </Link>
              </div>

              <div
                className={`absolute inset-0 bg-gradient-to-br ${strategy.colors.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AuthStrategies;
