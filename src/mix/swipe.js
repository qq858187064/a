/*弹出框方法
调用页引用后
import swipe from '@/mix/swipe.js'
arg：body为弹出内容，tit为弹出窗标题，cls为弹出框顶层样式名，lay弹出渐显延时(与lay秒执行一次一致)
调用：click="pop(arg))"
*/
import sw from '@/raw/swipe.js'
import C from '../raw/base';
export default {
    data() {
        return {
            ci: 0,
            tit: "",
            arr:[] ,
            cls: ""
        };
    },
    created:function(){
        var p='https://cdn.17shanyuan.com/seller_backend/lic/op/longjiang/',
        a='58b6f277f4ace76946589c2446ea466ddaa49b25.jpeg',
        b='c7281dcc651b6acc90644abb8c1910cb4a5e0fb0.jpeg',
        c='83759fe210414c743f03ddbbae9dcab733da9954.jpeg';
        this.arr.push(p+a);
        this.arr.push(p+b);
        this.arr.push(p+c);
        console.log(this.arr);
    },
    mounted:function(){
        sw('img')
    },
    methods: {
        go: function () {
            console.log(666)
       // new (Vue.extend(require("@/components/com/swipe.vue").default))( {el:this.refs.aaa });

       Roll.Wrap.scrollLeft++;
       if (Roll.Wrap.scrollLeft >= Roll.Original.offsetWidth)
       {
           Roll.Wrap.scrollLeft -= Roll.Original.offsetWidth;
       }
       Roll.Count++;
          
        },
        

    }
}
