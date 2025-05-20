'use client';

import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

export default function Signin() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch('http://localhost:8000/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(form),
    });
    const data = await res.json();
    alert(JSON.stringify(data));
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[#f2f4f7]">
      {/* left side */}
      <div className="flex flex-col justify-center px-10 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">M-PESA Acquisition Portal</h1>
        <p className="text-gray-700 mb-10">
          Welcome to M-PESA world of convenience! This Portal provides an efficient way to access and manage your sales.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-md w-full">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="example@email.com"
                className="w-full pl-10 pr-4 py-2 border rounded text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="***"
                className="w-full pl-10 pr-10 py-2 border rounded text-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#43b02a] hover:bg-[#369a21] text-white font-semibold py-2 rounded"
          >
            <a href="/kyc">
            LOGIN
            </a>
          </button>

          <div className="text-right">
            <a href="/" className="text-[#43b02a] text-sm font-bold hover:underline">
              FORGOT PASSWORD?
            </a>
          </div>
        </form>
      </div>

      <div className="hidden md:flex items-center justify-center bg-white">
        <img
          src="/rightside_image.png"
          alt="righ side image"
          className="max-w-xs"
        />
      </div>
    </div>
  );
}
