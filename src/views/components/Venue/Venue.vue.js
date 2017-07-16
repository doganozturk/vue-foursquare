export default {
  name: "Venue",
  props: {
    venue: {
      type: Object
    }
  },
  data() {
    return {};
  },
  computed: {
    getFeaturedPhoto() {
      const imgSize = "290x290";
      const data = this.venue.venue.featuredPhotos.items[0];

      return `${data.prefix}${imgSize}${data.suffix}`;
    },
    ratingControl() {
      const rating = this.venue.venue.rating.toString();

      if (rating.length === 1) return `${rating}.0`;
      return rating;
    }
  }
};
