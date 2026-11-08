import React from 'react';
import { ArrowRight, BookOpenCheck, Sparkles, GraduationCap } from 'lucide-react';

interface HeroProps {
  onStartChapter: (chapterId: number) => void;
  onOpenDictionary: () => void;
  completedQuizzesCount: number;
  totalQuizzesCount: number;
}

export const Hero: React.FC<HeroProps> = ({
  onStartChapter,
  onOpenDictionary,
  completedQuizzesCount,
  totalQuizzesCount,
}) => {
  return (
    <section className="relative overflow-hidden border-b border-stone-200 dark:border-stone-800 bg-stone-100/60 dark:bg-stone-900/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* 2-column split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Educational Editorial Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Clean unboxed metadata kicker */}
            <div className="flex items-center gap-2 text-xs font-medium text-stone-500 dark:text-stone-400 mb-4 tracking-wide">
              <span>Historical Medical Lexicography</span>
              <span aria-hidden="true">·</span>
              <span>Cornell University Library Archive</span>
              <span aria-hidden="true">·</span>
              <span>Hugo Lang & Bertram Abrahams</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-100 leading-[1.15] text-balance mb-5">
              Master German Medical Terminology Through Hugo Lang’s Historic Lexicon
            </h1>

            <p className="font-body text-base sm:text-lg text-stone-700 dark:text-stone-300 leading-relaxed max-w-2xl mb-8">
              Decipher the compounding architecture of 19th-century German medicine. Explore 7 structured chapters covering organ systems, diagnostic inventions, and morphology—reinforced by interactive quizzes, compound assembly tools, and authentic dictionary citations.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onStartChapter(1)}
                className="px-6 py-3 text-sm font-semibold text-stone-950 bg-amber-400 hover:bg-amber-500 dark:bg-amber-500 dark:hover:bg-amber-400 rounded-lg shadow-sm transition-colors flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Start Chapter 1: Word Formation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenDictionary}
                className="px-5 py-3 text-sm font-medium text-stone-800 dark:text-stone-200 bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700 hover:bg-stone-50 dark:hover:bg-stone-750 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Browse 120+ Historic Terms
              </button>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-stone-300 dark:border-stone-750 shadow-md bg-stone-200 dark:bg-stone-800 aspect-16/10 lg:aspect-auto lg:h-full min-h-[300px]">
              <img
                src="/src/assets/images/hero_medical_lexicon_1794107803888.jpg"
                alt="Antique German medical dictionary open on a scholar's oak desk with 19th-century diagnostic instruments"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent flex flex-col justify-end p-5 text-white">
                <span className="text-xs font-mono tracking-wider uppercase text-amber-300 mb-1">
                  Primary Source Edition
                </span>
                <p className="font-display text-sm sm:text-base font-semibold leading-snug">
                  A German-English Dictionary of Terms Used in Medicine and Allied Sciences (1905)
                </p>
                <p className="text-xs text-stone-300 mt-1">
                  Digitized from Cornell University Library (IA cu31924000217665)
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Column KPI / Progress Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-stone-200 dark:border-stone-800">
          <div className="p-4 rounded-xl bg-white/70 dark:bg-stone-800/70 border border-stone-200 dark:border-stone-750">
            <div className="flex items-center gap-2 text-stone-500 dark:text-stone-400 text-xs font-medium mb-1">
              <GraduationCap className="w-4 h-4 text-amber-700 dark:text-amber-500" />
              <span>Tutorial Chapters</span>
            </div>
            <div className="text-2xl font-bold font-mono tabular-nums text-stone-900 dark:text-stone-100">
              07
            </div>
            <div className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
              Anatomy to Instrumentation
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/70 dark:bg-stone-800/70 border border-stone-200 dark:border-stone-750">
            <div className="flex items-center gap-2 text-stone-500 dark:text-stone-400 text-xs font-medium mb-1">
              <BookOpenCheck className="w-4 h-4 text-amber-700 dark:text-amber-500" />
              <span>Interactive Quizzes</span>
            </div>
            <div className="text-2xl font-bold font-mono tabular-nums text-stone-900 dark:text-stone-100">
              35 Questions
            </div>
            <div className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
              Assembly, matching & scenarios
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/70 dark:bg-stone-800/70 border border-stone-200 dark:border-stone-750">
            <div className="flex items-center gap-2 text-stone-500 dark:text-stone-400 text-xs font-medium mb-1">
              <Sparkles className="w-4 h-4 text-amber-700 dark:text-amber-500" />
              <span>Dictionary Lexicon</span>
            </div>
            <div className="text-2xl font-bold font-mono tabular-nums text-stone-900 dark:text-stone-100">
              120+ Terms
            </div>
            <div className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
              Native audio & morphemes
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/70 dark:bg-stone-800/70 border border-stone-200 dark:border-stone-750">
            <div className="flex items-center gap-2 text-stone-500 dark:text-stone-400 text-xs font-medium mb-1">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>Your Quiz Mastery</span>
            </div>
            <div className="text-2xl font-bold font-mono tabular-nums text-stone-900 dark:text-stone-100">
              {completedQuizzesCount} / {totalQuizzesCount}
            </div>
            <div className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
              Chapters passed
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
