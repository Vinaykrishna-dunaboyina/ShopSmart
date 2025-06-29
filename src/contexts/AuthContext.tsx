import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'customer' | 'admin';
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

interface AuthContextType {
  auth: AuthState;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState<AuthState>({
    user: null,
    isAuthenticated: false
  });

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock authentication - in real app, this would be an API call
      const isAdmin = email === 'admin@shopsmart.com';
      const user: User = {
        id: '1',
        email,
        name: isAdmin ? 'Admin User' : 'John Doe',
        role: isAdmin ? 'admin' : 'customer'
      };
      
      setAuth({ user, isAuthenticated: true });
      localStorage.setItem('shopsmart_user', JSON.stringify(user));
      localStorage.setItem('shopsmart_token', 'mock-jwt-token-' + Date.now());
      return true;
    } catch (error) {
      return false;
    }
  };

  const register = async (email: string, password: string, name: string): Promise<boolean> => {
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const user: User = {
        id: Date.now().toString(),
        email,
        name,
        role: 'customer'
      };
      
      setAuth({ user, isAuthenticated: true });
      localStorage.setItem('shopsmart_user', JSON.stringify(user));
      localStorage.setItem('shopsmart_token', 'mock-jwt-token-' + Date.now());
      return true;
    } catch (error) {
      return false;
    }
  };

  const logout = () => {
    setAuth({ user: null, isAuthenticated: false });
    localStorage.removeItem('shopsmart_user');
    localStorage.removeItem('shopsmart_token');
  };

  // Check for existing session on mount
  React.useEffect(() => {
    const storedUser = localStorage.getItem('shopsmart_user');
    const storedToken = localStorage.getItem('shopsmart_token');
    
    if (storedUser && storedToken) {
      try {
        const user = JSON.parse(storedUser);
        setAuth({ user, isAuthenticated: true });
      } catch (error) {
        localStorage.removeItem('shopsmart_user');
        localStorage.removeItem('shopsmart_token');
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};