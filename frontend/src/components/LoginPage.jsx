import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`Logging in as ${role} with ${email}`);
    // Will connect to backend later
  };

  return (
    <div className="bg-background font-body-md text-on-background min-h-screen overflow-hidden flex w-full">
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
            <img className="w-80 h-80 object-contain drop-shadow-2xl" alt="Digital skill map" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFaWIMaQ49mcgx38Kt1R6Zaw8RnJmLiC_E0SQztEFvZ1HKlOE-yKsIxxDUEM38dEQEsbYwJHjuWEUkQ9Yo8dUyrDS_yn0veW2s8J7lT2_-tlw0C-impleauwZnDU-NQpGMCBdc86x6Cw_BZkdf36rYymDswxt2MTC-lMQ6kK8F73aKJSlqJ4RcJeSQnYbkXlYujtQRo2zQldbHN8uPeaGEx4W8nMXf48h-JRGO0aYNWP7m4VCfZHFJ" />
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
      <section className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-surface p-6 md:p-12 relative">
        {/* Mobile Header Logo */}
        <div className="lg:hidden absolute top-8 left-1/2 -translate-x-1/2">
          <Link to="/" className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
            <span className="font-headline-md text-headline-md font-bold text-primary tracking-tight">Placewise</span>
          </Link>
        </div>
        
        {/* Desktop Header Logo */}
        <div className="hidden lg:flex absolute top-12 left-12 items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
            <span className="font-headline-md text-headline-md font-bold text-primary tracking-tight">Placewise</span>
          </Link>
        </div>

        <div className="w-full max-w-md bg-surface-container-lowest p-8 md:p-10 rounded-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-outline-variant">
          <div className="mb-8">
            <h1 className="font-headline-md text-headline-md text-on-background mb-2">Welcome Back</h1>
            <p className="font-body-md text-body-md text-on-surface-variant">Please enter your credentials to continue.</p>
          </div>
          
          <form className="space-y-6" onSubmit={handleLogin}>
            {/* Role Toggle */}
            <div className="flex bg-surface-container-low rounded-lg p-1">
              <button
                type="button"
                onClick={() => setRole('student')}
                className={`flex-1 py-2 rounded-md font-label-md text-label-md transition-colors ${role === 'student' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
              >
                Student
              </button>
              <button
                type="button"
                onClick={() => setRole('admin')}
                className={`flex-1 py-2 rounded-md font-label-md text-label-md transition-colors ${role === 'admin' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
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
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-body-md" 
                  placeholder="••••••••" 
                  required
                />
                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[20px]">visibility</span>
                </button>
              </div>
            </div>
            
            {/* Remember Me */}
            <div className="flex items-center gap-2">
              <input id="remember" type="checkbox" className="w-4 h-4 text-primary bg-surface-container-low border-outline-variant rounded focus:ring-primary" />
              <label htmlFor="remember" className="text-label-sm font-label-sm text-on-surface-variant">Remember me for 30 days</label>
            </div>
            
            {/* Sign In Button */}
            <button type="submit" className="w-full py-4 bg-primary text-on-primary font-label-md text-label-md rounded-lg shadow-lg shadow-primary/20 hover:bg-secondary active:scale-[0.98] transition-all flex justify-center items-center gap-2">
              <span>Sign In</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
            
            {/* Alternative Sign In */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-outline-variant"></div>
              </div>
              <div className="relative flex justify-center text-label-sm">
                <span className="bg-surface-container-lowest px-4 text-on-surface-variant">Or continue with</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button type="button" className="flex items-center justify-center gap-2 py-2.5 border border-outline-variant rounded-lg hover:bg-surface-container transition-colors">
                <img alt="Google" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxrdEKHMA_2Dc5QdnwusvrcNloFcOT1OBDYGF34DyaPFLLouxMDrl8EzpUsGUgsYr-OZvjaN5jx8zgOxPijZRQh5ys96Z6LArjeH2ln8KoypFzvU3bCNMkAThpysC1IT8tPEiKaJ8fJxSThR5RQUxJY46OYFYKszNKwQszyFYBkIDrw3lmMBlYGvVwLGsMUKPETLbswyNUNeZJ8_YuYe6CzEhEI-oP8h6hlXSDI268re3KdGo4_uFB" />
                <span className="font-label-sm text-label-sm">Google</span>
              </button>
              <button type="button" className="flex items-center justify-center gap-2 py-2.5 border border-outline-variant rounded-lg hover:bg-surface-container transition-colors">
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
