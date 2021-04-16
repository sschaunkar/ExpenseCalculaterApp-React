import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'

function Chart(props) {
    const datapointValues = props.dataPoints.map(datapoint=>datapoint.value)
    const totalMaximum = Math.max(...datapointValues)
    return (
        <div className='chart'>
            {props.dataPoints.map(datapoint => 
            <ChartBar
            key={datapoint.label} 
            value={datapoint.value}
            maxValue={totalMaximum}
            label={datapoint.label} 
            />)}
        </div>
    )
}

export default Chart
