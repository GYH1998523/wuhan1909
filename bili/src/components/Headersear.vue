<template>
  <div class="Headersear">
    <van-nav-bar @click-left="gotoBack" :title="title" :left-text="show?'返回':''" :left-arrow="show">
      <van-icon v-if="!login" class="l-rirht" @click="gotoHome" name="home-o" slot="right" />
      <van-icon v-if="!search" @click="gotoSearch" name="search" slot="right" />
    </van-nav-bar>
  </div>
</template>
<script>
export default {
  props: ["show", "title", "login", "search"],
  data() {
    return {
      img: require(`@/assets/images/logo.png`)
    };
  },
  methods: {
    gotoBack() {
      this.$router.go(-1);
    },
    gotoSearch() {
      this.$router.push({ name: "search" });
    },
    gotoHome() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>
<style scoped>
.van-nav-bar__title {
  color: rgb(124, 124, 124);
}
.l-rirht {
  margin-right: 0.5rem;
}
.logo {
  width: 24%;
  height: 5%;
  position: absolute;
  top: 1%;
  left: 3%;
  z-index: 999;
}
.logo img {
  width: 100%;
  height: 100%;
}
.head {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 66;
  width: 100%;
  height: 1rem;
}
</style>