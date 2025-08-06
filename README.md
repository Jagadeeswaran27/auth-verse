# AuthVerse 🔐

<div align="center">

![Nx](https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png)

**A comprehensive authentication strategy visualization platform**

[![Nx](https://img.shields.io/badge/Nx-21.3.11-blue)](https://nx.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue)](https://reactjs.org/)
[![Express](https://img.shields.io/badge/Express-4.21.2-green)](https://expressjs.com/)

</div>

## 🚀 About AuthVerse

AuthVerse is an **Nx monorepo** that provides a comprehensive platform for users to explore, understand, and visualize different authentication strategies. Whether you're a developer learning about authentication, a security professional evaluating different approaches, or a team deciding on authentication implementation, AuthVerse offers interactive demonstrations and educational content.

### ✨ Key Features

- **Interactive Authentication Demonstrations** - See different auth strategies in action
- **Visual Flow Diagrams** - Understand the authentication process step-by-step
- **Code Examples** - Real implementation examples for each strategy
- **Security Analysis** - Compare strengths and weaknesses of different approaches
- **Educational Content** - Learn about authentication best practices

## 🏗️ Project Structure

This is an **Nx monorepo** with the following structure:

```
auth-verse/
├── frontend/          # React-based UI for auth strategy visualization
├── backend/           # Express.js API server
├── backend-e2e/       # End-to-end tests for backend
├── packages/          # Shared libraries and utilities
└── nx.json           # Nx workspace configuration
```

### Applications

- **Frontend** (`@auth-verse/frontend`) - React application with Tailwind CSS for the user interface
- **Backend** (`@auth-verse/backend`) - Express.js API server providing authentication endpoints

## 🛠️ Technology Stack

- **Monorepo Management**: [Nx](https://nx.dev) - Build system with first-class support for monorepos
- **Frontend**: React 19, TypeScript, Tailwind CSS, Vite
- **Backend**: Express.js, TypeScript, Node.js
- **Testing**: Vitest, Jest
- **Code Quality**: ESLint, Prettier

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd auth-verse
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development servers**

   **Frontend (React app):**

   ```bash
   npx nx serve frontend
   ```

   **Backend (Express API):**

   ```bash
   npx nx serve backend
   ```

   **Both simultaneously:**

   ```bash
   npx nx run-many --target=serve --projects=frontend,backend
   ```

## 📚 Available Authentication Strategies

AuthVerse covers various authentication approaches including:

- **OAuth** - Google
- **JWT (JSON Web Tokens)** - Stateless authentication
- **Session-based Authentication** - Traditional server-side sessions

## 🏗️ Development Commands

### Build Applications

```bash
# Build frontend
npx nx build frontend

# Build backend
npx nx build backend

# Build all
npx nx run-many --target=build --all
```

### Linting

```bash
# Lint frontend
npx nx lint frontend

# Lint backend
npx nx lint backend

# Lint all
npx nx run-many --target=lint --all
```

### Type Checking

```bash
npx nx run-many --target=typecheck --all
```

## 📦 Adding New Features

### Generate a new library

```bash
npx nx g @nx/js:lib packages/my-auth-strategy --publishable --importPath=@auth-verse/my-auth-strategy
```

### Generate a new component

```bash
npx nx g @nx/react:component my-component --project=frontend
```

## 🔧 Nx Workspace Features

- **Intelligent Caching** - Nx caches build artifacts for faster rebuilds
- **Affected Commands** - Only run tasks on affected projects
- **Project Graph** - Visualize dependencies with `npx nx graph`
- **Code Generation** - Scaffold new features with Nx generators

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Useful Links

- [Nx Documentation](https://nx.dev)
- [React Documentation](https://reactjs.org/docs)
- [Express.js Documentation](https://expressjs.com/)
- [Authentication Best Practices](https://owasp.org/www-project-authentication-cheat-sheet/)

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-username/auth-verse/issues) page
2. Create a new issue with detailed information
3. Join our community discussions

---

<div align="center">

**Built with ❤️ By Jagadeeswaran**

</div>
