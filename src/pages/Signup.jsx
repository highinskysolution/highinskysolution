import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
    <div className="min-h-screen bg-paper flex items-center justify-center pt-28 pb-16 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-md mx-6 relative z-10" data-aos="fade-up">
        <div className="bg-surface border border-line rounded-2xl p-8 shadow-card relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full blur-[60px] pointer-events-none"></div>
          
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <img src="/assets/img/mark.png" alt="Logo" className="w-8 h-8 object-contain" />
            </Link>
            <h2 className="text-2xl font-bold mb-2">Create Account</h2>
            <p className="text-sm text-muted">Register a new client profile.</p>
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-lg bg-red-950/30 border border-red-500/30 text-red-400 text-sm flex items-start gap-3">
              <i className="bi bi-exclamation-triangle-fill text-lg shrink-0"></i>
              <div>{error}</div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                className="w-full px-4 py-2.5 rounded-lg border border-line bg-paper text-ink text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all placeholder-muted/30"
                id="name"
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                className="w-full px-4 py-2.5 rounded-lg border border-line bg-paper text-ink text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all placeholder-muted/30"
                id="email"
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  className="w-full px-4 py-2.5 pr-10 rounded-lg border border-line bg-paper text-ink text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all placeholder-muted/30"
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                className="w-full px-4 py-2.5 rounded-lg border border-line bg-paper text-ink text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all placeholder-muted/30"
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
              className="w-full btn btn-brand py-3 font-semibold shadow-glow mt-2"
              disabled={submitting}
            >
              {submitting ? 'Registering...' : 'Register'}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-line text-center text-sm text-muted">
            Already have an account?{' '}
            <Link to="/login" className="text-brand hover:text-brand-light font-medium transition-colors">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
