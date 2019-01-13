const MinehunterHelper = {}

MinehunterHelper.createGrid = (width, height, bombs) => {
  // First create the empty grid
  const grid = []
  for (let x = 0; x < height; x++) {
    const row = []
    grid.push(row)
    for (let y = 0; y < width; y++) {
      const tile = {
        x,
        y,
        near: 0,
        question: false,
        flag: false,
        bomb: false,
        revealed: false
      }
      row.push(tile)
    }
  }
  // Then place the bombs
  let remainingBombs = bombs
  while (remainingBombs) {
    const x = Math.floor(Math.random() * height)
    const y = Math.floor(Math.random() * width)

    if (!grid[x][y].bomb) {
      grid[x][y].bomb = true
      remainingBombs--
    }
  }
  // Finally update the bomb counters
  for (let x = 0; x < height; x++) {
    for (let y = 0; y < width; y++) {
      grid[x][y].near = MinehunterHelper.getNeighboors(grid, x, y).filter((tile) => tile.bomb).length
    }
  }
  return grid
}

MinehunterHelper.getNeighboors = (grid, x, y) => {
  const result = []
  for (let x2 = Math.max(x - 1, 0); x2 < Math.min(x + 2, grid.length); x2++) {
    for (let y2 = Math.max(y - 1, 0); y2 < Math.min(y + 2, grid[x2].length); y2++) {
      if (x !== x2 || y !== y2) {
        result.push(grid[x2][y2])
      }
    }
  }
  return result
}

MinehunterHelper.isGameWon = (grid) => {
  return !grid.find((row) => row.find((cell) => !cell.bomb && !cell.revealed))
}

export default MinehunterHelper
