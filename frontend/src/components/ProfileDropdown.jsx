import React, { useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const mockData = [
  { subject: 'DSA', A: 85, fullMark: 100 },
  { subject: 'Communication', A: 72, fullMark: 100 },
  { subject: 'Projects', A: 90, fullMark: 100 },
  { subject: 'Aptitude', A: 68, fullMark: 100 },
];

export default function ProfileDropdown({ student }) {
  const [isOpen, setIsOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const name = student?.name || "Alex Johnson";
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) || "AJ";
  const subtitle = student ? `CGPA: ${student.cgpa}` : "Computer Science, Year 4";

  return (
    <div className="relative">
      <div 
        className="flex items-center gap-3 pl-4 border-l border-outline-variant cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="text-right hidden sm:block">
          <p className="font-label-md text-label-md text-on-surface">{name}</p>
          <p className="font-body-sm text-body-sm text-on-surface-variant">{subtitle}</p>
        </div>
        {imageError ? (
          <div className="w-10 h-10 rounded-full border-2 border-primary-container bg-primary/20 flex items-center justify-center text-primary font-extrabold text-sm select-none">
            {initials}
          </div>
        ) : (
          <img 
            className="w-10 h-10 rounded-full border-2 border-primary-container object-cover" 
            alt="Student profile" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwrkmKffXTsRGBz0eJn4niIKsgXX4cy_MW3hcxXOeMj2Ac_PbIVxUFAOhg5ZE86AswY4lAxAuEKxlVCDEyrfBWvriRDYrMJlZJVUHjNH42YOJLQQOMKAysf8zwhVAiqHuA9UOUGFVmTNA6Lb9jNcumbkm99xWNDtripPaVAsmrctqI1JThcAaUr5aopwWi5zGIkjxk4wT3rX8CuOyZy7y2Xokly35qI7_cTyXaQ7_2bj47ahAlGyRi" 
            onError={() => setImageError(true)}
          />
        )}
      </div>

      {isOpen && (
        <>
          {/* Fullscreen backdrop to catch click-outside and close dropdown */}
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="fixed inset-x-4 top-16 sm:absolute sm:inset-x-auto sm:right-0 sm:w-[360px] sm:mt-4 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-xl z-50 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-headline-sm text-headline-sm text-on-surface">Readiness Radar</h2>
              <button className="text-primary flex items-center gap-1 font-label-md text-label-md hover:underline">
                <span className="material-symbols-outlined text-[18px]">refresh</span> Re-sync
              </button>
            </div>
            <div className="w-full h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={mockData}>
                  <PolarGrid stroke="#E5E7EB" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#464555', fontSize: 12, fontFamily: 'Inter' }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar name="Student" dataKey="A" stroke="#4f46e5" fill="#4f46e5" fillOpacity={0.4} strokeWidth={2} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 pt-4 border-t border-outline-variant">
              <div className="text-center">
                <p className="text-on-surface-variant font-label-sm text-label-sm">DSA</p>
                <p className="text-primary font-headline-sm text-headline-sm">85%</p>
              </div>
              <div className="text-center border-l border-outline-variant">
                <p className="text-on-surface-variant font-label-sm text-label-sm">Comm</p>
                <p className="text-primary font-headline-sm text-headline-sm">72%</p>
              </div>
              <div className="text-center border-l border-outline-variant">
                <p className="text-on-surface-variant font-label-sm text-label-sm">Proj</p>
                <p className="text-primary font-headline-sm text-headline-sm">90%</p>
              </div>
              <div className="text-center border-l border-outline-variant">
                <p className="text-on-surface-variant font-label-sm text-label-sm">Apt</p>
                <p className="text-primary font-headline-sm text-headline-sm">68%</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
