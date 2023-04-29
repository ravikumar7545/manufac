import React from 'react';
import ReactECharts from 'echarts-for-react';
const BarChart = (props) => {
  const alcoholMagnesium = props.value;

  let alcoholCategory = Object.keys(alcoholMagnesium);
  const magnesiumValue = [];

  alcoholCategory.forEach((ele) => {
    magnesiumValue.push(alcoholMagnesium[ele]);
  });

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
        data: alcoholCategory,
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
        data: magnesiumValue,
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
