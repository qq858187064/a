import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store=new Vuex.Store({
    state:{
        cu:{},
        copyright:'site name'
    },
    //Action 提交的是 mutation，而不是直接变更状态。anction中支持异步，而mutations不支持
    /*actions:{
        setState (context) {
            context.commit('setState')
          }
    },*/
    mutations:{
        //通用方法设置state
        setState(state ,o)//本质是注册了一个事件type为setState的，其处理函数的第一个参数是state；
        {
            var k=Object.keys(o)[0];
           this.state[k]=o[k];
           //store.commit('setState',o);//外部触发该事件
        }
    }
});
export default store

/* increment (state) {      //注册事件，type:increment，handler第一个参数是state；
    // 变更状态
  state.count++}}})
  
store.commit('increment')   //调用type，触发handler（state）   

 */
