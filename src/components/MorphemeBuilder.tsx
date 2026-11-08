import React, { useState } from 'react';
import { Volume2, Sparkles, RefreshCw, BookOpen, Layers } from 'lucide-react';
import { speakGerman } from '../utils/speech';

interface OrganRoot {
  stem: string;
  meaning: string;
  gender: 'der' | 'die' | 'das';
  section: 'cardiovascular' | 'respiratory' | 'gastrointestinal' | 'neurology' | 'musculoskeletal';
}

interface ModifierPart {
  id: string;
  stem: string;
  meaning: string;
}

interface SuffixPart {
  id: string;
  suffix: string;
  meaning: string;
  greekLatin: string;
  gender: 'der' | 'die' | 'das';
}

const ORGAN_ROOTS: OrganRoot[] = [
  { stem: 'Herz', meaning: 'Heart (Cor)', gender: 'das', section: 'cardiovascular' },
  { stem: 'Blut', meaning: 'Blood (Sanguis)', gender: 'das', section: 'cardiovascular' },
  { stem: 'Kehlkopf', meaning: 'Larynx (Throat head)', gender: 'der', section: 'respiratory' },
  { stem: 'Lunge', meaning: 'Lung (Pulmo)', gender: 'die', section: 'respiratory' },
  { stem: 'Magen', meaning: 'Stomach (Gaster)', gender: 'der', section: 'gastrointestinal' },
  { stem: 'Bauchfell', meaning: 'Peritoneum (Belly pelt)', gender: 'das', section: 'gastrointestinal' },
  { stem: 'Niere', meaning: 'Kidney (Ren)', gender: 'die', section: 'gastrointestinal' },
  { stem: 'Gehirn', meaning: 'Brain (Encephalon)', gender: 'das', section: 'neurology' },
  { stem: 'Auge', meaning: 'Eye (Oculus)', gender: 'das', section: 'neurology' },
  { stem: 'Knochen', meaning: 'Bone (Os)', gender: 'der', section: 'musculoskeletal' },
  { stem: 'Sehne', meaning: 'Tendon / Sinew', gender: 'die', section: 'musculoskeletal' }
];

const MODIFIER_PARTS: ModifierPart[] = [
  { id: 'none', stem: '', meaning: '(Direct organ root)' },
  { id: 'beutel', stem: 'beutel', meaning: 'Sac / bag / pericardium' },
  { id: 'schleimhaut', stem: 'schleimhaut', meaning: 'Mucous membrane' },
  { id: 'haut', stem: 'haut', meaning: 'Skin / membrane / tunic' },
  { id: 'mark', stem: 'mark', meaning: 'Marrow / medulla' },
  { id: 'wand', stem: 'wand', meaning: 'Wall / parietes' }
];

const SUFFIX_PARTS: SuffixPart[] = [
  { id: 'entzundung', suffix: 'entzündung', meaning: 'Inflammation', greekLatin: '-itis', gender: 'die' },
  { id: 'spiegelung', suffix: 'spiegelung', meaning: 'Endoscopic inspection', greekLatin: '-scopy', gender: 'die' },
  { id: 'spiegel', suffix: 'spiegel', meaning: 'Instrument / Speculum / Scope', greekLatin: '-scope', gender: 'der' },
  { id: 'schwund', suffix: 'schwund', meaning: 'Wasting / Dwindling', greekLatin: 'atrophia', gender: 'der' },
  { id: 'erweichung', suffix: 'erweichung', meaning: 'Pathological softening', greekLatin: '-malacia', gender: 'die' },
  { id: 'schnitt', suffix: 'schnitt', meaning: 'Incision / Section', greekLatin: '-tomy', gender: 'der' },
  { id: 'naht', suffix: 'naht', meaning: 'Surgical seam / Suture', greekLatin: '-rrhaphy', gender: 'die' },
  { id: 'krampf', suffix: 'krampf', meaning: 'Spasm / Convulsion', greekLatin: 'spasmus', gender: 'der' },
  { id: 'bruch', suffix: 'bruch', meaning: 'Fracture / Hernia / Rupture', greekLatin: 'fractura / -cele', gender: 'der' }
];

