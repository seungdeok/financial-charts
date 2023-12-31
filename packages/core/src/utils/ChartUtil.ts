export interface ChartData {
  date: number;
  open: number; // 시가
  high: number; // 고가
  low: number; // 저가
  close: number; // 종가
  volume: number; // 거래량
}

export interface ChartConfig {}

export const ChartDefaultConfig = {};
