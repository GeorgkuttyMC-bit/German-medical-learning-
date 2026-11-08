import React, { useState } from 'react';
import { QuizQuestion, QuizProgress } from '../types';
import { CheckCircle2, XCircle, RotateCcw, ArrowRight, Award, Volume2, HelpCircle } from 'lucide-react';
import { speakGerman } from '../utils/speech';

interface InteractiveQuizProps {
  chapterId: number;
  chapterTitle: string;
  questions: QuizQuestion[];
  existingProgress?: QuizProgress;
  onSaveProgress: (progress: QuizProgress) => void;
  onNextChapter?: () => void;
  onBackToChapter: () => void;
}

export const InteractiveQuiz: React.FC<InteractiveQuizProps> = ({
  chapterId,
  chapterTitle,
  questions,
  existingProgress,
  onSaveProgress,
  onNextChapter,
  onBackToChapter,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Store user answers for each question: questionId -> answer (string or array of tokens or pairs object)
  const [answers, setAnswers] = useState<Record<string, any>>(existingProgress?.answers || {});
  const [submittedQuestions, setSubmittedQuestions] = useState<Record<string, boolean>>({});
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  // For morpheme assembly
  const [assembledTokens, setAssembledTokens] = useState<string[]>([]);

  // For translation match
  const [selectedGermanTerm, setSelectedGermanTerm] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Record<string, string>>({});

  const currentQuestion = questions[currentIndex];
  const isCurrentSubmitted = !!submittedQuestions[currentQuestion.id];

  // Check if answer is correct
  const isQuestionCorrect = (q: QuizQuestion, ans: any): boolean => {
    if (!ans) return false;
    if (q.type === 'multiple-choice' || q.type === 'clinical-scenario') {
      return ans === q.correctAnswer;
    }
    if (q.type === 'morpheme-assembly') {
      if (!Array.isArray(ans) || !Array.isArray(q.correctAnswer)) return false;
      if (ans.length !== q.correctAnswer.length) return false;
      return ans.every((val, idx) => val === (q.correctAnswer as string[])[idx]);
    }
    if (q.type === 'translation-match') {
      if (!q.pairs) return false;
      // All pairs must be matched accurately
      return q.pairs.every(p => ans[p.german] === p.english);
    }
    return false;
  };

  // Submit current question
  const handleSubmitCurrent = (ans: any) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: ans }));
    setSubmittedQuestions(prev => ({ ...prev, [currentQuestion.id]: true }));
  };

  // Handle assembly token click
  const handleAddToken = (token: string) => {
    if (isCurrentSubmitted) return;
    setAssembledTokens(prev => [...prev, token]);
  };

  const handleRemoveToken = (index: number) => {
    if (isCurrentSubmitted) return;
    setAssembledTokens(prev => prev.filter((_, i) => i !== index));
  };

  const handleCheckAssembly = () => {
    handleSubmitCurrent(assembledTokens);
  };

  // Handle matching pairs
  const handleGermanMatchClick = (german: string) => {
    if (isCurrentSubmitted || matchedPairs[german]) return;
    setSelectedGermanTerm(german);
  };

  const handleEnglishMatchClick = (english: string) => {
    if (isCurrentSubmitted || !selectedGermanTerm) return;
    const newMatched = { ...matchedPairs, [selectedGermanTerm]: english };
    setMatchedPairs(newMatched);
    setSelectedGermanTerm(null);

    // If all pairs matched, submit
    if (currentQuestion.pairs && Object.keys(newMatched).length === currentQuestion.pairs.length) {
      handleSubmitCurrent(newMatched);
    }
  };

  // Navigation
  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      // Reset temporary states for interactive questions
      setAssembledTokens([]);
      setSelectedGermanTerm(null);
      setMatchedPairs({});
    } else {
      // Calculate final score
      let score = 0;
      questions.forEach(q => {
        if (isQuestionCorrect(q, answers[q.id])) {
          score++;
        }
      });
      const progress: QuizProgress = {
        chapterId,
        score,
        total: questions.length,
        passed: score >= Math.ceil(questions.length * 0.7),
        completedAt: new Date().toISOString(),
        answers,
      };
      onSaveProgress(progress);
      setIsQuizComplete(true);
    }
  };

  const handleRetake = () => {
    setCurrentIndex(0);
    setAnswers({});
    setSubmittedQuestions({});
    setAssembledTokens([]);
    setSelectedGermanTerm(null);
    setMatchedPairs({});
    setIsQuizComplete(false);
  };

  // Summary calculation
  const totalScore = questions.reduce((acc, q) => {
    return isQuestionCorrect(q, answers[q.id]) ? acc + 1 : acc;
  }, 0);
  const percentage = Math.round((totalScore / questions.length) * 100);
  const passed = totalScore >= Math.ceil(questions.length * 0.7);

  if (isQuizComplete) {
    return (
      <div className="bg-white dark:bg-stone-850 rounded-2xl border border-stone-200 dark:border-stone-750 p-6 sm:p-8 shadow-sm max-w-3xl mx-auto">
        <div className="text-center py-6">
          <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
            passed ? 'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400' : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300'
          }`}>
            <Award className="w-8 h-8" />
          </div>

          <span className="text-xs font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400">
            Chapter {chapterId} Examination Results
          </span>

          <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 mt-1 mb-2">
            {passed ? 'Chapter Mastery Achieved!' : 'Review & Practice Recommended'}
          </h2>

          <p className="text-stone-600 dark:text-stone-300 text-sm max-w-md mx-auto mb-6">
            {passed
              ? `Congratulations! You scored ${totalScore} out of ${questions.length} (${percentage}%). You have demonstrated command over this chapter's German terminology.`
              : `You scored ${totalScore} out of ${questions.length} (${percentage}%). Review Hugo Lang's morphological patterns and try again to master this chapter.`}
          </p>

          <div className="inline-flex items-center gap-6 px-6 py-3 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 mb-8 font-mono tabular-nums text-sm">
            <div>
              <span className="text-xs text-stone-500 block">Score</span>
              <span className="text-lg font-bold text-stone-900 dark:text-stone-100">{totalScore} / {questions.length}</span>
            </div>
            <div className="w-px h-8 bg-stone-200 dark:bg-stone-700" />
            <div>
              <span className="text-xs text-stone-500 block">Accuracy</span>
              <span className="text-lg font-bold text-stone-900 dark:text-stone-100">{percentage}%</span>
            </div>
            <div className="w-px h-8 bg-stone-200 dark:bg-stone-700" />
            <div>
              <span className="text-xs text-stone-500 block">Status</span>
              <span className={`text-lg font-bold ${passed ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'}`}>
                {passed ? 'Passed' : 'Needs Review'}
              </span>
            </div>
          </div>

          {/* Question by question summary */}
          <div className="text-left border-t border-stone-200 dark:border-stone-750 pt-6 mt-2 space-y-4">
            <h3 className="font-display text-base font-semibold text-stone-900 dark:text-stone-100 mb-3">
              Question Breakdown & Lexicon Citations
            </h3>
            {questions.map((q, idx) => {
              const isCorrect = isQuestionCorrect(q, answers[q.id]);
              return (
                <div key={q.id} className="p-3.5 rounded-lg bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700/70 text-xs">
                  <div className="flex items-start gap-2 mb-1.5">
                    {isCorrect ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <span className="font-semibold text-stone-900 dark:text-stone-100">
                        Q{idx + 1}: {q.prompt}
                      </span>
                    </div>
                  </div>
                  <p className="text-stone-600 dark:text-stone-300 ml-6 mb-1">
                    {q.explanation}
                  </p>
                  <span className="text-stone-400 dark:text-stone-500 ml-6 font-mono text-[11px] block">
                    Source: {q.langCitation}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <button
              onClick={handleRetake}
              className="px-4 py-2.5 text-xs font-semibold text-stone-800 dark:text-stone-200 bg-stone-100 dark:bg-stone-750 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retake Chapter Quiz</span>
            </button>

            <button
              onClick={onBackToChapter}
              className="px-4 py-2.5 text-xs font-semibold text-stone-800 dark:text-stone-200 bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700 hover:bg-stone-50 rounded-lg transition-colors cursor-pointer"
            >
              <span>Back to Chapter Text</span>
            </button>

            {onNextChapter && (
              <button
                onClick={onNextChapter}
                className="px-5 py-2.5 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-500 dark:bg-amber-500 dark:hover:bg-amber-400 rounded-lg shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Continue to Next Chapter</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-stone-850 rounded-2xl border border-stone-200 dark:border-stone-750 p-6 sm:p-8 shadow-sm">
      
      {/* Quiz Header & Progress Bar */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-stone-200 dark:border-stone-800">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber-500">
            Chapter {chapterId} Interactive Quiz
          </span>
          <h3 className="font-display text-lg font-bold text-stone-900 dark:text-stone-100">
            {chapterTitle}
          </h3>
        </div>
        <div className="text-right">
          <span className="font-mono text-sm font-semibold tabular-nums text-stone-700 dark:text-stone-300">
            {currentIndex + 1} / {questions.length}
          </span>
          <span className="text-xs text-stone-400 dark:text-stone-500 block">Questions</span>
        </div>
      </div>

      {/* Progress Line */}
      <div className="w-full bg-stone-100 dark:bg-stone-800 h-1.5 rounded-full overflow-hidden mb-6">
        <div
          className="bg-amber-500 h-full transition-all duration-300 ease-out"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question Prompt */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-stone-400 mb-2">
          <span>Question {currentIndex + 1}</span>
          <span aria-hidden="true">·</span>
          <span className="capitalize">{currentQuestion.type.replace('-', ' ')}</span>
        </div>

        <h4 className="font-display text-lg sm:text-xl font-semibold text-stone-900 dark:text-stone-100 leading-snug">
          {currentQuestion.prompt}
        </h4>
      </div>

      {/* Interactive Question Body Based on Type */}
      
      {/* 1. Multiple Choice / Clinical Scenario */}
      {(currentQuestion.type === 'multiple-choice' || currentQuestion.type === 'clinical-scenario') && currentQuestion.options && (
        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((option, idx) => {
            const isSelected = answers[currentQuestion.id] === option;
            const isCorrectOption = option === currentQuestion.correctAnswer;
            let optionStyles = 'border-stone-200 dark:border-stone-700 bg-stone-50/70 dark:bg-stone-800/70 hover:bg-stone-100 dark:hover:bg-stone-750 text-stone-800 dark:text-stone-200';

            if (isCurrentSubmitted) {
              if (isCorrectOption) {
                optionStyles = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-100 font-medium';
              } else if (isSelected && !isCorrectOption) {
                optionStyles = 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-950 dark:text-rose-100';
              } else {
                optionStyles = 'border-stone-200 dark:border-stone-800 opacity-50 text-stone-500';
              }
            } else if (isSelected) {
              optionStyles = 'border-amber-500 bg-amber-50 dark:bg-amber-950/40 text-amber-950 dark:text-amber-100 font-medium';
            }

            return (
              <button
                key={idx}
                disabled={isCurrentSubmitted}
                onClick={() => {
                  if (!isCurrentSubmitted) {
                    handleSubmitCurrent(option);
                  }
                }}
                className={`w-full text-left p-4 rounded-xl border transition-all text-sm flex items-start justify-between gap-3 cursor-pointer disabled:cursor-default ${optionStyles}`}
              >
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full border border-stone-300 dark:border-stone-600 flex items-center justify-center text-xs font-mono shrink-0 mt-0.5">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span>{option}</span>
                </div>

                {isCurrentSubmitted && isCorrectOption && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                )}
                {isCurrentSubmitted && isSelected && !isCorrectOption && (
                  <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* 2. Morpheme Assembly */}
      {currentQuestion.type === 'morpheme-assembly' && currentQuestion.tokens && (
        <div className="mb-6 space-y-4">
          <p className="text-xs text-stone-500 dark:text-stone-400">
            Click the morpheme tokens below in order to assemble the German compound word. Click placed tokens to remove them.
          </p>

          {/* Word Assembly Area */}
          <div className="p-4 rounded-xl border-2 border-dashed border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800/50 min-h-[70px] flex items-center flex-wrap gap-2">
            {assembledTokens.length === 0 ? (
              <span className="text-xs text-stone-400 dark:text-stone-500 italic">
                (Click tokens below to build the word)
              </span>
            ) : (
              assembledTokens.map((token, idx) => (
                <button
                  key={idx}
                  disabled={isCurrentSubmitted}
                  onClick={() => handleRemoveToken(idx)}
                  className="px-3 py-1.5 bg-amber-100 dark:bg-amber-900/60 text-amber-950 dark:text-amber-100 border border-amber-300 dark:border-amber-700 rounded-lg text-sm font-semibold flex items-center gap-1.5 cursor-pointer hover:bg-amber-200 transition-colors"
                >
                  <span>{token}</span>
                  {!isCurrentSubmitted && <span className="text-xs text-amber-700">×</span>}
                </button>
              ))
            )}
          </div>

          {/* Resulting assembled word display */}
          {assembledTokens.length > 0 && (
            <div className="flex items-center justify-between text-xs px-2">
              <span className="text-stone-500">Assembled term:</span>
              <div className="flex items-center gap-2">
                <span className="font-display text-sm font-bold text-stone-900 dark:text-stone-100">
                  {assembledTokens.join('')}
                </span>
                <button
                  onClick={() => speakGerman(assembledTokens.join(''))}
                  className="p-1 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 cursor-pointer"
                  title="Pronounce"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Available Tokens to choose */}
          <div className="space-y-1.5">
            <span className="text-xs font-mono text-stone-400">Available Morphemes:</span>
            <div className="flex flex-wrap gap-2">
              {currentQuestion.tokens.map((token, idx) => (
                <button
                  key={idx}
                  disabled={isCurrentSubmitted}
                  onClick={() => handleAddToken(token)}
                  className="px-3.5 py-1.5 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700 hover:border-amber-400 dark:hover:border-amber-500 rounded-lg text-sm font-medium transition-colors cursor-pointer disabled:opacity-50"
                >
                  {token}
                </button>
              ))}
            </div>
          </div>

          {!isCurrentSubmitted && (
            <div className="flex gap-2 pt-2">
              <button
                disabled={assembledTokens.length === 0}
                onClick={handleCheckAssembly}
                className="px-4 py-2 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-500 rounded-lg transition-colors disabled:opacity-50 cursor-pointer"
              >
                Check Assembly
              </button>
              <button
                disabled={assembledTokens.length === 0}
                onClick={() => setAssembledTokens([])}
                className="px-3 py-2 text-xs font-medium text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors cursor-pointer"
              >
                Reset
              </button>
            </div>
          )}
        </div>
      )}

      {/* 3. Translation Match */}
      {currentQuestion.type === 'translation-match' && currentQuestion.pairs && (
        <div className="mb-6 space-y-4">
          <p className="text-xs text-stone-500 dark:text-stone-400">
            Click a German term in the left column, then click its corresponding English definition on the right.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* German column */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-stone-400 block mb-1">German Terms</span>
              {currentQuestion.pairs.map((p, idx) => {
                const isMatched = !!matchedPairs[p.german];
                const isSelected = selectedGermanTerm === p.german;
                return (
                  <button
                    key={idx}
                    disabled={isCurrentSubmitted || isMatched}
                    onClick={() => handleGermanMatchClick(p.german)}
                    className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                      isMatched
                        ? 'border-emerald-300 dark:border-emerald-800 bg-emerald-50/80 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-200'
                        : isSelected
                        ? 'border-amber-500 bg-amber-50 dark:bg-amber-950/40 text-amber-950 dark:text-amber-100 ring-2 ring-amber-400'
                        : 'border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 hover:bg-stone-100 dark:hover:bg-stone-750 text-stone-900 dark:text-stone-100'
                    }`}
                  >
                    <span>{p.german}</span>
                    {isMatched && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                  </button>
                );
              })}
            </div>

            {/* English column */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-stone-400 block mb-1">English Definitions</span>
              {currentQuestion.pairs
                .slice()
                .reverse()
                .map((p, idx) => {
                  const matchedGermanKey = Object.keys(matchedPairs).find(k => matchedPairs[k] === p.english);
                  const isMatched = !!matchedGermanKey;
                  return (
                    <button
                      key={idx}
                      disabled={isCurrentSubmitted || isMatched || !selectedGermanTerm}
                      onClick={() => handleEnglishMatchClick(p.english)}
                      className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${
                        isMatched
                          ? 'border-emerald-300 dark:border-emerald-800 bg-emerald-50/80 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-200'
                          : selectedGermanTerm
                          ? 'border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800 hover:border-amber-400 hover:bg-amber-50/50 text-stone-900 dark:text-stone-100'
                          : 'border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-850 text-stone-400 cursor-not-allowed'
                      }`}
                    >
                      <span>{p.english}</span>
                      {isMatched && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                    </button>
                  );
                })}
            </div>

          </div>
        </div>
      )}

      {/* Feedback & Rationale Banner after submission */}
      {isCurrentSubmitted && (
        <div className={`p-4 rounded-xl border mb-6 transition-all ${
          isQuestionCorrect(currentQuestion, answers[currentQuestion.id])
            ? 'bg-emerald-50/80 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 text-emerald-950 dark:text-emerald-100'
            : 'bg-rose-50/80 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800 text-rose-950 dark:text-rose-100'
        }`}>
          <div className="flex items-start gap-2.5 mb-1.5">
            {isQuestionCorrect(currentQuestion, answers[currentQuestion.id]) ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            ) : (
              <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
            )}
            <div>
              <span className="font-semibold text-sm">
                {isQuestionCorrect(currentQuestion, answers[currentQuestion.id]) ? 'Correct!' : 'Incorrect'}
              </span>
              <p className="text-xs sm:text-sm mt-1 leading-relaxed opacity-90">
                {currentQuestion.explanation}
              </p>
            </div>
          </div>
          <div className="mt-2 pt-2 border-t border-black/5 dark:border-white/10 flex items-center gap-1.5 text-xs font-mono opacity-75">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Citation: {currentQuestion.langCitation}</span>
          </div>
        </div>
      )}

      {/* Footer Controls */}
      <div className="flex items-center justify-between pt-4 border-t border-stone-200 dark:border-stone-800">
        <button
          onClick={onBackToChapter}
          className="text-xs font-medium text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 cursor-pointer"
        >
          Exit to Chapter Text
        </button>

        {isCurrentSubmitted && (
          <button
            onClick={handleNext}
            className="px-5 py-2.5 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-500 dark:bg-amber-500 dark:hover:bg-amber-400 rounded-lg shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>{currentIndex < questions.length - 1 ? 'Next Question' : 'View Final Score'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

    </div>
  );
};
