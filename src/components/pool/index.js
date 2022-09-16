// 此处匹配vue结尾的文件，js结尾的文件需手动注册
const components = import.meta.glob('./*.vue');

export default {
    install: function(Vue) {
        Object.entries(components).forEach(([path, fn]) => {
            let name = path.match(/\/(.+).vue$/)[1];
            Vue.component(name, fn);
        })
    }
};