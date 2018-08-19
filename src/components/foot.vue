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
alert(123) */

/*import Vue from "vue/dist/vue.common.js";//Vue is not defind
动态注册子组件var cn="top"
		import("@/components/"+cn+".vue").then((component) => {
									console.log(component)
									 Vue.component(cn, component)    
    //return Vue.extend(component)
  })
   import('./top.vue').then(cmp => {
    mountCmp.call(this, cmp, {title: 123456}, document.getElementById("test"))
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

}*/
  
								//Vue.component(cn, require("@/components/"+cn+".vue").default);
								//Vue.extend(require("@/components/"+cn+".vue").default);
	export default{
  
		
	}
</script>