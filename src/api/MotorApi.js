import { commonHttpParams } from './HttpParams.js'
import Domains from './Domains.js'

export default class MotorApi{

    static async fetchStatus(){
        const url = Domains.getMotorServerUrl('/motor/status')
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