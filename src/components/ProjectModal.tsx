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
              className="pointer-events-auto w-full max-w-4xl max-h-[90vh] overflow-y-auto overflow-x-hidden rounded-3xl bg-[#121212] border border-white/10 shadow-2xl relative custom-scrollbar"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white/70 backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
              </button>

              <div className="flex flex-col md:flex-row">
                {/* Image Section (Carousel Placeholder) */}
                <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden bg-gray-900">
                  <motion.img
                    layoutId={`card-image-${project.id}`}
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent md:bg-gradient-to-r" />
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
                    
                    {/* Gallery Preview (Optional simple grid) */}
                    {project.gallery && project.gallery.length > 1 && (
                       <div className="grid grid-cols-2 gap-2 mt-4">
                         {project.gallery.slice(0, 2).map((img, idx) => (
                           <img key={idx} src={img} alt="" className="rounded-lg object-cover h-20 w-full opacity-70 hover:opacity-100 transition-opacity" />
                         ))}
                       </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4 mt-auto pt-6 border-t border-white/10">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 rounded-full bg-white text-black px-6 py-3 font-bold transition-transform hover:scale-105 active:scale-95"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 1.5-1 1.5l3 1.5c1.12.5 2.24.5 3.36 0L20 4.5s1-.5 1-1.5c-.28-1.15-.28-2.35 0-3.5-.73-1.02-1.08-2.25-1-3.5C18 5.5 15 7.5 15 7.5a15.94 15.94 0 0 0-6 0c0 0-3-2-5-2.5-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5C2 10 5 12 5 15.5c0 1.15.3 2.25.9 3.2L4 22"/><path d="M9 22v-4a4.8 4.8 0 0 0-1-3.5c-3 0-6-2-6-5.5.08-1.25.27-2.48 1-3.5-.28-1.15-.28-2.35 0-3.5 0 0 1 1.5 1 1.5l3 1.5c1.12.5 2.24.5 3.36 0L12 4.5s1-.5 1-1.5c-.28-1.15-.28-2.35 0-3.5-.73-1.02-1.08-2.25-1-3.5C14 5.5 11 7.5 11 7.5a15.94 15.94 0 0 0-6 0c0 0-3-2-5-2.5-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5C6 10 9 12 9 15.5c0 1.15.3 2.25.9 3.2L8 22"/></svg>
                      GitHub
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 text-white px-6 py-3 font-bold transition-colors hover:bg-white/10"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
