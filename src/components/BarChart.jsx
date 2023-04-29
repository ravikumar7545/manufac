import React from 'react';
import ReactECharts from 'echarts-for-react';
const BarChart = (props) => {
  const filteredAlcohols = props.value.filteredAlcohols;
  const filteredMagnesium = props.value.filteredMagnesium;

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: filteredAlcohols,
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Alcohol',
        type: 'bar',
        barWidth: '60%',
        data: filteredMagnesium,
      },
    ],
  };
  return (
    <div className="chart-box">
      <h2>Bar Chart </h2>
      <ReactECharts option={option} />
    </div>
  );
};

export default BarChart;
