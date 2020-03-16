import Demo from './demo/index.js';

const components = [
    Demo
];

const install = function (Vue) {
    // 判断是否安装
    if (install.installed) return;

    components.forEach(component => {
        Vue.component(component.name, component);
    });

};


if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    ...components
};

export {
    Demo
};
