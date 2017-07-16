import router from "../../../router";

export default {
  name: "Search",
  data() {
    return {
      location: "",
      query: ""
    };
  },
  methods: {
    getVenues() {
      router.push({
        path: "venues",
        query: { location: this.location, query: this.query }
      });
    }
  }
};
