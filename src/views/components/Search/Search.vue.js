import { mapGetters } from "vuex";

export default {
  name: "Search",
  data() {
    return {
      location: "",
      query: ""
    };
  },
  computed: {
    ...mapGetters(["venues"])
  },
  methods: {
    setRecentSearches() {
      let recentSearches = localStorage.getItem("recentSearches") || [];

      if (typeof recentSearches === "string")
        recentSearches = JSON.parse(recentSearches);

      if (recentSearches.length > 9) recentSearches.shift();

      recentSearches.push({
        location: this.location,
        query: this.query
      });

      localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
    },
    fetchVenues() {
      this.setRecentSearches();
      this.$store.dispatch("fetchVenues", {
        location: this.location,
        query: this.query
      });
      this.$router.push({
        path: "venues",
        query: { location: this.location, query: this.query }
      });
    }
  }
};
