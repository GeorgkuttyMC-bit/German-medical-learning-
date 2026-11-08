import { MedicalSectionInfo } from '../types';

export const MEDICAL_SECTIONS_DATA: MedicalSectionInfo[] = [
  {
    id: 'morphology',
    nameGerman: 'Allgemeine Wortbildung & Komposita',
    nameEnglish: 'Medical Morphology & Word Architecture',
    associatedChapterId: 1,
    shortDescription: 'The grammatical foundations of German medical compounding, the Law of the Head Word, prefixes, and universal pathological suffixes.',
    detailedExplanation: 'In German clinical medicine, terms are constructed through an agglutinative logic where anatomical roots and pathological modifiers are fused into a single compound word (Kompositum). The most crucial linguistic law is the "Law of the Head Word" (Grundwortregel): the final element in the compound dictates the grammatical gender (der, die, or das) and the fundamental classification of the object, while the preceding components act as determinative qualifiers (Bestimmungswörter). Thus, "das Herz" (heart) + "der Beutel" (sac) yields "der Herzbeutel" (pericardium), and further appending "die Entzündung" (inflammation) results in "die Herzbeutelentzündung" (pericarditis).',
    historicalSignificance: 'Hugo Lang and Bertram Abrahams emphasized in the dictionary preface that understanding this morphological blueprint allows foreign medical researchers to decode thousands of compound clinical descriptors without rote memorization.',
    keyGermanRoots: [
      { root: 'Entzündung', gender: 'die', literal: 'in-kindling / burning', english: 'Inflammation (-itis)', example: 'Lungenentzündung (Pneumonia)' },
      { root: 'Schwund', gender: 'der', literal: 'dwindling / wasting away', english: 'Atrophy / Phthisis', example: 'Muskelschwund (Amyotrophy)' },
      { root: 'Erweichung', gender: 'die', literal: 'softening-out', english: 'Malacia', example: 'Gehirnerweichung (Encephalomalacia)' },
      { root: 'Schnitt', gender: 'der', literal: 'cut / incision', english: '-tomy / Incision', example: 'Luftröhrenschnitt (Tracheotomy)' },
      { root: 'Naht', gender: 'die', literal: 'seam / stitch', english: '-rrhaphy / Suture', example: 'Sehnennaht (Tenorrhaphy)' }
    ],
    compoundingRules: [
      'The final morpheme in a compound dictates grammatical gender (der, die, das) and clinical category.',
      'Prefixes (Über-, Unter-, Ent-, Vor-) adjust degree, deficiency, or anatomical orientation.',
      'Greco-Latin -itis is systematically translated as -entzündung, and -malacia as -erweichung.'
    ],
    greekLatinEquivalents: [
      { greekLatin: '-itis', german: '-entzündung', english: 'Inflammation' },
      { greekLatin: '-malacia', german: '-erweichung', english: 'Tissue softening' },
      { greekLatin: '-tomia', german: '-schnitt', english: 'Surgical cut / incision' },
      { greekLatin: '-rrhaphy', german: '-naht', english: 'Surgical suture' },
      { greekLatin: 'atrophia', german: '-schwund', english: 'Wasting / atrophy' }
    ]
  },
  {
    id: 'cardiovascular',
    nameGerman: 'Herz-, Gefäß- & Blutlehre',
    nameEnglish: 'Cardiovascular & Hematology',
    associatedChapterId: 2,
    shortDescription: 'Anatomy of the heart chambers, pulsatile arteries, venous return, and cellular blood pathology.',
    detailedExplanation: 'German cardiovascular terminology reflects functional tactile observations. Arteries are named "Schlagadern" (beating veins/vessels) because the cardiac impulse (Schlag) can be palpated directly against adjacent bone, while returning veins are designated "Blutadern" or "Hohlvenen". The heart itself is divided into muscular pumping chambers ("Herzkammern" = ventricles) and receiving forecourts ("Vorhöfe" = atria). In hematology, blood cells are classified as discrete microscopic bodies ("Blutkörperchen"), divided into erythrocytes (rote Blutkörperchen) and leukocytes (weiße Blutkörperchen). Pathological conditions such as anemia are described literally as "Blutarmut" (blood poverty).',
    historicalSignificance: 'Between 1850 and 1890, Rudolf Virchow in Berlin investigated intravascular blood clotting, coining "Thrombose" (thrombosis) and "Embolie" (embolism) and formulating the famous Virchow Triad. Paul Ehrlich pioneered aniline dye blood staining in Frankfurt, identifying eosinophils and basophils.',
    keyGermanRoots: [
      { root: 'Herz', gender: 'das', literal: 'heart (cor)', english: 'Heart', example: 'Herzklappe (Cardiac valve)' },
      { root: 'Schlagader', gender: 'die', literal: 'beating-vein', english: 'Artery', example: 'Hauptschlagader (Aorta)' },
      { root: 'Blutader', gender: 'die', literal: 'blood-vessel', english: 'Vein', example: 'Hohlblutader (Vena cava)' },
      { root: 'Kammer', gender: 'die', literal: 'chamber', english: 'Ventricle', example: 'Herzkammer (Cardiac ventricle)' },
      { root: 'Vorhof', gender: 'der', literal: 'fore-court', english: 'Atrium', example: 'Vorhofflimmern (Atrial fibrillation)' },
      { root: 'Blutkörperchen', gender: 'das', literal: 'little blood body', english: 'Blood corpuscle / cell', example: 'Blutkörperchensenkung (ESR)' }
    ],
    compoundingRules: [
      'Vascular compounds use "Ader" for vessel: Schlagader (artery), Blutader (vein), Haargefäß (capillary), Saugader (lymphatic).',
      'Cardiac coverings combine "Herz" + "Beutel" (sac) = Herzbeutel (pericardium).',
      'Blood disorders combine "Blut" + pathological noun: Blutarmut (anemia), Blutgerinnsel (thrombus), Blutvergiftung (sepsis).'
    ],
    greekLatinEquivalents: [
      { greekLatin: 'Cor / Cardia', german: 'Herz', english: 'Heart' },
      { greekLatin: 'Arteria', german: 'Schlagader', english: 'Artery' },
      { greekLatin: 'Vena', german: 'Blutader', english: 'Vein' },
      { greekLatin: 'Ventriculus cordis', german: 'Herzkammer', english: 'Cardiac ventricle' },
      { greekLatin: 'Atrium cordis', german: 'Vorhof', english: 'Cardiac atrium' },
      { greekLatin: 'Thrombus', german: 'Blutgerinnsel', english: 'Blood clot' }
    ]
  },
  {
    id: 'respiratory',
    nameGerman: 'Atmungsapparat & Hals-Nasen-Ohren (HNO)',
    nameEnglish: 'Respiratory System & Laryngology',
    associatedChapterId: 3,
    shortDescription: 'Airway conduits, thoracic serosa, vocal cords, endoscopic laryngoscopy, and pulmonary phthisis.',
    detailedExplanation: 'The respiratory tract in Hugo Lang’s lexicon features vividly visual Germanic compounds. The trachea is termed "die Luftröhre" (air pipe), held patent by horseshoe cartilaginous rings ("Knorpelspangen"). The larynx is "der Kehlkopf" (throat head), housing the vocal cords ("Stimmlippen") and the vocal fissure ("Stimmritze" = glottis). The serous membrane lining the chest is "das Brustfell" or "Rippenfell" (pleura), while the muscular partition between thorax and abdomen is "das Zwerchfell" (transverse membrane/pelt).',
    historicalSignificance: 'Vienna and Leipzig were the birthplace of clinical laryngoscopy. Johann Czermak adopted Manuel García’s mirror concept and introduced artificial lamp illumination with a concave frontal mirror ("Kehlkopfspiegel"), establishing modern otolaryngology. In 1882, Robert Koch announced the discovery of the tubercle bacillus in Berlin, solving the etiology of pulmonary consumption ("Schwindsucht").',
    keyGermanRoots: [
      { root: 'Luftröhre', gender: 'die', literal: 'air pipe', english: 'Trachea', example: 'Luftröhrenschnitt (Tracheotomy)' },
      { root: 'Kehlkopf', gender: 'der', literal: 'throat head', english: 'Larynx', example: 'Kehlkopfspiegel (Laryngoscope)' },
      { root: 'Brustfell', gender: 'das', literal: 'chest hide / pelt', english: 'Pleura', example: 'Brustfellentzündung (Pleurisy)' },
      { root: 'Zwerchfell', gender: 'das', literal: 'crosswise membrane', english: 'Diaphragm', example: 'Zwerchfellhochstand (Diaphragm elevation)' },
      { root: 'Schwindsucht', gender: 'die', literal: 'wasting passion', english: 'Pulmonary tuberculosis', example: 'Lungenschwindsucht (Phthisis)' }
    ],
    compoundingRules: [
      'Conduits combine contents + Röhre: Luftröhre (windpipe/trachea), Speiseröhre (esophagus).',
      'Serous thoracic linings use "-fell": Brustfell (pleura), Rippenfell (costal pleura), Zwerchfell (diaphragm).',
      'Optical mirror devices use "-spiegel": Kehlkopfspiegel (laryngoscope).'
    ],
    greekLatinEquivalents: [
      { greekLatin: 'Trachea', german: 'Luftröhre', english: 'Windpipe' },
      { greekLatin: 'Larynx', german: 'Kehlkopf', english: 'Larynx' },
      { greekLatin: 'Pleura', german: 'Brustfell / Rippenfell', english: 'Pleural membrane' },
      { greekLatin: 'Diaphragma', german: 'Zwerchfell', english: 'Diaphragm' },
      { greekLatin: 'Dyspnoea', german: 'Atemnot', english: 'Shortness of breath' }
    ]
  },
  {
    id: 'gastrointestinal',
    nameGerman: 'Gastroenterologie & Hepatologie',
    nameEnglish: 'Gastrointestinal & Hepato-Biliary',
    associatedChapterId: 4,
    shortDescription: 'Digestive canal, medieval finger-breadth calques, hepatic metabolism, and peritoneal membranes.',
    detailedExplanation: 'German gastrointestinal nomenclature offers exceptional historical fidelity to classical measurements. The duodenum is "der Zwölffingerdarm" (twelve-finger gut), preserving the exact Hellenistic measurement of Herophilus (twelve finger-breadths long). The jejunum is "der Leerdarm" (empty gut, calquing Latin jejunus), so named because post-mortem examinations consistently find it devoid of food. The cecum and vermiform appendix are "der Blinddarm" (blind gut ending in a cul-de-sac). The pancreas is "die Bauchspeicheldrüse" (belly-saliva gland), acknowledging that its enzymes mirror the digestive action of oral saliva.',
    historicalSignificance: 'Theodor Billroth at the Vienna General Hospital performed the first successful human gastrectomy (Billroth I) in 1881. German surgeons established aseptic abdominal laparotomy, making stomach ulcer resection ("Magengeschwür") and appendectomy viable life-saving procedures.',
    keyGermanRoots: [
      { root: 'Magen', gender: 'der', literal: 'stomach (gaster)', english: 'Stomach', example: 'Magengeschwür (Gastric ulcer)' },
      { root: 'Zwölffingerdarm', gender: 'der', literal: '12-finger gut', english: 'Duodenum', example: 'Zwölffingerdarmgeschwür (Duodenal ulcer)' },
      { root: 'Blinddarm', gender: 'der', literal: 'blind gut', english: 'Cecum / Appendix', example: 'Blinddarmentzündung (Appendicitis)' },
      { root: 'Bauchspeicheldrüse', gender: 'die', literal: 'belly-saliva gland', english: 'Pancreas', example: 'Bauchspeicheldrüsenkrebs (Pancreatic cancer)' },
      { root: 'Gallenblase', gender: 'die', literal: 'bile bladder', english: 'Gallbladder', example: 'Gallenstein (Gallstone)' },
      { root: 'Bauchfell', gender: 'das', literal: 'belly pelt', english: 'Peritoneum', example: 'Bauchfellentzündung (Peritonitis)' }
    ],
    compoundingRules: [
      'Intestinal segments append "-darm": Zwölffingerdarm (duodenum), Leerdarm (jejunum), Krummdarm (ileum), Blinddarm (cecum), Mastdarm (rectum).',
      'Fluid reservoirs combine fluid + "Blase": Gallenblase (gallbladder), Harnblase (urinary bladder).',
      'Jaundice is named by color + disease suffix: Gelbsucht (yellow sickness = icterus).'
    ],
    greekLatinEquivalents: [
      { greekLatin: 'Gaster / Ventriculus', german: 'Magen', english: 'Stomach' },
      { greekLatin: 'Duodenum digitorum', german: 'Zwölffingerdarm', english: 'Duodenum' },
      { greekLatin: 'Jejunum', german: 'Leerdarm', english: 'Jejunum' },
      { greekLatin: 'Caecum / Appendix', german: 'Blinddarm', english: 'Cecum / Appendix' },
      { greekLatin: 'Pancreas', german: 'Bauchspeicheldrüse', english: 'Pancreas' },
      { greekLatin: 'Peritoneum', german: 'Bauchfell', english: 'Peritoneum' }
    ]
  },
  {
    id: 'neurology',
    nameGerman: 'Neurologie & Sinneswerkzeuge (Auge & Ohr)',
    nameEnglish: 'Neurology & Sensory Organs',
    associatedChapterId: 5,
    shortDescription: 'Brain matter, spinal medulla, cranial nerves, retinal layers, auditory ossicles, and stroke pathology.',
    detailedExplanation: 'Central nervous system terminology distinguishes higher cortical matter ("Großhirn" = cerebrum) from the coordination center ("Kleinhirn" = cerebellum) and the spinal conduit ("Rückenmark" = back marrow / medulla spinalis). The sensory tunics of the eye are described by structural appearance: "die Netzhaut" (net-like skin = retina, from Latin rete, net), "die Hornhaut" (horn-like skin = cornea), and "die Regenbogenhaut" (rainbow skin = iris). In the middle ear, the auditory ossicles are named after mechanical workshop implements: "Hammer" (malleus), "Amboss" (incus), and "Steigbügel" (stapes/stirrup).',
    historicalSignificance: 'Hermann von Helmholtz’s 1851 invention of the ophthalmoscope ("Augenspiegel") in Königsberg allowed the living human retina and cranial nerve head to be inspected directly. German neurologists Karl Westphal and Wilhelm Erb in Berlin first formalized clinical deep tendon reflexes (Patellarsehnenreflex).',
    keyGermanRoots: [
      { root: 'Gehirn', gender: 'das', literal: 'brain matter', english: 'Brain / Cerebrum', example: 'Gehirnerschütterung (Concussion)' },
      { root: 'Rückenmark', gender: 'das', literal: 'back marrow', english: 'Spinal cord', example: 'Rückenmarksentzündung (Myelitis)' },
      { root: 'Netzhaut', gender: 'die', literal: 'net skin', english: 'Retina', example: 'Netzhautablösung (Retinal detachment)' },
      { root: 'Hornhaut', gender: 'die', literal: 'horn skin', english: 'Cornea', example: 'Hornhautverkrümmung (Astigmatism)' },
      { root: 'Trommelfell', gender: 'das', literal: 'drum skin', english: 'Tympanic membrane / Eardrum', example: 'Trommelfellperforation (Eardrum rupture)' },
      { root: 'Schlaganfall', gender: 'der', literal: 'sudden blow-onset', english: 'Stroke / Apoplexy', example: 'Schlaganfallbehandlung (Stroke care)' }
    ],
    compoundingRules: [
      'Inner marrow/medulla is "Mark": Rückenmark (spinal cord), Knochenmark (bone marrow), Nebennierenmark (adrenal medulla).',
      'Eye diseases with fixed stare use "Star": Grauer Star (cataract), Grüner Star (glaucoma), Schwarzer Star (amaurosis).',
      'Traumatic shaking compounds use "-erschütterung": Gehirnerschütterung (commotio cerebri).'
    ],
    greekLatinEquivalents: [
      { greekLatin: 'Encephalon', german: 'Gehirn', english: 'Brain' },
      { greekLatin: 'Medulla spinalis', german: 'Rückenmark', english: 'Spinal cord' },
      { greekLatin: 'Retina', german: 'Netzhaut', english: 'Retina' },
      { greekLatin: 'Cornea', german: 'Hornhaut', english: 'Cornea' },
      { greekLatin: 'Membrana tympani', german: 'Trommelfell', english: 'Tympanic membrane' },
      { greekLatin: 'Cataracta', german: 'Grauer Star', english: 'Cataract' }
    ]
  },
  {
    id: 'musculoskeletal',
    nameGerman: 'Orthopädie, Traumatologie & Wundlehre',
    nameEnglish: 'Musculoskeletal & Traumatology',
    associatedChapterId: 6,
    shortDescription: 'Bone architecture, articular cartilage, fractures, tendon sutures, and pre-antibiotic wound infections.',
    detailedExplanation: 'Musculoskeletal terminology details both biomechanics and soft tissue injuries. "Der Knochen" (bone) is enveloped by "die Knochenhaut" (periosteum) and contains "das Knochenmark" (bone marrow). Joints are "Gelenke" (turnable articulations), cushioned by "Gelenkknorpel" (articular cartilage) and lubricated by "Gelenkschmiere" (synovial fluid). Tendons are "Sehnen", encased in "Sehnenscheiden" (tendon sheaths). Fractures are termed "Knochenbrüche" (bone breaks), and joint dislocations are "Verrenkungen". In the 19th-century traumatology ward, lethal infections included "Wundstarrkrampf" (wound-rigid-spasm = tetanus) and "Brand" (tissue burning / combustion = gangrene).',
    historicalSignificance: 'Ernst Neumann in Königsberg proved in 1868 that blood cells originate inside the bone marrow ("Knochenmark"). Bernhard von Langenbeck and Ernst von Bergmann in Berlin pioneered steam autoclave sterilization and military traumatology, reducing surgical wound sepsis drastically.',
    keyGermanRoots: [
      { root: 'Knochen', gender: 'der', literal: 'bone (os)', english: 'Bone', example: 'Knochenbruch (Fracture)' },
      { root: 'Gelenk', gender: 'das', literal: 'bend / joint', english: 'Joint', example: 'Gelenkentzündung (Arthritis)' },
      { root: 'Sehne', gender: 'die', literal: 'sinew / tendon', english: 'Tendon', example: 'Sehnennaht (Tenorrhaphy)' },
      { root: 'Knochenmark', gender: 'das', literal: 'bone marrow', english: 'Bone marrow', example: 'Knochenmarkpunktion (Marrow biopsy)' },
      { root: 'Wundstarrkrampf', gender: 'der', literal: 'wound-stiff-spasm', english: 'Tetanus', example: 'Wundstarrkrampfspritze (Tetanus shot)' },
      { root: 'Brand', gender: 'der', literal: 'burning fire', english: 'Gangrene', example: 'Trockener Brand (Dry gangrene)' }
    ],
    compoundingRules: [
      'Joint structures prefix "Gelenk-": Gelenkkapsel (joint capsule), Gelenkschmiere (synovia), Gelenkknorpel (articular cartilage).',
      'Traumatic failures append "-bruch": Knochenbruch (fracture), Sehnenabriss (tendon avulsion), Leistenbruch (hernia).',
      'Tetanic rigidity fuses Wunde + starr + Krampf = Wundstarrkrampf (lockjaw/tetanus).'
    ],
    greekLatinEquivalents: [
      { greekLatin: 'Os / Osteon', german: 'Knochen', english: 'Bone' },
      { greekLatin: 'Articulatio / Arthron', german: 'Gelenk', english: 'Joint' },
      { greekLatin: 'Tendo', german: 'Sehne', english: 'Tendon' },
      { greekLatin: 'Cartilago', german: 'Knorpel', english: 'Cartilage' },
      { greekLatin: 'Fractura', german: 'Knochenbruch', english: 'Bone fracture' },
      { greekLatin: 'Gangraena', german: 'Brand', english: 'Gangrene' }
    ]
  },
  {
    id: 'instruments',
    nameGerman: 'Diagnostische Instrumente & Chirurgie',
    nameEnglish: 'Diagnostic Tools & Surgical Instruments',
    associatedChapterId: 7,
    shortDescription: 'Optical specula, forceps, probes, surgical sets, and the instrumentation boom of European clinics.',
    detailedExplanation: 'German instrument terminology is characterized by utilitarian clarity. Optical viewing instruments append the native root "-spiegel" (mirror): "Augenspiegel" (ophthalmoscope), "Kehlkopfspiegel" (laryngoscope), and "Ohrenspiegel" (otoscope). Surgical gripping tools are "Zangen" (tongs / forceps), adapted into "Geburtszange" (obstetrical forceps), "Knochenzange" (rongeur), and "Arterienklemme" (hemostatic clamp). Probes and sounds are "Sonden", while complete surgical suites are termed "Besteck" (e.g. Amputationsbesteck).',
    historicalSignificance: 'German instrument makers in Berlin, Göttingen, and Tuttlingen (Chiron, Aesculap, Storz) set global standards for surgical steel manufacturing in the late 19th century, equipping the operating theaters described throughout Lang’s dictionary.',
    keyGermanRoots: [
      { root: 'Spiegel', gender: 'der', literal: 'mirror / reflector', english: 'Scope / Speculum', example: 'Augenspiegel (Ophthalmoscope)' },
      { root: 'Zange', gender: 'die', literal: 'tongs / pincers', english: 'Forceps', example: 'Geburtszange (Obstetrical forceps)' },
      { root: 'Sonde', gender: 'die', literal: 'sound / plumb-line', english: 'Probe / Sound', example: 'Hohlsonde (Grooved director)' },
      { root: 'Klemme', gender: 'die', literal: 'clamp', english: 'Hemostatic clamp', example: 'Gefäßklemme (Vascular clamp)' },
      { root: 'Besteck', gender: 'das', literal: 'cutlery / set', english: 'Instrument kit', example: 'Besteckkasten (Surgical case)' }
    ],
    compoundingRules: [
      'Endoscopic optical devices end in "-spiegel": Augenspiegel, Kehlkopfspiegel, Blasenspiegel (cystoscope).',
      'Pincers and forceps append "-zange": Kropfzange (goiter forceps), Knochenzange (bone rongeur).',
      'Probing tools append "-sonde": Knochensonde, Wundsonde.'
    ],
    greekLatinEquivalents: [
      { greekLatin: 'Ophthalmoscopium', german: 'Augenspiegel', english: 'Ophthalmoscope' },
      { greekLatin: 'Laryngoscopium', german: 'Kehlkopfspiegel', english: 'Laryngoscope' },
      { greekLatin: 'Forceps', german: 'Zange', english: 'Surgical forceps' },
      { greekLatin: 'Speculum', german: 'Spiegel / Spekulum', english: 'Medical speculum' },
      { greekLatin: 'Catheter / Sound', german: 'Sonde / Katheter', english: 'Medical sound / probe' }
    ]
  },
  {
    id: 'allied',
    nameGerman: 'Verwandte Wissenschaften, Chemie & Pharmazie',
    nameEnglish: 'Allied Sciences, Reagents & Pharmacy',
    associatedChapterId: 7,
    shortDescription: 'Antiseptics, synthetic aniline histological dyes, coal-tar pharmaceuticals, and laboratory standards.',
    detailedExplanation: 'Hugo Lang’s dictionary explicitly incorporates "The Allied Sciences" (Physics, Chemistry, Histology, Botany, Bacteriology). Germany’s chemical sector (BASF, Hoechst, Bayer, Merck in Darmstadt) revolutionized medicine by producing synthetic coal-tar aniline dyes. Compounds like "Methylenblau", "Gentianaviolett", and "Fuchsin" allowed pathologists to stain bacteria and chromosomes differential colors. Antiseptic chemicals such as "Karbolsäure" (carbolic acid / phenol) and "Quecksilbersublimat" (corrosive mercuric sublimate) enabled aseptic surgery and disinfection protocols.',
    historicalSignificance: 'Paul Ehrlich used selective dye affinities to conceptualize receptors and "magic bullets" (Zauberkugeln), synthesizing Salvarsan (Compound 606) in 1909—the first targeted chemotherapeutic antimicrobial.',
    keyGermanRoots: [
      { root: 'Karbolsäure', gender: 'die', literal: 'carbolic acid', english: 'Phenol / Antiseptic', example: 'Karbolspray (Carbolic spray)' },
      { root: 'Sublimat', gender: 'das', literal: 'sublimate', english: 'Mercuric chloride', example: 'Sublimatlösung (Sublimate solution)' },
      { root: 'Äther', gender: 'der', literal: 'ether', english: 'Diethyl ether anesthetic', example: 'Äthernarkose (Ether anesthesia)' },
      { root: 'Farbstoff', gender: 'der', literal: 'color substance', english: 'Histological stain / dye', example: 'Anilinfarbstoff (Aniline dye)' },
      { root: 'Heilkunde', gender: 'die', literal: 'healing lore', english: 'Medical science', example: 'Arzneikunde (Pharmacology)' }
    ],
    compoundingRules: [
      'Chemical acids append "-säure": Karbolsäure (phenol), Salzsäure (hydrochloric acid), Harnsäure (uric acid).',
      'Remedies append "-mittel": Heilmittel (medicine), Betäubungsmittel (narcotic/anesthetic), Desinfektionsmittel (disinfectant).',
      'Disciplines append "-kunde" or "-lehre": Heilkunde (medicine), Wundlehre (surgery/traumatology), Arzneilehre (pharmacology).'
    ],
    greekLatinEquivalents: [
      { greekLatin: 'Acidum carbolicum', german: 'Karbolsäure', english: 'Carbolic acid / Phenol' },
      { greekLatin: 'Hydrargyri perchloridum', german: 'Quecksilbersublimat', english: 'Corrosive sublimate' },
      { greekLatin: 'Aether', german: 'Äther', english: 'Ether' },
      { greekLatin: 'Pharmacon', german: 'Arznei / Heilmittel', english: 'Medication' }
    ]
  }
];
