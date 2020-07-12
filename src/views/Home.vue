<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h1>---------------------------------</h1>
    <p>{{multidata}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {fenlei} from "../network/axiosApi"

// request({
//   url:"/home/multidata",
// }).then(res=>{
//   console.log(res)
// }).catch(err=>{
//   console.log(err)
// })
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return{
      multidata:"",
    }
  },
  created(){
    fenlei().then(res=>{
    console.log(res)
    this.multidata=res
  }).catch(err=>{
    console.log(err)
  })
  }
}
</script>
