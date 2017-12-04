let DobbleGame = {}

DobbleGame.SYMBOLS = [
	{ id: '00', category: 'green', name: 'Peinture' },
	{ id: '01', category: 'green', name: 'Dinosaure' },
	{ id: '02', category: 'green', name: 'Art', name2: 'Tortue' },
	{ id: '03', category: 'green', name: 'Carotte' },
	{ id: '04', category: 'green', name: 'Arbre' },
	{ id: '05', category: 'green', name: 'Cactus' },
	{ id: '06', category: 'green', name: 'Trefle' },
	{ id: '07', category: 'green', name: 'Pomme' },
	{ id: '08', category: 'green', name: "Point d'interrogation" },
	{ id: '09', category: 'purple', name: 'Chat' },
	{ id: '10', category: 'purple', name: 'Dragon' },
	{ id: '11', category: 'purple', name: 'Ciseaux' },
	{ id: '12', category: 'purple', name: 'Ok', name2: 'Oiseau' },
	{ id: '13', category: 'purple', name: "Toile d'arraignée" },
	{ id: '14', category: 'purple', name: 'Oeil' },
	{ id: '15', category: 'purple', name: 'Dobble' },
	{ id: '16', category: 'purple', name: 'Bougie' },
	{ id: '17', category: 'orange', name: 'Voiture' },
	{ id: '18', category: 'orange', name: 'Marteau' },
	{ id: '19', category: 'orange', name: 'Clé de sol' },
	{ id: '20', category: 'orange', name: 'Biberon' },
	{ id: '21', category: 'orange', name: 'Ancre' },
	{ id: '22', category: 'orange', name: 'Bonhomme' },
	{ id: '23', category: 'orange', name: 'Horloge' },
	{ id: '24', category: 'orange', name: 'Clé' },
	{ id: '25', category: 'bleu', name: 'Glacon' },
	{ id: '26', category: 'bleu', name: 'Dauphin' },
	{ id: '27', category: 'bleu', name: 'Fantôme' },
	{ id: '28', category: 'bleu', name: 'Bonhomme de neige' },
	{ id: '29', category: 'bleu', name: 'Crayon' },
	{ id: '30', category: 'bleu', name: 'Igloo' },
	{ id: '31', category: 'bleu', name: "Goutte d'eau" },
	{ id: '32', category: 'bleu', name: 'Flocon' },
	{ id: '33', category: 'rouge', name: 'Cible' },
	{ id: '34', category: 'rouge', name: 'Clown' },
	{ id: '35', category: 'rouge', name: 'Coeur' },
	{ id: '36', category: 'rouge', name: "Feuille d'érable" },
	{ id: '37', category: 'rouge', name: 'Lèvres' },
	{ id: '38', category: 'rouge', name: 'Feu' },
	{ id: '39', category: 'rouge', name: 'Coccinelle' },
	{ id: '40', category: 'rouge', name: 'Sens interdit' },
	{ id: '41', category: 'yellow', name: 'Chien' },
	{ id: '42', category: 'yellow', name: 'Soleil' },
	{ id: '43', category: 'yellow', name: 'Eclair' },
	{ id: '44', category: 'yellow', name: 'Ampoule' },
	{ id: '45', category: 'yellow', name: 'Lune' },
	{ id: '46', category: 'yellow', name: "Point d'exclamation" },
	{ id: '47', category: 'yellow', name: 'Fromage' },
	{ id: '48', category: 'yellow', name: 'Fleur' },
	{ id: '49', category: 'black', name: 'Zèbre' },
	{ id: '50', category: 'black', name: 'Verrou' },
	{ id: '51', category: 'black', name: 'YingYang' },
    { id: '52', category: 'black', name: 'Arraignée' },
	{ id: '53', category: 'black', name: 'Tête de mort' },
	{ id: '54', category: 'black', name: 'Cavalier' },
	{ id: '55', category: 'black', name: 'Lunettes' },
	{ id: '56', category: 'black', name: 'Bombe' }
]

DobbleGame.CARDS = [
	{
		id: '00',
		symbols: [
            { id: 12, coords: '105,740,273,903,353,812,348,711,241,650,169,644' },
            { id: 2,  coords: '598,810,633,727,705,650,764,586,897,660,849,804,737,916,646,922' },
            { id: 1,  coords: '254,127,388,226,505,292,548,266,580,199,542,119,486,50,422,52,345,66' },
            { id: 21, coords: '625,455,713,388,830,311,924,380,948,471,913,591,876,615,734,570,646,546' },
            { id: 26, coords: '321,924,390,943,412,927,452,959,513,935,513,834,585,791,620,714,662,684,702,644,684,612,534,575,444,626,390,666,374,687,393,727,372,786,377,842' },
            { id: 7, coords: '193,610,257,644,326,652,385,644,446,610,449,522,430,455,369,412,281,402,185,426,153,570' },
            { id: 27, coords: '249,380,361,386,454,391,484,319,452,279,393,247,238,196,153,218,116,290,118,396' },
            { id: 39, coords: '484,418,572,482,612,458,660,418,745,343,732,258,668,218,601,218,556,266,510,330' }
        ]
	}
]


export default DobbleGame