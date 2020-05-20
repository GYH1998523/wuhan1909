import Request from './request'
const http = new Request()

http.interceptor.request((config, cancel) => { /* 请求之前拦截器 */
  uni.showLoading({ title: '处理中...' })
  config.header = {
    ...config.header,
    "Auth-token": uni.getStorageSync('token')
  }
  return config
})

http.interceptor.response((response) => { /* 请求之后拦截器 */
  uni.hideLoading()
  if(response.data.code === "4000") {
    return response
  }else if(response.data.code === "4017"){
    uni.showToast({ title: response.data.msg, duration: 1500, icon: "none"})
    uni.removeStorageSync('token')
    uni.reLaunch({
       url: '../../pages/login/login'
    });
    return false
  }else{
    uni.showToast({
      title: response.data.msg,
      duration: 1500,
      icon: "none"
    })
    return false
  }
}, (response) => { // 请求错误做点什么
  uni.showToast({
    title: "服务器响应失败！",
    duration: 1500,
    icon: "none"
  })
  return false
})

export default http
