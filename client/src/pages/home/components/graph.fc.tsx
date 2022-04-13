import React from "react";
import { Line } from "react-chartjs-2";
import { I_DataPoint } from "../../../types/types";

interface I_Props {
  cpuUsage: I_DataPoint[];
}

const GraphFC: React.FC<I_Props> = ({ cpuUsage }) => {
  return (
    <div className="graph-container">
      <Line />
    </div>
  );
};

const graphInfo = {
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "Metric Data",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

const getGraphLabels = (cpuUsage: I_DataPoint[]): string[] => {
  return cpuUsage.map((dataPoint) => {
    const date = getDatePortion(dataPoint.Timestamp);
    const time = getTimePortion(dataPoint.Timestamp);
    return `${date} ${time}`;
  });
};

const getDatePortion = (date: Date): string => {
  const day = date.getDay();
  const month = date.getDate();
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const getTimePortion = (date: Date): string => {
  return date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export default GraphFC;
