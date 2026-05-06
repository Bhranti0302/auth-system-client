import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/auth",
  withCredentials: true, // IMPORTANT for cookies
});

// ================= BASIC AUTH =================

// Signup
export const signup = (data) => API.post("/signup", data);

// Login
export const login = (data) => API.post("/login", data);

// Logout
export const logout = () => API.post("/logout");

// ================= OAUTH =================

// Google Login
export const googleLogin = (token) => API.post("/google-login", { token });

// GitHub Login
export const githubLogin = (code) => API.post("/github-login", { code });

// Facebook Login
export const facebookLogin = (accessToken) =>
  API.post("/facebook-login", { accessToken });

// ================= TOKEN =================

// Refresh Token
export const refreshToken = () => API.post("/refresh-token");

// ================= EMAIL =================

// Verify Email
export const verifyEmail = (token) => API.get(`/verify-email?token=${token}`);

// ================= PASSWORD =================

// Forgot Password
export const forgotPassword = (email) =>
  API.post("/forgot-password", { email });

// Reset Password
export const resetPassword = (token, password) =>
  API.post(`/reset-password/${token}`, { password });

// Change Password (protected)
export const changePassword = (data) => API.post("/change-password", data);

export default API;
