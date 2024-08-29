import * as NS from '../features/navigation/navigationSlice'

describe('navigationSlice', () => {
    describe('NavTabNames', () => {

        describe('getTabNameWithIndex', () => {
            it('Should return the tab name for the given index', () => {
                expect(NS.NavTabNames.getTabNameWithIndex(0)).toBe('Speedo')
                expect(NS.NavTabNames.getTabNameWithIndex(1)).toBe('Tuning')
            })
        })
    
        describe('getIndexWithTabName', () => {
            it('Should return the index for the given tab name', () => {
                expect(NS.NavTabNames.getIndexWithTabName('Speedo')).toBe(0)
                expect(NS.NavTabNames.getIndexWithTabName('Tuning')).toBe(1)
            })
        })
    })
})