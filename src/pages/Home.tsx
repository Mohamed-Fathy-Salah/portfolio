import React from 'react';
import { Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8 animate-in fade-in zoom-in duration-500">
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <img
                    src="/me.jpg"
                    alt="Mohamed Fathy Salah"
                    className="relative w-48 h-48 rounded-full object-cover border-4 border-slate-900 shadow-2xl"
                />
            </div>

            <div className="space-y-4 max-w-2xl px-4">
                <h1 className="text-4xl md:text-6xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">
                    Mohamed Fathy Salah
                </h1>
                <p className="text-xl md:text-2xl text-slate-400 font-light">
                    Backend Engineer
                </p>
                <p className="text-slate-500 leading-relaxed max-w-lg mx-auto">
                    Building scalable distributed systems and robust backend infrastructure with modern technologies.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                    href="/Mohamed-Fathy-Backend.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 hover:scale-105 transition-all shadow-lg shadow-blue-500/25"
                >
                    <Download className="w-5 h-5" />
                    Download Resume
                </a>
                <Link
                    to="/experience"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 text-slate-200 font-semibold hover:bg-slate-700 hover:scale-105 transition-all border border-slate-700"
                >
                    View Work
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
        </div>
    );
};