const PRESETS = [
  {
    name: 'Pericarditis',
    root: 'Herz',
    modifier: 'beutel',
    suffix: 'entzundung',
    gloss: 'Herzbeutelentzündung (Pericarditis)'
  },
  {
    name: 'Laryngoscopy',
    root: 'Kehlkopf',
    modifier: 'none',
    suffix: 'spiegelung',
    gloss: 'Kehlkopfspiegelung (Laryngoscopy)'
  },
  {
    name: 'Gastric Mucositis / Gastritis',
    root: 'Magen',
    modifier: 'schleimhaut',
    suffix: 'entzundung',
    gloss: 'Magenschleimhautentzündung (Gastritis)'
  },
  {
    name: 'Cerebral Softening',
    root: 'Gehirn',
    modifier: 'none',
    suffix: 'erweichung',
    gloss: 'Gehirnerweichung (Encephalomalacia)'
  },
  {
    name: 'Ophthalmoscope',
    root: 'Auge',
    modifier: 'none',
    suffix: 'spiegel',
    gloss: 'Augenspiegel (Ophthalmoscope)'
  },
  {
    name: 'Tenorrhaphy',
    root: 'Sehne',
    modifier: 'none',
    suffix: 'naht',
    gloss: 'Sehnennaht (Tenorrhaphy)'
  }
];

