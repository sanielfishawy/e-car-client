import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import * as TuningSlice from './tuningSlice.js'
import SlipGroupChart from './SlipGroupChart.js'

export default function TuningWindow(props){

    const slipGroups = useSelector(TuningSlice.selectSlipGroups)

    const dispatch = useDispatch()
    useEffect( () => {
        dispatch(TuningSlice.fetchSlipGroups())
    }, [dispatch])
    
    const slipGroupCharts = slipGroups.groupedByMinFreq.map((sgs) => {
        return <SlipGroupChart slipGroups={sgs} key={sgs.id}/>
    })

    return (
        <div className="p-5">
            <h1>Tuning</h1>
            <h2>Torque vs Slip</h2>
            {slipGroupCharts}
        </div>
    )
}