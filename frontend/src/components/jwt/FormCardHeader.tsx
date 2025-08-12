interface FormCardHeaderProps {
  isSignupMode: boolean;
}
const FormCardHeader = (props: FormCardHeaderProps) => {
  const { isSignupMode } = props;
  return (
    <div className="text-center mb-8">
      <h2 className="text-2xl font-semibold text-white mb-2">
        {isSignupMode ? 'Create Account' : 'Welcome Back'}
      </h2>
      <p className="text-gray-400">
        {isSignupMode ? 'Sign up to get started' : 'Sign in to your account'}
      </p>
    </div>
  );
};

export default FormCardHeader;
