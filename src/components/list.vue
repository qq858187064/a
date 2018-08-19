<template>
		<div class="ls">
			<a v-bind:href='/art/+ i' v-for="(a,i) in ls">{{i+'、'+a.nm+a.age+a.adr}}</a>
		</div>
</template>
<script>
	export default{
		//name:"r",
		props:["t"],
		data(){
			return {
				  ls:[
  {nm:'a',age:12,adr:'北京'},{nm:'b',age:13,adr:'广州'},{nm:'c',age:15,adr:'上海'},
  ]
			};
			
		},
		computed:{
			param(){
				return this.$route.params;
			}
		}
	}
</script>
<style>
	.ls a{
		display:block;
	}
</style>