import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { projects, type Project } from '../data/projects';

export const ProjectsGallery = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  
  const isSliderMode = projects.length > itemsPerPage;

  const visibleProjects = isSliderMode 
    ? projects.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage)
    : projects;

  const nextPage = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8"
        >
          {visibleProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={setSelectedProject}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {isSliderMode && (
        <div className="flex justify-center items-center gap-6 mt-8">
          <button 
            onClick={prevPage}
            className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-accent transition-all disabled:opacity-50"
            aria-label="Previous projects"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === idx ? 'bg-accent w-6' : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={nextPage}
            className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-accent transition-all disabled:opacity-50"
            aria-label="Next projects"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      )}

      {/* Modal Integration */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          isOpen={!!selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};
