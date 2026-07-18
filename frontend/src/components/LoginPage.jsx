import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import client from '../api/client';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [showPassword, setShowPassword] = useState(false);
  const [mapError, setMapError] = useState(false);
  const [googleError, setGoogleError] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    try {
      const response = await client.post('/api/v1/auth/login', {
        email,
        password,
        role
      });
      const { token, role: returnedRole, user } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('role', returnedRole);
      localStorage.setItem('user', JSON.stringify(user));
      
      if (returnedRole === 'admin') {
        navigate('/admin/dashboard');
      } else {
        navigate('/student/dashboard');
      }
    } catch (err) {
      console.error("Login failed:", err);
      setError(err.response?.data?.detail || "Invalid email or database connection error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background font-body-md text-on-background min-h-screen overflow-y-auto flex w-full">
      {/* Left Side: Aesthetic Gradient & Illustration */}
      <section className="hidden lg:flex lg:w-1/2 relative flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-primary-container p-12">
        {/* Animated Ambient Background Layer */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-secondary-container blur-[120px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-on-primary-fixed-variant blur-[100px] rounded-full"></div>
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
          <div className="mb-8 p-6 glass-effect rounded-[2rem] shadow-2xl animate-float">
            {mapError ? (
              <div className="w-80 h-80 rounded-[2rem] bg-white/10 flex flex-col items-center justify-center border border-white/20 p-6 text-center text-white shadow-inner">
                <span className="material-symbols-outlined text-[64px] mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>map</span>
                <p className="font-headline-sm text-headline-sm text-white">Interactive Roadmap</p>
                <p className="font-body-sm text-body-sm text-white/80 max-w-[240px] mt-2">Visually trace your course milestones, interview prep targets, and skills gaps.</p>
              </div>
            ) : (
              <img 
                className="w-80 h-80 object-contain drop-shadow-2xl" 
                alt="Digital skill map" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFaWIMaQ49mcgx38Kt1R6Zaw8RnJmLiC_E0SQztEFvZ1HKlOE-yKsIxxDUEM38dEQEsbYwJHjuWEUkQ9Yo8dUyrDS_yn0veW2s8J7lT2_-tlw0C-impleauwZnDU-NQpGMCBdc86x6Cw_BZkdf36rYymDswxt2MTC-lMQ6kK8F73aKJSlqJ4RcJeSQnYbkXlYujtQRo2zQldbHN8uPeaGEx4W8nMXf48h-JRGO0aYNWP7m4VCfZHFJ" 
                onError={() => setMapError(true)}
              />
            )}
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-primary mb-4 leading-tight">
            Elevating Academic Success with AI
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary-container opacity-90">
            Your personalized journey to career readiness starts here. Track milestones, bridge skill gaps, and secure your future.
          </p>
          
          {/* Stats Indicators */}
          <div className="flex gap-4 mt-10">
            <div className="glass-effect px-4 py-2 rounded-full flex items-center gap-2">
              <span className="material-symbols-outlined text-on-primary-container text-[18px]">verified</span>
              <span className="text-label-md font-label-md text-on-primary">Accredited Content</span>
            </div>
            <div className="glass-effect px-4 py-2 rounded-full flex items-center gap-2">
              <span className="material-symbols-outlined text-on-primary-container text-[18px]">bolt</span>
              <span className="text-label-md font-label-md text-on-primary">AI Mentorship</span>
            </div>
          </div>
        </div>
        
        {/* Subtle Brand Footer */}
        <div className="absolute bottom-8 left-12">
          <p className="text-label-sm font-label-sm text-on-primary-container opacity-60">© 2024 Placewise AI</p>
        </div>
      </section>

      {/* Right Side: Login Form */}
      <section className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-surface p-6 md:p-12 relative min-h-screen">
        {/* Header Logo - Integrated in flow on mobile to prevent overlapping */}
        <div className="mb-8 flex justify-center lg:justify-start lg:absolute lg:top-12 lg:left-12 w-full max-w-md lg:max-w-none lg:px-0">
          <Link to="/" className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
            <span className="font-headline-md text-headline-md font-bold text-primary tracking-tight">Placewise</span>
          </Link>
        </div>

        <div className="w-full max-w-md bg-surface-container-lowest p-8 md:p-10 rounded-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-outline-variant mt-2 lg:mt-0">
          <div className="mb-8">
            <h1 className="font-headline-md text-headline-md text-on-background mb-2">Welcome Back</h1>
            <p className="font-body-md text-body-md text-on-surface-variant">Please enter your credentials to continue.</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-100/80 border border-red-200 text-red-800 text-label-sm font-label-md rounded-lg flex items-center gap-2 animate-pulse">
              <span className="material-symbols-outlined text-[20px] text-red-600">error</span>
              <span>{error}</span>
            </div>
          )}
          
          <form className="space-y-6" onSubmit={handleLogin}>
            {/* Role Toggle */}
            <div className="flex bg-surface-container-low rounded-lg p-1">
              <button
                type="button"
                onClick={() => setRole('student')}
                className={`flex-1 py-2 rounded-md font-label-md text-label-md transition-colors cursor-pointer select-none ${role === 'student' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
              >
                Student
              </button>
              <button
                type="button"
                onClick={() => setRole('admin')}
                className={`flex-1 py-2 rounded-md font-label-md text-label-md transition-colors cursor-pointer select-none ${role === 'admin' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
              >
                Admin
              </button>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="block font-label-md text-label-md text-on-surface" htmlFor="email">Email Address</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors text-[20px]">mail</span>
                <input 
                  id="email" 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-body-md" 
                  placeholder={role === 'student' ? "name@university.edu" : "admin@placewise.com"}
                  required
                />
              </div>
            </div>
            
            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="block font-label-md text-label-md text-on-surface" htmlFor="password">Password</label>
                <Link to="#" className="text-label-sm font-label-sm text-primary hover:underline transition-all">Forgot Password?</Link>
              </div>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors text-[20px]">lock</span>
                <input 
                  id="password" 
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-body-md" 
                  placeholder="••••••••" 
                  required
                />
                <button 
                  type="button" 
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer select-none"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>
            
            {/* Remember Me */}
            <div className="flex items-center gap-2">
              <input id="remember" type="checkbox" className="w-4 h-4 text-primary bg-surface-container-low border-outline-variant rounded focus:ring-primary cursor-pointer" />
              <label htmlFor="remember" className="text-label-sm font-label-sm text-on-surface-variant cursor-pointer select-none">Remember me for 30 days</label>
            </div>
            
            {/* Sign In Button */}
            <button 
              type="submit" 
              disabled={isSubmitting} 
              className="w-full py-4 bg-primary text-on-primary font-label-md text-label-md rounded-lg shadow-lg shadow-primary/20 hover:bg-secondary active:scale-[0.98] transition-all flex justify-center items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <span>{isSubmitting ? 'Signing In...' : 'Sign In'}</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
            
            {/* Alternative Sign In */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-outline-variant"></div>
              </div>
              <div className="relative flex justify-center text-label-sm">
                <span className="bg-surface-container-lowest px-4 text-on-surface-variant select-none">Or continue with</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button type="button" className="flex items-center justify-center gap-2 py-2.5 border border-outline-variant rounded-lg hover:bg-surface-container transition-colors cursor-pointer">
                {googleError ? (
                  <span className="w-5 h-5 bg-red-500 text-white font-black text-xs rounded-full flex items-center justify-center select-none">G</span>
                ) : (
                  <img 
                    alt="Google" 
                    className="w-5 h-5" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxrdEKHMA_2Dc5QdnwusvrcNloFcOT1OBDYGF34DyaPFLLouxMDrl8EzpUsGUgsYr-OZvjaN5jx8zgOxPijZRQh5ys96Z6LArjeH2ln8KoypFzvU3bCNMkAThpysC1IT8tPEiKaJ8fJxSThR5RQUxJY46OYFYKszNKwQszyFYBkIDrw3lmMBlYGvVwLGsMUKPETLbswyNUNeZJ8_YuYe6CzEhEI-oP8h6hlXSDI268re3KdGo4_uFB" 
                    onError={() => setGoogleError(true)}
                  />
                )}
                <span className="font-label-sm text-label-sm">Google</span>
              </button>
              <button type="button" className="flex items-center justify-center gap-2 py-2.5 border border-outline-variant rounded-lg hover:bg-surface-container transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-on-surface text-[20px]">school</span>
                <span className="font-label-sm text-label-sm">EduID</span>
              </button>
            </div>
          </form>
          
          <p className="mt-8 text-center font-body-sm text-body-sm text-on-surface-variant">
            Don't have an account? 
            <Link to="#" className="text-primary font-label-sm hover:underline ml-1">Request Access</Link>
          </p>
        </div>
        
        {/* Mobile Footer Links */}
        <div className="absolute bottom-8 flex gap-6 text-label-sm font-label-sm text-on-surface-variant opacity-60">
          <Link to="#" className="hover:text-primary transition-colors">Privacy</Link>
          <Link to="#" className="hover:text-primary transition-colors">Terms</Link>
          <Link to="#" className="hover:text-primary transition-colors">Help</Link>
        </div>
      </section>
    </div>
  );
}
