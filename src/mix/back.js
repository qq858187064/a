/*微信物理返回*/
let back={
    wx:function(){
        return navigator.userAgent.match(/micromessenger/i)?true:false;
     },
mounted:{
    if(wx){
        window.addEventListener('popstate', function (e) {
          console.log(e)
          let gid=sessionStorage.getItem("gid");
   if(C.param("isShare")&&gid)
   location.href='goodsDetail?isShare=yes&goodsId='+gid
     // if (e.state.wxf==1) {
        //location.href='payment?mainId='+mainId+'&code=';
       //} 
   });
   //hark不触发问题：
     window.history.pushState({wxf:1}, null, '#'); 
     window.history.forward(1);
   
   }
}
}
export default back