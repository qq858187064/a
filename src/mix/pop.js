/*弹出框方法
调用页引用后
import pop from '@/mix/pop.js'
arg：body为弹出内容，tit为弹出窗标题，cls为弹出框顶层样式名，lay弹出渐显延时(与lay秒执行一次一致)
调用：click="pop(arg))"
*/
/* import swipe from '@/mix/swipe.js'  */
export default {
    data() {
        return {
            show: false,
            tit: "",
            body: "",
            com: "",
            css: "",
            cls: "",
            h: '',
            top: '',
            lay:20
        };
    },
/*   mixins:[swipe], */
    methods: {
        pop: function (o) {
            let node;
                if (!o.p) {
                node = document.createElement("div");
                document.body.appendChild(node);
                if(o.lay)
                this.lay=o.lay;

                //o.com = Vue.extend(require("@/components/com/pop.vue").default);
                o.h = document.documentElement.scrollHeight + "px";
                o.top = document.documentElement.scrollTop + document.documentElement.clientHeight / 2 + "px"
                o.arg = { el: node, data: o }; 
           
                if(o.com){
                    //var sw=Vue.component(o.com,Vue.extend(require("@/components/com/"+o.com).default));
                     new (Vue.component(o.com,require("@/components/com/"+o.com).default))({el:this.body});
                      //  console.log(swipe)
                   // this.com=o.com;
                        }
                o.p = new (Vue.extend(require("@/components/com/pop.vue").default))(o.arg);
            }
            this.grad(o.p.$el,this.lay)
            setTimeout(() => {
                o.show = true;
            }, this.lay);
        },
        grad: function (o) {
            var n = 10;//循环次数
            for (var i = 1; i <= n; i++) {
                (function (i, o,lay) {
                    setTimeout(function () {
                        o.style.opacity =i/n;
                    }, i *lay, o)
                })(i, o,this.lay)
            }
        }
    }
}
