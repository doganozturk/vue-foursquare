import { mapGetters } from "vuex";
import HeaderVenues from "../../components/HeaderVenues/HeaderVenues";
import Venue from "../../components/Venue/Venue";
import RecentSearches from "../../components/RecentSearches/RecentSearches";
import Footer from "../../components/Footer/Footer";

export default {
  name: "Venues",
  data() {
    return {};
  },
  components: {
    HeaderVenues,
    Venue,
    RecentSearches,
    Footer
  },
  computed: {
    ...mapGetters(["venues"])
  },
  created() {
    this.$store
      .dispatch("fetchVenues", {
        location: this.$route.query.location,
        query: this.$route.query.query
      })
      .then(() => {});
  }
};
