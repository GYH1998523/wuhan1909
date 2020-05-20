import axios from "axios"
import { Notify } from "vant";
import { Toast } from "vant";

import router from "../router";


let token = ""

// 设置应用接口的基路径 
const baseURL = "http://localhost:1911"
// axios.defaults.baseURL = baseURL;      //使用了反向代理必须关闭基路径

axios.defaults.headers.common['token'] = token;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';;

function loading() {
    Toast.clear();
    // 加载图标
    Toast.loading({
        message: '努力加载中...',
        forbidClick: true,
        // overlay: true,
    });


}

// 成功返回
function success(msg) {

    Notify({ type: 'success', message: msg ,duration:600})
    Toast.clear();

}

// 失败返回
function fail(msg) {
    Notify({ type: 'danger', message: msg ,duration:600})
    Toast.clear();

}


// axios  拦截器  Interceptors


// request 请求发送之前的拦截器
axios.interceptors.request.use(function (config) {
    // 请求成功的函数

    // 添加token
    token = sessionStorage.token ? sessionStorage.token : "";
    config.headers['token'] = token;

    // 配置动画
    loading();
    return config;
}, function (error) {
    // 请求失败的函数
    fail('请求失败-网络异常')
    return Promise.reject(error)
})


// response 响应 完成 的拦截器
axios.interceptors.response.use(function (response) {
    console.log(response)
    // 成功的响应

    if (response.data.code == "3000") {
        router.push({ name: 'login', query: { active: 'login' } })
    }
    if (!!response.data.type) {
        success(response.data.msg)

    } else {
        if (response.data.type == 0) {
            fail(response.data.msg)

        } else {
            success(response.data.msg)

        }

    }



    return response;
}, function (error) {
    fail('响应失败-服务器异常')
    // 失败的响应 
    return Promise.reject(error)

});


export { axios, baseURL }