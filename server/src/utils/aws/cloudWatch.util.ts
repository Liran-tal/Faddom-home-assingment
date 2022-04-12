import { config } from 'dotenv';
import * as path from 'path';
import * as client from '@aws-sdk/client-cloudwatch';
import { getEC2InstanceId } from './ec2Client.util';

config({ path: path.resolve(__dirname, '../.env') })


export const getCPUUtilization = async (IP: string, timePeriod: number, interval: number) => {
  const cwClient = new client.CloudWatchClient({
    region: process.env.REGION,
  });

  try {
    const instanceId: string | null = await getEC2InstanceId(IP);
    if (!instanceId) return null;

    const params = getParams(instanceId, timePeriod, interval);

    const availabeMetricsCommand = new client.ListMetricsCommand(params);
    const metrics = await cwClient.send(availabeMetricsCommand);
    if (!metrics || !metrics.Metrics) return null

    const isCPUMetrics = metrics.Metrics.find(
      (metric: client.Metric) => metric.MetricName === "CPUUtilization"
    );
    if (!isCPUMetrics) return null;

    const getMetricsCommand = new client.GetMetricStatisticsCommand(params);
    const data = await cwClient.send(getMetricsCommand);
    if (!data.Datapoints) return [];

    data.Datapoints.sort((a, b) => sortByDate(a, b));

    console.log("Success. Metrics:", JSON.stringify(data.Datapoints, null, 2));
    
    return data.Datapoints;
  } catch (err) {
    console.log("Error", err);
    return null;
  }
};


const getParams = (instanceId: string, timePeriod: number, interval: number) => {
  const now = new Date();
  const startTime = new Date(Date.now() - timePeriod);
  
  return {
    Dimensions: [
      {
        Name: "InstanceId",
        Value: instanceId,
      },
    ],
    Namespace: "AWS/EC2",
    MetricName: "CPUUtilization",
    Period: roundToMinutes(interval),
    Unit: "Percent",
    StartTime: startTime,
    EndTime: now,
    Statistics: ["Average"],
  };
}


const roundToMinutes = (interval: number) => {
  return Math.ceil(interval/60)*60;
}


const sortByDate = (a: client.Datapoint, b: client.Datapoint) => {
  if (!a.Timestamp || !b.Timestamp) return 0;
  return a?.Timestamp > b?.Timestamp ? 1 : -1;
}
