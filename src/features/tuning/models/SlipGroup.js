export default class SlipGroup{

    static idFromFreqAndAmp(freq, amp){
        return JSON.stringify({freq: freq, amp: amp})
    }

    constructor(params){
        this.params = params;
    }

    get id(){
        return this.constructor.idFromFreqAndAmp(this.minFreqHz, this.amplitudeFract)
    }

    get minFreqHz(){
        return this.params.minFreqHz;
    }

    get maxFreqHz(){
        return this.params.maxFreqHz;
    }

    get amplitudeFract(){
        return this.params.amplitudeFract;
    }

    get slipForMaxTorque(){
        return this.params.slipForMaxTorque;
    }

    get slipForNinetyPercentTorque(){
        return this.params.slipForNinetyPercentTorque;
    }

    get maxTorque(){
        return this.params.maxTorque;
    }

    get ninetyPercentTorque(){
        return this.params.ninetyPercentTorque;
    }

    get chartTorqueDataKey(){
        return `torque_${this.amplitudeFract.toFixed(1)}`
    }

    get slipTorquePoints(){
        return this.params.slipTorquePoints;
    }

    isNinetyPercentPoint(slipFract){
        return Math.abs(parseFloat(slipFract) - parseFloat(this.slipForNinetyPercentTorque)) < 0.001
    }

    isMaxPoint(slipFract){
        return Math.abs(parseFloat(slipFract) - parseFloat(this.slipForMaxTorque)) < 0.001
    }

}