<template>
  <div class="main">
    <router-view></router-view>
    <Bilibili v-if="checked"></Bilibili>
    <Foot></Foot>
  </div>
</template>
<script>
import Foot from "@/components/Foot.vue";
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    Foot
  },
  computed: {
    checked: {
      get() {
        return this.$store.state.checked;
      },
      set(newVal) {
        this.$store.commit("changecheched", newVal);
    
      }
    },  
  },
  mounted() {
    this.changecheched();
  },
  methods: {
    changecheched() {
      this.checked = this.checked;
    }
  }
};
</script>









