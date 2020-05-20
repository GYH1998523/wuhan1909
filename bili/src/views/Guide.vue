<template>
  <div class="guide">
    <van-swipe :loop="false" class="show" :show-indicators="false">
      <van-swipe-item v-for="(m,i) in imgs" :key="i">
        <van-button
          @click="gotoMain"
          v-if="i==0"
          size="small"
          color="pink"
          class="g-btn1"
          plain
          hairline
          type="info"
        >跳过</van-button>

        <img :src="m" alt />

        <van-button
          @click="gotoMain"
          v-if="i==imgs.length-1"
          size="large"
          color="#97cdf7"
          class="g-btn"
        >马上进入二次元世界</van-button>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import { Notify } from "vant";
import router from "@/router";

export default {
  data() {
    return {
      imgs: [
        require("@/assets/images/b1.png"),
        require("@/assets/images/b2.png"),
        require("@/assets/images/b3.png"),
        require("@/assets/images/b4.png")
      ]
    };
  },
  methods: {
    gotoMain() {
      // 因为main 默认显示login  这里我直接跳movie
      this.$router.push({ name: "login" });
    }
  },
  mounted() {
    if (window.localStorage) {
      if (localStorage.visitcount) {
        localStorage.visitcount++;
        if (localStorage.visitcount > 2) {
          this.$router.push({ name: "login" });
        }
      } else {
        localStorage.visitcount = 1;
      }
    } else {
      Notify({ type: "danger", message: "浏览器不支持 localStorage" });
    }
  }
};
</script>

</script>
<style  scoped>
.show {
  height: 100vh;
}
img {
  width: 100% !important;
  height: 100% !important;
}
.g-btn1 {
  position: absolute;
  z-index: 100;
  bottom: 0.25rem;
  right: 0.25rem;
  width: 1.6rem;
  height: 0.8rem;
}
.g-btn {
  position: absolute;
  z-index: 100;
  right: 0;
  bottom: 0;
}
</style>
