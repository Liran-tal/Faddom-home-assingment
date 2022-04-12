
import { EC2Client, DescribeInstancesCommand } from "@aws-sdk/client-ec2";
import { config } from 'dotenv';
import * as path from 'path';

config({ path: path.resolve(__dirname, '../.env') })

export const getEC2InstanceId = async (ip: string): Promise<string | null> => {
  try {
    const client = new EC2Client({ region: process.env.REGION });
    const command = new DescribeInstancesCommand({});
    
    const commandRes = await client.send(command);
    if (
      !commandRes || 
      !commandRes.Reservations || 
      commandRes.Reservations.length === 0
    ) return null;

    const instances = commandRes.Reservations[0].Instances 

    const instance = instances && instances.find(((instance) => {
      return instance.PrivateIpAddress === ip;
    }));

    return instance?.InstanceId || null;
  } catch (error: any) {
    console.log(error.message || error);
    return null;
  }
}
