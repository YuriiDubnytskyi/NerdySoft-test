(this.webpackJsonpnerdysoft=this.webpackJsonpnerdysoft||[]).push([[0],{39:function(e,t,a){e.exports=a(80)},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(18),l=a.n(r),i=(a(44),a(5)),s=a(6),o=(a(45),a(46),function(){return c.a.createElement("div",null,c.a.createElement("header",{className:"header"},c.a.createElement("p",{className:"logo"},c.a.createElement("span",{className:"first"},"Nerdy"),c.a.createElement("span",{className:"second"},"Soft"))))}),u=(a(47),function(){return c.a.createElement("div",null,c.a.createElement("footer",{className:"footer"},c.a.createElement("p",{className:"created"},"Created by Yurii Dubnytskyi")))}),m=a(4),p=a(7),f=a(3),d=(a(52),function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),r=a[0],l=a[1];return Object(n.useEffect)((function(){l(new Date(e.data.date).toLocaleString())}),[r]),c.a.createElement("div",null,c.a.createElement("div",{className:"card"},c.a.createElement("p",{className:"card-title"},e.data.title),c.a.createElement("p",{className:"card-text"},e.data.description),c.a.createElement("button",{className:"card-btn",onClick:function(){return e.click(e.id)}},"Read More"),c.a.createElement("p",{className:"card-time"},r)))}),E=a(2),h=function(e){return{type:"SET_PAGE_OF_ITEMS",data:e}},g=function(e){return{type:"SET_PAGER",pager:e}},b=function(e){return{type:"SET_POSTS",data:e}},v=function(e){return{type:"SET_VALUE",inputValue:e}},O=function(){return{type:"DELETE_VALUE"}},x=function(e){return{type:"CHANCHE_SEARCH",data:e}},j=function(e){return{type:"SET_POST_ITEM",data:e}},N=(a(53),Object(p.b)(null,(function(e){return Object(i.a)({dispatch:e},Object(f.b)({setPostItem:j},e))}))((function(e){var t=Object(E.f)(),a=function(a){e.setPostItem(a),t.push("/post/:".concat(a))};return c.a.createElement("div",{className:"card-container"},e.posts.map((function(e,t){return c.a.createElement(d,{data:e,id:e._id,key:e._id,click:a,time:new Date(e.date)})})))}))),y=(a(55),Object(p.b)(null,(function(e){return Object(i.a)({dispatch:e},Object(f.b)({setPageOfItems:h},e))}))((function(e){var t=Object(n.useState)(1),a=Object(m.a)(t,2),r=a[0];a[1];Object(n.useEffect)((function(){l(r)}),[e.filter]);var l=function(t){var a=e.filter,n=e.pager;if(!(t<1)){n=i(a.length,t);var c=a.slice(n.startIndex,n.endIndex+1);e.search&&(e.setPager(n),e.setPageOfItems(c))}},i=function(e,t,a){t=t||1,a=a||4;var n,c,r=Math.ceil(e/a);r<=4?(n=1,c=r):t<=3?(n=1,c=4):t+4>=r?(n=r-4,c=r):(n=t-2,c=t+2);var l=(t-1)*a,i=Math.min(l+a-1,e-1),o=Object(s.a)(Array(c+1-n).keys()).map((function(e){return n+e}));return{totalItems:e,currentPage:t,pageSize:a,totalPages:r,startPage:n,endPage:c,startIndex:l,endIndex:i,pages:o}};return c.a.createElement("div",null,c.a.createElement("ul",{className:"pagination"},c.a.createElement("li",null,c.a.createElement("button",{disabled:1===e.pager.currentPage,onClick:function(){return l(1)}},"First")),c.a.createElement("li",null,c.a.createElement("button",{disabled:1===e.pager.currentPage,onClick:function(){return l(e.pager.currentPage-1)}},"Previous")),void 0===e.pager.pages?c.a.createElement(c.a.Fragment,null):e.pager.pages.map((function(t,a){return c.a.createElement("li",{key:a,className:e.pager.currentPage===t?"active":""},c.a.createElement("button",{disabled:e.pager.currentPage===t,onClick:function(){return l(t)}},t))})),c.a.createElement("li",null,c.a.createElement("button",{disabled:e.pager.currentPage===e.pager.totalPages,onClick:function(){return l(e.pager.currentPage+1)}},"Next")),c.a.createElement("li",null,c.a.createElement("button",{disabled:e.pager.currentPage===e.pager.totalPages,onClick:function(){return l(e.pager.totalPages)}},"Last"))))}))),S=(a(56),a(57),a(58),function(e){return c.a.createElement("div",{className:"btn-".concat(e.class)},c.a.createElement("button",{className:"btn ".concat(e.class),onClick:function(){return e.click()}},e.text))}),P=function(e){return c.a.createElement("div",{className:"input-main"},c.a.createElement("div",{className:"input-container"},c.a.createElement("label",{className:"label-text"},"Search by title"),c.a.createElement("input",{value:e.value,className:"input",placeholder:"Search",onChange:function(t){return e.change(t.target.value)}})),c.a.createElement("div",{className:"btn-group"},c.a.createElement(S,{class:"search",text:"Search",click:e.clickF}),c.a.createElement(S,{class:"clear",text:"Clear",click:e.clickD})))},w=a(13),_=Object(p.b)((function(e){return{posts:e.posts.post,postPage:e.posts.pageOfItems,pager:e.value.pager,inputValue:e.value.inputValue,search:e.value.search}}),(function(e){return Object(i.a)({dispatch:e},Object(f.b)({deleteValue:O,setValue:v,setPager:g,changeSearch:x},e))}))((function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(["q"]),o=Object(m.a)(i,2),u=o[0],p=o[1];Object(n.useEffect)((function(){""===e.inputValue?p(e.posts):l(e.inputValue)}),[e.posts]);return c.a.createElement("div",{className:"main-container"},c.a.createElement("div",{className:"functional-container"},c.a.createElement(P,{change:l,clickF:function(){var t=e.posts.filter((function(e){return-1!==e.title.toLowerCase().search(r.toLowerCase())}));p(""===r?Object(s.a)(e.posts):t),e.setValue(r),e.changeSearch(!0),console.log(u)},clickD:function(){p(Object(s.a)(e.posts)),e.deleteValue(),l(""),e.changeSearch(!0),e.setPager({})},value:r}),c.a.createElement("div",{className:"add-link"},c.a.createElement(w.b,{to:"/add"},c.a.createElement(S,{text:"Add Post",click:function(){return console.log()},class:"add"})))),c.a.createElement("div",{className:"listPost"},c.a.createElement(N,{posts:e.postPage})),c.a.createElement("div",null,c.a.createElement(y,{filter:u,pager:e.pager,setPager:e.setPager,inputValue:e.inputValue,search:e.search})))})),k=(a(59),a(17)),M=a.n(k),C=function(){return M.a.get("/api/post/getAll").then((function(e){return e}))},T=Object(p.b)(null,(function(e){return Object(i.a)({dispatch:e},Object(f.b)({setPost:b,changeSearch:x},e))}))((function(e){var t=Object(E.f)(),a=Object(n.useState)(""),r=Object(m.a)(a,2),l=r[0],i=r[1],o=Object(n.useState)(""),u=Object(m.a)(o,2),p=u[0],f=u[1],d=function(){""===l||""===p?alert("Title or Description Empty"):function(e){return M.a.post("/api/post/create",e).then((function(e){return e}))}({title:l,description:p,date:Date.parse(new Date)}).then((function(){C().then((function(a){e.setPost(Object(s.a)(a.data)),e.changeSearch(!0),t.push("/")}))}))};return c.a.createElement("div",{className:"add-post_container"},c.a.createElement("div",{className:"new-post"},c.a.createElement("h2",null,"Add New Post"),c.a.createElement("p",{className:"new-pots_title"},"Title"),c.a.createElement("input",{value:l,onChange:function(e){return i(e.target.value)}}),c.a.createElement("p",{className:"new-post_description"},"Description"),c.a.createElement("textarea",{rows:20,cols:30,value:p,onChange:function(e){return f(e.target.value)}})),c.a.createElement("div",{className:"see-post"},c.a.createElement("h2",null,"How it will look like"),c.a.createElement("div",{className:"card"},c.a.createElement("p",{className:"card-title"},"Title"),c.a.createElement("p",{className:"card-title1"},l),c.a.createElement("p",{className:"card-text1"},"Description"),c.a.createElement("p",{className:"card-text"},p),c.a.createElement("button",{className:"card-btn1"},"Read More"))),c.a.createElement("div",{className:"btn-container"},c.a.createElement(S,{click:function(){return d()},class:"post",text:"Add"}),c.a.createElement(S,{click:function(){t.push("/")},class:"post",text:"Cancel"})))})),I=a(25),z=a.n(I),V=a(37),D=(a(78),Object(p.b)((function(e){return{item:e.posts.postItem[0]}}),(function(e){return Object(i.a)({dispatch:e},Object(f.b)({changeSearch:x,setPost:b,setPostItem:j,deleteValue:O},e))}))((function(e){var t=Object(E.f)(),a=Object(n.useState)({saving:!1,coment:""}),r=Object(m.a)(a,2),l=r[0],i=r[1],o=Object(n.useState)({deleting:!1,coment:""}),u=Object(m.a)(o,2),p=u[0],f=u[1],d=Object(n.useState)(!1),h=Object(m.a)(d,2),g=h[0],b=h[1],v=Object(n.useState)(""),O=Object(m.a)(v,2),x=O[0],j=O[1],N=Object(n.useState)(""),y=Object(m.a)(N,2),S=y[0],P=y[1],w=Object(n.useState)(""),_=Object(m.a)(w,2),k=_[0],T=_[1],I=Object(n.useState)(""),D=Object(m.a)(I,2),A=D[0],F=D[1];Object(n.useEffect)((function(){void 0===e.item?t.push("/404"):(e.changeSearch(!1),T(e.item.title),j(e.item.title),P(e.item.description),F(e.item.description),b(!1),f({deleting:!1,coment:""}),i({saving:!1,coment:""}))}),[e.item]);var L=function(){var a=Object(V.a)(z.a.mark((function a(n){return z.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.setPostItem(n);case 2:return a.next=4,t.push("/post/:"+n);case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return c.a.createElement("div",{className:"post-container"},l.saving||p.deleting?c.a.createElement("div",{className:"post-comment"},c.a.createElement("p",null,l.coment,p.coment)):c.a.createElement("div",{className:"post-info"},c.a.createElement("h2",null,"Post"),c.a.createElement("p",{className:"post-info_title"},"Title"),c.a.createElement("p",{className:"post-info_title-text"},k),g?c.a.createElement("input",{value:k,onChange:function(e){return T(e.target.value)}}):c.a.createElement(c.a.Fragment,null),c.a.createElement("p",{className:"post-info_description"},"Description"),c.a.createElement("p",{className:"post-info_description-text"},A),g?c.a.createElement("textarea",{rows:15,cols:60,className:"post-info_textarea",value:A,onChange:function(e){return F(e.target.value)}}):c.a.createElement(c.a.Fragment,null)),c.a.createElement("div",{className:"similar-post"},l.saving||p.deleting||void 0===e.item||0===e.item.similar.length?c.a.createElement(c.a.Fragment,null):c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"Similar Posts"),e.item.similar.map((function(e){return console.log(e),c.a.createElement("div",{className:"similar-post_item"},c.a.createElement("p",{className:"similar-post_title"},e.title),c.a.createElement("button",{className:"similar-post_btn",onClick:function(){return L(e.id)}},"Read More"))})))),c.a.createElement("div",{className:"item-group-btn"},l.saving||p.deleting?c.a.createElement(c.a.Fragment,null):g?c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"item-group-btn--save",onClick:function(){var t;i({saving:!0,coment:"saving"}),(t={id:e.item._id,title:k,description:A},M.a.put("/api/post/updatePost",t).then((function(e){return e}))).then((function(){C().then((function(t){e.setPost(Object(s.a)(t.data)),e.changeSearch(!0),i({saving:!0,coment:"Save"})}))}))}},"Save"),c.a.createElement("button",{className:"item-group-btn--cancel",onClick:function(){T(x),F(S),b(!1)}},"Cancel")):c.a.createElement("button",{className:"item-group-btn--update",onClick:function(){return b(!0)}},"Update"),l.saving||p.deleting?c.a.createElement(c.a.Fragment,null):c.a.createElement("button",{className:"item-group-btn--delete",onClick:function(){var t;f({deleting:!0,coment:"deleting"}),(t=e.item._id,M.a.delete("/api/post/deletePost/"+t).then((function(e){return e}))).then((function(){C().then((function(t){e.setPost(Object(s.a)(t.data)),e.changeSearch(!0),f({deleting:!0,coment:"Deleted"}),e.deleteValue()}))}))}},"Delete"),c.a.createElement("button",{className:"item-group-btn--home",onClick:function(e){t.push("/")}},"Home")))}))),A=(a(79),function(e){return n.createElement("div",null,n.createElement("div",{className:"container-notF"},n.createElement("h1",null,"woop"),n.createElement("h2",null,"page not found"),n.createElement("h2",null,"404"),n.createElement("svg",{className:"monkey-hammer-hat",xmlns:"http://www.w3.org/2000/svg",width:"359.997",height:"330",viewBox:"0 0 95.249 87.313"},n.createElement("g",{transform:"matrix(.99747 0 0 1.05652 -16.368 -190.133)"},n.createElement("g",{id:"arm",transform:"matrix(1.01003 -.0263 .02138 1.00115 -3.841 .738)"},n.createElement("path",{d:"M59.068 203.392l5.855 4.981c-6.396 13.585-4.114 13.727-24.452 31.094l-5.855-4.981c23.116-18.726 17.356-17.124 24.452-31.094z",fill:"purple"}),n.createElement("g",{transform:"matrix(.256 -.1843 .19541 .27145 -14.22 217.94)"},n.createElement("path",{d:"M98.444 104.74h12.85c.876 0 1.556.762 1.581 1.709l1.255 47.609c.025.946-.705 1.709-1.58 1.709H97.19c-.876 0-1.606-.763-1.581-1.71l1.254-47.608c.025-.947.705-1.71 1.581-1.71z",fill:"#d40000"}),n.createElement("rect",{width:"42.711",height:"25.324",x:"82.399",y:"90.247",rx:"12",ry:"12",fill:"#ccc"}),n.createElement("path",{d:"M75.334 93.498h4.78c.686 0 3.532 4.973 3.532 11.15 0 6.177-2.846 11.15-3.532 11.15h-4.78c-.686 0-.91-4.973-.91-11.15 0-6.177.224-11.15.91-11.15zm34.356-2.117s26.226-5.48 33.57 10.583c4.587 10.037-16.576-11.717-31.67 3.402-9.404 9.42-1.9-13.985-1.9-13.985z",fill:"#ccc"})),n.createElement("rect",{transform:"matrix(.7685 -.63985 .59545 .80339 0 0)",width:"8.809",height:"4.186",x:"-115.885",y:"200.809",rx:"2.354",ry:"3.405",fill:"#ffd42a"}),n.createElement("rect",{transform:"matrix(.7685 -.63985 .59545 .80339 0 0)",ry:"3.405",rx:"2.354",y:"204.167",x:"-115.885",height:"4.186",width:"8.809",fill:"#ffd42a"}),n.createElement("rect",{transform:"matrix(.7685 -.63985 .59545 .80339 0 0)",width:"8.809",height:"4.186",x:"-115.885",y:"207.524",rx:"2.354",ry:"3.405",fill:"#ffd42a"})),n.createElement("ellipse",{cx:"51.954",cy:"201.259",rx:"13.129",ry:"15.176",transform:"matrix(.99875 -.0499 .04548 .99897 0 0)",fill:"purple"}),n.createElement("path",{d:"M56.247 183.58s8.997 1.961 9.353 2.426c.356.466-5.901 1.91-5.901 1.91zm-1.664 31.088l8.202-1.102-3.674-2.397z",fill:"purple"}),n.createElement("rect",{transform:"matrix(.97342 -.22902 .22568 .9742 0 0)",ry:"3.008",rx:"2.093",y:"261.402",x:"24.628",height:"3.697",width:"7.833",fill:"#ffd42a"}),n.createElement("rect",{width:"7.715",height:"2.516",x:"-4.571",y:"260.813",rx:"2.062",ry:"2.047",transform:"matrix(.9882 -.1532 .33165 .9434 0 0)",fill:"#ffd42a"}),n.createElement("rect",{transform:"matrix(.9833 -.18204 .28242 .9593 0 0)",ry:"2.403",rx:"2.072",y:"256.702",x:"8.649",height:"2.955",width:"7.754",fill:"#ffd42a"}),n.createElement("path",{d:"M69.218 242.928l9.28.444c-2.757 3.757-7.053 10.015-3.133 16.836l-10.199 1.728c-2.934-6.94.477-14.683 4.053-19.008z",fill:"purple"}),n.createElement("path",{d:"M60.578 238.905l8.64 4.023c-7.156 3.3-13.52 11.696-9.217 19.162l-6.99-2.38c-4.06-11.135 6.116-21.705 7.567-20.805z",fill:"purple"}),n.createElement("g",{fill:"#ccaa22"},n.createElement("path",{d:"M55.15 258.13c5.297.756 9.882.998 9.882 2.237 0 1.24-4.407 2.237-9.881 2.237-5.476 0-10.048-1.137-10.048-2.237 0-1.975 1.87-3.402 10.047-2.236z"}),n.createElement("path",{d:"M45.103 260.208h19.93v2.396h-18.67c-1.396-.87-1.26-2.167-1.26-2.396z"})),n.createElement("g",{fill:"#ffd42a"},n.createElement("path",{d:"M66.395 258.13c4.808.756 8.97.998 8.97 2.237 0 1.24-4 2.237-8.97 2.237-4.97 0-9.12-1.137-9.12-2.237 0-1.975 1.697-3.402 9.12-2.236z"}),n.createElement("path",{d:"M57.274 260.208h18.09s-.243 2.396-1.006 2.396h-15.94c-1.267-.87-1.144-2.167-1.144-2.396z"})),n.createElement("ellipse",{cx:"18.001",cy:"240.417",rx:"14.895",ry:"17.459",transform:"matrix(.97389 -.22702 .20778 .97818 0 0)",fill:"purple"}),n.createElement("path",{d:"M62.021 205.446c4.981-4.194 14.054 9.313 19.173 17.99 6.094 10.334-1.978 22.923-10.081 24.81-8.104 1.89-20.464-5.92-19.173-17.99 1.746-16.322 2.904-18.767 10.081-24.81z",fill:"purple"}),n.createElement("ellipse",{cx:"58.967",cy:"222.56",rx:"6.278",ry:"9.211",transform:"skewY(9.515) scale(.98624 1)",fill:"#cc3dcc"}),n.createElement("path",{d:"M68.156 244.035s18.66-8.324 18.66-28.347c0-20.024 27.59-19.35 22.612.109-1.934 7.563-12.584 8.133-12.584-2.544",fill:"none",stroke:"purple","stroke-width":"3.764","stroke-linecap":"round"}),n.createElement("path",{d:"M68.804 206.92c4.183 2.958 6.055 6.108 7.932 8.987l.088 24.336h-8.02z",fill:"#cc3dcc"}),n.createElement("path",{d:"M76.824 239.49h-8.02s-2.282 12.703 16.982 12.703l-1.664-7.981s-7.298 1.657-7.298-4.721z",fill:"#cc3dcc"}),n.createElement("rect",{width:"29.815",height:"18.256",x:"24.975",y:"198.882",rx:"10.141",ry:"14.636",transform:"matrix(.99875 -.0499 .04548 .99897 0 0)",fill:"#ffd42a"}),n.createElement("ellipse",{cx:"31.914",cy:"210.883",rx:"2.113",ry:"2.188",transform:"matrix(.99875 -.0499 .04548 .99897 0 0)",fill:"purple"}),n.createElement("ellipse",{cx:"45.8",cy:"195.208",rx:"8.828",ry:"9.364",transform:"matrix(.99875 -.0499 .04548 .99897 0 0)",fill:"#ffd42a"}),n.createElement("ellipse",{ry:"1.286",rx:"1.242",cy:"194.333",cx:"41.696",transform:"matrix(.99875 -.0499 .04548 .99897 0 0)",fill:"purple"}),n.createElement("ellipse",{cx:"45.47",cy:"194.74",rx:"1.242",ry:"1.286",transform:"matrix(.99875 -.0499 .04548 .99897 0 0)",fill:"purple"}),n.createElement("path",{d:"M42.978 197.04s2.945-.028 2.756-4.174l2.714 4.85z",fill:"#ffd42a"}),n.createElement("g",{fill:"#f60000"},n.createElement("path",{d:"M65.91 182.22c5.745 2.615 10.975 4.163 10.198 6.321-.777 2.16-6.576 2.815-13.003 1.471-6.427-1.343-10.607-4.107-10.197-6.32.664-3.584 4.136-5.509 13.003-1.472z"}),n.createElement("path",{d:"M53.008 183.413l23.2 4.85-1.503 4.174-23.2-4.85z"})),n.createElement("path",{d:"M69.697 191.916l6.186-2.005c2.835-.918 4.451 2.47 4.893 6.062.442 3.592-.33 6.916-3.217 7.545l-6.265 1.365c-2.885.628-5.626-2.18-6.07-5.77-.441-3.593 1.638-6.279 4.473-7.197z",fill:"#ffd42a"}),n.createElement("g",{transform:"matrix(.54937 -.31515 .30076 .57546 29.409 114.37)"},n.createElement("circle",{r:"8.221",cy:"144.987",cx:"-1.73",fill:"#ffd42a"}),n.createElement("path",{d:"M-9.95 144.987a8.221 8.221 0 0 1 8.22-8.22 8.221 8.221 0 0 1 8.221 8.22h-8.22z",fill:"#ffbb15"})),n.createElement("ellipse",{ry:"1.991",rx:"1.892",cy:"159.136",cx:"115.054",transform:"matrix(.96514 .26174 -.26748 .96356 0 0)",fill:"#f60000"}),n.createElement("path",{d:"M64.973 190.395l-17.346-3.316s-4.018-12.64 17.346 3.316z",fill:"#c30000"}))),n.createElement("h2",null,"we are working on it"),n.createElement(w.b,{to:"/"},"Home")))}),F=Object(p.b)(null,(function(e){return Object(i.a)({dispatch:e},Object(f.b)({setPost:b},e))}))((function(e){return Object(n.useEffect)((function(){C().then((function(t){e.setPost(Object(s.a)(t.data))}))}),[]),c.a.createElement(w.a,null,c.a.createElement("div",null,c.a.createElement(o,null),c.a.createElement(E.c,null,c.a.createElement(E.a,{exact:!0,path:"/",component:_}),c.a.createElement(E.a,{path:"/post/:id",component:D}),c.a.createElement(E.a,{path:"/add",component:T}),c.a.createElement(E.a,{component:A})),c.a.createElement(u,null)))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=a(38),H=function(e,t){return Object(i.a)(Object(i.a)({},e),t)},R={post:[],pageOfItems:[],postItem:[]},U=function(e,t){return t.post.filter((function(t){return t._id===e}))},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_POSTS":return H(e,{post:Object(s.a)(t.data)});case"SET_POST_ITEM":return H(e,{postItem:U(t.data,e)});case"DELETE_POST_ITEM":return H(e,{postItem:[]});case"SET_PAGE_OF_ITEMS":return H(e,{pageOfItems:Object(s.a)(t.data)});default:return e}},B={pager:1,inputValue:"",search:!0},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PAGER":return H(e,{pager:t.pager});case"SET_VALUE":return H(e,{inputValue:t.inputValue});case"DELETE_VALUE":return H(e,{inputValue:""});case"CHANCHE_SEARCH":return H(e,{search:t.data});default:return e}},W=Object(f.c)({posts:G,value:J}),X=window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||f.d,Y=Object(f.e)(W,X(Object(f.a)((function(e){return function(t){return function(a){console.log("[Middleware] Dispatching",a);var n=t(a);return console.log("[Middleware] next state",e.getState()),n}}}),L.a)));l.a.render(c.a.createElement(p.a,{store:Y},c.a.createElement(c.a.StrictMode,null,c.a.createElement(F,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.bdd36c87.chunk.js.map