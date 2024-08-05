import { expect } from '@jest/globals';
import SlipGroups from '../features/tuning/models/SlipGroups';
import SlipGroup from '../features/tuning/models/SlipGroup';
import TuningApi from '../api/TuningApi';

describe('SlipGroups', () => {

    let r, sgs

    beforeAll( async () => {
        r = await TuningApi.fetchSlipGroups()
        sgs = r.results.map( (sgo) => new SlipGroup(sgo) )
        sgs = new SlipGroups(sgs)
    })

    it('minFreqs', () => {
        expect(sgs.minFreqs.length).toBeGreaterThan(0)
    })

    it('withMinFreq', () => {
        r = sgs.withMinFreq(sgs.minFreqs[0])
        expect(r.length).toBeGreaterThan(0)
        expect(r[0]).toBeInstanceOf(SlipGroup)
    })

    it('slipGroupWithId', () => {
        r = sgs.slipGroupWithId(sgs.slipGroups[0].id)
        expect(r).toBeInstanceOf(SlipGroup)
    })

    it('groupedByMinFreq', () => {
        r = sgs.groupedByMinFreq
        expect(r.length).toBeGreaterThan(0)
        expect(r[0]).toBeInstanceOf(SlipGroups)
    })

    it('id', () => {
        expect(sgs.id).toBe(JSON.stringify(sgs.minFreqs))
    })

    it('dataForChart', () => {
        const sgs0 = sgs.groupedByMinFreq[0]
        r = sgs0.combinedDataForChart
        expect(r.length).toBeGreaterThan(0)
        expect(r[0].slipFract).toBeDefined()
    })
})