import React, { useState } from 'react'
import { getCPUMetrics } from "../../API/aws.api";
import { I_DataPoint, I_GraphValues } from '../../types/types';
import GraphFC from './components/graph.fc';
import SearchInputFC from './components/searchInput.fc'

const HomePage: React.FC = () => {
  const [cpuUsage, setCpuUsage] = useState<I_DataPoint[]>([])
  const [errMsg, setErrMsg] = useState<string>('');

  const fetchCPUMetrics = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>, 
    graphValues: I_GraphValues
  ): Promise<void> => {
    event.preventDefault();
    console.log(graphValues);
    
    try {
      const CPUMetrics: I_DataPoint[] = await getCPUMetrics(graphValues);
      if (CPUMetrics.length === 0) {
        setErrMsg("No Data Found");
        return;
      }
      console.log({CPUMetrics});
      
      setCpuUsage(CPUMetrics);
    } catch (error: any) {
      setErrMsg(`Error: ${error.message || error.status}`);
    }
  }

  return (
    <div>
      <h2 className=''>
        AWS-EC2 Instance - CPU Usage
      </h2>
      <SearchInputFC fetchCPUMetrics={fetchCPUMetrics}/>
      <div className=''>
        {errMsg}
      </div>
      <GraphFC cpuUsage={cpuUsage} />
    </div>
  )
}

export default HomePage
