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
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-md relative z-10" data-aos="fade-up">
        <div className="bg-surface border border-line rounded-2xl p-6 sm:p-8 shadow-card relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full blur-[60px] pointer-events-none"></div>
          
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <img src="/assets/img/mark.png" alt="Logo" className="w-8 h-8 object-contain" />
            </Link>
            <h2 className="text-2xl font-bold mb-2">Access Control</h2>
            <p className="text-sm text-muted">Sign in to your client console.</p>
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-lg bg-red-950/30 border border-red-500/30 text-red-400 text-sm flex items-start gap-3">
              <i className="bi bi-exclamation-triangle-fill text-lg shrink-0"></i>
              <div>{error}</div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                className="w-full px-4 py-3 rounded-lg border border-line bg-paper text-ink text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all placeholder-muted/30"
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
                  className="w-full px-4 py-3 pr-10 rounded-lg border border-line bg-paper text-ink text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all placeholder-muted/30"
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

          <div className="mt-8 pt-6 border-t border-line text-center text-sm text-muted">
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
