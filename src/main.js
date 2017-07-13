import Vue from "vue";

// import components
import App from "./components/App";

// import router
import router from "./router";

// mount Vue
// eslint-disable-next-line
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
