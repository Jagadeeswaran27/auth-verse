import { useAuthFlowContext } from '../../store/AuthFlowContext';
import { User } from '../../types/user';

interface UserDetailsCardProps {
  user: User | null;
  logout: () => void;
}

const UserDetailsCard = (props: UserDetailsCardProps) => {
  const { user, logout } = props;
  const { setStartFlow } = useAuthFlowContext();

  const handleLogout = () => {
    logout();
    setStartFlow(false);
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Welcome back!
          </h3>
          <p className="text-gray-400 text-sm">
            You are successfully authenticated
          </p>
        </div>

        <div className="space-y-4 mb-6">
          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Status</span>
              <span className="text-green-400 text-sm font-medium flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                Authenticated
              </span>
            </div>
          </div>

          {user?.email && (
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Email</span>
                <span className="text-white text-sm font-medium">
                  {user.email}
                </span>
              </div>
            </div>
          )}
        </div>

        <button
          onClick={handleLogout}
          className="w-full py-3 px-4 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-red-500/50 shadow-lg"
        >
          <span className="flex items-center justify-center">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Sign Out
          </span>
        </button>
      </div>
    </div>
  );
};

export default UserDetailsCard;
