import SlipGroup from '../features/tuning/models/SlipGroup.js'
import TuningApi from '../api/TuningApi.js'

describe('SlipGroup', () => {
    let r, sg

    it('Should provide getters for all the params of a SlipGroup', async () => {
        r = await TuningApi.fetchSlipGroups()
        sg = new SlipGroup(r.results[0])
        expect(sg.minFreqHz).toBe(r.results[0].minFreqHz)
        expect(sg.maxFreqHz).toBe(r.results[0].maxFreqHz)   
        expect(sg.amplitudeFract).toBe(r.results[0].amplitudeFract)
        expect(sg.slipForMaxTorque).toBe(r.results[0].slipForMaxTorque)
        expect(sg.slipForNinetyPercentTorque).toBe(r.results[0].slipForNinetyPercentTorque)
        expect(sg.maxTorque).toBe(r.results[0].maxTorque)
        expect(sg.ninetyPercentTorque).toBe(r.results[0].ninetyPercentTorque)
        expect(sg.slipTorquePoints).toBe(r.results[0].slipTorquePoints)
    })
})