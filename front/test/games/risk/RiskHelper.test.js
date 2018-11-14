import RiskHelper from 'games/risk/RiskHelper'

describe('RiskHelper', () => {
  describe('computeBattle', () => {
    test('simple battle', () => {
      const result = RiskHelper.computeBattle([4], [4])
      expect(result.att).toBe(1)
      expect(result.def).toBe(0)
    })

    test('complex battle', () => {
      const result = RiskHelper.computeBattle([4, 6, 3], [5, 4])
      console.log(result)
      expect(result.att).toBe(1)
      expect(result.def).toBe(1)
    })
  })
})
