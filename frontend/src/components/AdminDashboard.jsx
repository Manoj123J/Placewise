import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [rev1Error, setRev1Error] = useState(false);
  const [rev2Error, setRev2Error] = useState(false);

  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen flex flex-col md:flex-row">
      {/* Mobile Sticky Header Bar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-surface-container-lowest border-b border-outline-variant sticky top-0 z-30 w-full select-none">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-on-primary">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
          </div>
          <span className="font-bold text-primary text-label-md">Admin Panel</span>
        </div>
        <button 
          className="p-1 text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
          onClick={() => setIsSidebarOpen(true)}
          aria-label="Open sidebar menu"
        >
          <span className="material-symbols-outlined text-[28px] leading-none">menu</span>
        </button>
      </div>

      {/* SideNavBar Dim Backdrop on Mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* SideNavBar Drawer */}
      <aside className={`fixed h-full left-0 w-64 bg-surface-container-low border-r border-outline-variant flex flex-col p-4 gap-stack-md z-50 transform transition-transform duration-300 md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between md:justify-start gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-on-primary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
            </div>
            <div>
              <h1 className="text-headline-sm font-black text-primary">Admin Panel</h1>
              <p className="text-label-sm text-on-surface-variant">University Placement</p>
            </div>
          </div>
          {/* Close button for sidebar on mobile */}
          <button 
            className="md:hidden p-1.5 text-on-surface-variant hover:text-primary cursor-pointer transition-colors"
            onClick={() => setIsSidebarOpen(false)}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        
        <nav className="flex-1 space-y-1">
          <Link to="/admin/dashboard" onClick={() => setIsSidebarOpen(false)} className="flex items-center gap-3 px-3 py-2 bg-primary-container text-on-primary-container font-bold rounded-lg translate-x-1 transition-transform duration-200 group relative">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z" fill="currentColor"></path>
            </svg>
            <span className="text-label-md">Overview</span>
            <div className="absolute left-full ml-2 px-2 py-1 bg-inverse-surface text-white text-label-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 whitespace-nowrap">Overview</div>
          </Link>
          <Link to="#" className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-high transition-all rounded-lg group relative">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.73 13 15.39 13.01 15.03 13.04C16.2 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z" fill="currentColor"></path>
            </svg>
            <span className="text-label-md">Cohorts</span>
            <div className="absolute left-full ml-2 px-2 py-1 bg-inverse-surface text-white text-label-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 whitespace-nowrap">Cohorts</div>
          </Link>
          <Link to="#" className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-high transition-all rounded-lg group relative">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18ZM12 3L1 9L12 15L21 10.09V17H23V9L12 3Z" fill="currentColor"></path>
            </svg>
            <span className="text-label-md">Students</span>
            <div className="absolute left-full ml-2 px-2 py-1 bg-inverse-surface text-white text-label-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 whitespace-nowrap">Students</div>
          </Link>
          <Link to="#" className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-high transition-all rounded-lg group relative">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" fill="currentColor"></path>
            </svg>
            <span className="text-label-md">Reports</span>
            <div className="absolute left-full ml-2 px-2 py-1 bg-inverse-surface text-white text-label-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 whitespace-nowrap">Reports</div>
          </Link>
          <Link to="#" className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-high transition-all rounded-lg group relative">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.14 12.94C19.18 12.63 19.21 12.32 19.21 12C19.21 11.68 19.18 11.37 19.14 11.06L21.16 9.48C21.34 9.33 21.39 9.08 21.28 8.87L19.37 5.55C19.25 5.34 19 5.26 18.79 5.34L16.41 6.3C15.91 5.92 15.37 5.61 14.79 5.37L14.43 2.84C14.39 2.62 14.2 2.46 13.98 2.46H10.16C9.94 2.46 9.75 2.62 9.71 2.84L9.35 5.37C8.77 5.61 8.23 5.92 7.73 6.3L5.35 5.34C5.14 5.26 4.89 5.34 4.77 5.55L2.86 8.87C2.75 9.08 2.8 9.33 2.98 9.48L5 11.06C4.96 11.37 4.93 11.68 4.93 12C4.93 12.32 4.96 12.63 5 12.94L2.98 14.52C2.8 14.67 2.75 14.92 2.86 15.13L4.77 18.45C4.89 18.66 5.14 18.74 5.35 18.66L7.73 17.7C8.23 18.08 8.77 18.39 9.35 18.63L9.71 21.16C9.75 21.38 9.94 21.54 10.16 21.54H13.98C14.2 21.54 14.39 21.38 14.43 21.16L14.79 18.63C15.37 18.39 15.91 18.08 16.41 17.7L18.79 18.66C19 18.74 19.25 18.66 19.37 18.45L21.28 15.13C21.39 14.92 21.34 14.67 21.16 14.52L19.14 12.94ZM12 15.6C10.01 15.6 8.4 13.99 8.4 12C8.4 10.01 10.01 8.4 12 8.4C13.99 8.4 15.6 10.01 15.6 12C15.6 13.99 13.99 15.6 12 15.6Z" fill="currentColor"></path>
            </svg>
            <span className="text-label-md">Settings</span>
            <div className="absolute left-full ml-2 px-2 py-1 bg-inverse-surface text-white text-label-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 whitespace-nowrap">Settings</div>
          </Link>
        </nav>
        
        <div className="mt-auto space-y-1 pt-4 border-t border-outline-variant">
          <button className="w-full mb-4 py-2 px-4 bg-primary text-on-primary rounded-lg font-label-md hover:bg-primary-container transition-colors shadow-sm cursor-pointer select-none">
            Export Data
          </button>
          <Link to="#" className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined">help</span>
            <span className="text-label-sm">Support</span>
          </Link>
          <Link to="/" className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:text-error transition-colors">
            <span className="material-symbols-outlined">logout</span>
            <span className="text-label-sm">Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 p-gutter max-w-container-max mx-auto w-full flex flex-col min-h-screen">
        {/* Header Section */}
        <header className="mb-stack-lg flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <nav className="flex items-center gap-2 text-label-sm text-on-surface-variant mb-2">
              <span>Admin</span>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span>Dashboard</span>
            </nav>
            <h2 className="text-headline-lg font-headline-lg text-[22px] sm:text-[26px] md:text-headline-lg text-on-surface">Placement Cell Overview - 2024 Cohort</h2>
          </div>
          
          <div className="flex items-center gap-stack-sm select-none">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-surface overflow-hidden flex items-center justify-center bg-primary/20">
                {rev1Error ? (
                  <span className="text-primary text-[10px] font-bold">SR</span>
                ) : (
                  <img 
                    className="w-full h-full object-cover" 
                    alt="Reviewer" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP6kySrLjIT6yOPxZqAKJbl9b2UfZKKcKCFBPLyxRwdVl6nfqCP7ZQ7VTwyLRSSRPKzK4S2ub_N4NGtscteYZIWvu_OLWagEsLAW-4Pi7mFDuPN0rEo_bZL4fhA69N5Wd8kXx75MHE8SRQ8oxxtL6Ic42kC31v9EyIa6DNqID2JBg92kLc4uE8zFfr9pawwZ0unw736QK_RNbMbYOcZAhFN7EarwxV_SKJ9DhHhYkX1UchekZJyhS3" 
                    onError={() => setRev1Error(true)}
                  />
                )}
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-surface overflow-hidden flex items-center justify-center bg-secondary/20">
                {rev2Error ? (
                  <span className="text-secondary text-[10px] font-bold">MK</span>
                ) : (
                  <img 
                    className="w-full h-full object-cover" 
                    alt="Reviewer" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAexQ19qcfupwbRaRAIoCmyzetwbyb6kU-Jh_Cn9a-zvK1GnDD1hY7yWIqIHgHF_fR6d5t3sPhmrzvShZcaR4neAhbrBot3wJe_ksYMdI1ubxwvZsspDPShXkProLli3CZLQde4x4BofTJPL7lU3RBkbYSCzVN7UEw3-HTtnI3lwXOXWhehccY0zSXU5n2RBA_e0qe4l-zz36FwDl5O1q5Mpe2j3xIyGG1o8w7bn27JbIOo7JzYD13R" 
                    onError={() => setRev2Error(true)}
                  />
                )}
              </div>
              <div className="w-8 h-8 rounded-full bg-surface-container-highest border-2 border-surface flex items-center justify-center text-[10px] font-bold text-on-surface-variant">
                +4
              </div>
            </div>
            <span className="text-label-sm text-on-surface-variant">Active Reviewers</span>
          </div>
        </header>

        {/* Stats Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-stack-lg">
          <div className="bg-surface-container-lowest p-inset-card rounded-xl border border-outline-variant shadow-sm flex items-center justify-between">
            <div>
              <p className="text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Total Students</p>
              <h3 className="text-headline-md font-bold text-on-surface">1,248</h3>
              <p className="text-body-sm text-emerald-600 flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-[16px]">trending_up</span> +12% vs last year
              </p>
            </div>
            <div className="w-12 h-12 bg-primary-fixed rounded-full flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">group</span>
            </div>
          </div>
          
          <div className="bg-surface-container-lowest p-inset-card rounded-xl border border-outline-variant shadow-sm flex items-center justify-between">
            <div>
              <p className="text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Placed</p>
              <h3 className="text-headline-md font-bold text-on-surface">842</h3>
              <div className="w-32 h-2 bg-surface-container mt-3 rounded-full overflow-hidden">
                <div className="bg-primary h-full rounded-full" style={{ width: '67.4%' }}></div>
              </div>
              <p className="text-label-sm mt-1 text-on-surface-variant">67.4% Success Rate</p>
            </div>
            <div className="w-12 h-12 bg-secondary-fixed rounded-full flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined">assignment_turned_in</span>
            </div>
          </div>
          
          <div className="bg-surface-container-lowest p-inset-card rounded-xl border border-outline-variant shadow-sm flex items-center justify-between">
            <div>
              <p className="text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Eligible</p>
              <h3 className="text-headline-md font-bold text-on-surface">1,012</h3>
              <p className="text-body-sm text-tertiary flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-[16px]">priority_high</span> 236 students at risk
              </p>
            </div>
            <div className="w-12 h-12 bg-tertiary-fixed rounded-full flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined">verified</span>
            </div>
          </div>
        </section>

        {/* Main Data Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg mb-8 flex-grow">
          
          {/* Table Card */}
          <div className="lg:col-span-8 bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm flex flex-col overflow-hidden">
            <div className="p-inset-card flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-outline-variant">
              <div>
                <h4 className="text-headline-sm font-bold text-on-surface">Assigned Students</h4>
                <p className="text-body-sm text-on-surface-variant">Recent candidate assessments and status</p>
              </div>
              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                <div className="relative flex-1 md:flex-initial w-full md:w-auto">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
                  <input className="pl-10 pr-4 py-2 bg-surface-container text-body-sm border-none rounded-lg focus:ring-2 focus:ring-primary w-full md:w-64 outline-none" placeholder="Search students..." type="text" />
                </div>
                <button className="p-2 hover:bg-surface-container rounded-lg transition-colors border border-transparent cursor-pointer">
                  <span className="material-symbols-outlined">filter_list</span>
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-surface-container-low text-label-sm text-on-surface-variant">
                  <tr>
                    <th className="px-6 py-4 font-semibold uppercase tracking-wider">Name</th>
                    <th className="px-6 py-4 font-semibold uppercase tracking-wider">CGPA</th>
                    <th className="px-6 py-4 font-semibold uppercase tracking-wider text-center">Skill Score</th>
                    <th className="px-6 py-4 font-semibold uppercase tracking-wider">Eligibility Status</th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {/* Ready Row */}
                  <tr className="hover:bg-surface transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-primary-fixed-dim flex items-center justify-center text-primary-fixed font-bold text-sm">JS</div>
                        <div>
                          <div className="text-body-md font-semibold text-on-surface">Jared Sullivan</div>
                          <div className="text-label-sm text-on-surface-variant">Computer Science</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-body-md text-on-surface">9.2</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col items-center">
                        <span className="text-body-sm font-bold text-primary">94/100</span>
                        <div className="w-24 h-1.5 bg-surface-container rounded-full overflow-hidden mt-1">
                          <div className="bg-primary h-full" style={{ width: '94%' }}></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700">Ready</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>
                  
                  {/* At Risk Row */}
                  <tr className="hover:bg-surface transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-tertiary-fixed-dim flex items-center justify-center text-tertiary-fixed font-bold text-sm">AM</div>
                        <div>
                          <div className="text-body-md font-semibold text-on-surface">Anaya Miller</div>
                          <div className="text-label-sm text-on-surface-variant">Information Systems</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-body-md text-on-surface">7.4</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col items-center">
                        <span className="text-body-sm font-bold text-tertiary">62/100</span>
                        <div className="w-24 h-1.5 bg-surface-container rounded-full overflow-hidden mt-1">
                          <div className="bg-tertiary h-full" style={{ width: '62%' }}></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-700">At Risk</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>
                  
                  {/* Ineligible Row */}
                  <tr className="hover:bg-surface transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-error-container flex items-center justify-center text-error font-bold text-sm">LK</div>
                        <div>
                          <div className="text-body-md font-semibold text-on-surface">Liam Kim</div>
                          <div className="text-label-sm text-on-surface-variant">Data Engineering</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-body-md text-on-surface">5.8</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col items-center">
                        <span className="text-body-sm font-bold text-error">45/100</span>
                        <div className="w-24 h-1.5 bg-surface-container rounded-full overflow-hidden mt-1">
                          <div className="bg-error h-full" style={{ width: '45%' }}></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-700">Ineligible</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-surface border-t border-outline-variant flex items-center justify-between text-label-sm text-on-surface-variant">
              <span>Showing 3 of 1,248 students</span>
              <div className="flex items-center gap-2">
                <button className="p-1 hover:bg-surface-container rounded border border-outline-variant disabled:opacity-50" disabled>
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="p-1 hover:bg-surface-container rounded border border-outline-variant">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Heatmap/Visualization Card */}
          <div className="lg:col-span-4 space-y-stack-lg">
            <div className="bg-surface-container-lowest p-inset-card rounded-xl border border-outline-variant shadow-sm">
              <div className="mb-4">
                <h4 className="text-headline-sm font-bold text-on-surface">Cohort Skill-Gap Heatmap</h4>
                <p className="text-body-sm text-on-surface-variant">Tech stack proficiency levels</p>
              </div>
              <div className="relative pt-6">
                {/* Heatmap Grid */}
                <div className="grid grid-cols-4 gap-2">
                  <div className="col-span-1"></div>
                  <div className="text-[10px] font-bold text-on-surface-variant text-center uppercase tracking-tighter">FE</div>
                  <div className="text-[10px] font-bold text-on-surface-variant text-center uppercase tracking-tighter">BE</div>
                  <div className="text-[10px] font-bold text-on-surface-variant text-center uppercase tracking-tighter">DE</div>
                  
                  <div className="text-[10px] font-bold text-on-surface-variant self-center uppercase pr-2 text-right">A1</div>
                  <div className="h-10 rounded-md heatmap-cell bg-primary-container opacity-90 border border-primary/20 shadow-sm" title="High: 92%"></div>
                  <div className="h-10 rounded-md heatmap-cell bg-primary-container opacity-60 border border-primary/20 shadow-sm" title="Mid-High: 78%"></div>
                  <div className="h-10 rounded-md heatmap-cell bg-primary-container opacity-40 border border-primary/20 shadow-sm" title="Mid: 62%"></div>
                  
                  <div className="text-[10px] font-bold text-on-surface-variant self-center uppercase pr-2 text-right">A2</div>
                  <div className="h-10 rounded-md heatmap-cell bg-primary-container opacity-50 border border-primary/20 shadow-sm" title="Mid: 68%"></div>
                  <div className="h-10 rounded-md heatmap-cell bg-primary-container opacity-30 border border-primary/20 shadow-sm" title="Low-Mid: 45%"></div>
                  <div className="h-10 rounded-md heatmap-cell bg-primary-container opacity-95 border border-primary/20 shadow-sm" title="Expert: 96%"></div>
                  
                  <div className="text-[10px] font-bold text-on-surface-variant self-center uppercase pr-2 text-right">B1</div>
                  <div className="h-10 rounded-md heatmap-cell bg-primary-container opacity-20 border border-primary/20 shadow-sm" title="Low: 32%"></div>
                  <div className="h-10 rounded-md heatmap-cell bg-primary-container opacity-80 border border-primary/20 shadow-sm" title="High: 84%"></div>
                  <div className="h-10 rounded-md heatmap-cell bg-primary-container opacity-70 border border-primary/20 shadow-sm" title="Mid-High: 75%"></div>
                  
                  <div className="text-[10px] font-bold text-on-surface-variant self-center uppercase pr-2 text-right">B2</div>
                  <div className="h-10 rounded-md heatmap-cell bg-primary-container opacity-60 border border-primary/20 shadow-sm" title="Mid: 72%"></div>
                  <div className="h-10 rounded-md heatmap-cell bg-primary-container opacity-40 border border-primary/20 shadow-sm" title="Mid-Low: 58%"></div>
                  <div className="h-10 rounded-md heatmap-cell bg-primary-container opacity-10 border border-primary/20 shadow-sm" title="Critical Gap: 12%"></div>
                </div>
                
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-on-surface-variant">Gap Legend:</span>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded bg-primary-container opacity-10"></div>
                    <div className="w-3 h-3 rounded bg-primary-container opacity-50"></div>
                    <div className="w-3 h-3 rounded bg-primary-container opacity-100"></div>
                    <span className="text-[10px] text-on-surface-variant ml-1">Critical → Optimal</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Performance Radar Suggestion */}
            <div className="bg-gradient-to-br from-primary-container to-primary p-inset-card rounded-xl shadow-lg relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-white text-headline-sm font-bold">Placement Forecast</h4>
                <p className="text-on-primary-container text-body-sm mb-4">AI predicts 92% placement by Q4 based on current skill growth.</p>
                <button className="px-4 py-2 bg-white text-primary rounded-lg font-label-md hover:shadow-md transition-all">View Details</button>
              </div>
              {/* Abstract AI Graphic Element */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 opacity-20 transform rotate-12">
                <span className="material-symbols-outlined text-[120px] text-white">auto_awesome</span>
              </div>
            </div>
          </div>
          
        </div>

        {/* Footer Integration - Placed inside main so it's vertically positioned correctly alongside sidebar */}
        <footer className="w-full py-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center mt-auto">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="text-label-md font-bold text-on-surface">Placewise AI</span>
            <span className="text-on-surface-variant">|</span>
            <span className="text-body-sm text-on-surface-variant">© 2024 Academic Excellence & Career Readiness.</span>
          </div>
          <div className="flex gap-6 text-label-sm">
            <Link to="#" className="text-on-surface-variant hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="#" className="text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-on-surface-variant hover:text-primary transition-colors">Contact Support</Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
