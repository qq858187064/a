<template>
 		     <div :class='pc'>
                <input type="text" v-model="ck" v-bind:placeholder='hold' v-on:click='ex' ref='ipt' @keyup.13="go()"
 /><template v-if='m>0'><b v-on:click='pk'>取消</b>
                <a v-for='a in rs' v-on:click='go(a)'>{{a.nm}}</a><div v-if='m>0&&rs&&rs.length<1' class="notfind">没有搜索到相关部门，请换个关键词</div></template>
            </div>
</template>
<script>
/*节流*/
  function delay(cb, ms) {
    clearTimeout(timer);
    timer = setTimeout(cb, ms);
  };
export default{
data(){
  return{
    m:0,/*0未展开，1已展开 */
    k:''
/*     ,
    ks:[] */
  }
},
 props:['otxt','sd'], 
   methods:{
                go(k){
                    //    console.log(k.nm)
                       this.pk();
                       },
                       ex(){
                           if(this.m==0)
                           {
                            this.m=1;
                            this.$refs.ipt.focus();
                           }

                       },
                       pk(){
                           this.m=0;
                            this.k='';
                             this.$refs.ipt.blur(); 
                       }
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
    hold:function(){
  return this.m==0?'':this.otxt;
    },
    pc:function(){
return this.m==0?'search':'search ex';
    },
  ck:{   
get:function(){
    return this.k;
},
set:function(v){
    this.k=v; 
   // this.go(this.k);
/*      delay(() => {
      }, 300); */
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
.search{
    position: absolute;
    z-index: 9999;
    font-family:"Microsoft YaHei";
    background: #f9f9f9;
    color:#4b4b4b;
    font-size: 0.28rem;
    top:0.1rem;
    right: 0;
    }

    .search input{
        display: block;
        width: .64rem;
        height: .64rem;
        border-radius: 0.32rem;
        background: transparent url(/static/images/search/search@2x.png) 1px center no-repeat;
        background-size: 0.4rem;
        color: #4b4b4b;
    } 
    .ex{
         width: 100%;
         /*  padding:0.01rem 5% 0 5%; */
          padding-top:0.01rem;
    }
  .ex input{
           width: 56%;
           margin-left: 0.2rem;
               margin-bottom: 0.12rem;
            padding:0 1rem;
            background-color: #f0f0f0;
            border-radius: 0.5rem;
            display: inline-block;
            background-position-x: 0.3rem;
            }
         .ex b{
             font-weight: 400;
             padding: 0 0.2rem;
/*              margin-right: -5%;
 */            letter-spacing: 1px;
         }
            .ex a{
display: block;
border-top:1px solid #f3f3f3;
background-color: #fff;
line-height: 0.8rem;
font-size: 0.3rem;
    padding-left: 0.3rem;
}

.ex .notfind{
   /*  background: #fff url(../../../static/images/common/error.png) center 33% no-repeat; */
    height: 40vh;
    background-size: 3.6rem;
    padding-top: 84%;
    text-align: center;
    color: #c0c0c0;
    border-top:1px solid #f3f3f3;
}
    .ipt{
        width: .64rem;
        height: .64rem;
        border-radius: 0.32rem;
       /*  background: #f0f0f0 url(/static/images/search/search@2x.png) 50%/.28rem .28rem no-repeat; */
 
        height:100%;
        font:0.28rem/1.5;
        background-color:transparent;
        margin-right:0.2rem;
        /*background-color:red;*/
        min-height:32px;

    }
</style>