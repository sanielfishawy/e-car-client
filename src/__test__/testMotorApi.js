import {jest} from '@jest/globals';
import MotorApi from '../api/MotorApi';

jest.setTimeout(30000)
describe('MotorApi', () => {

    let r

    describe('fetchStatus()', () => {
        it('Should fetch motor status', async () => {
            r = await MotorApi.fetchStatus()
            expect(r.ok).toBe(true)
            expect(r.results.actTorque).toBeGreaterThanOrEqual(0)
            console.log(r)
        })
    })

})
