import React from 'react'
import { Line } from 'react-chartjs-2'
import { I_DataPoint } from '../../../types/types'

interface I_Props {
  cpuUsage: I_DataPoint[];
}

const GraphFC: React.FC<I_Props> = ({ cpuUsage }) => {
  return (
    <div className='graph-container'>
      <Line
      />
    </div>
  )
}


const getGraphLabels = (cpuUsage: I_DataPoint[]): string[] => {
  return cpuUsage.map((dataPoint) => {
    const time = (date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  })
}


export default GraphFC
