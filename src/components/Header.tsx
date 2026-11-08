import React from 'react';
import { BookOpen, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  activeTab: 'chapters' | 'sections' | 'builder' | 'dictionary' | 'flashcards' | 'archive';
  setActiveTab: (tab: 'chapters' | 'sections' | 'builder' | 'dictionary' | 'flashcards' | 'archive') => void;
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
  completedQuizzesCount: number;
  totalQuizzesCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  isDark,
  setIsDark,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-stone-50/95 dark:bg-stone-900/95 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text wordmark */}
        <button
          onClick={() => setActiveTab('chapters')}
          className="text-left font-display text-xl sm:text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100 whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity flex items-center gap-2 cursor-pointer"
        >
          <BookOpen className="w-5 h-5 text-amber-700 dark:text-amber-500 shrink-0" aria-hidden="true" />
          <span>Lang’s Medical Lexicon</span>
        </button>

        {/* Zone 2: 5 concise single-line text links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600 dark:text-stone-300">
          <button
            onClick={() => setActiveTab('chapters')}
            className={`whitespace-nowrap shrink-0 py-1 cursor-pointer transition-colors ${
              activeTab === 'chapters'
                ? 'text-stone-950 dark:text-stone-100 font-semibold border-b-2 border-amber-700 dark:border-amber-500'
                : 'hover:text-stone-900 dark:hover:text-stone-100'
            }`}
          >
            Chapters & Quizzes
          </button>

          <button
            onClick={() => setActiveTab('sections')}
            className={`whitespace-nowrap shrink-0 py-1 cursor-pointer transition-colors ${
              activeTab === 'sections'
                ? 'text-stone-950 dark:text-stone-100 font-semibold border-b-2 border-amber-700 dark:border-amber-500'
                : 'hover:text-stone-900 dark:hover:text-stone-100'
            }`}
          >
            Medical Sections
          </button>

          <button
            onClick={() => setActiveTab('builder')}
            className={`whitespace-nowrap shrink-0 py-1 cursor-pointer transition-colors ${
              activeTab === 'builder'
                ? 'text-stone-950 dark:text-stone-100 font-semibold border-b-2 border-amber-700 dark:border-amber-500'
                : 'hover:text-stone-900 dark:hover:text-stone-100'
            }`}
          >
            Compound Builder
          </button>

          <button
            onClick={() => setActiveTab('dictionary')}
            className={`whitespace-nowrap shrink-0 py-1 cursor-pointer transition-colors ${
              activeTab === 'dictionary'
                ? 'text-stone-950 dark:text-stone-100 font-semibold border-b-2 border-amber-700 dark:border-amber-500'
                : 'hover:text-stone-900 dark:hover:text-stone-100'
            }`}
          >
            Dictionary
          </button>

          <button
            onClick={() => setActiveTab('flashcards')}
            className={`whitespace-nowrap shrink-0 py-1 cursor-pointer transition-colors ${
              activeTab === 'flashcards'
                ? 'text-stone-950 dark:text-stone-100 font-semibold border-b-2 border-amber-700 dark:border-amber-500'
                : 'hover:text-stone-900 dark:hover:text-stone-100'
            }`}
          >
            Flashcards
          </button>
        </nav>

        {/* Zone 3: 1 primary action + theme toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle theme"
            className="p-2 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors cursor-pointer"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setActiveTab('chapters')}
            className="px-4 py-2 text-xs font-semibold text-stone-950 bg-amber-400 dark:bg-amber-500 hover:bg-amber-500 dark:hover:bg-amber-400 rounded-lg shadow-xs transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Start Learning
          </button>
        </div>

      </div>

      {/* Mobile nav drawer strip */}
      <div className="md:hidden border-t border-stone-200 dark:border-stone-800 px-4 py-2 flex items-center justify-between overflow-x-auto text-xs font-medium text-stone-600 dark:text-stone-300 gap-4">
        <button
          onClick={() => setActiveTab('chapters')}
          className={`whitespace-nowrap py-1 ${activeTab === 'chapters' ? 'text-amber-800 dark:text-amber-400 font-semibold' : ''}`}
        >
          Chapters
        </button>
        <button
          onClick={() => setActiveTab('sections')}
          className={`whitespace-nowrap py-1 ${activeTab === 'sections' ? 'text-amber-800 dark:text-amber-400 font-semibold' : ''}`}
        >
          Sections Guide
        </button>
        <button
          onClick={() => setActiveTab('builder')}
          className={`whitespace-nowrap py-1 ${activeTab === 'builder' ? 'text-amber-800 dark:text-amber-400 font-semibold' : ''}`}
        >
          Builder
        </button>
        <button
          onClick={() => setActiveTab('dictionary')}
          className={`whitespace-nowrap py-1 ${activeTab === 'dictionary' ? 'text-amber-800 dark:text-amber-400 font-semibold' : ''}`}
        >
          Dictionary
        </button>
        <button
          onClick={() => setActiveTab('flashcards')}
          className={`whitespace-nowrap py-1 ${activeTab === 'flashcards' ? 'text-amber-800 dark:text-amber-400 font-semibold' : ''}`}
        >
          Flashcards
        </button>
      </div>
    </header>
  );
};
