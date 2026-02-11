import React from 'react';
import { Outlet } from 'react-router-dom';
import { Tabs } from '../ui/Tabs';
import { Github, Linkedin, Mail } from 'lucide-react';
import { LeetCodeIcon } from '../icons/LeetCodeIcon';
import { CodeforcesIcon } from '../icons/CodeforcesIcon';
import { WhatsAppIcon } from '../icons/WhatsAppIcon';

export const Layout: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col pt-28 pb-12 px-4 max-w-4xl mx-auto">
            <Tabs />

            <main className="flex-grow animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Outlet />
            </main>

            <footer className="mt-20 pt-8 border-t border-slate-800 text-center text-slate-500 flex flex-col items-center gap-4">
                <div className="flex gap-6">
                    <a href="https://wa.me/201143191824" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors"><WhatsAppIcon className="w-5 h-5" /></a>
                    <a href="mailto:mohamedfathy29908@gmail.com" className="hover:text-blue-400 transition-colors"><Mail className="w-5 h-5" /></a>
                    <a href="https://linkedin.com/in/mohamed-fathy-b30047202" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
                    <a href="https://github.com/Mohamed-Fathy-Salah" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors"><Github className="w-5 h-5" /></a>
                    <a href="https://leetcode.com/u/user1869Z/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors"><LeetCodeIcon className="w-5 h-5" /></a>
                    <a href="https://codeforces.com/profile/Mo_Fathy" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors"><CodeforcesIcon className="w-5 h-5" /></a>
                </div>
            </footer>
        </div>
    );
};
