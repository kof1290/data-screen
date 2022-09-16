import { merge } from "lodash";

/**
 * 传入值为一维数组对象，输出的数组中对象的key转换为驼峰，暂不支持递归处理对象的key
 *
 * @param {*} rest
 * @return {*} 
 */
const toHump = (rest) => {
    return rest.map(item => Object.entries(item).map(([key, value]) => {
        return {
            [key.replace(/-(\w)/g, (all, letter) => letter.toUpperCase())]: value
        }
    })).flat();
}

/**
 * 参数包装函数
 *
 * @param {*} component 组件名称
 * @param {*} width 组件宽度
 * @param {*} height 组件高度
 * @param {*} left 组件左侧距离
 * @param {*} top 组件顶部距离
 * @param {*} option 组件本身的配置项 没有则使用null代替
 * @param {*} dataOption 通用的数据请求项
 * @param {*} rest 额外参数以对象形式传入 例如{'z-index':2}，请注意：值类型会在合并过程中被忽略
 * @return {*} 
 */
export const b = (component, width, height, left, top, option, dataOption, ...rest) => {
    let restObj = {};
    if (rest.length) {
        restObj = toHump(rest).reduce((prev, curr) => merge(prev, curr));
    }
    return {
        component,
        width,
        height,
        left,
        top,
        option,
        dataOption,
        ...restObj
    }
}


/**
 * 给传入的style对象的特定键值加入px单位 ps：['width', 'height', 'top', 'bottom', 'left', 'right']
 *
 * @param {*} obj 传入的style对象
 * @return {*} 
 */
export const withPx = (obj) => {
    let pxUnit = ['width', 'height', 'top', 'bottom', 'left', 'right'];
    let style = { ...obj }
    Object.keys(style).forEach(k => {
        if (typeof style[k] === 'number' && pxUnit.includes(k)) {
            style[k] = style[k] + 'px';
        }
    })
    return style;
}
