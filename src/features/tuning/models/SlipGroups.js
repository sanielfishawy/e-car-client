import SlipGroup from './SlipGroup.js' // eslint-disable-line no-unused-vars

export default class SlipGroups{
    
    /**
     * @param {[SlipGroup]} params 
     */
    constructor(slipGroups){
        this.slipGroups = slipGroups
    }

    get id(){
        return JSON.stringify(this.minFreqs)
    }

    get minFreqHz(){
        return this.minFreqs[0]
    }

    get maxFreqHz(){
        return this.slipGroups[0].maxFreqHz
    }
    
    get minFreqs(){
        const mfs = new Set();
        for(const sg of this.slipGroups){
            mfs.add(sg.minFreqHz)
        }
        return Array.from(mfs).sort( (a, b) => a - b)
    }

    withMinFreq(minFreq){
        return this.slipGroups.filter(sg => sg.minFreqHz === minFreq)
    }

    /**
     * @returns {[SlipGroups]}
     */
    get groupedByMinFreq(){
        const mfs = this.minFreqs
        return mfs.map( (mf) => new SlipGroups(this.withMinFreq(mf)))
    }


    /**
     * @param {String} id 
     * @returns {SlipGroup}
     */
    slipGroupWithId(id){
        return this.slipGroups.find( sg => sg.id === id)
    }

    get combinedDataForChart(){
        const h = {}
        for (const sg of this.slipGroups){
            for (const p of sg.slipTorquePoints){
                const k = p.slipFract.toFixed(2)
                if (!h[k]){
                    h[k] = {}
                }
                h[k][sg.chartTorqueDataKey] = p.torque
                if (sg.isMaxPoint(p.slipFract)) h[k].isMaxTorque = true
                // if (sg.isNinetyPercentPoint(p.slipFract)) h[k].isNinetyPercentTorque = true
                h[k].slipForMaxTorque = sg.slipForMaxTorque
                h[k].slipForNinetyPercentTorque = sg.slipForNinetyPercentTorque
            }
        }
        const a = []
        for (const slipFract in h){
            a.push({slipFract: parseFloat(slipFract), ...h[slipFract]})
        }
        return a
    }
}