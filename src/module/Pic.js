import BaseComponent from "./BaseComponent";
export default class Pic extends BaseComponent {
    constructor(obj) {
        super(obj);
        this.handelOption(obj);
    }
    handelOption({option}) {
        if (option) {
            let {picName} = option;
            this.option.picName = this.getPicFullPath(picName);
        }
    }
    getPicFullPath(picName) {
        return `/src/assets/picImgs/${picName}.png`;
    }
}