<template>
  <div class="swiper-container" :id="id">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
export default {
  props: ["id", "swiperOptions"],
  mounted() {
    // let mySwiper =new Swiper()
    let mySwiper = new Swiper(`#${this.id}`, this.swiperOptions);
  },
  updated() {
    let mySwiper = new Swiper(`#${this.id}`, this.swiperOptions);
  }
};
</script>