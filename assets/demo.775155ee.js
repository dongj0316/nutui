import{c as t}from"./mobile.e5855c5d.js";import{r as l,o as e,c as s,f as c,i}from"./vendor.f6cc4281.js";import"./index.77feaf28.js";const{createDemo:n}=t("cell");var o=n({props:{},setup:()=>({testClick:t=>{alert(t)}})});const d={class:"demo"},r=c("h2",null,"基本用法",-1),a=c("h2",null,"直接使用插槽(slot)",-1),u=c("div",null,"自定义内容",-1),m=c("h2",null,"链接",-1),f=c("h2",null,"展示图标",-1),p=c("h2",null,"只展示 desc ，可通过 desc-text-align 调整内容位置",-1);o.render=function(t,n,o,h,k,j){const v=l("nut-cell");return e(),s("div",d,[r,c(v,{title:"我是标题",desc:"描述文字"}),c(v,{title:"我是标题","sub-title":"副标题描述",desc:"描述文字"}),c(v,{title:"点击测试",onClick:t.testClick},null,8,["onClick"]),a,c(v,{title:"我是标题",desc:"描述文字"},{default:i((()=>[u])),_:1}),m,c(v,{title:"链接","is-link":""}),c(v,{title:"URL 跳转",desc:"https://jd.com","is-link":"",url:"https://jd.com"}),c(v,{title:"路由跳转 ’/‘ ",to:"/"}),f,c(v,{title:"姓名",icon:"my",desc:"张三"}),p,c(v,{"desc-text-align":"left",desc:"张三"})])};export default o;