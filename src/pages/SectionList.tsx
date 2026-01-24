import React from 'react';
import { Card } from '../components/ui/Card';
import { useNavigate } from 'react-router-dom';

interface Item {
    id: string;
    role?: string;
    company?: string;
    title?: string;
    description: string;
    skills?: string[];
    techStack?: string[];
    [key: string]: any;
}

interface SectionListProps {
    title: string;
    items: Item[];
    type: 'experience' | 'project' | 'award' | 'education';
}

export const SectionList: React.FC<SectionListProps> = ({ title, items, type }) => {
    const navigate = useNavigate();

    return (
        <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-500">
            <div className="flex items-center justify-between mb-8 px-2">
                <h2 className="text-3xl font-bold text-slate-100">{title}</h2>
                <span className="text-sm text-slate-500">{items.length} items</span>
            </div>

            <div className="grid gap-6">
                {items.map((item, index) => (
                    <div key={item.id} style={{ animationDelay: `${index * 100}ms` }} className="animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards">
                        <Card
                            title={item.title || item.role || 'Untitled'}
                            subtitle={item.company || item.issuer || item.date}
                            description={item.description}
                            tags={item.skills || item.techStack}
                            onClick={() => navigate(`/${type}s/${item.id}`)}
                            className="hover:shadow-xl hover:shadow-blue-900/10"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
