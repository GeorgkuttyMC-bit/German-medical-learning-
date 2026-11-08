import React from 'react';
import { ExternalLink, BookOpen, FileText, CheckCircle2, History, Landmark, Award } from 'lucide-react';

export const ArchivalViewer: React.FC = () => {
  const pdfUrl = 'https://upload.wikimedia.org/wikipedia/commons/f/fa/A_German-English_dictionary_of_terms_used_in_medicine_and_the_allied_sciences_%28IA_cu31924000217665%29.pdf';

  const historicalMilestones = [
    {
      year: '1851',
      title: 'Invention of the Augenspiegel (Ophthalmoscope)',
      pioneer: 'Hermann von Helmholtz (Königsberg)',
      significance: 'Allowed non-invasive observation of the living human retina and retinal blood vessels for the first time in history.'
    },
    {
      year: '1855',
      title: 'Cellular Pathology (Omnis cellula e cellula)',
      pioneer: 'Rudolf Virchow (Charité, Berlin)',
      significance: 'Overturned ancient humoral theory, establishing that disease originates inside individual malfunctioning cells and tissue units.'
    },
    {
      year: '1858',
      title: 'The Kehlkopfspiegel (Laryngoscope)',
      pioneer: 'Johann Nepomuk Czermak (Vienna/Leipzig)',
      significance: 'Introduced artificial illumination with a concave head mirror, enabling direct visualization and endolaryngeal surgery of the vocal cords.'
    },
    {
      year: '1881',
      title: 'First Successful Gastrectomy (Billroth I)',
      pioneer: 'Theodor Billroth (Vienna General Hospital)',
      significance: 'Inaugurated modern gastrointestinal and visceral abdominal surgery, pioneering gastrojejunostomy and resection techniques.'
    },
    {
      year: '1882',
      title: 'Discovery of the Tubercle Bacillus',
      pioneer: 'Robert Koch (Imperial Health Bureau, Berlin)',
      significance: 'Demonstrated that pulmonary phthisis (Schwindsucht) is caused by Mycobacterium tuberculosis, proving the germ theory of disease.'
    },
    {
      year: '1895',
      title: 'Discovery of X-Rays (Röntgenstrahlen)',
      pioneer: 'Wilhelm Conrad Röntgen (Würzburg)',
      significance: 'Allowed skeletal visualization and fracture diagnosis inside living tissue, awarded the inaugural Nobel Prize in Physics (1901).'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Title */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-stone-400 mb-2">
          <span>Primary Source & Archival Provenance</span>
          <span aria-hidden="true">·</span>
          <span>Wikimedia Commons / Cornell University</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-2">
          Historical Lexicography & PDF Source
        </h2>
        <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base max-w-3xl">
          Review the historical background of Hugo Lang and Bertram Abrahams’ masterpiece, explore the original digitized Cornell University Library PDF volume, and examine how 19th-century German medical science transformed global clinical practice.
        </p>
      </div>

      {/* PDF Source Banner */}
      <div className="bg-white dark:bg-stone-850 rounded-2xl border border-stone-200 dark:border-stone-750 p-6 sm:p-8 mb-8 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-700 dark:text-amber-500 font-semibold">
              <Landmark className="w-4 h-4" />
              <span>Cornell University Library Collection</span>
            </div>

            <h3 className="font-display text-2xl font-bold text-stone-900 dark:text-stone-100">
              A German-English Dictionary of Terms Used in Medicine and the Allied Sciences
            </h3>

            <div className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 space-y-1">
              <p><strong>Authors / Compilers:</strong> Hugo Lang, B.A., edited and completed by Bertram Abrahams, M.B., B.Sc., F.R.C.P.</p>
              <p><strong>Publishers:</strong> J. & A. Churchill (London) & P. Blakiston's Son & Co. (Philadelphia, 1905 / 1913)</p>
              <p><strong>Archive Identifier:</strong> <code className="font-mono bg-stone-100 dark:bg-stone-800 px-1.5 py-0.5 rounded text-amber-800 dark:text-amber-300">IA cu31924000217665</code></p>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-body">
              This dictionary represents one of the most comprehensive Anglo-German scientific lexicons ever published, comprising over 600 dense double-column pages defining anatomical terms, clinical symptoms, chemical reagents, histological stains, surgical instruments, and botanical pharmacopeia.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-500 dark:bg-amber-500 dark:hover:bg-amber-400 rounded-lg shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Open Original PDF (Wikimedia Commons)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://archive.org/details/cu31924000217665"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 text-xs font-medium text-stone-700 dark:text-stone-300 bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700 hover:bg-stone-50 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Internet Archive Record</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="w-full max-w-xs rounded-xl overflow-hidden border border-stone-300 dark:border-stone-700 shadow-md bg-stone-100 dark:bg-stone-800">
              <img
                src="/src/assets/images/historical_clinical_lab_1794107805406.jpg"
                alt="19th-century pathology laboratory with microscope and histological specimens"
                className="w-full h-48 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 text-xs text-stone-600 dark:text-stone-300">
                <span className="font-semibold text-stone-900 dark:text-stone-100 block mb-1">
                  1880–1914: The German Hegemony
                </span>
                Over 15,000 British and American physicians traveled to Berlin, Vienna, and Leipzig to study under the masters of cellular pathology and bacteriology.
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Historical Context Timeline */}
      <div className="bg-white dark:bg-stone-850 rounded-2xl border border-stone-200 dark:border-stone-750 p-6 sm:p-8 shadow-xs mb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-700 dark:text-amber-500 uppercase tracking-wider mb-2">
          <History className="w-4 h-4" />
          <span>Historical Timeline</span>
        </div>
        
        <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100 mb-6">
          The Innovations That Shaped Lang’s Lexicon
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {historicalMilestones.map((m, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 text-xs sm:text-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-amber-700 dark:text-amber-400 font-bold mb-1">
                  <span>{m.year}</span>
                  <span className="text-[10px] text-stone-400">Milestone</span>
                </div>
                <h4 className="font-display font-bold text-base text-stone-900 dark:text-stone-100 mb-1">
                  {m.title}
                </h4>
                <p className="text-xs text-stone-500 font-medium mb-2">
                  {m.pioneer}
                </p>
                <p className="text-stone-600 dark:text-stone-300 leading-relaxed text-xs">
                  {m.significance}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Embedded PDF Reference Guide */}
      <div className="bg-white dark:bg-stone-850 rounded-2xl border border-stone-200 dark:border-stone-750 p-6 sm:p-8 shadow-xs">
        <h3 className="font-display text-xl font-bold text-stone-900 dark:text-stone-100 mb-3">
          How to Navigate the Original PDF Volume
        </h3>
        
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
          <p>
            When consulting the attached Cornell University PDF (<code className="font-mono text-amber-700 dark:text-amber-400">IA cu31924000217665</code>), keep in mind the lexicographical conventions established by Hugo Lang and Dr. Bertram Abrahams:
          </p>
          
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Alphabetical Ordering of Compounds:</strong> Complex compounds are listed under their primary root. For instance, dozens of laryngeal terms are grouped systematically under <em>Kehlkopf-</em> (pp. 240–244).
            </li>
            <li>
              <strong>Gender Indicators:</strong> Nouns are marked with traditional grammatical abbreviations: <span className="font-mono font-semibold">m.</span> (masculine / der), <span className="font-mono font-semibold">f.</span> (feminine / die), <span className="font-mono font-semibold">n.</span> (neuter / das), and <span className="font-mono font-semibold">pl.</span> (plural).
            </li>
            <li>
              <strong>Allied Sciences Notation:</strong> Pharmacological preparations are cross-referenced with both British Pharmacopoeia (B.P.) and German Pharmacopoeia (Ph.G.) standards of 1905.
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};
