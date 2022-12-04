import Dice from 'utils-lib/random/Dice'

describe('Dice', () => {
  describe('D6', () => {
    test('one run', () => {
      // make 1 run and check it is bounded
      const result = Dice.D6()
      expect(result).toBeGreaterThan(0)
      expect(result).toBeLessThan(7)
    })

    test('lots of run', () => {
      // make 1k run and check we got all results
      const result = { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0 }
      const nbTests = 10000
      for (let i = 0; i < nbTests; i++) {
        const dice = Dice.D6()
        result[dice]++
      }
      // check repartition is abobve 15% for each result
      expect(result[1]).toBeGreaterThan(1500)
      expect(result[2]).toBeGreaterThan(1500)
      expect(result[3]).toBeGreaterThan(1500)
      expect(result[4]).toBeGreaterThan(1500)
      expect(result[5]).toBeGreaterThan(1500)
      expect(result[6]).toBeGreaterThan(1500)
    })
  })

  describe('throw', () => {
    test('basic throw', () => {
      const result = Dice.throw('1D3')
      expect(result).toHaveLength(1)
      expect(result[0]).toBeGreaterThan(0)
      expect(result[0]).toBeLessThan(4)
    })

    test('several throws', () => {
      const result = Dice.throw('10D2')
      expect(result).toHaveLength(10)
      result.forEach(r => {
        expect(r).toBeGreaterThan(0)
        expect(r).toBeLessThan(3)
      }
    })
  })
})
