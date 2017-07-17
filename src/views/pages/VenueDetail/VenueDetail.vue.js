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
    ...mapGetters(["venue", "venuePhotos"])
  },
  created() {
    this.setVenue();
    this.setVenuePhotos();
  },
  methods: {
    setVenue() {
      this.fetchVenueById();
    },
    setVenuePhotos() {
      this.fetchVenuePhotos();
    },
    fetchVenueById() {
      this.$store.dispatch("fetchVenueById", this.$route.query.id);
    },
    fetchVenuePhotos() {
      this.$store.dispatch("fetchVenuePhotos", this.$route.query.id);
    }
  }
};
