(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[24],{1368:function(e,n,t){"use strict";t.r(n);var c,a,r,o,s,i,l,d,b,j,p,h,u,x,O,m=t(1),f=t(240),g=t(141),k=t(34),v=t(2),w=t(179),M=t(13),y=t(795),C=t(0),S=function(){var e=Object(M.b)().t;return Object(C.jsx)(v.u,{mb:"32px",isActive:!0,children:Object(C.jsx)(v.v,{children:Object(C.jsxs)(v.U,{alignItems:["start",null,"center"],justifyContent:["start",null,"space-between"],flexDirection:["column",null,"row"],children:[Object(C.jsxs)("div",{children:[Object(C.jsx)(v.X,{scale:"lg",mb:"8px",children:e("Swap your old hMOCHI for new hMOCHI here.")}),Object(C.jsx)(v.bc,{children:e("You can only do this for a limited time!")})]}),Object(C.jsx)(v.q,{id:"teamsPageSetUpProfile",mt:["16px",null,0],children:Object(C.jsxs)(v.hb,{href:"https://docs.onemoon.io",color:"white",children:[" ",e("Learn More")," "]})})]})})})},T=function(){var e=Object(M.b)().t,n=Object(w.b)(),t=n.isInitialized,c=n.profile,a=t&&!c;return Object(C.jsxs)(C.Fragment,{children:[a&&Object(C.jsx)(S,{}),Object(C.jsxs)(y.a,{children:[Object(C.jsx)(v.X,{as:"h1",scale:"xl",color:"secondary",mt:"25px",children:e("Old hMOCHI -> New hMOCHI Upgrade")}),Object(C.jsx)(v.bc,{bold:!0,mt:"20px",mb:"12px",children:e("This will burn your legacy hMOCHI tokens and mint you an equal amount of the new hMOCHI tokens.  Our new hMochi token will allow auto compounding pools and a host of new features.")})]})]})},A=t(7),I=t(4),B=t(29),U=t(39),H=t(3),L=t.n(H),q=t(12),E=t(8),X=t(63),P=t(118),z=t(93),D=function(e,n){var t=Object(m.useState)(!1),c=Object(E.a)(t,2),a=c[0],r=c[1],o=Object(P.a)().callWithGasPrice,s=Object(M.b)().t,i=Object(z.a)(),l=i.toastSuccess,d=i.toastError;return{onApprove:Object(m.useCallback)(Object(q.a)(L.a.mark((function t(){var c;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r(!0),t.next=4,o(e,"approve",[n,X.a.constants.MaxUint256]);case 4:return c=t.sent,t.next=7,c.wait();case 7:t.sent.status?(l(s("Contract Enabled"),s("You can now swap old hMOCHI for new hMOCHI!")),r(!1)):(d(s("Error"),s("Please try again. Confirm the transaction and make sure you are paying enough gas!")),r(!1)),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(0),console.error(t.t0),d(s("Error"),s("Please try again. Confirm the transaction and make sure you are paying enough gas!")),r(!1);case 16:case"end":return t.stop()}}),t,null,[[0,11]])}))),[n,e,o,s,d,l]),requestedApproval:a}},Q=Object(I.e)(v.q)(c||(c=Object(A.a)(["\n  margin-top: 30px;\n"]))),Y=function(e){var n=e.isLoading,t=Object(M.b)().t,c=Object(U.x)(),a=Object(U.p)(),r=D(a,c.address),o=r.onApprove,s=r.requestedApproval;return Object(C.jsx)(C.Fragment,{children:n?Object(C.jsx)(v.h,{spin:!0,color:"currentColor",mt:"5px",width:"100px"}):Object(C.jsx)(Q,{isLoading:s,endIcon:s?Object(C.jsx)(v.h,{spin:!0,color:"currentColor",width:"40px"}):null,disabled:s,onClick:o,width:"100%",children:t("Enable")})})},F=t(14),J=t.n(F),N=t(90),W=(Object(I.e)(v.gb)(a||(a=Object(A.a)(["\n  width: 100%;\n"]))),function(e){var n=e.tokenSymbol,t=e.onDismiss,c=Object(M.b)().t,a=Object(N.a)().theme;return Object(C.jsxs)(v.vb,{title:c("%symbol% required",{symbol:n}),onDismiss:t,headerBackground:a.colors.gradients.cardHeader,children:[Object(C.jsx)(v.bc,{color:"failure",bold:!0,children:c("Insufficient %symbol% balance",{symbol:n})}),Object(C.jsx)(v.bc,{mt:"24px",children:c("You\u2019ll need %symbol% to stake in this pool!",{symbol:n})}),Object(C.jsx)(v.bc,{children:c("Buy some %symbol%, or make sure your %symbol% isn\u2019t in another pool or LP.",{symbol:n})}),Object(C.jsxs)(v.q,{mt:"24px",as:"a",external:!0,href:"/swap",children:[c("Buy")," ",n]}),Object(C.jsx)(v.q,{variant:"text",onClick:t,children:c("Close Window")})]})}),G=t(181),K=function(){var e=Object(U.x)();return{onSwap:Object(m.useCallback)(function(){var n=Object(q.a)(L.a.mark((function n(t){return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(G.e)(e,t);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),[e])}},R=Object(I.e)(v.X).attrs({as:"h3"})(r||(r=Object(A.a)(["\n  font-size: 24px;\n  padding: 30px;\n  "," {\n    font-size: 20px;\n    color: #fe019a;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),V=I.e.div(o||(o=Object(A.a)(["\n  margin: auto;\n  padding-top: 30px;\n  height: 100px;\n"]))),Z=Object(I.e)(v.q)(s||(s=Object(A.a)(["\n  margin-top: 30px;\n"]))),$=function(e){e.oldMochiTokenAddress;var n=e.oldMochiTokenBalance,t=(e.bMochiTokenAddress,e.bMochiTokenBalance,e.isLoading),c=Object(M.b)().t,a=Object(z.a)(),r=a.toastSuccess,o=a.toastError,s=Object(v.xc)(Object(C.jsx)(W,{tokenSymbol:"MOCHI(old)"})),i=Object(E.a)(s,1)[0],l=K().onSwap,d=Object(m.useState)(!1),b=Object(E.a)(d,2),j=b[0],p=b[1],h=function(){var e=Object(q.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.prev=1,e.next=4,l(n.toString());case 4:r("".concat(c("Swapped"),"!"),c("Your old hMOCHI has been upgraded to new hMOCHI!")),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),o(c("Error"),c("Please try again. Confirm the transaction and make sure you are paying enough gas!")),console.error(e.t0);case 11:return e.prev=11,p(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,7,11,14]])})));return function(){return e.apply(this,arguments)}}(),u=new J.a(n).gt(0);return Object(C.jsx)(v.U,{flexDirection:"column",children:t||j?Object(C.jsx)(V,{children:Object(C.jsx)(v.h,{width:"40px",spin:!0,color:"currentColor"})}):Object(C.jsx)(C.Fragment,{children:u?Object(C.jsx)(Z,{onClick:new J.a(n).gt(0)?h:i,variant:"primary",si:"100px",children:c("Swap")}):Object(C.jsx)(R,{children:"All tokens have been swapped!"})})})},_=t(40),ee=t(258),ne=(Object(I.e)(v.bc)(i||(i=Object(A.a)(["\n  display: inline;\n"]))),function(e){var n=e.oldMochiTokenAddress,t=e.oldMochiTokenBalance,c=e.bMochiTokenAddress,a=e.bMochiTokenBalance,r=e.isLoading,o=(Object(M.b)().t,function(){var e=Object(m.useState)(!1),n=Object(E.a)(e,2),t=n[0],c=n[1],a=Object(_.c)().account,r=Object(U.p)(),o=Object(U.x)(),s=Object(ee.a)(),i=(s.lastUpdated,s.setLastUpdated);return Object(m.useEffect)((function(){!function(){var e=Object(q.a)(L.a.mark((function e(){var n,t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.allowance(a,o.address);case 3:n=e.sent,console.log("checkApprovalStatus response",n),t=new J.a(n.toString()),c(t.gt(0)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),c(!1),console.log("checkApprovalStatus error",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}()()})),{isSwapApproved:t,setLastUpdated:i}}()),s=o.isSwapApproved;o.setLastUpdated;return console.log("isSwapApproved",s),Object(C.jsx)(v.U,{flexDirection:"column",children:Object(C.jsx)(v.U,{flexDirection:"column",children:s?Object(C.jsx)($,{oldMochiTokenAddress:n,oldMochiTokenBalance:t,bMochiTokenAddress:c,bMochiTokenBalance:a,isLoading:!s}):Object(C.jsx)(Y,{isLoading:r})})})}),te=(I.e.div(l||(l=Object(A.a)(["\n  align-items: start;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  padding: 24px;\n\n  "," {\n    align-items: center;\n    flex-direction: row;\n    font-size: 40px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),I.e.div(d||(d=Object(A.a)(["\n  flex: 1;\n  padding: 0px;\n  padding-top: 15px;\n  padding-left: 15px;\n  width: 100px;\n"])))),ce=(I.e.div(b||(b=Object(A.a)(["\n  flex: 1;\n  padding: 30px;\n  margin-left: auto;\n  \n"]))),I.e.div(j||(j=Object(A.a)(["\n  flex: 1;\n  margin-left: auto;\n  width: 100px;\n"])))),ae=I.e.div(p||(p=Object(A.a)(["\n  flex: 1;\n  padding: 15px;\n  padding-left: 25px;\n"]))),re=I.e.img(h||(h=Object(A.a)(["\n  border-radius: 50%;\n"]))),oe=Object(I.e)(v.X).attrs({as:"span"})(u||(u=Object(A.a)(["\n  font-size: 16px;\n\n  "," {\n    font-size: 16px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),se=(I.e.div(x||(x=Object(A.a)(["\n  flex: none;\n  margin-right: 8px;\n\n  "," {\n    height: 64px;\n    width: 64px;\n  }\n\n  "," {\n    display: none;\n  }\n"])),re,(function(e){return e.theme.mediaQueries.md})),Object(I.e)(v.u)(O||(O=Object(A.a)(["\n  margin-bottom: 16px;\n"])))),ie=function(e){var n=e.oldMochiTokenAddress,t=e.oldMochiTokenBalance,c=e.bMochiTokenAddress,a=e.bMochiTokenBalance,r=e.isLoading;Object(M.b)().t;return Object(C.jsx)(se,{children:Object(C.jsxs)(v.U,{children:[Object(C.jsxs)(te,{children:[Object(C.jsx)(v.U,{alignItems:"start",mb:"16px",ml:"52px",children:Object(C.jsx)(v.X,{scale:"md",color:"textSubtle",children:Object(C.jsx)(oe,{children:"Old hMOCHI Balance"})})}),Object(C.jsx)(v.U,{alignItems:"end",mb:"16px",ml:"52px",children:Object(C.jsx)(v.X,{scale:"md",color:"textSubtle",children:Object(B.h)(t,18,6)})})]}),Object(C.jsx)(ce,{children:Object(C.jsx)(ne,{oldMochiTokenAddress:n,oldMochiTokenBalance:t,bMochiTokenAddress:c,bMochiTokenBalance:a,isLoading:r})}),Object(C.jsxs)(ae,{children:[Object(C.jsx)(v.U,{alignItems:"center",mb:"16px",ml:"52px",children:Object(C.jsx)(v.X,{scale:"md",color:"textSubtle",children:Object(C.jsx)(oe,{children:"New hMOCHI Balance"})})}),Object(C.jsx)(v.U,{alignItems:"end",mb:"16px",ml:"52px",children:Object(C.jsx)(v.X,{scale:"md",color:"textSubtle",children:Object(B.h)(a,18,6)})})]})]})})};n.default=function(){var e=Object(g.b)(k.g.hmochi.address[16666e5]),n=Object(g.b)(k.g.oldhmochi.address[16666e5]),t=!("success"===e.fetchStatus&&"success"===n.fetchStatus);return Object(C.jsxs)(f.a,{children:[Object(C.jsx)(T,{}),Object(C.jsx)(ie,{oldMochiTokenAddress:k.g.oldhmochi.address[16666e5],oldMochiTokenBalance:n.balance,bMochiTokenAddress:k.g.hmochi.address[16666e5],bMochiTokenBalance:e.balance,isLoading:t})]})}},795:function(e,n,t){"use strict";var c,a=t(7),r=t(4).e.div(c||(c=Object(a.a)(["\n  border-bottom: 1px solid rgba(105,250,189,0.3);\n  borcer-opacity: 0.3;\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n"])));n.a=r}}]);
//# sourceMappingURL=24.a6513e2d.chunk.js.map