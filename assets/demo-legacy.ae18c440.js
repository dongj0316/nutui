var __vite_style__=document.createElement("style");__vite_style__.innerHTML="@keyframes nutFadeIn-5766ebca{from{opacity:0}to{opacity:1}}@keyframes nutFadeOut-5766ebca{from{opacity:1}to{opacity:0}}.nutFade-enter-active[data-v-5766ebca],.nutFade-leave-active[data-v-5766ebca],.nutFadeIn[data-v-5766ebca],.nutFadeOut[data-v-5766ebca]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutFade-enter-active[data-v-5766ebca],.nutFadeIn[data-v-5766ebca]{animation-name:nutFadeIn-5766ebca}.nutFade-leave-active[data-v-5766ebca],.nutFadeOut[data-v-5766ebca]{animation-name:nutFadeOut-5766ebca}@keyframes nutZoomIn-5766ebca{from{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes nutZoomOut-5766ebca{from{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}.nutZoom-enter-active[data-v-5766ebca],.nutZoom-leave-active[data-v-5766ebca],.nutZoomIn[data-v-5766ebca],.nutZoomOut[data-v-5766ebca]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutZoom-enter-active[data-v-5766ebca],.nutZoomIn[data-v-5766ebca]{animation-name:nutZoomIn-5766ebca}.nutZoom-leave-active[data-v-5766ebca],.nutZoomOut[data-v-5766ebca]{animation-name:nutZoomOut-5766ebca}@keyframes nutEaseIn-5766ebca{0%{opacity:0;transform:scale(.9)}100%{opacity:1;transform:scale(1)}}@keyframes nutEaseOut-5766ebca{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.9)}}.nutEase-enter-active[data-v-5766ebca],.nutEase-leave-active[data-v-5766ebca],.nutEaseIn[data-v-5766ebca],.nutEaseOut[data-v-5766ebca]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutEase-enter-active[data-v-5766ebca],.nutEaseIn[data-v-5766ebca]{animation-name:nutEaseIn-5766ebca}.nutEase-leave-active[data-v-5766ebca],.nutEaseOut[data-v-5766ebca]{animation-name:nutEaseOut-5766ebca}@keyframes nutDropIn-5766ebca{0%{opacity:0;transform:scaleY(.8)}100%{opacity:1;transform:scaleY(1)}}@keyframes nutDropOut-5766ebca{0%{opacity:1;transform:scaleY(1)}100%{opacity:0;transform:scaleY(.8)}}.nutDrop-enter-active[data-v-5766ebca],.nutDrop-leave-active[data-v-5766ebca],.nutDropIn[data-v-5766ebca],.nutDropOut[data-v-5766ebca]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutDrop-enter-active[data-v-5766ebca],.nutDropIn[data-v-5766ebca]{animation-name:nutDropIn-5766ebca}.nutDrop-leave-active[data-v-5766ebca],.nutDropOut[data-v-5766ebca]{animation-name:nutDropOut-5766ebca}@keyframes rotation-5766ebca{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}.nutRotate-enter-active[data-v-5766ebca],.nutRotate-leave-active[data-v-5766ebca],.nutRotateIn[data-v-5766ebca],.nutRotateOut[data-v-5766ebca]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutRotate-enter-active[data-v-5766ebca],.nutRotateIn[data-v-5766ebca]{animation-name:nutRotateIn}.nutRotate-leave-active[data-v-5766ebca],.nutRotateOut[data-v-5766ebca]{animation-name:nutRotateOut}.tips[data-v-5766ebca]{font-size:12px;color:#909ca4;margin-top:-10px;margin-bottom:10px;padding:0 22px}.base-style.nut-menu-item .nut-menu-panel[data-v-5766ebca]{max-height:300px!important;overflow:auto}.user-style[data-v-5766ebca]{padding:20px}#app .demo.menu-demo[data-v-5766ebca]{padding-bottom:200px}",document.head.appendChild(__vite_style__),System.register(["./mobile-legacy.6b925e4a.js","./vendor-legacy.9f305238.js","./index-legacy.82527409.js"],(function(t){"use strict";var a,e,n,i,u,l,o,c,m,s,d;return{setters:[function(t){a=t.c},function(t){e=t.a,n=t.A,i=t.x,u=t.y,l=t.r,o=t.o,c=t.c,m=t.f,s=t.s,d=t.j},function(){}],execute:function(){const{createDemo:r}=a("menu");var v=t("default",r({props:{},setup(){const t=e({title:"热门推荐",menuList:[{value:"手机"},{value:"电脑"},{value:"家用电器"},{value:"日用百货"}],menuList2:[{value:"热门推荐",id:111},{value:"手机数码",id:112},{value:"电脑办公",id:113},{value:"美妆护肤",id:114},{value:"个护清洁",id:115},{value:"汽车生活",id:116},{value:"京东超市",id:117},{value:"母婴童装",id:118}]});return{...n(t),getChecked:(t,a)=>{alert("选择菜单选项："+a),console.log(11,t,a)},alertText:(t,a)=>{console.log(t,a),"title"==a?alert("菜单标题点击："+t):alert("禁用操作")}}}}));const b=s();i("data-v-5766ebca");const p={class:"demo full menu-demo"},f=m("h2",null,"基础用法",-1),y=m("h2",null,"多列展示",-1),_=m("h2",null,"禁用操作",-1),g=m("p",{class:"tips"},"`disabled` 属性可对菜单列表进行禁用操作。`autoClose` 属性控制下拉菜单列表是否选择后自动收起，默认自动收起。",-1),h=m("h2",null,"禁止蒙层展示",-1),I=m("p",{class:"tips"},"属性`hasMask`控制是否有蒙层，默认为 `true`展示蒙层 ",-1),k=m("h2",null,"点击事件",-1),O=m("p",{class:"tips"},"标题点击事件`menu-click`，菜单列表选择点击事件`change`",-1),x=m("h2",null,"自定义内容",-1),L={class:"user-style"},D=d("确认提交");u();const E=b(((t,a,e,n,i,u)=>{const s=l("nut-menu-item"),d=l("nut-menu"),r=l("nut-cell"),v=l("nut-button");return o(),c("div",p,[f,m(d,null,{default:b((()=>[m(s,{"menu-list":t.menuList,title:"最新商品"},null,8,["menu-list"]),m(s,{"menu-list":t.menuList,title:t.title},null,8,["menu-list","title"])])),_:1}),y,m(d,null,{default:b((()=>[m(s,{class:"base-style","menu-list":t.menuList2,title:"单列展示","multi-style":"1","max-height":"200"},null,8,["menu-list"]),m(s,{"menu-list":t.menuList2,title:"双列展示","multi-style":"2"},null,8,["menu-list"]),m(s,{"menu-list":t.menuList2,title:"三列展示","multi-style":"3"},null,8,["menu-list"])])),_:1}),_,g,m(d,null,{default:b((()=>[m(s,{"menu-list":t.menuList,title:"最新商品"},null,8,["menu-list"]),m(s,{"menu-list":t.menuList,title:"禁止自动收起","auto-close":!1},null,8,["menu-list"]),m(s,{"menu-list":t.menuList2,title:"筛选",disabled:""},null,8,["menu-list"])])),_:1}),h,I,m(d,{"has-mask":!1},{default:b((()=>[m(s,{"menu-list":t.menuList,title:"最新商品"},null,8,["menu-list"]),m(s,{"menu-list":t.menuList,title:t.title},null,8,["menu-list","title"])])),_:1}),k,O,m(d,null,{default:b((()=>[m(s,{"menu-list":t.menuList,title:"选择菜单列表项","multi-style":"2",onMenuClick:a[1]||(a[1]=a=>t.alertText(a,"title")),onChange:t.getChecked},null,8,["menu-list","onChange"]),m(s,{"menu-list":t.menuList2,title:"选中标题触发",disabled:"",onMenuClick:t.alertText},null,8,["menu-list","onMenuClick"])])),_:1}),x,m(d,null,{default:b((()=>[m(s,{title:"自定义选项"},{default:b((()=>[m("div",L,[m(r,{title:"我是标题",desc:"描述文字"}),m(r,null,{default:b((()=>[m(v,{size:"large",type:"primary"},{default:b((()=>[D])),_:1})])),_:1})])])),_:1})])),_:1})])}));v.render=E,v.__scopeId="data-v-5766ebca"}}}));
