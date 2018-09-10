<template>
 		     <div class="tab">
                  <div class="ms"><a v-for="(m,i) in ms" :class="{cm:ci == i}" @click='ci=i;$refs.ct.go(d)'>{{m}}</a></div>
              <component :is='cc' :dt='d' ref='ct' /></div>
</template>
<script>
import orders from "@/components/com/orders.vue";
/* import c from "@/raw/base.js"; 
import cookie from "@/raw/Cookie.js";
*/
export default{
data(){
  return{
    ms:this.tab.m.split(','),
    us:this.tab.u.split(','),
    ks:this.tab.k.split(','),
    ci:0,//tab当前项索引
    cc:this.tab.t
  }
},
 props:['tab'], //m:选项卡菜单文字，u:每个选项卡请求数据的url，t:显示数据组件类型名称，各项以英文逗号‘,’分隔
 components:{orders},
 created:function(){
 },
 mounted:function(){
     alert(23);//不执行
 },
   methods:{
                },

                mounted(){
                   
                    
                },
/* directives: {
      focus: {
        inserted: function (el) {
          el.focus()
        }
      }
    },  */
computed: {
    d:function(){return {k:this.ks[this.ci],u:this.us[this.ci]}},
    pc:function(){
return this.m==0?'search':'search ex';
    },
  ck:{   
get:function(){
    return this.k;
},
set:function(v){
    this.k=v; 
}
  },
rs:function(){
   if(this.k){
let k=this.k;
 return this.sd.filter(function(it,i,arr){
return it.nm.indexOf(k)>-1;
    }); }
}
},
       watch: {
            ks: function(n,o){
                this.ks = n; 
               // this.drawChart();
            }/* ,
            sd:function(n,o){
                this.sd=n;
            } */
        }
	}
</script> 
<style scoped>
.ms{
    height: 0.9rem;
    width: 100%;
   border-bottom: 1px solid #e3e3e3;
    text-align: center;
    font-size: 0.3rem;
position: fixed;
z-index: 999;
background: #fff;
}
.ms a{
    display: inline-block;
    line-height:0.88rem;
    font-weight: 300;
    color: rgba(46,46,46,1);
    padding: 0 0.2rem;
    margin:0 0.5rem;;
}
.ms a.cm,
.cm{
    font-weight: 400;
    color: #ff1919;
    border-bottom:0.04rem solid #ff1919;
}
</style>