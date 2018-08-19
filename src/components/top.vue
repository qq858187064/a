<template><p v-on:click='$parent.$refs.pop.pop({tit:"tit0",body:"body0",com:"div"})'>
	欢迎您！<a v-if='cu.id==undefined' href='/login'>登录</a><a v-else v-bind:href='/u/+cu.id'>{{cu.nm}}</a></p>
</template>
<script>
	export default{
		name:'top',
		data:function(){
			return {
				//uid:this.$store.state.cu.id
		}},
		methods:{
			go(){
				console.log(99)
			}
		},
		computed:{
			cu(){
 return this.$store.state.cu;
			}
		}
	}
</script>