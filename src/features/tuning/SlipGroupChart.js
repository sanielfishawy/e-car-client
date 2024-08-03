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
                stroke="#8884d8"
                key={sg.chartTorqueDataKey}
            />
        })
    }

    return (
        <>
            <h3>{sgs.minFreqHz}Hz - {sgs.maxFreqHz}Hz</h3>

            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={sgs.combinedDataForChart} >
                    {getLines()}
                    <Line type="monotone" dataKey="torque" stroke="#8884d8" />
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