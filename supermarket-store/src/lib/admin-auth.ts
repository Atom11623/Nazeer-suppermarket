// Demo admin authentication.
//
// IMPORTANT: This checks the username/password entirely in the browser and
// is intended as a starting point / demo gate for the admin dashboard, not
// production-grade security. Anyone who reads the deployed JavaScript can
// see these values. Before relying on this for a real business, replace it
// with a real backend (e.g. NextAuth.js, Supabase Auth, Firebase Auth) that
// checks credentials on a server.
//
// CHANGE THESE BEFORE YOU GO LIVE.
export const ADMIN_USERNAME = "admin";
export const ADMIN_PASSWORD = "Nasser@2026";

const SESSION_KEY = "nasser-enterprise-admin-session";

export function checkAdminCredentials(
  username: string,
  password: string
): boolean {
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
}

export function setAdminSession() {
  window.sessionStorage.setItem(SESSION_KEY, "true");
}

export function clearAdminSession() {
  window.sessionStorage.removeItem(SESSION_KEY);
}

export function hasAdminSession(): boolean {
  if (typeof window === "undefined") return false;
  return window.sessionStorage.getItem(SESSION_KEY) === "true";
}
