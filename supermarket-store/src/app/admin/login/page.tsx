"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { checkAdminCredentials, setAdminSession } from "@/lib/admin-auth";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (checkAdminCredentials(username, password)) {
      setAdminSession();
      router.push("/admin");
    } else {
      setError("Incorrect username or password.");
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-950 px-4 text-white">
      <div className="w-full max-w-md">
        <Link href="/" className="mb-8 block text-center text-2xl font-extrabold">
          🛒 <span className="text-green-500">NASSER</span> ENTERPRISE
        </Link>

        <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8 shadow-xl">
          <h1 className="text-xl font-bold">Admin Login</h1>
          <p className="mt-1 text-sm text-gray-400">
            Sign in to manage your store dashboard.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-300">
                Username
              </label>
              <input
                required
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                className="mt-2 w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300">
                Password
              </label>
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                className="mt-2 w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none focus:border-green-500"
              />
            </div>

            {error && (
              <p className="rounded-lg bg-red-500/10 px-4 py-2 text-sm text-red-400">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-xl bg-green-600 px-6 py-3 font-bold text-white transition hover:bg-green-700"
            >
              Sign In
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-gray-500">
            Demo credentials — username <span className="font-mono text-gray-300">admin</span>,
            password <span className="font-mono text-gray-300">Nasser@2026</span>.
            Change these in <span className="font-mono text-gray-300">src/lib/admin-auth.ts</span> before going live.
          </p>
        </div>

        <Link
          href="/"
          className="mt-6 block text-center text-sm text-gray-400 hover:text-white"
        >
          ← Back to store
        </Link>
      </div>
    </main>
  );
}
