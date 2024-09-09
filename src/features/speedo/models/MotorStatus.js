export default class MotorStatus{
    static pastRotorSpeeds = [0, 0, 0, 0, 0];
    
    static rotorSpeedsIdx = 0;

    static incrementRotorSpeedsIdx(){
        this.rotorSpeedsIdx = (this.rotorSpeedsIdx + 1) % this.pastRotorSpeeds.length
    }

    static addToRotorSpeeds(rotorSpeedHz){
        this.pastRotorSpeeds[this.rotorSpeedsIdx] = rotorSpeedHz
        this.incrementRotorSpeedsIdx()
    }

    constructor(params){
        this.params = params
        this.constructor.addToRotorSpeeds(this.params.rotorSpeedHz)
    }

    get averageRotorSpeedHz(){
        const speeds = this.constructor.pastRotorSpeeds
        const sum = speeds.reduce((acc, speed) => acc + speed, 0)
        return sum / speeds.length
    }

    get isActive(){
        return this.params.isActive
    }

    get amplitudeFract(){
        return this.params.amplitudeFract;
    }

    get freqHz(){
        return this.params.freqHz;
    }

    get rotorRpm(){
        return this.rotorSpeedHz * 60;
    }

    get averageRpm(){
        return this.averageRotorSpeedHz * 60;
    }
    
    get rotorSpeedHz(){
        return this.params.rotorSpeedHz;
    }

    get electricalEquivalentSpeedHz(){
        return this.params.electricalEquivalentSpeedHz;
    }

    get slipHz(){
        return this.params.slipHz;
    }

    get slipFract(){
        return this.params.slipFract;
    }

    get torqueFract(){
        return this.params.torqueFract;
    }

    get useGoPedal(){
        return this.params.useGoPedal;
    }

    get goPedalStatus(){
        return this.params.goPedalStatus;
    }

    get actTorque(){
        return this.params.actTorque;
    }

}