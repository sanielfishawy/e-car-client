import Domains from '../api/Domains.js'

describe('Domains', () => {
    describe('getProtocol()', () => {
        it('Should return a string', async () => {
            expect(Domains.getProtocol()).toBe('http://')
        })
    })

    describe('getMotorServerUrl()', () => {
        it('Should return a URL object', async () => {
            const url = Domains.getMotorServerUrl('/tuning/slipGroups')
            expect(url).toBeInstanceOf(URL)
            expect(url.toString()).toBe('http://localhost:8000/tuning/slipGroups')
        })
    })
})