import { 
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

export default function SlipGroupChart(props){

    const sgs = props.slipGroups

    const formatTick = (tick) => {
        return tick.toFixed(2)
    }

    const getLines = () => {
        return sgs.slipGroups.map( (sg) => {
            return <Line 
                type="monotone" 
                dataKey={sg.chartTorqueDataKey}
                stroke={getStrokeForAmplitudeFract(sg.amplitudeFract)}
                key={sg.chartTorqueDataKey}
                dot={<CustomDot sgId={sg.id}/>}
            />
        })
    }

    const getStrokeForAmplitudeFract = (amplitudeFract) => {
        const amp = parseFloat(amplitudeFract.toFixed(1))
        switch (amp) {
            case 0.2:
                return "red"
            case 0.3:
                return "green"
            case 0.4:
                return "blue"
            case 0.5:
                return "red"
            case 0.6:
                return "green"
            case 0.7:
                return "blue"
            case 0.8:
                return "red"
            case 0.9:
                return "green"
            case 1.0:
                return "blue"
            default:
                return "grey"
        }
    }

    const CustomDot = (props) => {
        const {cx, cy, payload} = props;
        const {sgId} = props;
        const isMaxPoint = sgs.slipGroupWithId(sgId).isMaxPoint(payload.slipFract)
        const isNinetyPercentPoint = sgs.slipGroupWithId(sgId).isNinetyPercentPoint(payload.slipFract)
      
        let r
        if (isMaxPoint && isNinetyPercentPoint){
            r =  <circle cx={cx} cy={cy} r={4} stroke="none" fill="purple"/> 
        } else if (isMaxPoint){
            r =  <circle cx={cx} cy={cy} r={4} stroke="none" fill="red"/> 
        } else if (isNinetyPercentPoint){
            r =  <circle cx={cx} cy={cy} r={4} stroke="none" fill="blue"/> 
        } else {
            r =  <circle cx={cx} cy={cy} r={3} stroke="none" fill="grey"/> 
        }

        return r
    }

    return (
        <>
            <h3>{sgs.minFreqHz}Hz - {sgs.maxFreqHz}Hz</h3>

            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={sgs.combinedDataForChart} >
                    {getLines()}
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis 
                        dy={10}
                        dataKey="slipFract"
                        tickFormatter={formatTick}
                    />
                    <YAxis />
                    <Tooltip formatter={formatTick}/>
                    <Legend />
                </LineChart>
            </ResponsiveContainer>

        </>
    )
}