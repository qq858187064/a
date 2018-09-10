<template>
<div id="img" class="img" p="box:dw,tit:0,v:'prev',pg:'pg',s:[]">
        <img v-for='i in ims.s' :src="ims.bu+i" />
        <p id="dw" class="dw">
        <a class="Cls" id="cls" onclick="pop.close();event.stopPropagation();C.DelClass(document.documentElement, 'fix');">X</a>
        <img id="prev" class="prev" />
        <i id="pg" class="pg">/</i>
    </p>
    </div>           
		</template>
		<script>
import pop from  '@/raw/pop.js' 
import swipe from '@/raw/swipe.js' 
window.pop=pop;
/*import swipe from "@/components/com/swipe.vue";*/
export default {
mounted:function(){
        var im = C.G("img");

        pop(im);//弹出框
        swipe(im);//滑屏切换
        
        //im.t.s
        im.p.s=this.ims.bu+this.ims.b;
        console.log(im.p.s)
},
props: ['ims'],
methods:{
   // close:function(){this.pop.close}
},
/* mixins:[pop,swipe], */
    components:{
     // swipe 
    }
};
</script>
<style scoped>
            .dw {
                 display:block!important;
                 position: absolute;
                 left:-9999px;
                width:100%;
                height:100vh;
                background: #000!important;
margin:0;
            }
            .dw .pg{
                font-style: normal;
                color: #ccc;
                    bottom: 0.5rem;
    position: absolute;
            }
            .Cls{
    position: absolute;
    right: 0;
    padding: 12px;
    font: 1.8rem/1.2rem "Arial";
    cursor: pointer;
    z-index: 9999;
    color: #fff;
            }
  .img {
            text-align: center;
                margin-bottom: 54px;
        }

            .img img {
                display: inline-block;
                white-space: nowrap;
                width: 22.5%;
                border: 1px solid #eee;
/*                 margin-right: 0.5em;
 */            }

                .img img:last-child {
                    margin-right: 0;
                }

      
        .dbg{
                filter: alpha(opacity=9);
    opacity: 0.9;
        }
        /*.dw{
             width: 99%;
            border:none;
            background:none;
            text-align: center;
        }*/
        .prev{
            display:block;
             width: 100%;
                 margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
        }
</style>
 <!--<style>@import `../assets/$this.css`;</style>
  <style>import(`../assets/${css}`)</style>
  <style>@import('../assets/'+this.css);</style>-->