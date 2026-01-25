import React, { useMemo, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { experiences, projects, awards, education } from '../data/portfolio';
import type { Experience, Education, DetailItem, DetailLine } from '../data/portfolio';
import { ArrowLeft, ExternalLink, Calendar, Building, Award, GraduationCap, ChevronRight } from 'lucide-react';
import { Modal } from '../components/ui/Modal';


export const DetailView: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [modalOpen, setModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalContent, setModalContent] = useState<DetailLine[]>([]);

    const item = useMemo(() => {
        const allItems = [...experiences, ...projects, ...awards, ...education];
        return allItems.find(i => i.id === id);
    }, [id]);

    const handleDetailClick = (detail: DetailItem) => {
        if (detail.detailedContent && detail.detailedContent.length > 0) {
            setModalTitle(detail.summary);
            setModalContent(detail.detailedContent);
            setModalOpen(true);
        }
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    if (!item) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl text-slate-400">Item not found</h2>
                <button onClick={() => navigate(-1)} className="mt-4 text-blue-400 hover:underline">Go Back</button>
            </div>
        );
    }

    // Determine type for specific layouts/icons
    const isExp = experiences.find(e => e.id === id);
    const isAward = awards.find(a => a.id === id);
    const isEdu = education.find(e => e.id === id);

    // Helpers for type safety
    const getTitle = () => (item as any).title || (item as any).role || (item as any).degree;
    const getSubtitle = () => (item as any).company || (item as any).issuer || (item as any).institution;
    const getDate = () => (item as any).period || (item as any).date;
    const getLink = () => (item as any).link;
    const getLongDesc = () => (item as any).longDescription || (item as any).description;
    const getTags = () => (item as any).skills || (item as any).techStack || [];

    return (
        <div className="max-w-3xl mx-auto animate-in fade-in zoom-in-95 duration-300">
            <button
                onClick={() => navigate(-1)}
                className="mb-8 flex items-center text-slate-500 hover:text-blue-400 transition-colors group"
            >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to list
            </button>

            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
                <header className="mb-8 border-b border-slate-800 pb-8">
                    <div className="flex justify-between items-start gap-4">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                {getTitle()}
                            </h1>

                            <div className="flex flex-wrap gap-4 text-slate-400 mt-4">
                                {getSubtitle() && (
                                    <div className="flex items-center gap-2">
                                        {isAward ? <Award className="w-4 h-4" /> :
                                            isEdu ? <GraduationCap className="w-4 h-4" /> :
                                                <Building className="w-4 h-4" />}
                                        <span>{getSubtitle()}</span>
                                    </div>
                                )}
                                {getDate() && (
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        <span>{getDate()}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {getLink() && (
                            <a
                                href={getLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-blue-600/10 text-blue-400 rounded-full hover:bg-blue-600 hover:text-white transition-all"
                            >
                                <ExternalLink className="w-5 h-5" />
                            </a>
                        )}
                    </div>
                </header>

                <div className="space-y-8 text-slate-300 leading-relaxed">

                    <div className="prose prose-invert max-w-none">
                        <h3 className="text-xl font-semibold text-white mb-4">Overview</h3>
                        <p>{getLongDesc()}</p>
                    </div>

                    {/* Experience Specific Details */}
                    {isExp && (isExp as Experience).details && (
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-4">Key Achievements</h3>
                            <ul className="space-y-3">
                                {(isExp as Experience).details.map((detail: DetailItem, i: number) => (
                                    <li
                                        key={i}
                                        className={`flex gap-3 items-start ${detail.detailedContent && detail.detailedContent.length > 0
                                            ? 'cursor-pointer hover:bg-slate-800/50 -mx-3 px-3 py-2 rounded-lg transition-colors group/item'
                                            : ''
                                            }`}
                                        onClick={() => handleDetailClick(detail)}
                                    >
                                        <span className={`w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0 ${detail.detailedContent && detail.detailedContent.length > 0 ? 'group-hover/item:scale-125 transition-transform' : ''}`} />
                                        <div className="flex-1">
                                            <span className={detail.detailedContent && detail.detailedContent.length > 0 ? 'group-hover/item:text-blue-400 transition-colors font-medium block' : ''}>
                                                {detail.summary}
                                            </span>
                                        </div>
                                        {detail.detailedContent && detail.detailedContent.length > 0 && (
                                            <ChevronRight className="w-4 h-4 text-slate-500 mt-1 group-hover/item:text-blue-400 group-hover/item:translate-x-1 transition-all" />
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Education Specific Details */}
                    {isEdu && (isEdu as Education).details && (
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-4">Academic Highlights</h3>
                            <ul className="space-y-3">
                                {(isEdu as Education).details?.map((detail: DetailItem, i: number) => (
                                    <li
                                        key={i}
                                        className={`flex gap-3 items-start ${detail.detailedContent && detail.detailedContent.length > 0
                                            ? 'cursor-pointer hover:bg-slate-800/50 -mx-3 px-3 py-2 rounded-lg transition-colors group/item'
                                            : ''
                                            }`}
                                        onClick={() => handleDetailClick(detail)}
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                                        <div className="flex-1">
                                            <span className={detail.detailedContent && detail.detailedContent.length > 0 ? 'group-hover/item:text-blue-400 transition-colors font-medium block' : ''}>
                                                {detail.summary}
                                            </span>
                                        </div>
                                        {detail.detailedContent && detail.detailedContent.length > 0 && (
                                            <ChevronRight className="w-4 h-4 text-slate-500 mt-1 group-hover/item:text-blue-400 group-hover/item:translate-x-1 transition-all" />
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Tech Stack / Skills */}
                    {getTags().length > 0 && (
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-4">Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                {getTags().map((tech: string, i: number) => (
                                    <span key={i} className="px-3 py-1.5 rounded-md bg-slate-800 border border-slate-700 text-sm text-slate-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Related links section */}
                    <div className="mt-12 pt-8 border-t border-slate-800">
                        <h4 className="text-sm uppercase tracking-wider text-slate-500 mb-4">You might also like</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Link to="/projects/proj1" className="block p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors">
                                <div className="text-slate-200 font-medium">E-commerce Platform</div>
                                <div className="text-sm text-slate-500">Related Project</div>
                            </Link>
                            <Link to="/experience/exp1" className="block p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors">
                                <div className="text-slate-200 font-medium">Senior Backend Engineer</div>
                                <div className="text-sm text-slate-500">Related Experience</div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

            <Modal
                isOpen={modalOpen}
                onClose={closeModal}
                title={modalTitle}
                content={modalContent}
            />
        </div>
    );
};
