import "./components/index.less";
import * as Components from "./components/index.js";

const install = function (Vue) {
    for (const component in Components) {
        Vue.component(component.name, component);
    }
};

export { install };
