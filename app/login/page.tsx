"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/v1/login", {
        email,
        password,
      });
      if (response.status === 200) {
        setSuccess(true);
        localStorage.setItem("access", response.data.accessToken);
        router.push("/");
      }
      setError(null);
    } catch (err) {
      setError("Login failed. Please try again.");
      setSuccess(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          Login
        </h2>
        {error && <div className="text-red-600 mb-4 text-center">{error}</div>}
        {success && (
          <div className="text-green-600 mb-4 text-center">
            Login successful!
          </div>
        )}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-blue-500 w-full text-white py-3 px-6 rounded-full hover:bg-blue-600 transition"
            >
              Login
            </button>
            <p onClick={() => router.push("/login")} className="text-sm mt-2">
              You don't have an account?{" "}
              <span className="underline">Sign up</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
