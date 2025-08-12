export type SignupFormData = LoginData & { name: string };

export type formKey = 'email' | 'password' | 'name';

export type formType = 'login' | 'signup' | 'contact-us';

export type LoginFormData = {
  email: string;
  password: string;
};

export type FormInputFields = {
  id: string;
  label: string;
  name: string;
  type: 'text' | 'email' | 'password';
};

export type ValidationRule = {
  required?: boolean;
  minLength?: number;
  pattern?: RegExp;
  message?: string;
};
