export default {
  name: "Tips",
  props: {
    tips: {
      type: Array
    }
  },
  methods: {
    getUserPhoto(photo) {
      const imgSize = "100x100";

      return `${photo.prefix}${imgSize}${photo.suffix}`;
    }
  }
};
