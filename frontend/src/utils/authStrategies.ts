import { ROUTES } from '../config/routes';

interface AuthStrategy {
  id: string;
  title: string;
  description: string;
  badge: {
    text: string;
    colorClass: string;
  };
  icon: {
    path: string;
    colorClass: string;
  };
  features: Array<{
    feature: string;
    desc: string;
  }>;
  route: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    gradient: string;
  };
}

export const authStrategies: AuthStrategy[] = [
  {
    id: 'server-session',
    title: 'Server Session Authentication',
    description:
      'Traditional session-based authentication with server-side state management. Ideal for enterprise applications requiring strict security controls.',
    badge: {
      text: 'Enterprise Ready',
      colorClass: 'bg-green-100/10 text-green-400 border-green-400/20',
    },
    icon: {
      path: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      colorClass: 'from-green-500 to-green-600',
    },
    features: [
      {
        feature: 'HTTP-only Cookies',
        desc: 'Secure client-side storage',
      },
      {
        feature: 'Server-side Sessions',
        desc: 'Centralized state management',
      },
    ],
    route: ROUTES.serverSession,
    colors: {
      primary: 'green-600',
      secondary: 'green-500',
      accent: 'green-400',
      gradient: 'from-green-500/5',
    },
  },
  {
    id: 'jwt-auth',
    title: 'JWT Token Authentication',
    description:
      'Modern stateless authentication using JSON Web Tokens. Perfect for distributed systems and microservice architectures.',
    badge: {
      text: 'Scalable',
      colorClass: 'bg-blue-100/10 text-blue-400 border-blue-400/20',
    },
    icon: {
      path: 'M13 10V3L4 14h7v7l9-11h-7z',
      colorClass: 'from-blue-500 to-blue-600',
    },
    features: [
      {
        feature: 'Stateless Tokens',
        desc: 'No server-side storage required',
      },
      {
        feature: 'Local Storage',
        desc: 'Client-side token management',
      },
      {
        feature: 'API Friendly',
        desc: 'Ideal for REST/GraphQL APIs',
      },
    ],
    route: ROUTES.jwtAuth,
    colors: {
      primary: 'blue-600',
      secondary: 'blue-500',
      accent: 'blue-400',
      gradient: 'from-blue-500/5',
    },
  },
];
