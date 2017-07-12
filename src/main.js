import Vue from "vue";
import VueRouter from "vue-router";

// import components
import App from "./components/App";

// import map
import routes from "./router";

Vue.config.debug = true;
Vue.config.devTools = true;

// router config
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes
});

// mount Vue
// eslint-disable-next-line
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
