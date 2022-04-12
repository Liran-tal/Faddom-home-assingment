import { I_DataPoint, I_GraphValues } from '../types/types';
import { printHTTPErrors } from '../utils/fetch.utils';
import Axios from './headers';

export const getCPUMetrics = async (input: I_GraphValues): Promise<any> => {
  try {
    const { data } = await Axios.post('api/aws/', input);
    return data as I_DataPoint[];
  } catch (error: any) {
    printHTTPErrors(error);
    throw error;
  }
}
