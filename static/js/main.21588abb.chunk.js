(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},135:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(35),l=a.n(r),i=(a(97),a(170)),s=a(163);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o,m=a(78),u=a(21),d=a(47),p=a.n(d),E=a(66),f=a(7),g=(a(99),a(100),a(67));function b(e){var t,a,n="cn",r=(t=g,a=e.type,Object.keys(t).find(function(e){return t[e]===a}));switch(e.mode){case o.Large:n="cw";break;case o.Normal:n="cn";break;case o.Compat:n="cs"}return c.a.createElement("div",{onClick:e.onClick,"data-disabled":!1===e.enable||void 0,className:"".concat(n," ").concat(r)},e.type)}!function(e){e[e.Normal=0]="Normal",e[e.Compat=1]="Compat",e[e.Large=2]="Large"}(o||(o={}));a(101);function h(e){var t=e.tags,a={};return t.filter(function(e){return e.includes(":")}).forEach(function(e){var t=e.split(":");Object.keys(a).some(function(e){return e===t[0]})||(a[t[0]]=[]),a[t[0]].push(t[1])}),c.a.createElement("table",null,c.a.createElement("tbody",null,Object.keys(a).map(function(e){return c.a.createElement("tr",null,c.a.createElement("td",{className:"tc"},e,":"),c.a.createElement("td",null,a[e].map(function(e){return c.a.createElement("div",{className:"gt"},e)})))})))}var v=a(167);function y(e){var t=e.time,a=new Date(1e3*parseInt(t));return c.a.createElement("span",null,a.getFullYear(),"-",O(a.getMonth()+1),"-",O(a.getDate())," ",O(a.getHours()),":",O(a.getMinutes()))}function O(e){return("0"+e).slice(-2)}function C(){return c.a.createElement("div",{style:{margin:"0.6em"}})}var j,x=a(169),k=a(164),N=a(23),w=a(81),S=a(162),G=a(177);function M(e){var t=Object(n.useState)(!0),a=Object(f.a)(t,2),r=a[0],l=a[1],i=e.gallery;return c.a.createElement("div",null,c.a.createElement(k.a,{hidden:r,onDismiss:function(){return l(!0)},dialogContentProps:{type:N.a.normal,title:"Raw Detail",subText:JSON.stringify(i)}},c.a.createElement(w.a,null,c.a.createElement(S.a,{onClick:function(){return l(!0)},text:"OK"}))),c.a.createElement(G.a,{style:{marginRight:"1.2em",position:"relative",float:"right"},menuProps:{items:[{key:"raw",text:"Raw detail",onClick:function(){return l(!1)}}]},title:"More",ariaLabel:"More"}),c.a.createElement("div",{className:"ms-Grid ms-depth-4",dir:"ltr",style:{margin:"1.2em",padding:"1.1em"}},c.a.createElement("div",{className:"ms-Grid-row"},c.a.createElement("div",{className:"ms-Grid-col ms-sm12 ms-md6 ms-lg4 ms-xl3 ms-xxl2 ms-xxxl2"},c.a.createElement("img",{src:i.thumb})),c.a.createElement("div",{className:"ms-Grid-col ms-hiddenLgDown ms-sm12 ms-md12 ms-lg3 ms-xl2 ms-xxl2 ms-xxxl1",style:{textAlign:"center"}},c.a.createElement("div",null,c.a.createElement(b,{mode:o.Normal,type:i.category})),c.a.createElement(C,null),c.a.createElement("div",null,c.a.createElement(y,{time:i.posted})),c.a.createElement(C,null),c.a.createElement(x.a,{min:1,max:5,readOnly:!0,rating:parseInt(i.rating)}),c.a.createElement(C,null),c.a.createElement("div",null,i.uploader),c.a.createElement(C,null),c.a.createElement("div",null,i.filecount," pages")),c.a.createElement("div",{className:"ms-Grid-col ms-sm12 ms-md6 ms-lg8 ms-xl7 ms-xxl8 ms-xxxl9",style:{textAlign:"left",display:"contents"}},c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement(v.a,{variant:"large"},i.title)),c.a.createElement(C,null),c.a.createElement("div",null,c.a.createElement(v.a,{variant:"mediumPlus"},i.title_jpn))),c.a.createElement("div",{className:"ms-hiddenXlUp"},c.a.createElement(C,null),c.a.createElement("div",null,c.a.createElement(b,{mode:o.Normal,type:i.category})),c.a.createElement(C,null),c.a.createElement("div",null,c.a.createElement(y,{time:i.posted})),c.a.createElement(C,null),c.a.createElement(x.a,{min:1,max:5,readOnly:!0,rating:parseInt(i.rating)}),c.a.createElement(C,null),c.a.createElement("div",null,i.uploader),c.a.createElement(C,null),c.a.createElement("div",null,i.filecount," pages")),c.a.createElement(C,null),c.a.createElement("div",null,c.a.createElement(h,{tags:i.tags}))))))}!function(e){e[e.Grid=0]="Grid",e[e.List=1]="List",e[e.ExtendedList=2]="ExtendedList"}(j||(j={}));var I=3,L=250;function P(e){var t=0,a=0,n=0,r={};return e.displayMode===j.Grid&&(r.getItemCountForPage=function(e,c){return 0===e&&(t=Math.ceil(c.width/L),a=Math.floor(c.width/t),n=a),t*I},r.getPageHeight=function(){return n*I}),c.a.createElement("div",null,e.items.map(function(e,t){return c.a.createElement(M,{key:t,gallery:e})}))}var A=a(172);a(102);function D(e){var t=Object(n.useState)(!0),a=Object(f.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(!0),s=Object(f.a)(i,2),m=s[0],u=s[1],d=Object(n.useState)(!0),p=Object(f.a)(d,2),E=p[0],g=p[1],h=Object(n.useState)(!0),v=Object(f.a)(h,2),y=v[0],O=v[1],C=Object(n.useState)(!0),j=Object(f.a)(C,2),x=j[0],k=j[1],N=Object(n.useState)(!0),w=Object(f.a)(N,2),S=w[0],G=w[1],M=Object(n.useState)(!0),I=Object(f.a)(M,2),L=I[0],P=I[1],D=Object(n.useState)(!0),H=Object(f.a)(D,2),W=H[0],F=H[1],J=Object(n.useState)(!0),R=Object(f.a)(J,2),q=R[0],B=R[1],K=Object(n.useState)(!0),T=Object(f.a)(K,2),U=T[0],X=T[1];function Y(){var e=[];return r&&m&&E&&y&&x&&S&&L&&W&&q&&U?e:(r&&e.push("ct2"),m&&e.push("ct3"),E&&e.push("ct4"),y&&e.push("ct5"),x&&e.push("cta"),S&&e.push("ct9"),L&&e.push("ct6"),W&&e.push("ct7"),q&&e.push("ct8"),U&&e.push("ct1"),e)}return Object(n.useEffect)(function(){e.cats&&e.cats.length>0&&(X(e.cats.includes("ct1")),l(e.cats.includes("ct2")),u(e.cats.includes("ct3")),g(e.cats.includes("ct4")),O(e.cats.includes("ct5")),P(e.cats.includes("ct6")),F(e.cats.includes("ct7")),B(e.cats.includes("ct8")),G(e.cats.includes("ct9")),k(e.cats.includes("cta")))},[e]),c.a.createElement("div",null,c.a.createElement("div",{className:"search-category-list"},c.a.createElement("div",{className:"ms-Grid",dir:"ltr"},c.a.createElement("div",{className:"ms-Grid-row"},c.a.createElement(b,{mode:o.Compat,onClick:function(){return l(!r)},enable:r,type:"Doujinshi"}),c.a.createElement(b,{mode:o.Compat,onClick:function(){return u(!m)},enable:m,type:"Manga"}),c.a.createElement(b,{mode:o.Compat,onClick:function(){return g(!E)},enable:E,type:"Artist CG"}),c.a.createElement(b,{mode:o.Compat,onClick:function(){return O(!y)},enable:y,type:"Game CG"}),c.a.createElement(b,{mode:o.Compat,onClick:function(){return k(!x)},enable:x,type:"Western"})),c.a.createElement("div",{className:"ms-Grid-row"},c.a.createElement(b,{mode:o.Compat,onClick:function(){return G(!S)},enable:S,type:"Non-H"}),c.a.createElement(b,{mode:o.Compat,onClick:function(){return P(!L)},enable:L,type:"Image Set"}),c.a.createElement(b,{mode:o.Compat,onClick:function(){return F(!W)},enable:W,type:"Cosplay"}),c.a.createElement(b,{mode:o.Compat,onClick:function(){return B(!q)},enable:q,type:"Asian Porn"}),c.a.createElement(b,{mode:o.Compat,onClick:function(){return X(!U)},enable:U,type:"Misc"})))),c.a.createElement(A.a,{value:e.query,onChange:e.onChange,onSearch:function(t){return function(t){e.onSearch&&e.onSearch({search:t,cat:Y()})}(t)},placeholder:"For we shall win through. No matter the cost."}))}var H=a(76),W=a.n(H),F=a(77),J=a(82),R=a(165),q=a(173),B=a(31),K=a.n(B);function T(e){var t=Object(n.useState)([]),a=Object(f.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(!1),s=Object(f.a)(i,2),o=s[0],m=s[1],u=Object(n.useState)(""),d=Object(f.a)(u,2),g=d[0],b=d[1],h=Object(n.useState)([]),v=Object(f.a)(h,2),y=v[0],O=v[1],C=Object(n.useState)(!1),x=Object(f.a)(C,2),k=x[0],N=x[1],w=Object(n.useState)(0),S=Object(f.a)(w,2),G=S[0],M=S[1],I=function(){var t=Object(E.a)(p.a.mark(function t(a){var n,c;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return m(!0),n={},(n=a||K.a.parse(e.location.search)).search&&b(n.search),O(n.cat),t.next=7,W.a.get(F.baseurl,{params:n});case 7:c=t.sent,M(parseInt(c.data.currentPage)),N(c.data.currentPage>0),l(c.data.items),m(!1);case 12:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();function L(){H(G+1)}function A(){k&&H(G-1)}function H(t){var a=Object.assign(K.a.parse(e.location.search),{page:t});e.history.push({search:"?".concat(K.a.stringify(a))}),I(a)}return Object(n.useEffect)(function(){I()},[]),c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"search-content"},c.a.createElement(D,{cats:y,onChange:function(e){return b(e.target.value)},query:g,onSearch:function(t){return function(t){e.history.push({search:"?".concat(K.a.stringify(t))}),I(t)}(t)}})),!o&&c.a.createElement("div",{className:"paging-container"},k&&c.a.createElement(J.a,{text:"<",onClick:A}),c.a.createElement(R.a,{type:"number",value:G.toString(),onChange:function(e){return M(parseInt(e.target.value))},className:"paging-input"}),c.a.createElement(J.a,{text:"GO!",onClick:function(){return H(G)}}),c.a.createElement(J.a,{text:">",onClick:L})),c.a.createElement("div",{className:"gallery-content"},o&&c.a.createElement(q.a,null),!o&&c.a.createElement(P,{displayMode:j.ExtendedList,items:r})),!o&&c.a.createElement("div",{className:"paging-container"},k&&c.a.createElement(J.a,{text:"<",onClick:A}),c.a.createElement(R.a,{type:"number",value:G.toString(),onChange:function(e){return M(parseInt(e.target.value))},className:"paging-input"}),c.a.createElement(J.a,{text:"GO!",onClick:function(){return H(G)}}),c.a.createElement(J.a,{text:">",onClick:L})))}Object(s.a)(),l.a.render(c.a.createElement(i.a,null,c.a.createElement(function(){return n.createElement(m.a,null,n.createElement(u.a,{path:"/",component:T}))},null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},67:function(e){e.exports={ct1:"Misc",ct2:"Doujinshi",ct3:"Manga",ct4:"Artist CG",ct5:"Game CG",ct6:"Image Set",ct7:"Cosplay",ct8:"Asian Porn",ct9:"Non-H",cta:"Western"}},77:function(e){e.exports={baseurl:"https://futanari.moe/api"}},92:function(e,t,a){e.exports=a(135)},97:function(e,t,a){},99:function(e,t,a){}},[[92,1,2]]]);
//# sourceMappingURL=main.21588abb.chunk.js.map