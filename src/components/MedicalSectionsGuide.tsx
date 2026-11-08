import React, { useState } from 'react';
import { MEDICAL_SECTIONS_DATA } from '../data/medicalSectionsData';
import { DICTIONARY_TERMS } from '../data/dictionaryData';
import { MedicalSectionInfo } from '../types';
import { BookOpen, Volume2, Sparkles, ArrowRight, HelpCircle, Layers, CheckCircle2, ChevronRight } from 'lucide-react';
import { speakGerman } from '../utils/speech';

interface MedicalSectionsGuideProps {
  onSelectChapter: (chapterId: number) => void;
  onOpenDictionaryForSection: (sectionId: string) => void;
}

export const MedicalSectionsGuide: React.FC<MedicalSectionsGuideProps> = ({
  onSelectChapter,
  onOpenDictionaryForSection,
}) => {
  const [selectedSectionId, setSelectedSectionId] = useState<string>(MEDICAL_SECTIONS_DATA[0].id);

  const activeSection: MedicalSectionInfo =
    MEDICAL_SECTIONS_DATA.find(s => s.id === selectedSectionId) || MEDICAL_SECTIONS_DATA[0];

  // Filter dictionary terms for this medical section
  const sectionTerms = DICTIONARY_TERMS.filter(
    t => t.category === activeSection.id || (activeSection.id === 'morphology' && t.chapterId === 1)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Page Title & Context */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-stone-400 mb-2">
          <span>Discipline & System Breakdown</span>
          <span aria-hidden="true">·</span>
          <span>Hugo Lang’s Specialized Lexicon</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-2">
          Medical Sections Guide & Morphological Analysis
        </h2>
        <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base max-w-3xl">
          Filter through each clinical discipline from Hugo Lang’s 1905 dictionary. Understand the unique compounding rules, historical discoveries, and Greco-Latin calques specific to each anatomical system.
        </p>
      </div>

      {/* Medical Section Filter Navigation Tabs */}
      <div className="mb-8 p-1.5 bg-stone-100 dark:bg-stone-850 rounded-2xl border border-stone-200 dark:border-stone-800">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          {MEDICAL_SECTIONS_DATA.map((section) => {
            const isSelected = section.id === activeSection.id;
            return (
              <button
                key={section.id}
                onClick={() => setSelectedSectionId(section.id)}
                className={`px-3.5 py-2 rounded-xl font-medium whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-amber-400 dark:bg-amber-500 text-stone-950 font-semibold shadow-xs'
                    : 'text-stone-600 dark:text-stone-300 hover:bg-stone-200/70 dark:hover:bg-stone-750'
                }`}
              >
                <span>{section.nameEnglish.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Section Content Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left 8 Cols: Detailed Explanation & Linguistic Anatomy */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Section Hero Banner */}
          <div className="bg-white dark:bg-stone-850 rounded-2xl border border-stone-200 dark:border-stone-750 p-6 sm:p-8 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 font-semibold">
                Medical Discipline & Section Analysis
              </span>
              <button
                onClick={() => onSelectChapter(activeSection.associatedChapterId)}
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-stone-900 dark:text-stone-100 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-750 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Study Chapter {activeSection.associatedChapterId} & Quiz</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-1">
              {activeSection.nameGerman}
            </h3>
            <h4 className="text-base sm:text-lg font-medium text-stone-600 dark:text-stone-300 mb-4">
              {activeSection.nameEnglish}
            </h4>

            <p className="text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed font-body">
              {activeSection.detailedExplanation}
            </p>

            {/* Historical Insight Box */}
            <div className="mt-6 p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/40 text-xs sm:text-sm text-stone-700 dark:text-stone-300 flex items-start gap-3">
              <HelpCircle className="w-4 h-4 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-amber-900 dark:text-amber-300 block mb-0.5">
                  Historical Significance in Lang’s Era:
                </span>
                <p>{activeSection.historicalSignificance}</p>
              </div>
            </div>
          </div>

          {/* Compounding Rules for this Section */}
          <div className="bg-white dark:bg-stone-850 rounded-2xl border border-stone-200 dark:border-stone-750 p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-700 dark:text-amber-400 font-semibold uppercase tracking-wider mb-3">
              <Layers className="w-4 h-4" />
              <span>Section Compounding Patterns & Grammar Laws</span>
            </div>

            <h4 className="font-display text-lg font-bold text-stone-900 dark:text-stone-100 mb-4">
              How Words Are Formed in {activeSection.nameEnglish}
            </h4>

            <div className="space-y-3">
              {activeSection.compoundingRules.map((rule, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 flex items-start gap-3 text-xs sm:text-sm text-stone-700 dark:text-stone-300"
                >
                  <span className="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{rule}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Greco-Latin vs German Equivalents Table */}
          <div className="bg-white dark:bg-stone-850 rounded-2xl border border-stone-200 dark:border-stone-750 p-6 sm:p-8 shadow-xs">
            <h4 className="font-display text-lg font-bold text-stone-900 dark:text-stone-100 mb-4">
              Greco-Latin vs. German Anatomical Calques
            </h4>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-stone-200 dark:border-stone-700 text-stone-500 font-mono text-xs">
                    <th className="pb-2.5">Classical Greco-Latin</th>
                    <th className="pb-2.5">German Literal Calque</th>
                    <th className="pb-2.5">Modern English Meaning</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 dark:divide-stone-800">
                  {activeSection.greekLatinEquivalents.map((eq, idx) => (
                    <tr key={idx} className="hover:bg-stone-50 dark:hover:bg-stone-800/40">
                      <td className="py-2.5 font-serif italic text-stone-800 dark:text-stone-200">
                        {eq.greekLatin}
                      </td>
                      <td className="py-2.5 font-bold font-display text-amber-800 dark:text-amber-400">
                        {eq.german}
                      </td>
                      <td className="py-2.5 text-stone-600 dark:text-stone-300">
                        {eq.english}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Key German Roots Cards */}
          <div className="bg-white dark:bg-stone-850 rounded-2xl border border-stone-200 dark:border-stone-750 p-6 sm:p-8 shadow-xs">
            <h4 className="font-display text-lg font-bold text-stone-900 dark:text-stone-100 mb-4">
              Core Stems & Roots in This Discipline
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {activeSection.keyGermanRoots.map((root, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-mono text-xs text-amber-700 dark:text-amber-400 font-bold">
                          {root.gender}
                        </span>
                        <span className="font-display font-bold text-base text-stone-900 dark:text-stone-100">
                          {root.root}
                        </span>
                      </div>
                      <button
                        onClick={() => speakGerman(root.root)}
                        className="p-1 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 cursor-pointer"
                        title="Pronounce"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-xs text-stone-500 mb-1">
                      <span className="mr-1">Literal:</span>
                      <span className="italic">{root.literal}</span>
                    </div>

                    <div className="text-xs font-medium text-stone-900 dark:text-stone-100 mb-2">
                      <span className="text-amber-700 dark:text-amber-400 mr-1">English:</span>
                      <span>{root.english}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-stone-200/60 dark:border-stone-700/60 text-[11px] font-mono text-stone-600 dark:text-stone-400">
                    Example: <span className="font-bold text-stone-800 dark:text-stone-200">{root.example}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right 4 Cols: Filtered Lexicon Terms for this Section */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white dark:bg-stone-850 rounded-2xl border border-stone-200 dark:border-stone-750 p-6 shadow-xs sticky top-24">
            
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-200 dark:border-stone-800">
              <div>
                <span className="text-xs font-mono uppercase text-amber-700 dark:text-amber-500 font-semibold block">
                  Section Lexicon
                </span>
                <h4 className="font-display text-base font-bold text-stone-900 dark:text-stone-100">
                  {sectionTerms.length} Terms in {activeSection.nameEnglish.split('&')[0]}
                </h4>
              </div>

              <button
                onClick={() => onOpenDictionaryForSection(activeSection.id)}
                className="text-xs font-medium text-amber-700 dark:text-amber-400 hover:underline cursor-pointer"
              >
                View all
              </button>
            </div>

            <div className="space-y-3 max-h-[640px] overflow-y-auto pr-1">
              {sectionTerms.map((term) => (
                <div
                  key={term.id}
                  className="p-3 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700/70"
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-mono text-xs text-amber-700 dark:text-amber-400 font-bold">
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
                      className="p-1.5 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 rounded-md cursor-pointer"
                      title="Pronounce"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="text-xs text-stone-600 dark:text-stone-300 mb-1">
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
              ))}
            </div>

            <div className="pt-4 mt-4 border-t border-stone-200 dark:border-stone-800">
              <button
                onClick={() => onSelectChapter(activeSection.associatedChapterId)}
                className="w-full py-2.5 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-500 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Launch Chapter {activeSection.associatedChapterId} Quiz</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
