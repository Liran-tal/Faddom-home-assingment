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
    const date = getDatePortion(dataPoint.Timestamp);
    const time = getTimePortion(dataPoint.Timestamp);
    return `${date} ${time}`;
  })
}

const getDatePortion = (date: Date): string => {
  const day = date.getDay();
  const month = date.getDate();
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

const getTimePortion = (date: Date): string => {
  return date.toLocaleTimeString('en-GB', { 
    hour: '2-digit', 
    minute: '2-digit',
  })
}

export default GraphFC
