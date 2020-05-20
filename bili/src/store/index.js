import Vue from 'vue'
import Vuex from 'vuex'
import { axios } from "@/utils"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    checked: false,
    data: {
      userInfo: {},
      lunbo: [],
      shouye: [],
      donghua: [],
      fanju: [],
      guochan: [],
      guichu: [],
      videoInfo: {},
      somevideo: [],
      searchInfo: [],
      list: [],
    },
    mid: "",
    keyword: ""

  },
  mutations: {
    // 改变悬浮机器人的状态
    changecheched(state, newVal) {
      console.log(state)

      state.checked = newVal
    },

    // 获取用户信息集合
    getuserInfo(state, userInfo) {
      state.data = { ...state.data, userInfo }
    },

    getlunbo(state, lunbo) {
      state.data = { ...state.data, lunbo }
    },
    getshouye(state, shouye) {
      state.data = { ...state.data, shouye }
    },
    getdonghua(state, donghua) {
      state.data = { ...state.data, donghua }
    },
    getfanju(state, fanju) {
      state.data = { ...state.data, fanju }
    },
    getguochan(state, guochan) {
      state.data = { ...state.data, guochan }
    },
    getguichu(state, guichu) {
      state.data = { ...state.data, guichu }
    },
    postmid(state, mid) {
      state.mid = mid
    },
    getvideoInfo(state, videoInfo) {
      state.data = { ...state.data, videoInfo }
    },
    getsomevideo(state, somevideo) {
      state.data = { ...state.data, somevideo }
    },
    getsearchvideo(state, searchInfo) {
      state.data = { ...state.data, searchInfo }
      console.log(state.data.searchInfo)
    },


  },
  actions: {
    getuserInfo({ commit }, { url, cb }) {
      axios.get(url).then(res => {
        commit("getuserInfo", res.data.result);
        cb();
      })
    },
    getlunbo({ commit }, { url, cb }) {
      axios.post(url).then(res => {
        commit("getlunbo", res.data.result);
        cb();
      })
    },
    getshouye({ commit }, { url, cb }) {
      axios.post(url).then(res => {
        commit("getshouye", res.data.result);
        cb();
      })
    },
    getdonghua({ commit }, { url, cb }) {
      axios.post(url).then(res => {
        commit("getdonghua", res.data.result);
        cb();
      })
    },
    getfanju({ commit }, { url, cb }) {
      axios.post(url).then(res => {
        commit("getfanju", res.data.result);
        cb();
      })
    },
    getguochan({ commit }, { url, cb }) {
      axios.post(url).then(res => {
        commit("getguochan", res.data.result);
        cb();
      })
    },
    getguichu({ commit }, { url, cb }) {
      axios.post(url).then(res => {
        commit("getguichu", res.data.result);
        cb();
      })
    },
    getvideoInfo({ commit }, { url, mid, cb }) {
      axios.post(url, { mid }).then(res => {
        commit("getvideoInfo", res.data.result);
        cb();
      })
    },
    getsomevideo({ commit }, { url, cb }) {
      axios.post(url).then(res => {
        commit("getsomevideo", res.data.result);
        cb();
      })
    },
    getsearchvideo({ commit }, { url, params, cb }) {
      axios.get(url, { params }).then(res => {
        commit("getsearchvideo", res.data.result);
        cb();

      })
    },

  },
  modules: {
  }
})
