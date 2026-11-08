import React, { useState } from 'react';
import { Chapter, QuizProgress, MedicalTerm } from '../types';
import { MEDICAL_SECTIONS_DATA } from '../data/medicalSectionsData';
import { InteractiveQuiz } from './InteractiveQuiz';
import { BookOpen, CheckCircle, Volume2, HelpCircle, ArrowRight, ArrowLeft, Info, Sparkles, Layers } from 'lucide-react';
import { speakGerman } from '../utils/speech';

interface ChapterViewerProps {
  chapters: Chapter[];
  selectedChapterId: number;
  onSelectChapter: (id: number) => void;
  quizProgress: Record<number, QuizProgress>;
  onSaveQuizProgress: (progress: QuizProgress) => void;
  dictionaryTerms: MedicalTerm[];
}

export const ChapterViewer: React.FC<ChapterViewerProps> = ({
  chapters,
  selectedChapterId,
  onSelectChapter,
  quizProgress,
  onSaveQuizProgress,
  dictionaryTerms,
}) => {
  const [viewMode, setViewMode] = useState<'reading' | 'quiz'>('reading');
  const [showSectionGuide, setShowSectionGuide] = useState<boolean>(false);
  const [vocabGenderFilter, setVocabGenderFilter] = useState<string>('all');

  const currentChapter = chapters.find(c => c.id === selectedChapterId) || chapters[0];
  const currentProgress = quizProgress[currentChapter.id];

  // Medical section info for this chapter
  const sectionInfo = MEDICAL_SECTIONS_DATA.find(s => s.associatedChapterId === currentChapter.id) || MEDICAL_SECTIONS_DATA[0];

  // Get relevant vocabulary terms for this chapter with gender filter
  const chapterVocabulary = dictionaryTerms.filter(t => {
    const matchesChapter = t.chapterId === currentChapter.id;
    const matchesGender = vocabGenderFilter === 'all' || t.genderArticle === vocabGenderFilter;
    return matchesChapter && matchesGender;
  });

  const handleNextChapter = () => {
    if (currentChapter.id < chapters.length) {
      onSelectChapter(currentChapter.id + 1);
      setViewMode('reading');
    }
  };

  const handlePrevChapter = () => {
    if (currentChapter.id > 1) {
      onSelectChapter(currentChapter.id - 1);
      setViewMode('reading');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Chapter Selection Header Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between overflow-x-auto pb-3 gap-2 border-b border-stone-200 dark:border-stone-800">
          {chapters.map((ch) => {
            const isSelected = ch.id === currentChapter.id;
            const isCompleted = quizProgress[ch.id]?.passed;

            return (
              <button
                key={ch.id}
                onClick={() => {
                  onSelectChapter(ch.id);
                  setViewMode('reading');
                }}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-amber-400 dark:bg-amber-500 text-stone-950 font-semibold shadow-xs'
                    : 'text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800'
                }`}
              >
                <span className="font-mono">{ch.number}</span>
                <span className="truncate max-w-[130px] sm:max-w-none">{ch.titleEnglish.split('&')[0]}</span>
                {isCompleted && (
                  <CheckCircle className={`w-3.5 h-3.5 ${isSelected ? 'text-stone-950' : 'text-emerald-600 dark:text-emerald-400'}`} />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Layout: Chapter Content or Quiz */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column / Main Stage (col-span-8) */}
        <div className="lg:col-span-8">
          
          {/* Chapter Banner & Mode Toggle */}
          <div className="bg-white dark:bg-stone-850 rounded-2xl border border-stone-200 dark:border-stone-750 p-6 sm:p-8 mb-8 shadow-xs">
            
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-stone-400">
                <span className="text-amber-700 dark:text-amber-400 font-semibold">CHAPTER {currentChapter.number}</span>
                <span aria-hidden="true">·</span>
                <span>{currentChapter.estimatedMinutes} MIN READ</span>
                {currentProgress && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className={currentProgress.passed ? 'text-emerald-600 dark:text-emerald-400 font-semibold' : 'text-amber-600 font-semibold'}>
                      Quiz: {currentProgress.score}/{currentProgress.total} ({Math.round((currentProgress.score / currentProgress.total) * 100)}%)
                    </span>
                  </>
                )}
              </div>

              {/* Reading vs Quiz Switcher */}
              <div className="flex items-center gap-1 p-1 bg-stone-100 dark:bg-stone-800 rounded-lg">
                <button
                  onClick={() => setViewMode('reading')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                    viewMode === 'reading'
                      ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-xs'
                      : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
                  }`}
                >
                  Text & Lesson
                </button>
                <button
                  onClick={() => setViewMode('quiz')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                    viewMode === 'quiz'
                      ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-xs'
                      : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
                  }`}
                >
                  Interactive Quiz (5Q)
                </button>
              </div>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-1">
              {currentChapter.titleGerman}
            </h2>
            <h3 className="text-base sm:text-lg font-medium text-stone-600 dark:text-stone-300 mb-2">
              {currentChapter.titleEnglish}
            </h3>
            <p className="text-sm text-stone-500 dark:text-stone-400 italic mb-4">
              {currentChapter.subtitle}
            </p>

            {/* Medical Section Guide Accordion Trigger */}
            <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
              <span className="text-xs font-mono text-stone-500">
                Medical Discipline: <strong className="text-stone-800 dark:text-stone-200">{sectionInfo.nameEnglish}</strong>
              </span>
              <button
                onClick={() => setShowSectionGuide(!showSectionGuide)}
                className="text-xs font-semibold text-amber-700 dark:text-amber-400 hover:text-amber-800 flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{showSectionGuide ? 'Hide Section Discipline Guide' : 'Explain Section Terminology & Compounding Rules'}</span>
              </button>
            </div>

            {/* Section Linguistic Guide Card */}
            {showSectionGuide && (
              <div className="mt-4 p-5 rounded-xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/60 text-xs sm:text-sm animate-in fade-in duration-200">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-amber-800 dark:text-amber-400 uppercase tracking-wider mb-2">
                  <Layers className="w-4 h-4" />
                  <span>Section Linguistic Blueprint: {sectionInfo.nameGerman}</span>
                </div>

                <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-3">
                  {sectionInfo.detailedExplanation}
                </p>

                <div className="pt-3 border-t border-amber-200/60 dark:border-amber-800/40 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="font-semibold text-amber-900 dark:text-amber-300 block mb-1">
                      Compounding Rules:
                    </span>
                    <ul className="list-disc pl-4 space-y-1 text-stone-600 dark:text-stone-300">
                      {sectionInfo.compoundingRules.map((r, rIdx) => (
                        <li key={rIdx}>{r}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="font-semibold text-amber-900 dark:text-amber-300 block mb-1">
                      Historical Significance:
                    </span>
                    <p className="text-stone-600 dark:text-stone-300">
                      {sectionInfo.historicalSignificance}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {viewMode === 'reading' && (
              <div className="mt-5 pt-5 border-t border-stone-200 dark:border-stone-800">
                <p className="text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed font-body">
                  {currentChapter.overview}
                </p>
              </div>
            )}
          </div>

          {/* Conditional View: Quiz Mode vs Lesson Mode */}
          {viewMode === 'quiz' ? (
            <InteractiveQuiz
              chapterId={currentChapter.id}
              chapterTitle={currentChapter.titleGerman}
              questions={currentChapter.quiz.questions}
              existingProgress={currentProgress}
              onSaveProgress={onSaveQuizProgress}
              onNextChapter={currentChapter.id < chapters.length ? handleNextChapter : undefined}
              onBackToChapter={() => setViewMode('reading')}
            />
          ) : (
            <div className="space-y-8">
              
              {/* Educational Sections */}
              {currentChapter.sections.map((section) => (
                <article
                  key={section.id}
                  className="bg-white dark:bg-stone-850 rounded-2xl border border-stone-200 dark:border-stone-750 p-6 sm:p-8 shadow-xs"
                >
                  <h4 className="font-display text-xl font-bold text-stone-900 dark:text-stone-100 mb-4 pb-2 border-b border-stone-100 dark:border-stone-800">
                    {section.heading}
                  </h4>

                  <div className="space-y-4 text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed font-body">
                    {section.content.map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))}
                  </div>

                  {/* Morphological Rule Box */}
                  {section.ruleBox && (
                    <div className="mt-6 p-5 rounded-xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/60">
                      <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-amber-800 dark:text-amber-400 mb-2">
                        <span>{section.ruleBox.title}</span>
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-stone-800 dark:text-stone-200 mb-3">
                        {section.ruleBox.rule}
                      </p>
                      <div className="space-y-2 border-t border-amber-200/60 dark:border-amber-800/40 pt-3">
                        {section.ruleBox.examples.map((ex, eIdx) => (
                          <div key={eIdx} className="flex flex-wrap items-center justify-between text-xs gap-2">
                            <span className="font-mono font-semibold text-stone-900 dark:text-stone-100">
                              {ex.german}
                            </span>
                            <span className="text-stone-500">→ {ex.literal}</span>
                            <span className="font-semibold text-amber-900 dark:text-amber-300">
                              {ex.english}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Historical Insight Callout */}
                  {section.historicalInsight && (
                    <div className="mt-6 p-4 rounded-xl bg-stone-50 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 text-xs sm:text-sm text-stone-600 dark:text-stone-300 flex items-start gap-3">
                      <HelpCircle className="w-4 h-4 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-stone-900 dark:text-stone-100 block mb-0.5">
                          Historical Context from Lang’s Lexicon
                        </span>
                        <p>{section.historicalInsight}</p>
                      </div>
                    </div>
                  )}
                </article>
              ))}

              {/* Ready for Quiz Prompt Banner */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-300 dark:border-amber-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-display text-lg font-bold text-stone-900 dark:text-stone-100">
                    Ready to Test Your Knowledge?
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1">
                    Complete the 5-question interactive quiz on {currentChapter.titleEnglish} to verify your mastery.
                  </p>
                </div>
                <button
                  onClick={() => setViewMode('quiz')}
                  className="px-5 py-2.5 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-500 dark:bg-amber-500 dark:hover:bg-amber-400 rounded-lg shadow-xs transition-colors flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Launch Chapter Quiz</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Navigation between chapters */}
              <div className="flex items-center justify-between pt-4">
                <button
                  disabled={currentChapter.id === 1}
                  onClick={handlePrevChapter}
                  className="px-4 py-2 text-xs font-medium text-stone-700 dark:text-stone-300 bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-lg disabled:opacity-40 hover:bg-stone-50 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous Chapter</span>
                </button>

                <button
                  disabled={currentChapter.id === chapters.length}
                  onClick={handleNextChapter}
                  className="px-4 py-2 text-xs font-medium text-stone-700 dark:text-stone-300 bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-lg disabled:opacity-40 hover:bg-stone-50 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Next Chapter</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          )}

        </div>

        {/* Right Column: High-Yield Vocabulary Deck from Lang's Lexicon (col-span-4) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white dark:bg-stone-850 rounded-2xl border border-stone-200 dark:border-stone-750 p-6 shadow-xs sticky top-24">
            
            <div className="pb-3 mb-3 border-b border-stone-200 dark:border-stone-800">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="text-xs font-mono uppercase text-amber-700 dark:text-amber-500 font-semibold block">
                    Vocabulary Deck
                  </span>
                  <h4 className="font-display text-base font-bold text-stone-900 dark:text-stone-100">
                    Chapter Lexicon Highlights
                  </h4>
                </div>
                <span className="text-xs font-mono text-stone-500">
                  {chapterVocabulary.length} Terms
                </span>
              </div>

              {/* Gender Filter Buttons */}
              <div className="flex items-center gap-1 pt-1 text-xs">
                <span className="text-[10px] font-mono text-stone-400 mr-1">Filter:</span>
                {[
                  { id: 'all', label: 'All' },
                  { id: 'der', label: 'der' },
                  { id: 'die', label: 'die' },
                  { id: 'das', label: 'das' }
                ].map(g => (
                  <button
                    key={g.id}
                    onClick={() => setVocabGenderFilter(g.id)}
                    className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors cursor-pointer ${
                      vocabGenderFilter === g.id
                        ? 'bg-amber-400 dark:bg-amber-500 text-stone-950 font-bold'
                        : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200'
                    }`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3 max-h-[620px] overflow-y-auto pr-1">
              {chapterVocabulary.length === 0 ? (
                <p className="text-xs text-stone-500 italic py-4 text-center">
                  Consult the main dictionary for extended anatomical entries.
                </p>
              ) : (
                chapterVocabulary.map((term) => (
                  <div
                    key={term.id}
                    className="p-3 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700/70 hover:border-amber-300 dark:hover:border-amber-700 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-[11px] font-mono text-amber-700 dark:text-amber-400 font-medium">
                            {term.genderArticle}
                          </span>
                          <span className="font-display font-bold text-sm text-stone-900 dark:text-stone-100">
                            {term.german}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-stone-400 block">
                          [{term.phonetic}]
                        </span>
                      </div>

                      <button
                        onClick={() => speakGerman(term.german)}
                        className="p-1.5 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-md transition-colors cursor-pointer"
                        title="Pronounce term"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-xs text-stone-700 dark:text-stone-300 mb-1">
                      <span className="text-stone-400 mr-1">Lit:</span>
                      <span className="italic">{term.literalTranslation}</span>
                    </div>

                    <div className="text-xs font-medium text-stone-900 dark:text-stone-100">
                      <span className="text-amber-700 dark:text-amber-400 mr-1">Def:</span>
                      <span>{term.englishDefinition}</span>
                    </div>

                    {term.langPageReference && (
                      <span className="text-[10px] font-mono text-stone-400 block mt-1.5 pt-1 border-t border-stone-200/50 dark:border-stone-700/50">
                        {term.langPageReference}
                      </span>
                    )}
                  </div>
                ))
              )}
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
