"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import SignupPage from "../signup/page";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { PlayCircleOutlined, EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  // const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const togglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
          expiresInMins: 30,
        }),
      });

      if (!res.ok) {
        alert("Login not successful");
        throw new Error("Login failed. Please check your credentials.");
      }

      const data = await res.json();
      console.log("Login response:", data);

      // example: show username in console
      console.log("Logged in user:", data.username);

      // you can store token or user data in state/localStorage
      localStorage.setItem("accessToken", data.accessToken);

      alert("Logged in successful!!");
      window.location.href = "/page/home";
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-black">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-blue-800 mb-6">
          Login to IdeaLog
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 text-gray-400 focus:ring-blue-500"
              placeholder="Enter your username"
              required={true}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 text-gray-400 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required={true}
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              >
                {showPassword ? <EyeOutlined size={18} /> : <EyeInvisibleOutlined size={18} />}
              </button>
            </div>
          </div>


          {/* Forgot Password */}
          <div className="text-right">
            <Link
              href="/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition"
          >
            Login
          </button>
        </form>
        {/* <PlayCircleOutlined className="text-black hover:text-gray-800 transition" /> */}

        {/* Divider */}
        <div className="mt-6 text-center text-sm text-gray-600">
          New user?{" "}
          <Link href="/auth/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
