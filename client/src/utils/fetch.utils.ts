import { AxiosError } from "axios";

export function printHTTPErrors(err: Error | AxiosError) {
  const error = err as AxiosError
  if (error.response) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    console.log(error.request);
  } else {
    console.log('Error', error.message);
  }
  console.log(error.config);
};
