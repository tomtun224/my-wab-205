"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type AuthContextValue = {
  isAuthenticated: boolean;
  isReady: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);
const AUTH_STORAGE_KEY = "205-pin-authenticated";
const ADMIN_EMAIL = "admin@company.com";
const ADMIN_PASSWORD = "pass";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    try {
      setIsAuthenticated(
        window.sessionStorage.getItem(AUTH_STORAGE_KEY) === "true"
      );
    } catch {
      setIsAuthenticated(false);
    } finally {
      setIsReady(true);
    }
  }, []);

  const login = useCallback((email: string, password: string) => {
    const normalizedEmail = email.trim().toLowerCase();
    if (normalizedEmail !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      return false;
    }

    try {
      window.sessionStorage.setItem(AUTH_STORAGE_KEY, "true");
    } catch {
      // Keep this demo login available for the current page session.
    }

    setIsAuthenticated(true);
    return true;
  }, []);

  const logout = useCallback(() => {
    try {
      window.sessionStorage.removeItem(AUTH_STORAGE_KEY);
    } catch {
      // The in-memory state still locks the page if storage is unavailable.
    }

    setIsAuthenticated(false);
  }, []);

  const value = useMemo(
    () => ({ isAuthenticated, isReady, login, logout }),
    [isAuthenticated, isReady, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
}
