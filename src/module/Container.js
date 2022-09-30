import Filter from "./Filter";

let component_id = 0;

export default class Container {
    constructor(widgets) {
        this.widgets = widgets;
        this.init()
    }
    init() {
        this.widgets.forEach(w => {
            // todo: 组件ID 唯一性 易用性
            w.id = `${w.component}-${component_id++}`;
            if (w instanceof Filter) {
                let relatedWidgets = this.getRelatedWidgets(w.option.relatedWidgets);
                relatedWidgets.forEach(r => {
                    r.association = {
                        from: w,
                        event: 'filter'// 默认，后续可能添加高亮、下钻等事件
                    }
                })
            }
        });
    }
    getWidgetById(id) {
        return this.widgets.find(w => w.id === id);
    }
    getRelatedWidgets(ids) {
        return ids.map(i => this.getWidgetById(i));
    }
}