import { I_DataPoint } from "../types/types";


const generateGraphInfo = (cpuUsage: I_DataPoint[]) => {
  const labels = getGraphLabels(cpuUsage);
  const data = getDatapointValues(cpuUsage);
  const graphInfo = {
    labels,
    datasets: [
      {
        label: "Metric Data",
        data,
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1,
        fill: false,
        tension: 0.1
      },
    ],
  };

  return graphInfo
}


const getGraphLabels = (cpuUsage: I_DataPoint[]): string[] => {
  return cpuUsage.map((dataPoint) => {
    const dateObj = new Date(dataPoint.Timestamp)
    const date = getDatePortion(dateObj);
    const time = getTimePortion(dateObj);
    return `${date} ${time}`;
  });
};


const getDatePortion = (date: Date): string => {  
  const monthNum = date.getMonth();
  const yearNum = date.getFullYear();
  let day = date.getDate().toString();
    
  let month = (monthNum + 1).toString();
  let year = yearNum.toString().substr(-2);
  
  if (day.length === 1) {
    day = "0" + day;
  }
  
  if (month.length === 1) {
    month = "0" + month;
  }
  
  return `${day}/${month}/${year}`;
}


const getTimePortion = (date: Date): string => {
  return date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
};


const getDatapointValues = (cpuUsage: I_DataPoint[]): number[] => {
  return cpuUsage.map((dataPoint) => {
    return dataPoint.Average * 100;
  })
}


export default generateGraphInfo;
