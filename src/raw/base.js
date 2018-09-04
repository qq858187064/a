/* function base(){
base.prototype={
init(){
    console.log('base.prototype.init')
}

}
}
console.log(typeof module === "object" && typeof module.exports === "object")
if (typeof module === "object" && typeof module.exports === "object") {
    module.exports =base
}
export default base */
/*
调用组件用new，this指向组件本身，不用new时指向window
*/
var C = {
    Slice: Array.prototype.slice,
    /* 判断传入对象是否为数组 */
    isArr: function (o) {
        return Object.prototype.toString.apply(o) === '[object Array]';
    },
	/*arr.push.apply(arr,C.Gn(nm));
	sliceC考虑用数组对象arr的push方法取代
	*/
    sliceC: function (arr) {
        var a = [];
		a.push.apply(a,arr);
        // for (var i = 0; i < arr.length; i++) {
            // a.push(arr[i]);
        // }
        return a;
    },

    /* 获取并返回传入id的对象 */
    G: function (Id) {
        return typeof (Id) == "string" ? document.getElementById(Id) : Id;
    },

    /*创建并返回传入标签名的元素 */
    Ce: function (Tag) {
        return document.createElement(Tag);
    },

    /* 获取并返回传入document的body元素 */
    Bd: function (D) {
        var D = D || document;
        return C.Gs(D.documentElement, "body")[0];
    },

    /* 获取并返回传入Name的集合对象*/
    Gn: function (Nm, Tg) {
        var a = document.getElementsByName(Nm);
        if (Tg) {
            var es = document.getElementsByTagName(Tg),
                arr = new Array();
            for (var i = 0; i < es.length; i++) {
                var e = es[i];
                if (C.Attr(e, "name") == Nm) {
                    arr.push(e);
                }
            }
            a = arr;
        }
        return a;
    },
    /* 获取并返回传入对象的name的值*/
    Gnm: function (o) {
        return o.name || C.Attr(o, "name");
    },
    /* 获取并返回传入对象和传入标签子元素的数组 */
    Gs: function (prt, tg, Progeny) {
        var prt = typeof (prt) == "string" ? C.G(prt) : prt,
		         Childs = new Array(),
		         Ds = prt.getElementsByTagName(tg),
                 Progeny = !Progeny ? false : true;
        for (var i = 0; i < Ds.length; i++) {
            if (Ds[i].parentNode == prt || Progeny) {
                Childs.push(Ds[i]);
            }
        }
        return Childs;
    },

    /* 获取并返回具有传入样式名的元素的数组 */
    Cls: function (ClsNm, Tag, Prt) {
        var Tags = Tag || "*",
        Prt = C.G(Prt) || document;
        Reg = new RegExp("(^| )" + ClsNm + "( |$)"),
        t = C.Gs(Prt, Tags, true),
        Arr = [];
        for (var i = 0; i < t.length; i++) {
            if (Reg.test(t[i].className)) {
                Arr.push(t[i]);
            }
        }
        return Arr;
    },
/* 浏览器是否为IE,且版本为IE8或以下 */
ie8:function ()
{
return navigator.appName=="Microsoft Internet Explorer"&&parseFloat(navigator.appVersion)<5
},
/*是否微信 */
wx:function(){
   return navigator.userAgent.match(/micromessenger/i)?true:false;
},
    /* 获取并选回radio选定的元素     */
    radio: function (nm) {
        var es = C.Gn(nm);
        for (var i = 0; i < es.length; i++) {
            t = es[i];
            if (t.checked)
                return t;//.value;
        }
    },
    /* 为传入元素设置T属性和L属性，其值分别为该元素相对于Body元素的偏移量offsetTop和offsetLeft */
    Lt: function (o) {
        o.L = o.offsetLeft;
        o.T = o.offsetTop;
        var Ele = o;
        // while (Ele.offsetParent.tagName.toLowerCase() != "body")
        while (Ele.offsetParent&&Ele.offsetParent.tagName.toLowerCase() != "body") {
			            Ele = Ele.offsetParent;
			var pst=C.Css(Ele,"position");
			if(pst&&pst!=("absolute"))/*relative是否也要过滤？*/
			{
            o.L += Ele.offsetLeft;
		o.T += Ele.offsetTop;
		}
        }
    },
	/*在t对象下方显示提示信息*/
	Sr:function(t)
	{
		var t=C.G(t);
						C.Lt(t)
						/*// if(dw&&dw.offsetLeft<0)
	    // t.L=t.L-dw.offsetLeft;*/
						t.Rpt.style.left=t.L+"px";
						t.Rpt.style.top=t.T+t.offsetHeight+3+"px";
						t.Rpt.style.left=t.L+"px";

	},
	/*获取对象o在css中的a属性的值，也可指定伪类w*/
	Css:function(o,a,w){
            return (getComputedStyle(o,w)[a]);   
	},

    /* 获取并返回传入元素的上一个非空元素 */
    Pre: function (Ele) {
        return C.Sbl(Ele, "previousSibling");
    },

    /* 获取并返回传入元素的下一个非空元素 */
    Nxt: function (Ele) {
        return C.Sbl(Ele, "nextSibling");
    },

    /* 获取并返回传入元素的上一个或下一个非空元素 */
    Sbl: function (Ele, Fn) {
        var E = Ele[Fn];
        while (E && (E.nodeType != 1))/*while (E && (E.nodeType != 1 && E.nodeType != 3))*/ {
            E = E[Fn];
        }
        return E;
    },

    /* 获取并返回传入字符串所字义的Json对象 */
    Json: function (Str) {
        if (Str) {
    return eval(Str.startsWith("{") ? "(" + Str + ")" : "({" + Str + "})")
        }
		/*IE7及以下好像不支持
		JSON.parse(jsonstr); //将json字符串转换成json对象 
		JSON.stringify(jsonobj); //将json对象转换成json对符串 
		*/
    },
    /*html转码*/
    htmlEncode: function (html) {
        var temp = document.createElement("div");
        (temp.textContent != undefined) ? (temp.textContent = html) : (temp.innerText = html);
        var output = temp.innerHTML;
        temp = null;
        return output;
    },
    /*html解码*/
    htmlDecode: function (text) {
        var temp = document.createElement("div");
        temp.innerHTML = text;
        var output = temp.innerText || temp.textContent;
        temp = null;
        return output;
    },
    /* 获取并返回传入对象的p属性,如果元素没有该属性, 则为其添加，且其值为空对象*/
    Pt: function (o) {
        if (!o.ps) {
            var p = C.Attr(o, "p");
            o.ps = C.Json(p);
            o = p ? o.ps : {};
        }
        return o;
    },
    /* 判断元素是否为包含关系*/
    Contains: function (parentNode, childNode) {
        if (parentNode.contains) {
            return parentNode != childNode && parentNode.contains(childNode);
        } else {
            return !!(parentNode.compareDocumentPosition(childNode) & 16);
        }
    },
    /* 获取传入td对应的tr、table */
    table: function (td) {
        var tr = td.parentNode,
            tb = tr.parentNode;
        if (tb.tagName == "TBODY")
            tb = tb.parentNode;
        return { tr: tr, tb: tb };
    },
    /* 获取传入tr中的td数组 
    tds: function (tr) {
        return C.Gs("tr", "td");
    },
    */

    /* 获取传入td对应的tr、table */
    rpt: function (o, r) {
        if (o.code > 1) {
            cls = "ok"
            dc = "no";
        }
        else {
            cls = "no"
            dc = "ok";
        }
        C.DelClass(r, dc);
        C.AddClass(r, cls);
        r.innerHTML = o.msg;
        r.style.visibility = "visible";
    },
	    //将传入字符串中引用的js加载到页面中
    exjs: function (s) {
        var rgx = /<script\b.*?(?:\bsrc\s?=\s?"([^>]*)")?>([\s\S]*?)<\/script>/ig,
        ss,
        b = C.Bd(),
        run = C.Ce('script');
        var i = 0;
        while (ss = rgx.exec(s)) {
            var js = C.Ce('script'),
            src = ss[1];
            if (src)
			{
                key = src.slice(src.lastIndexOf('/') + 1, -3);
                if (key == 'Base')
                    key = 'C';
                /*该对象不存在时，设置src属性，js文件名须与文件中js组件对象名相同*/
                if (!window[key]) {
                    js.src = src;
                   b.appendChild(js);//重复 
                }
               C.exjs.pre = js;//上一个script标记
            }
            else
			{/*无src的script*/
                var t = ss[2];
			if(C.exjs.pre&&C.exjs.pre.src!="")//||typeof C.exjs.pre.onload!="undefined"
			{
				if(typeof C.exjs.pre.onload!="undefined")
				{
				 C.exjs.pre.onload = function ()
					{
						//eval(t);
						js.appendChild(document.createTextNode(t));
						b.appendChild(js);// 重复
					};	
				}
				else
				{/*ie9以下*/
					C.exjs.pre.onreadystatechange=function(){
						console.log(C.exjs.pre.readyState);
						if(C.exjs.pre.readyState == "complete"||C.exjs.pre.readyState == "loaded")
						{
							execScript(t);
						//js.appendChild(document.createTextNode(t));
						//js.innerHTML=t;
						//b.appendChild(js);// 重复
						}
						
					};
				}
			}
			else// if(C.exjs.pre.src==""||typeof C.exjs.pre.onload=="undefined")/*||typeof C.exjs.pre.onload=="undefined" for ie7、8*/
			{
			    run.innerHTML += t;
			}
            }	
			
			
        }
        b.insertBefore(run,gr);
    },
    /* 用该方法调用函数的原型初始化方法Init，批处理该方法调用函数的实参对象 */
    Batch: function () {
        var Cl = C.Batch.caller,
            arg = Cl.arguments;
       /* if (!Cl.Initialized) {*/
            var Ns = [],
			oa = [];/*以name为参数对应的元素数组*/
            for (var j = 0; j < arg.length; j++)
			{
                var a = arg[j];
                if (typeof a == "string") {
                    if (Cl.Hn && a.slice(-2).toLowerCase() == "nm")/*组件允许接收以name为参数*/
					{
                        oa = oa.concat(C.sliceC(C.Gn(a)));
                    }
                    else {
                        Ns.push(a);//Ns = C.Slice.apply(arg);C.G(a)
                    }
                }
				else if (!a.length)
				{
				    Ns.push(a);/*Ns = C.Slice.apply(arg);C.G(a)*/
				}
                else if (!a.nodeType) {/*接收到的参数类型为集合、数组*/
                    if (a.p) {
                        for (var i = 0; i < a.length; i++) {
                            a[i].p = a.p;
                        }
                    }
                    Ns.push.apply(Ns, a);

                }
            }
            if (oa.length) {
                Ns = Ns.concat(oa);
            }
            for (var i = 0; i < Ns.length; i++) {
                var n = Ns[i],
                    o = C.G(n);
				if(!o.Initialized)
                Cl.prototype.Init(o);
				o.initialized=true;
            }
			/*
            Cl.Initialized = true;
        }*/
    },

    /* 获取传入元素的当前样式对象 */
    CurrentStyle: function (element) {
        return element.currentStyle || document.defaultView.getComputedStyle(element, null);
    },

    AttrStyle: function (Elem, Attr) {
        if (Elem.Attr) {
            return Elem.style[Attr];
        } else if (Elem.currentStyle) {
            return Elem.currentStyle[Attr];
        } else if (document.defaultView && document.defaultView.getComputedStyle) {
            Attr = Attr.replace(/([A-Z])/g, '-$1').toLowerCase();
            return document.defaultView.getComputedStyle(Elem, null).getPropertyValue(Attr);
        } else {
            return null;
        }
    },

    /*将传入的第二个元素的高度设成与等一个元素等高 */
    eh: function (a, b) {
        var a = C.G(a),
            b = C.G(b);
        b.style.height = a.offsetHeight + "px";
    },
    /* 设置传入元素等高 */
    Ehs: function () {
        var Es = [],
        Hs = [];
        for (var i = 0; i < arguments.length; i++) {
            var El = C.G(arguments[i]);
            if (El.nodeType == 1) {
                Es.push(El);
                Hs.push(El.clientHeight);
            }
        }
        for (var j = 0; j < Es.length; j++) {
            Es[j].style.height = Hs.sort(function (a, b) { return b - a; })[0] + "px";
        }
    },
    /* 将传入iFrame的高度设为载入文档的实际高度 */
    Fi: function (Id) {
        var F = C.G(Id),
        Vh = C.Gs(F.contentWindow.document.documentElement, "body")[0].clientHeight;
        F.style.height = Vh + "px";
    },

    /* 获取并返回时间 */
    Ts: function () {
        return "timestamp=" + new Date().getTime().toString();
    },
    /* 获取并返回触发事件的对象*/
    Ge: function (e) {
        var e = e || window.event,
               mt = e.target || e.toElement;
			   /*
			   vartarget=e.target||e.srcElement;
　　varrelatedTarget=e.relatedTarget||e.fromElement;
			   */
        return mt;
    },
    /*是否支持触摸事件*/
    isTouch: function (e) {
            return "ontouchend" in document ? true : false;
    },

    /* 为对象添加的事件监听  */
    AddEvent: function (obj, ev, fn,arg) {
        obj = C.G(obj);
        var f = fn,
		ags = arguments;//20180624
        if (arg!=undefined)
		{
           f = function(e) { 
		   //fn(arg,e);
		  //  var args=[arg,e];
		 var args=C.Slice.call(ags,3);/*取AddEvent第4个开始往后的实参，以便于支持事件处理函数传多个参数*/
		  args.push(e);/*并向其末尾添加事件对象e，鉴于很多事件处理函数并不需要事件对象e,故此版本中将其后置*/
		  // fn.call(null,arg,e);
		  fn.apply(null,args)
		   };//将e和arg换了位置，这样不需要使用e对象的函数可以只传arg
        }
        if (window.addEventListener) {
            obj.addEventListener(ev, f , false);
        }
        else if (window.attachEvent) {
            obj.attachEvent("on" + ev,f );
        }
        else {
            obj["on" + ev] = obj.f;
        }
    },

    /* 删除对象的事件监听 */
    DelEvent: function (obj, ev, fn) {
        if (window.removeEventListener) {
            obj.removeEventListener(ev, fn, false);
        }
        else if (window.detachEvent) {
            obj.detachEvent("on" + ev, fn);
			/*dom.detachEvent("onpropertychange", evt);*/
        }
        else {
            obj["on" + ev] = null;
        }
    },
    /* 阻止事件冒泡 */
    StopBubble: function (e) {
        if (e && e.stopPropagation) {
            e.stopPropagation();
        }
        else {
            //window.event.cancelBubble = true;
            e.cancelBubble = true;
        }
    },
    /* 阻止事件默认行为 */
    PreventDefault: function (e) {
        if (e &&e.preventDefault) {
            e.preventDefault();
        }
        else {
            e.returnValue = false;
        }
		return false;
    },
/*自定义事件并返回，参数:事件名称、是否冒泡、是否可取消的默认动作*/
	evt:function(nm,bb,cc)
	{
		if(!window.evt)
			window.evt={};/*自于存储自定义事件*/
		if(!window.evt[nm])
		{
		var e;
		if(document.createEvent)
		{
			e=document.createEvent("HTMLEvents");//new Event(nm);ie不支持//new Event(nm,{bubbles:bb,cancelable:cc});
			e.initEvent(nm,bb,cc);
		}
		else{
			e=document.createEventObject();
			e.bubbles=bb;
			e.cancelable=cc;
			e.type=nm;
			//a.attachEvent("on" + en,fun);
			//a.fireEvent("on"+en,oe)
		}
	window.evt[nm]=e;
}
	},
	/*触发对象的自定义事件*/
	trg:function(o,e)
	{
		if(o.dispatchEvent)
			o.dispatchEvent(e);
		else
			o.fireEvent("on"+e.type,e)
		//a["on"+e.type]=
	},
    /* 删除传入元素的class属性  */
    DelClass: function (M, Cn) {
        if (M) {
            if (typeof (M) == "string")
                M = C.G(M);
            var Cls = M.getAttribute("class") || M.getAttribute("className");
            if (Cls) {
                if (RegExp("^\\s*" + Cn + "\\s*$").test(Cls)) {
                    C.DelAttr(M, "className");
                    C.DelAttr(M, "class");
                }
                else {
                    M.className = Cls.replace(new RegExp("( ?|^)" + Cn + "\\b"), "");
                }
            }
        }
    },
    //
    /* 添加传入元素的class属性  */
    AddClass: function (M, Cn) {
        if (M) {
            if (typeof (M) == "string")
                M = C.G(M);
            var Cls = M.getAttribute("class") || M.getAttribute("className");
            if (Cls != null) {
                Cn = Cls.indexOf(Cn) == -1 ? Cls + " " + Cn : Cls;
            }
            M.className = Cn;
        }
    },

    /* 获取元素属性  */
    Attr: function (Id, Attr) {
        var obj = C.G(Id), oAttr;
        if (obj.getAttribute(Attr)) {
            oAttr = obj.getAttribute(Attr)
        }
        else if (obj.attributes[Attr]) {
            oAttr = obj.attributes[Attr];
        }
        return oAttr;
    },

    /* 删除元素属性  */
    DelAttr: function (Id, Attr) {
        var obj = C.G(Id), oAttr;
        if (obj.getAttribute(Attr)) {
            obj.removeAttribute(Attr);
        }
        else if (obj.attributes[Attr]) {
            obj.removeAttributeNode(obj.attributes[Attr]);
        }
    },
    /* 删除传入元素的style属性  */
    DelStyle: function (Ele) {
        if (Ele.getAttribute("style")) {
            Ele.removeAttribute("style");
        }
        else if (Ele.attributes["style"]) {
            Ele.removeAttributeNode(Ele.attributes["style"]);
        }
    },
	    /*  获取并返回传入select选中项 */
    So: function (o) {
        return o.options[o.selectedIndex];
    },
    /* 设置select选中和传入值相同的项 */
    Slcted: function (slct, v, vt) {
        for (var i = 0; i < slct.length; i++) {
            if ((vt ? slct.options[i].value : slct.options[i].text) == v) {
                slct.options[i].selected = true;
                break;
            }
        }
    },

    /* 创建并返回一个XMLHttpRequest对象  */
    XHR: function () {
        var XHR;
        try {
            XHR = new XMLHttpRequest();
        }
        catch (e1) {
            try {
                XHR = new ActiveXObject("Msxml2.XMLHTTP");
            }
            catch (e2) {
                try {
                    XHR = new ActiveXObject("Microsoft.XMLHTTP");
                }
                catch (e3) {
                    XHR = false;
                }
            }
        }
        return XHR;
    },

    /* 执行异步请求 暂未加入formdata异步上传文件*/
    EXHR: function (CallBack, Method, Url, Data, Proc, Async) {
        var oXHR = this.XHR(),
            Rst = null,
            Junctor = Url.indexOf("?") != -1 ? "&" : "?";
        oXHR.onreadystatechange = function () {
            switch (oXHR.readyState) {
                case 0:
                    Rst = "请求未初始化";
                    break;
                case 1:
                    Rst = "服务器连接已建立";
                    break;
                case 2:
                    Rst = "请求已接收";
                    break;
                case 3:
                    Rst = "请求处理中";
                    break;
                case 4:
                    Rst = "请求已完成，且响应已就绪";
                    if (oXHR.status == 200) {
                        var Rsp = null,
                                 cType = oXHR.getResponseHeader("Content-Type");
                        /*//oXHR.getAllResponseHeaders
                        //获取服务端header里时间戳，在IE下必须做些特殊处理，需要在后端关闭缓存：header( 'Cache-Control: no-store');*/
                        if (cType && cType.indexOf("text/xml") != -1) { Rsp = oXHR.responseXML; }
                        else if (cType && (cType.indexOf("text/json") != -1 ||
                            /*//返回html时eval时会报错20160504 cType.indexOf("text/html") != -1 ||*/
                            cType.indexOf("text/javascript") != -1 ||
                            cType.indexOf("application/javascript") != -1 ||
                            cType.indexOf("application/json") != -1 ||
                            cType.indexOf("application/x-javascript") != -1)) {
                           /* //alert(typeof oXHR.responseText+oXHR.responseText+"\n"+ oXHR.responseText.slice(1,-1));*/


                            Rsp = eval('(' + oXHR.responseText + ')');//oXHR.responseText
                            /*//Rsp = JSON.parse(oXHR.responseText);*/
                        }
                        else {
                            Rsp = oXHR.responseText;
                            //C.exjs(Rsp);
                            //console.log(Rsp)
                        }
                        CallBack(Rsp);/*C.Json(Rsp)*/

                    /*    //CallBack(Rsp,oXHR);传入XHR可以使调用者使用xmlHttpRquest对象，如获取Headers等*/
                    }
                    break;
            }
            if (Proc) { Proc(Rst); }
        };
        Data = Method == "GET" ? null : Data;
        /*//Url += Junctor + "timeStamp=" + new Date().getTime();*/
        Async = Async != false ? true : false;
        oXHR.open(Method, encodeURI(Url), Async);
        //oXHR.setRequestHeader('ajax', 1);//标识为ajax请求
        //标识为ajax请求，此值若改，服务端C.http中也需要做对应修改
        oXHR.setRequestHeader('X-Requested-With', "XMLHttpRequest");
     /*   //oXHR.responseType = "msxml-document";//兼容IE10+版本，调用selectSingleNode类似方法*/
        if (Method == "POST") {
             oXHR.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
           /* oXHR.setRequestHeader("Content-type", "multipart/form-data");*/
        }
        oXHR.send(Data);
    },

    /*ajax跨域兼容IE*/
    /*C.DXHR = function (fns, method, url, data, Proc, Async) {

        var suc = typeof fns == 'function' ? fns : (fns.suc ? fns.suc : null);
        var nData = (data.indexOf('?') == -1 && url.indexOf('?') == -1) ? '?' + data : data;

        try {
            url = method.toLowerCase() == 'get' ? url + data : url;

            C.EXHR(suc, method, url, data, Proc, Async);
        } catch (e) {
            //IE 789
            var xhr = new XDomainRequest();

            xhr.onload = function () {
                suc(xhr.responseText);
            };

            if (fns.err) { xhr.onerror = fns.err; }
            if (fns.oto) { xhr.ontimeout = fns.oto; };

            xhr.open(method, url + nData);
            xhr.send();
        }
    }，
    */
    /* Jsonp
        */
    Jsp: function (str) {
        var Jt = C.G("Cbf"),
        Jn = Jt.cloneNode(),
        Bd = C.Bd();// C.Gs(document.documentElement, "body")[0];
        Jn.src = str;/*bu + bu：各站点请求的基础url*/
        Jn.id = "cloneCbf";
        Bd.appendChild(Jn);
    },
       Contain: function (a, b) {
        //console.log(a.compareDocumentPosition(b));
        return a.contains ? a != b && a.contains(b) : a.compareDocumentPosition(b) == 16//!!(a.compareDocumentPosition(b) & 16);
    },
    /* 获取并返回get请求参数        */
    param: function (k) {
		var s=location.search;
			if(k)
			{
				var z=k+"=",
				a=s.indexOf(z);
				if(a>0){
				var b=s.substring(a),
				c=b.indexOf("&");
				if(c==-1)
					c=undefined;
				 return b.substring(z.length,c);
				}
			}
			else
			{
        var ps = s.substring(1).split('&'),
            o = {};
        for (var i = 0; i < ps.length; i++) {
            var p = ps[i],
                k = p.split('=');
            o[k[0]] = k[1];
        }
        return o;
		}

    }
};
Function.prototype.Method = function (Nm, Fun) {
    if (!this.prototype[Nm]) {
        this.prototype[Nm] = Fun;
    }
};
String.Method("trim", function () { return this.replace(/^\s+|\s+$/g, ""); });
String.Method("endsWith", function (pattern) { var d = this.length - pattern.length; return d >= 0 && this.lastIndexOf(pattern) === d; });
String.Method("startsWith", function (pattern) { return this.slice(0, pattern.length) === pattern; });
String.Method("format", function (args) {
    var result = this;
    // if (arguments.length < 1) {
    // return result;
    // }
    var data = arguments;       //如果模板参数是数组
    if (arguments.length == 1 && typeof (args) == "object") {
        //如果模板参数是对象
        data = args;
    }
    for (var key in data) {
        var value = data[key];
        if (undefined != value) {
            result = result.replace("{" + key + "}", value);
        }
    }
    return result;
});
Array.Method("insert",function(i,o){this.splice(i, 0, o);});
Array.Method("contains", function (item) {
    for (i = 0; i < this.length; i++) {
        if (this[i] == item) { return true; }
    }
    return false;
})
export default C