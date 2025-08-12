import { User } from '../../types/user';

interface UserStatusCardProps {
  user: User | null;
}
const UserStatusCard = (props: UserStatusCardProps) => {
  const { user } = props;
  return (
    <div className="flex flex-col relative">
      <div className=" backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl h-full">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-white">
            Authentication Status
          </h2>
          <div
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              user
                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                : 'bg-red-500/20 text-red-400 border border-red-500/30'
            }`}
          >
            {user ? '🟢 Authenticated' : '🔴 Not Authenticated'}
          </div>
        </div>
        {user ? (
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6 lg:absolute top-1/2 left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 w-[90%]">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                {user.name?.charAt(0).toUpperCase()}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {user.name}
                </h3>
                <p className="text-gray-400">{user.email}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="lg:absolute top-1/2 left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 w-full text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-700/50 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <p className="text-gray-400">Please authenticate to continue</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserStatusCard;
