import _ from 'lodash'
export const option = {
    tooltip: {
        trigger: 'item',
        backgroundColor: '#fff'
    },
    legend: [{
        data: [],
        icon: 'circle',
        itemWidth: 8,
        orient: 'vertical',
        x: '35%',
        y: '30%'
    }, {
        data: [],
        icon: 'circle',
        itemWidth: 8,
        orient: 'vertical',
        x: '85%',
        y: '30%'
    }],
    color: [
        '#348DFF',
        '#00B1FF',
        '#5CE4FF',
        '#FFD600',
        '#F7833B',
        '#E97129',
        '#FF4A34',
        '#FF34FD',
        '#B034FF'
    ],
    series: [
        {
            type: 'pie',
            radius: [80, 140],
            center: ['20%', '50%'],
            itemStyle: {
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '20',
                    fontWeight: 'bold'
                }
            },
            data: [],
            tooltip: {
                formatter: '{b} <br/> 社区数量 {c} ({d}%)'
            }
        },
        {
            type: 'pie',
            radius: [20, 140],
            center: ['70%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 5
            },
            data: [],
            tooltip: {
                formatter: '{b} <br/> 小区数量 {c} ({d}%)'
            }
        }
    ]
};

const dataFormatter = (data) => {
    let groupData = _.groupBy(data, 'street');
    let res = Object.keys(groupData).map(i => {
            return {
                name: i,
                value: groupData[i].length,
                detail: groupData[i].map(c => {
                    return {
                        name: c.community,
                        value: Number(c.villagevalue)
                    }
                })
            }
        })
    window.custom_groupData = res;
    return res;
}

const setData = (option, res) => {
    option.series[0].data = res;
    option.series[1].data = res.find(i => i.name === '西安路街道').detail;
    option.legend[0].data = res.map(i => i.name);
    option.legend[1].data = res.find(i => i.name === '西安路街道').detail.map(i => i.name);
}

const script = (chart, option) => {
    chart.on('mouseover', function (params) {
        if (params.seriesIndex === 0) {
            option.series[0].data = window.custom_groupData;
            option.series[1].data = params.data.detail;
            option.legend[0].data = window.custom_groupData.map(i => i.name);
            option.legend[1].data = params.data.detail.map(i => i.name);
            chart.setOption(option);
        }
    });
}

export default {
    dataFormatter,
    setData,
    script
}
