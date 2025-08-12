const CustomDivider = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-white/10"></div>
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="px-2 bg-gray-900 text-gray-400 font-medium">or</span>
      </div>
    </div>
  );
};

export default CustomDivider;
