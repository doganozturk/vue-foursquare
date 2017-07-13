const routes = [
  {
    path: "/",
    component: require("../components/Hello/Hello.vue")
  },
  {
    path: "*",
    component: require("../components/NotFound/NotFound.vue")
  }
];

export default routes;
