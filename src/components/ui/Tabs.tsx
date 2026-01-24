import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Briefcase, FolderGit2, Award, GraduationCap } from 'lucide-react';

export const Tabs: React.FC = () => {
    const location = useLocation();

    const items = [
        { label: 'Home', path: '/', icon: <Home className="w-4 h-4" /> },
        { label: 'Experience', path: '/experience', icon: <Briefcase className="w-4 h-4" /> },
        { label: 'Projects', path: '/projects', icon: <FolderGit2 className="w-4 h-4" /> },
        { label: 'Awards', path: '/awards', icon: <Award className="w-4 h-4" /> },
        { label: 'Education', path: '/education', icon: <GraduationCap className="w-4 h-4" /> },
    ];

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[90vw]">
            <div className="flex items-center gap-1 p-1.5 rounded-full bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 ring-1 ring-white/5 overflow-x-auto no-scrollbar">
                {items.map((item) => {
                    const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));

                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`
                                relative px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ease-out flex items-center gap-2.5 shrink-0
                                ${isActive
                                    ? 'text-white bg-slate-800/80 shadow-[0_0_20px_rgba(59,130,246,0.15)] ring-1 ring-white/10'
                                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                                }
                            `}
                        >
                            <span className="relative z-10">{item.icon}</span>
                            <span className={`relative z-10 hidden sm:block ${isActive ? 'font-semibold' : ''}`}>
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};
