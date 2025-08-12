import { googleLogin, signup } from '../../core/services/jwtAuthService';
import { signupInputFields } from '../../core/utils/auth';
import { formKey } from '../../types/auth';
import DynamicFormBuilder from '../auth/DynamicFormBuilder';

interface SignupFormProps {
  toggleMode: () => void;
  setIsSignupMode: (isSignupMode: boolean) => void;
}

const SignupForm = (props: SignupFormProps) => {
  const { toggleMode, setIsSignupMode } = props;

  const handleSignup = async (
    formData: Record<formKey, string>
  ): Promise<boolean> => {
    const response = await signup(formData);
    if (response) {
      setIsSignupMode(false);
    }
    return response;
  };

  const handleGoogle = () => {
    googleLogin();
  };
  return (
    <DynamicFormBuilder
      fields={signupInputFields}
      toggleMode={toggleMode}
      formType="signup"
      onGoogleLogin={handleGoogle}
      onSubmit={handleSignup}
    />
  );
};

export default SignupForm;
