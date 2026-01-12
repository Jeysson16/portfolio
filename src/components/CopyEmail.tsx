import React, { useState } from 'react';

export const CopyEmail = () => {
  const [copied, setCopied] = useState(false);
  const email = "contact@jeysson.dev";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  return (
    <div className="relative inline-flex items-center">
      <button
        onClick={handleCopy}
        className="group relative flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/20 active:scale-95"
      >
        <span>{copied ? '¡Copiado!' : 'Contacto'}</span>
        {copied ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400"><polyline points="20 6 9 17 4 12"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:rotate-12"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
        )}
      </button>
      
      {/* Tooltip */}
      <div className={`absolute left-1/2 -translate-x-1/2 -bottom-8 px-2 py-1 text-xs text-white bg-black/80 rounded opacity-0 transition-opacity pointer-events-none ${copied ? 'opacity-100' : 'group-hover:opacity-100'}`}>
        {copied ? 'Copiado al portapapeles' : 'Copiar email'}
      </div>
    </div>
  );
};
