import Domains from '../api/Domains.js'

export function getRawEnvironment(){
    const env = process.env.REACT_APP_ENV || process.env.REACT_APP_ENVIRONMENT || process.env.NODE_ENV
    return env?.toLowerCase()
}

export function isDevelopment(){
    return getRawEnvironment().includes('dev')
}

export function isTest(){
    return getRawEnvironment().includes('test')
}

export function isProduction(){
    return getRawEnvironment().includes('prod')
}

export async function displayConfiguration(){
    return {
        REACT_APP_VERSION: process.env.REACT_APP_VERSION,
        NODE_ENV: process.env.NODE_ENV,
        rawEnvironment: getRawEnvironment(),
        motorControlServer: {
            url: Domains.getMotorServerUrl.toString(),
        }
    }
}