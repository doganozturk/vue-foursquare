import get from "lodash.get";
import mixin from "../../../lib/mixin";
import PriceIndicator from "../PriceIndicator/PriceIndicator";

export default {
  name: "HeaderVenueDetail",
  components: {
    PriceIndicator
  },
  mixins: [mixin],
  props: {
    venue: {
      type: Object
    }
  },
  computed: {
    getBestPhoto() {
      const photo = get(this.venue, "bestPhoto");
      const imgSize = "1200x600";
      const photoUrl = photo ? `${photo.prefix}${imgSize}${photo.suffix}` : "";

      return photoUrl;
    }
  }
};
