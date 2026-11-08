import React, { useState, useMemo } from 'react';
import { MedicalTerm } from '../types';
import { MEDICAL_SECTIONS_DATA } from '../data/medicalSectionsData';
import { Volume2, RotateCcw, Shuffle, CheckCircle2, ArrowRight, ArrowLeft, Filter, Sparkles } from 'lucide-react';
import { speakGerman } from '../utils/speech';

interface FlashcardDeckProps {
  terms: MedicalTerm[];
}

export const FlashcardDeck: React.FC<FlashcardDeckProps> = ({ terms }) => {
  const [selectedSection, setSelectedSection] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredIds, setMasteredIds] = useState<Set<string>>(new Set());

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'morphology', label: 'Morphology' },
    { id: 'cardiovascular', label: 'Cardiovascular' },
    { id: 'respiratory', label: 'Respiratory & ENT' },
    { id: 'gastrointestinal', label: 'Gastrointestinal' },
    { id: 'neurology', label: 'Neurology' },
    { id: 'musculoskeletal', label: 'Musculoskeletal' },
    { id: 'instruments', label: 'Instruments' },
    { id: 'allied', label: 'Allied Sciences' }
  ];

  const filteredDeck = useMemo(() => {
    if (selectedSection === 'all') return terms;
    return terms.filter(t => t.category === selectedSection);
  }, [terms, selectedSection]);

  const activeSectionInfo = useMemo(() => {
    if (selectedSection === 'all') return null;
    return MEDICAL_SECTIONS_DATA.find(s => s.id === selectedSection) || null;
  }, [selectedSection]);

  const currentCard = filteredDeck[currentIndex] || filteredDeck[0] || terms[0];
  const isMastered = masteredIds.has(currentCard?.id);

  const handleNext = () => {
    setIsFlipped(false);
    if (currentIndex < filteredDeck.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    setIsFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(filteredDeck.length - 1);
    }
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    // Shuffle the current active filtered deck
    setCurrentIndex(0);
  };

  const handleSectionChange = (sectionId: string) => {
    setSelectedSection(sectionId);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const toggleMastered = () => {
    if (!currentCard) return;
    setMasteredIds(prev => {
      const next = new Set(prev);
      if (next.has(currentCard.id)) {
        next.delete(currentCard.id);
      } else {
        next.add(currentCard.id);
      }
      return next;
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Title */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 text-xs font-mono text-stone-500 dark:text-stone-400 mb-2">
          <span>Spaced Recall Practice</span>
          <span aria-hidden="true">·</span>
          <span>Hugo Lang Terminology Drill</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-2">
          Interactive Flashcard Drill (Lernkarten)
        </h2>
        <p className="text-stone-600 dark:text-stone-300 text-sm max-w-xl mx-auto">
          Filter flashcards by medical section and practice active recall on authentic historical terms.
        </p>
      </div>

      {/* Medical Section Filter Tabs */}
      <div className="mb-6 space-y-2">
        <div className="flex items-center justify-between text-xs font-mono text-stone-500">
          <span>Filter Cards by Medical Section:</span>
          <span>{filteredDeck.length} Cards in Deck</span>
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleSectionChange(cat.id)}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors cursor-pointer ${
                selectedSection === cat.id
                  ? 'bg-amber-400 dark:bg-amber-500 text-stone-950 font-semibold shadow-xs'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Section Study Guide Callout */}
      {activeSectionInfo && (
        <div className="mb-6 p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/60 text-xs">
          <div className="flex items-center gap-2 font-mono font-semibold text-amber-800 dark:text-amber-400 mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Section Focus: {activeSectionInfo.nameGerman}</span>
          </div>
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-2">
            {activeSectionInfo.shortDescription}
          </p>
          <div className="text-[11px] text-stone-500 dark:text-stone-400 font-mono">
            Key Rule: {activeSectionInfo.compoundingRules[0]}
          </div>
        </div>
      )}

      {/* Progress & Deck Controls */}
      <div className="flex items-center justify-between mb-4 text-xs font-mono text-stone-500 dark:text-stone-400">
        <div>
          <span>Card {currentIndex + 1} of {filteredDeck.length}</span>
          <span className="mx-2">·</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
            {masteredIds.size} Mastered
          </span>
        </div>

        <button
          onClick={handleShuffle}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 transition-colors cursor-pointer"
        >
          <Shuffle className="w-3.5 h-3.5" />
          <span>Shuffle Deck</span>
        </button>
      </div>

      {/* Flashcard Box */}
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="w-full min-h-[360px] sm:min-h-[400px] bg-white dark:bg-stone-850 rounded-2xl border-2 border-stone-200 dark:border-stone-750 hover:border-amber-400 dark:hover:border-amber-600 p-8 shadow-sm flex flex-col justify-between cursor-pointer transition-all duration-200"
      >
        {!isFlipped ? (
          /* FRONT SIDE */
          <div className="flex flex-col justify-between h-full min-h-[300px]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber-500 font-semibold">
                Chapter {currentCard.chapterId} · {currentCard.category}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  speakGerman(currentCard.german);
                }}
                className="p-2 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-750 rounded-lg transition-colors cursor-pointer"
                title="Pronounce"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>

            <div className="text-center my-auto py-8">
              <span className="font-mono text-xl sm:text-2xl font-bold text-amber-700 dark:text-amber-400 block mb-2">
                {currentCard.genderArticle}
              </span>
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-stone-100 tracking-tight mb-2">
                {currentCard.german}
              </h3>
              <span className="font-mono text-sm text-stone-400">
                [{currentCard.phonetic}]
              </span>
            </div>

            <div className="text-center text-xs text-stone-400 flex items-center justify-center gap-1.5 pt-4 border-t border-stone-100 dark:border-stone-800">
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Click card to reveal definition & etymology</span>
            </div>
          </div>
        ) : (
          /* BACK SIDE */
          <div className="flex flex-col justify-between h-full min-h-[300px]">
            <div>
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-stone-100 dark:border-stone-800">
                <span className="text-xs font-mono uppercase text-amber-700 dark:text-amber-500 font-semibold">
                  Definition & Decomposition
                </span>
                <span className="text-xs font-mono text-stone-400">
                  {currentCard.langPageReference}
                </span>
              </div>

              <div className="mb-4">
                <span className="text-xs font-mono text-stone-400 uppercase block mb-1">
                  Clinical English Equivalent:
                </span>
                <h4 className="font-display text-2xl font-bold text-stone-900 dark:text-stone-100">
                  {currentCard.englishDefinition}
                </h4>
                <div className="text-stone-600 dark:text-stone-300 text-sm mt-1">
                  Literal German: <em className="text-amber-900 dark:text-amber-300 font-medium">"{currentCard.literalTranslation}"</em>
                </div>
              </div>

              {/* Morpheme chips */}
              <div className="mb-4">
                <span className="text-xs font-mono text-stone-400 uppercase block mb-1.5">
                  Morpheme Formula:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {currentCard.etymology.morphemes.map((m, mIdx) => (
                    <span
                      key={mIdx}
                      className="px-2.5 py-1 rounded bg-stone-100 dark:bg-stone-800 text-xs font-mono text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700"
                    >
                      <strong>{m.part}</strong> ({m.meaning})
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-mono text-stone-400 uppercase block mb-1">
                  Historical Clinical Example:
                </span>
                <p className="font-serif italic text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                  "{currentCard.clinicalExample}"
                </p>
              </div>
            </div>

            <div className="text-center text-xs text-stone-400 flex items-center justify-center gap-1.5 pt-4 border-t border-stone-100 dark:border-stone-800">
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Click card to return to term</span>
            </div>
          </div>
        )}
      </div>

      {/* Action Controls Below Card */}
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={handlePrev}
          className="px-4 py-2.5 rounded-lg bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-50 text-xs font-medium flex items-center gap-1.5 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Previous Card</span>
        </button>

        <button
          onClick={toggleMastered}
          className={`px-4 py-2.5 rounded-lg text-xs font-semibold flex items-center gap-2 cursor-pointer transition-colors ${
            isMastered
              ? 'bg-emerald-600 text-white hover:bg-emerald-700'
              : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-750'
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>{isMastered ? 'Marked as Mastered' : 'Mark as Mastered'}</span>
        </button>

        <button
          onClick={handleNext}
          className="px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-500 dark:bg-amber-500 dark:hover:bg-amber-400 text-stone-950 text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-xs"
        >
          <span>Next Card</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
