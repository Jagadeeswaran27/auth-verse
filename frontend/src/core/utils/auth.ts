import { FormInputFields } from '../../types/auth';

export const loginInputFields: FormInputFields[] = [
  {
    id: 'email',
    label: 'Email',
    name: 'email',
    type: 'email',
  },
  {
    id: 'password',
    label: 'Password',
    name: 'password',
    type: 'password',
  },
];
export const signupInputFields: FormInputFields[] = [
  {
    id: 'name',
    label: 'Name',
    name: 'name',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Email',
    name: 'email',
    type: 'email',
  },
  {
    id: 'password',
    label: 'Password',
    name: 'password',
    type: 'password',
  },
];
