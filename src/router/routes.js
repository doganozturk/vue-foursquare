import Home from "../views/pages/Home/Home";
import Venues from "../views/pages/Venues/Venues";
import VenueDetail from "../views/pages/VenueDetail/VenueDetail";
import NotFound from "../views/pages/NotFound/NotFound";

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/venues",
    component: Venues,
    props: route => ({
      query: { location: route.query.location, query: route.query.query }
    })
  },
  {
    path: "/venues/detail",
    component: VenueDetail,
    props: route => ({
      query: { id: route.query.id }
    })
  },
  {
    path: "*",
    component: NotFound
  }
];

export default routes;
