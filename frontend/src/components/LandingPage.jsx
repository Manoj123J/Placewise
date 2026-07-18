import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden min-h-screen">
      {/* TopNavBar Implementation */}
      <header className="sticky top-0 w-full z-50 bg-surface-container-lowest dark:bg-inverse-surface border-b border-outline-variant dark:border-outline shadow-sm dark:shadow-none">
        <nav className="flex justify-between items-center px-gutter py-3 max-w-container-max mx-auto">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
            <span className="text-headline-md font-headline-md font-bold text-primary dark:text-inverse-primary">Placewise</span>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/student/dashboard" className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors text-label-md font-label-md">Dashboard</Link>
            <Link to="#" className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors text-label-md font-label-md">Roadmap</Link>
            <Link to="/test" className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors text-label-md font-label-md">Assessments</Link>
            <Link to="#" className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors text-label-md font-label-md">Profile</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/test">
                <button className="hidden md:block bg-primary text-on-primary px-6 py-2 rounded-full font-label-md text-label-md active:scale-95 transition-transform duration-150">
                Start Assessment
                </button>
            </Link>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20">
              <img className="w-full h-full object-cover" alt="A professional headshot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO2dP7Wt-yzhjgjTX77mkM4vQ2YdeV8S3XkVsOTRkeCyZ8yt8D6mdP-bUmxGPSPU6zt8czgVddU9VCz1ijY6RCim38Cm1FLums6uG223LtLbZdaMirgxUmpk46nthms9uX5QRBevlv3WTiS5kRmTO5jdM_Sd4ggGbjxJqUEEu4QVbviMpadNzK9sjuRq1DK3xvf_GLpGQmfFErPJ-VlAy68dwIO2ye5cq90ib1fNqzCJrLTE9HSpsp" />
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-32 px-gutter">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10"></div>
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="max-w-container-max mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-stack-lg">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full w-fit">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                <span className="text-label-sm font-label-sm uppercase tracking-wider">AI-Powered Career Intelligence</span>
              </div>
              <h1 className="text-headline-xl font-headline-xl md:text-6xl text-on-surface leading-[1.1] max-w-xl">
                Elevate Your Career Readiness with <span className="text-primary">Placewise AI</span>
              </h1>
              <p className="text-body-lg font-body-lg text-on-surface-variant max-w-lg">
                The intelligent roadmap to your dream campus placement. We bridge the gap between academic learning and industry expectations using personalized AI insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/login" className="bg-primary text-on-primary px-8 py-4 rounded-xl font-headline-sm text-headline-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group">
                  Student Login
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
                <Link to="/admin/dashboard" className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-xl font-headline-sm text-headline-sm hover:bg-surface-container-high transition-all flex items-center justify-center gap-2 border border-outline-variant">
                  Admin Login
                </Link>
              </div>
              <div className="flex items-center gap-6 pt-4 border-t border-outline-variant w-fit">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-surface bg-primary/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-sm">person</span>
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-surface bg-secondary/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary text-sm">school</span>
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-surface bg-tertiary/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-tertiary text-sm">psychology</span>
                  </div>
                </div>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Trusted by <span className="font-bold text-on-surface">5,000+ Students</span> across premium campuses
                </p>
              </div>
            </div>
            <div className="relative hidden lg:block animate-float">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl -rotate-2"></div>
              <div className="relative glass-card border border-outline-variant rounded-3xl p-8 shadow-2xl">
                <img className="rounded-xl w-full shadow-lg border border-outline-variant" alt="Dashboard Preview" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5MvYSuiAUPJVk6lLzymDRclRnwYdi8F3Zj8msMpdw5Gie8CCttSJPlHmRLuJ3_sXtA5YreuXK6rNqS1V5I_6Ej1lC70FN7qa7uexanHoLHqS4-eiGSidL75MSXZVVMD2v3u4RKKPlkg4LWeUFUYGA0fA92UG0JFqKPZ-keuh0muIlEk10OoB9T2Hf6WrNLM3lnpzLHCC18IBPWl1bNJ54DbU98cRebVIca1WSU_AQyCTYmkj-5MkP" />
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-outline-variant flex items-center gap-4 animate-bounce">
                  <div className="bg-green-100 p-2 rounded-full">
                    <span className="material-symbols-outlined text-green-600">check_circle</span>
                  </div>
                  <div>
                    <p className="text-label-sm font-label-sm text-on-surface-variant">Readiness Score</p>
                    <p className="text-headline-sm font-headline-sm text-on-surface">85% Optimized</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-surface-container-low/50 px-gutter">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-headline-lg font-headline-lg text-on-surface mb-4">Master Every Step of the Placement Journey</h2>
              <p className="text-body-md font-body-md text-on-surface-variant max-w-2xl mx-auto">
                Our platform provides the analytical depth and personalized guidance needed to stand out in a competitive job market.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature Card 1 */}
              <div className="glass-card p-inset-card rounded-xl border border-outline-variant hover-lift flex flex-col gap-4 shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 0" }}>analytics</span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface">Eligibility Check</h3>
                <p className="text-body-md font-body-md text-on-surface-variant">
                  Smart tracking of CGPA and specific corporate requirements. Know exactly where you stand with every company roadmap.
                </p>
                <div className="mt-auto pt-4 flex items-center text-primary font-label-md text-label-md gap-1 cursor-pointer hover:underline">
                  Explore requirements <span className="material-symbols-outlined text-sm">north_east</span>
                </div>
              </div>
              {/* Feature Card 2 */}
              <div className="glass-card p-inset-card rounded-xl border border-outline-variant hover-lift flex flex-col gap-4 shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'FILL' 0" }}>map</span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface">Skill Roadmap</h3>
                <p className="text-body-md font-body-md text-on-surface-variant">
                  AI-personalized learning paths that adapt to your career goals. We identify skill gaps and provide precise content.
                </p>
                <div className="mt-auto pt-4 flex items-center text-secondary font-label-md text-label-md gap-1 cursor-pointer hover:underline">
                  View sample path <span className="material-symbols-outlined text-sm">north_east</span>
                </div>
              </div>
              {/* Feature Card 3 */}
              <div className="glass-card p-inset-card rounded-xl border border-outline-variant hover-lift flex flex-col gap-4 shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-tertiary/10 flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-tertiary text-3xl" style={{ fontVariationSettings: "'FILL' 0" }}>dynamic_form</span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface">Adaptive Tests</h3>
                <p className="text-body-md font-body-md text-on-surface-variant">
                  Real-time difficulty adjustments based on your performance. Simulate actual company assessments with precision.
                </p>
                <div className="mt-auto pt-4 flex items-center text-tertiary font-label-md text-label-md gap-1 cursor-pointer hover:underline">
                  Take free trial <span className="material-symbols-outlined text-sm">north_east</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats / Trust Section */}
        <section className="py-20 px-gutter bg-white">
          <div className="max-w-container-max mx-auto bg-primary-container rounded-[2rem] p-12 text-on-primary-container flex flex-col md:flex-row items-center justify-around gap-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10"></div>
            <div className="text-center relative z-10">
              <p className="text-headline-xl font-headline-xl text-white">94%</p>
              <p className="text-label-md font-label-md uppercase opacity-80">Placement Success</p>
            </div>
            <div className="h-16 w-px bg-white/20 hidden md:block"></div>
            <div className="text-center relative z-10">
              <p className="text-headline-xl font-headline-xl text-white">200+</p>
              <p className="text-label-md font-label-md uppercase opacity-80">Partner Institutions</p>
            </div>
            <div className="h-16 w-px bg-white/20 hidden md:block"></div>
            <div className="text-center relative z-10">
              <p className="text-headline-xl font-headline-xl text-white">1.2M</p>
              <p className="text-label-md font-label-md uppercase opacity-80">Mock Tests Taken</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Implementation */}
      <footer className="w-full py-8 px-gutter flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto border-t border-outline-variant dark:border-outline bg-surface-container-lowest">
        <div className="flex flex-col gap-4 items-center md:items-start mb-8 md:mb-0">
          <div className="flex items-center gap-2">
            <span className="text-label-md font-label-md font-bold text-on-surface dark:text-inverse-on-surface">Placewise AI</span>
          </div>
          <p className="text-body-sm font-body-sm text-on-surface-variant max-w-xs text-center md:text-left">
            © 2024 Placewise AI. Academic Excellence & Career Readiness.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <Link to="#" className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-inverse-primary transition-colors text-label-sm font-label-sm">Terms of Service</Link>
          <Link to="#" className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-inverse-primary transition-colors text-label-sm font-label-sm">Privacy Policy</Link>
          <Link to="#" className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-inverse-primary transition-colors text-label-sm font-label-sm">Institutional Login</Link>
          <Link to="#" className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-inverse-primary transition-colors text-label-sm font-label-sm">Contact Support</Link>
        </div>
        <div className="flex gap-4 mt-8 md:mt-0">
          <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-primary/20 cursor-pointer transition-colors">
            <span className="material-symbols-outlined text-sm">public</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-primary/20 cursor-pointer transition-colors">
            <span className="material-symbols-outlined text-sm">alternate_email</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
