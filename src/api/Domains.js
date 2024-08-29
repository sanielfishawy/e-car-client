import * as Config from '../config/config.js'

export default class Domains{
    static LOCAL_MOTOR_SERVER_DOMAIN = '192.168.1.167:8000'

    static getProtocol(){
        let p
        if (Config.isProduction())          p = 'https://'
        else if (Config.isDevelopment())    p = 'http://'
        else if (Config.isTest())           p = 'http://'
        else p = 'http://'
        return p
    }

    static getMotorServerUrl(pathname){
        const p = this.getProtocol()
        const u = new URL(p + this.LOCAL_MOTOR_SERVER_DOMAIN) 

        let url
        if (Config.isProduction())         url = u
        else if (Config.isDevelopment())   url = u
        else if (Config.isTest())          url = u
        else url = u

        if(url && pathname) url.pathname = pathname
        return url
    }

}
