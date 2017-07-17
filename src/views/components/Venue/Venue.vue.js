import get from "lodash.get";
import PriceIndicator from "../PriceIndicator/PriceIndicator";

export default {
  name: "Venue",
  components: {
    PriceIndicator
  },
  props: {
    venue: {}
  },
  data() {
    return {};
  },
  computed: {
    getFeaturedPhoto() {
      const imgSize = "290x290";
      const data = get(this.venue, "venue.featuredPhotos.items[0]");

      if (data) return `${data.prefix}${imgSize}${data.suffix}`;
      return false;
    },
    ratingControl() {
      let rating = get(this.venue, "venue.rating");

      if (rating && typeof rating === "number") {
        rating = rating.toString();
        if (rating.length === 1) return `${rating}.0`;
        return rating;
      }
      return false;
    }
  }
};
