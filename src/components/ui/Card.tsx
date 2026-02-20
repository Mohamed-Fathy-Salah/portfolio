import React from 'react';
import { ChevronRight } from 'lucide-react';

interface CardProps {
    title: string;
    subtitle?: string;
    description?: string;
    tags?: string[];
    icon?: string;
    link?: string;
    rightContent?: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export const Card: React.FC<CardProps> = ({ title, subtitle, description, tags, icon, link, rightContent, onClick, className = '' }) => {
    return (
        <div
            onClick={onClick}
            className={`bg-slate-900 border border-slate-800 rounded-xl p-6 transition-all duration-300 ${onClick ? 'hover:border-blue-500/50 hover:bg-slate-800/50 cursor-pointer group' : 'cursor-default'} ${className}`}
        >
            <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-4 flex-1">
                    {icon && (
                        link ? (
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="block shrink-0 hover:scale-110 transition-transform"
                            >
                                <img src={icon} alt={`${title} icon`} className="w-12 h-12 object-contain" />
                            </a>
                        ) : (
                            <img src={icon} alt={`${title} icon`} className="w-12 h-12 object-contain shrink-0" />
                        )
                    )}
                    <div className="flex-1 min-w-0">
                        <h3 className={`text-xl font-bold text-slate-100 transition-colors truncate ${onClick ? 'group-hover:text-blue-400' : ''}`}>{title}</h3>
                        {subtitle && <p className="text-sm text-slate-400 mt-1">{subtitle}</p>}
                    </div>
                </div>
                <div className="flex items-center gap-3 ml-4">
                    {rightContent && (
                        <div className="text-right hidden sm:block">
                            {rightContent}
                        </div>
                    )}
                    {onClick && (
                        <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-blue-400 transform group-hover:translate-x-1 transition-all shrink-0" />
                    )}
                </div>
            </div>

            <p className="text-slate-300 mt-3 line-clamp-3 leading-relaxed">
                {description}
            </p>

            {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                    {tags.map((tag, index) => (
                        <span key={index} className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};
