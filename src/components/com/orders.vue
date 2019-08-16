<template>
 		     <div class="goods"><div>more:{{this.more}}</div>
                  <div v-if="d.length>0" v-for="(o,i) in  d" :key="i">
                    <p>您的爱心订单<i>{{os(o)}}</i></p>
                      <a :href='o.url'><!-- <img :src='o.orderImgUrls' /> -->
                      <img v-lazy="o.orderImgUrls[0] + ossUrl('webp_240')" alt="商品图片" />
                      <i><b>{{o.orderDesc}}</b>{{o.orderGoodsSKU}}</i>
                      <i>共{{o.goodsCount}}件<br />查看详情 </i></a>
                     <a href="/wishList" class="bt1">再次购买</a><a class="bt2"> 删除订单</a><br style="clear:both;font-size:0;" />
                  </div>
                  <div class="more">{{more?'数据加载中......':'已经没有更多了'}}</div>
              </div>
</template>
<script>
/*import config from "../../../config/sy3.0";
 import axios from '@/vue.js' */
export default {
  data() {
    return {
      d: [],
      a: { u: this.dt.u, k: this.dt.k, i: 1} /*i:第几页;s:0非加载中 */,
      url: "",
      more: 0,
      s:0/*s:0非加载中 */,
      ou:''
    };
  },
  props: ["dt"],
  created: function() {
    // console.log(this.cookie("token"))
    this.go(this.a);
    this.ou=location.href
    //this.c.scroll(this.go,22,this);
var r=document.documentElement;
 window.onscroll=function(o){
return function(){
 o.a.u=o.dt.u;
 o.a.k=o.dt.k;
if(!o.s&&r.clientHeight + r.scrollTop + 99>r.scrollHeight)
{
    o.s=1;
    ++o.a.i;
    o.go(o.a)
 }
}
}(this) /**/
  },
  methods: {
    go(a) {
      if (!a) a = this.a;
       this.C.ajax("get",
        config.api_dev +"/" +a.u +(a.i || 1) +"&token=" + this.cookie("token"),
        null,
        o =>{
          o = JSON.parse(o);
          this.redirect(o.code)
          //this.d = o.data[a.k];
          this.d=a.i!=undefined?this.d.concat(o.data[a.k]):o.data[a.k];
          this.more = o.data.hasMore;
          if(this.more!=0)
          this.s=0;
        },
        e => {
          console.log(e);
        }
      );
    /*     axios.get(config.api_dev +"/" +a.u +(a.i || 1) +"&token=" + this.cookie("token"))
  .then((o)=>{
    console.log(o)
            //  o = JSON.parse(o);
          this.d=this.d.concat(o.data[a.k])
          this.more = o.data.hasMore;
          if(this.more!=0)
          this.s=0;
  })
  .catch(function (error) {
    console.log(error);
  });
 */
    },
    redirect:function(code){
    if (code == 403) {
      //console.log(location.protocol+'//'+location.host+'/code_login?callback=' +encodeURIComponent(location.href))
            location.href = location.protocol+'//'+location.host+'/code_login?callback=' +encodeURIComponent(this.ou.replace(/token[^\&]*/,''));//
          //  return;
      }
    }
  },
  computed: {
    os: function(o) {
        return function(o) {
        let s = "";
        (o.p = "orderInfo"), (o.a = "orderId");
        switch (o.orderSubStatus) {
          case (70, 80):
            o.p = "orderWaitInfo";
            o.a = "mainId";
            break;
          case 70:
            s = "已过期";
            break;
          case 80:
            s = "已取消";
            break;
        }
        o.url = "/" + o.p + "?" + o.a + "=" + o[o.a];
        //  this.url
        return s;
      };
    },
    pc: function() {
      return this.m == 0 ? "search" : "search ex";
    },
    ck: {
      get: function() {
        return this.k;
      },
      set: function(v) {
        this.k = v;
      }
    }
  },
  watch: {
    dt:function(){
      this.a.i=1;
        this.a.u=this.dt.u;
      this.a.k=this.dt.k; 
    },
    ks: function(n, o) {
      this.ks = n;
      // this.drawChart();
    }
  }
};
</script> 
<style scoped>
i {
  font-style: normal;
}
.goods {
  font-weight: 400;
  font-size: 0.26rem;
}
.goods div {
  padding: 0 0.5rem 0.2rem;
  border-top: 0.2rem solid #fafafa;
  background: #fff;
}
.goods div:last-child {
  margin-bottom: 0.2rem;
}
.goods div a {
  display: block;
  height: 1.6rem;
  box-sizing: border-box;

  line-height: 0.5rem;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  padding: 0.2rem 0;
  padding: 0.2rem 0.5rem;
  margin: 0 -0.5rem 0.2rem;
}
.goods div a i {
  font-size: 0.24rem;
  width:45%;
 line-height: 0.34rem;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    /*! autoprefixer: off */
-webkit-box-orient: vertical;
/* autoprefixer: on */
}
.goods div a i:last-child {
  float: right;
  line-height: 0.4rem;
  padding-top: 0.2rem;
  width: 6em;
  text-align: center;
}
.goods div a i:last-child:after { content: ">";
    font-family: serif; }
.goods div a.bt1,
.goods div a.bt2 {
  float: right;
  display: inline-block;
  margin: 0;

  height: 0.61rem;
  line-height: 0.61rem;
  padding: 0 0.2rem;
  border: 1px solid #d0d0d0;
  border-radius: 0.08rem;
  text-align: center;
  margin-left: 0.3rem;
}
.goods div a.bt1 {
  color: #ff1919;
  border-color: #ff1919;
}
.goods div a.ml4 {
  float: right;
}
.goods div a img,
.goods div a i {
  display: inline-block;
  height: 100%;
  vertical-align: top;
  color: #4b4b4b;
  font-weight: 300;
  overflow: visible;
}
.goods div a i b {
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  padding-bottom: 0.12rem;
  width: 3.5rem;
}
.goods div a img {
  border: 1px solid #eee;
  margin-right: 0.2rem;
}
.goods div p {
  line-height: 1rem;
  color: #4b4b4b;
}
.goods div p i {
  color: #ff6533;
  float: right;
}
.more {
  text-align: center;
  line-height: 0.8rem;
  height: 0.55rem;
  border: none;
  color: #888;
}
</style>