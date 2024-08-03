import {jest} from '@jest/globals';
import TuningApi from '../api/TuningApi';

jest.setTimeout(30000)
describe('TuningApi', () => {

    let r

    describe('fetchSlipGroups()', () => {
        it('Should fetch slipGroups', async () => {
            r = await TuningApi.fetchSlipGroups()
            expect(r.ok).toBe(true)
            expect(r.results.length).toBeGreaterThan(0)
        })
    })

})
