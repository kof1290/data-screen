import BaseComponent from "./BaseComponent";
export default class Pic extends BaseComponent {
    constructor(obj) {
        super(obj);
        this.handelOption(obj);
    }
    handelOption({option}) {
        if (option) {
            this.option.picName = this.getPicFullPath(option);
        }
    }
    getPicFullPath({project, picName}) {
        if (project) {
            return `/src/assets/projects/${project}/${picName}.png`
        } else {
            return `/src/assets/picImgs/${picName}.png`;
        }
    }
}