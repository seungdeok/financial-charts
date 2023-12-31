import React from "react";
import Chart from "react-google-charts";

export interface CandlestickChartProps {
  data: (string | number)[][];
  width?: string | number;
  height?: string | number;
  options?: any;
}

export const CandlestickChart = ({
  width = "100%",
  height = "100%",
  data,
  options = {},
}: CandlestickChartProps) => {
  return (
    <Chart
      chartType="CandlestickChart"
      data={data}
      width={width}
      height={height}
      options={options}
    />
  );
};
