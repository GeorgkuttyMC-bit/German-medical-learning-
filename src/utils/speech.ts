/**
 * Pronounces German text using the Web Speech Synthesis API.
 * Gracefully handles browsers where speech synthesis is unavailable.
 */
export function speakGerman(text: string): boolean {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return false;
  }

  try {
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'de-DE';
    utterance.rate = 0.85; // Slightly slower for crisp medical pronunciation
    utterance.pitch = 1.0;

    // Try to find a high quality German voice if available
    const voices = window.speechSynthesis.getVoices();
    const deVoice = voices.find(v => v.lang.startsWith('de') || v.lang.includes('German'));
    if (deVoice) {
      utterance.voice = deVoice;
    }

    window.speechSynthesis.speak(utterance);
    return true;
  } catch (err) {
    console.warn('Speech synthesis failed:', err);
    return false;
  }
}
