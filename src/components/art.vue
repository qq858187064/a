<template>
		<h1>{{param.id}}
		</h1>
</template>
<script>
	export default{
		//name:"r",
		props:["t"],
/* 		data(){
			return {param:""};
		}, */
		computed:{
			param(){
				return this.$route.params;
			}
		}
	}
</script>