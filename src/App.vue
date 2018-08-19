<template>
  <div id="app"><div id='test'></div>
<top />
<navs />
    <!-- <login v-on:lg="lg"></login> 
   <login v-on:msg="cb" />-->
<r v-bind:t="s"/>
<router-view></router-view>
<foot />
<pop ref='pop'>
    <component v-bind:is='com'></component>
<!--  <login slot='body'></login> -->
</pop>
<keep-alive include='top,foot' exclude='navs'>
<componet v-bind:is='currentView'></componet></keep-alive>
<input v-model.lazy="currentView" v-on:change="switchView(currentView)" />
  </div>
</template>
<script>
import top from '@/components/top'
import r from '@/components/r'
import navs from '@/components/nav'
import foot from '@/components/foot'
import base from '@/raw/base.js'


//Vue.use(base);
export default {
  name: 'App',
  components:{
     login: require('@/components/login').default,
   top,
    navs,
  r,
  foot,
  pop:require('@/components/pop').default
   },
  data:function(){
return {
  s:"",
  com:'foot',
  currentView:'top'
  /*,
  popv:false弹出窗状态*/
}
},
watch:{
currentView:function(){

  console.log("watch currentView:"+this.currentView)
}
},
created:function(){
    this.localData();
},
mounted:function(){
  console.log(base);
},
  methods:{
        cb:function(a){
      console.log(a);
      this.s=a;
    },
    switchView:function(currentView){
this.currentView=currentView;
    },
    /* pop:function(o){
      console.log(o);
      this.show=o.show;
    }, */
       /*将store中全局对象存入localStorage*/
    localData(){
      var key="localState",
      dt=localStorage.getItem(key);
      dt && this.$store.replaceState(Object.assign(this.$store.state,JSON.parse(dt)));/*Vuex里添加新的字段，合并到localStorage后再写入store.state*/
      window.addEventListener("beforeunload",()=>{/*将store.state存入localStorage*/
        localStorage.setItem(key,JSON.stringify(this.$store.state))
    })
    }
        /*
//if (typeof module === "object" && typeof module.exports === "object") {
//    module.exports = Tabs
//}



1、在vuex获取到用户信息时（例：state.user_id = user_info.user_id），同时把这个信息存入localStorage
2、我们定义一个mutation方法，再次把数据从localStorage传给state；
3、我们的问题发生在页面刷新时，可能很多同学就会去想在监听页面刷新事件时触发上面第2步的那个方法。
其实不用这么麻烦，在computed属性时，只要我们判断一下用户信息是否为空，为空时调用第2步的那个方法就好了，
然后我们把这个state return给那个响应属性就好了；
4、至于为什么这么麻烦在state和localStorage中传来传去，是因为state的值刷新后会没了，
而localStorage的值不能响应式地变化（Vue 仅可以对其管理的数据做响应式处理，可以理解为 data 中的数据，
localStorage 并不在 Vue 的管理下，自然不会有响应特性）；
        */
/*
    lg:function(nm,pwd){
console.log(nm+"+++"+pwd);
//http://localhost:60090/home/cb
this.$http.get("/apis/home/cb").then(function(rsp){
  console.log(rsp)
  if(rsp.status==200)
  {
    console.log(rsp.body.length);
    this.b=rsp.body.length
  }
})
//(rsp)=>{}
    }
    */
  },
  computed:{

  }
}
</script>

<style>

</style>
