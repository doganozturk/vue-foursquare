import get from "lodash.get";
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
      let rating = get(this.venue, "rating");

      if (rating && typeof rating === "number") {
        rating = rating.toString();
        if (rating.length === 1) return `${rating}.0`;
        return rating;
      }
      return false;
    },
    getBestPhoto() {
      const photo = get(this.venue, "bestPhoto");
      const imgSize = "1200x600";
      const photoUrl = photo ? `${photo.prefix}${imgSize}${photo.suffix}` : "";

      return photoUrl;
    }
  }
};
