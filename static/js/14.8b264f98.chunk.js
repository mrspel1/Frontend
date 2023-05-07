(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[14],{1367:function(e,t,n){"use strict";n.r(t);var r,c,o,a,s,i,u,b,j,l,d,p=n(7),O=n(1),x=n(2),f=n(4),h=n(86),m=n(13),g=n(239),v=Object(f.e)(x.bb)(r||(r=Object(p.a)(["\n  display: none;\n\n  "," {\n    display: block;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),y=n(0),C=Object(f.e)(x.m)(c||(c=Object(p.a)(["\n  background: ",";\n  padding-bottom: 32px;\n  padding-top: 32px;\n"])),(function(e){return e.theme.colors.gradients.bubblegum})),w=function(){var e=Object(m.b)().t;return Object(y.jsx)(C,{children:Object(y.jsx)(g.a,{children:Object(y.jsxs)(x.U,{alignItems:"center",justifyContent:"space-between",children:[Object(y.jsxs)(x.m,{pr:"32px",children:[Object(y.jsx)(x.X,{as:"h1",scale:"xxl",color:"secondary",mb:"16px",children:e("Voting")}),Object(y.jsx)(x.X,{as:"h3",scale:"lg",mb:"16px",children:e("Have your say in the future of the Mochiswap Ecosystem")}),Object(y.jsx)(x.q,{startIcon:Object(y.jsx)(x.Mb,{color:"currentColor",width:"24px"}),as:h.a,to:"/voting/proposal/create",children:e("Make a Proposal")})]}),Object(y.jsx)(v,{src:"/images/voting/voting-presents.png",width:361,height:214})]})})})},I=Object(f.e)(x.m)(o||(o=Object(p.a)(["\n  background: ",";\n  padding-bottom: 32px;\n  padding-top: 32px;\n"])),(function(e){return e.theme.colors.gradients.bubblegum})),k=function(){var e=Object(m.b)().t;return Object(y.jsx)(I,{children:Object(y.jsx)(g.a,{children:Object(y.jsxs)(x.U,{alignItems:"center",justifyContent:"space-between",children:[Object(y.jsxs)(x.m,{pr:"32px",children:[Object(y.jsx)(x.X,{as:"h2",scale:"lg",mb:"16px",children:e("Got a suggestion?")}),Object(y.jsx)(x.bc,{as:"p",children:e("Community proposals are a great way to see how the community feels about your ideas.")}),Object(y.jsx)(x.bc,{as:"p",mb:"16px",children:e("They won't necessarily be implemented if the community votes successful, but suggestions with a lot of community support may be made into Core proposals.")}),Object(y.jsx)(x.q,{startIcon:Object(y.jsx)(x.Mb,{color:"currentColor",width:"24px"}),as:h.a,to:"/voting/proposal/create",children:e("Make a Proposal")})]}),Object(y.jsx)(v,{src:"/images/voting/voting-bunny.png",width:173,height:234})]})})})},S=n(6),E=n(8),N=n(65),T=n(367),L=n(815),M=n(62),D=n(785),U=n(850),A=n(830),P=n.n(A),X=n(788),H=Object(f.e)(x.U)(a||(a=Object(p.a)(["\n  border-bottom: 1px solid ",";\n"])),(function(e){return e.theme.colors.cardBorder})),V=f.e.div(s||(s=Object(p.a)(["\n  ",":last-child {\n    border-bottom: 0;\n  }\n"])),H),B=function(){return Object(y.jsx)(V,{children:P()(X.d).map((function(e){return Object(y.jsxs)(H,{alignItems:"center",justifyContent:"space-between",py:"16px",px:"24px",children:[Object(y.jsxs)(x.m,{style:{flex:1},children:[Object(y.jsx)(x.Qb,{height:"21px",width:"70%",mb:"4px"}),Object(y.jsx)(x.Qb,{height:"21px",width:"30%",mb:"4px"}),Object(y.jsx)(x.Qb,{height:"21px",width:"40%"})]}),Object(y.jsx)(x.Qb,{height:"32px",width:"32px"})]},e)}))})},G=f.e.div(i||(i=Object(p.a)(["\n  background-color: ",";\n  padding-top: 16px;\n"])),(function(e){return e.theme.colors.input})),Q=function(e){switch(e){case M.e.COMMUNITY:return 1;case M.e.ALL:return 2;case M.e.CORE:default:return 0}},J=function(e){var t=e.proposalType,n=e.onTypeChange,r=Object(m.b)().t;return Object(y.jsx)(G,{children:Object(y.jsxs)(x.Yb,{activeIndex:Q(t),onItemClick:function(e){n(function(e){switch(e){case 1:return M.e.COMMUNITY;case 2:return M.e.ALL;default:return M.e.CORE}}(e))},children:[Object(y.jsx)(x.Xb,{children:Object(y.jsxs)(x.U,{alignItems:"center",children:[Object(y.jsx)(x.mc,{color:"currentColor",mr:"4px"}),r("Core")]})}),Object(y.jsxs)(x.Xb,{children:[" ",Object(y.jsxs)(x.U,{alignItems:"center",children:[Object(y.jsx)(x.N,{color:"currentColor",mr:"4px"}),r("Community")]})]}),Object(y.jsx)(x.Xb,{children:"All"})]})})},R=n(773),Y=n(1365),F=function(e){var t=Object(R.a)(1e3*e);return Object(Y.a)(t,"MMM do, yyyy HH:mm")},q=function(e){var t=e.startDate,n=e.endDate,r=e.proposalState,c=Object(m.b)().t,o={fontSize:"16px",color:"textSubtle",ml:"8px"};return r===M.d.CLOSED?Object(y.jsx)(x.bc,Object(S.a)(Object(S.a)({},o),{},{children:c("Ended %date%",{date:F(n)})})):r===M.d.PENDING?Object(y.jsx)(x.bc,Object(S.a)(Object(S.a)({},o),{},{children:c("Starts %date%",{date:F(t)})})):Object(y.jsx)(x.bc,Object(S.a)(Object(S.a)({},o),{},{children:c("Ends %date%",{date:F(n)})}))},_=n(831),z=Object(f.e)(h.a)(u||(u=Object(p.a)(["\n  align-items: center;\n  border-bottom: 1px solid ",";\n  display: flex;\n  padding: 16px 24px;\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.colors.cardBorder}),(function(e){return e.theme.colors.dropdown})),K=function(e){var t=e.proposal,n="/voting/proposal/".concat(t.id);return Object(y.jsxs)(z,{to:n,children:[Object(y.jsxs)(x.m,{as:"span",style:{flex:1},children:[Object(y.jsx)(x.bc,{bold:!0,mb:"8px",children:t.title}),Object(y.jsx)(x.U,{alignItems:"center",mb:"8px",children:Object(y.jsx)(q,{startDate:t.start,endDate:t.end,proposalState:t.state})}),Object(y.jsxs)(x.U,{alignItems:"center",children:[Object(y.jsx)(_.a,{proposalState:t.state}),Object(y.jsx)(_.b,{isCoreProposal:Object(D.h)(t),ml:"8px"})]})]}),Object(y.jsx)(x.ab,{variant:"text",children:Object(y.jsx)(x.e,{width:"24px"})})]})},W=Object(f.e)(x.U).attrs({alignItems:"center"})(b||(b=Object(p.a)(["\n  border-bottom: 1px solid ",";\n  padding: 16px 24px;\n"])),(function(e){return e.theme.colors.cardBorder})),Z=f.e.label(j||(j=Object(p.a)(["\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  margin-right: 16px;\n"]))),$=[{value:M.d.ACTIVE,label:"Vote Now"},{value:M.d.PENDING,label:"Soon"},{value:M.d.CLOSED,label:"Closed"}],ee=function(e){var t=e.filterState,n=e.onFilterChange,r=e.isLoading,c=Object(m.b)().t;return Object(y.jsx)(W,{children:$.map((function(e){var o=e.value,a=e.label;return Object(y.jsxs)(Z,{children:[Object(y.jsx)(x.Nb,{scale:"sm",value:o,checked:t===o,onChange:function(e){var t=e.currentTarget.value;n(t)},disabled:r}),Object(y.jsx)(x.bc,{ml:"8px",children:c(a)})]},a)}))})},te=function(){var e=Object(m.b)().t,t=Object(O.useState)({proposalType:M.e.CORE,filterState:M.d.ACTIVE}),n=Object(E.a)(t,2),r=n[0],c=n[1],o=Object(L.b)(),a=Object(L.c)(),s=Object(N.b)(),i=r.proposalType,u=r.filterState,b=o===M.g.LOADING,j=o===M.g.IDLE;Object(O.useEffect)((function(){s(Object(T.c)({first:1e3,state:u}))}),[u,s]);var l=Object(D.b)(Object(D.c)(a,i),u);return Object(y.jsxs)(g.a,{py:"40px",children:[Object(y.jsx)(x.m,{mb:"48px",children:Object(y.jsxs)(x.n,{children:[Object(y.jsx)(U.a,{to:"/",children:e("Home")}),Object(y.jsx)(x.bc,{children:e("Voting")})]})}),Object(y.jsx)(x.X,{as:"h2",scale:"xl",mb:"32px",children:e("Proposals")}),Object(y.jsxs)(x.u,{children:[Object(y.jsx)(J,{proposalType:i,onTypeChange:function(e){c((function(t){return Object(S.a)(Object(S.a)({},t),{},{proposalType:e})}))}}),Object(y.jsx)(ee,{filterState:u,onFilterChange:function(e){c((function(t){return Object(S.a)(Object(S.a)({},t),{},{filterState:e})}))},isLoading:b}),b&&Object(y.jsx)(B,{}),j&&l.length>0&&l.map((function(e){return Object(y.jsx)(K,{proposal:e},e.id)})),j&&0===l.length&&Object(y.jsx)(x.U,{alignItems:"center",justifyContent:"center",p:"32px",children:Object(y.jsx)(x.X,{as:"h5",children:e("No proposals found")})})]})]})},ne=f.e.div(l||(l=Object(p.a)(["\n  flex: none;\n"]))),re=f.e.div(d||(d=Object(p.a)(["\n  flex: 1;\n  height: 100%;\n"])));t.default=function(){return Object(y.jsxs)(x.U,{flexDirection:"column",minHeight:"calc(100vh - 64px)",children:[Object(y.jsx)(ne,{children:Object(y.jsx)(w,{})}),Object(y.jsx)(re,{children:Object(y.jsx)(te,{})}),Object(y.jsx)(ne,{children:Object(y.jsx)(k,{})})]})}},785:function(e,t,n){"use strict";n.d(t,"h",(function(){return f})),n.d(t,"c",(function(){return h})),n.d(t,"b",(function(){return m})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return v})),n.d(t,"i",(function(){return y})),n.d(t,"g",(function(){return C})),n.d(t,"a",(function(){return w})),n.d(t,"f",(function(){return I}));var r=n(21),c=n(37),o=n(6),a=n(3),s=n.n(a),i=n(12),u=n(14),b=n.n(u),j=n(19),l=n(100),d=n(28),p=n(62),O=n(94),x=n(788),f=function(e){return e.author.toLowerCase()===x.a.toLowerCase()},h=function(e,t){switch(t){case p.e.COMMUNITY:return e.filter((function(e){return!f(e)}));case p.e.CORE:return e.filter((function(e){return f(e)}));case p.e.ALL:default:return e}},m=function(e,t){return e.filter((function(e){return e.state===t}))},g=function(){return{plugins:{},network:56,strategies:[{name:"hMOCHI",params:{symbol:"hMOCHI",address:Object(j.f)(),decimals:18}}]}},v=function(){return{version:x.e,timestamp:(Date.now()/1e3).toFixed(),space:x.c}},y=function(){var e=Object(i.a)(s.a.mark((function e(t){var n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(l.e,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 2:if((n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:throw r=e.sent,new Error(null===r||void 0===r?void 0:r.error_description);case 8:return e.next=10,n.json();case 10:return c=e.sent,e.abrupt("return",c);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(i.a)(s.a.mark((function e(t,n,r){var c,o,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=r,e.t0){e.next=5;break}return e.next=4,O.a.getBlockNumber();case 4:e.t0=e.sent;case 5:return c=e.t0,e.next=8,fetch("".concat(l.f,"/power"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({address:t,block:c,poolAddresses:n})});case 8:return o=e.sent,e.next=11,o.json();case 11:return a=e.sent,e.abrupt("return",a.data);case 13:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),w=function(e){return e.reduce((function(e,t){var n=t.proposal.choices[t.choice-1];return Object(o.a)(Object(o.a)({},e),{},Object(r.a)({},n,e[n]?[].concat(Object(c.a)(e[n]),[t]):[t]))}),{})},I=function(e){return e.reduce((function(e,t){var n,r=new b.a(null===(n=t.metadata)||void 0===n?void 0:n.votingPower);return e.plus(r)}),d.c)}},788:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"e",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"f",(function(){return i}));var r=10,c="0x",o="https://gateway.ipfs.io/ipfs",a="0.1.3",s="mochi.eth",i=10},815:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return i}));var r=n(30),c=function(){var e=Object(r.c)((function(e){return e.voting.proposals}));return Object.values(e)},o=function(e){return Object(r.c)((function(t){return t.voting.proposals[e]}))},a=function(e){var t=Object(r.c)((function(t){return t.voting.votes[e]}));return t?t.filter((function(e){return!0!==e._inValid})):[]},s=function(){return Object(r.c)((function(e){return e.voting.voteLoadingStatus}))},i=function(){return Object(r.c)((function(e){return e.voting.proposalLoadingStatus}))}},831:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return j}));var r=n(6),c=n(50),o=(n(1),n(186)),a=n(62),s=n(0),i=["proposalState"],u=["isCoreProposal"],b=function(e){var t=e.proposalState,n=Object(c.a)(e,i);return t===a.d.ACTIVE?Object(s.jsx)(o.h,Object(r.a)({},n)):t===a.d.PENDING?Object(s.jsx)(o.g,Object(r.a)({},n)):Object(s.jsx)(o.a,Object(r.a)({},n))},j=function(e){var t=e.isCoreProposal,n=Object(c.a)(e,u);return t?Object(s.jsx)(o.d,Object(r.a)({},n)):Object(s.jsx)(o.b,Object(r.a)({},n))}},850:function(e,t,n){"use strict";var r,c=n(7),o=n(86),a=n(4),s=Object(a.e)(o.a)(r||(r=Object(c.a)(["\n  color: ",";\n"])),(function(e){return e.theme.colors.primaryBright}));t.a=s}}]);
//# sourceMappingURL=14.8b264f98.chunk.js.map