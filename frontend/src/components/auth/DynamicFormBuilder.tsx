import { useState } from 'react';
import { FormInputFields, formKey, formType } from '../../types/auth';
import CustomInputField from './CustomInputField';
import CustomDivider from './CustomDivider';
import GoogleIcon from '../common/GoogleIcon';
import { useAuthFlowContext } from '../../store/AuthFlowContext';

interface DynamicFormBuilderProps {
  fields: FormInputFields[];
  formType: formType;
  onSubmit: (formData: Record<formKey, string>) => Promise<boolean>;
  onGoogleLogin: () => void;
  toggleMode: () => void;
}

const DynamicFormBuilder = (props: DynamicFormBuilderProps) => {
  const { fields, formType, onSubmit, onGoogleLogin, toggleMode } = props;

  const initialErrorData = fields.reduce((acc, field) => {
    acc[field.name] = '';
    return acc;
  }, {} as Record<string, string>);

  const [errorData, setErrorData] = useState(initialErrorData);
  const [isLoading, setIsLoading] = useState(false);

  const { setStartFlow } = useAuthFlowContext();

  const validateForm = (formData: Record<string, string>) => {
    const newErrors: Record<string, string> = { ...initialErrorData };
    let isValid = true;

    fields.forEach((field) => {
      if (
        field.type === 'email' &&
        !/\S+@\S+\.\S+/.test(formData[field.name])
      ) {
        newErrors[field.name] = `${field.label} is invalid`;
        isValid = false;
      } else if (field.type === 'password' && formData[field.name].length < 5) {
        newErrors[field.name] = `${field.label} must be at least 5 characters`;
        isValid = false;
      } else if (!formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
        isValid = false;
      }
    });

    setErrorData(newErrors);
    return isValid;
  };

  const resetForm = () => {
    setErrorData(initialErrorData);
  };

  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const formDataObj: Record<string, string> = {};

    fields.forEach((field) => {
      formDataObj[field.name] = formData.get(field.name) as string;
    });

    if (!validateForm(formDataObj)) return;

    window.location.href = '#auth-flow';
    setStartFlow(true);
    setIsLoading(true);
    const response = await onSubmit(formDataObj);
    if (response) {
      resetForm();
      // alert(`${formType === 'login' ? 'Login' : 'Signup'} successful!`);
    } else {
      alert(
        `${
          formType === 'login' ? 'Login' : 'Signup'
        } failed! Invalid credentials or server error.`
      );
    }
    setIsLoading(false);
  };

  return (
    <form className="space-y-6" onSubmit={handleOnSubmit}>
      {fields.map((field) => (
        <div key={field.id}>
          <CustomInputField
            name={field.name}
            type={field.type}
            label={field.label}
          />
          {errorData[field.name] && (
            <div className="mt-1 text-sm text-red-400">
              {errorData[field.name]}
            </div>
          )}
        </div>
      ))}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500/50"
      >
        {formType === 'login' ? 'Login' : 'Sign Up'}
      </button>
      <CustomDivider />
      <button
        type="button"
        onClick={onGoogleLogin}
        disabled={isLoading}
        className="w-full py-3 px-4 bg-white hover:bg-gray-100 text-gray-800 font-medium rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/50 flex items-center justify-center space-x-2"
      >
        <GoogleIcon />
        <span>Continue with Google</span>
      </button>
      <div className="text-center">
        <button
          type="button"
          onClick={toggleMode}
          disabled={isLoading}
          className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200 hover:underline"
        >
          {formType === 'login'
            ? "Don't have an account? Sign Up"
            : 'Already have an account? Login'}
        </button>
      </div>
    </form>
  );
};

export default DynamicFormBuilder;
