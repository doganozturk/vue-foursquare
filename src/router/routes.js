import Home from "../pages/Home/Home";
import Venues from "../pages/Venues/Venues";
import VenueDetail from "../pages/VenueDetail/VenueDetail";
import NotFound from "../pages/NotFound/NotFound";

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/venues",
    component: Venues
  },
  {
    path: "/venue-detail",
    component: VenueDetail
  },
  {
    path: "*",
    component: NotFound
  }
];

export default routes;
