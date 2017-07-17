export default {
  name: "Tips",
  data() {
    return {
      allTips: false,
      showAllTipsBtn: false
    };
  },
  props: {
    tips: {
      type: Array
    }
  },
  created() {
    if (this.tips.length > 5) this.showAllTipsBtn = true;
  },
  methods: {
    getUserPhoto(photo) {
      const imgSize = "100x100";

      return `${photo.prefix}${imgSize}${photo.suffix}`;
    },
    toggleAllTips() {
      this.allTips = !this.allTips;
    }
  }
};
