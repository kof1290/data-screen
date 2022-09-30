import BaseComponent from "./BaseComponent";

export default class Filter extends BaseComponent {
    constructor(obj) {
        super(obj);
        this.handelOption(obj);
    }
    handelOption({option}) {
        console.log('关联组件为', option.relatedWidgets.join(','));
    }
}