<template>
<div :class='"pop "+cls' v-show='show' :style="{ height:h }">
	<div class="box" :style="{top:top }"><a class="close" v-on:click="show=false">X</a>
		<h4 v-if='tit!=undefined' class="tit">{{tit}}</h4><!--<slot name='body'>{{body}}}</slot> 
    <a href="http://webmarks.cn" v-html="body"></a> -->
    <!-- <div ref="aaa"></div> -->
	<command slot="body" :is="com" />
  </div>
	<!--<link ref="pcss" :href="css" type="text/css" rel="stylesheet" />-->
	</div>
		</template>
		<script>
import pop from '@/mix/pop.js'
/*import swipe from "@/components/com/swipe.vue";*/
export default {
  beforeCreate:function(){
       // new (Vue.extend(require("@/components/com/swipe.vue").default))();
  },
    mixins:[pop],
    components:{
     // swipe 
    }
};
</script>
<style scoped>
.pop {
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 999;
  top: 0;
  text-align: center;
}
.box {
  background: #fff;
  overflow: visible;
  position: relative;
  top: 50%;
  left: 50%;
  width: 80%;
  height:8rem;
  margin: -4rem 0 0 -40%;
}
.box .tit {
  margin: -20px -20px 0;
}
.close {
  background: #999;
  color: #fff;
  font-size: 0.44rem;
  border-radius: 50%;
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
  width: 0.6rem;
  height: 0.6rem;
  line-height: 0.6rem;
}
/**/
.pop1 {
background: #ffe;
}
.pop2 {
  background: #fee;
}
</style>
 <!--<style>@import `../assets/$this.css`;</style>
  <style>import(`../assets/${css}`)</style>
  <style>@import('../assets/'+this.css);</style>-->