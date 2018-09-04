<template>
  <div id="app"><div id='test' v-on:click='addCom()'>AAA</div>




  
<top />
<!-- <navs /> -->
<component :is='cc' />
   <!--  <login></login>  -->
   <!-- <login v-on:msg="cb" />-->
<!-- <r v-bind:t="s"/> -->
<router-view></router-view>
<foot />
<pop ref='pop'>
    <component slot="body"  v-bind:is='com'></component>
<!--  <login slot='body'></login> -->
</pop>
<keep-alive include='top,foot' exclude='navs'>
<componet v-bind:is='currentView'></componet></keep-alive>
<input v-model.lazy="currentView" v-on:change="switchView(currentView)" />
  </div>
</template>
<script>
import top from '@/components/top'
/* import r from '@/components/r' */
/* import navs from '@/components/nav' */
import foot from '@/components/foot'
import base from '@/raw/base.js'

import Vue from "vue/dist/vue.common.js"




   import('@/components/top.vue').then(cmp => {this.cmp=cmp
  // mountCmp.call(this, cmp, {title: 123456}, document.body)
      })
    function mountCmp (cmp, props, parent) {
cmp = Vue.extend(cmp.default)
let node = document.createElement('div')
parent.appendChild(node)
new cmp({ //eslint-disable-line
  el: node,
  propsData: props,
  parent: this
})
}


 var dc=Vue.extend(require('@/components/r.vue').default);
let node = document.createElement('div')
document.body.appendChild(node)
new dc({el:node,propsData:this.props});/**/

/* //父组件中:
Vue.component('mycontent', {
        props: ['content'],
        data() {
            return {
                coms: [],
            }
        },
        render: function(h) {
            this.coms = [];
            for(var i = 0; i < this.content.length; i++) {
                this.coms.push(h(this.content[i], {}))
            }
            return h('div', {},
                this.coms)
        },
    });
//子组件调用：
    <mycontent v-bind:content="content"></mycontent> */


this.cc='my';
//Vue.use(base);
export default {
  name: 'App',
  components:{
     login: require('@/components/login').default,
   top,
/*     navs, 
  r,*/
  foot,
  pop:require('@/components/pop').default
   },
  data:function(){
return {
  s:"",
  com:'foot',
  currentView:'top',
  cc:''
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
/*       var a='navs',
  p='../nav';
Vue.component(a, function (resolve) {
  require([p], resolve)//异步加载组件
})  
this.components={
	a: () => import(p),
  }
  this.cc=a */
},

  methods:{
    addCom:function(){
/* var Profile = Vue.extend({
  template: '<p>AAAAAAA</p>',
  data: function () {
    return {
    }
  }
}) */

//var dc = Vue.extend(require('@/components/r.vue').default);
 var dc=Vue.extend(require('@/components/r.vue').default);
let node = document.createElement('div')
document.body.appendChild(node)
new dc().$mount(node);/**/





    },
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
   	/*	var a='navs'
					Vue.component(a, function (resolve) {
  require(['./nav'], resolve)//异步加载组件
})  
this.components={
	a: () => import('./nav'),
  }
  this.lk=a
*/
/*Vue.component('lk', function (resolve, reject) {
    resolve({
      template: '<link :href="this.$parent.css" type="text/css" rel="stylesheet" />'
    })
})
 new Vue({
  el:'app',
  components: {
	  name:'lk',
    // <my-component> 将只在父模板可用
    'lk':{ template: '<link ref="pcss" :href="css" type="text/css" rel="stylesheet" /> '}
  }
}) 
this.lk='lk'*/
/* // r就是resolve
const list = r => require.ensure([], () => r(require('./r')), 'r');
// 路由也是正常的写法  这种是官方推荐的写的 按模块划分懒加载 
const router = new Router({
    routes: [
        {
           path: './r',
           component: list,
           name: 'r'
        }
    ]
})
 */
  },
  computed:{

  }
} 
</script>

<style>

</style>
