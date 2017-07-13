import Hello from "../components/Hello/Hello";
import NotFound from "../components/NotFound/NotFound";

const routes = [
  {
    path: "/",
    component: Hello
  },
  {
    path: "*",
    component: NotFound
  }
];

export default routes;
