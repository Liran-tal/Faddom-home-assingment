import { I_GraphValues, I_SelectOptions } from "../types/types";

export const SELECT_OPTIONS: I_SelectOptions[] = [
  {
    name: "timePeriod",
    text: "Last Week",
    value: `${1000 * 60 * 60 * 24 * 7}`,
  },
  {
    name: "timePeriod",
    text: "Last Day",
    value: `${1000 * 60 * 60 * 24}`,
  },
  {
    name: "timePeriod",
    text: "Last Hour",
    value: `${1000 * 60 * 60}`,
  },
]

export const baseGraphValues: I_GraphValues = {
  timePeriod: SELECT_OPTIONS[0].value, 
  interval: "",
  IP: "", 
}
