import { User } from '../../types/user';
import { formKey } from '../../types/auth';
import { googleLogin, login } from '../../core/services/jwtAuthService';
import DynamicFormBuilder from '../auth/DynamicFormBuilder';
import { loginInputFields } from '../../core/utils/auth';

interface LoginFormProps {
  setUser: (user: User | null) => void;
  toggleMode: () => void;
}

const LoginForm = (props: LoginFormProps) => {
  const { setUser, toggleMode } = props;

  const handleGoogle = () => {
    googleLogin();
  };

  const handleLogin = async (
    formData: Record<formKey, string>
  ): Promise<boolean> => {
    const response = await login(formData);
    if (response) {
      setUser(response);
      return true;
    } else {
      return false;
    }
  };

  return (
    <DynamicFormBuilder
      fields={loginInputFields}
      formType="login"
      onGoogleLogin={handleGoogle}
      onSubmit={handleLogin}
      toggleMode={toggleMode}
    />
  );
};

export default LoginForm;
