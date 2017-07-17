import get from "lodash.get";

const Mixin = {
  methods: {
    ratingControl(venue) {
      let rating = get(venue, "rating");

      if (rating && typeof rating === "number") {
        rating = rating.toString();
        if (rating.length === 1) return `${rating}.0`;
        return rating;
      }
      return false;
    }
  }
};

export default Mixin;
