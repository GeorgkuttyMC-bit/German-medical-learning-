import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: 'chapters' | 'sections' | 'builder' | 'dictionary' | 'flashcards' | 'archive') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 text-stone-600 dark:text-stone-400 text-xs py-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-stone-200 dark:border-stone-800">
          
          <div className="space-y-1">
            <div className="flex items-center gap-2 font-display text-base font-bold text-stone-900 dark:text-stone-100">
              <BookOpen className="w-4 h-4 text-amber-700 dark:text-amber-500" />
              <span>Lang’s German-English Medical Lexicon</span>
            </div>
            <p className="text-stone-500 text-xs max-w-md">
              An educational suite for historical medical terminology and compounding morphology, based on Hugo Lang & Bertram Abrahams (Cornell University Library archive).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs font-medium text-stone-600 dark:text-stone-300">
            <button
              onClick={() => onNavigate('chapters')}
              className="hover:text-stone-950 dark:hover:text-stone-100 cursor-pointer"
            >
              Tutorial Chapters
            </button>
            <button
              onClick={() => onNavigate('sections')}
              className="hover:text-stone-950 dark:hover:text-stone-100 cursor-pointer"
            >
              Medical Sections
            </button>
            <button
              onClick={() => onNavigate('builder')}
              className="hover:text-stone-950 dark:hover:text-stone-100 cursor-pointer"
            >
              Compound Builder
            </button>
            <button
              onClick={() => onNavigate('dictionary')}
              className="hover:text-stone-950 dark:hover:text-stone-100 cursor-pointer"
            >
              Dictionary Search
            </button>
            <button
              onClick={() => onNavigate('flashcards')}
              className="hover:text-stone-950 dark:hover:text-stone-100 cursor-pointer"
            >
              Flashcards
            </button>
            <button
              onClick={() => onNavigate('archive')}
              className="hover:text-stone-950 dark:hover:text-stone-100 cursor-pointer"
            >
              Source PDF
            </button>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-400 dark:text-stone-500 text-[11px] font-mono">
          <div>
            Primary Source: Cornell University Library · Internet Archive (cu31924000217665) · Wikimedia Commons
          </div>
          <div>
            Built with React & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};
