import React, { useEffect } from 'react';
import { X, ChevronRight } from 'lucide-react';
import type { DetailLine } from '../../data/portfolio';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: DetailLine[];
}



const RecursiveDetailRenderer: React.FC<{ items: DetailLine[]; level?: number }> = ({ items, level = 0 }) => {
    if (!items || items.length === 0) return null;

    return (
        <div className={`flex flex-col ${level > 0 ? "pl-4 mt-2 border-l-2 border-slate-700/50" : "gap-4"}`}>
            {items.map((item, index) => (
                <ExpandableItem key={index} item={item} level={level} />
            ))}
        </div>
    );
};

// Helper component to manage state for each item independently
const ExpandableItem: React.FC<{ item: DetailLine; level: number }> = ({ item, level }) => {
    const [isExpanded, setIsExpanded] = React.useState(true); // Default to expanded or collapsed? Let's default expanded to show content, but allow collapsing. Or default collapsed for cleaner look? User usually wants to SEE details. Let's keep expanded default but allow toggle.
    // Actually, tree views often default to collapsed if deep. But for portfolio, you want to read. 
    // Let's stick to showing it, but use the state for the chevron rotation and toggle capability.

    const hasChildren = item.detailedContent && item.detailedContent.length > 0;

    return (
        <div className={`${level > 0 ? "mb-2 last:mb-0 relative" : ""}`}>
            {/* Bullet point for nested items to denote structure */}
            {level > 0 && (
                <span className="absolute -left-[21px] top-3 w-2 h-2 rounded-full bg-slate-700/50" />
            )}

            <div
                className={`group flex items-start gap-2 ${hasChildren ? 'cursor-pointer' : ''}`}
                onClick={() => hasChildren && setIsExpanded(!isExpanded)}
            >
                {/* Content */}
                <div className="flex-1">
                    {item.type === 'text' ? (
                        <p className={`text-slate-300 leading-relaxed ${level > 0 ? 'text-[0.95rem]' : ''} ${hasChildren ? 'group-hover:text-blue-400 transition-colors font-medium' : ''}`}>
                            {item.content}
                        </p>
                    ) : (
                        <div className="w-full my-3">
                            <img
                                src={item.content}
                                alt="Detail"
                                className="w-full rounded-lg border border-slate-800 shadow-lg"
                            />
                        </div>
                    )}
                </div>

                {/* Chevron for expandable items */}
                {hasChildren && (
                    <ChevronRight className={`w-4 h-4 text-slate-500 mt-1 flex-shrink-0 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''} group-hover:text-blue-400`} />
                )}
            </div>

            {hasChildren && isExpanded && (
                <RecursiveDetailRenderer items={item.detailedContent!} level={level + 1} />
            )}
        </div>
    );
};

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            window.addEventListener('keydown', handleEscape);
        }

        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            {/* Modal */}
            <div
                className="relative bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl max-w-6xl w-full max-h-[85vh] overflow-hidden animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-start justify-between p-6 border-b border-slate-800 sticky top-0 bg-slate-900 z-10">
                    <h3 className="text-xl font-semibold text-white pr-8 leading-tight">
                        {title}
                    </h3>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-lg hover:bg-slate-800 transition-colors text-slate-400 hover:text-white flex-shrink-0"
                        aria-label="Close modal"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto max-h-[calc(80vh-88px)]">
                    <RecursiveDetailRenderer items={content} />
                </div>
            </div>
        </div>
    );
};
