import { useSelector } from 'react-redux'
import * as SS from './speedoSlice'

import Speedometer, {
    Background,
    Arc,
    Needle,
    Progress,
    Marks,
    Indicator,
  } from 'react-speedometer';
  
  
export default function RpmMeter(props){

    const rotorRpm = useSelector(SS.selectAverageRotorRpm)

    return (
        <Speedometer
            value={rotorRpm}
            max={2000}
        >
            <Background />
            <Arc/>
            <Needle/>
            <Progress/>
            <Marks step={500}/>
            <Indicator>
                {(value, textProps) => (
                    <text
                        {...textProps}
                        fontSize={20}
                        fill="#fff"
                        x={250 / 2}
                        y={210}
                        textAnchor="middle"
                    >
                        {value} RPM
                    </text>
                )}
            </Indicator>
        </Speedometer>
    )
}