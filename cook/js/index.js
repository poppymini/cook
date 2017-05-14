        (function(doc,win){
//            html元素
            var docEl=doc.documentElement;

//            if(doc.addEventListener){//没有未定义返回false
//                
//            }else{
//                return
//            };
               if(!doc.addEventListener)return;
//            执行函数
            var run=function(){
//        获取视口宽度  
                var clientWidth=doc.documentElement.clientWidth;
               docEl.style.fontSize=20/320*clientWidth+"px";
                
            };
//        事件
         var resizeEvt= "orientationchange" in window?"orientationchange":"resize";
//           orientationchange当检测到屏幕方向改变时从发函数
//                "JSON" in window
//            检测window上面有没有 JSON对象返回的是一个布尔值
            win.addEventListener(resizeEvt,run,false);
           doc.addEventListener("DOMContentLoaded",run,false);
            
        })(document,window);
