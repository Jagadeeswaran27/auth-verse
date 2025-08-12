interface CustomInputFieldProps {
  label: string;
  name: string;
  type: 'text' | 'email' | 'password';
}

const CustomInputField = (props: CustomInputFieldProps) => {
  const { label, name, type } = props;
  return (
    <>
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
        placeholder={`Enter your ${label.toLowerCase()}`}
      />
    </>
  );
};

export default CustomInputField;
