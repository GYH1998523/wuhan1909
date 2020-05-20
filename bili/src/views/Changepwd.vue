<template>
  <div class="changepwd">
    <Header title="修改密码" :show="true " :search="true"></Header>
    <img src="http://img3.imgtn.bdimg.com/it/u=1247225287,1510315136&fm=26&gp=0.jpg " alt />
    <div style="margin:5%">&nbsp;</div>
    <van-cell-group>
      <van-field :value="mobile | tel()" label="手机号" disabled />
    </van-cell-group>
    <van-field
      clearable
      v-model="changepwd.oldpwd"
      :type="flag1?'text':'password'"
      label="旧密码"
      placeholder="请输入旧密码"
      :right-icon="flag1?'eye-o':'closed-eye'"
      @click-right-icon="openeye1"
    />

    <van-field
      clearable
      v-model="changepwd.newpwd"
      :type="flag2?'text':'password'"
      label="新密码"
      placeholder="请输入新密码"
      :right-icon="flag2?'eye-o':'closed-eye'"
      @click-right-icon="openeye2"
    />

    <van-button class="btn1" plain color="#7b7979" @click="checkpwd">狠心确认</van-button>

    <div class="changefoot">
      <p>哔哩哔哩 沪ICP备13002172号-3</p>
      <p>信息网络传播视听节目许可证：0910417</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mobile: "",
      flag1: false,
      flag2: false,
      mobile: 18288263451,
      changepwd: {}
    };
  },
  filters: {
    tel(value) {
      if (!value) return value;
      value = value.toString().split("");
      value.splice(3, 4, "*", "*", "*", "*", "*");
      return value.join("");
    }
  },
  mounted() {
    this.mobile = sessionStorage.mobile;
  },
  methods: {
    openeye1() {
      this.flag1 = !this.flag1;
    },
    openeye2() {
      this.flag2 = !this.flag2;
    },
    checkpwd() {
      this.$axios.post("/vue/changepwd", this.changepwd).then(res => {
        console.log(res);
        this.$router;
      });
    }
  }
};
</script>

<style scoped>
img {
  width: 100%;
  height: 10%;
}
.changefoot {
  position: absolute;
  left: 0;
  bottom: 10%;
  width: 100%;
}
.changefoot p {
  font-size: 10px;
  text-align: center;
  color: rgb(206, 206, 206);
  margin: 1%;
}
.btn1 {
  width: 100%;
  margin: 5% 0 0 0;
  border: none;
}
</style>