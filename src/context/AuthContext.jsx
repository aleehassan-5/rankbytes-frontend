import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('rb_token'));
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(!!token);

  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }
    api
      .me(token)
      .then((res) => setUser(res.data))
      .catch(() => {
        setToken(null);
        localStorage.removeItem('rb_token');
      })
      .finally(() => setLoading(false));
  }, [token]);

  const login = async (email, password) => {
    const res = await api.login({ email, password });
    localStorage.setItem('rb_token', res.data.token);
    setToken(res.data.token);
    setUser(res.data.user);
  };

  const register = async (name, email, password, phone) => {
    const res = await api.register({ name, email, password, phone });
    localStorage.setItem('rb_token', res.data.token);
    setToken(res.data.token);
    setUser(res.data.user);
  };

  const logout = () => {
    localStorage.removeItem('rb_token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}
