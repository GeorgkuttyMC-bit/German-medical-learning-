import React, { useState, useMemo } from 'react';
import { MedicalTerm } from '../types';
import { MEDICAL_SECTIONS_DATA } from '../data/medicalSectionsData';
import { Search, Volume2, BookOpen, Filter, ChevronRight, X, Info, Sparkles, Layers } from 'lucide-react';
import { speakGerman } from '../utils/speech';

interface DictionaryExplorerProps {
  terms: MedicalTerm[];
  initialCategory?: string;
}

export const DictionaryExplorer: React.FC<DictionaryExplorerProps> = ({ terms, initialCategory }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'all');
  const [selectedGender, setSelectedGender] = useState<string>('all');
  const [activeTermModal, setActiveTermModal] = useState<MedicalTerm | null>(null);
  const [showSectionExplainer, setShowSectionExplainer] = useState(true);

  const categories = [
    { id: 'all', label: 'All Disciplines', count: terms.length },
    { id: 'morphology', label: 'Morphology', count: terms.filter(t => t.category === 'morphology').length },
    { id: 'cardiovascular', label: 'Cardiovascular & Blood', count: terms.filter(t => t.category === 'cardiovascular').length },
    { id: 'respiratory', label: 'Respiratory & ENT', count: terms.filter(t => t.category === 'respiratory').length },
    { id: 'gastrointestinal', label: 'Gastrointestinal & Hepatic', count: terms.filter(t => t.category === 'gastrointestinal').length },
    { id: 'neurology', label: 'Neurology & Senses', count: terms.filter(t => t.category === 'neurology').length },
    { id: 'musculoskeletal', label: 'Musculoskeletal & Wounds', count: terms.filter(t => t.category === 'musculoskeletal').length },
    { id: 'instruments', label: 'Instruments & Surgery', count: terms.filter(t => t.category === 'instruments').length },
    { id: 'allied', label: 'Allied Sciences & Reagents', count: terms.filter(t => t.category === 'allied').length }
  ];

  // Current active section information
  const currentSectionInfo = useMemo(() => {
    if (selectedCategory === 'all') return null;
    return MEDICAL_SECTIONS_DATA.find(s => s.id === selectedCategory) || null;
  }, [selectedCategory]);

  const filteredTerms = useMemo(() => {
    return terms.filter(t => {
      const matchesCategory = selectedCategory === 'all' || t.category === selectedCategory;
      const matchesGender = selectedGender === 'all' || t.genderArticle === selectedGender;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        t.german.toLowerCase().includes(q) ||
        t.englishDefinition.toLowerCase().includes(q) ||
        t.literalTranslation.toLowerCase().includes(q) ||
        t.genderArticle.toLowerCase().includes(q);
      return matchesCategory && matchesGender && matchesSearch;
    });
  }, [terms, searchQuery, selectedCategory, selectedGender]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Title & Introduction */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-stone-400 mb-2">
          <span>Lexicographical Archive</span>
          <span aria-hidden="true">·</span>
          <span>Hugo Lang (1905) & Bertram Abrahams</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-2">
          German-English Medical Lexicon Search
        </h2>
        <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base max-w-3xl">
          Search authentic entries from the historic Cornell University Library digitized dictionary. Explore gender articles, phonetic guides, literal translations, and clinical definitions.
        </p>
      </div>

      {/* Search Bar & Category Filter Strip */}
      <div className="space-y-4 mb-8">
        
        {/* Search Input */}
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search German term, English definition, or literal meaning (e.g. Herz, Pericardium, Larynx, Atrophy)..."
            className="w-full pl-11 pr-10 py-3 rounded-xl border border-stone-200 dark:border-stone-750 bg-white dark:bg-stone-850 text-stone-900 dark:text-stone-100 placeholder-stone-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500/50 shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Filter Buttons */}
        {/* Medical Section Filter Tabs with Counts */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-stone-500 font-mono">
            <span>Filter by Medical Section / Discipline:</span>
            {currentSectionInfo && (
              <button
                onClick={() => setShowSectionExplainer(!showSectionExplainer)}
                className="text-amber-700 dark:text-amber-400 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Info className="w-3.5 h-3.5" />
                <span>{showSectionExplainer ? 'Hide Section Guide' : 'Show Section Guide'}</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setShowSectionExplainer(true);
                }}
                className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? 'bg-amber-400 dark:bg-amber-500 text-stone-950 font-semibold shadow-2xs'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                  selectedCategory === cat.id ? 'bg-stone-950/20 text-stone-950 font-bold' : 'bg-stone-200 dark:bg-stone-700 text-stone-500'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Sub-Filter by Grammatical Gender Article */}
        <div className="flex items-center gap-2 pt-1 text-xs">
          <span className="text-stone-400 font-mono text-[11px] shrink-0">Gender:</span>
          <div className="flex items-center gap-1">
            {[
              { id: 'all', label: 'All Genders' },
              { id: 'der', label: 'der (masculine)' },
              { id: 'die', label: 'die (feminine)' },
              { id: 'das', label: 'das (neuter)' }
            ].map(g => (
              <button
                key={g.id}
                onClick={() => setSelectedGender(g.id)}
                className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors cursor-pointer ${
                  selectedGender === g.id
                    ? 'bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-bold'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200'
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Dynamic Medical Section Explanation Banner */}
      {currentSectionInfo && showSectionExplainer && (
        <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-amber-50/80 dark:bg-amber-950/25 border border-amber-200 dark:border-amber-800/60 shadow-xs relative animate-in fade-in duration-200">
          <button
            onClick={() => setShowSectionExplainer(false)}
            className="absolute top-4 right-4 p-1 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 cursor-pointer"
            title="Dismiss guide"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 text-xs font-mono text-amber-700 dark:text-amber-400 uppercase tracking-wider mb-2 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Section Explanatory Guide: {currentSectionInfo.nameGerman}</span>
          </div>

          <h3 className="font-display text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">
            {currentSectionInfo.nameEnglish}
          </h3>

          <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-body mb-4">
            {currentSectionInfo.detailedExplanation}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-amber-200/60 dark:border-amber-800/40 text-xs">
            <div>
              <span className="font-semibold text-amber-900 dark:text-amber-300 block mb-1">
                Compounding Patterns to Notice:
              </span>
              <ul className="list-disc pl-4 space-y-1 text-stone-600 dark:text-stone-300">
                {currentSectionInfo.compoundingRules.map((rule, rIdx) => (
                  <li key={rIdx}>{rule}</li>
                ))}
              </ul>
            </div>

            <div>
              <span className="font-semibold text-amber-900 dark:text-amber-300 block mb-1">
                Classical Calque Equivalents:
              </span>
              <div className="space-y-1 font-mono text-[11px]">
                {currentSectionInfo.greekLatinEquivalents.slice(0, 3).map((eq, eIdx) => (
                  <div key={eIdx} className="flex justify-between text-stone-700 dark:text-stone-300">
                    <span className="italic">{eq.greekLatin}</span>
                    <span className="font-bold text-amber-800 dark:text-amber-400">{eq.german}</span>
                    <span className="text-stone-500">{eq.english}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Results Count Banner */}
      <div className="flex items-center justify-between text-xs font-mono text-stone-500 dark:text-stone-400 pb-3 mb-4 border-b border-stone-200 dark:border-stone-800">
        <span>Showing {filteredTerms.length} of {terms.length} historic terms</span>
        {(searchQuery || selectedCategory !== 'all' || selectedGender !== 'all') && (
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedGender('all');
            }}
            className="text-amber-700 dark:text-amber-400 hover:underline cursor-pointer"
          >
            Reset all filters
          </button>
        )}
      </div>

      {/* Lexicon Table / Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTerms.length === 0 ? (
          <div className="col-span-full py-16 text-center bg-white dark:bg-stone-850 rounded-2xl border border-stone-200 dark:border-stone-800 p-8">
            <BookOpen className="w-10 h-10 mx-auto text-stone-400 mb-3" />
            <p className="font-display text-base font-semibold text-stone-800 dark:text-stone-200">
              No matching entries found
            </p>
            <p className="text-xs text-stone-500 mt-1">
              Try searching for a different root, English synonym, or clear the category filter.
            </p>
          </div>
        ) : (
          filteredTerms.map((term) => (
            <div
              key={term.id}
              className="bg-white dark:bg-stone-850 rounded-xl border border-stone-200 dark:border-stone-750 p-4 hover:border-amber-400 dark:hover:border-amber-600 transition-all shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-mono text-xs text-amber-700 dark:text-amber-400 font-bold">
                        {term.genderArticle}
                      </span>
                      <h4 className="font-display font-bold text-base text-stone-900 dark:text-stone-100">
                        {term.german}
                      </h4>
                    </div>
                    <span className="text-[11px] font-mono text-stone-400">
                      [{term.phonetic}]
                    </span>
                  </div>

                  <button
                    onClick={() => speakGerman(term.german)}
                    className="p-1.5 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-750 rounded-md transition-colors cursor-pointer"
                    title="Pronounce term"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-xs text-stone-600 dark:text-stone-300 mb-1.5">
                  <span className="text-stone-400 mr-1">Literal:</span>
                  <span className="italic">{term.literalTranslation}</span>
                </div>

                <div className="text-xs font-medium text-stone-900 dark:text-stone-100 mb-3">
                  <span className="text-amber-700 dark:text-amber-400 mr-1">Definition:</span>
                  <span>{term.englishDefinition}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-[11px]">
                <span className="font-mono text-stone-400">
                  {term.langPageReference}
                </span>

                <button
                  onClick={() => setActiveTermModal(term)}
                  className="text-amber-700 dark:text-amber-400 hover:text-amber-800 font-medium flex items-center gap-0.5 cursor-pointer"
                >
                  <span>Morpheme Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Term Detail Modal */}
      {activeTermModal && (
        <div className="fixed inset-0 z-50 bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-stone-850 rounded-2xl border border-stone-200 dark:border-stone-700 max-w-lg w-full p-6 shadow-xl relative animate-in fade-in duration-150">
            
            <button
              onClick={() => setActiveTermModal(null)}
              className="absolute top-4 right-4 p-1.5 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-amber-700 dark:text-amber-400 uppercase tracking-wider mb-2">
              <span>Chapter {activeTermModal.chapterId} Entry</span>
              <span aria-hidden="true">·</span>
              <span>{activeTermModal.category}</span>
            </div>

            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-mono text-base font-bold text-amber-700 dark:text-amber-400">
                {activeTermModal.genderArticle}
              </span>
              <h3 className="font-display text-2xl font-bold text-stone-900 dark:text-stone-100">
                {activeTermModal.german}
              </h3>
              <button
                onClick={() => speakGerman(activeTermModal.german)}
                className="p-1.5 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 rounded-md cursor-pointer ml-1"
                title="Pronounce"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>

            <div className="font-mono text-xs text-stone-400 mb-4">
              Phonetic: [{activeTermModal.phonetic}]
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="p-3 rounded-lg bg-stone-50 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700">
                <span className="text-stone-400 text-xs block mb-0.5">Clinical English Definition</span>
                <span className="font-semibold text-stone-900 dark:text-stone-100">
                  {activeTermModal.englishDefinition}
                </span>
                <div className="text-stone-600 dark:text-stone-300 mt-1 italic">
                  Literal German: "{activeTermModal.literalTranslation}"
                </div>
              </div>

              {/* Morpheme decomposition */}
              <div>
                <span className="text-xs font-mono text-stone-400 uppercase block mb-2">
                  Morpheme Decomposition:
                </span>
                <div className="space-y-1.5">
                  {activeTermModal.etymology.morphemes.map((m, mIdx) => (
                    <div key={mIdx} className="flex items-center justify-between p-2 rounded bg-stone-100 dark:bg-stone-800 text-xs">
                      <span className="font-mono font-bold text-stone-900 dark:text-stone-100">
                        {m.part}
                      </span>
                      <span className="text-stone-500">
                        {m.meaning}
                      </span>
                      <span className="text-[10px] font-mono text-amber-700 dark:text-amber-400 uppercase">
                        {m.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lexicon Notes */}
              <div className="p-3 rounded-lg bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/40 text-xs text-stone-700 dark:text-stone-300">
                <span className="font-semibold text-amber-900 dark:text-amber-300 block mb-0.5">
                  Hugo Lang Lexicographical Commentary:
                </span>
                <p>{activeTermModal.etymology.notes}</p>
              </div>

              {/* Clinical Example */}
              <div>
                <span className="text-xs font-mono text-stone-400 uppercase block mb-1">
                  Historical Clinical Example:
                </span>
                <p className="font-serif italic text-stone-800 dark:text-stone-200">
                  "{activeTermModal.clinicalExample}"
                </p>
              </div>

              <div className="pt-2 border-t border-stone-200 dark:border-stone-700 text-right text-[11px] font-mono text-stone-400">
                Source: {activeTermModal.langPageReference}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
