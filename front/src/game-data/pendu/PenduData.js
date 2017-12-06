let PenduData = {
    REGEX: /^[a-zA-Z]+$/,
    WORDS: [
        'a',
        'abandonne',
        'abeille',
        'abime',
        'abricot',
        'abriter',
        'absent',
        'accident',
        'accompagner',
        'accoucher',
        'accrocher',
        'acheter',
        'acrobate',
        'adresse',
        'adroit',
        'adulte',
        'aeroport',
        'affaire',
        'affiche',
        'agacer',
        'age',
        'agiter',
        'agneau',
        'aider',
        'aigle',
        'aiguille',
        'ail',
        'aile',
        'aimer',
        'aine',
        'air',
        'ajouter',
        'album',
        'aliment',
        'aller',
        'allonger',
        'allumer',
        'allumette',
        'alphabet',
        'ambulance',
        'amener',
        'ami',
        'amour',
        'ampoule',
        'amusant',
        'amuser',
        'an',
        'ananas',
        'ancien',
        'ane',
        'angle',
        'animal',
        'animaux',
        'annee',
        'anniversaire',
        'anorak',
        'appareil',
        'appartement',
        'appeler',
        'appetit',
        'apporter',
        'appuyer',
        'apres',
        'apres-midi',
        'aquarium',
        'araignee',
        'arbre',
        'arc',
        'arc-en-ciel',
        'arete',
        'argent',
        'armoire',
        'arracher',
        'arret',
        'arreter',
        'arriere',
        'arriver',
        'arroser',
        'arrosoir',
        'ascenseur',
        'aspirateur',
        'asseoir',
        'assez',
        'assiette',
        'assis',
        'attacher',
        'attendre',
        'attention',
        'atterrir',
        'attraper',
        'au',
        'au dela',
        'au-dessus',
        'aujourd’hui',
        'autant',
        'auto',
        'autour',
        'avaler',
        'avancer',
        'avant',
        'avion',
        'bagage',
        'bagarre',
        'bagarrer',
        'bague',
        'baguette',
        'baigner',
        'bailler',
        'bain',
        'baiser',
        'baisser',
        'balai',
        'balancer',
        'balançoire',
        'balayer',
        'balcon',
        'baleine',
        'balle',
        'ballon',
        'banane',
        'banc',
        'bande',
        'bande dessinee',
        'barbe',
        'barboter',
        'barbouille',
        'barque',
        'barre',
        'barreau',
        'barrer',
        'barrette',
        'bas',
        'bassin',
        'bassine',
        'bateau',
        'baton',
        'battre',
        'baver',
        'bavoir',
        'beau',
        'beaucoup',
        'bebe',
        'bec',
        'belle',
        'bercer',
        'bete',
        'betise',
        'beurre',
        'biberon',
        'bibliotheque',
        'bicyclette',
        'bien',
        'bientot',
        'bifteck',
        'bijou',
        'bille',
        'billet',
        'biscuit',
        'bisou',
        'bizarre',
        'blanc',
        'blesser',
        'bleu',
        'blond',
        'blottir',
        'boeuf',
        'boire',
        'bois',
        'boisson',
        'boite',
        'bol',
        'bon',
        'bonbon',
        'bondir',
        'bonhomme',
        'bonnet',
        'bord',
        'bosse',
        'bosser',
        'botte',
        'bouche',
        'boucher',
        'boucherie',
        'bouchon',
        'bouder',
        'boue',
        'bouee',
        'bouger',
        'bouillir',
        'boulanger',
        'boulangerie',
        'boule',
        'bouquet',
        'bourgeon',
        'bousculer',
        'bout',
        'bouteille',
        'boutique',
        'bouton',
        'bracelet',
        'branche',
        'bras',
        'bretelle',
        'bricolage',
        'briller',
        'brosse',
        'brouette',
        'brouillard',
        'bruit',
        'bruler',
        'brun',
        'buche',
        'buisson',
        'bulle',
        'bureau',
        'bus',
        'cabane',
        'cabinet',
        'cache',
        'cacher',
        'cadeau',
        'cadenas',
        'cadre',
        'cafe',
        'cage',
        'cagoule',
        'cahier',
        'caillou',
        'caisse',
        'calendrier',
        'calin',
        'caliner',
        'calme',
        'camarade',
        'camescope',
        'camion',
        'camp',
        'campagne',
        'camper',
        'canape',
        'canard',
        'caniveau',
        'canne',
        'canne a peche',
        'caprice',
        'car',
        'carabistouille',
        'caravane',
        'caresse',
        'caresser',
        'carnet',
        'carotte',
        'carreau',
        'carrefour',
        'cartable',
        'carton',
        'casier',
        'casque',
        'casquette',
        'casse',
        'casser',
        'casserole',
        'cassette',
        'catalogue',
        'cauchemar',
        'cave',
        'cede',
        'cederom',
        'ceinture',
        'cerceau',
        'cereale',
        'cerf',
        'cerf-volant',
        'cerise',
        'chaine',
        'chaise',
        'chambre',
        'champ',
        'champignon',
        'chance',
        'changeant',
        'changer',
        'chanson',
        'chanter',
        'chapeau',
        'charcuterie',
        'charger',
        'chariot',
        'chasser',
        'chasseur',
        'chat',
        'chataigne',
        'chateau',
        'chaud',
        'chauffer',
        'chausser',
        'chaussette',
        'chausson',
        'chaussure',
        'chemin',
        'cheminee',
        'chemise',
        'chene',
        'chenille',
        'cher',
        'chercher',
        'cheval',
        'cheveu',
        'cheville',
        'chevre',
        'chez',
        'chien',
        'chiffon',
        'chiffre',
        'chocolat',
        'choisir',
        'chose',
        'chou',
        'chouette',
        'chuchoter',
        'chute',
        'ciel',
        'cigarette',
        'cigogne',
        'cil',
        'cimetiere',
        'cinema',
        'cinq',
        'cirque',
        'ciseaux',
        'citron',
        'citrouille',
        'clair',
        'classe',
        'cle',
        'clementine',
        'clignoter',
        'clin d’oeil',
        'cloche',
        'clocher',
        'clou',
        'clown',
        'coccinelle',
        'cochon',
        'cocotte',
        'coeur',
        'coffre',
        'coffret',
        'cogner',
        'coiffer',
        'coiffeur',
        'coin',
        'col',
        'colere',
        'collant',
        'colle',
        'coller',
        'collier',
        'colline',
        'coloriage',
        'colorier',
        'commencer',
        'comparer',
        'compter',
        'concombre',
        'conduire',
        'confiture',
        'confortable',
        'consoler',
        'consomme',
        'construire',
        'conte',
        'content',
        'continuer',
        'contraire',
        'contre',
        'copain',
        'copier',
        'coq',
        'coquelicot',
        'coquet',
        'coquetier',
        'coquillage',
        'coquille',
        'coquin',
        'corbeau',
        'corbeille',
        'corde',
        'corps',
        'cote',
        'cou',
        'couche',
        'coucher',
        'coude',
        'coudre',
        'couette',
        'couleur',
        'couloir',
        'coup',
        'couper',
        'cour',
        'courir',
        'couronne',
        'courrier',
        'course',
        'court',
        'cousin',
        'cousine',
        'coussin',
        'couteau',
        'couter',
        'couver',
        'couvercle',
        'couvert',
        'couverture',
        'couvrir',
        'crabe',
        'cracher',
        'craie',
        'crapaud',
        'cravate',
        'crayon',
        'creche',
        'crepe',
        'creuser',
        'creux',
        'crevette',
        'cri',
        'crier',
        'crochet',
        'crocodile',
        'croiser',
        'croix',
        'croquer',
        'croute',
        'cru',
        'cruel',
        'cube',
        'cueillir',
        'cuillere',
        'cuire',
        'cuisine',
        'cuisiner',
        'cuisiniere',
        'cuisse',
        'cuit',
        'culotte',
        'curieux',
        'cuvette',
        'cygne',
        'dame',
        'danger',
        'dangereux',
        'dans',
        'danse',
        'danser',
        'dauphin',
        'de',
        'deborder',
        'debout',
        'debut',
        'dechirer',
        'decoller',
        'decorer',
        'decoupage',
        'decouper',
        'dedans',
        'defendre',
        'defiler',
        'degonfler',
        'deguisement',
        'deguiser',
        'dehors',
        'delicieux',
        'demain',
        'demander',
        'demarrer',
        'demenager',
        'demi',
        'demolir',
        'dent',
        'dentifrice',
        'dentiste',
        'depart',
        'depasser',
        'depecher',
        'deranger',
        'dernier',
        'derriere',
        'descendre',
        'deshabiller',
        'desobeir',
        'desordre',
        'dessert',
        'dessin',
        'dessiner',
        'dessous',
        'dessus',
        'detester',
        'detruire',
        'deux',
        'deuxieme',
        'devant',
        'devoir',
        'deçu',
        'dictionnaire',
        'difference',
        'different',
        'difficile',
        'dimanche',
        'dindon',
        'diner',
        'dinette',
        'dinosaure',
        'dire',
        'directeur',
        'directrice',
        'discuter',
        'disparaitre',
        'disputer',
        'distribuer',
        'dix',
        'docteur',
        'doigt',
        'domino',
        'donner',
        'dormir',
        'dos',
        'dossier',
        'douche',
        'doucher',
        'douillet',
        'doux',
        'drap',
        'drapeau',
        'droit',
        'droite',
        'drole',
        'du',
        'dur',
        'd’abord',
        'eau',
        'ecarter',
        'echanger',
        'echapper',
        'echarpe',
        'echasse',
        'echelle',
        'eclabousser',
        'eclair',
        'eclairer',
        'eclater',
        'ecole',
        'ecorce',
        'ecorcher',
        'ecouter',
        'ecran',
        'ecraser',
        'ecrire',
        'ecriture',
        'ecureuil',
        'effacer',
        'effort',
        'effraye',
        'egal',
        'eglise',
        'elastique',
        'electrique',
        'elephant',
        'eleve',
        'elever',
        'eloigner',
        'embouteillage',
        'embrasser',
        'emmener',
        'empecher',
        'emporter',
        'enceinte',
        'encore',
        'endive',
        'endormir',
        'endroit',
        'enerve',
        'enfant',
        'enfermer',
        'enfiler',
        'enfoncer',
        'engin',
        'enlever',
        'ennuyer',
        'enorme',
        'ensemble',
        'entendre',
        'enterrer',
        'entier',
        'entonnoir',
        'entourer',
        'entree',
        'entrer',
        'enveloppe',
        'envers',
        'envie',
        'envoler',
        'envoyer',
        'epais',
        'epaule',
        'epee',
        'epingle',
        'eplucher',
        'epluchure',
        'eponge',
        'equipe',
        'escabeau',
        'escalader',
        'escalier',
        'escargot',
        'essayer',
        'essence',
        'essuyer',
        'etagere',
        'etaler',
        'etang',
        'ete',
        'eteindre',
        'eternuer',
        'etiquette',
        'etoile',
        'etroit',
        'etude',
        'etudier',
        'evier',
        'excuser',
        'expliquer',
        'exterieur',
        'fabriquer',
        'face',
        'facher',
        'facile',
        'facteur',
        'faim',
        'faire',
        'faire beau',
        'falloir',
        'faner',
        'farce',
        'farine',
        'fatigue',
        'faute',
        'fauteuil',
        'fee',
        'femme',
        'fenetre',
        'ferme',
        'fermer',
        'fermier',
        'fesse',
        'fete',
        'feu',
        'feuille',
        'feutre',
        'feve',
        'ficelle',
        'fievre',
        'figure',
        'fil',
        'filet',
        'fille',
        'film',
        'fin',
        'finir',
        'flamme',
        'flaque',
        'fleche',
        'fleur',
        'fleuriste',
        'flocon',
        'flotter',
        'foin',
        'foire',
        'fois',
        'fonce',
        'fond',
        'fontaine',
        'foret',
        'forme : carre',
        'fort',
        'fou',
        'fouiller',
        'four',
        'fourchette',
        'fourmi',
        'fraise',
        'framboise',
        'frange',
        'frapper',
        'frein',
        'frere',
        'frite',
        'froid',
        'fromage',
        'front',
        'frotter',
        'fruit',
        'fumee',
        'fumer',
        'fusee',
        'fusil',
        'gagner',
        'galette',
        'galoper',
        'gant',
        'garage',
        'garder',
        'gardien',
        'gare',
        'garer',
        'garçon',
        'gateau',
        'gauche',
        'geant',
        'gele',
        'geler',
        'gener',
        'genou',
        'gens',
        'gentil',
        'girafe',
        'glace',
        'glaçon',
        'glisser',
        'gobelet',
        'gomme',
        'gonfler',
        'gorge',
        'gourde',
        'gourmand',
        'gout',
        'gouter',
        'goutte',
        'grain',
        'graine',
        'grand',
        'grand-mere',
        'grand-parent',
        'grand-pere',
        'grandir',
        'gratter',
        'grenouille',
        'griffe',
        'griffer',
        'grignoter',
        'griller',
        'grimace',
        'grimper',
        'gris',
        'gronder',
        'gros',
        'grotte',
        'groupe',
        'grue',
        'guepe',
        'gueri',
        'guerir',
        'guetter',
        'guirlande',
        'gymnastique',
        'habiller',
        'habit',
        'habiter',
        'hamster',
        'hanche',
        'handicape',
        'haricot',
        'haut',
        'helicoptere',
        'herbe',
        'herisson',
        'hesiter',
        'heure',
        'heureux',
        'hibou',
        'hier',
        'hippopotame',
        'hirondelle',
        'histoire',
        'hiver',
        'homme',
        'hopital',
        'horloge',
        'hotel',
        'huile',
        'huit',
        'humeur',
        'humide',
        'hurler',
        'ici',
        'idee',
        'ile',
        'image',
        'imaginer',
        'imiter',
        'immense',
        'immeuble',
        'immobile',
        'important',
        'impossible',
        'incendie',
        'infirmier',
        'infirmiere',
        'inonder',
        'insecte',
        'inseparable',
        'instable',
        'installer',
        'instrument',
        'interessant',
        'interieur',
        'intrus',
        'invitation',
        'inviter',
        'jaloux',
        'jamais',
        'jambe',
        'jambon',
        'jardin',
        'jardiner',
        'jaune',
        'jean',
        'jeter',
        'jeu',
        'jeudi',
        'jeune',
        'joie',
        'joli',
        'jongler',
        'jonquille',
        'joue',
        'jouer',
        'jouet',
        'jour',
        'journaux',
        'journee',
        'joyeux',
        'jumeau',
        'jumelles',
        'jupe',
        'jus',
        'kangourou',
        'kiwi',
        'la',
        'lac',
        'lacer',
        'lacet',
        'lacher',
        'laine',
        'laisse',
        'laisser',
        'lait',
        'lame',
        'lampe',
        'lancer',
        'langue',
        'lapin',
        'large',
        'larme',
        'lavabo',
        'lave-linge',
        'laver',
        'lecher',
        'lecture',
        'leger',
        'legume',
        'lent',
        'lessive',
        'lettre',
        'lever',
        'levre',
        'lezard',
        'ligne',
        'linge',
        'lion',
        'liquide',
        'lire',
        'lisse',
        'liste',
        'lit',
        'litre',
        'livre',
        'loin',
        'long',
        'louche',
        'loup',
        'loupe',
        'lourd',
        'luge',
        'lumiere',
        'lundi',
        'lune',
        'lunettes',
        'lutin',
        'machine',
        'madame',
        'magasin',
        'magazine',
        'magicien',
        'magie',
        'magnetoscope',
        'maigre',
        'maillot',
        'main',
        'maintenant',
        'maison',
        'maitre',
        'maitresse',
        'mal',
        'malade',
        'maladie',
        'maladroit',
        'maman',
        'manche',
        'manege',
        'manger',
        'manquer',
        'manteau',
        'maquillage',
        'maquiller',
        'marchand',
        'marche',
        'marcher',
        'mardi',
        'mare',
        'marguerite',
        'mari',
        'mariage',
        'marier',
        'marin',
        'marionnette',
        'marron',
        'marteau',
        'masque',
        'matelas',
        'maternelle',
        'matin',
        'mauvais',
        'mechant',
        'medecin',
        'medicament',
        'meilleur',
        'melanger',
        'melon',
        'meme',
        'menage',
        'mensonge',
        'menton',
        'mer',
        'mercredi',
        'mere',
        'mesurer',
        'metal',
        'meteo',
        'metre',
        'mettre',
        'meuble',
        'micro',
        'midi',
        'mie',
        'miel',
        'mieux',
        'milieu',
        'mince',
        'mine',
        'minuit',
        'minute',
        'mixer',
        'modele',
        'moineau',
        'moins',
        'mois',
        'moitie',
        'moment',
        'monde',
        'monnaie',
        'monsieur',
        'montagne',
        'monter',
        'montre',
        'montrer',
        'monument',
        'moquer',
        'morceau',
        'morceau de pain',
        'mordre',
        'mort',
        'mot',
        'moteur',
        'moto',
        'mouche',
        'moucher',
        'mouchoir',
        'mouette',
        'moufle',
        'mouille',
        'mouiller',
        'moule',
        'moulin',
        'mourir',
        'mousse',
        'moustache',
        'moustique',
        'mouton',
        'moyen',
        'muet',
        'muguet',
        'multicolore',
        'mur',
        'mur d’escalade',
        'mure',
        'muscle',
        'musique',
        'nager',
        'nain',
        'naitre',
        'nappe',
        'navet',
        'navire',
        'ne',
        'neige',
        'neiger',
        'nettoyer',
        'neuf',
        'nez',
        'nid',
        'noel',
        'noeud',
        'noir',
        'noisette',
        'noix',
        'nom',
        'nombre',
        'nourrir',
        'nourriture',
        'nouveau',
        'noyau',
        'noyer',
        'nu',
        'nuage',
        'nuageux',
        'nuit',
        'numero',
        'obeir',
        'objet',
        'obliger',
        'occuper de',
        'odeur',
        'oeil',
        'oeuf',
        'offrir',
        'ogre',
        'oie',
        'oignon',
        'oiseau',
        'ombre',
        'ongle',
        'or',
        'orage',
        'orange',
        'orchestre',
        'ordinateur',
        'ordonnance',
        'ordre',
        'oreille',
        'oreiller',
        'os',
        'oublier',
        'ouragan',
        'ours',
        'outil',
        'ouvrier',
        'ouvrir',
        'page',
        'paille',
        'pain',
        'paire',
        'paix',
        'palais',
        'pale',
        'pamplemousse',
        'panda',
        'panier',
        'panne',
        'panneau',
        'pansement',
        'pantalon',
        'panthere',
        'papa',
        'papier',
        'papillon',
        'paquerette',
        'paquet',
        'parapluie',
        'parasol',
        'parc',
        'parcours',
        'pardon',
        'pareil',
        'parent',
        'parfum',
        'parking',
        'parler',
        'part',
        'partager',
        'partie',
        'partir',
        'pas',
        'passage',
        'passer',
        'passerelle',
        'patauger',
        'pate',
        'pate a modeler',
        'patient',
        'patisserie',
        'patte',
        'payer',
        'pays',
        'paysage',
        'peau',
        'peche',
        'pecheur',
        'pedale',
        'pedaler',
        'peigne',
        'peindre',
        'peinture',
        'pelle',
        'peluche',
        'pencher',
        'pendule',
        'penser',
        'pente',
        'percer',
        'percher',
        'perdre',
        'pere',
        'perle',
        'perroquet',
        'persil',
        'personne',
        'peser',
        'petit',
        'petit pois',
        'petit-enfant',
        'petit-fils',
        'petite-fille',
        'peu',
        'peur',
        'pharmacie',
        'pharmacien',
        'phoque',
        'photo',
        'photographier',
        'pied',
        'pierre',
        'pigeon',
        'pile',
        'pilote',
        'pin',
        'pinceau',
        'pincer',
        'pion',
        'pique-niquer',
        'piquer',
        'piqure',
        'piscine',
        'placard',
        'place',
        'plafond',
        'plage',
        'plaindre',
        'plaire',
        'planche',
        'plante',
        'planter',
        'plat',
        'plateau',
        'platre',
        'plein',
        'pleurer',
        'pleuvoir',
        'pli',
        'pliage',
        'plier',
        'plongeoir',
        'plonger',
        'pluie',
        'plume',
        'plus',
        'pluvieux',
        'pneu',
        'poche',
        'poele',
        'poignet',
        'poing',
        'point',
        'pointe',
        'pointu',
        'poire',
        'poireau',
        'poison',
        'poisson',
        'poli',
        'police',
        'policier',
        'pomme',
        'pomme de terre',
        'pompe',
        'pompier',
        'poney',
        'pont',
        'port',
        'porte',
        'portemanteau',
        'porter',
        'portiere',
        'poser',
        'poste',
        'poster',
        'pot',
        'potage',
        'poubelle',
        'pouce',
        'pouf',
        'poule',
        'poulet',
        'poupee',
        'poursuivre',
        'pousser',
        'poussette',
        'poussiere',
        'poussin',
        'poutre d’equilibre',
        'pouvoir',
        'prairie',
        'preau',
        'preferer',
        'premier',
        'prendre',
        'prenom',
        'preparer',
        'pres',
        'present',
        'presque',
        'presser',
        'pret',
        'preter',
        'prince',
        'princesse',
        'prise',
        'priver',
        'prix',
        'profond',
        'promenade',
        'promener',
        'promettre',
        'propre',
        'proteger',
        'prudent',
        'prune',
        'puis',
        'pull-over',
        'punir',
        'puree',
        'puzzle',
        'pyjama',
        'quai',
        'quartier',
        'quatre',
        'question',
        'queue',
        'quitter',
        'raconter',
        'radiateur',
        'radio',
        'radis',
        'raisin',
        'ramasser',
        'ramer',
        'rampe',
        'ramper',
        'rang',
        'rangee',
        'ranger',
        'rape',
        'raper',
        'rapide',
        'rappeler',
        'raquette',
        'raser',
        'rasoir',
        'rat',
        'rateau',
        'rater',
        'rayon',
        'rayure',
        'recette',
        'recevoir',
        'rechauffer',
        'reciter',
        'recommencer',
        'reconnaitre',
        'recoudre',
        'recreation',
        'reculer',
        'refrigerateur',
        'refuser',
        'regaler',
        'regard',
        'regarder',
        'reine',
        'remercier',
        'remettre',
        'remplacer',
        'remplir',
        'remuer',
        'renard',
        'rencontrer',
        'rendre',
        'rentree',
        'rentrer',
        'renverser',
        'reparer',
        'repas',
        'repasser',
        'repeter',
        'repondre',
        'reposer',
        'requin',
        'respirer',
        'ressembler',
        'restaurant',
        'rester',
        'retard',
        'retarder',
        'retour',
        'retourner',
        'retrouver',
        'reussir',
        'reveil',
        'reveiller',
        'revenir',
        'rever',
        'revoir',
        'rhinoceros',
        'riche',
        'rideau',
        'rire',
        'riviere',
        'riz',
        'robe',
        'robinet',
        'rocher',
        'roi',
        'rond',
        'rondelle',
        'ronfler',
        'ronger',
        'rose',
        'roue',
        'rouge',
        'roulade',
        'rouleau',
        'rouler',
        'route',
        'roux',
        'ruban',
        'rue',
        'rugueux',
        'sable',
        'sac',
        'sage',
        'saigner',
        'saison',
        'salade',
        'saladier',
        'sale',
        'salir',
        'salle',
        'saluer',
        'samedi',
        'sang',
        'sante',
        'sapin',
        'sardine',
        'saut',
        'sauter',
        'sauver',
        'savoir',
        'savon',
        'scie',
        'seau',
        'sec',
        'secher',
        'secouer',
        'sel',
        'semaine',
        'semelle',
        'sens',
        'sentir',
        'separer',
        'sept',
        'serieux',
        'serpent',
        'serre',
        'serrer',
        'serrure',
        'serviette',
        'servir',
        'seul',
        'shampoing',
        'siege',
        'sieste',
        'siffler',
        'sifflet',
        'signe',
        'silence',
        'singe',
        'six',
        'ski',
        'soeur',
        'soif',
        'soigner',
        'soir',
        'sol',
        'soldat',
        'sole',
        'soleil',
        'solide',
        'sombre',
        'sommeil',
        'sommet',
        'sonner',
        'sonnette',
        'sorciere',
        'sortie',
        'sortir',
        'souffler',
        'souffrir',
        'souhaiter',
        'soulever',
        'souligner',
        'soupe',
        'souple',
        'sourcil',
        'sourd',
        'sourire',
        'souris',
        'sous',
        'souvent',
        'spectacle',
        'sport',
        'square',
        'squelette',
        'stylo',
        'sucer',
        'sucre',
        'suivant',
        'suivre',
        'sur',
        'surprise',
        'surveiller',
        'table',
        'tableau',
        'tablier',
        'tabouret',
        'tache',
        'taille',
        'taille-crayon',
        'tailler',
        'taire',
        'talon',
        'tambour',
        'tampon',
        'taper',
        'tapis',
        'tard',
        'tarte',
        'tartine',
        'tas',
        'tasse',
        'tater',
        'taupe',
        'telecommande',
        'telephone',
        'telephoner',
        'television',
        'tempete',
        'temps',
        'tendre',
        'tenir',
        'tente',
        'terminer',
        'terrain',
        'terre',
        'terrible',
        'terrier',
        'tete',
        'teter',
        'the',
        'thermometre',
        'ticket',
        'tige',
        'tigre',
        'timbre',
        'tirer',
        'tiroir',
        'tissu',
        'titre',
        'toboggan',
        'toilette',
        'toit',
        'tomate',
        'tomber',
        'tonnerre',
        'torchon',
        'tordu',
        'tortue',
        'tot',
        'toucher',
        'toujours',
        'tour',
        'tourner',
        'tournevis',
        'tousser',
        'tracteur',
        'train',
        'traineau',
        'trainer',
        'traire',
        'trait',
        'trampoline',
        'tranche',
        'tranquille',
        'transparent',
        'transpirer',
        'transporter',
        'travail',
        'travailler',
        'travaux',
        'traverser',
        'trembler',
        'tremper',
        'tresor',
        'tricher',
        'tricot',
        'tricoter',
        'tricycle',
        'trier',
        'triste',
        'trois',
        'troisieme',
        'tromper',
        'trompette',
        'trop',
        'trottoir',
        'trou',
        'trouer',
        'trousse',
        'trouver',
        'tube',
        'tuer',
        'tulipe',
        'tunnel',
        'tuyau',
        'un',
        'uniforme',
        'univers',
        'use',
        'usine',
        'utile',
        'vacances',
        'vache',
        'vague',
        'vaisselle',
        'valise',
        'vase',
        'vehicule',
        'velo',
        'vendre',
        'vendredi',
        'venir',
        'vent',
        'venter',
        'ventre',
        'ver',
        'verre',
        'verser',
        'vert',
        'veste',
        'vetement',
        'veterinaire',
        'viande',
        'vide',
        'vider',
        'vieux',
        'village',
        'ville',
        'vin',
        'virage',
        'vis',
        'visage',
        'visiter',
        'vite',
        'vitesse',
        'vitre',
        'vivant',
        'vivre',
        'voile',
        'voir',
        'voisin',
        'voiture',
        'voix',
        'voler',
        'volet',
        'vouloir',
        'voyage',
        'voyager',
        'wagon',
        'xylophone',
        'yaourt',
        'yeux',
        'zebre',
        'zero',
        'zigzag',
        'zoo'
    ]
}

export default PenduData