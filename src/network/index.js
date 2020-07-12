// import axios from "axios"
// export function request(config){
// // 1创建axios的实例，防止服务器变更
// const request1=axios.create({
//     baseURL:"http://123.207.32.32:8000",
//     timeout:5000
// })
// // 2 拦截器
// // 2.1请求拦截
//  request1.interceptors.request.use(config=>{
//     console.log(config)
// //  做一些相应的处理
// // 1处理config中一些不符合要求的配置
// // 2加载页面图标
// // 3某些网络请求 比如token
//     return config
// },err=>{
//     console.log(err)
// })
// // 2.2响应拦截
// request1.interceptors.response.use(res=>{
//     return res.data
// },err=>{
//     console.log(err)
// })
// //3 发送请求
//  return request1(config)
// }
import axios from "axios"
import store from "../store/index"
// 1创建axios的实例，防止服务器变更
const request1=axios.create({
    baseURL:"http://123.207.32.32:8000",
    timeout:5000
})
// 2 拦截器
// 2.1请求拦截
 request1.interceptors.request.use(config=>{
    console.log(config)
    console.log(store.state.a)
//  做一些相应的处理
// 1处理config中一些不符合要求的配置
// 2加载页面图标
// 3某些网络请求 比如token
    return config
},err=>{
    console.log(err)
})
// 2.2响应拦截
request1.interceptors.response.use(res=>{
    return res.data
},err=>{
    console.log(err)
})
export default request1
