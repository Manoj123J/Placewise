import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function TestPage() {
  const [timeLeft, setTimeLeft] = useState(45 * 60); // 45 minutes in seconds
  const [showConsole, setShowConsole] = useState(false);
  const lineNumbersRef = useRef(null);
  const [code, setCode] = useState(`class Solution {
    public int[] findRedundantDirectedConnection(int[][] edges) {
        // Initialize Union-Find structure
        int n = edges.length;
        int[] parent = new int[n + 1];
        for (int i = 1; i <= n; i++) parent[i] = i;
        
        // Identify potential edges with indegree of 2
        int[] first = null;
        int[] second = null;
        int[] in = new int[n + 1];
        
        for (int[] edge : edges) {
            if (in[edge[1]] > 0) {
                first = new int[]{in[edge[1]], edge[1]};
                second = edge;
            }
            in[edge[1]] = edge[0];
        }

        // Start implementation here...
        
    }
}`);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleTextareaScroll = (e) => {
    if (lineNumbersRef.current) {
      lineNumbersRef.current.scrollTop = e.target.scrollTop;
    }
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const isCriticalTime = timeLeft < 300;

  return (
    <div className="bg-background text-on-surface font-body-md h-screen flex flex-col overflow-hidden">
      {/* Top Assessment Header */}
      <header className="bg-surface-container-lowest border-b border-outline-variant px-4 sm:px-gutter py-4 flex justify-between items-center z-50 gap-2">
        <div className="flex items-center gap-4 min-w-0">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-primary font-black text-headline-sm hidden sm:block">Placewise</span>
            <div className="h-6 w-[1px] bg-outline-variant mx-2 hidden sm:block"></div>
            <h1 className="text-on-surface font-headline-sm text-[14px] sm:text-headline-sm truncate max-w-[180px] sm:max-w-none">DSA Advanced: Graph Algorithms</h1>
          </div>
        </div>
        <div className="flex items-center gap-3 sm:gap-6 shrink-0">
          {/* Live Timer */}
          <div 
            className={`flex items-center gap-1.5 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-lg transition-colors duration-500 ${isCriticalTime ? 'bg-error-container text-on-error-container' : 'bg-surface-container'}`}
          >
            <span className={`material-symbols-outlined text-[18px] ${isCriticalTime ? 'text-error animate-pulse' : 'text-on-surface-variant'}`}>
              schedule
            </span>
            <span className={`font-mono text-[14px] sm:text-headline-sm font-bold ${isCriticalTime ? 'text-error' : 'text-on-surface'}`}>
              {minutes}:{seconds.toString().padStart(2, '0')}
            </span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button className="flex items-center gap-1 text-label-md px-2 py-1.5 sm:px-3 rounded-lg border border-outline-variant hover:bg-surface-container transition-all cursor-pointer">
              <span className="material-symbols-outlined text-[16px] sm:text-[18px]">settings</span>
            </button>
            <Link to="/student/dashboard">
              <button className="flex items-center gap-1 text-label-md px-2.5 py-1.5 sm:px-3 rounded-lg border border-outline-variant text-error hover:bg-error-container transition-all cursor-pointer">
                Quit
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content: Split Screen */}
      <main className="flex-grow flex flex-col lg:flex-row overflow-hidden">
        {/* Left Panel: Problem Description (40% on large, stacked on mobile) */}
        <section className="w-full lg:w-[40%] h-[40vh] lg:h-full border-b lg:border-b-0 lg:border-r border-outline-variant bg-surface flex flex-col overflow-hidden">
          <div className="px-6 py-4 border-b border-outline-variant flex items-center justify-between bg-surface-container-low">
            <div className="flex gap-4">
              <button className="text-primary font-bold border-b-2 border-primary pb-1 text-label-md">Problem</button>
              <button className="text-on-surface-variant hover:text-primary transition-colors text-label-md">Submissions</button>
              <button className="text-on-surface-variant hover:text-primary transition-colors text-label-md">Discussion</button>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 text-label-sm">Medium</span>
              <span className="text-on-surface-variant text-label-sm">ID: 4829</span>
            </div>
          </div>
          <div className="flex-grow overflow-y-auto custom-scrollbar p-6 sm:p-8">
            <article className="max-w-none">
              <h2 className="text-headline-md mb-4 text-on-surface">14. Redundant Connection II</h2>
              <p className="text-body-md text-on-surface-variant mb-6 leading-relaxed">
                In this problem, a rooted tree is a <strong>directed graph</strong> such that, there is exactly one node (the root) for which all other nodes are descendants of this node, plus every node has exactly one parent, except for the root node which has no parents.
              </p>
              <p className="text-body-md text-on-surface-variant mb-6 leading-relaxed">
                The given input is a directed graph that started as a rooted tree with <code className="bg-surface-container-high px-1 rounded font-mono">n</code> nodes (with distinct values from 1 to n), with one additional directed edge added. The added edge has two different vertices chosen from 1 to n, and was not an edge that already existed.
              </p>
              <p className="text-body-md text-on-surface-variant mb-8 leading-relaxed">
                The resulting graph is given as a 2D-array of <code className="bg-surface-container-high px-1 rounded font-mono">edges</code>. Each element of edges is a pair <code className="bg-surface-container-high px-1 rounded font-mono">[u, v]</code> that represents a directed edge connecting nodes <code className="bg-surface-container-high px-1 rounded font-mono">u</code> and <code className="bg-surface-container-high px-1 rounded font-mono">v</code>, where <code className="bg-surface-container-high px-1 rounded font-mono">u</code> is a parent of child <code className="bg-surface-container-high px-1 rounded font-mono">v</code>.
              </p>
              
              <h3 className="text-label-md uppercase tracking-wider text-on-surface-variant mb-3">Constraints:</h3>
              <ul className="list-disc list-inside space-y-2 text-body-sm text-on-surface-variant mb-8">
                <li><code className="font-mono">n == edges.length</code></li>
                <li><code className="font-mono">3 &lt;= n &lt;= 1000</code></li>
                <li><code className="font-mono">edges[i].length == 2</code></li>
                <li><code className="font-mono">1 &lt;= u, v &lt;= n</code></li>
              </ul>
              
              <h3 className="text-label-md uppercase tracking-wider text-on-surface-variant mb-4">Examples:</h3>
              <div className="space-y-6">
                <div className="rounded-xl border border-outline-variant overflow-hidden">
                  <div className="bg-surface-container-low px-4 py-2 border-b border-outline-variant flex justify-between items-center">
                    <span className="text-label-sm font-bold">Example 1</span>
                    <span className="material-symbols-outlined text-[16px] text-on-surface-variant cursor-pointer">content_copy</span>
                  </div>
                  <div className="p-4 bg-surface-container-lowest font-mono text-body-sm">
                    <div className="mb-2"><span className="text-primary-container font-bold">Input:</span> edges = [[1,2], [1,3], [2,3]]</div>
                    <div><span className="text-primary-container font-bold">Output:</span> [2,3]</div>
                  </div>
                </div>
                
                <div className="rounded-xl border border-outline-variant overflow-hidden">
                  <div className="bg-surface-container-low px-4 py-2 border-b border-outline-variant flex justify-between items-center">
                    <span className="text-label-sm font-bold">Example 2</span>
                    <span className="material-symbols-outlined text-[16px] text-on-surface-variant cursor-pointer">content_copy</span>
                  </div>
                  <div className="p-4 bg-surface-container-lowest font-mono text-body-sm">
                    <div className="mb-2"><span className="text-primary-container font-bold">Input:</span> edges = [[1,2], [2,3], [3,4], [4,1], [1,5]]</div>
                    <div><span className="text-primary-container font-bold">Output:</span> [4,1]</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Right Panel: Editor (60% on large, stacked below on mobile) */}
        <section className="w-full lg:w-[60%] h-[60vh] lg:h-full flex flex-col bg-inverse-surface relative overflow-hidden text-white">
          {/* Editor Toolbar */}
          <div className="h-12 border-b border-white/20 px-4 flex items-center justify-between bg-[#1e232c] select-none shrink-0">
            <div className="flex items-center gap-4">
              <div className="relative">
                <select className="bg-transparent text-white text-label-md border-none focus:ring-0 appearance-none cursor-pointer pr-6 outline-none">
                  <option value="cpp">C++ 17</option>
                  <option value="java">Java (OpenJDK 11)</option>
                  <option value="python">Python 3.10</option>
                </select>
                <span className="material-symbols-outlined text-white/50 text-[18px] absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">expand_more</span>
              </div>
              <div className="h-4 w-[1px] bg-white/20"></div>
              <button className="text-white/70 hover:text-white transition-colors flex items-center gap-1 text-label-sm cursor-pointer">
                <span className="material-symbols-outlined text-[18px]">auto_fix_high</span>
                Auto-format
              </button>
            </div>
            <div className="flex items-center gap-3">
              <button className="text-white/70 hover:text-white transition-colors cursor-pointer">
                <span className="material-symbols-outlined">fullscreen</span>
              </button>
            </div>
          </div>
          
          {/* Code Content Area */}
          <div className="flex-grow flex font-mono text-body-md overflow-hidden relative bg-[#151c27]">
            {/* Line Numbers - Scrollable container synced to textarea scroll */}
            <div 
              ref={lineNumbersRef}
              className="w-12 bg-[#1e232c] border-r border-white/5 flex flex-col items-center py-4 text-white/30 select-none overflow-hidden h-full"
            >
              {Array.from({ length: 40 }, (_, i) => (
                <span key={i + 1} className="leading-relaxed">{i + 1}</span>
              ))}
            </div>
            
            {/* Editor Surface */}
            <textarea
              className="flex-grow p-4 bg-transparent text-white/90 overflow-y-auto custom-scrollbar leading-relaxed resize-none outline-none font-mono text-body-md whitespace-pre h-full"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              onScroll={handleTextareaScroll}
              spellCheck="false"
            />
          </div>
          
          {/* Console / Action Bar */}
          <div className="h-24 bg-surface-container-lowest border-t border-outline-variant flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:px-8 text-on-surface gap-4 shrink-0 overflow-y-auto">
            <div className="flex items-center gap-4 min-w-0">
              <button 
                className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer select-none shrink-0"
                onClick={() => setShowConsole(!showConsole)}
              >
                <span className="material-symbols-outlined">terminal</span>
                <span className="text-label-md">Console</span>
              </button>
              
              {showConsole && (
                <div className="flex animate-in slide-in-from-bottom-2 min-w-0">
                  <span className="flex items-center gap-1 text-emerald-600 text-label-sm truncate">
                    <span className="material-symbols-outlined text-[18px] shrink-0">check_circle</span>
                    <span className="truncate">Test case 1 passed</span>
                  </span>
                </div>
              )}
            </div>
            
            <div className="flex items-center gap-3 sm:gap-4 shrink-0 w-full sm:w-auto justify-end">
              <button className="px-4 py-2 sm:px-6 sm:py-2.5 rounded-lg border border-outline-variant font-label-md text-on-surface hover:bg-surface-container transition-all active:scale-95 cursor-pointer">
                Run
              </button>
              <button className="px-5 py-2 sm:px-8 sm:py-2.5 rounded-lg bg-primary text-white font-label-md shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer">
                Submit
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
