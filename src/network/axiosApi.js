import axiosRequest from "../network/index"
// 所有接口
// 分类的接口
export function fenlei(){
    return axiosRequest({
        url:"/home/multidata",
        method:"get"
    })
}
// 登录接口
export function login(){
    return axiosRequest({
        url:"/login",
        method:"get"
    })
} 