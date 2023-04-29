import React from 'react';
import ReactECharts from 'echarts-for-react';
const LineChart = (props) => {
  const filteredFlavanoids = props.value.filterFlavanoids;
  const filterAsh = props.value.filterAsh;

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
        data: filteredFlavanoids,
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
        name: 'Ash',
        type: 'line',
        barWidth: '60%',
        data: filterAsh,
      },
    ],
  };
  return (
    <div className="chart-box">
      <h2>Line Chart</h2>
      <div>
        <ReactECharts option={option} />
      </div>
    </div>
  );
};

export default LineChart;
