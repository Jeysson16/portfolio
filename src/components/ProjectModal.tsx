import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  // Lock body scroll when modal is open
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

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              layoutId={`card-container-${project.id}`}
              className="pointer-events-auto w-full max-w-4xl max-h-[90vh] overflow-y-auto overflow-x-hidden rounded-3xl bg-[#121212] border border-white/10 shadow-2xl relative custom-scrollbar flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-20 rounded-full bg-black/50 p-2 text-white/70 backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
              </button>

              {/* Image Section */}
              <div className="w-full md:w-1/2 relative bg-gray-900 md:h-auto h-64 shrink-0">
                <motion.div 
                    layoutId={`card-image-container-${project.id}`}
                    className="w-full h-full relative overflow-hidden"
                >
                    <motion.img
                        layoutId={`card-image-${project.id}`}
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover absolute inset-0"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent md:bg-gradient-to-r pointer-events-none" />
              </div>

              {/* Content Section */}
              <div className="flex flex-col p-6 md:p-10 w-full md:w-1/2">
                <motion.h2 
                  layoutId={`card-title-${project.id}`}
                  className="text-3xl font-bold text-white mb-2"
                >
                  {project.title}
                </motion.h2>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gray-300 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-4 text-gray-300 mb-8 flex-grow">
                  <p className="text-lg font-medium text-white">{project.shortDescription}</p>
                  <p className="leading-relaxed text-gray-400 text-sm">{project.fullDescription}</p>
                  
                  {/* Gallery Preview */}
                  {project.gallery && project.gallery.length > 1 && (
                     <div className="grid grid-cols-2 gap-2 mt-4">
                       {project.gallery.slice(0, 2).map((img, idx) => (
                         <img key={idx} src={img} alt="" className="rounded-lg object-cover h-20 w-full opacity-70 hover:opacity-100 transition-opacity" />
                       ))}
                     </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3 mt-auto pt-6 border-t border-white/10">
                    {/* Render Repo Links if multiple */}
                    {project.repoLinks && project.repoLinks.length > 0 ? (
                      <div className="flex gap-2">
                         {project.repoLinks.map((link) => (
                           <a
                             key={link.label}
                             href={link.url}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="flex-1 flex items-center justify-center gap-2 rounded-full bg-white text-black px-4 py-3 font-bold text-sm transition-transform hover:scale-105 active:scale-95"
                           >
                             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                             {link.label}
                           </a>
                         ))}
                      </div>
                    ) : (
                      /* Single Repo Link Fallback */
                      project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 rounded-full bg-white text-black px-6 py-3 font-bold transition-transform hover:scale-105 active:scale-95"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                          Ver Código
                        </a>
                      )
                    )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 text-white px-6 py-3 font-bold transition-colors hover:bg-white/10"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                      Ver Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
