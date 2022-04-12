export interface I_GraphValues {
  IP: string;
  timePeriod: string;
  interval: string;
}

interface I_BaseInput {
  name: string;
  value: string;
}

interface I_InputData extends I_BaseInput {
  label: string;
}

export interface I_TextProps extends I_InputData {
  callback: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface I_SelectProps extends I_InputData {
  callback: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface I_SelectOptions extends I_BaseInput {
  text: string;
}


export interface I_DataPoint {
  Timestamp: Date;
  Average: number;
  Unit: string;
}
