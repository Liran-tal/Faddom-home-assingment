import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { I_DataPoint } from '../../../types/types';
import { options } from '../../../constants/graph.const';
import generateGraphInfo from '../../../utils/graph.utils';
import '../styles/graph.style.css'


Chart.register(...registerables);

interface I_Props {
  cpuUsage: I_DataPoint[];
}

const GraphFC: React.FC<I_Props> = ({ cpuUsage }) => {
  return (
    <div className="graph-container">
      <Line 
        data={generateGraphInfo(cpuUsage)} 
        options={options}
        height={'100%'}
      />
    </div>
  );
};

export default GraphFC;
