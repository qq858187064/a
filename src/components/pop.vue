<template>
<div :class='cls' v-show='show'>
	<div class="box"><a class="close" v-on:click="pop()">X</a>
		<h4 v-if='tit!=undefined' class="tit">{{tit}}</h4><slot name='body'>{{body}}</slot>
	</div>
<!-- 	<command :is="lk" />
	<link ref="pcss" :href="css" type="text/css" rel="stylesheet" />  -->
	</div>
		</template>
		<script>
export default{
			data(){
					return {
					show:false,
					tit:'',
					body:'',
					com:'',
					css:'',
					cls:'pop'
					};
				},
				watch:{
/* 					cls:function(){
						this.cls=this.cls;
					} */
				},
			beforeCreate:function(){
				
				}, 	
				created:function(){
				}, 
				mounted:function(){
				},/**/
				methods:{
					pop:function(o){//import(`../assets/${this.css}`); 
			
						if(o)
						{
							this.tit=o.tit;
							if(o.com){
							this.$parent.com=o.com;
						}
							this.body=o.body;
							this.show=true;
							if(o.css){
								this.css="../assets/"+o.css;
/* 				 let lk=document.createElement('link');
					lk.href=this.css;
					document.head.appendChild(lk);
								console.log(this.css) */
								}
								if(o.cls)
							this.cls=this.cls +' '+o.cls;
						}
						else{
							this.show=false;
						}
					}
				},
			watch:{
css:function(){
return '../assets/'+this.css;
  //console.log("watch currentView:"+this.currentView)
}
},
			}
			</script>
						<style>
/*  							@import "http://localhost:60090/App_Themes/com.css";
 */							@import "http://localhost/App_Themes/Base.css"; 
/* */
 .pop{
	background-color: rgba(0,0,0,0.2);
	width:100%;
	height: 100%;
	position: absolute;
	z-index: 999;
    top: 0;
	text-align: center;
}
.box{
	background: #fff;
	overflow: visible;
    position: relative;
    top: 50%;
    left: 50%;
	width: 16rem;
    height: 22rem;
    margin: -11rem 0 0 -8rem;
}
.box .tit{
	margin:-20px -20px 0;
}
.close{
	background: #999;
	color: #fff;
    font-size: 1.2rem;
	border-radius: 50%;
    position: absolute;
	top: -0.6rem;
    right: -0.6rem;
	width: 2rem;
	height: 2rem;
	line-height: 2rem;
}
/**/
.pop1{
	background: #ffc;
}
.pop2{
	background: #fcc;
}
</style>
 <!--<style>@import `../assets/$this.css`;</style>
  <style>import(`../assets/${css}`)</style>
  <style>@import('../assets/'+this.css);</style>-->