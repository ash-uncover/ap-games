import DobbleCards from './DobbleCards'
import DobbleSymbols from './DobbleSymbols'

let DobbleGame = {
    hasSymbol: function (cardId, symbolId) {
        let card = DobbleCards.CARDS[Number(cardId)]
        for(let i = 0; i < card.symbols.length; i++) {
            if (card.symbols[i].id === Number(symbolId)) {
                return true
            }
        }
        return false
    },
    isCommonSymbol: function (cardId1, cardId2, symbolId) {
        return DobbleGame.hasSymbol(cardId1, symbolId) && DobbleGame.hasSymbol(cardId2, symbolId)
    }
}

export default DobbleGame