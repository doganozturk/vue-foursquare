import PriceIndicator from "../PriceIndicator/PriceIndicator";

export default {
  name: "HeaderVenueDetail",
  components: {
    PriceIndicator
  },
  props: {
    venue: {
      type: Object
    }
  },
  computed: {
    ratingControl() {
      const rating = this.venue.rating.toString();

      if (rating.length === 1) return `${rating}.0`;
      return rating;
    },
    getBestPhoto() {
      const photo = this.venue.bestPhoto;
      const imgSize = "1200x600";
      const photoUrl = `${photo.prefix}${imgSize}${photo.suffix}`;

      return photoUrl;
    }
  }
};
