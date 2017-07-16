export default {
  name: "RecentSearches",
  props: {
    recentSearches: []
  },
  computed: {
    reverseRecentSearches() {
      return this.recentSearches.reverse();
    }
  }
};
