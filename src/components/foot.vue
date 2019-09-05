<template>
		<p>Copyright 1998 - 2018 {{$store.state.copyright}}. All Rights Reserved
		<br />
<!-- 			<top /> -->
		</p>
 </template>
<script>
function cr(){
  if(location.pathname=="/")
//location='http://webmarks.cn';
throw '微信未登录，将自动登录'
}
/*  cr();
alert(123)动态注册子组件 
var dc=Vue.extend(require('@/components/r.vue').default);
new dc().$mount('#test')*/
/*import Vue from "vue/dist/vue.common.js";//Vue is not defind
var cn="top"
		import("@/components/"+cn+".vue").then((component) => {
									console.log(component)
									 Vue.component(cn, component)    
    //return Vue.extend(component)
  })*/
//students=>this.students=students
  
								//Vue.component(cn, require("@/components/"+cn+".vue").default);
								//Vue.extend(require("@/components/"+cn+".vue").default);
	export default{
  
		created(){
         window.addEventListener('popstate', function (e) {
    if (e.state.wxf==1) {
      alert(e.state)
    }
  }); 
     window.history.pushState({wxf:1}, null, '#'); 
 window.history.forward(1);

    }
	}
</script>