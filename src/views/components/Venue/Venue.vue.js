import get from "lodash.get";
import mixin from "../../../lib/mixin";
import PriceIndicator from "../PriceIndicator/PriceIndicator";

export default {
  name: "Venue",
  components: {
    PriceIndicator
  },
  mixins: [mixin],
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
    }
  }
};
