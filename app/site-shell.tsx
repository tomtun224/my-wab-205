"use client";

import { useState, type FormEvent, type ReactNode } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ShopProvider } from "./shop-context";
import ShopNavigation from "./shop-navigation";
import { useAuth } from "./auth-context";

function LoginModal() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const account = username.trim().replace(/@company\.com$/i, "");

    if (!login(`${account}@company.com`, password)) {
      setError("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <section
        aria-labelledby="login-title"
        aria-modal="true"
        className="w-full max-w-[400px] rounded-xl bg-white px-7 pb-7 pt-6 shadow-2xl sm:px-8"
        role="dialog"
      >
        <h1
          className="mb-5 text-center text-xl font-bold text-slate-800"
          id="login-title"
        >
          Who are you?
        </h1>

        <form className="space-y-3" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="login-username">
            Username
          </label>
          <div className="flex h-12 items-center rounded-lg border border-slate-300 bg-white px-3 focus-within:border-slate-500 focus-within:ring-2 focus-within:ring-slate-200">
            <svg
              aria-hidden="true"
              className="mr-3 size-5 shrink-0 text-slate-500"
              fill="none"
              viewBox="0 0 24 24"
            >
              <rect height="14" rx="2" stroke="currentColor" strokeWidth="1.8" width="19" x="2.5" y="5" />
              <path d="M6 9h2m2 0h2m2 0h2M6 13h2m2 0h2m2 0h2" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
            </svg>
            <input
              autoComplete="username"
              autoFocus
              className="min-w-0 flex-1 border-0 bg-transparent p-0 text-base text-slate-800 outline-none placeholder:text-slate-400 focus:ring-0"
              id="login-username"
              onChange={(event) => {
                setUsername(event.target.value);
                setError("");
              }}
              placeholder="admin"
              required
              value={username}
            />
            <span className="ml-2 shrink-0 text-sm font-medium text-slate-700">
              @company.com
            </span>
          </div>

          <label className="sr-only" htmlFor="login-password">
            Password
          </label>
          <div className="flex h-12 items-center rounded-lg border border-slate-300 bg-white px-3 focus-within:border-slate-500 focus-within:ring-2 focus-within:ring-slate-200">
            <button
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="mr-3 flex size-5 shrink-0 items-center justify-center text-slate-600"
              onClick={() => setShowPassword((visible) => !visible)}
              type="button"
            >
              <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24">
                <path d="M3 3l18 18M10.6 10.7a2 2 0 002.7 2.7M9.9 5.2A10.8 10.8 0 0112 5c5.2 0 8.7 4.5 9.5 6-.3.6-1.2 1.9-2.8 3.1M6.2 6.2C4.1 7.5 2.8 9.6 2.5 11c.8 1.5 4.3 6 9.5 6 1 0 2-.2 2.9-.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
              </svg>
            </button>
            <input
              autoComplete="current-password"
              className="min-w-0 flex-1 border-0 bg-transparent p-0 text-base text-slate-800 outline-none placeholder:text-slate-400 focus:ring-0"
              id="login-password"
              onChange={(event) => {
                setPassword(event.target.value);
                setError("");
              }}
              placeholder="pass"
              required
              type={showPassword ? "text" : "password"}
              value={password}
            />
          </div>

          {error && (
            <p className="text-center text-sm text-red-600" role="alert">
              {error}
            </p>
          )}

          <div className="flex justify-end pt-2">
            <button
              className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default function SiteShell({ children }: { children: ReactNode }) {
  const { isAuthenticated, isReady } = useAuth();
  const isBlocked = !isReady || !isAuthenticated;

  return (
    <>
      <div
        aria-hidden={isBlocked ? true : undefined}
        className={isBlocked ? "min-h-screen blur-[2px]" : "min-h-screen"}
        inert={isBlocked}
      >
        <ShopProvider>
          <Header />
          <ShopNavigation />
          <main>{children}</main>
          <Footer />
        </ShopProvider>
      </div>
      {isReady && !isAuthenticated && <LoginModal />}
    </>
  );
}
