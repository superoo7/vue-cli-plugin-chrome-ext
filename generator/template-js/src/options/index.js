import Vue from "vue";
import AppComponent from "./App/App.vue";

Vue.component("app-component", AppComponent);

new Vue({
  el: "#root",
  render: createElement => {
    return createElement(AppComponent);
  }
});
