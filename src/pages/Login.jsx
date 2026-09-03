import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    setError('');
    setSubmitting(true);

    const result = await login(email, password);
    setSubmitting(false);

    if (result.success) {
      navigate('/');
    } else {
      setError(result.message || 'Invalid email or password.');
    }
  };

  return (
    <div className="min-h-screen bg-paper flex items-center justify-center pt-20 sm:pt-28 pb-8 sm:pb-16 px-4 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="glow-orb top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand/[0.1] animate-blob"></div>
      <div className="glow-orb bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-accent/[0.08] animate-blob-slow"></div>
      <div className="grid-overlay opacity-40"></div>

      <div className="w-full max-w-md relative z-10" data-aos="fade-up">
        <div className="glass-panel p-6 sm:p-8 overflow-hidden">
          <div className="glow-orb top-[-40px] right-[-40px] w-40 h-40 bg-brand/[0.12]"></div>

          <div className="text-center mb-8 relative z-10">
            <Link to="/" className="group inline-flex items-center gap-2 mb-4 relative">
              <span className="absolute inset-0 -m-3 rounded-full bg-brand/25 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <img src="/assets/img/mark.png" alt="Logo" className="w-9 h-9 object-contain relative z-10 transition-transform duration-500 ease-premium group-hover:scale-110" />
            </Link>
            <h2 className="text-2xl font-bold mb-2">Access <span className="text-gradient">Control</span></h2>
            <p className="text-sm text-muted">Sign in to your client console.</p>
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-lg bg-red-950/30 border border-red-500/30 text-red-400 text-sm flex items-start gap-3">
              <i className="bi bi-exclamation-triangle-fill text-lg shrink-0"></i>
              <div>{error}</div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10" autoComplete="off">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                className="field-input"
                id="email"
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2" htmlFor="password">
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
                  autoComplete="new-password"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-ink transition-colors focus:outline-none"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full btn btn-brand py-3 font-semibold shadow-glow"
              disabled={submitting}
            >
              {submitting ? 'Authenticating...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/[0.07] text-center text-sm text-muted relative z-10">
            New client?{' '}
            <Link to="/signup" className="text-brand hover:text-brand-light font-medium transition-colors">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
