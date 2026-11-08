import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ChapterViewer } from './components/ChapterViewer';
import { MedicalSectionsGuide } from './components/MedicalSectionsGuide';
import { MorphemeBuilder } from './components/MorphemeBuilder';
import { DictionaryExplorer } from './components/DictionaryExplorer';
import { FlashcardDeck } from './components/FlashcardDeck';
import { ArchivalViewer } from './components/ArchivalViewer';
import { Footer } from './components/Footer';
import { CHAPTERS_DATA } from './data/chaptersData';
import { DICTIONARY_TERMS } from './data/dictionaryData';
import { QuizProgress } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<'chapters' | 'sections' | 'builder' | 'dictionary' | 'flashcards' | 'archive'>('chapters');
  const [selectedChapterId, setSelectedChapterId] = useState<number>(1);
  const [dictionaryFilterSection, setDictionaryFilterSection] = useState<string>('all');
  const [quizProgress, setQuizProgress] = useState<Record<number, QuizProgress>>({});
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('lang_medical_theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Sync theme with html root element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('lang_medical_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('lang_medical_theme', 'light');
    }
  }, [isDark]);

  // Load saved quiz progress from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('lang_quiz_progress_v1');
      if (saved) {
        setQuizProgress(JSON.parse(saved));
      }
    } catch (e) {
      console.warn('Failed to load quiz progress from storage', e);
    }
  }, []);

  const handleSaveQuizProgress = (progress: QuizProgress) => {
    setQuizProgress(prev => {
      const updated = { ...prev, [progress.chapterId]: progress };
      try {
        localStorage.setItem('lang_quiz_progress_v1', JSON.stringify(updated));
      } catch (e) {
        console.warn('Failed to save quiz progress to storage', e);
      }
      return updated;
    });
  };

  const completedQuizzesCount = Object.values(quizProgress).filter(p => p.passed).length;
  const totalQuizzesCount = CHAPTERS_DATA.length;

  const handleStartChapter = (chapterId: number) => {
    setSelectedChapterId(chapterId);
    setActiveTab('chapters');
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 selection:bg-amber-400 selection:text-stone-950 transition-colors">
      
      {/* Top Bar Contract compliant navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isDark={isDark}
        setIsDark={setIsDark}
        completedQuizzesCount={completedQuizzesCount}
        totalQuizzesCount={totalQuizzesCount}
      />

      <main className="flex-1">
        {/* Editorial Hero shown when on Chapters or overview */}
        {activeTab === 'chapters' && (
          <Hero
            onStartChapter={handleStartChapter}
            onOpenDictionary={() => {
              setActiveTab('dictionary');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            completedQuizzesCount={completedQuizzesCount}
            totalQuizzesCount={totalQuizzesCount}
          />
        )}

        {/* Tab 1: Chapter Lessons & Quizzes */}
        {activeTab === 'chapters' && (
          <ChapterViewer
            chapters={CHAPTERS_DATA}
            selectedChapterId={selectedChapterId}
            onSelectChapter={setSelectedChapterId}
            quizProgress={quizProgress}
            onSaveQuizProgress={handleSaveQuizProgress}
            dictionaryTerms={DICTIONARY_TERMS}
          />
        )}

        {/* Tab 2: Medical Sections Explainer & Morphological Guide */}
        {activeTab === 'sections' && (
          <MedicalSectionsGuide
            onSelectChapter={(chId) => {
              setSelectedChapterId(chId);
              setActiveTab('chapters');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenDictionaryForSection={(secId) => {
              setDictionaryFilterSection(secId);
              setActiveTab('dictionary');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {/* Tab 3: Compound Builder / Morpheme Laboratory */}
        {activeTab === 'builder' && (
          <MorphemeBuilder />
        )}

        {/* Tab 4: Dictionary Search & Lexicon Explorer with Section Filters */}
        {activeTab === 'dictionary' && (
          <DictionaryExplorer
            terms={DICTIONARY_TERMS}
            initialCategory={dictionaryFilterSection}
          />
        )}

        {/* Tab 5: Flashcard Practice Drill with Section Filters */}
        {activeTab === 'flashcards' && (
          <FlashcardDeck terms={DICTIONARY_TERMS} />
        )}

        {/* Tab 6: Archival Provenance & Source PDF Viewer */}
        {activeTab === 'archive' && (
          <ArchivalViewer />
        )}
      </main>

      {/* Scholarly Footer */}
      <Footer onNavigate={setActiveTab} />
    </div>
  );
}
