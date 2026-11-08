import { Chapter } from '../types';

export const CHAPTERS_DATA: Chapter[] = [
  {
    id: 1,
    number: '01',
    titleGerman: 'Wortbildung & Die Architektur der Komposita',
    titleEnglish: 'Morphology & The Architecture of Medical Compounds',
    subtitle: 'Prefixes, Organ Stems, and Pathological Suffixes in Hugo Lang\'s Lexicon',
    estimatedMinutes: 15,
    coverImage: '/src/assets/images/hero_medical_lexicon_1794107803888.jpg',
    overview: 'German medical terminology presents a remarkably systematic compounding logic. While English and Romance languages rely on Latin and Greek roots (e.g. pericarditis, laryngoscopy, duodenum), Hugo Lang\'s dictionary reveals how German builds intuitive, descriptive compounds from native Germanic roots. Understanding these morphological rules unlocks thousands of clinical terms instantly.',
    sections: [
      {
        id: 'c1_morphology_rule',
        heading: 'The Law of the Compound Head (Grundwort & Bestimmungswort)',
        content: [
          'In German medical compounding, words read from right to left in terms of grammatical identity and core category. The final element (Grundwort) determines both the grammatical gender (der, die, or das) and the general category of the object, while the preceding elements (Bestimmungswörter) modify and specify it.',
          'For example: "Herz" (heart, neuter) + "Beutel" (sac/bag, masculine) = "der Herzbeutel" (the pericardium, masculine, because Beutel is masculine). When we further append "Entzündung" (inflammation, feminine), the final word becomes "die Herzbeutelentzündung" (pericarditis, feminine).',
          'Hugo Lang noted that once a foreign student masters roughly 40 primary organ stems and 20 pathological suffixes, they can decode over 80% of German clinical literature without consulting a dictionary.'
        ],
        ruleBox: {
          title: 'Core Morphological Formula',
          rule: '[Modifying Organ] + [Anatomical Part] + [Pathological/Surgical Suffix] = Single Compound Word (Gender determined by last element)',
          examples: [
            { german: 'das Herz + der Beutel', literal: 'heart + bag', english: 'der Herzbeutel (Pericardium)' },
            { german: 'der Kehlkopf + der Spiegel', literal: 'larynx + mirror', english: 'der Kehlkopfspiegel (Laryngoscope)' },
            { german: 'die Sehne + die Naht', literal: 'sinew + stitch', english: 'die Sehnennaht (Tenorrhaphy)' }
          ]
        }
      },
      {
        id: 'c1_suffixes',
        heading: 'Universal Pathological Suffixes and Their Greco-Latin Equivalents',
        content: [
          'Hugo Lang\'s 1905 lexicon cross-references classical Latin/Greek terms with German equivalents. The most critical suffixes you must recognize include:',
          '1. -entzündung (literally: in-kindling) = -itis (inflammation). Examples: Lungenentzündung (pneumonia), Blinddarmentzündung (appendicitis), Gelenkentzündung (arthritis).',
          '2. -schwund (literally: dwindling / wasting) = -atrophia / -malnutrition. Examples: Muskelschwund (amyotrophy), Knochenschwund (osteoporosis), Gewebsschwund (tissue atrophy).',
          '3. -erweichung (literally: softening-out) = -malacia. Examples: Gehirnerweichung (encephalomalacia), Knochenerweichung (osteomalacia).',
          '4. -schnitt (literally: cut / incision) = -tomy / sectio. Examples: Luftröhrenschnitt (tracheotomy), Kaiserschnitt (cesarean section).',
          '5. -spiegelung (literally: mirroring / viewing) = -scopy. Examples: Magenspiegelung (gastroscopy), Kehlkopfspiegelung (laryngoscopy).'
        ],
        historicalInsight: 'In 19th-century Germany, medical reformers deliberately translated Latin and Greek medical terms into German so patients and surgical dressers could understand pathologies directly rather than treating medicine as an esoteric Latin secret.'
      },
      {
        id: 'c1_prefixes',
        heading: 'Clinical Prefixes: Direction, Excess, and State',
        content: [
          'Prefixes in Lang\'s dictionary alter clinical states with mathematical precision:',
          '• Über- (Hyper- / Over-): Überernährung (hyperalimentation), Überempfindlichkeit (hypersensitivity / allergy).',
          '• Unter- (Hypo- / Sub-): Unterkühlung (hypothermia), Unterhautgewebe (subcutaneous tissue).',
          '• Ent- (De- / Dis- / Removal): Entartung (degeneration), Entbindung (parturition / delivery), Entgiftung (detoxification).',
          '• Vor- (Ante- / Pre- / Pro-): Vorhof (atrium / vestibule), Vorhaut (prepuce), Vorfall (prolapse).'
        ]
      }
    ],
    quiz: {
      id: 'quiz_ch1',
      title: 'Chapter 1 Mastery Quiz: Compound Word Formation',
      description: 'Test your understanding of German medical morphemes, suffix equivalence, and compound architecture.',
      questions: [
        {
          id: 'q1_1',
          type: 'multiple-choice',
          prompt: 'What is the grammatical rule governing the gender (der, die, das) of a German compound medical word like "die Herzbeutelentzündung"?',
          options: [
            'The initial organ stem (das Herz) determines the gender.',
            'The final morpheme/element (die Entzündung) determines the gender.',
            'Compound medical words are always neuter (das).',
            'The gender is randomly assigned based on Latin declension.'
          ],
          correctAnswer: 'The final morpheme/element (die Entzündung) determines the gender.',
          explanation: 'In German compound morphology (Komposita), the Grundwort (the last element) always dictates the gender and lexical class of the entire compound.',
          langCitation: 'Hugo Lang, Preface on German Medical Orthography, p. v-viii'
        },
        {
          id: 'q1_2',
          type: 'multiple-choice',
          prompt: 'Which German suffix systematically translates the Greco-Latin suffix "-itis" (inflammation) across Lang\'s dictionary?',
          options: [
            '-schwund',
            '-erweichung',
            '-entzündung',
            '-krampf'
          ],
          correctAnswer: '-entzündung',
          explanation: '-entzündung comes from "entzünden" (to set ablaze, kindle) and denotes inflammation. -schwund means atrophy, -erweichung means malacia/softening, and -krampf means spasm.',
          langCitation: 'Lang (1905), p. 118: Entzündung, f. inflammation.'
        },
        {
          id: 'q1_3',
          type: 'morpheme-assembly',
          prompt: 'Assemble the German compound medical term for "Pericarditis" (literally: heart-sac-inflammation):',
          tokens: ['Herz', 'beutel', 'entzündung', 'schnitt', 'krampf'],
          correctAnswer: ['Herz', 'beutel', 'entzündung'],
          explanation: 'Herz (heart) + beutel (sac/bag) + entzündung (inflammation) = Herzbeutelentzündung (Pericarditis).',
          langCitation: 'Lang (1905), p. 202'
        },
        {
          id: 'q1_4',
          type: 'translation-match',
          prompt: 'Match the German pathological suffix with its standard English/Greco-Latin medical counterpart:',
          pairs: [
            { german: '-schnitt', english: '-tomy (incision)' },
            { german: '-erweichung', english: '-malacia (softening)' },
            { german: '-schwund', english: 'atrophy (wasting)' },
            { german: '-spiegelung', english: '-scopy (endoscopic examination)' }
          ],
          correctAnswer: 'matched',
          explanation: '-schnitt denotes incision; -erweichung denotes tissue softening; -schwund denotes atrophy; -spiegelung denotes optical examination.',
          langCitation: 'Lang (1905), Morphology Section'
        },
        {
          id: 'q1_5',
          type: 'clinical-scenario',
          prompt: 'A 19th-century autopsy report in Vienna documents "fortschreitender Muskelschwund". How should the physician translate this condition into modern medical English?',
          options: [
            'Acute muscular inflammation (Myositis)',
            'Progressive muscular atrophy (Amyotrophia)',
            'Muscular spasm or rigidity (Myotonia)',
            'Tendon rupture (Tenorrhaphy)'
          ],
          correctAnswer: 'Progressive muscular atrophy (Amyotrophia)',
          explanation: '"Muskel" (muscle) + "Schwund" (dwindling/wasting) translates directly to muscular atrophy or wasting.',
          langCitation: 'Lang (1905), p. 317, p. 450'
        }
      ]
    }
  },

  {
    id: 2,
    number: '02',
    titleGerman: 'Herz-, Gefäß- & Blutlehre',
    titleEnglish: 'Cardiovascular System & Hematology',
    subtitle: 'Chambers, Vessels, and the Cellular Discoveries of German Pathology',
    estimatedMinutes: 20,
    coverImage: '/src/assets/images/anatomical_chart_vintage_1794107805480.jpg',
    overview: 'The 19th century was the golden era of German cardiovascular pathology. Rudolf Virchow formulated his famous triad of thrombosis in Berlin, while Carl von Rokitansky in Vienna performed over 30,000 autopsies. Lang\'s dictionary documents the precise vocabulary that underpinned these world-changing discoveries.',
    sections: [
      {
        id: 'c2_chambers_vessels',
        heading: 'Anatomy of the Heart and Great Vessels',
        content: [
          'German anatomical nomenclature differentiates blood vessels by function and pulse sensation:',
          '• Die Schlagader (literally: beating-artery): The vessel where the cardiac pulse (Schlag) is palpated. The primary artery is die Hauptschlagader (Aorta).',
          '• Die Blutader (literally: blood-vessel / vein): The returning vessel (Vena). The large systemic veins are die obere und untere Hohlblutader (superior and inferior vena cava).',
          '• Die Herzkammer (literally: heart chamber): The muscular ventricle (Ventriculus cordis).',
          '• Der Vorhof (literally: fore-court): The receiving atrium (Atrium cordis).',
          '• Die Herzklappe (literally: heart valve/flap): The cardiac valves (Valvulae cordis), composed of cusp flaps (Segelklappen / Taschenklappen).'
        ],
        ruleBox: {
          title: 'Vascular Nomenclature Grid',
          rule: 'Arteries beat (schlagen); Veins return blood (Blutadern); Capillaries are hair-like (Haargefäße).',
          examples: [
            { german: 'die Schlagader', literal: 'striking/beating vein', english: 'Artery' },
            { german: 'die Blutader', literal: 'blood vessel', english: 'Vein' },
            { german: 'das Haargefäß', literal: 'hair-like vessel', english: 'Capillary' }
          ]
        }
      },
      {
        id: 'c2_blood_elements',
        heading: 'Hematology: The Cellular Era of Virchow and Ehrlich',
        content: [
          'Until the late 19th century, blood was regarded through humorism. German microscopists identified blood cells as discrete corpuscles (Blutkörperchen). Paul Ehrlich invented aniline dye staining techniques in Frankfurt, classifying leukocytes into granular and agranular forms.',
          'Key hematological terms in Lang:',
          '• Das Blutkörperchen (literally: little blood body): Blood corpuscle (Erythrozyt / Leukozyt).',
          '• Das Blutgerinnsel (literally: blood curdling product): Thrombus or blood clot. Virchow coined the term Thrombose in Berlin in 1856.',
          '• Die Blutarmut (literally: blood poverty): Anemia, deficiency of red cells or hemoglobin.',
          '• Die Blutvergiftung (literally: blood poisoning): Septicemia / Pyemia.'
        ],
        historicalInsight: 'Rudolf Virchow established "Omnis cellula e cellula" (every cell stems from another cell) at the Charité Hospital in Berlin in 1855, dismantling spontaneous generation and founding modern cellular pathology.'
      }
    ],
    quiz: {
      id: 'quiz_ch2',
      title: 'Chapter 2 Mastery Quiz: Cardiovascular & Blood Terminology',
      description: 'Demonstrate your command of cardiac chambers, vessel terminology, and historical hematology.',
      questions: [
        {
          id: 'q2_1',
          type: 'multiple-choice',
          prompt: 'Why did 19th-century German anatomists name an artery "die Schlagader"?',
          options: [
            'Because it carries dark, sluggish blood.',
            'Because the arterial pulse (Schlag) can be felt beating through the vessel wall.',
            'Because arteries resemble striking snakes.',
            'Because an injury causes blood to strike the ceiling.'
          ],
          correctAnswer: 'Because the arterial pulse (Schlag) can be felt beating through the vessel wall.',
          explanation: 'Schlag (beat/stroke) + Ader (vessel) literally describes the pulsatile nature of arterial blood flow felt upon palpation.',
          langCitation: 'Lang (1905), p. 433: Schlagader, f. artery.'
        },
        {
          id: 'q2_2',
          type: 'multiple-choice',
          prompt: 'In clinical notes, a physician writes: "Stenose der linken Herzkammerklappe". Which anatomical structure is affected?',
          options: [
            'Right atrial valve (Tricuspid valve)',
            'Left ventricular valve (Mitral / Bicuspid valve)',
            'Pulmonary valve',
            'Coronary sinus'
          ],
          correctAnswer: 'Left ventricular valve (Mitral / Bicuspid valve)',
          explanation: '"Linke Herzkammer" is the left ventricle; its inlet valve is the mitral (bicuspid) valve.',
          langCitation: 'Lang (1905), p. 203'
        },
        {
          id: 'q2_3',
          type: 'morpheme-assembly',
          prompt: 'Assemble the German compound word for "Anemia" (literally: blood-poverty):',
          tokens: ['Blut', 'armut', 'giftung', 'spiegel', 'körperchen'],
          correctAnswer: ['Blut', 'armut'],
          explanation: 'Blut (blood) + Armut (poverty) = Blutarmut (Anemia).',
          langCitation: 'Lang (1905), p. 66'
        },
        {
          id: 'q2_4',
          type: 'translation-match',
          prompt: 'Match the German cardiovascular structure with its modern medical definition:',
          pairs: [
            { german: 'der Vorhof', english: 'Atrium (receiving chamber)' },
            { german: 'die Herzkammer', english: 'Ventricle (pumping chamber)' },
            { german: 'das Blutgerinnsel', english: 'Thrombus / Blood clot' },
            { german: 'das Haargefäß', english: 'Capillary vessel' }
          ],
          correctAnswer: 'matched',
          explanation: 'Vorhof is atrium, Herzkammer is ventricle, Blutgerinnsel is thrombus, and Haargefäß is capillary.',
          langCitation: 'Lang (1905), Cardiovascular Section'
        },
        {
          id: 'q2_5',
          type: 'clinical-scenario',
          prompt: 'A patient presents with dyspnea, pallor, and a low red blood cell count. The chart diagnoses "Schwere Blutarmut infolge okkulter Blutung". What is the diagnosis?',
          options: [
            'Severe polycythemia due to bone marrow cancer',
            'Severe anemia resulting from occult bleeding',
            'High blood pressure with coronary thrombosis',
            'Acute pericarditis with cardiac tamponade'
          ],
          correctAnswer: 'Severe anemia resulting from occult bleeding',
          explanation: '"Blutarmut" is anemia, and "Blutung" is hemorrhage or bleeding.',
          langCitation: 'Lang (1905), p. 66'
        }
      ]
    }
  },

  {
    id: 3,
    number: '03',
    titleGerman: 'Atmungs- & Hals-Nasen-Ohren-Heilkunde',
    titleEnglish: 'Respiratory System & Laryngology',
    subtitle: 'From the Air Pipe to the Laryngoscope Revolution',
    estimatedMinutes: 18,
    coverImage: '/src/assets/images/historical_clinical_lab_1794107805406.jpg',
    overview: 'In 1857, Johann Nepomuk Czermak in Vienna and Ludwig Türck refined the laryngoscope (Kehlkopfspiegel), catapulting German laryngology to the forefront of global medicine. Concurrently, Robert Koch\'s isolation of the tubercle bacillus in 1882 transformed pulmonary phthisis (Schwindsucht) from a hereditary mystery into an infectious battleground.',
    sections: [
      {
        id: 'c3_airways',
        heading: 'Anatomy of the Respiratory Tract',
        content: [
          'The respiratory system is named with visual candor in Lang\'s dictionary:',
          '• Die Luftröhre (literally: air pipe): The trachea. Its cartilaginous rings (Knorpelspangen) prevent collapse under negative thoracic pressure.',
          '• Der Kehlkopf (literally: throat head): The larynx, containing the true and false vocal cords (wahren und falschen Stimmlippen).',
          '• Die Stimmritze (literally: voice slit): The glottis (Rima glottidis).',
          '• Das Brustfell / Rippenfell: The pleura. Brustfellentzündung or Rippenfellentzündung is pleurisy.',
          '• Das Zwerchfell (literally: crossways membrane, from OHG twerh = across): The diaphragm separating the thoracic and peritoneal cavities.'
        ]
      },
      {
        id: 'c3_laryngoscopy',
        heading: 'The Invention of Optical Mirrors (Spiegel-Medizin)',
        content: [
          'Prior to mid-19th-century German clinical instruments, the interior of the living human larynx could never be inspected. Manuel García (a Spanish singing teacher in London) first viewed his own vocal cords using a small dental mirror and sunlight in 1854.',
          'Professor Johann Czermak in Vienna adopted this method, introduced artificial lamp illumination with a concave frontal head-mirror (Stirnspiegel), and published "Der Kehlkopfspiegel und seine Verwerthung für Physiologie und Medizin" in Leipzig (1860).',
          'Suddenly, vocal cord nodules, laryngeal tuberculosis, and diphtheria membranes could be diagnosed and surgically treated without opening the neck.'
        ],
        historicalInsight: 'The suffix "-spiegel" transformed German diagnostic medicine: Augenspiegel (ophthalmoscope), Ohrenspiegel (otoscope), Kehlkopfspiegel (laryngoscope), and Magenspiegel (early gastroscope).'
      },
      {
        id: 'c3_tuberculosis',
        heading: 'Schwindsucht & Infectious Pulmonary Diseases',
        content: [
          'Tuberculosis accounted for nearly one in four deaths in 19th-century European cities. In German it was termed die Schwindsucht (wasting disease / phthisis) or die Lungensucht.',
          'Robert Koch demonstrated at the Berlin Physiological Society on March 24, 1882, using methylene blue and vesuvin dyes, that a rod-shaped bacterium (Tuberkelbazillus) was the sole causative agent.',
          'Other common respiratory conditions in Lang:',
          '• Der Keuchhusten (literally: wheeze/pant cough): Pertussis (whooping cough).',
          '• Die Lungenentzündung: Pneumonia.',
          '• Die Atemnot: Dyspnea (shortness of breath).'
        ]
      }
    ],
    quiz: {
      id: 'quiz_ch3',
      title: 'Chapter 3 Mastery Quiz: Respiratory & ENT Terminology',
      description: 'Assess your knowledge of airway anatomy, endoscopic terminology, and pulmonary pathologies.',
      questions: [
        {
          id: 'q3_1',
          type: 'multiple-choice',
          prompt: 'What is the literal meaning of the German anatomical term "Luftröhre"?',
          options: [
            'Wind passage',
            'Air pipe',
            'Throat tube',
            'Voice channel'
          ],
          correctAnswer: 'Air pipe',
          explanation: 'Luft (air) + Röhre (pipe / conduit) literally means "air pipe" and designates the trachea.',
          langCitation: 'Lang (1905), p. 286: Luftröhre, f. trachea, windpipe.'
        },
        {
          id: 'q3_2',
          type: 'multiple-choice',
          prompt: 'Which diagnostic innovation did Johann Czermak popularize across Austrian and German clinics in the 1850s?',
          options: [
            'The acoustic stethoscope',
            'The Kehlkopfspiegel (laryngoscope with concave head mirror)',
            'The hypodermic syringe',
            'The electrocardiogram'
          ],
          correctAnswer: 'The Kehlkopfspiegel (laryngoscope with concave head mirror)',
          explanation: 'Czermak perfected the Kehlkopfspiegel using an artificial light source and concave reflector to inspect the living larynx.',
          langCitation: 'Lang (1905), p. 241'
        },
        {
          id: 'q3_3',
          type: 'morpheme-assembly',
          prompt: 'Assemble the German medical term for "Laryngoscopy" (the optical examination of the larynx):',
          tokens: ['Kehlkopf', 'spiegel', 'ung', 'schnitt', 'krampf'],
          correctAnswer: ['Kehlkopf', 'spiegel', 'ung'],
          explanation: 'Kehlkopf (larynx) + spiegel (mirror) + ung (-ation/-ing) = Kehlkopfspiegelung (Laryngoscopy).',
          langCitation: 'Lang (1905), p. 241'
        },
        {
          id: 'q3_4',
          type: 'translation-match',
          prompt: 'Match the German respiratory term with its clinical English counterpart:',
          pairs: [
            { german: 'das Zwerchfell', english: 'Diaphragm' },
            { german: 'das Rippenfell', english: 'Pleura (costal)' },
            { german: 'die Schwindsucht', english: 'Pulmonary tuberculosis (phthisis)' },
            { german: 'der Keuchhusten', english: 'Pertussis (whooping cough)' }
          ],
          correctAnswer: 'matched',
          explanation: 'Zwerchfell is the diaphragm, Rippenfell is pleura, Schwindsucht is consumption/tuberculosis, and Keuchhusten is whooping cough.',
          langCitation: 'Lang (1905), Respiratory Section'
        },
        {
          id: 'q3_5',
          type: 'clinical-scenario',
          prompt: 'A patient is admitted in extremis with severe stridor. The surgeon immediately performs a "Luftröhrenschnitt". What emergency surgical procedure was conducted?',
          options: [
            'Thoracotomy',
            'Tracheotomy',
            'Bronchoscopy',
            'Laryngectomy'
          ],
          correctAnswer: 'Tracheotomy',
          explanation: 'Luftröhre (trachea) + Schnitt (incision/cut) = Tracheotomy.',
          langCitation: 'Lang (1905), p. 286'
        }
      ]
    }
  },

  {
    id: 4,
    number: '04',
    titleGerman: 'Magen-Darm- & Leber-Galle-Kanal',
    titleEnglish: 'Gastrointestinal & Hepato-Biliary Systems',
    subtitle: 'Digestive Organs, Calques of Classical Anatomy, and Abdominal Crises',
    estimatedMinutes: 20,
    coverImage: '/src/assets/images/anatomical_chart_vintage_1794107805480.jpg',
    overview: 'German digestive terminology demonstrates exquisite linguistic precision. Rather than borrowing obscure Greek derivatives without meaning, German anatomists translated the exact descriptive measurements of antiquity into living vernacular compounds, from the "Twelve-Finger Gut" to the "Belly-Saliva Gland".',
    sections: [
      {
        id: 'c4_intestines',
        heading: 'The Intestinal Segments and Ancient Calques',
        content: [
          'Consider the segments of the human intestine in Lang\'s dictionary:',
          '• Der Zwölffingerdarm (literally: twelve-finger intestine): Duodenum. When ancient anatomist Herophilus of Alexandria measured the human duodenum, he found it measured approximately 12 finger-breadths. Latin rendered this as "intestinum duodenum digitorum". German retained this exact literal calque.',
          '• Der Leerdarm (literally: empty intestine): Jejunum (from Latin jejunus = empty/fasting), so named because at autopsy it is almost invariably found empty of chyme.',
          '• Der Krummdarm (literally: crooked/curved intestine): Ileum (from Greek eilein = to twist or roll tightly).',
          '• Der Blinddarm (literally: blind gut): Cecum / Appendix. An intestine terminating in a cul-de-sac (blind alley).'
        ]
      },
      {
        id: 'c4_liver_pancreas',
        heading: 'Hepato-Biliary Glands and the Pancreas',
        content: [
          '• Die Bauchspeicheldrüse (literally: belly-saliva gland): The pancreas. German physiologists like Claude Bernard and Rudolf Heidenhain observed that pancreatic juice, like salivary Speichel, possessed rapid amylolytic power to convert starch into sugar.',
          '• Die Gallenblase (literally: bile bladder): Gallbladder.',
          '• Der Gallenstein: Gallstone / Biliary calculus (Cholelithiasis).',
          '• Die Gelbsucht (literally: yellow disease): Jaundice / Icterus.',
          '• Das Bauchfell (literally: belly membrane): Peritoneum. Bauchfellentzündung is peritonitis, often the lethal consequence of perforated gastric ulcers (Magengeschwür).'
        ],
        historicalInsight: 'The legendary Viennese surgeon Theodor Billroth performed the world\'s first successful gastrectomy (Billroth I resection) in 1881 for gastric carcinoma, cementing the German-speaking world\'s supremacy in abdominal surgery.'
      }
    ],
    quiz: {
      id: 'quiz_ch4',
      title: 'Chapter 4 Mastery Quiz: Gastrointestinal System',
      description: 'Test your understanding of intestinal calques, glandular terminology, and surgical vocabulary.',
      questions: [
        {
          id: 'q4_1',
          type: 'multiple-choice',
          prompt: 'What is the literal translation and anatomical equivalent of "der Zwölffingerdarm"?',
          options: [
            'Twelve-foot intestine (Ileum)',
            'Twelve-finger intestine (Duodenum)',
            'Twelve-fold bowel (Colon)',
            'Blind intestine (Appendix)'
          ],
          correctAnswer: 'Twelve-finger intestine (Duodenum)',
          explanation: 'Zwölf (twelve) + Finger (finger-breadths) + Darm (intestine) is the direct calque of Latin duodenum digitorum.',
          langCitation: 'Lang (1905), p. 584'
        },
        {
          id: 'q4_2',
          type: 'multiple-choice',
          prompt: 'Why is the pancreas named "die Bauchspeicheldrüse" in German medical terminology?',
          options: [
            'Because it stores bile inside the belly.',
            'Because its clear digestive secretions resembled salivary saliva (Speichel).',
            'Because it connects directly to the tongue.',
            'Because it absorbs toxic stomach fluids.'
          ],
          correctAnswer: 'Because its clear digestive secretions resembled salivary saliva (Speichel).',
          explanation: 'Bauch (belly) + Speichel (saliva) + Drüse (gland) describes the organ producing "abdominal saliva" to break down nutrients.',
          langCitation: 'Lang (1905), p. 45'
        },
        {
          id: 'q4_3',
          type: 'morpheme-assembly',
          prompt: 'Assemble the German medical compound for "Peritonitis" (inflammation of the peritoneum):',
          tokens: ['Bauch', 'fell', 'entzündung', 'krampf', 'geschwür'],
          correctAnswer: ['Bauch', 'fell', 'entzündung'],
          explanation: 'Bauch (belly) + fell (membrane) + entzündung (inflammation) = Bauchfellentzündung (Peritonitis).',
          langCitation: 'Lang (1905), p. 44'
        },
        {
          id: 'q4_4',
          type: 'translation-match',
          prompt: 'Match each German digestive organ with its English anatomical name:',
          pairs: [
            { german: 'der Blinddarm', english: 'Cecum / Appendix' },
            { german: 'der Leerdarm', english: 'Jejunum (empty gut)' },
            { german: 'die Gallenblase', english: 'Gallbladder' },
            { german: 'die Gelbsucht', english: 'Jaundice / Icterus' }
          ],
          correctAnswer: 'matched',
          explanation: 'Blinddarm is cecum, Leerdarm is jejunum, Gallenblase is gallbladder, and Gelbsucht is jaundice.',
          langCitation: 'Lang (1905), Digestive Section'
        },
        {
          id: 'q4_5',
          type: 'clinical-scenario',
          prompt: 'A patient develops severe right upper quadrant colic after eating fatty meat. The report notes "Kolik infolge eines eingeklemmten Gallensteins". What condition has been identified?',
          options: [
            'Appendicitis with rupture',
            'Biliary colic caused by an impacted gallstone',
            'Gastric ulcer perforation',
            'Pancreatic pseudocyst'
          ],
          correctAnswer: 'Biliary colic caused by an impacted gallstone',
          explanation: '"Gallenstein" is a gallstone (cholelithiasis); "eingeklemmt" means impacted or strangulated.',
          langCitation: 'Lang (1905), p. 154'
        }
      ]
    }
  },

  {
    id: 5,
    number: '05',
    titleGerman: 'Nervensystem & Sinneswerkzeuge',
    titleEnglish: 'Nervous System & Sensory Organs',
    subtitle: 'From the Spinal Marrow to Helmholtz\'s Ophthalmoscope',
    estimatedMinutes: 20,
    coverImage: '/src/assets/images/hero_medical_lexicon_1794107803888.jpg',
    overview: 'German neuroanatomy and sensory physiology shaped modern neurological examination. From the invention of the ophthalmoscope (Augenspiegel) by Hermann von Helmholtz in 1851 to the description of reflex pathways by Erb and Westphal in Berlin, German medical terms in neurology are foundational.',
    sections: [
      {
        id: 'c5_neuroanatomy',
        heading: 'Architecture of the Central Nervous System',
        content: [
          'In Lang\'s lexicon, the central nervous system revolves around "Hirn" and "Mark":',
          '• Das Gehirn: The brain as a whole.',
          '• Das Großhirn: Cerebrum (higher intellectual and motor cortex).',
          '• Das Kleinhirn: Cerebellum (coordination and motor balance).',
          '• Das Rückenmark (literally: back marrow): The spinal cord (Medulla spinalis).',
          '• Das verlängerte Mark: Medulla oblongata (the extended marrow connecting spinal cord to brainstem).',
          '• Die Hirnhaut: The meninges. Hirnhautentzündung translates to meningitis.'
        ]
      },
      {
        id: 'c5_eye_ear',
        heading: 'Sensory Organs: The Eye and Ear',
        content: [
          'The sensory layers of the eye and ear are poetic calques:',
          '• Die Netzhaut (literally: net-like skin): Retina (from Latin rete = fisherman\'s net).',
          '• Die Hornhaut (literally: horn-like skin): Cornea.',
          '• Die Regenbogenhaut (literally: rainbow skin): Iris (Iris was the Greek goddess of the rainbow).',
          '• Die Aderhaut (literally: vessel skin): Choroid (richly vascular coat).',
          '• Das Trommelfell (literally: drum membrane): Tympanic membrane / Eardrum.',
          '• Die Gehörknöchelchen: The auditory ossicles, named after physical tools: der Hammer (Malleus), der Amboss (Incus), and der Steigbügel (Stapes / stirrup).'
        ]
      },
      {
        id: 'c5_neuropathology',
        heading: 'Neurological Pathologies: Star & Schlag',
        content: [
          'In historical German ophthalmology, ocular visual obstructions were called "Star" (from starr = fixed, motionless stare):',
          '• Der Graue Star (literally: gray stare): Cataract (clouding of the lens).',
          '• Der Grüne Star (literally: green stare): Glaucoma (associated with sea-green pupil discoloration under elevated pressure).',
          '• Der Schwarze Star (literally: black stare): Amaurosis (complete blindness with dark, dilated pupil).',
          'Meanwhile, cerebrovascular accidents were called der Schlaganfall (sudden apoplectic stroke), and traumatic injuries were called die Gehirnerschütterung (commotio cerebri / concussion).'
        ],
        historicalInsight: 'Hermann von Helmholtz demonstrated that the pupil only appears black because light entering is reflected directly back toward the source. By placing a semi-reflective glass plate between the observer and the light source, he invented the Augenspiegel in Königsberg in 1851.'
      }
    ],
    quiz: {
      id: 'quiz_ch5',
      title: 'Chapter 5 Mastery Quiz: Neurology & Sensory Terminology',
      description: 'Evaluate your mastery of neuroanatomy, retinal structures, and ophthalmological terms.',
      questions: [
        {
          id: 'q5_1',
          type: 'multiple-choice',
          prompt: 'What does the German anatomical term "das Rückenmark" translate to in clinical English?',
          options: [
            'Bone marrow',
            'Spinal cord',
            'Brainstem',
            'Sciatic nerve'
          ],
          correctAnswer: 'Spinal cord',
          explanation: 'Rücken (back) + Mark (marrow/medulla) = Medulla spinalis (Spinal cord). In contrast, bone marrow is "Knochenmark".',
          langCitation: 'Lang (1905), p. 414'
        },
        {
          id: 'q5_2',
          type: 'multiple-choice',
          prompt: 'In German ophthalmology, what pathology is designated by "der Graue Star"?',
          options: [
            'Glaucoma',
            'Cataract',
            'Retinal detachment',
            'Corneal ulcer'
          ],
          correctAnswer: 'Cataract',
          explanation: '"Grauer Star" denotes a cataract (clouding of the crystalline lens). "Grüner Star" is glaucoma.',
          langCitation: 'Lang (1905), p. 488'
        },
        {
          id: 'q5_3',
          type: 'morpheme-assembly',
          prompt: 'Assemble the German compound word for "Cerebral Concussion" (Commotio cerebri):',
          tokens: ['Gehirn', 'erschütterung', 'spiegel', 'anfall', 'mark'],
          correctAnswer: ['Gehirn', 'erschütterung'],
          explanation: 'Gehirn (brain) + erschütterung (violent shaking/concussion) = Gehirnerschütterung.',
          langCitation: 'Lang (1905), p. 162'
        },
        {
          id: 'q5_4',
          type: 'translation-match',
          prompt: 'Match the German sensory structure with its anatomical English name:',
          pairs: [
            { german: 'die Netzhaut', english: 'Retina (net-like tunic)' },
            { german: 'die Hornhaut', english: 'Cornea (horn-like tunic)' },
            { german: 'das Trommelfell', english: 'Tympanic membrane (eardrum)' },
            { german: 'der Steigbügel', english: 'Stapes (stirrup ossicle)' }
          ],
          correctAnswer: 'matched',
          explanation: 'Netzhaut is retina, Hornhaut is cornea, Trommelfell is tympanic membrane, and Steigbügel is stapes.',
          langCitation: 'Lang (1905), Sensory Section'
        },
        {
          id: 'q5_5',
          type: 'clinical-scenario',
          prompt: 'A patient is brought in unconscious with sudden right-sided hemiplegia and expressive aphasia. The admission book records "Akuter Schlaganfall mit Hirnblutung". What has occurred?',
          options: [
            'Severe migraine with visual aura',
            'Acute stroke with cerebral hemorrhage',
            'Multiple sclerosis flare with spinal shock',
            'Traumatic skull fracture with epidural hematoma'
          ],
          correctAnswer: 'Acute stroke with cerebral hemorrhage',
          explanation: '"Schlaganfall" is stroke/apoplexy; "Hirnblutung" is cerebral bleeding/hemorrhage.',
          langCitation: 'Lang (1905), p. 433'
        }
      ]
    }
  },

  {
    id: 6,
    number: '06',
    titleGerman: 'Skelett-, Muskel- & Wundlehre',
    titleEnglish: 'Musculoskeletal System & Traumatology',
    subtitle: 'Bones, Fractures, Wounds, and Antiseptic Surgery',
    estimatedMinutes: 18,
    coverImage: '/src/assets/images/historical_clinical_lab_1794107805406.jpg',
    overview: 'Before antibiotics, wound infections like gangrene (Brand) and tetanus (Wundstarrkrampf) were rampant. German military and academic surgeons like Bernhard von Langenbeck and Ernst von Bergmann revolutionized aseptic surgery, steam autoclaving, and fracture management.',
    sections: [
      {
        id: 'c6_bones_joints',
        heading: 'Skeletal Anatomy and Articulations',
        content: [
          '• Der Knochen: Bone. The outer fibrous layer is die Knochenhaut (periosteum), and the hematopoietic interior is das Knochenmark (bone marrow).',
          '• Das Gelenk: Joint / Articulation. Key structures include der Gelenkknorpel (articular cartilage), die Gelenkkapsel (joint capsule), and die Gelenkschmiere (synovial fluid / joint lubricant).',
          '• Das Band: Ligament (pl. Bänder). Bänderriss is ligamentous tear.',
          '• Die Sehne: Tendon / Sinew. Enclosed in die Sehnenscheide (tendon sheath).'
        ]
      },
      {
        id: 'c6_traumatology',
        heading: 'Trauma: Breaks, Sprains, and Dislocations',
        content: [
          '• Der Knochenbruch: Bone fracture. Divided into geschlossener Bruch (closed fracture) and offener / komplizierter Bruch (compound fracture).',
          '• Die Verrenkung / Ausrenkung: Dislocation / Luxation.',
          '• Die Verstauchung: Sprain / Distorsion.',
          '• Die Wunde: Wound. Classified into Schnittwunde (incised wound), Risswunde (laceration), Stichwunde (stab wound), and Schusswunde (gunshot wound).'
        ]
      },
      {
        id: 'c6_wound_infections',
        heading: 'Lethal Wound Complications in Lang\'s Era',
        content: [
          '• Der Wundstarrkrampf (literally: wound-stiff-spasm): Tetanus. Caused by Clostridium tetani, leading to risus sardonicus and opisthotonus. Emil von Behring developed the tetanus antiserum at Koch\'s Institute in Berlin (1890).',
          '• Der Brand: Gangrene. Der feuchte Brand is wet gangrene; der trockene Brand is dry mummification.',
          '• Die Eiterung: Suppuration / Pus formation. Der Eiter is pus.',
          '• Das Wundfieber: Traumatic or surgical wound fever (sepsis).'
        ],
        historicalInsight: 'Ernst von Bergmann introduced steam sterilization of surgical dressings and instruments at Berlin\'s Charité in 1886, marking the transition from Lister\'s chemical carbolic antisepsis to pure thermal asepsis.'
      }
    ],
    quiz: {
      id: 'quiz_ch6',
      title: 'Chapter 6 Mastery Quiz: Bones, Muscles & Traumatology',
      description: 'Test your vocabulary on fractures, soft tissues, and surgical wound infections.',
      questions: [
        {
          id: 'q6_1',
          type: 'multiple-choice',
          prompt: 'What is the literal translation of the German term for Tetanus, "der Wundstarrkrampf"?',
          options: [
            'Wound-blood-fever',
            'Wound-stiff-spasm',
            'Nerve-muscle-cramp',
            'Fatal-lock-jaw'
          ],
          correctAnswer: 'Wound-stiff-spasm',
          explanation: 'Wund(e) (wound) + starr (stiff/rigid) + Krampf (spasm/cramp) describes the clinical spasms originating from a wound infection.',
          langCitation: 'Lang (1905), p. 574'
        },
        {
          id: 'q6_2',
          type: 'multiple-choice',
          prompt: 'Where in the human body does blood cell formation (hematopoiesis) occur, according to Ernst Neumann\'s 1868 discovery in Königsberg?',
          options: [
            'Im Knochenmark (in the bone marrow)',
            'In der Knochenhaut (in the periosteum)',
            'In der Gelenkschmiere (in the synovial fluid)',
            'Im Herzbeutel (in the pericardium)'
          ],
          correctAnswer: 'Im Knochenmark (in the bone marrow)',
          explanation: 'Das Knochenmark (bone marrow) is the hematopoietic organ identified by Neumann in 1868.',
          langCitation: 'Lang (1905), p. 251'
        },
        {
          id: 'q6_3',
          type: 'morpheme-assembly',
          prompt: 'Assemble the German compound word for "Tenorrhaphy" (surgical suturing of a severed tendon):',
          tokens: ['Sehnen', 'naht', 'bruch', 'spiegel', 'krampf'],
          correctAnswer: ['Sehnen', 'naht'],
          explanation: 'Sehne (tendon) + Naht (suture) = Sehnennaht (Tenorrhaphy).',
          langCitation: 'Lang (1905), p. 463'
        },
        {
          id: 'q6_4',
          type: 'translation-match',
          prompt: 'Match the German musculoskeletal pathology with its modern clinical term:',
          pairs: [
            { german: 'der Knochenbruch', english: 'Bone fracture' },
            { german: 'die Verrenkung', english: 'Joint dislocation / Luxation' },
            { german: 'der Brand', english: 'Gangrene / Tissue necrosis' },
            { german: 'die Eiterung', english: 'Suppuration / Purulence' }
          ],
          correctAnswer: 'matched',
          explanation: 'Knochenbruch is fracture, Verrenkung is dislocation, Brand is gangrene, and Eiterung is suppuration.',
          langCitation: 'Lang (1905), Traumatology Section'
        },
        {
          id: 'q6_5',
          type: 'clinical-scenario',
          prompt: 'Following a farm accident involving a rusty nail, a soldier experiences involuntary jaw clenching and back arching. The military surgeon diagnoses "Akuter Wundstarrkrampf". What disease is this?',
          options: [
            'Osteomyelitis',
            'Tetanus',
            'Rabies',
            'Gas gangrene'
          ],
          correctAnswer: 'Tetanus',
          explanation: '"Wundstarrkrampf" is the German name for Tetanus (lockjaw).',
          langCitation: 'Lang (1905), p. 574'
        }
      ]
    }
  },

  {
    id: 7,
    number: '07',
    titleGerman: 'Diagnostische Instrumente & Historische Lexikographie',
    titleEnglish: 'Diagnostic Instruments & Historical Lexicography',
    subtitle: 'From Helmholtz to Cornell: How German Became the Lingua Franca of Science',
    estimatedMinutes: 22,
    coverImage: '/src/assets/images/hero_medical_lexicon_1794107803888.jpg',
    overview: 'Why did British physician Bertram Abrahams and scholar Hugo Lang compile this massive dictionary? Between 1870 and 1914, no serious physician or medical scientist in Britain or the United States could complete their education without traveling to Berlin, Vienna, Leipzig, or Heidelberg. Lang\'s dictionary was the vital bridge enabling Anglo-American medicine to assimilate German laboratory science.',
    sections: [
      {
        id: 'c7_instruments',
        heading: 'Surgical and Diagnostic Toolsets in Lang\'s Lexicon',
        content: [
          'Instruments in Lang are characterized by functional simplicity:',
          '• Die Zange: Forceps. Specialized into Geburtszange (obstetrical forceps), Knochenzange (bone-cutting rongeur), and Kropfzange (goiter forceps for Kocher\'s thyroid surgeries).',
          '• Die Sonde: Probe / Sound / Director. Used to sound cavities and sinuses (z.B. Hohlsonde = grooved director).',
          '• Das Besteck: Set of surgical instruments (e.g. Amputationsbesteck).',
          '• Die Klemme: Clamp / Hemostat (Arterienklemme = arterial hemostatic forceps, Pean/Kocher type).',
          '• Die Säge: Saw (Knochensäge = bone saw).'
        ]
      },
      {
        id: 'c7_allied_chemicals',
        heading: 'Allied Sciences: Reagents, Stains, and Anesthetics',
        content: [
          'Lang\'s title explicitly includes "The Allied Sciences" (Physics, Chemistry, Histology, Botany, and Pharmacology):',
          '• Die Karbolsäure: Phenol / Carbolic acid, used for antiseptic wound dressings and carbolic spray.',
          '• Das Quecksilbersublimat: Corrosive sublimate (mercuric chloride, HgCl2), standard disinfectant test compound in Koch\'s bacteriological trials.',
          '• Das Gentianaviolett & Methylenblau: Synthetic aniline dyes produced by Germany\'s booming dye industry (BASF, Hoechst, Bayer), which revolutionized bacterial staining (Gram stain, Koch\'s tubercle stain) and led directly to Paul Ehrlich\'s "magic bullets" (Salvarsan).',
          '• Der Äther & Das Chloroform: Inhalation anesthetics.'
        ]
      },
      {
        id: 'c7_cornell_archive',
        heading: 'The Cornell University Archive (IA cu31924000217665)',
        content: [
          'The digital edition preserved on the Internet Archive and Wikimedia Commons originates from Cornell University Library\'s historic collection.',
          'Hugo Lang was a German-English scholar who painstakingly indexed every branch of medicine. Following his death, Bertram Abrahams (Fellow of the Royal College of Physicians, Pathologist to Westminster Hospital, London) revised and completed the work, published by J. & A. Churchill in London and P. Blakiston\'s Son in Philadelphia.',
          'This dictionary remains an indispensable key for historians, medical translators, and clinicians reading classic medical literature from the golden age of European medicine.'
        ],
        historicalInsight: 'Between 1870 and 1914, over 15,000 American medical graduates traveled to Germany and Austria for postgraduate study. The founders of Johns Hopkins Hospital (William Welch, William Osler, William Halsted) all trained extensively in German laboratories.'
      }
    ],
    quiz: {
      id: 'quiz_ch7',
      title: 'Chapter 7 Mastery Quiz: Instruments & Allied Sciences',
      description: 'Conclude your tutorial with questions on historical instruments, chemical reagents, and lexicographical history.',
      questions: [
        {
          id: 'q7_1',
          type: 'multiple-choice',
          prompt: 'Which German physicist and physician invented the "Augenspiegel" (ophthalmoscope) in 1851?',
          options: [
            'Rudolf Virchow',
            'Hermann von Helmholtz',
            'Robert Koch',
            'Wilhelm Röntgen'
          ],
          correctAnswer: 'Hermann von Helmholtz',
          explanation: 'Hermann von Helmholtz invented the Augenspiegel in Königsberg in 1851, enabling direct examination of the living retina.',
          langCitation: 'Lang (1905), p. 33'
        },
        {
          id: 'q7_2',
          type: 'multiple-choice',
          prompt: 'What was the primary chemical antiseptic referenced as "die Karbolsäure" in Lang\'s dictionary?',
          options: [
            'Hydrochloric acid',
            'Carbolic acid (Phenol)',
            'Sulfuric acid',
            'Nitric acid'
          ],
          correctAnswer: 'Carbolic acid (Phenol)',
          explanation: 'Karbolsäure is phenol (carbolic acid), the pioneer antiseptic popularized by Lister and German hospital operating theaters.',
          langCitation: 'Lang (1905), p. 238'
        },
        {
          id: 'q7_3',
          type: 'morpheme-assembly',
          prompt: 'Assemble the German compound word for "Obstetric Forceps" (literally: birth-tongs):',
          tokens: ['Geburts', 'zange', 'besteck', 'spiegel', 'sonde'],
          correctAnswer: ['Geburts', 'zange'],
          explanation: 'Geburt(s) (birth/parturition) + Zange (forceps/tongs) = Geburtszange.',
          langCitation: 'Lang (1905), p. 159'
        },
        {
          id: 'q7_4',
          type: 'translation-match',
          prompt: 'Match the surgical instrument from Lang\'s dictionary with its English equivalent:',
          pairs: [
            { german: 'die Sonde', english: 'Probe / Sound' },
            { german: 'die Klemme', english: 'Hemostatic clamp' },
            { german: 'das Besteck', english: 'Surgical instrument set' },
            { german: 'die Knochensäge', english: 'Bone saw' }
          ],
          correctAnswer: 'matched',
          explanation: 'Sonde is probe/sound, Klemme is clamp, Besteck is instrument set, and Knochensäge is bone saw.',
          langCitation: 'Lang (1905), Instruments Section'
        },
        {
          id: 'q7_5',
          type: 'clinical-scenario',
          prompt: 'In a historical bacteriology laboratory at Berlin University, an investigator stains sputum using "Gentianaviolett" and treats surgical instruments with "Quecksilbersublimat". What reagents are being employed?',
          options: [
            'Silver nitrate and potassium permanganate',
            'Gentian violet (Gram stain dye) and corrosive sublimate (mercuric chloride)',
            'Formaldehyde and hydrogen peroxide',
            'Carbolic acid and iodine tincture'
          ],
          correctAnswer: 'Gentian violet (Gram stain dye) and corrosive sublimate (mercuric chloride)',
          explanation: 'Gentianaviolett was the classic aniline stain, and Quecksilbersublimat (corrosive sublimate) was the gold-standard chemical disinfectant studied by Koch.',
          langCitation: 'Lang (1905), p. 389'
        }
      ]
    }
  }
];
