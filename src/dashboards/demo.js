import { b } from '@/utils/utils';
//引入组件类
import Pic from "@/module/Pic";
import Echart from '@/module/Echart';
import Filter from '@/module/Filter';
//引用长配置项
import chart1, {option as pieChart} from './chartOption/chart1'
import barChart, {option as barOption} from './chartOption/barChart';
import BaseComponent from '@/module/BaseComponent';
import Container from '@/module/Container';

// 此处的【上下顺序】隐含了z-index的【从下到上】的顺序，也可以使用rest额外变量传入z-index值
const pics = [
    new Pic(b('pic', 1942, 132, -11, -2, {
        project: 'jinniu',
        picName: 'logobg'
    }))
]

const list = [
    ...pics,
    new Echart(b('echart', 1904, 293, 0, 393, pieChart, { 
        url: 'http://127.0.0.1:3100/api/v1/streetCommunityVillageNum',
        ...chart1
    })),
    new Echart(b('echart', 1017, 324, 0, 730, barOption, {
        url: 'http://127.0.0.1:3100/api/v1/streetVillageNumDistribution',
        ...barChart
    })),
    new BaseComponent(b('c-table', 800, 324, 1100, 730)),
    new Filter(b('selectFilter', 200, 80, 100, 100, {filterKey: 'code',relatedWidgets: ['echart-1']}, null)),
    new Filter(b('selectFilter', 200, 80, 300, 100, {filterKey: 'name',relatedWidgets: ['echart-2']}, null))
]

export default new Container(list);
