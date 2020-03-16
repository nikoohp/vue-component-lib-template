import Demo from "./index.vue";

Demo.install = Vue => {
  Vue.component(Demo.name, Demo)
}

export default Demo