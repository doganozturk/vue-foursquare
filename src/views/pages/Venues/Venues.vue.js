import { mapGetters } from "vuex";
import HeaderVenues from "../../components/HeaderVenues/HeaderVenues";
import Venue from "../../components/Venue/Venue";
import RecentSearches from "../../components/RecentSearches/RecentSearches";
import Footer from "../../components/Footer/Footer";

export default {
  name: "Venues",
  data() {
    return {
      recentSearches: []
    };
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
    this.fetchVenues();

    this.setRecentSearches();
  },
  methods: {
    fetchVenues() {
      this.$store
        .dispatch("fetchVenues", {
          location: this.$route.query.location,
          query: this.$route.query.query
        })
        .then(() => {
          this.venues = this.$store.state.venues;
        });
    },
    setRecentSearches() {
      this.recentSearches = JSON.parse(localStorage.getItem("recentSearches"));
    }
  }
};
