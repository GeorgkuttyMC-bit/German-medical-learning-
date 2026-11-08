export type Gender = 'masculine' | 'feminine' | 'neuter' | 'plural';

export interface MedicalTerm {
  id: string;
  german: string;
  gender: Gender;
  genderArticle: 'der' | 'die' | 'das' | 'die (pl)';
  phonetic: string;
  literalTranslation: string;
  englishDefinition: string;
  category: 'cardiovascular' | 'respiratory' | 'gastrointestinal' | 'neurology' | 'musculoskeletal' | 'instruments' | 'pathology' | 'morphology' | 'allied';
  subCategory?: 'anatomy' | 'pathology' | 'procedure' | 'reagent';
  chapterId: number;
  etymology: {
    morphemes: {
      part: string;
      meaning: string;
      type: 'prefix' | 'root' | 'organ' | 'suffix' | 'connecting';
    }[];
    notes: string;
  };
  clinicalExample: string;
  langPageReference?: string;
}

export interface MedicalSectionInfo {
  id: 'cardiovascular' | 'respiratory' | 'gastrointestinal' | 'neurology' | 'musculoskeletal' | 'instruments' | 'pathology' | 'morphology' | 'allied';
  nameGerman: string;
  nameEnglish: string;
  associatedChapterId: number;
  shortDescription: string;
  detailedExplanation: string;
  historicalSignificance: string;
  keyGermanRoots: {
    root: string;
    gender: 'der' | 'die' | 'das';
    literal: string;
    english: string;
    example: string;
  }[];
  compoundingRules: string[];
  greekLatinEquivalents: {
    greekLatin: string;
    german: string;
    english: string;
  }[];
}

export type QuestionType = 'multiple-choice' | 'morpheme-assembly' | 'translation-match' | 'clinical-scenario';

export interface QuizQuestion {
  id: string;
  type: QuestionType;
  prompt: string;
  context?: string;
  options?: string[];
  correctAnswer: string | string[]; // string for MC/scenario, array of tokens for assembly
  tokens?: string[]; // available fragments for morpheme-assembly
  pairs?: { german: string; english: string }[]; // for translation match
  explanation: string;
  langCitation: string;
}

export interface Chapter {
  id: number;
  number: string;
  titleGerman: string;
  titleEnglish: string;
  subtitle: string;
  estimatedMinutes: number;
  coverImage: string;
  overview: string;
  sections: {
    id: string;
    heading: string;
    content: string[];
    keyTerms?: string[]; // IDs of terms from dictionary
    historicalInsight?: string;
    ruleBox?: {
      title: string;
      rule: string;
      examples: { german: string; literal: string; english: string }[];
    };
  }[];
  quiz: {
    id: string;
    title: string;
    description: string;
    questions: QuizQuestion[];
  };
}

export interface QuizProgress {
  chapterId: number;
  score: number;
  total: number;
  passed: boolean;
  completedAt: string;
  answers: Record<string, string | string[]>;
}
