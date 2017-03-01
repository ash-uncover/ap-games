let COLORS = {
	c1: '#332233',
	c2: '#2255aa',
	c3: '#11bbee',
	c4: '#ccccee',
	c5: '#aa5599',
	c6: '#ffa77b'
};

export default class MasterMindHelper {

	constructor(values) {
	}

	static getColors() {
		return [ COLORS.c1, COLORS.c2, COLORS.c3, COLORS.c4, COLORS.c5, COLORS.c6 ];
	}

	static newSecret(size) {
		size = size || 4;
		var secret = [];
		var colors = MasterMindHelper.getColors();
		for (let i = 0; i < size; i++) {
			secret.push(colors[Math.floor(Math.random() * 6)])
		}
		return secret;
	}
}