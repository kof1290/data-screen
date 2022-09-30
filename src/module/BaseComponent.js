import service from "@/api";

export default class BaseComponent {
    constructor({ component, width, height, left, top, zIndex, option, dataOption }) {
        this.id = '';
        this.component = component;// 组件名称
        this.style = this.genStyle({ width, height, left, top, zIndex });// 大小，位置
        this.option = option;
        this.dataOption = dataOption;
    }

    genStyle({ width = 100, height = 100, left = 100, top = 100, zIndex = 1 }) {
        return {
            width,
            height,
            left,
            top,
            'z-index': zIndex
        }
    }
    queryData(dataOption) {
        let {
            method = 'get',
            url,
            data,
            params,
            headers
        } = dataOption;
        return service.send({
            method,
            url,
            data,
            params,
            headers
        })
    }
}

