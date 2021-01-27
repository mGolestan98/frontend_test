import useSWR, { responseInterface } from "swr";
import { ICity } from "../types";

// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useCities = (): responseInterface<Array<ICity>, any> => {
  const swr = useSWR("/cities.json", fetcher);

  return swr;
};

export default useCities;
