(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{48:function(e,t,a){e.exports=a(59)},53:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),i=a.n(l),o=(a(53),a(95)),c=a(28),m=a(31),u=a(34),s=a(90),d=a(97),h=a(98),p=a(94),b=Object(s.a)((function(e){return{root:{textAlign:"center"},margin:{margin:e.spacing(1)},withoutLabel:{marginTop:e.spacing(3)},textField:{width:"60ch"}}})),f=[{path:"/Bitcoin-Calculator",sidebarName:"\u05de\u05d7\u05e9\u05d1\u05d5\u05df",hidden:!0,component:function(){var e=Object(n.useState)({amount:0,fee:0,usd:3.317,btc:0}),t=Object(u.a)(e,2),a=t[0],l=t[1],i=Object(n.useState)(0),o=Object(u.a)(i,2),s=o[0],f=o[1];Object(n.useEffect)((function(){fetch("https://www.binance.com/api/v3/depth?symbol=BTCUSDT&limit=1000").then((function(e){return e.json()})).then((function(e){return l(Object(m.a)({},a,{btc:parseInt(e.asks[999][0])}))}))}),[]);var g=function(e){return function(t){l(Object(m.a)({},a,Object(c.a)({},e,t.target.value.replace(/,/g,""))))}},E=b();return r.a.createElement("div",{className:E.root},r.a.createElement(d.a,{style:{width:"35%",marginRight:"5px"},id:"outlined-size-normal",label:"Amount",onChange:g("amount"),margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(d.a,{style:{width:"35%",marginRight:"5px"},id:"outlined-size-normal",label:"Fee",value:a.fee,onChange:g("fee"),margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(d.a,{style:{width:"35%",marginRight:"5px"},id:"outlined-size-normal",label:"USD",value:a.usd,onChange:g("usd"),margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(d.a,{style:{width:"35%",marginRight:"5px"},id:"outlined-size-normal",label:"BTC",value:a.btc,onChange:g("btc"),margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(h.a,{variant:"contained",color:"primary",type:"submit",onClick:function(){f((1-a.fee/100)*a.amount/a.usd/a.btc)}},"\u05d7\u05e9\u05d1"),r.a.createElement("br",null),0!==s&&r.a.createElement(p.a,{variant:"h6"},"BTC: ",s))}},{redirect:!0,path:"/",to:"/calculator"}],g=a(99),E=a(96),v=r.a.createElement(o.d,null,f.map((function(e,t){return e.redirect&&""!==e.path?r.a.createElement(o.a,{from:e.path,to:e.to,key:t}):e.path?r.a.createElement(o.b,{path:e.path,component:e.component,key:t}):void 0}))),w=Object(s.a)((function(e){return Object(g.a)({root:{display:"flex",height:"100vh",background:"linear-gradient(#a9ddd6, #58ced6)",overflow:"auto",position:"relative",float:"left",maxHeight:"100%",width:"100%",overflowScrolling:"touch"},toolbar:e.mixins.toolbar,content:{flex:1,margin:"3%"},contacts:{display:"flex",justifyContent:"flex-end",marginLeft:"5%"},largeIcon:{width:45,height:45,fontSize:45,marginTop:"10px"}})})),y=function(){var e=w();return r.a.createElement("div",{className:e.root},r.a.createElement(E.a,null),r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.toolbar}),v)))},j=a(15),x=Object(j.a)();i.a.render(r.a.createElement(r.a.StrictMode,null," ",r.a.createElement(o.c,{history:x},r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"",component:y})))),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.2675ea0e.chunk.js.map