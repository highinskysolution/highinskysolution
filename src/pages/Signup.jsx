import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, AlertTriangle, UserPlus } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    setError('');
    setSubmitting(true);

    const result = await signup(name, email, password);
    setSubmitting(false);

    if (result.success) {
      navigate('/');
    } else {
      setError(result.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-[#07090E] flex items-center justify-center py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 arch-grid-bg pointer-events-none" />
      <div className="absolute inset-0 top-spotlight pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        <div className="rounded-2xl border border-white/[0.08] bg-[#0D111A]/90 backdrop-blur-md p-7 sm:p-9 shadow-[0_24px_60px_rgba(0,0,0,0.65)]">
          <div className="text-center mb-8">
            <Link
              to="/"
              className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#07090E] border border-white/[0.1] hover:border-sky-400/40 transition-colors mb-4"
            >
              <img
                src="/assets/img/mark.png"
                alt="HIGH IN SKY SOLUTIONS"
                className="w-6 h-6 object-contain"
                referrerPolicy="no-referrer"
              />
            </Link>
            <div className="font-mono text-[11px] uppercase tracking-widest text-sky-400 mb-1">
              CLIENT ONBOARDING
            </div>
            <h1 className="text-2xl font-semibold text-white">Create Account</h1>
            <p className="text-sm text-[#94A3B8] mt-1">
              Register a new client profile for project telemetry.
            </p>
          </div>

          {error && (
            <div className="mb-6 p-3.5 rounded-lg bg-rose-950/40 border border-rose-500/30 text-rose-300 text-xs flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                className="block font-mono text-xs uppercase tracking-wider text-[#94A3B8] mb-2"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                className="field-input"
                id="name"
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                className="block font-mono text-xs uppercase tracking-wider text-[#94A3B8] mb-2"
                htmlFor="email"
              >
                Work Email Address
              </label>
              <input
                className="field-input"
                id="email"
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                className="block font-mono text-xs uppercase tracking-wider text-[#94A3B8] mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  className="field-input pr-10"
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-[#F8FAFC] transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label
                className="block font-mono text-xs uppercase tracking-wider text-[#94A3B8] mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className="field-input"
                id="confirmPassword"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-sky-400 hover:bg-sky-300 text-slate-950 font-semibold py-3 px-5 rounded-lg inline-flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all mt-2 disabled:opacity-50"
              disabled={submitting}
            >
              <UserPlus className="w-4 h-4" />
              <span>{submitting ? 'Registering...' : 'Register Account'}</span>
            </button>
          </form>

          <div className="mt-7 pt-6 border-t border-white/[0.07] text-center text-sm text-[#94A3B8]">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-sky-400 hover:text-sky-300 font-semibold transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
