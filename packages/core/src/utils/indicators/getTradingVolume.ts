import { ChartData } from "../ChartUtil";

export interface IArgs {
  data: ChartData[];
  period: number;
}

export const getTradingVolume = ({ data, period }: IArgs) => {
  const volumes: number[] = [];

  for (let i = 0; i < data.length; i++) {
    if (i < period - 1) {
      volumes.push(NaN);
      continue;
    }

    const volumesData = data
      .slice(i - period + 1, i + 1)
      .map((item) => item.volume);
    const sum = volumesData.reduce((acc, volume) => acc + volume, 0);

    volumes.push(sum);
  }

  return { volumes };
};
