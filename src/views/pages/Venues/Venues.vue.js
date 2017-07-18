import { mapGetters } from "vuex";
import HeaderVenues from "../../components/HeaderVenues/HeaderVenues";
import Venue from "../../components/Venue/Venue";
import RecentSearches from "../../components/RecentSearches/RecentSearches";
import AppFooter from "../../components/AppFooter/AppFooter";

export default {
  name: "Venues",
  data() {
    return {
      recentSearches: []
    };
  },
  computed: {
    ...mapGetters(["venues"])
  },
  components: {
    HeaderVenues,
    Venue,
    RecentSearches,
    AppFooter
  },
  watch: {
    $route: "fetchVenues"
  },
  created() {
    this.setRecentSearches();
    this.setVenues();
  },
  methods: {
    setRecentSearches() {
      this.recentSearches = JSON.parse(localStorage.getItem("recentSearches"));
    },
    setVenues() {
      const venues = this.$store.state.venues;
      this.venues = venues.length ? venues : this.fetchVenues();
    },
    fetchVenues() {
      this.setRecentSearches();
      this.$store.dispatch("fetchVenues", {
        location: this.$route.query.location,
        query: this.$route.query.query
      });
    }
  }
};
