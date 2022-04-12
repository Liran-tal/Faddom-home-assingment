import axios from "axios";

const getProfiles = async (): Promise<void> => {
  try {
    const { data } = await axios.post('http://127.0.0.1:8080/api/aws/', { 
        IP: '172.31.74.202',
        timePeriod: `${60*60*24*1000}`,
        interval: `${60*60}`
      }  
    );
    console.dir(data);
  } catch (error: any) {
    console.error(error?.message);
  }
}

getProfiles();
