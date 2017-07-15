import Vue from "vue";

// import base layout
import App from "./views/layout/App";

// import router
import router from "./router";

// import Vuex store
import store from "./store";

// mount Vue
// eslint-disable-next-line
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
