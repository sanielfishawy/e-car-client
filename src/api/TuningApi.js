import { commonHttpParams } from './HttpParams.js'
import Domains from './Domains.js'

export default class TuningApi{

    static async fetchSlipGroups(){
        const url = Domains.getMotorServerUrl('/tuning/slipGroups')
        try {
            const r = await fetch(url, {
                ...commonHttpParams(),
                method: 'GET',
            })
            return r.json()
        } catch (error) {
            return {ok:false, url: url.toString(), message: error.message} 
        }
    }
}