import { mapGetters } from "vuex";
import HeaderVenueDetail from "../../components/HeaderVenueDetail/HeaderVenueDetail";
import Tips from "../../components/Tips/Tips";
import AppFooter from "../../components/AppFooter/AppFooter";

export default {
  name: "Venues",
  components: {
    HeaderVenueDetail,
    Tips,
    AppFooter
  },
  computed: {
    ...mapGetters(["venue"])
  },
  created() {
    this.setVenue();
  },
  methods: {
    setVenue() {
      this.fetchVenueById();
    },
    fetchVenueById() {
      this.$store.dispatch("fetchVenueById", this.$route.query.id);
    }
  }
};
