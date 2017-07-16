export default {
  name: "Search",
  data() {
    return {
      location: "",
      query: ""
    };
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
    getVenues() {
      this.setRecentSearches();

      this.$router.push({
        path: "venues",
        query: { location: this.location, query: this.query }
      });
    }
  }
};
