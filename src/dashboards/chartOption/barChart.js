export const option = {
    tooltip: {
      trigger: 'item',
      backgroundColor: '#fff'
    },
    calculable: true,
    xAxis: [
      {
        type: 'category',
        axisLabel:{
          rotate:60
        },
        // prettier-ignore
        data: []
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '小区数量',
        type: 'bar',
        barWidth:23,
  
        data: [
        ],
        markPoint: {
          data: [
            {
              type: 'max',
              symbol: 'circle',
              symbolSize: '10',
              name: '最大值',
              itemStyle: {
                color: '#2D91FF',
                borderWidth: 2,
                borderColor: '#fff'
              },
              label: {
                color: '#355588',
                offset: [0, -15]
              }
            }
          ]
        },
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#116CFE'
            },
            {
              offset: 1,
              color: 'rgba(17,108,254,0.36)'
            }
          ],
          global: false
        }
      }
    ]
};

const setData = (option,data) => {
    option.xAxis[0].data = data.map(i => i.name);
    option.series[0].data = data.map(i => i.value);
    return option;
}

export default {
    setData
}