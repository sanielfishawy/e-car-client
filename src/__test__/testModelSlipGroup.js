import SlipGroup from '../features/tuning/models/SlipGroup.js'
import TuningApi from '../api/TuningApi.js'

describe('SlipGroup', () => {
    let r, sg

    beforeAll( async () => {
        r = await TuningApi.fetchSlipGroups()
        sg = new SlipGroup(r.results[0])
    })

    describe('getters', () => {
        it('Should provide getters for all the params of a SlipGroup', async () => {
            expect(sg.minFreqHz).toBe(r.results[0].minFreqHz)
            expect(sg.maxFreqHz).toBe(r.results[0].maxFreqHz)   
            expect(sg.amplitudeFract).toBe(r.results[0].amplitudeFract)
            expect(sg.slipForMaxTorque).toBe(r.results[0].slipForMaxTorque)
            expect(sg.slipForNinetyPercentTorque).toBe(r.results[0].slipForNinetyPercentTorque)
            expect(sg.maxTorque).toBe(r.results[0].maxTorque)
            expect(sg.ninetyPercentTorque).toBe(r.results[0].ninetyPercentTorque)
            expect(sg.slipTorquePoints).toBe(r.results[0].slipTorquePoints)
            expect(sg.id).toBe(JSON.stringify({freq: sg.minFreqHz, amp: sg.amplitudeFract}))
        })
    })

    describe('isNinetyPercentPoint, isMaxPoint', () => {
        it('Should if nearly max or ninetyPercent', () => {
            const sm = sg.slipForMaxTorque
            const sn = sg.slipForNinetyPercentTorque
            
            expect(sg.isNinetyPercentPoint(sn - 0.0001)).toBe(true)
            expect(sg.isNinetyPercentPoint(sn + 0.01)).toBe(false)
            expect(sg.isMaxPoint(sm - 0.0001)).toBe(true)
            expect(sg.isMaxPoint(sm + 0.01)).toBe(false)
        })

        it('Should return if max or ninetyPercent', () => {
            let n = 0 
            let max = 0
            for(const pt of sg.slipTorquePoints){
                if (sg.isNinetyPercentPoint(pt.slipFract)) n++
                if (sg.isMaxPoint(pt.slipFract)) max++
            }
            expect(n).toBe(1)
            expect(max).toBe(1)
        })
    })

    
})