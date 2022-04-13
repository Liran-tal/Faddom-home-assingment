import { Request, Response } from 'express';
import { getCPUUtilization } from '../utils/aws/cloudWatch.util';

export const getCPUStats = async (req: Request, res: Response) => {
  const { IP, timePeriod, interval } = req.body;
  
  if (!IP || !timePeriod || !interval) {
    return res.status(400).send("Request missing: IP | timePeriod | interval");
  }

  try { 
      const data = await getCPUUtilization(
        IP, 
        parseInt(timePeriod), 
        parseInt(interval)
      );
      if (!data) {
        return res.status(404).send("AWS EC2 Instance not found");
      }
    
      return res.send(data);
  } catch (error: any) {
    return res.status(500).send(error.message || error);
  }
}
