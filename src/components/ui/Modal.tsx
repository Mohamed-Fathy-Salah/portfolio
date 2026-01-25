import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import type { DetailLine } from '../../data/portfolio';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: DetailLine[];
}

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
                className="relative bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden animate-in zoom-in-95 duration-200"
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
                    <div className="space-y-4">
                        {content.map((line, index) => (
                            <div key={index}>
                                {line.type === 'text' ? (
                                    <p className="text-slate-300 leading-relaxed">
                                        {line.content}
                                    </p>
                                ) : (
                                    <div className="w-full">
                                        <img
                                            src={line.content}
                                            alt={`Detail ${index + 1}`}
                                            className="w-full rounded-lg border border-slate-800 shadow-lg"
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
