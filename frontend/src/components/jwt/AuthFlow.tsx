import { useAuthFlowContext } from '../../store/AuthFlowContext';
import ReactFlowExample from '../ReactFlowExaple';

const AuthFlow = () => {
  const { seconds } = useAuthFlowContext();
  return (
    <div id="auth-flow" className="max-w-6xl mx-auto mb-12">
      <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">
          Authentication Flow Visualization
          {seconds !== 'auto' && (
            <span className="text-blue-400 text-lg ml-2">
              ({seconds}s timing)
            </span>
          )}
        </h2>
        <div className="h-[500px] rounded-xl overflow-hidden border border-white/10">
          <ReactFlowExample />
        </div>
      </div>
    </div>
  );
};

export default AuthFlow;
