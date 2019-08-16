<template>
<p class="nav">
	<router-link to="/">首页</router-link>
	<router-link to="/list0">列表</router-link>
</p>
</template>
<script>
	export default{
		name:"navs",
		data:function(){
			return {
			pwd:"",
			nm:""	
			};
		},
		watch:{
    $route (to,from){
        console.log(to);
        console.log(from);
        this.cm = to.params.id
    }
},
	}
	</script>
		<style>
/* 		@import "http://localhost:60090/App_Themes/com.css";
		@import "http://localhost/App_Themes/Base.css"; 
 */		.nav a{vertical-align: bottom}
		.nav a.cm{color:#096;
		font-weight: 600;
		}
		</style>
