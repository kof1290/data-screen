import BaseComponent from "./BaseComponent";
import * as echarts from 'echarts'

export default class Echart extends BaseComponent {
    constructor(obj) {
        super(obj);
        this.chart = null;
        this.tempOption = {
            tooltip: {
                trigger: "item",
                backgroundColor: "#fff",
            },
            color: [
                "#348DFF",
                "#00B1FF",
                "#5CE4FF",
                "#FFD600",
                "#F7833B",
                "#E97129",
                "#FF4A34",
                "#FF34FD",
                "#B034FF",
            ],
            legend: {
                top: "60%",
                left: "right",
                icon: "circle",
                itemWidth: 8,
                orient: "",
            },
            series: [
                {
                    type: "pie",
                    radius: ["40%", "70%"],
                    avoidLabelOverlap: false,
                    label: {
                        formatter: "{d}%",
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: "40",
                            fontWeight: "bold",
                        },
                    },
                    data: [
                        { name: "系列1", value: 100 },
                        { name: "系列2", value: 50 },
                        { name: "系列3", value: 82 },
                        { name: "系列4", value: 91 },
                        { name: "系列5", value: 74 },
                        { name: "系列6", value: 22 },
                    ],
                },
            ],
        }
    }
    init() {
        let el = document.querySelector(`#${this.id}`);
        this.chart = echarts.init(el, null, { devicePixelRatio: 2.5 });
    }
    update(data) {
        if (this.option) {
            let { setData, script } = this.dataOption;
            if (!setData) {
                console.warn('setData handler is necessary!');
            } else {
                setData(this.option, data);
            }
            this.chart.setOption(this.option);
            script && script(this.chart, this.option);
        } else {
            this.chart.setOption(this.tempOption)
        }
    }
    reRender(data) {
        this.destory();
        this.init()
        this.update(data);
    }
    destory() {
        this.chart.dispose();
    }
}