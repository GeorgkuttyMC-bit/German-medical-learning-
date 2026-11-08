import { MedicalTerm } from '../types';

export const DICTIONARY_TERMS: MedicalTerm[] = [
  // --- CHAPTER 1 / MORPHOLOGY & ROOTS ---
  {
    id: 'wortbildung_entzundung',
    german: 'Entzündung',
    gender: 'feminine',
    genderArticle: 'die',
    phonetic: 'ɛntˈtsʏndʊŋ',
    literalTranslation: 'in-kindling / setting on fire',
    englishDefinition: 'Inflammation (-itis in Greek/Latin)',
    category: 'morphology',
    chapterId: 1,
    etymology: {
      morphemes: [
        { part: 'ent-', meaning: 'prefix denoting inception or bursting out', type: 'prefix' },
        { part: 'zünd', meaning: 'kindle / ignite / spark', type: 'root' },
        { part: '-ung', meaning: 'nominalizing suffix (-tion / -ing)', type: 'suffix' }
      ],
      notes: 'Hugo Lang notes this universal Germanic equivalent for the Greco-Latin suffix -itis across hundreds of pathological terms.'
    },
    clinicalExample: 'Die Entzündung des Gewebes zeigt Rötung, Hitze und Schwellung.',
    langPageReference: 'Lang (1905), p. 118'
  },
  {
    id: 'wortbildung_erweichung',
    german: 'Erweichung',
    gender: 'feminine',
    genderArticle: 'die',
    phonetic: 'ɛɐ̯ˈvaɪçʊŋ',
    literalTranslation: 'softening-out',
    englishDefinition: 'Softening / Malacia (e.g. encephalomalacia)',
    category: 'morphology',
    chapterId: 1,
    etymology: {
      morphemes: [
        { part: 'er-', meaning: 'prefix indicating transition of state', type: 'prefix' },
        { part: 'weich', meaning: 'soft', type: 'root' },
        { part: '-ung', meaning: 'suffix forming feminine action nouns', type: 'suffix' }
      ],
      notes: 'Corresponds to the clinical Greek suffix -malacia, as in Gehirnerweichung (softening of the brain).'
    },
    clinicalExample: 'Gehirnerweichung infolge eines arteriellen Gefäßverschlusses.',
    langPageReference: 'Lang (1905), p. 124'
  },
  {
    id: 'wortbildung_schwund',
    german: 'Schwund',
    gender: 'masculine',
    genderArticle: 'der',
    phonetic: 'ʃvʊnt',
    literalTranslation: 'dwindling / wasting away',
    englishDefinition: 'Atrophy / Wasting / Phthisis',
    category: 'morphology',
    chapterId: 1,
    etymology: {
      morphemes: [
        { part: 'schwind-', meaning: 'to dwindle, disappear, or vanish', type: 'root' }
      ],
      notes: 'Forms compounds like Muskelschwund (amyotrophy) and Knochenschwund (osteoporosis).'
    },
    clinicalExample: 'Progressiver Muskelschwund der unteren Extremitäten.',
    langPageReference: 'Lang (1905), p. 450'
  },
  {
    id: 'wortbildung_schnitt',
    german: 'Schnitt',
    gender: 'masculine',
    genderArticle: 'der',
    phonetic: 'ʃnɪt',
    literalTranslation: 'cut / incision',
    englishDefinition: 'Incision / Section / -tomy',
    category: 'morphology',
    chapterId: 1,
    etymology: {
      morphemes: [
        { part: 'schneid-', meaning: 'to cut', type: 'root' }
      ],
      notes: 'Standard surgical suffix equating to Greek -tomy (Kaiserschnitt = Cesarean section; Luftröhrenschnitt = Tracheotomy).'
    },
    clinicalExample: 'Ein chirurgischer Schnitt zur Entlastung des Hämatoms.',
    langPageReference: 'Lang (1905), p. 437'
  },
  {
    id: 'wortbildung_naht',
    german: 'Naht',
    gender: 'feminine',
    genderArticle: 'die',
    phonetic: 'naːt',
    literalTranslation: 'seam / stitch',
    englishDefinition: 'Suture / -rrhaphy / Anatomical suture',
    category: 'morphology',
    chapterId: 1,
    etymology: {
      morphemes: [
        { part: 'näh-', meaning: 'to sew', type: 'root' }
      ],
      notes: 'Used both for anatomical cranial sutures (Schädelnaht) and surgical stitching (Sehnennaht = tenorrhaphy).'
    },
    clinicalExample: 'Die Wundränder wurden mit einer fortlaufenden Naht adaptiert.',
    langPageReference: 'Lang (1905), p. 320'
  },

  // --- CHAPTER 2 / CARDIOVASCULAR & HEMATOLOGY ---
  {
    id: 'herz_herz',
    german: 'Herz',
    gender: 'neuter',
    genderArticle: 'das',
    phonetic: 'hɛɐ̯ts',
    literalTranslation: 'heart',
    englishDefinition: 'Heart (Cor / Cardia)',
    category: 'cardiovascular',
    chapterId: 2,
    etymology: {
      morphemes: [
        { part: 'Herz', meaning: 'heart (Proto-Germanic *hertô)', type: 'organ' }
      ],
      notes: 'Forms hundreds of compound clinical terms in Lang\'s dictionary.'
    },
    clinicalExample: 'Auskultation des Herzens ergab ein systolisches Geräusch.',
    langPageReference: 'Lang (1905), p. 201'
  },
  {
    id: 'herz_herzbeutel',
    german: 'Herzbeutel',
    gender: 'masculine',
    genderArticle: 'der',
    phonetic: 'ˈhɛɐ̯tsˌbɔɪ̯tl̩',
    literalTranslation: 'heart purse / heart pouch',
    englishDefinition: 'Pericardium',
    category: 'cardiovascular',
    chapterId: 2,
    etymology: {
      morphemes: [
        { part: 'Herz', meaning: 'heart', type: 'organ' },
        { part: 'Beutel', meaning: 'purse, bag, or pouch', type: 'root' }
      ],
      notes: 'A descriptive Germanic name for the fibroserous sac surrounding the heart.'
    },
    clinicalExample: 'Erguss im Herzbeutel führte zu einer Herzbeuteltamponade.',
    langPageReference: 'Lang (1905), p. 202'
  },
  {
    id: 'herz_herzbeutelentzundung',
    german: 'Herzbeutelentzündung',
    gender: 'feminine',
    genderArticle: 'die',
    phonetic: 'ˈhɛɐ̯tsˌbɔɪ̯tl̩ʔɛntˌtsʏndʊŋ',
    literalTranslation: 'heart-purse-in-kindling',
    englishDefinition: 'Pericarditis',
    category: 'cardiovascular',
    chapterId: 2,
    etymology: {
      morphemes: [
        { part: 'Herz', meaning: 'heart', type: 'organ' },
        { part: 'Beutel', meaning: 'bag / sac', type: 'root' },
        { part: 'Entzündung', meaning: 'inflammation', type: 'suffix' }
      ],
      notes: 'Compound composed of organ + anatomical modifier + pathological suffix.'
    },
    clinicalExample: 'Bei Herzbeutelentzündung ist häufig ein perikardiales Reibegeräusch hörbar.',
    langPageReference: 'Lang (1905), p. 202'
  },
  {
    id: 'herz_kammer',
    german: 'Herzkammer',
    gender: 'feminine',
    genderArticle: 'die',
    phonetic: 'ˈhɛɐ̯tsˌkamɐ',
    literalTranslation: 'heart chamber',
    englishDefinition: 'Cardiac Ventricle (Ventriculus cordis)',
    category: 'cardiovascular',
    chapterId: 2,
    etymology: {
      morphemes: [
        { part: 'Herz', meaning: 'heart', type: 'organ' },
        { part: 'Kammer', meaning: 'chamber / room', type: 'root' }
      ],
      notes: 'Distinguished into linke Herzkammer (left ventricle) and rechte Herzkammer (right ventricle).'
    },
    clinicalExample: 'Hypertrophie der linken Herzkammer bei chronischer Hypertonie.',
    langPageReference: 'Lang (1905), p. 203'
  },
  {
    id: 'herz_vorhof',
    german: 'Vorhof',
    gender: 'masculine',
    genderArticle: 'der',
    phonetic: 'ˈfoːɐ̯ˌhoːf',
    literalTranslation: 'fore-court / courtyard in front',
    englishDefinition: 'Cardiac Atrium / Vestibule (Atrium cordis)',
    category: 'cardiovascular',
    chapterId: 2,
    etymology: {
      morphemes: [
        { part: 'vor-', meaning: 'in front / fore', type: 'prefix' },
        { part: 'Hof', meaning: 'courtyard / entry court', type: 'root' }
      ],
      notes: 'Also applied to sensory anatomy: Vorhof des Labyrinths (Vestibulum auris).'
    },
    clinicalExample: 'Vorhofflimmern ist die häufigste anhaltende Herzrhythmusstörung.',
    langPageReference: 'Lang (1905), p. 556'
  },
  {
    id: 'herz_schlagader',
    german: 'Schlagader',
    gender: 'feminine',
    genderArticle: 'die',
    phonetic: 'ˈʃlaːkˌʔaːdɐ',
    literalTranslation: 'beating-vein / pulsatile vessel',
    englishDefinition: 'Artery (Arteria)',
    category: 'cardiovascular',
    chapterId: 2,
    etymology: {
      morphemes: [
        { part: 'Schlag', meaning: 'beat / stroke / pulse', type: 'root' },
        { part: 'Ader', meaning: 'vein / blood vessel', type: 'organ' }
      ],
      notes: 'Reflects the arterial pulse felt through the vessel wall.'
    },
    clinicalExample: 'Die Hauptschlagader (Aorta) entspringt der linken Kammer.',
    langPageReference: 'Lang (1905), p. 433'
  },
  {
    id: 'herz_blutader',
    german: 'Blutader',
    gender: 'feminine',
    genderArticle: 'die',
    phonetic: 'ˈbluːtˌʔaːdɐ',
    literalTranslation: 'blood vessel / vein',
    englishDefinition: 'Vein (Vena)',
    category: 'cardiovascular',
    chapterId: 2,
    etymology: {
      morphemes: [
        { part: 'Blut', meaning: 'blood', type: 'organ' },
        { part: 'Ader', meaning: 'vessel', type: 'root' }
      ],
      notes: 'Contrasted in historical German medicine with Schlagader (artery) and Saugader (lymphatic vessel).'
    },
    clinicalExample: 'Die untere Hohlblutader leitet das sauerstoffarme Blut zum rechten Vorhof.',
    langPageReference: 'Lang (1905), p. 66'
  },
  {
    id: 'herz_blutkorperchen',
    german: 'Blutkörperchen',
    gender: 'neuter',
    genderArticle: 'das',
    phonetic: 'ˈbluːtˌkœʁpɐçən',
    literalTranslation: 'little blood body',
    englishDefinition: 'Blood corpuscle / Erythrocyte / Leukocyte',
    category: 'cardiovascular',
    chapterId: 2,
    etymology: {
      morphemes: [
        { part: 'Blut', meaning: 'blood', type: 'organ' },
        { part: 'Körper', meaning: 'body', type: 'root' },
        { part: '-chen', meaning: 'diminutive suffix (little)', type: 'suffix' }
      ],
      notes: 'Rote Blutkörperchen (red corpuscles) and weiße Blutkörperchen (white corpuscles).'
    },
    clinicalExample: 'Das Mikroskop enthüllte die bikonkave Scheibenform der roten Blutkörperchen.',
    langPageReference: 'Lang (1905), p. 68'
  },
  {
    id: 'herz_blutarmut',
    german: 'Blutarmut',
    gender: 'feminine',
    genderArticle: 'die',
    phonetic: 'ˈbluːtˌʔaʁmuːt',
    literalTranslation: 'blood poverty',
    englishDefinition: 'Anemia / Oligemia',
    category: 'cardiovascular',
    chapterId: 2,
    etymology: {
      morphemes: [
        { part: 'Blut', meaning: 'blood', type: 'organ' },
        { part: 'Armut', meaning: 'poverty / deficiency', type: 'root' }
      ],
      notes: 'Descriptive clinical term for deficiency in hemoglobin or circulating red cells.'
    },
    clinicalExample: 'Chronische Blutarmut führt zu Blässe, Müdigkeit und Belastungsdyspnoe.',
    langPageReference: 'Lang (1905), p. 66'
  },
  {
    id: 'herz_blutgerinnsel',
    german: 'Blutgerinnsel',
    gender: 'neuter',
    genderArticle: 'das',
    phonetic: 'ˈbluːtɡəˌʁɪnzl̩',
    literalTranslation: 'coagulated blood curd',
    englishDefinition: 'Blood clot / Thrombus / Coagulum',
    category: 'cardiovascular',
    chapterId: 2,
    etymology: {
      morphemes: [
        { part: 'Blut', meaning: 'blood', type: 'organ' },
        { part: 'gerinnen', meaning: 'to curdle or coagulate', type: 'root' },
        { part: '-sel', meaning: 'noun suffix for product of an action', type: 'suffix' }
      ],
      notes: 'Pioneered in Rudolf Virchow\'s seminal work on thrombosis and embolism (1856).'
    },
    clinicalExample: 'Ein wanderndes Blutgerinnsel blockierte die Pulmonalarterie.',
    langPageReference: 'Lang (1905), p. 67'
  },

  // --- CHAPTER 3 / RESPIRATORY & ENT ---
  {
    id: 'lunge_lunge',
    german: 'Lunge',
    gender: 'feminine',
    genderArticle: 'die',
    phonetic: 'ˈlʊŋə',
    literalTranslation: 'lung (light organ)',
    englishDefinition: 'Lung (Pulmo)',
    category: 'respiratory',
    chapterId: 3,
    etymology: {
      morphemes: [
        { part: 'Lunge', meaning: 'lung (cognate with light/levis, floating on water)', type: 'organ' }
      ],
      notes: 'Historical German anatomists noted that excised lungs float on water in hydrostatic lung tests.'
    },
    clinicalExample: 'Perkussion der Lunge zeigte einen sonoren Klopfschall.',
    langPageReference: 'Lang (1905), p. 287'
  },
  {
    id: 'lunge_luftrohre',
    german: 'Luftröhre',
    gender: 'feminine',
    genderArticle: 'die',
    phonetic: 'ˈlʊftˌʁøːʁə',
    literalTranslation: 'air pipe',
    englishDefinition: 'Trachea / Windpipe',
    category: 'respiratory',
    chapterId: 3,
    etymology: {
      morphemes: [
        { part: 'Luft', meaning: 'air', type: 'root' },
        { part: 'Röhre', meaning: 'pipe / tube', type: 'root' }
      ],
      notes: 'Compounds include Luftröhrenschnitt (tracheotomy) and Luftröhrenentzündung (tracheitis).'
    },
    clinicalExample: 'Knorpelspangen halten das Lumen der Luftröhre dauerhaft offen.',
    langPageReference: 'Lang (1905), p. 286'
  },
  {
    id: 'lunge_kehlkopf',
    german: 'Kehlkopf',
    gender: 'masculine',
    genderArticle: 'der',
    phonetic: 'ˈkeːlˌkɔpf',
    literalTranslation: 'throat head / throat knob',
    englishDefinition: 'Larynx',
    category: 'respiratory',
    chapterId: 3,
    etymology: {
      morphemes: [
        { part: 'Kehle', meaning: 'throat / gullet', type: 'organ' },
        { part: 'Kopf', meaning: 'head / round prominence', type: 'root' }
      ],
      notes: 'Prominent in German ENT literature following Czermak\'s optical mirror innovations.'
    },
    clinicalExample: 'Der Kehlkopf beherbergt die wahren und falschen Stimmlippen.',
    langPageReference: 'Lang (1905), p. 240'
  },
  {
    id: 'lunge_kehlkopfspiegel',
    german: 'Kehlkopfspiegel',
    gender: 'masculine',
    genderArticle: 'der',
    phonetic: 'ˈkeːlˌkɔpfˌʃpiːɡl̩',
    literalTranslation: 'larynx mirror',
    englishDefinition: 'Laryngoscope',
    category: 'instruments',
    chapterId: 3,
    etymology: {
      morphemes: [
        { part: 'Kehlkopf', meaning: 'larynx', type: 'organ' },
        { part: 'Spiegel', meaning: 'mirror / speculum', type: 'root' }
      ],
      notes: 'Revolutionized 19th-century examination of vocal cords without surgery.'
    },
    clinicalExample: 'Die Inspektion mit dem Kehlkopfspiegel zeigte freie Stimmlippenbeweglichkeit.',
    langPageReference: 'Lang (1905), p. 241'
  },
  {
    id: 'lunge_brustfell',
    german: 'Brustfell',
    gender: 'neuter',
    genderArticle: 'das',
    phonetic: 'ˈbʁʊstˌfɛl',
    literalTranslation: 'chest pelt / thoracic hide',
    englishDefinition: 'Pleura (Pleura parietalis / visceralis)',
    category: 'respiratory',
    chapterId: 3,
    etymology: {
      morphemes: [
        { part: 'Brust', meaning: 'chest / thorax', type: 'organ' },
        { part: 'Fell', meaning: 'hide / membrane / serous covering', type: 'root' }
      ],
      notes: 'In German anatomical terminology, Fell is widely used for serous membranes (Rippenfell, Bauchfell).'
    },
    clinicalExample: 'Brustfellentzündung (Pleuritis) geht oft mit atemabhängigen Schmerzen einher.',
    langPageReference: 'Lang (1905), p. 77'
  },
  {
    id: 'lunge_zwerchfell',
    german: 'Zwerchfell',
    gender: 'neuter',
    genderArticle: 'das',
    phonetic: 'ˈtsvɛʁçˌfɛl',
    literalTranslation: 'crossways membrane / transverse pelt',
    englishDefinition: 'Diaphragm (Diaphragma)',
    category: 'respiratory',
    chapterId: 3,
    etymology: {
      morphemes: [
        { part: 'zwerch', meaning: 'transverse / crosswise (Old High German twerh)', type: 'prefix' },
        { part: 'Fell', meaning: 'membrane / skin', type: 'root' }
      ],
      notes: 'Separates the thoracic cavity from the abdominal cavity.'
    },
    clinicalExample: 'Das Zwerchfell ist der primäre Inspirationsmuskel.',
    langPageReference: 'Lang (1905), p. 583'
  },
  {
    id: 'lunge_schwindsucht',
    german: 'Schwindsucht',
    gender: 'feminine',
    genderArticle: 'die',
    phonetic: 'ˈʃvɪntˌzʊxt',
    literalTranslation: 'dwindling-passion / wasting affliction',
    englishDefinition: 'Phthisis / Pulmonary Tuberculosis / Consumption',
    category: 'respiratory',
    chapterId: 3,
    etymology: {
      morphemes: [
        { part: 'schwind-', meaning: 'to dwindle / waste away', type: 'root' },
        { part: 'Sucht', meaning: 'morbid condition / affliction (from Siechtum)', type: 'suffix' }
      ],
      notes: 'The dominant epidemic disease of the 19th century until Robert Koch discovered Mycobacterium tuberculosis in 1882.'
    },
    clinicalExample: 'Robert Koch identifizierte den Tuberkelbazillus als Erreger der Schwindsucht.',
    langPageReference: 'Lang (1905), p. 450'
  },
  {
    id: 'lunge_atemnot',
    german: 'Atemnot',
    gender: 'feminine',
    genderArticle: 'die',
    phonetic: 'ˈaːtəmˌnoːt',
    literalTranslation: 'breath distress / breath need',
    englishDefinition: 'Dyspnea / Shortness of breath',
    category: 'respiratory',
    chapterId: 3,
    etymology: {
      morphemes: [
        { part: 'Atem', meaning: 'breath / respiration', type: 'root' },
        { part: 'Not', meaning: 'distress / emergency / need', type: 'root' }
      ],
      notes: 'Frequent cardinal symptom in pulmonary and cardiac decompensation.'
    },
    clinicalExample: 'Der Patient klagte über nächtliche Atemnot bei flacher Lagerung.',
    langPageReference: 'Lang (1905), p. 28'
  },

  // --- CHAPTER 4 / GASTROINTESTINAL & HEPATO-BILIARY ---
  {
    id: 'gi_magen',
    german: 'Magen',
    gender: 'masculine',
    genderArticle: 'der',
    phonetic: 'ˈmaːɡn̩',
    literalTranslation: 'stomach',
    englishDefinition: 'Stomach (Gaster / Ventriculus)',
    category: 'gastrointestinal',
    chapterId: 4,
    etymology: {
      morphemes: [
        { part: 'Magen', meaning: 'stomach', type: 'organ' }
      ],
      notes: 'Forms dozens of compounds: Magengeschwür, Magensaft, Magenschleimhaut.'
    },
    clinicalExample: 'Die Magenschleimhaut sezerniert Salzsäure und Pepsinogen.',
    langPageReference: 'Lang (1905), p. 290'
  },
  {
    id: 'gi_darm',
    german: 'Darm',
    gender: 'masculine',
    genderArticle: 'der',
    phonetic: 'daʁm',
    literalTranslation: 'intestine / gut',
    englishDefinition: 'Intestine / Bowel (Enteron)',
    category: 'gastrointestinal',
    chapterId: 4,
    etymology: {
      morphemes: [
        { part: 'Darm', meaning: 'intestine / gut', type: 'organ' }
      ],
      notes: 'German names for intestinal tracts are brilliantly literal.'
    },
    clinicalExample: 'Die Darmperistaltik war über allen vier Quadranten lebhaft.',
    langPageReference: 'Lang (1905), p. 91'
  },
  {
    id: 'gi_zwolffingerdarm',
    german: 'Zwölffingerdarm',
    gender: 'masculine',
    genderArticle: 'der',
    phonetic: 'ˈtsvœlfˌfɪŋɐˌdaʁm',
    literalTranslation: 'twelve-finger intestine',
    englishDefinition: 'Duodenum',
    category: 'gastrointestinal',
    chapterId: 4,
    etymology: {
      morphemes: [
        { part: 'zwölf', meaning: 'twelve', type: 'root' },
        { part: 'Finger', meaning: 'finger breadths (digitorum)', type: 'root' },
        { part: 'Darm', meaning: 'intestine', type: 'organ' }
      ],
      notes: 'Exact calque of Latin duodenum digitorum (twelve finger-breadths long), coined in medieval anatomy.'
    },
    clinicalExample: 'Das Duodenalulkus liegt im proximalen Abschnitt des Zwölffingerdarms.',
    langPageReference: 'Lang (1905), p. 584'
  },
  {
    id: 'gi_blinddarm',
    german: 'Blinddarm',
    gender: 'masculine',
    genderArticle: 'der',
    phonetic: 'ˈblɪntˌdaʁm',
    literalTranslation: 'blind intestine (sac ending in a cul-de-sac)',
    englishDefinition: 'Cecum / Vermiform Appendix (colloquially)',
    category: 'gastrointestinal',
    chapterId: 4,
    etymology: {
      morphemes: [
        { part: 'blind', meaning: 'blind / closed-ended', type: 'root' },
        { part: 'Darm', meaning: 'gut', type: 'organ' }
      ],
      notes: 'Calque of Latin intestinum caecum. In common German clinical parlance, Blinddarmentzündung refers to appendicitis.'
    },
    clinicalExample: 'Druckschmerz am McBurney-Punkt deutet auf eine Entzündung des Blinddarmfortsatzes.',
    langPageReference: 'Lang (1905), p. 64'
  },
  {
    id: 'gi_bauchspeicheldruse',
    german: 'Bauchspeicheldrüse',
    gender: 'feminine',
    genderArticle: 'die',
    phonetic: 'ˈbaʊ̯xˌʃpaɪ̯çl̩ˌdʁyːzə',
    literalTranslation: 'belly-saliva gland',
    englishDefinition: 'Pancreas',
    category: 'gastrointestinal',
    chapterId: 4,
    etymology: {
      morphemes: [
        { part: 'Bauch', meaning: 'belly / abdomen', type: 'organ' },
        { part: 'Speichel', meaning: 'saliva / digestive fluid', type: 'root' },
        { part: 'Drüse', meaning: 'gland (from Druse/nodule)', type: 'organ' }
      ],
      notes: 'German anatomists noted the clear enzymatic secretion resembled mouth saliva (Speichel).'
    },
    clinicalExample: 'Die Bauchspeicheldrüse erfüllt sowohl endokrine als auch exokrine Aufgaben.',
    langPageReference: 'Lang (1905), p. 45'
  },
  {
    id: 'gi_leber',
    german: 'Leber',
    gender: 'feminine',
    genderArticle: 'die',
    phonetic: 'ˈleːbɐ',
    literalTranslation: 'liver',
    englishDefinition: 'Liver (Hepar)',
    category: 'gastrointestinal',
    chapterId: 4,
    etymology: {
      morphemes: [
        { part: 'Leber', meaning: 'liver (related to "life / leben")', type: 'organ' }
      ],
      notes: 'Forms Leberentzündung (hepatitis), Leberzirrhose (cirrhosis), Lebertran (cod-liver oil).'
    },
    clinicalExample: 'Die Palpation des rechten Oberbauchs zeigte eine vergrößerte Leber.',
    langPageReference: 'Lang (1905), p. 273'
  },
  {
    id: 'gi_gallenblase',
    german: 'Gallenblase',
    gender: 'feminine',
    genderArticle: 'die',
    phonetic: 'ˈɡaln̩ˌblaːzə',
    literalTranslation: 'bile bladder',
    englishDefinition: 'Gallbladder (Vesica fellea)',
    category: 'gastrointestinal',
    chapterId: 4,
    etymology: {
      morphemes: [
        { part: 'Galle', meaning: 'bile / gall', type: 'root' },
        { part: 'Blase', meaning: 'bladder / vesicle / bubble', type: 'organ' }
      ],
      notes: 'Blase is the universal Germanic root for vesicle or urinary/gall bladder.'
    },
    clinicalExample: 'Sonographischer Nachweis mehrerer Konkremente in der Gallenblase.',
    langPageReference: 'Lang (1905), p. 154'
  },
  {
    id: 'gi_gelbsucht',
    german: 'Gelbsucht',
    gender: 'feminine',
    genderArticle: 'die',
    phonetic: 'ˈɡɛlpˌzʊxt',
    literalTranslation: 'yellow affliction / yellow sickness',
    englishDefinition: 'Jaundice / Icterus',
    category: 'gastrointestinal',
    chapterId: 4,
    etymology: {
      morphemes: [
        { part: 'gelb', meaning: 'yellow', type: 'root' },
        { part: 'Sucht', meaning: 'morbid state / disease passion', type: 'suffix' }
      ],
      notes: 'Matches Latin icterus; clinical sign of hyperbilirubinemia with scleral icterus.'
    },
    clinicalExample: 'Bei Gallenwegsverschluss manifestierte sich eine schwere Gelbsucht.',
    langPageReference: 'Lang (1905), p. 165'
  },
  {
    id: 'gi_bauchfell',
    german: 'Bauchfell',
    gender: 'neuter',
    genderArticle: 'das',
    phonetic: 'ˈbaʊ̯xˌfɛl',
    literalTranslation: 'belly pelt / abdominal membrane',
    englishDefinition: 'Peritoneum',
    category: 'gastrointestinal',
    chapterId: 4,
    etymology: {
      morphemes: [
        { part: 'Bauch', meaning: 'belly', type: 'organ' },
        { part: 'Fell', meaning: 'membrane / skin', type: 'root' }
      ],
      notes: 'Bauchfellentzündung is the universal German term for peritonitis.'
    },
    clinicalExample: 'Eine Perforation führte zur gefürchteten Bauchfellentzündung.',
    langPageReference: 'Lang (1905), p. 44'
  },

  // --- CHAPTER 5 / NEUROLOGY & SENSORY ORGANS ---
  {
    id: 'neuro_gehirn',
    german: 'Gehirn',
    gender: 'neuter',
    genderArticle: 'das',
    phonetic: 'ɡəˈhɪʁn',
    literalTranslation: 'brain / cerebral mass',
    englishDefinition: 'Brain / Cerebrum / Encephalon',
    category: 'neurology',
    chapterId: 5,
    etymology: {
      morphemes: [
        { part: 'Ge-', meaning: 'collective prefix', type: 'prefix' },
        { part: 'Hirn', meaning: 'brain matter (Proto-Germanic *hirniz)', type: 'organ' }
      ],
      notes: 'Differentiated into Großhirn (cerebrum), Kleinhirn (cerebellum), and Zwischenhirn (diencephalon).'
    },
    clinicalExample: 'Das Gehirn wird durch drei bindegewebige Hirnhäute geschützt.',
    langPageReference: 'Lang (1905), p. 161'
  },
  {
    id: 'neuro_ruckenmark',
    german: 'Rückenmark',
    gender: 'neuter',
    genderArticle: 'das',
    phonetic: 'ˈʁʏkn̩ˌmaʁk',
    literalTranslation: 'back marrow',
    englishDefinition: 'Spinal Cord (Medulla spinalis)',
    category: 'neurology',
    chapterId: 5,
    etymology: {
      morphemes: [
        { part: 'Rücken', meaning: 'back / spine', type: 'organ' },
        { part: 'Mark', meaning: 'marrow / inner substance (medulla)', type: 'root' }
      ],
      notes: 'German uses Mark for medullary inner tissues: Knochenmark (bone marrow), Rückenmark (spinal cord).'
    },
    clinicalExample: 'Das Rückenmark leitet motorische und sensible Nervenimpulse.',
    langPageReference: 'Lang (1905), p. 414'
  },
  {
    id: 'neuro_hirnhaut',
    german: 'Hirnhaut',
    gender: 'feminine',
    genderArticle: 'die',
    phonetic: 'ˈhɪʁnˌhaʊ̯t',
    literalTranslation: 'brain skin / cerebral membrane',
    englishDefinition: 'Meninges (Mater / Meninx)',
    category: 'neurology',
    chapterId: 5,
    etymology: {
      morphemes: [
        { part: 'Hirn', meaning: 'brain', type: 'organ' },
        { part: 'Haut', meaning: 'skin / membrane / tunic', type: 'organ' }
      ],
      notes: 'Hirnhautentzündung translates directly to meningitis.'
    },
    clinicalExample: 'Nackensteifigkeit (Meningismus) ist Leitsymptom bei Entzündung der Hirnhäute.',
    langPageReference: 'Lang (1905), p. 209'
  },
  {
    id: 'neuro_schlaganfall',
    german: 'Schlaganfall',
    gender: 'masculine',
    genderArticle: 'der',
    phonetic: 'ˈʃlaːkʔanˌfal',
    literalTranslation: 'stroke-onset / sudden strike attack',
    englishDefinition: 'Stroke / Apoplexy / Cerebrovascular accident',
    category: 'neurology',
    chapterId: 5,
    etymology: {
      morphemes: [
        { part: 'Schlag', meaning: 'strike / blow', type: 'root' },
        { part: 'Anfall', meaning: 'fit / attack / seizure', type: 'root' }
      ],
      notes: 'Mirrors the historical English term "apoplectic stroke" or "apoplexy".'
    },
    clinicalExample: 'Plötzliche Hemiparese und Sprachstörung nach akutem Schlaganfall.',
    langPageReference: 'Lang (1905), p. 433'
  },
  {
    id: 'neuro_gehirnerschutterung',
    german: 'Gehirnerschütterung',
    gender: 'feminine',
    genderArticle: 'die',
    phonetic: 'ɡəˈhɪʁnʔɛɐ̯ˌʃʏtəʁʊŋ',
    literalTranslation: 'brain-shattering / brain concussion',
    englishDefinition: 'Concussion of the brain / Commotio cerebri',
    category: 'neurology',
    chapterId: 5,
    etymology: {
      morphemes: [
        { part: 'Gehirn', meaning: 'brain', type: 'organ' },
        { part: 'erschüttern', meaning: 'to shake violently / agitate', type: 'root' },
        { part: '-ung', meaning: 'nominalizing suffix', type: 'suffix' }
      ],
      notes: 'Exact calque of Latin commotio cerebri.'
    },
    clinicalExample: 'Retrograde Amnesie und Übelkeit nach einer Gehirnerschütterung.',
    langPageReference: 'Lang (1905), p. 162'
  },
  {
    id: 'neuro_netzhaut',
    german: 'Netzhaut',
    gender: 'feminine',
    genderArticle: 'die',
    phonetic: 'ˈnɛtsˌhaʊ̯t',
    literalTranslation: 'net-like skin / mesh membrane',
    englishDefinition: 'Retina',
    category: 'neurology',
    chapterId: 5,
    etymology: {
      morphemes: [
        { part: 'Netz', meaning: 'net / mesh (rete)', type: 'root' },
        { part: 'Haut', meaning: 'skin / tunic', type: 'organ' }
      ],
      notes: 'Direct calque of Latin retina (from rete, a fisherman\'s net).'
    },
    clinicalExample: 'Die Netzhautablösung (Amotio retinae) bedarf einer raschen ophthalmologischen Intervention.',
    langPageReference: 'Lang (1905), p. 326'
  },
  {
    id: 'neuro_hornhaut',
    german: 'Hornhaut',
    gender: 'feminine',
    genderArticle: 'die',
    phonetic: 'ˈhɔʁnˌhaʊ̯t',
    literalTranslation: 'horn skin / callous skin',
    englishDefinition: 'Cornea (and also callous epidermis)',
    category: 'neurology',
    chapterId: 5,
    etymology: {
      morphemes: [
        { part: 'Horn', meaning: 'horn / keratinous substance', type: 'root' },
        { part: 'Haut', meaning: 'skin', type: 'organ' }
      ],
      notes: 'Calque of Latin cornea tunica (horn-like coat).'
    },
    clinicalExample: 'Transparenz der Hornhaut ermöglicht den ungehinderten Lichteinfall.',
    langPageReference: 'Lang (1905), p. 216'
  },
  {
    id: 'neuro_trommelfell',
    german: 'Trommelfell',
    gender: 'neuter',
    genderArticle: 'das',
    phonetic: 'ˈtʁɔml̩ˌfɛl',
    literalTranslation: 'drum skin / drum pelt',
    englishDefinition: 'Tympanic membrane / Eardrum',
    category: 'neurology',
    chapterId: 5,
    etymology: {
      morphemes: [
        { part: 'Trommel', meaning: 'drum (tympanum)', type: 'root' },
        { part: 'Fell', meaning: 'membrane / skin stretched over a drum', type: 'root' }
      ],
      notes: 'Poetic and anatomical calque of membrana tympani.'
    },
    clinicalExample: 'Otoskopische Inspektion zeigte ein intaktes, perlmuttfarbenes Trommelfell.',
    langPageReference: 'Lang (1905), p. 524'
  },
  {
    id: 'neuro_grauer_star',
    german: 'Grauer Star',
    gender: 'masculine',
    genderArticle: 'der',
    phonetic: 'ˈɡʁaʊ̯ɐ ʃtaːɐ̯',
    literalTranslation: 'gray rigid stare / motionless eye',
    englishDefinition: 'Cataract (clouding of the crystalline lens)',
    category: 'neurology',
    chapterId: 5,
    etymology: {
      morphemes: [
        { part: 'grau', meaning: 'gray (clouded lens color)', type: 'root' },
        { part: 'Star', meaning: 'rigid, motionless gaze (starr)', type: 'root' }
      ],
      notes: 'Contrasted with Grüner Star (glaucoma) and Schwarzer Star (amaurosis).'
    },
    clinicalExample: 'Die Trübung der Augenlinse beim Grauen Star wird durch Phakoemulsifikation behoben.',
    langPageReference: 'Lang (1905), p. 488'
  },

  // --- CHAPTER 6 / MUSCULOSKELETAL & WOUNDS ---
  {
    id: 'muskel_knochen',
    german: 'Knochen',
    gender: 'masculine',
    genderArticle: 'der',
    phonetic: 'ˈknɔxn̩',
    literalTranslation: 'bone',
    englishDefinition: 'Bone (Os / Osteon)',
    category: 'musculoskeletal',
    chapterId: 6,
    etymology: {
      morphemes: [
        { part: 'Knochen', meaning: 'bone (Proto-Germanic *knuk-)', type: 'organ' }
      ],
      notes: 'Forms Knochenmark (marrow), Knochenhaut (periosteum), Knochenbruch (fracture).'
    },
    clinicalExample: 'Die Kortikalis verleiht dem Knochen seine biomechanische Festigkeit.',
    langPageReference: 'Lang (1905), p. 250'
  },
  {
    id: 'muskel_knochenmark',
    german: 'Knochenmark',
    gender: 'neuter',
    genderArticle: 'das',
    phonetic: 'ˈknɔxn̩ˌmaʁk',
    literalTranslation: 'bone marrow',
    englishDefinition: 'Bone Marrow (Medulla ossium)',
    category: 'musculoskeletal',
    chapterId: 6,
    etymology: {
      morphemes: [
        { part: 'Knochen', meaning: 'bone', type: 'organ' },
        { part: 'Mark', meaning: 'marrow / medulla', type: 'root' }
      ],
      notes: 'The site of hematopoiesis; Ernst Neumann in Königsberg (1868) first proved blood cells originate in bone marrow.'
    },
    clinicalExample: 'Das rote Knochenmark ist der Bildungsort sämtlicher Blutzellen.',
    langPageReference: 'Lang (1905), p. 251'
  },
  {
    id: 'muskel_gelenk',
    german: 'Gelenk',
    gender: 'neuter',
    genderArticle: 'das',
    phonetic: 'ɡəˈlɛŋk',
    literalTranslation: 'joint / articulation / link',
    englishDefinition: 'Joint / Articulation (Articulatio / Arthron)',
    category: 'musculoskeletal',
    chapterId: 6,
    etymology: {
      morphemes: [
        { part: 'Ge-', meaning: 'collective prefix', type: 'prefix' },
        { part: 'lenk', meaning: 'to turn, bend, or steer (lenken)', type: 'root' }
      ],
      notes: 'Compounds: Gelenkentzündung (arthritis), Gelenkknorpel (articular cartilage).'
    },
    clinicalExample: 'Der Knorpelüberzug schützt das Gelenk vor übermäßigem Verschleiß.',
    langPageReference: 'Lang (1905), p. 164'
  },
  {
    id: 'muskel_sehne',
    german: 'Sehne',
    gender: 'feminine',
    genderArticle: 'die',
    phonetic: 'ˈzeːnə',
    literalTranslation: 'tendon / sinew / bowstring',
    englishDefinition: 'Tendon / Sinew (Tendo)',
    category: 'musculoskeletal',
    chapterId: 6,
    etymology: {
      morphemes: [
        { part: 'Sehne', meaning: 'sinew / tendon / string of bow', type: 'organ' }
      ],
      notes: 'Forms Sehnenreflex (tendon reflex), Sehnennaht (tenorrhaphy), Sehnenscheide (tendon sheath).'
    },
    clinicalExample: 'Die Achillessehne ist die kräftigste Sehne des menschlichen Körpers.',
    langPageReference: 'Lang (1905), p. 463'
  },
  {
    id: 'muskel_wundstarrkrampf',
    german: 'Wundstarrkrampf',
    gender: 'masculine',
    genderArticle: 'der',
    phonetic: 'ˈvʊntˌʃtaʁˌkʁampf',
    literalTranslation: 'wound-rigid-spasm',
    englishDefinition: 'Tetanus / Lockjaw',
    category: 'pathology',
    chapterId: 6,
    etymology: {
      morphemes: [
        { part: 'Wund(e)', meaning: 'wound', type: 'organ' },
        { part: 'starr', meaning: 'rigid / stiff', type: 'root' },
        { part: 'Krampf', meaning: 'spasm / cramp', type: 'root' }
      ],
      notes: 'Descriptive compound representing the tetanic rigidity following wound infection by Clostridium tetani.'
    },
    clinicalExample: 'Kitasato Shibasaburo und Emil von Behring entwickelten das Antitoxin gegen Wundstarrkrampf.',
    langPageReference: 'Lang (1905), p. 574'
  },
  {
    id: 'muskel_brand',
    german: 'Brand',
    gender: 'masculine',
    genderArticle: 'der',
    phonetic: 'bʁant',
    literalTranslation: 'burning / fire / combustion',
    englishDefinition: 'Gangrene / Mortification / Sphacelus',
    category: 'pathology',
    chapterId: 6,
    etymology: {
      morphemes: [
        { part: 'brenn-', meaning: 'to burn (from Brand, fire)', type: 'root' }
      ],
      notes: 'Der feuchte Brand (moist gangrene) and der trockene Brand (dry gangrene/mummification).'
    },
    clinicalExample: 'Ischämische Nekrose führte zum trockenen Brand der Zehen.',
    langPageReference: 'Lang (1905), p. 73'
  },
  {
    id: 'muskel_knochenbruch',
    german: 'Knochenbruch',
    gender: 'masculine',
    genderArticle: 'der',
    phonetic: 'ˈknɔxn̩ˌbʁʊx',
    literalTranslation: 'bone breach / bone break',
    englishDefinition: 'Fracture of a bone (Fractura)',
    category: 'musculoskeletal',
    chapterId: 6,
    etymology: {
      morphemes: [
        { part: 'Knochen', meaning: 'bone', type: 'organ' },
        { part: 'Bruch', meaning: 'break / rupture / hernia', type: 'root' }
      ],
      notes: 'Bruch also designates a hernia (Leistenbruch = inguinal hernia).'
    },
    clinicalExample: 'Röntgenaufnahme bestätigte einen geschlossenen Knochenbruch des Femurs.',
    langPageReference: 'Lang (1905), p. 250'
  },

  // --- CHAPTER 7 / INSTRUMENTS & ALLIED SCIENCES ---
  {
    id: 'inst_augenspiegel',
    german: 'Augenspiegel',
    gender: 'masculine',
    genderArticle: 'der',
    phonetic: 'ˈaʊ̯ɡn̩ˌʃpiːɡl̩',
    literalTranslation: 'eye mirror',
    englishDefinition: 'Ophthalmoscope',
    category: 'instruments',
    chapterId: 7,
    etymology: {
      morphemes: [
        { part: 'Auge', meaning: 'eye', type: 'organ' },
        { part: 'Spiegel', meaning: 'mirror / speculum', type: 'root' }
      ],
      notes: 'Invented in 1851 by German polymath Hermann von Helmholtz, enabling direct inspection of the retina.'
    },
    clinicalExample: 'Helmholtz revolutionierte die Heilkunde mit der Erfindung des Augenspiegels.',
    langPageReference: 'Lang (1905), p. 33'
  },
  {
    id: 'inst_zange',
    german: 'Zange',
    gender: 'feminine',
    genderArticle: 'die',
    phonetic: 'ˈtsaŋə',
    literalTranslation: 'tongs / pincers',
    englishDefinition: 'Forceps / Pincers',
    category: 'instruments',
    chapterId: 7,
    etymology: {
      morphemes: [
        { part: 'Zange', meaning: 'pincers / tongs', type: 'root' }
      ],
      notes: 'Compounds: Geburtszange (obstetric forceps), Knochenzange (bone-cutting forceps).'
    },
    clinicalExample: 'Die anatomische Zange dient dem atraumatischen Fassen empfindlicher Gewebe.',
    langPageReference: 'Lang (1905), p. 576'
  },
  {
    id: 'inst_karbolsaure',
    german: 'Karbolsäure',
    gender: 'feminine',
    genderArticle: 'die',
    phonetic: 'kaʁˈboːlˌzɔɪ̯ʁə',
    literalTranslation: 'carbolic acid',
    englishDefinition: 'Phenol / Carbolic acid (pioneer antiseptic)',
    category: 'allied',
    chapterId: 7,
    etymology: {
      morphemes: [
        { part: 'Karbol', meaning: 'carbonaceous coal-tar extract', type: 'root' },
        { part: 'Säure', meaning: 'acid', type: 'root' }
      ],
      notes: 'Central to Joseph Lister\'s and German hospital antiseptic operating protocols.'
    },
    clinicalExample: 'Chirurgische Händedesinfektion und Zerstäubung von Karbolsäure im Operationssaal.',
    langPageReference: 'Lang (1905), p. 238'
  },
  {
    id: 'inst_sublimat',
    german: 'Quecksilbersublimat',
    gender: 'neuter',
    genderArticle: 'das',
    phonetic: 'ˈkvɛkzɪlbɐzʊbliˌmaːt',
    literalTranslation: 'quicksilver sublimate',
    englishDefinition: 'Corrosive sublimate / Mercuric chloride (disinfectant)',
    category: 'allied',
    chapterId: 7,
    etymology: {
      morphemes: [
        { part: 'Quecksilber', meaning: 'mercury (living silver)', type: 'root' },
        { part: 'Sublimat', meaning: 'sublimate', type: 'root' }
      ],
      notes: 'Extensively cited in Lang for historical surgical sterilization and histological fixing.'
    },
    clinicalExample: 'Robert Koch prüfte die keimtötende Wirkung von Quecksilbersublimatlösungen.',
    langPageReference: 'Lang (1905), p. 389'
  },
  {
    id: 'inst_sonde',
    german: 'Sonde',
    gender: 'feminine',
    genderArticle: 'die',
    phonetic: 'ˈzɔndə',
    literalTranslation: 'sound / probe',
    englishDefinition: 'Probe / Sound / Catheter / Cannula',
    category: 'instruments',
    chapterId: 7,
    etymology: {
      morphemes: [
        { part: 'Sonde', meaning: 'measuring sounding lead (French sonde)', type: 'root' }
      ],
      notes: 'Compounds: Hohlsonde (grooved director), Knochensonde (bone probe).'
    },
    clinicalExample: 'Die Wundhöhle wurde vorsichtig mit einer stumpfen Sonde ausgetastet.',
    langPageReference: 'Lang (1905), p. 473'
  }
];
