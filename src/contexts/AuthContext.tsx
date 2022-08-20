import { createContext, useContext, useState } from 'react';

interface IAuthContext {
  authenticated: boolean;
  login: () => void;
  logout: () => void;
}

const defaultValue: IAuthContext = {
  authenticated: false,
  login: () => undefined,
  logout: () => undefined,
};

const AuthContext = createContext<IAuthContext>(defaultValue);

export function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(
    defaultValue.authenticated,
  );

  const login = () => {
    setAuthenticated(true);
  };

  const logout = () => {
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
