let SIZES = {
	x2: { size: 2, square: 4, total: 16 },
	x3: { size: 3, square: 9, total: 81 },
	x4: { size: 4, square: 16, total: 256 }
};

export default class SudokuHelper {

	constructor(values) {
		var l = values.length;
		if (l === SIZES.x2.total) this.size = SIZES.x2;
		if (l === SIZES.x3.total) this.size = SIZES.x3;
		if (l === SIZES.x4.total) this.size = SIZES.x4;
		if (!this.size) throw 'Invalid values: ' + l;
		this.values = [];
		for (let i = 0; i < this.size.square; i++) {
			this.values.push([]);
		}
		for (let i = 0; i < this.size.total; i++) {
			let v = values.charAt(i);
			var x = Math.floor(i / this.size.square);
			this.values[x].push({
				value: v !== '0' ? Number(v) : 0,
				state: v !== '0' ? 'initial' : null
			});
		}
	}

	static checkGrid(grid) {
		// Build sets
		let rows = [[], [], [], [], [], [], [], [], []];
		let cols = [[], [], [], [], [], [], [], [], []];
		let subs = [[], [], [], [], [], [], [], [], []];
		for (let i = 0; i < 9; i++) {
			for (let j = 0; j < 9; j++) {
				rows[i].push(grid[i][j].value);
				cols[i].push(grid[j][i].value);
				subs[Math.floor(i/3) * 3 + Math.floor(j/3)].push(grid[i][j].value)
			}
		}
		// Check validity
		let valid = true;
		for (let i = 0; i < 9 && valid; i++) {
			valid &= SudokuHelper.checkArray(rows[i]) && SudokuHelper.checkArray(cols[i]) && SudokuHelper.checkArray(subs[i]);
		}
		// Set valid state
		if (valid) {
			for (let i = 0; i < 9; i++) {
				for (let j = 0; j < 9; j++) {
					if (!grid[i][j].state) {
						grid[i][j].state = 'success';
					}
				}
			}
		}
		
	}

	static checkArray(array) {
		return (
			array.indexOf(1) !== -1 &&
			array.indexOf(2) !== -1 &&
			array.indexOf(3) !== -1 &&
			array.indexOf(4) !== -1 &&
			array.indexOf(5) !== -1 &&
			array.indexOf(6) !== -1 &&
			array.indexOf(7) !== -1 &&
			array.indexOf(8) !== -1 &&
			array.indexOf(9) !== -1
		);
	}

	static getNext(grid) {
		
	}
}