export const MorphemeBuilder: React.FC = () => {
  const [organSectionFilter, setOrganSectionFilter] = useState<string>('all');
  const [selectedRoot, setSelectedRoot] = useState<OrganRoot>(ORGAN_ROOTS[0]);
  const [selectedModifier, setSelectedModifier] = useState<ModifierPart>(MODIFIER_PARTS[1]);
  const [selectedSuffix, setSelectedSuffix] = useState<SuffixPart>(SUFFIX_PARTS[0]);

  // Construct compound word
  const assembleWord = () => {
    let base = selectedRoot.stem;
    if (selectedRoot.stem === 'Sehne' && (selectedModifier.id !== 'none' || selectedSuffix.id === 'naht')) {
      base = 'Sehnen';
    } else if (selectedRoot.stem === 'Auge' && selectedSuffix.id === 'spiegel') {
      base = 'Augen';
    } else if (selectedRoot.stem === 'Knochen' && selectedModifier.id === 'mark') {
      base = 'Knochen';
    }

    const mod = selectedModifier.stem ? selectedModifier.stem : '';
    const sfx = selectedSuffix.suffix;

    // Capitalize first letter, lower others
    const word = base + mod + sfx;
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const compoundWord = assembleWord();
  // Gender is ALWAYS determined by the final element (the suffix)
  const compoundGender = selectedSuffix.gender;

  const handleApplyPreset = (preset: typeof PRESETS[0]) => {
    const r = ORGAN_ROOTS.find(o => o.stem === preset.root) || ORGAN_ROOTS[0];
    const m = MODIFIER_PARTS.find(mp => mp.id === preset.modifier) || MODIFIER_PARTS[0];
    const s = SUFFIX_PARTS.find(sp => sp.id === preset.suffix) || SUFFIX_PARTS[0];
    setSelectedRoot(r);
    setSelectedModifier(m);
    setSelectedSuffix(s);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-stone-400 mb-2">
          <span>Interactive Morphology Lab</span>
          <span aria-hidden="true">·</span>
          <span>Hugo Lang Word Formation Rules</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-2">
          German Medical Compound Builder (Wortbau-Labor)
        </h2>
        <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base max-w-3xl">
          Construct authentic clinical terms by combining primary organ roots, anatomical modifiers, and pathological suffixes. Observe how the final element mathematically dictates gender and diagnosis.
        </p>
      </div>

      {/* Preset Quick Load */}
      <div className="mb-8 p-4 rounded-xl bg-stone-100/80 dark:bg-stone-850 border border-stone-200 dark:border-stone-800">
        <span className="text-xs font-mono text-stone-500 dark:text-stone-400 uppercase tracking-wider block mb-2">
          Classic Presets from Lang’s Lexicon:
        </span>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handleApplyPreset(p)}
              className="px-3 py-1.5 rounded-lg bg-white dark:bg-stone-800 hover:bg-amber-50 dark:hover:bg-amber-950/40 text-stone-800 dark:text-stone-200 border border-stone-300 dark:border-stone-700 text-xs font-medium transition-colors cursor-pointer"
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* Live Assembled Word Preview Card */}
      <div className="bg-white dark:bg-stone-850 rounded-2xl border-2 border-amber-300 dark:border-amber-800/80 p-6 sm:p-8 mb-8 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-700 dark:text-amber-400 font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>Assembled Compound Result</span>
          </div>

          <button
            onClick={() => speakGerman(compoundWord)}
            className="px-3 py-1.5 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-lg text-xs font-medium text-stone-800 dark:text-stone-200 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>Pronounce Term</span>
          </button>
        </div>

        <div className="flex flex-wrap items-baseline gap-3 mb-4">
          <span className="font-mono text-xl sm:text-2xl font-bold text-amber-700 dark:text-amber-400">
            {compoundGender}
          </span>
          <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
            {compoundWord}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-200 dark:border-stone-800 text-xs sm:text-sm">
          <div>
            <span className="text-stone-400 block font-mono text-xs">Morpheme Formula</span>
            <div className="font-medium text-stone-800 dark:text-stone-200 mt-0.5">
              <span className="text-stone-900 dark:text-stone-100 font-bold">{selectedRoot.stem}</span>
              {selectedModifier.stem && <span className="text-stone-500"> + {selectedModifier.stem}</span>}
              <span className="text-amber-700 dark:text-amber-400 font-semibold"> + {selectedSuffix.suffix}</span>
            </div>
          </div>

          <div>
            <span className="text-stone-400 block font-mono text-xs">Literal Translation</span>
            <span className="font-medium text-stone-800 dark:text-stone-200 mt-0.5 block italic">
              {selectedRoot.meaning.split('(')[0].trim()}
              {selectedModifier.stem ? ` · ${selectedModifier.meaning}` : ''}
              {` · ${selectedSuffix.meaning}`}
            </span>
          </div>

          <div>
            <span className="text-stone-400 block font-mono text-xs">Greco-Latin / English Equivalent</span>
            <span className="font-bold text-amber-900 dark:text-amber-300 mt-0.5 block">
              {selectedSuffix.greekLatin} equivalent ({selectedSuffix.meaning})
            </span>
          </div>
        </div>

        {/* Morphological explanation banner */}
        <div className="mt-4 p-3 rounded-lg bg-stone-50 dark:bg-stone-800 text-xs text-stone-600 dark:text-stone-300 flex items-start gap-2">
          <Layers className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p>
            <strong>Grammar Law:</strong> The grammatical gender is <strong className="underline">{compoundGender}</strong> because the final element (<em>{selectedSuffix.suffix}</em>) is grammatically {compoundGender}. The root <em>{selectedRoot.stem}</em> acts as the modifying anatomical determinative.
          </p>
        </div>
      </div>

      {/* 3 Interactive Selector Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Column 1: Primary Organ Roots */}
        <div className="bg-white dark:bg-stone-850 rounded-2xl border border-stone-200 dark:border-stone-750 p-5 shadow-xs">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-200 dark:border-stone-800">
            <h4 className="font-display text-sm font-bold text-stone-900 dark:text-stone-100">
              1. Organ Root (Bestimmungswort)
            </h4>
            <span className="text-[11px] font-mono text-stone-400">
              {ORGAN_ROOTS.filter(r => organSectionFilter === 'all' || r.section === organSectionFilter).length} Roots
            </span>
          </div>

          {/* Medical Section Filter for Roots */}
          <div className="flex items-center gap-1 overflow-x-auto pb-2 mb-2 text-[11px]">
            {[
              { id: 'all', label: 'All' },
              { id: 'cardiovascular', label: 'Heart' },
              { id: 'respiratory', label: 'Airways' },
              { id: 'gastrointestinal', label: 'GI' },
              { id: 'neurology', label: 'Neuro' },
              { id: 'musculoskeletal', label: 'Musculoskeletal' }
            ].map(sec => (
              <button
                key={sec.id}
                onClick={() => setOrganSectionFilter(sec.id)}
                className={`px-2 py-0.5 rounded text-[11px] font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  organSectionFilter === sec.id
                    ? 'bg-amber-400 dark:bg-amber-500 text-stone-950 font-semibold'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200'
                }`}
              >
                {sec.label}
              </button>
            ))}
          </div>

          <div className="space-y-1.5 max-h-[340px] overflow-y-auto pr-1">
            {ORGAN_ROOTS.filter(r => organSectionFilter === 'all' || r.section === organSectionFilter).map((root) => {
              const isSelected = selectedRoot.stem === root.stem;
              return (
                <button
                  key={root.stem}
                  onClick={() => setSelectedRoot(root)}
                  className={`w-full text-left p-2.5 rounded-lg border text-xs transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'border-amber-400 dark:border-amber-600 bg-amber-50 dark:bg-amber-950/40 text-stone-900 dark:text-stone-100 font-semibold'
                      : 'border-stone-200 dark:border-stone-700 bg-stone-50/60 dark:bg-stone-800/60 hover:bg-stone-100 text-stone-700 dark:text-stone-300'
                  }`}
                >
                  <div>
                    <span className="font-mono text-amber-700 dark:text-amber-400 mr-1.5">{root.gender}</span>
                    <span className="font-bold">{root.stem}</span>
                  </div>
                  <span className="text-stone-500 dark:text-stone-400 text-[11px] truncate max-w-[110px]">
                    {root.meaning}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Column 2: Anatomical Modifiers */}
        <div className="bg-white dark:bg-stone-850 rounded-2xl border border-stone-200 dark:border-stone-750 p-5 shadow-xs">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-200 dark:border-stone-800">
            <h4 className="font-display text-sm font-bold text-stone-900 dark:text-stone-100">
              2. Anatomical Modifier
            </h4>
            <span className="text-[11px] font-mono text-stone-400">Optional</span>
          </div>

          <div className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1">
            {MODIFIER_PARTS.map((mod) => {
              const isSelected = selectedModifier.id === mod.id;
              return (
                <button
                  key={mod.id}
                  onClick={() => setSelectedModifier(mod)}
                  className={`w-full text-left p-2.5 rounded-lg border text-xs transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'border-amber-400 dark:border-amber-600 bg-amber-50 dark:bg-amber-950/40 text-stone-900 dark:text-stone-100 font-semibold'
                      : 'border-stone-200 dark:border-stone-700 bg-stone-50/60 dark:bg-stone-800/60 hover:bg-stone-100 text-stone-700 dark:text-stone-300'
                  }`}
                >
                  <span className="font-bold">{mod.stem || '(None)'}</span>
                  <span className="text-stone-500 dark:text-stone-400 text-[11px] truncate max-w-[120px]">
                    {mod.meaning}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Column 3: Clinical & Pathological Suffixes */}
        <div className="bg-white dark:bg-stone-850 rounded-2xl border border-stone-200 dark:border-stone-750 p-5 shadow-xs">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-200 dark:border-stone-800">
            <h4 className="font-display text-sm font-bold text-stone-900 dark:text-stone-100">
              3. Suffix (Grundwort)
            </h4>
            <span className="text-[11px] font-mono text-stone-400">Determines Gender</span>
          </div>

          <div className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1">
            {SUFFIX_PARTS.map((sfx) => {
              const isSelected = selectedSuffix.id === sfx.id;
              return (
                <button
                  key={sfx.id}
                  onClick={() => setSelectedSuffix(sfx)}
                  className={`w-full text-left p-2.5 rounded-lg border text-xs transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'border-amber-400 dark:border-amber-600 bg-amber-50 dark:bg-amber-950/40 text-stone-900 dark:text-stone-100 font-semibold'
                      : 'border-stone-200 dark:border-stone-700 bg-stone-50/60 dark:bg-stone-800/60 hover:bg-stone-100 text-stone-700 dark:text-stone-300'
                  }`}
                >
                  <div>
                    <span className="font-mono text-amber-700 dark:text-amber-400 mr-1.5">{sfx.gender}</span>
                    <span className="font-bold">-{sfx.suffix}</span>
                  </div>
                  <span className="text-stone-500 dark:text-stone-400 text-[11px] truncate max-w-[110px]">
                    {sfx.greekLatin}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
};
