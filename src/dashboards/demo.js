import BaseComponent from "@/module/BaseComponent";
import {b} from '@/utils/utils';
//引入组件类
import Pic from "@/module/Pic";

// 此处的【上下顺序】隐含了z-index的【从下到上】的顺序，也可以使用rest额外变量传入z-index值
const pics = [
    new Pic(b('pic', 100, 150, 100, 100, {
        picName: '河道'
    }, null, {'z-index': 2})),
    new Pic(b('pic', 100, 150, 300, 500, null, null)),
    new Pic(b('pic', 123, 390, 123, 123, null, null))
]

const list = [
    ...pics,
    new BaseComponent(b('graph', 300, 400, 900, 300, null, {method: 'get', url: 'http://172.38.110.228:30032/api/v1/pieGraph'})),
    new BaseComponent(b('graph', 300, 400, 1080, 1000, null, {method: 'get', url: 'http://172.38.110.228:30032/api/v1/pieGraph'})),
    new BaseComponent(b('datePicker', 200, 100, 400, 300)),
    new BaseComponent(b('selectFilter', 200, 80, 400, 500))
]

export default list;