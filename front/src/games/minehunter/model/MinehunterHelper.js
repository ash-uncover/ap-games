const MinehunterHelper = {}

MinehunterHelper.createTiles = (width, height, bombs) => {
  // First create the empty grid
  const tiles = {}
  for (let x = 0; x < height; x++) {
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
      tiles[`${x}-${y}`] = tile
    }
  }
  // Then place the bombs
  let remainingBombs = bombs
  while (remainingBombs) {
    const x = Math.floor(Math.random() * height)
    const y = Math.floor(Math.random() * width)

    if (!tiles[`${x}-${y}`].bomb) {
      tiles[`${x}-${y}`].bomb = true
      remainingBombs--
    }
  }
  // Finally update the bomb counters
  for (let x = 0; x < height; x++) {
    for (let y = 0; y < width; y++) {
      const neighboors = MinehunterHelper.getNeighboors(tiles, x, y)
      const bombNeighboors = neighboors.filter((tile) => tile.bomb)
      tiles[`${x}-${y}`].near = bombNeighboors.length
    }
  }
  return tiles
}

MinehunterHelper.getNeighboors = (tiles, x, y) => {
  const result = []
  for (let x2 = x - 1; x2 < x + 2; x2++) {
    for (let y2 = y - 1; y2 < y + 2; y2++) {
      if (tiles[`${x2}-${y2}`] && (x !== x2 || y !== y2)) {
        result.push(tiles[`${x2}-${y2}`])
      }
    }
  }
  return result
}

MinehunterHelper.isGameWon = (tiles) => {
  return !Object.values(tiles).find((tile) => !tile.bomb && !tile.revealed)
}

export default MinehunterHelper
