import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import r from '@/components/r'
import list from '@/components/list'
import art from '@/components/art'

Vue.use(Router)
export default new Router({
  mode:'history',
  //linkActiveClass:'cm',
  linkExactActiveClass: 'cm',
  exact:false,
  /*
hash模式:使用URL hash值来作为路由。支持所有浏览器。（default value）
history模式：依赖HTML5 History API和服务器配置。查看HTML5 History模式。
abstract模式:支持所有JavaScript运行环境，如Node.js服务器端。如果发现没有浏览器的API，路由会自动强制进入这个模式。
 */
  routes: [
    {
      path: '/',
      component: index
   },
   {
    path: '/r',
    component: r
 }, 
 {
    path: '/list:id',
    component: list
 },
 {
   path:'/art/:id',
   component:art
 }
  ]
})

/*
2.scrollBehavior 设置了滚动条起始位置。
3.linkActiveClass 设置当前选中项的样式类名
4.最重要的是routes(注意：不是routers，没有r)
(1) path 就是 router-link to后面跟的链接，注意保持一致；
(2) component 对应的组件，常见有两种写法：第一种如上图。第二种如下：
(3) redirect是指重定向，将根路径重定向到指定路径。
*/
