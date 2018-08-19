<template>
<div class="pop" v-show='show'>
	<div class="box"><a class="close" v-on:click="pop()">X</a>
		<h4 v-if='tit!=undefined' class="tit">{{tit}}</h4><slot name='body'>{{body}}</slot>
	</div></div>
		</template>
		<script>
export default{
			data(){
					return {
					show:false,
					tit:"",
					body:"",
					com:""
					};
				},
				methods:{
					pop:function(o){
						console.log(o)
						if(o)
						{
							this.tit=o.tit;
							if(o.com){
							
							this.$parent.com=o.com;
						}
						//else
						//this.$parent.body=o.body;
							this.body=o.body;
							this.show=true;
						}
						else{
							this.show=false;
						}
					}
				}
			}
			</script>
						<style>
							@import "http://localhost:60090/App_Themes/com.css";
							@import "http://localhost/App_Themes/Base.css"; 
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
</style>			