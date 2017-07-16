import { mapGetters } from "vuex";

export default {
  name: "RecentSearches",
  props: {
    recentSearches: {
      type: Array
    }
  },
  computed: {
    ...mapGetters(["venues"]),
    reverseRecentSearches() {
      return this.recentSearches.reverse();
    }
  },
  methods: {
    fetchVenues(location, query) {
      this.$store
        .dispatch("fetchVenues", {
          location,
          query
        })
        .then(() => {
          this.$router.push({
            path: "venues",
            query: {
              location,
              query
            }
          });
        });
    }
  }
};
