import React from 'react';
import { Card } from '../components/ui/Card';
import { useNavigate } from 'react-router-dom';
import { calculateTotalExperience, getExperienceDuration, formatDuration } from '../utils/experienceUtils';

interface Item {
    id: string;
    role?: string;
    company?: string;
    title?: string;
    description?: string;
    skills?: string[];
    techStack?: string[];
    icon?: string;
    link?: string;
    period?: string;
    [key: string]: any;
}

interface SectionListProps {
    title: string;
    items: Item[];
    type: 'experience' | 'project' | 'award' | 'education' | 'course';
}

export const SectionList: React.FC<SectionListProps> = ({ title, items, type }) => {
    const navigate = useNavigate();

    const totalExperience = type === 'experience'
        ? calculateTotalExperience(items.filter(i => i.period).map(i => i.period!))
        : null;

    return (
        <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-500">
            <div className="flex items-end justify-between mb-8 px-2">
                <h2 className="text-3xl font-bold text-slate-100">{title}</h2>
                <div className="flex items-center gap-4">
                    {totalExperience && (
                        <span className="text-blue-400 font-medium text-sm">{totalExperience}</span>
                    )}
                    <span className="text-sm text-slate-500">{items.length} items</span>
                </div>
            </div>

            <div className="grid gap-6">
                {(items as any[]).map((item, index) => {
                    let subtitle = item.company || item.issuer || item.date;
                    let rightContent = null;

                    if (type === 'experience' && item.period) {
                        const { years, months } = getExperienceDuration(item.period);
                        const durationStr = formatDuration(years, months);
                        subtitle = item.company;
                        rightContent = (
                            <div className="flex flex-col items-end">
                                <span className="text-sm font-medium text-slate-300 whitespace-nowrap">{item.period}</span>
                                <span className="text-xs text-slate-500 whitespace-nowrap">{durationStr}</span>
                            </div>
                        );
                    }

                    const handleClick = () => {
                        if (type === 'course') {
                            if (item.link) {
                                window.open(item.link, '_blank', 'noopener,noreferrer');
                            }
                        } else {
                            navigate(`/${type}s/${item.id}`);
                        }
                    };

                    return (
                        <div key={item.id} style={{ animationDelay: `${index * 100}ms` }} className="animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards">
                            <Card
                                title={item.title || item.role || 'Untitled'}
                                subtitle={subtitle}
                                description={item.description}
                                tags={item.skills || item.techStack}
                                icon={item.icon}
                                link={item.link}
                                rightContent={rightContent}
                                onClick={type === 'course' && !item.link ? undefined : handleClick}
                                className="hover:shadow-xl hover:shadow-blue-900/10"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
