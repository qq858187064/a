<template>
<div class="sw" id='sw' p="v:'sw',s:['https://cdn.17shanyuan.com/seller_backend/lic/op/l…ang/58b6f277f4ace76946589c2446ea466ddaa49b25.jpeg', 'https://cdn.17shanyuan.com/seller_backend/lic/op/l…ang/c7281dcc651b6acc90644abb8c1910cb4a5e0fb0.jpeg', 'https://cdn.17shanyuan.com/seller_backend/lic/op/l…ang/83759fe210414c743f03ddbbae9dcab733da9954.jpeg']">
<a v-for='(a,i) in arr' :key='i'><img :src='a' /></a>
	</div>
</template>
		<script>
 import swipe from '@/mix/swipe.js' 
export default {
mixins:[swipe],
};
</script>
<style scoped>
.sw{
   white-space: nowrap;
   width: 80%;
      overflow: hidden;
}
.sw a{
  display: inline-block;
  background: #fee; 
  width: 80%;

  margin:0 0.2rem;
  border: #eee;
     
}
.sw a img{
  width: 100%;
}
</style>