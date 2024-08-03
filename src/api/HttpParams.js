import base64 from 'base-64'

export function commonHttpParams(){
    return {
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    }
}

export function headersWithBasicAuth(user, password){
    const hdr = headersNoAuth()
    const up = base64.encode(`${user}:${password}`)
    const basic = `Basic ${up}`
    hdr.set('Authorization', basic);
    return hdr
}

export function headersNoAuth(headers){
    const hdr = headers || new Headers()
    hdr.set('Content-type', 'application/json')
    return hdr
}