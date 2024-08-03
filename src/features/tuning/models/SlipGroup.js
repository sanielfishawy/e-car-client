export default class SlipGroup{

    constructor(params){
        this.params = params;
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

}