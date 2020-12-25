(this["webpackJsonppf-coding-challenge"]=this["webpackJsonppf-coding-challenge"]||[]).push([[0],{12:function(e,t,n){e.exports={tooltip:"Tooltip_tooltip__khvVR",visible:"Tooltip_visible__1Lsv1",rendered:"Tooltip_rendered__Ed9ib"}},25:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(1),a=n.n(o),i=n(11),r=n.n(i),s=(n(25),n(3)),l=n.n(s);function A(e){var t="https://frontend-coding-challenge.s3.amazonaws.com/".concat(e,".txt"),n=new Headers({"Content-Type":"text/plain"});return fetch(t,{headers:n}).then((function(e){return e.text()})).catch((function(){return""}))}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=e.split(/\W/).filter((function(e){return e.length>2})).map((function(e){return e.toLowerCase()})).reduce((function(e,t){return e[t]||(e[t]=0),e[t]++,e}),{}),c=Object.entries(n).sort((function(e,t){return t[1]-e[1]})).map((function(e){return{value:e[0],amount:e[1]}})).slice(0,t);return c}function u(e){return"".concat(e[0].toUpperCase()).concat(e.slice(1))}var p="IDLE",b="FETCHING",j="SUCCESS",g="FAILURE",v=n(7),f=n.n(v);var O=function(e){var t=e.words,n=e.status,o=e.onToggleVisibility;return Object(c.jsxs)("div",{className:l()(e.className,f.a.wordsMenu),children:[Object(c.jsx)("div",{className:f.a.header,children:"Most Common Words"}),n===b?Object(c.jsx)("div",{className:f.a.loader,children:"Loading..."}):Object(c.jsx)("ul",{className:f.a.wordsList,children:t.map((function(e){return Object(c.jsx)("li",{className:f.a.word,children:Object(c.jsx)(I,{title:u(e.value),description:(t=e.amount,"".concat(t," appearance").concat(t>0?"s":"")),descriptionClassName:f.a.wordDescription,actionButtonText:e.visible?"Hide":"Show",onActionButtonClick:function(){return o(e.value)}})},e.value);var t}))})]})},m=n(9),x=n.n(m);var I=function(e){var t=e.title,n=e.description,o=e.actionButtonText,a=e.onActionButtonClick;return Object(c.jsxs)("div",{className:l()(x.a.listItem,e.className),children:[Object(c.jsxs)("div",{className:x.a.content,children:[Object(c.jsx)("span",{className:l()(x.a.title,e.titleClassName),children:t}),Object(c.jsx)("span",{className:l()(x.a.description,e.descriptionClassName),children:n})]}),Object(c.jsx)("button",{className:x.a.button,onClick:a,children:o})]})},N=n(2),h=n(5),L=n(18),E=n.n(L),w=n(19),C=n.n(w),M=n(4),G=["#ff2954","#3cbd52","#5c7cff","#ffff57","#ffffff"];var W=function(e){var t=e.onActive,n=Object(o.useState)(!1),c=Object(M.a)(n,2),a=c[0],i=c[1],r=Object(o.useState)(!1),s=Object(M.a)(r,2),l=s[0],A=s[1],d=Object(o.useState)(!1),u=Object(M.a)(d,2),p=u[0],b=u[1],j=Object(o.useState)(0),g=Object(M.a)(j,2),v=g[0],f=g[1],O=Object(o.useRef)(null),m=Object(o.useRef)(null),x=Object(o.useRef)(0);return Object(o.useEffect)((function(){l?O.current=setTimeout((function(){i(!0)}),2e3):(clearTimeout(O.current),i(!1))}),[l]),{wordHandlers:{onMouseEnter:function(){A(!0)},onMouseLeave:function(){A(!1)}},draggableHanlders:{onStart:function(){t(),i(!1),x.current=Date.now(),clearInterval(O.current)},onStop:function(){Date.now()-x.current<200&&(b(!0),setTimeout((function(){return b(!1)}),0),f(v===G.length-1?0:v+1))}},color:G[v],clicked:p,confettiConfig:{angle:180,spread:360,startVelocity:20,elementCount:20,dragFriction:.3,duration:1e3,stagger:2,width:"5px",height:"5px",perspective:"500px",colors:["#a864fd","#29cdff","#78ff44","#ff718d","#fdff6a"]},positionVisible:a,ref:m}},V=n(8),y=n.n(V);var P=function(e){var t,n,o,a,i=e.word,r=e.visible,s=e.defaultPosition,A=e.active,d=e.onActive,u=W({onActive:d}),p=u.draggableHanlders,b=u.wordHandlers,j=u.color,g=u.clicked,v=u.confettiConfig,f=u.positionVisible,O=u.ref,m=l()(Object(h.a)({},y.a.visible,r),y.a.draggableWord),x=l()(Object(h.a)({},y.a.active,A),e.className);return Object(c.jsx)(E.a,Object(N.a)(Object(N.a)({ref:O,bounds:"parent",defaultPosition:s},p),{},{children:Object(c.jsxs)("div",{className:x,children:[Object(c.jsxs)("div",Object(N.a)(Object(N.a)({className:m},b),{},{children:[Object(c.jsx)(C.a,{active:g,config:v}),Object(c.jsx)("span",{className:y.a.text,style:{color:j},children:i})]})),Object(c.jsx)(S,{visible:f,className:y.a.positionTooltip,children:Object(c.jsxs)("div",{className:y.a.position,children:[Object(c.jsx)("span",{children:"x: ".concat(null===O||void 0===O||null===(t=O.current)||void 0===t||null===(n=t.state)||void 0===n?void 0:n.x,"px")}),Object(c.jsx)("span",{children:"y: ".concat(null===O||void 0===O||null===(o=O.current)||void 0===o||null===(a=o.state)||void 0===a?void 0:a.y,"px")})]})})]})}))},R=n(12),k=n.n(R);var S=function(e){var t,n=e.visible,a=Object(o.useState)(n),i=Object(M.a)(a,2),r=i[0],s=i[1],A=l()((t={},Object(h.a)(t,k.a.visible,n),Object(h.a)(t,k.a.rendered,r),t),k.a.tooltip,e.className);return Object(o.useEffect)((function(){n&&s(!0)}),[n]),Object(c.jsx)("div",{className:A,onTransitionEnd:function(){return s(n)},children:e.children})},Y="FETCH_WORDS_REQUEST",B="FETCH_WORDS_SUCCESS",T="FETCH_WORDS_ERROR",Z="TOGGLE_WORD_VISIBILITY",U="SET_ACTIVE_WORD",Q={activeWord:null,words:[],status:p};function X(e,t){switch(t.type){case Y:return Object(N.a)(Object(N.a)({},e),{},{status:b});case B:return Object(N.a)(Object(N.a)({},e),{},{status:j,words:t.payload.map((function(e){return Object(N.a)(Object(N.a)({},e),{},{visible:!0})}))});case T:return Object(N.a)(Object(N.a)({},e),{},{status:g});case Z:return Object(N.a)(Object(N.a)({},e),{},{words:e.words.map((function(e){return e.value===t.payload?Object(N.a)(Object(N.a)({},e),{},{visible:!e.visible}):e}))});case U:return Object(N.a)(Object(N.a)({},e),{},{activeWord:t.payload});default:return Object(N.a)({},e)}}var z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t=Object(o.useReducer)(X,Q),n=Object(M.a)(t,2),c=n[0],a=n[1];return Object(o.useEffect)((function(){a({type:Y}),Promise.all([A("1"),A("2"),A("3")]).then((function(t){var n=d(t.join(" "),e);a({type:B,payload:n})})).catch((function(){return a({type:T})}))}),[e]),Object(N.a)(Object(N.a)({},c),{},{setActiveWord:function(e){return a({type:U,payload:e})},toggleWordVisibility:function(e){return a({type:Z,payload:e})}})};var H=function(){var e=Object(o.useRef)(null);return Object(o.useEffect)((function(){var t;null===e||void 0===e||null===(t=e.current)||void 0===t||t.play()}),[]),{ref:e}},J=n(6),F=n.n(J);var q=function(){var e=z(),t=H(null);return Object(c.jsxs)("div",{className:F.a.app,children:[Object(c.jsxs)("header",{className:F.a.header,children:[Object(c.jsx)("img",{src:"data:image/png;base64,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",alt:"Pinata Farms logo",width:42,height:42}),Object(c.jsx)("h1",{children:"Pi\xf1ata Farms Frontend Coding Challenge"})]}),Object(c.jsxs)("div",{className:F.a.content,children:[Object(c.jsx)(O,{className:F.a.wordsMenu,words:e.words,onToggleVisibility:e.toggleWordVisibility,status:e.status}),Object(c.jsxs)("div",{className:F.a.playerContainer,children:[Object(c.jsx)("video",{className:F.a.player,controls:!0,muted:!0,ref:t.ref,children:Object(c.jsx)("source",{src:"https://frontend-coding-challenge.s3.amazonaws.com/moonwalker.mp4",type:"video/mp4"})}),e.words.map((function(t,n){return Object(c.jsx)(P,{active:t.value===e.activeWord,className:F.a.word,word:u(t.value),visible:t.visible,defaultPosition:{y:65*(n+1),x:50},onActive:function(){return e.setActiveWord(t.value)}},t.value)}))]})]})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),a(e),i(e)}))};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(q,{})}),document.getElementById("root")),D()},6:function(e,t,n){e.exports={app:"App_app__1kX79",header:"App_header__3ZZ1n",content:"App_content__3La4L",wordsMenu:"App_wordsMenu__3SeeK",word:"App_word__3aQvw",playerContainer:"App_playerContainer__SGRIS",player:"App_player__1wNcv"}},7:function(e,t,n){e.exports={wordsMenu:"WordsMenu_wordsMenu__1QvJ9",header:"WordsMenu_header__1mKRH",wordsList:"WordsMenu_wordsList__3PSeu",word:"WordsMenu_word__Ig8lB",wordDescription:"WordsMenu_wordDescription__2dFLO",loader:"WordsMenu_loader__TFCkB"}},8:function(e,t,n){e.exports={draggableWord:"DraggableWord_draggableWord__1X_ex",text:"DraggableWord_text__1ouZo",active:"DraggableWord_active__3qv5i",visible:"DraggableWord_visible__Ia8oY",positionTooltip:"DraggableWord_positionTooltip__t9t5B",position:"DraggableWord_position__23zKg"}},9:function(e,t,n){e.exports={listItem:"ListItem_listItem__2f5eW",content:"ListItem_content__1okdh",title:"ListItem_title__3kdMO",description:"ListItem_description__3Wk4Q",button:"ListItem_button__2fFgR"}}},[[32,1,2]]]);
//# sourceMappingURL=main.54dc8fdf.chunk.js.map