(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){"use strict";var n=a(34),r=a(12),o=a(0),c=a.n(o),i=a(99),s=a(249),l=a(26),u=function(){var e=Object(o.useContext)(l.a).preparedGoods;return c.a.createElement(s.a,{container:!0,spacing:2},e.map(function(e){return c.a.createElement(i.a,Object.assign({key:e.id},e))}))},m=a(247),d=a(272),p=a(140),b=a.n(p),g=a(23),y=function(e){var t=e.value,a=e.onChange,n=Object(g.b)("Service").Search;return c.a.createElement(m.a,{id:"outlined-search",label:n,type:"search",variant:"standard",fullWidth:!0,sx:{mb:"1rem"},value:t,onChange:a,InputProps:{readOnly:!1,startAdornment:c.a.createElement(d.a,{position:"start"},c.a.createElement(b.a,null))}})},f=a(65),h=a(274),v=a(275),O=a(276),j=a(259),k=a(277),E=a(233),S=a(235),C=a(252),D=a(7),x=a(273),B=Object(D.a)(x.a)(function(e){var t=e.theme;return{width:61,height:34,padding:7,"& .MuiSwitch-switchBase":{margin:1,padding:0,transform:"translateX(6px)","&.Mui-checked":{color:"#fff",transform:"translateX(22px)","& .MuiSwitch-thumb:before":{content:"'UA'",position:"absolute",width:"100%",height:"100%",left:5,top:5},"& + .MuiSwitch-track":{opacity:1,backgroundColor:"dark"===t.palette.mode?"#8796A5":"#aab4be"}}},"& .MuiSwitch-thumb":{backgroundColor:"dark"===t.palette.mode?"#003892":"#CB1D44",width:32,height:32,"&:before":{content:"'EN'",position:"absolute",width:"100%",height:"100%",left:5,top:5}},"& .MuiSwitch-track":{opacity:1,backgroundColor:"dark"===t.palette.mode?"#8796A5":"#aab4be",borderRadius:10}}}),w=a(58),M=function(e){var t=e.openCart,a=Object(o.useContext)(w.a),n=a.language,r=a.setLanguage,i=Object(o.useContext)(l.a).order,s=Object(g.b)("Description").FootballBadges;return c.a.createElement(h.a,{position:"sticky"},c.a.createElement(v.a,null,c.a.createElement(O.a,{color:"inherit",sx:{cursor:"initial"}},c.a.createElement(E.a,null)),c.a.createElement(j.a,{variant:"h6",component:"span",sx:{flexGrow:1}},s),c.a.createElement(k.a,{control:c.a.createElement(B,{sx:{m:1}}),checked:"ua"===n,onChange:function(e){var t=e.target.checked?"ua":"en";r(t),Object(g.a)(t)}}),c.a.createElement(O.a,{color:"inherit",onClick:t},c.a.createElement(C.a,{badgeContent:i.length,color:"secondary"},c.a.createElement(S.a,null)))))},P=a(278),T=a(279),A=a(253),F=a(271),K=a(248),H=a(236),I=a(238),L=a(239),R=a(261),W=a(142),G=a.n(W),N=a(47),q=function(e){var t=e.name,a=e.price,n=e.id,r=e.quantity,i=Object(o.useContext)(l.a).removeFromOrder,s=Object(o.useContext)(N.a),u=s.setSnackSeverity,m=s.setOpenSnackbar,d=s.setSnackBarText,p=Object(g.b)("Service").Hryvna,b=Object(g.b)("Message").DeletedFromBasket;return c.a.createElement(K.a,null,c.a.createElement(R.a,{direction:"row",justifyContent:"space-between",alignItems:"center",width:"100%"},c.a.createElement(j.a,{variant:"body1"},t," ",a," ",p," x ",r),c.a.createElement(O.a,{"aria-label":"delete",onClick:function(){i(n),m(!0),d(b),u("warning")}},c.a.createElement(G.a,null))))},z=a(237),J=function(e){var t=e.isOpened,a=e.closeCart,n=Object(o.useContext)(l.a).order,r=void 0===n?[]:n,i=Object(g.b)("Service"),s=i.Basket,u=i.Hryvna,m=i.TotalPrice,d=Object(g.b)("Message").BasketIsEmpty;return c.a.createElement(A.a,{anchor:"right",open:t,onClose:a},c.a.createElement(F.a,{sx:{width:"400px",maxWidth:"75vw"}},c.a.createElement(K.a,null,c.a.createElement(H.a,null,c.a.createElement(z.a,null)),c.a.createElement(I.a,{primary:s})),c.a.createElement(L.a,{variant:"fullWidth"}),r.length?c.a.createElement(c.a.Fragment,null,r.map(function(e,t){return c.a.createElement(q,Object.assign({key:t},e))}),c.a.createElement(L.a,{variant:"fullWidth"}),c.a.createElement(K.a,{sx:{my:2}},c.a.createElement(j.a,{sx:{fontWeight:"700"}},m,":"," ",r.reduce(function(e,t){return e+t.price*t.quantity},0)," ",u,"."))):c.a.createElement(K.a,null,d)))},X=a(243),Q=a(244),Y=function(){var e=Object(o.useContext)(N.a),t=e.closeSnackbar,a=e.isOpenSnackbar,n=e.snackBarText,r=e.snackSeverity;return c.a.createElement(X.a,{open:a,autoHideDuration:3e3,onClose:t},c.a.createElement(Q.a,{severity:r,onClose:t,sx:{width:"100%"}},n))};t.a=function(){var e=Object(o.useState)(""),t=Object(r.a)(e,2),a=t[0],i=t[1],s=Object(o.useState)(!1),m=Object(r.a)(s,2),d=m[0],p=m[1],b=Object(o.useContext)(w.a).language,h=Object(o.useContext)(l.a),v=h.translatedGoods,O=h.setTranslatedGoods,j=h.setPreparedGoods;Object(o.useEffect)(function(){var e=Object(g.b)("Description"),t=Object.keys(e),a=f.a.map(function(a,r){return Object(n.a)({},a,{name:e[t[r+1]]})});j(a),O(a)},[b]);return c.a.createElement("div",{className:"App"},c.a.createElement(P.a,{sx:{minWidth:"340px"}},c.a.createElement(M,{openCart:function(){return p(!0)}}),c.a.createElement(T.a,{sx:{mt:"1rem",minWidth:"340px"}},c.a.createElement(y,{value:a,onChange:function(e){if(!e.target.value)return j(v),void i("");i(e.target.value),j(v.filter(function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())}))}}),c.a.createElement(u,null)),c.a.createElement(J,{isOpened:d,closeCart:function(){return p(!1)}}),c.a.createElement(Y,null)))}},120:function(e,t,a){e.exports=a(154)},127:function(e,t,a){},154:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(109),c=a.n(o),i=(a(127),a(108)),s=a(148),l=a(242),u=a(90),m=a(12),d=r.a.lazy(function(){return Promise.all([a.e(3),a.e(1)]).then(a.bind(null,256))}),p=a(58),b=a(26),g=a(47),y=Object(s.a)({palette:{primary:{main:"#001D42"},secondary:{main:"#ff7f50"}}});c.a.createRoot(document.getElementById("root")).render(r.a.createElement(l.a,{theme:y},r.a.createElement(u.d,{ComponentPreviews:d,useInitialHook:function(){var e=Object(n.useState)({loading:!1,error:!1}),t=Object(m.a)(e,2),a=t[0];t[1];return a}},r.a.createElement(p.b,null,r.a.createElement(g.b,null,r.a.createElement(b.b,null,r.a.createElement(i.a,null)))))))},23:function(e,t,a){"use strict";var n={Description:{FootballBadges:"\u0424\u0443\u0442\u0431\u043e\u043b\u044c\u043d\u0456 \u0437\u043d\u0430\u0447\u043a\u0438",HunterTompson:"\u0425\u0430\u043d\u0442\u0435\u0440 \u0422\u043e\u043c\u043f\u0441\u043e\u043d \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u0443\u0454 \u0414\u0438\u043d\u0430\u043c\u043e",ACAB:"ACAB. \u0421\u0442\u0438\u043b\u044c \u041f\u0435\u043f\u0441\u0456",DonaldDuck:"\u041a\u0430\u0447\u043a\u0430 \u0414\u043e\u043d\u0430\u043b\u044c\u0434 \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u0443\u0454 \u043a\u0438\u044f\u043d",DynamoKit:"\u0406\u0433\u0440\u043e\u0432\u0430 \u0444\u043e\u0440\u043c\u0430 \u0414\u0438\u043d\u0430\u043c\u043e \u041a\u0438\u0457\u0432",Lazio:"\u041b\u0430\u0446\u0456\u043e \u0420\u0438\u043c",DynamoRhomb:"\u0420\u043e\u043c\u0431 \u0414\u0438\u043d\u0430\u043c\u043e \u041a\u0438\u0457\u0432",PearlOfFootball:"\u0414\u0438\u043d\u0430\u043c\u043e, \u0436\u0435\u043c\u0447\u0443\u0436\u0438\u043d\u0430 \u0444\u0443\u0442\u0431\u043e\u043b\u0430",CasualDynamo:"\u041a\u0435\u0448\u0443\u0430\u043b\u0441 \u0424\u041a\u0414\u041a",RealMadrid:"\u041a\u043e\u043b\u0435\u043a\u0446\u0456\u044f \u0437\u043d\u0430\u0447\u043a\u0456\u0432 \u0420\u0435\u0430\u043b \u041c\u0430\u0434\u0440\u0438\u0434",ModernDynamoKit:"\u0421\u0443\u0447\u0430\u0441\u043d\u0430 \u0456\u0433\u0440\u043e\u0432\u0430 \u0444\u043e\u0440\u043c\u0430 \u0414\u0438\u043d\u0430\u043c\u043e \u041a\u0438\u0457\u0432",DynamoDisk:"\u0428\u0430\u0439\u0431\u0430 \u0414\u0438\u043d\u0430\u043c\u043e \u041a\u0438\u0457\u0432",Sportcomitet:"\u0414\u0438\u043d\u0430\u043c\u043e \u041a\u0438\u0457\u0432. \u0421\u043f\u043e\u0440\u0442\u043a\u043e\u043c\u0456\u0442\u0435\u0442"},Service:{Basket:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430",Search:"\u041f\u043e\u0448\u0443\u043a",Price:"\u0426\u0456\u043d\u0430",Buy:"\u041a\u0443\u043f\u0438\u0442\u0438",TotalPrice:"\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0430 \u0441\u0443\u043c\u0430",Hryvna:"\u0433\u0440\u043d"},Message:{BasketIsEmpty:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430!",AddedToBasket:"\u0422\u043e\u0432\u0430\u0440 \u0434\u043e\u0434\u0430\u043d\u043e \u0434\u043e \u043a\u043e\u0440\u0437\u0438\u043d\u0438!",DeletedFromBasket:"\u0422\u043e\u0432\u0430\u0440 \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043e \u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u0438!"}},r={Description:{FootballBadges:"Football badges",HunterTompson:"Hunter Tompson supports Dynamo",ACAB:"ACAB. Pepsi style",DonaldDuck:"Donald Duck supports Kyiv",DynamoKit:"Dynamo Kyiv kit",Lazio:"Lazio Rome",DynamoRhomb:"Dynamo Kyiv rhomb",PearlOfFootball:"Dynamo, the pearl of football",CasualDynamo:"CasualsFCDK",RealMadrid:"Real Madrid badges collection",ModernDynamoKit:"Modern Dynamo Kyiv kit",DynamoDisk:"Dynamo Kyiv disk",Sportcomitet:"Dynamo Kyiv. Sportcomitet"},Service:{Basket:"Basket",Search:"Search",Price:"Price",Buy:"Buy",TotalPrice:"Total price",Hryvna:"grn"},Message:{BasketIsEmpty:"Basket is empty!",AddedToBasket:"Added to the basket!",DeletedFromBasket:"Deleted from the basket!"}};a.d(t,"a",function(){return c}),a.d(t,"b",function(){return i});var o=JSON.parse(localStorage.getItem("language")),c=function(e){o=e},i=function(e){var t;switch(o){case"en":t=r;break;case"ua":t=n;break;default:t=n}return t[e]||""}},26:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return u});var n=a(18),r=a(12),o=a(0),c=a.n(o),i=a(69),s=a(65),l=Object(o.createContext)(null),u=function(e){var t=e.children,a=Object(i.a)("order",[]),u=Object(r.a)(a,2),m=u[0],d=u[1],p=Object(o.useState)(s.a),b=Object(r.a)(p,2),g=b[0],y=b[1],f=Object(o.useState)(s.a),h=Object(r.a)(f,2),v=h[0],O=h[1],j={order:m,setOrder:d,translatedGoods:g,setTranslatedGoods:y,preparedGoods:v,setPreparedGoods:O,addToOrder:function(e){var t=1,a=m.findIndex(function(t){return t.id===e.id});a>-1?(t=m[a].quantity+1,d(m.map(function(a){return a.id!==e.id?a:{id:a.id,name:a.name,price:a.price,quantity:t}}))):d([].concat(Object(n.a)(m),[{id:e.id,name:e.name,price:e.price,quantity:t}]))},removeFromOrder:function(e){d(m.filter(function(t){return t.id!==e}))}};return c.a.createElement(l.Provider,{value:j},t)}},47:function(e,t,a){"use strict";a.d(t,"a",function(){return i}),a.d(t,"b",function(){return s});var n=a(12),r=a(0),o=a.n(r),c=a(23),i=Object(r.createContext)(""),s=function(e){var t=e.children,a=Object(r.useState)(!1),s=Object(n.a)(a,2),l=s[0],u=s[1],m=Object(r.useState)(""),d=Object(n.a)(m,2),p=d[0],b=d[1],g=Object(r.useState)(""),y=Object(n.a)(g,2),f=y[0],h=y[1],v=Object(c.b)("Service").Buy,O={isOpenSnackbar:l,setOpenSnackbar:u,snackBarText:p,setSnackBarText:b,snackSeverity:f,setSnackSeverity:h,closeSnackbar:function(e){e&&e.target.textContent===v||u(!1)}};return o.a.createElement(i.Provider,{value:O},t)}},58:function(e,t,a){"use strict";a.d(t,"a",function(){return i}),a.d(t,"b",function(){return s});var n=a(12),r=a(0),o=a.n(r),c=a(69),i=Object(r.createContext)("ua"),s=function(e){var t=e.children,a=Object(c.a)("language",""),r=Object(n.a)(a,2),s={language:r[0],setLanguage:r[1]};return o.a.createElement(i.Provider,{value:s},t)}},65:function(e,t,a){"use strict";a.d(t,"a",function(){return p});var n=a(23),r=Object(n.b)("Description"),o=r.HunterTompson,c=r.ACAB,i=r.CasualDynamo,s=r.DonaldDuck,l=r.DynamoDisk,u=r.DynamoKit,m=r.DynamoRhomb,d=r.ModernDynamoKit,p=[{id:"1",category:"dynamo",name:o,poster:"https://i.postimg.cc/YS9msQ4N/hunter-tompson.jpg",price:1350},{id:"2",category:"amf",name:c,poster:"https://i.postimg.cc/W4HJLtrB/acab.jpg",price:1300},{id:"3",category:"sport",name:s,poster:"https://i.postimg.cc/QdNBFcqL/sokil-dynamo.jpg",price:1250},{id:"4",category:"dynamo",name:u,poster:"https://i.postimg.cc/YCtFQ5Ms/dynamo-unifrom-collection.jpg",price:3850},{id:"5",category:"sport",name:r.Lazio,poster:"https://i.postimg.cc/fWXSpzbP/lazio.jpg",price:2730},{id:"6",category:"dynamo",name:m,poster:"https://i.postimg.cc/9Xqy2PLJ/dynamo-romb.jpg",price:1500},{id:"7",category:"dynamo",name:r.PearlOfFootball,poster:"https://i.postimg.cc/MKSf8CMp/perl-of-football.jpg",price:1450},{id:"8",category:"dynamo",name:i,poster:"https://i.postimg.cc/4N6t7fkc/casuals-fcdk.jpg",price:1470},{id:"9",category:"sport",name:r.RealMadrid,poster:"https://i.postimg.cc/zXFbDxKS/real-madrid.jpg",price:14750},{id:"10",category:"dynamo",name:d,poster:"https://i.postimg.cc/ZRvvTZxC/dynamo-uniform.jpg",price:2300},{id:"11",category:"dynamo",name:l,poster:"https://i.postimg.cc/BnNKpmvQ/dynamo-shaiba.jpg",price:1550},{id:"12",category:"dynamo",name:r.Sportcomitet,poster:"https://i.postimg.cc/D0qWXgDh/huray.jpg",price:1800}]},69:function(e,t,a){"use strict";var n=a(12),r=a(0);t.a=function(e,t){var a=Object(r.useState)(JSON.parse(localStorage.getItem(e))||t),o=Object(n.a)(a,2),c=o[0],i=o[1];return[c,function(t){i(t),localStorage.setItem(e,JSON.stringify(t))}]}},99:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(249),c=a(258),i=a(251),s=a(260),l=a(261),u=a(262),m=a(259),d=a(263),p=a(264),b=a(134),g=a.n(b),y=a(23),f=a(26),h=a(47);t.a=function(e){var t=e.poster,a=e.name,b=e.price,v=e.id,O=Object(n.useContext)(f.a).addToOrder,j=Object(n.useContext)(h.a),k=j.setSnackSeverity,E=j.setSnackBarText,S=j.setOpenSnackbar,C=Object(y.b)("Service"),D=C.Hryvna,x=C.Price,B=C.Buy,w=Object(y.b)("Message").AddedToBasket;return r.a.createElement(o.a,{item:!0,xs:12,sm:6,md:4},r.a.createElement(c.a,{sx:{height:"100%"}},r.a.createElement(i.a,{href:t,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(s.a,{sx:{height:140},component:"img",src:t,title:a,alt:a})),r.a.createElement(l.a,{sx:{height:"50%"},justifyContent:"space-between"},r.a.createElement(u.a,null,r.a.createElement(m.a,{gutterBottom:!0,variant:"h6",component:"h3"},a),r.a.createElement(m.a,{variant:"body1",color:"text.secondary"},x,": ",b," ",D)),r.a.createElement(d.a,null,r.a.createElement(p.a,{variant:"contained",endIcon:r.a.createElement(g.a,null),onClick:function(){O({id:v,name:a,price:b}),S(!0),E(w),k("success")}},B)))))}}},[[120,4,2]]]);
//# sourceMappingURL=main.c8add4c2.chunk.js.map