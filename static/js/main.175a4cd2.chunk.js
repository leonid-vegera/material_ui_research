(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,a){"use strict";var n=a(40),r=a(13),o=a(0),c=a.n(o),i=a(95),l=a(254),s=a(26),d=function(){var e=Object(o.useContext)(s.a).preparedGoods;return c.a.createElement(l.a,{container:!0,spacing:2},e.map(function(e){return c.a.createElement(i.a,Object.assign({key:e.id},e))}))},u=a(252),m=a(279),p=a(152),b=a.n(p),g=a(23),y=function(e){var t=e.value,a=e.onChange,n=Object(g.b)("Service").Search;return c.a.createElement(u.a,{id:"outlined-search",label:n,type:"search",variant:"standard",fullWidth:!0,sx:{mb:"1rem"},value:t,onChange:a,InputProps:{readOnly:!1,startAdornment:c.a.createElement(m.a,{position:"start"},c.a.createElement(b.a,null))}})},f=a(66),h=a(281),v=a(282),k=a(283),O=a(284),j=a(267),E=a(229),C=a(237),D=a(239),S=a(257),x=a(8),B=a(280),w=Object(x.a)(B.a)(function(e){var t=e.theme;return{width:61,height:34,padding:7,"& .MuiSwitch-switchBase":{margin:1,padding:0,transform:"translateX(6px)","&.Mui-checked":{color:"#fff",transform:"translateX(22px)","& .MuiSwitch-thumb:before":{content:"'UA'",position:"absolute",width:"100%",height:"100%",left:5,top:5},"& + .MuiSwitch-track":{opacity:1,backgroundColor:"dark"===t.palette.mode?"#8796A5":"#aab4be"}}},"& .MuiSwitch-thumb":{backgroundColor:"dark"===t.palette.mode?"#003892":"#CB1D44",width:32,height:32,"&:before":{content:"'EN'",position:"absolute",width:"100%",height:"100%",left:5,top:5}},"& .MuiSwitch-track":{opacity:1,backgroundColor:"dark"===t.palette.mode?"#8796A5":"#aab4be",borderRadius:10}}}),A=a(61),T=a(58),P=function(e){var t=e.openCart,a=Object(o.useContext)(A.a),n=a.language,r=a.setLanguage,i=Object(o.useContext)(s.a).order,l=Object(g.b)("Description").FootballBadges,d=Object(g.b)("Message"),u=d.ChangeLanguage,m=d.GoodsInBasket,p=Object(T.a)(h.a),b=Object(T.a)(v.a);return c.a.createElement(k.a,{position:"sticky"},c.a.createElement(O.a,null,c.a.createElement(v.a,{color:"inherit",sx:{cursor:"initial"}},c.a.createElement(C.a,null)),c.a.createElement(j.a,{variant:"h6",component:"span",sx:{flexGrow:1}},l),c.a.createElement(p,{title:u,transitionComponent:E.a,placement:"bottom",enterDelay:500,leaveDelay:0,arrow:!0,control:c.a.createElement(w,{sx:{m:1}}),checked:"ua"===n,onChange:function(e){var t=e.target.checked?"ua":"en";r(t),Object(g.a)(t)}}),c.a.createElement(b,{title:m,transitionComponent:E.a,placement:"bottom-start",enterDelay:500,leaveDelay:0,arrow:!0,color:"inherit",onClick:t},c.a.createElement(S.a,{badgeContent:i.length,color:"secondary"},c.a.createElement(D.a,null)))))},M=a(286),F=a(287),G=a(258),K=a(278),L=a(253),I=a(240),H=a(285),R=a(259),W=a(242),N=a(243),q=a(269),z=a(155),J=a.n(z),X=a(50),Q=function(e){var t=e.name,a=e.price,n=e.id,r=e.quantity,i=Object(o.useContext)(s.a).removeFromOrder,l=Object(o.useContext)(X.a),d=l.setSnackSeverity,u=l.setOpenSnackbar,m=l.setSnackBarText,p=Object(g.b)("Service").Hryvna,b=Object(g.b)("Message"),y=b.DeletedFromBasket,f=b.DeleteFromBasket,h=Object(T.a)(v.a);return c.a.createElement(L.a,null,c.a.createElement(q.a,{direction:"row",justifyContent:"space-between",alignItems:"center",width:"100%"},c.a.createElement(j.a,{variant:"body1"},t," ",a," ",p," x ",r),c.a.createElement(h,{title:f,transitionComponent:E.a,placement:"bottom-start",enterDelay:500,leaveDelay:0,arrow:!0,onClick:function(){i(n),u(!0),m(y),d("warning")},ariaLabel:"delete"},c.a.createElement(J.a,null))))},Y=a(241),Z=function(e){var t=e.isOpened,a=e.closeCart,n=Object(o.useContext)(s.a).order,r=void 0===n?[]:n,i=Object(g.b)("Service"),l=i.Basket,d=i.Hryvna,u=i.TotalPrice,m=i.AddedGoods,p=Object(g.b)("Message").BasketIsEmpty;return c.a.createElement(G.a,{anchor:"right",open:t,onClose:a},c.a.createElement(K.a,{sx:{width:"400px",maxWidth:"75vw"}},c.a.createElement(L.a,null,c.a.createElement(I.a,null,c.a.createElement(H.a,null,c.a.createElement(R.a,null,c.a.createElement(Y.a,null)))),c.a.createElement(W.a,{primary:l,secondary:m})),c.a.createElement(N.a,{variant:"fullWidth"}),r.length?c.a.createElement(c.a.Fragment,null,r.map(function(e,t){return c.a.createElement(Q,Object.assign({key:t},e))}),c.a.createElement(N.a,{variant:"fullWidth"}),c.a.createElement(L.a,{sx:{my:2}},c.a.createElement(j.a,{sx:{fontWeight:"700"}},u,":"," ",r.reduce(function(e,t){return e+t.price*t.quantity},0)," ",d,"."))):c.a.createElement(L.a,null,p)))},U=a(248),_=a(249),V=function(){var e=Object(o.useContext)(X.a),t=e.closeSnackbar,a=e.isOpenSnackbar,n=e.snackBarText,r=e.snackSeverity;return c.a.createElement(U.a,{open:a,autoHideDuration:3e3,onClose:t},c.a.createElement(_.a,{variant:"filled",severity:r,onClose:t,sx:{width:"100%"}},n))};t.a=function(){var e=Object(o.useState)(""),t=Object(r.a)(e,2),a=t[0],i=t[1],l=Object(o.useState)(!1),u=Object(r.a)(l,2),m=u[0],p=u[1],b=Object(o.useContext)(A.a).language,h=Object(o.useContext)(s.a),v=h.translatedGoods,k=h.setTranslatedGoods,O=h.setPreparedGoods;Object(o.useEffect)(function(){var e=Object(g.b)("Description"),t=Object.keys(e),a=f.a.map(function(a,r){return Object(n.a)({},a,{name:e[t[r+1]]})});O(a),k(a)},[b]);return c.a.createElement("div",{className:"App"},c.a.createElement(M.a,{sx:{minWidth:"340px"}},c.a.createElement(P,{openCart:function(){return p(!0)}}),c.a.createElement(F.a,{sx:{mt:"1rem",minWidth:"340px"}},c.a.createElement(y,{value:a,onChange:function(e){if(!e.target.value)return O(v),void i("");i(e.target.value),O(v.filter(function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())}))}}),c.a.createElement(d,null)),c.a.createElement(Z,{isOpened:m,closeCart:function(){return p(!1)}}),c.a.createElement(V,null)))}},125:function(e,t,a){e.exports=a(165)},132:function(e,t,a){},165:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(112),c=a.n(o),i=(a(132),a(111)),l=a(174),s=a(247),d=a(102),u=a(13),m=r.a.lazy(function(){return Promise.all([a.e(3),a.e(1)]).then(a.bind(null,262))}),p=a(61),b=a(26),g=a(50),y=Object(l.a)({palette:{primary:{main:"#001D42"},secondary:{main:"#ff7f50"}}});c.a.createRoot(document.getElementById("root")).render(r.a.createElement(s.a,{theme:y},r.a.createElement(d.d,{ComponentPreviews:m,useInitialHook:function(){var e=Object(n.useState)({loading:!1,error:!1}),t=Object(u.a)(e,2),a=t[0];t[1];return a}},r.a.createElement(p.b,null,r.a.createElement(g.b,null,r.a.createElement(b.b,null,r.a.createElement(i.a,null)))))))},23:function(e,t,a){"use strict";var n={Description:{FootballBadges:"\u0424\u0443\u0442\u0431\u043e\u043b\u044c\u043d\u0456 \u0437\u043d\u0430\u0447\u043a\u0438",HunterTompson:"\u0425\u0430\u043d\u0442\u0435\u0440 \u0422\u043e\u043c\u043f\u0441\u043e\u043d \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u0443\u0454 \u0414\u0438\u043d\u0430\u043c\u043e",ACAB:"ACAB. \u0421\u0442\u0438\u043b\u044c \u041f\u0435\u043f\u0441\u0456",DonaldDuck:"\u041a\u0430\u0447\u043a\u0430 \u0414\u043e\u043d\u0430\u043b\u044c\u0434 \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u0443\u0454 \u043a\u0438\u044f\u043d",DynamoKit:"\u0406\u0433\u0440\u043e\u0432\u0430 \u0444\u043e\u0440\u043c\u0430 \u0414\u0438\u043d\u0430\u043c\u043e \u041a\u0438\u0457\u0432",Lazio:"\u041b\u0430\u0446\u0456\u043e \u0420\u0438\u043c",DynamoRhomb:"\u0420\u043e\u043c\u0431 \u0414\u0438\u043d\u0430\u043c\u043e \u041a\u0438\u0457\u0432",PearlOfFootball:"\u0414\u0438\u043d\u0430\u043c\u043e, \u0436\u0435\u043c\u0447\u0443\u0436\u0438\u043d\u0430 \u0444\u0443\u0442\u0431\u043e\u043b\u0430",CasualDynamo:"\u041a\u0435\u0448\u0443\u0430\u043b\u0441 \u0424\u041a\u0414\u041a",RealMadrid:"\u041a\u043e\u043b\u0435\u043a\u0446\u0456\u044f \u0437\u043d\u0430\u0447\u043a\u0456\u0432 \u0420\u0435\u0430\u043b \u041c\u0430\u0434\u0440\u0438\u0434",ModernDynamoKit:"\u0421\u0443\u0447\u0430\u0441\u043d\u0430 \u0456\u0433\u0440\u043e\u0432\u0430 \u0444\u043e\u0440\u043c\u0430 \u0414\u0438\u043d\u0430\u043c\u043e \u041a\u0438\u0457\u0432",DynamoDisk:"\u0428\u0430\u0439\u0431\u0430 \u0414\u0438\u043d\u0430\u043c\u043e \u041a\u0438\u0457\u0432",Sportcomitet:"\u0414\u0438\u043d\u0430\u043c\u043e \u041a\u0438\u0457\u0432. \u0421\u043f\u043e\u0440\u0442\u043a\u043e\u043c\u0456\u0442\u0435\u0442"},Service:{Basket:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430",Search:"\u041f\u043e\u0448\u0443\u043a",Price:"\u0426\u0456\u043d\u0430",Buy:"\u041a\u0443\u043f\u0438\u0442\u0438",TotalPrice:"\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0430 \u0441\u0443\u043c\u0430",Hryvna:"\u0433\u0440\u043d",AddedGoods:"\u0414\u043e\u0434\u0430\u043d\u0456 \u0442\u043e\u0432\u0430\u0440\u0438"},Message:{BasketIsEmpty:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430!",AddedToBasket:"\u0422\u043e\u0432\u0430\u0440 \u0434\u043e\u0434\u0430\u043d\u043e \u0434\u043e \u043a\u043e\u0440\u0437\u0438\u043d\u0438!",DeletedFromBasket:"\u0422\u043e\u0432\u0430\u0440 \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043e \u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u0438!",DeleteFromBasket:"\u041d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c \u0449\u043e\u0431 \u0432\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0442\u043e\u0432\u0430\u0440 \u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u0438",AddGoodToBasket:"\u0414\u043e\u0434\u0430\u0439\u0442\u0435 \u0442\u043e\u0432\u0430\u0440 \u0434\u043e \u043a\u043e\u0440\u0437\u0438\u043d\u0438",ChangeLanguage:"\u041d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c \u0434\u043b\u044f \u0437\u043c\u0456\u043d\u0438 \u043c\u043e\u0432\u0438",GoodsInBasket:"\u041d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c \u0449\u043e\u0431 \u043f\u0435\u0440\u0435\u0433\u043b\u044f\u043d\u0443\u0442\u0438 \u0434\u043e\u0434\u0430\u043d\u0456 \u0442\u043e\u0432\u0430\u0440\u0438"}},r={Description:{FootballBadges:"Football badges",HunterTompson:"Hunter Tompson supports Dynamo",ACAB:"ACAB. Pepsi style",DonaldDuck:"Donald Duck supports Kyiv",DynamoKit:"Dynamo Kyiv kit",Lazio:"Lazio Rome",DynamoRhomb:"Dynamo Kyiv rhomb",PearlOfFootball:"Dynamo, the pearl of football",CasualDynamo:"CasualsFCDK",RealMadrid:"Real Madrid badges collection",ModernDynamoKit:"Modern Dynamo Kyiv kit",DynamoDisk:"Dynamo Kyiv disk",Sportcomitet:"Dynamo Kyiv. Sportcomitet"},Service:{Basket:"Basket",Search:"Search",Price:"Price",Buy:"Buy",TotalPrice:"Total price",Hryvna:"grn",AddedGoods:"Added goods"},Message:{BasketIsEmpty:"Basket is empty!",AddedToBasket:"Added to the basket!",DeletedFromBasket:"Deleted from the basket!",DeleteFromBasket:"Press to delete good from the basket",AddGoodToBasket:"Add good to the basket",ChangeLanguage:"Press to change language",GoodsInBasket:"Press to view added goods"}};a.d(t,"a",function(){return c}),a.d(t,"b",function(){return i});var o=JSON.parse(localStorage.getItem("language")),c=function(e){o=e},i=function(e){var t;switch(o){case"en":t=r;break;case"ua":t=n;break;default:t=n}return t[e]||""}},26:function(e,t,a){"use strict";a.d(t,"a",function(){return s}),a.d(t,"b",function(){return d});var n=a(18),r=a(13),o=a(0),c=a.n(o),i=a(70),l=a(66),s=Object(o.createContext)(null),d=function(e){var t=e.children,a=Object(i.a)("order",[]),d=Object(r.a)(a,2),u=d[0],m=d[1],p=Object(o.useState)(l.a),b=Object(r.a)(p,2),g=b[0],y=b[1],f=Object(o.useState)(l.a),h=Object(r.a)(f,2),v=h[0],k=h[1],O={order:u,setOrder:m,translatedGoods:g,setTranslatedGoods:y,preparedGoods:v,setPreparedGoods:k,addToOrder:function(e){var t=1,a=u.findIndex(function(t){return t.id===e.id});a>-1?(t=u[a].quantity+1,m(u.map(function(a){return a.id!==e.id?a:{id:a.id,name:a.name,price:a.price,quantity:t}}))):m([].concat(Object(n.a)(u),[{id:e.id,name:e.name,price:e.price,quantity:t}]))},removeFromOrder:function(e){m(u.filter(function(t){return t.id!==e}))}};return c.a.createElement(s.Provider,{value:O},t)}},50:function(e,t,a){"use strict";a.d(t,"a",function(){return i}),a.d(t,"b",function(){return l});var n=a(13),r=a(0),o=a.n(r),c=a(23),i=Object(r.createContext)(""),l=function(e){var t=e.children,a=Object(r.useState)(!1),l=Object(n.a)(a,2),s=l[0],d=l[1],u=Object(r.useState)(""),m=Object(n.a)(u,2),p=m[0],b=m[1],g=Object(r.useState)(""),y=Object(n.a)(g,2),f=y[0],h=y[1],v=Object(c.b)("Service").Buy,k={isOpenSnackbar:s,setOpenSnackbar:d,snackBarText:p,setSnackBarText:b,snackSeverity:f,setSnackSeverity:h,closeSnackbar:function(e){e&&e.target.textContent===v||d(!1)}};return o.a.createElement(i.Provider,{value:k},t)}},58:function(e,t,a){"use strict";var n=a(113),r=a(212),o=a(263),c=a(0),i=a.n(c);t.a=function(e){return function(t){var a=Object(n.a)({},t),c=a.children,l=a.title,s=a.transitionComponent,d=void 0===s?r.a:s,u=a.placement,m=void 0===u?"bottom":u,p=a.enterDelay,b=a.leaveDelay,g=a.arrow,y=void 0!==g&&g,f=a.onClick,h=void 0===f?function(){}:f,v=a.onChange,k=void 0===v?function(){}:v,O=a.control,j=void 0===O?null:O,E=a.checked,C=void 0!==E&&E,D=a.color,S=void 0===D?"inherit":D,x=a.ariaLabel,B=void 0===x?"":x;return i.a.createElement(o.a,{title:l,TransitionComponent:d,placement:m,enterDelay:p,leaveDelay:b,arrow:y},i.a.createElement(e,{variant:"contained",onClick:h,control:j,checked:C,onChange:k,color:S,"aria-label":B},c))}}},61:function(e,t,a){"use strict";a.d(t,"a",function(){return i}),a.d(t,"b",function(){return l});var n=a(13),r=a(0),o=a.n(r),c=a(70),i=Object(r.createContext)("ua"),l=function(e){var t=e.children,a=Object(c.a)("language",""),r=Object(n.a)(a,2),l={language:r[0],setLanguage:r[1]};return o.a.createElement(i.Provider,{value:l},t)}},66:function(e,t,a){"use strict";a.d(t,"a",function(){return p});var n=a(23),r=Object(n.b)("Description"),o=r.HunterTompson,c=r.ACAB,i=r.CasualDynamo,l=r.DonaldDuck,s=r.DynamoDisk,d=r.DynamoKit,u=r.DynamoRhomb,m=r.ModernDynamoKit,p=[{id:"1",category:"dynamo",name:o,poster:"https://i.postimg.cc/YS9msQ4N/hunter-tompson.jpg",price:1350},{id:"2",category:"amf",name:c,poster:"https://i.postimg.cc/W4HJLtrB/acab.jpg",price:1300},{id:"3",category:"sport",name:l,poster:"https://i.postimg.cc/QdNBFcqL/sokil-dynamo.jpg",price:1250},{id:"4",category:"dynamo",name:d,poster:"https://i.postimg.cc/YCtFQ5Ms/dynamo-unifrom-collection.jpg",price:3850},{id:"5",category:"sport",name:r.Lazio,poster:"https://i.postimg.cc/fWXSpzbP/lazio.jpg",price:2730},{id:"6",category:"dynamo",name:u,poster:"https://i.postimg.cc/9Xqy2PLJ/dynamo-romb.jpg",price:1500},{id:"7",category:"dynamo",name:r.PearlOfFootball,poster:"https://i.postimg.cc/MKSf8CMp/perl-of-football.jpg",price:1450},{id:"8",category:"dynamo",name:i,poster:"https://i.postimg.cc/4N6t7fkc/casuals-fcdk.jpg",price:1470},{id:"9",category:"sport",name:r.RealMadrid,poster:"https://i.postimg.cc/zXFbDxKS/real-madrid.jpg",price:14750},{id:"10",category:"dynamo",name:m,poster:"https://i.postimg.cc/ZRvvTZxC/dynamo-uniform.jpg",price:2300},{id:"11",category:"dynamo",name:s,poster:"https://i.postimg.cc/BnNKpmvQ/dynamo-shaiba.jpg",price:1550},{id:"12",category:"dynamo",name:r.Sportcomitet,poster:"https://i.postimg.cc/D0qWXgDh/huray.jpg",price:1800}]},70:function(e,t,a){"use strict";var n=a(13),r=a(0);t.a=function(e,t){var a=Object(r.useState)(JSON.parse(localStorage.getItem(e))||t),o=Object(n.a)(a,2),c=o[0],i=o[1];return[c,function(t){i(t),localStorage.setItem(e,JSON.stringify(t))}]}},95:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(265),c=a(254),i=a(266),l=a(256),s=a(268),d=a(269),u=a(270),m=a(267),p=a(271),b=a(229),g=a(150),y=a.n(g),f=a(23),h=a(26),v=a(50),k=a(58);t.a=function(e){var t=e.poster,a=e.name,g=e.price,O=e.id,j=Object(n.useContext)(h.a).addToOrder,E=Object(n.useContext)(v.a),C=E.setSnackSeverity,D=E.setSnackBarText,S=E.setOpenSnackbar,x=Object(f.b)("Service"),B=x.Hryvna,w=x.Price,A=x.Buy,T=Object(f.b)("Message"),P=T.AddedToBasket,M=T.AddGoodToBasket,F=Object(k.a)(o.a);return r.a.createElement(c.a,{item:!0,xs:12,sm:6,md:4},r.a.createElement(i.a,{sx:{height:"100%"}},r.a.createElement(l.a,{href:t,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(s.a,{sx:{height:140},component:"img",src:t,title:a,alt:a})),r.a.createElement(d.a,{sx:{height:"50%"},justifyContent:"space-between"},r.a.createElement(u.a,null,r.a.createElement(m.a,{gutterBottom:!0,variant:"h6",component:"h3"},a),r.a.createElement(m.a,{variant:"body1",color:"text.secondary"},w,": ",g," ",B)),r.a.createElement(p.a,null,r.a.createElement(F,{color:"primary",title:M,transitionComponent:b.a,placement:"right",enterDelay:1e3,leaveDelay:0,arrow:!0,onClick:function(){j({id:O,name:a,price:g}),S(!0),D(P),C("success")}},A,r.a.createElement(y.a,{sx:{ml:1}}))))))}}},[[125,4,2]]]);
//# sourceMappingURL=main.175a4cd2.chunk.js.map