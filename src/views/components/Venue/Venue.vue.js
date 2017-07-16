export default {
  name: "Venue",
  props: {
    venue: {}
  },
  data() {
    return {};
  },
  computed: {
    getFeaturedPhoto() {
      const imgSize = "290x290";
      const data = this.venue.venue.featuredPhotos.items[0];

      return `${data.prefix}${imgSize}${data.suffix}`;
    }
  }
};
