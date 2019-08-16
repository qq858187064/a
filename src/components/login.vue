<template>
<form class="fm" id="login" rpt="prt" action="/login" method="post"><h1>登录</h1>
    <label for="act">账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号<input type="text" id="act" name="act" class="txt" p="Preset:'Rqd',Regex:/^\S{2,32}$/,Cem:'账号长度须在2-32之间'" value="13128988008" v-model="nm"></label>
    <label for="pwd">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码<input type="password" id="pwd" name="pwd" class="txt" p="Preset:'Rqd Pwd'" value="147258" v-model="pwd"></label>
    <a class="bt2 trsho mt9 lgbt" id="l" href="#" v-on:click="lg">登录</a>
    <label for="rmb" style="text-align:right"><input id="rmb" type="checkbox" title="1月内保持登录">记住登录<a href="/pwd" title="找回密码" style="margin-left:21px;">忘记密码？</a></label>
</form>
</template>
<script>
	import {mapState,mapMutations } from 'vuex';
	
	export default{
		name:"login",
		data:function(){
			return {
			pwd:"",
			nm:""	
			};
		},
		methods:{
			lg:function(){
				console.log("login.vue中lg："+this.nm);
				//this.$emit('msg', this.nm+"_"+this.pwd);//向父组件触发自定义事件，父组件监听该事件
				//this.$parent.s=this.nm+"_"+this.pwd;//调用父组件的方法
				//this.$refs.child1.getMsg(str);// 调用子组件的方法
				this.$parent.cb(this.nm+"_"+this.pwd)
				//this.$store.dispatch('setState',345);//异步
				//this.$store.commit('setState',{cu:{id:999,nm:'wu',hd:'b.jpg'}});//同步
				this.setState({cu:{id:95,nm:'qin',hd:'a.jpg'}});//映射后可以直调用
				//this.$store.dispatch.apply(this.$store,['incrememt'].concat(args))

			},
			...mapMutations({setState:"setState"}),//映射store中mutations中的方法，此处将setState映射为this.$store.commit('setState')
			//...mapMutations(["setState"]),//映射store中mutations中的方法，此处将setState映射为this.$store.commit('setState')

			//	...mapActions(['addAction','reduceAction'])//映射store中actions中的方法,
			//,
			//mapMutations:(['setState'])
		}

		//methods:mapMutations(['setState'])
	}
	</script>
		<style>
/* 		@import "http://localhost:60090/App_Themes/com.css";
 */		@import "http://localhost/App_Themes/Base.css"; 
		</style>
