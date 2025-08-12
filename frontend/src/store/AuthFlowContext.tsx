import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthFlowContextType {
  startFlow: boolean;
  seconds: number | 'auto';
  setStartFlow: (value: boolean) => void;
  setSeconds: (value: number | 'auto') => void;
}

const AuthFlowContext = createContext<AuthFlowContextType | undefined>(
  undefined
);

interface AuthFlowProviderProps {
  children: ReactNode;
}

export const AuthFlowProvider: React.FC<AuthFlowProviderProps> = ({
  children,
}) => {
  const [startFlow, setStartFlow] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number | 'auto'>('auto');

  return (
    <AuthFlowContext.Provider
      value={{ startFlow, setStartFlow, seconds, setSeconds }}
    >
      {children}
    </AuthFlowContext.Provider>
  );
};

export const useAuthFlowContext = () => {
  const context = useContext(AuthFlowContext);
  if (context === undefined) {
    throw new Error(
      'useAuthFlowContext must be used within a AuthFlowProvider'
    );
  }
  return context;
};

export default AuthFlowProvider;
