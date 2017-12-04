let DobbleGame = {}

DobbleGame.SYMBOLS = {
	SYMBOL_01: { id: '01', category: 'green', name: 'Peinture' },
	SYMBOL_02: { id: '02', category: 'green', name: 'Dinosaure' },
	SYMBOL_03: { id: '03', category: 'green', name: 'Tortue' },
	SYMBOL_04: { id: '04', category: 'green', name: 'Carotte' },
	SYMBOL_05: { id: '05', category: 'green', name: 'Arbre' },
	SYMBOL_06: { id: '06', category: 'green', name: 'Cactus' },
	SYMBOL_07: { id: '07', category: 'green', name: 'Trefle' },
	SYMBOL_08: { id: '08', category: 'green', name: 'Pomme' },
	SYMBOL_09: { id: '09', category: 'green', name: "Point d'interrogation" },
	SYMBOL_10: { id: '10', category: 'purple', name: 'Chat' },
	SYMBOL_11: { id: '11', category: 'purple', name: 'Dragon' },
	SYMBOL_12: { id: '12', category: 'purple', name: 'Ciseaux' },
	SYMBOL_13: { id: '13', category: 'purple', name: 'Oiseau' },
	SYMBOL_14: { id: '14', category: 'purple', name: "Toile d'arraignée" },
	SYMBOL_15: { id: '15', category: 'purple', name: 'Oeil' },
	SYMBOL_16: { id: '16', category: 'purple', name: 'Dobble' },
	SYMBOL_17: { id: '17', category: 'purple', name: 'Bougie' },
	SYMBOL_18: { id: '18', category: 'orange', name: 'Voiture' },
	SYMBOL_19: { id: '19', category: 'orange', name: 'Marteau' },
	SYMBOL_20: { id: '20', category: 'orange', name: 'Clé de sol' },
	SYMBOL_21: { id: '21', category: 'orange', name: 'Biberon' },
	SYMBOL_22: { id: '22', category: 'orange', name: 'Ancre' },
	SYMBOL_23: { id: '23', category: 'orange', name: 'Bonhomme' },
	SYMBOL_24: { id: '24', category: 'orange', name: 'Horloge' },
	SYMBOL_25: { id: '25', category: 'orange', name: 'Clé' },
	SYMBOL_26: { id: '26', category: 'bleu', name: 'Glacon' },
	SYMBOL_27: { id: '27', category: 'bleu', name: 'Dauphin' },
	SYMBOL_28: { id: '28', category: 'bleu', name: 'Fantôme' },
	SYMBOL_29: { id: '29', category: 'bleu', name: 'Bonhomme de neige' },
	SYMBOL_30: { id: '30', category: 'bleu', name: 'Crayon' },
	SYMBOL_31: { id: '31', category: 'bleu', name: 'Igloo' },
	SYMBOL_32: { id: '32', category: 'bleu', name: "Goutte d'eau" },
	SYMBOL_33: { id: '33', category: 'bleu', name: 'Flocon' },
	SYMBOL_34: { id: '34', category: 'rouge', name: 'Cible' },
	SYMBOL_35: { id: '35', category: 'rouge', name: 'Clown' },
	SYMBOL_36: { id: '36', category: 'rouge', name: 'Coeur' },
	SYMBOL_37: { id: '37', category: 'rouge', name: "Feuille d'érable" },
	SYMBOL_38: { id: '38', category: 'rouge', name: 'Lèvres' },
	SYMBOL_39: { id: '39', category: 'rouge', name: 'Feu' },
	SYMBOL_40: { id: '40', category: 'rouge', name: 'Coccinelle' },
	SYMBOL_41: { id: '41', category: 'rouge', name: 'Sens interdit' },
	SYMBOL_42: { id: '42', category: 'yellow', name: 'Chien' },
	SYMBOL_43: { id: '43', category: 'yellow', name: 'Soleil' },
	SYMBOL_44: { id: '44', category: 'yellow', name: 'Eclair' },
	SYMBOL_45: { id: '45', category: 'yellow', name: 'Ampoule' },
	SYMBOL_46: { id: '46', category: 'yellow', name: 'Lune' },
	SYMBOL_47: { id: '47', category: 'yellow', name: "Point d'exclamation" },
	SYMBOL_48: { id: '48', category: 'yellow', name: 'Fromage' },
	SYMBOL_49: { id: '49', category: 'yellow', name: 'Fleur' },
	SYMBOL_50: { id: '50', category: 'black', name: 'Zèbre' },
	SYMBOL_51: { id: '51', category: 'black', name: 'Verrou' },
	SYMBOL_52: { id: '52', category: 'black', name: 'YingYang' },
	SYMBOL_53: { id: '53', category: 'black', name: 'Arraignée' },
	SYMBOL_54: { id: '54', category: 'black', name: 'Tête de mort' },
	SYMBOL_55: { id: '55', category: 'black', name: 'Cavalier' },
	SYMBOL_56: { id: '56', category: 'black', name: 'Lunettes' },
	SYMBOL_57: { id: '57', category: 'black', name: 'Bombe' }
}

DobbleGame.CARDS = {
	CARD_01: {
		id: '01',
		symbols: [s('07'),s('10'),s('37'),s('43'),s('42'),s('13'),s('18'),s('35')]
	},
	CARD_02: {
		id: '02',
		symbols: [s('10'),s('48'),s('54'),s('46'),s('11'),s('02'),s('20'),s('56')]
	}
}

function s(index) {
	return DobbleGame.SYMBOLS['SYMBOL_' + index]
}

export default DobbleGame