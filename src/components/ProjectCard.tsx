import React from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <motion.article 
      layoutId={`card-container-${project.id}`}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      onClick={() => onClick(project)}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg transition-shadow hover:shadow-2xl hover:shadow-accent/10 cursor-pointer"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-60 transition-opacity group-hover:opacity-40"></div>
        <motion.img 
          layoutId={`card-image-${project.id}`}
          src={project.image} 
          alt={project.title} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="flex flex-1 flex-col p-6">
        <motion.h3 
          layoutId={`card-title-${project.id}`}
          className="mb-2 text-xl font-bold text-white group-hover:text-accent transition-colors"
        >
          {project.title}
        </motion.h3>
        <p className="mb-4 text-sm text-gray-400 flex-1 line-clamp-3">
          {project.shortDescription}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gray-300 border border-white/10">
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
             <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gray-300 border border-white/10">+{project.tags.length - 3}</span>
          )}
        </div>
      </div>
    </motion.article>
  );
};
