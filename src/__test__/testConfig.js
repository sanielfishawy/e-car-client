import {jest} from '@jest/globals';
import * as Config from '../config/config.js';

describe('Config', () => {

    let r

    describe('getRawEnvironment, isTest()', () => {
        it('Should fetch it should get raw environment which should be test', async () => {
            expect(Config.isTest()).toBe(true)
        })
    })
    
})