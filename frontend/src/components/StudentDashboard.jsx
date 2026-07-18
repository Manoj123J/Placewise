import React from 'react';
import { Link } from 'react-router-dom';
import ProfileDropdown from './ProfileDropdown';

export default function StudentDashboard() {
  return (
    <div className="bg-surface min-h-screen">
      {/* TopNavBar */}
      <header className="sticky top-0 w-full z-40 bg-surface-container-lowest border-b border-outline-variant shadow-sm transition-transform duration-150">
        <div className="max-w-container-max mx-auto px-gutter py-3 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-headline-md font-headline-md font-extrabold text-primary">Placewise</Link>
            <nav className="hidden md:flex items-center gap-6 ml-8">
              <Link to="/student/dashboard" className="text-primary border-b-2 border-primary pb-1 font-bold font-label-md text-label-md">Dashboard</Link>
              <Link to="#" className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md">Roadmap</Link>
              <Link to="/test" className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md">Assessments</Link>
              <Link to="#" className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md">Profile</Link>
            </nav>
          </div>
          <div className="flex items-center gap-stack-md">
            <Link to="/test">
              <button className="hidden md:block bg-primary-container text-white px-5 py-2 rounded-lg font-label-md text-label-md hover:brightness-110 active:scale-95 transition-all">
                Start Assessment
              </button>
            </Link>
            <ProfileDropdown />
          </div>
        </div>
      </header>

      <main className="max-w-container-max mx-auto px-gutter py-stack-lg flex flex-col gap-stack-lg">
        {/* Welcome Header */}
        <section>
          <h1 className="font-headline-lg text-headline-lg text-on-surface">Good Morning, Alex.</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">Here is your current career readiness overview for your dream roles.</p>
        </section>

        {/* Highlights: Horizontally Scrollable Cards */}
        <div className="flex gap-gutter overflow-x-auto custom-scrollbar pb-4 -mx-gutter px-gutter md:mx-0 md:px-0">
          
          {/* Dream Company Selector Card */}
          <div className="min-w-[300px] flex-1 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] p-inset-card flex flex-col">
            <h2 className="font-label-md text-label-md text-on-surface mb-4">Targeting Dream Company</h2>
            <div className="relative group">
              <button className="w-full flex items-center justify-between bg-surface-container-low border border-outline-variant p-3 rounded-lg hover:border-primary-container transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center p-1 border border-outline-variant">
                    <img className="w-full h-full object-contain" alt="Google Logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVSp9YuLKLgIWmwPmBU_JDgKsbr8JRalSG-e-rC2Q8sXJwfU9nMgC0ArfeMF1WaKLC6JGFvCfUOzUYHtwnugzDUwYctYx8EYQNBA4RmuWUk7Zc17ADBQjB3F8HymQd7nQVSxrIUvOXoTPUWg8-dSYDp9k1onGQjvf9m_NNBatomLI8vO9Q1tDqb5DCWeslsGO_wJ8m40reMwIsXZzR8kJ7erybOzroE-RoxvXOTXPkWfr6EekQc4Fd" />
                  </div>
                  <span className="font-label-md text-label-md text-on-surface">Google Inc.</span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">expand_more</span>
              </button>
            </div>
            <p className="mt-4 font-body-sm text-body-sm text-on-surface-variant italic mt-auto">Next drive: October 2024</p>
          </div>

          {/* Placement Readiness Score Card */}
          <div className="min-w-[300px] flex-1 bg-gradient-to-br from-[#4f46e5] to-[#3525cd] rounded-xl p-inset-card text-white flex flex-col items-center justify-center text-center shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]">
            <h2 className="font-label-md text-label-md mb-2 opacity-80 uppercase tracking-widest">Readiness Score</h2>
            <div className="relative w-24 h-24 flex items-center justify-center mb-4">
              <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                <circle className="text-white/20" cx="48" cy="48" fill="transparent" r="42" stroke="currentColor" strokeWidth="6"></circle>
                <circle className="text-white" cx="48" cy="48" fill="transparent" r="42" stroke="currentColor" strokeDasharray="264" strokeDashoffset="55" strokeLinecap="round" strokeWidth="6"></circle>
              </svg>
              <span className="font-headline-xl text-headline-xl text-white">79</span>
            </div>
            <p className="font-label-md text-label-md mb-1">Highly Eligible</p>
            <p className="font-body-sm text-body-sm opacity-80">Top 15% of your cohort.</p>
          </div>
          
          {/* Extra placeholder highlight to demonstrate scrolling if needed */}
          <div className="min-w-[300px] flex-1 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] p-inset-card flex flex-col items-start justify-center">
            <h2 className="font-label-md text-label-md text-on-surface mb-2">Upcoming Events</h2>
            <div className="flex items-center gap-3 w-full bg-surface-container-low p-3 rounded-lg border border-outline-variant">
              <div className="bg-primary/10 text-primary p-2 rounded-md">
                <span className="material-symbols-outlined text-[20px]">event</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface">Mock Interview</span>
                <span className="font-body-sm text-[11px] text-on-surface-variant">Tomorrow, 10:00 AM</span>
              </div>
            </div>
          </div>

        </div>

        {/* AI-Generated Skill Roadmap */}
        <section className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] overflow-hidden">
          <div className="p-inset-card border-b border-outline-variant flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                AI-Generated Skill Roadmap
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Personalized steps based on Google's interview patterns.</p>
            </div>
            <div className="bg-primary/10 text-primary px-4 py-1.5 rounded-full font-label-sm text-label-sm flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              Path: Software Engineering II
            </div>
          </div>
          
          <div className="p-inset-card">
            <div className="flex flex-col gap-4">
              {/* Step 1 (Completed) */}
              <div className="flex items-start gap-4 p-4 rounded-lg bg-surface-container-low/50 border border-transparent hover:border-outline-variant transition-all">
                <div className="mt-1 flex-shrink-0">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between">
                    <h3 className="font-label-md text-label-md text-on-surface line-through decoration-on-surface-variant/40">Review Big-O Notation</h3>
                    <span className="bg-surface-container-highest text-on-surface-variant px-2 py-0.5 rounded text-[10px] font-bold uppercase">Completed</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Mastered space and time complexity for core algorithms.</p>
                </div>
              </div>
              
              {/* Step 2 (Active) */}
              <div className="flex items-start gap-4 p-4 rounded-lg bg-primary-container/5 border border-primary-container/20 ring-1 ring-primary-container/10">
                <div className="mt-1 flex-shrink-0">
                  <span className="material-symbols-outlined text-primary">radio_button_checked</span>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between">
                    <h3 className="font-label-md text-label-md text-primary">Master Linked Lists & Trees</h3>
                    <span className="bg-primary text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase">Current Task</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Practice 15 Medium-difficulty LeetCode problems specifically on Doubly Linked Lists.</p>
                  <div className="mt-4 w-full bg-outline-variant h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[60%] transition-all duration-1000 ease-in-out"></div>
                  </div>
                  <div className="mt-4 flex gap-stack-sm">
                    <button className="bg-primary text-white px-4 py-1.5 rounded text-label-sm font-label-md hover:brightness-110 active:scale-95 transition-all">Start Lab</button>
                    <button className="text-primary hover:bg-primary/5 px-4 py-1.5 rounded text-label-sm font-label-md transition-all">View Docs</button>
                  </div>
                </div>
              </div>
              
              {/* Step 3 (Upcoming) */}
              <div className="flex items-start gap-4 p-4 rounded-lg border border-outline-variant bg-white/50 opacity-80 grayscale-[0.5]">
                <div className="mt-1 flex-shrink-0">
                  <span className="material-symbols-outlined text-outline">circle</span>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between">
                    <h3 className="font-label-md text-label-md text-on-surface">Mock HR Interview</h3>
                    <span className="text-on-surface-variant px-2 py-0.5 rounded text-[10px] font-bold uppercase border border-outline-variant">Locked</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Simulate a high-pressure cultural fit round with AI Coach 'Aria'.</p>
                </div>
              </div>
              
              {/* Step 4 (Upcoming) */}
              <div className="flex items-start gap-4 p-4 rounded-lg border border-outline-variant bg-white/50 opacity-80 grayscale-[0.5]">
                <div className="mt-1 flex-shrink-0">
                  <span className="material-symbols-outlined text-outline">circle</span>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between">
                    <h3 className="font-label-md text-label-md text-on-surface">Project Refactoring</h3>
                    <span className="text-on-surface-variant px-2 py-0.5 rounded text-[10px] font-bold uppercase border border-outline-variant">Locked</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Implement Design Patterns (Observer, Singleton) into your Portfolio Projects.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 px-gutter flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto border-t border-outline-variant bg-surface-container-lowest">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <span className="text-label-md font-label-md font-bold text-on-surface">Placewise AI</span>
          <p className="text-body-sm font-body-sm text-on-surface-variant">© 2024 Placewise AI. Academic Excellence & Career Readiness.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <Link to="#" className="text-on-surface-variant hover:text-primary transition-colors text-label-sm font-label-sm">Terms of Service</Link>
          <Link to="#" className="text-on-surface-variant hover:text-primary transition-colors text-label-sm font-label-sm">Privacy Policy</Link>
          <Link to="#" className="text-on-surface-variant hover:text-primary transition-colors text-label-sm font-label-sm">Institutional Login</Link>
          <Link to="#" className="text-on-surface-variant hover:text-primary transition-colors text-label-sm font-label-sm">Contact Support</Link>
        </div>
      </footer>
    </div>
  );
}
