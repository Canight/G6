"use strict";(self.webpackChunk_antv_g6_site=self.webpackChunk_antv_g6_site||[]).push([[33682],{17795:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(77583),o=n(41393),a=n(58757),c=n(56007),l=n(51865),i=n.n(l),u=n(63362),s=n(49341),f=["className","component","viewBox","spin","rotate","tabIndex","onClick","children"],m=a.forwardRef((function(e,t){var n=e.className,l=e.component,m=e.viewBox,p=e.spin,d=e.rotate,v=e.tabIndex,y=e.onClick,b=e.children,h=(0,o.Z)(e,f);(0,s.Kp)(Boolean(l||b),"Should have `component` prop or `children`."),(0,s.C3)();var E=a.useContext(u.Z),g=E.prefixCls,x=void 0===g?"anticon":g,N=E.rootClassName,Z=i()(N,x,n),C=i()((0,c.Z)({},"".concat(x,"-spin"),!!p)),w=d?{msTransform:"rotate(".concat(d,"deg)"),transform:"rotate(".concat(d,"deg)")}:void 0,O=(0,r.Z)((0,r.Z)({},s.vD),{},{className:C,style:w,viewBox:m});m||delete O.viewBox;var S=v;return void 0===S&&y&&(S=-1),a.createElement("span",(0,r.Z)((0,r.Z)({role:"img"},h),{},{ref:t,tabIndex:S,onClick:y,className:Z}),l?a.createElement(l,(0,r.Z)({},O),b):b?((0,s.Kp)(Boolean(m)||1===a.Children.count(b)&&a.isValidElement(b)&&"use"===a.Children.only(b).type,"Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),a.createElement("svg",(0,r.Z)((0,r.Z)({},O),{},{viewBox:m}),b)):null)}));m.displayName="AntdIcon";var p=m,d=["type","children"],v=new Set;function y(e){return Boolean("string"==typeof e&&e.length&&!v.has(e))}function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=e[t];if(y(n)){var r=document.createElement("script");r.setAttribute("src",n),r.setAttribute("data-namespace",n),e.length>t+1&&(r.onload=function(){b(e,t+1)},r.onerror=function(){b(e,t+1)}),v.add(n),document.body.appendChild(r)}}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.scriptUrl,n=e.extraCommonProps,c=void 0===n?{}:n;t&&"undefined"!=typeof document&&"undefined"!=typeof window&&"function"==typeof document.createElement&&(Array.isArray(t)?b(t.reverse()):b([t]));var l=a.forwardRef((function(e,t){var n=e.type,l=e.children,i=(0,o.Z)(e,d),u=null;return e.type&&(u=a.createElement("use",{xlinkHref:"#".concat(n)})),l&&(u=l),a.createElement(p,(0,r.Z)((0,r.Z)((0,r.Z)({},c),i),{},{ref:t}),u)}));return l.displayName="Iconfont",l}},41999:function(e,t,n){n.d(t,{w:function(){return r}});var r=(0,n(58757).createContext)({})},33682:function(e,t,n){n.r(t),n.d(t,{default:function(){return Be}});var r=n(58757),o=n(66682),a=n(19823),c=n(97183),l=n(39597),i=n(30290),u=n(47799),s=n(13805),f=n(51865),m=n.n(f),p={button:"tvT8G4YHWELoE_GNOh3G",hidden:"O3pLh1OCOvMqKr7RHIUN",label:"y69wWCF_O0oZe7q9NG57",title:"CxwhsNbIP48vHYMIh3Io",next:"Bd9KADvGGI2OPWxWx4Yj"},d=function(e){var t=e.post,n=e.type;if(!t)return r.createElement("div",{className:m()(p.button,p.hidden)});var o=t.slug,a=t.title;return o&&a?r.createElement(l.rU,{to:o,className:m()(p.button,p[n])},r.createElement("div",{className:p.label},r.createElement(l._H,{id:"prev"===n?"上一篇":"下一篇"})),r.createElement("div",{className:p.title},a)):null},v=n(87731),y={},b=function(e){return r.createElement(a.Z.Content,{className:y.article},r.createElement("article",e))},h=n(38248),E=n(98961),g=n(42789),x=n(47496),N=n(90078),Z=n(43131),C=n(56007),w=n(54166),O=n(67200),S=n(82220),k=n(92957),j=n(79223),P=n(70374),I=r.createContext(void 0);function T(){return window}function A(e,t){if(!e.getClientRects().length)return 0;var n=e.getBoundingClientRect();return n.width||n.height?t===window?(t=e.ownerDocument.documentElement,n.top-t.clientTop):n.top-t.getBoundingClientRect().top:n.top}var _=/#([\S ]+)$/,B=function(e){var t,n=e.anchorPrefixCls,o=e.className,a=void 0===o?"":o,c=e.style,l=e.offsetTop,i=e.affix,u=void 0===i||i,s=e.showInkInFixed,f=void 0!==s&&s,p=e.children,d=e.bounds,v=e.targetOffset,y=e.onClick,b=e.onChange,E=e.getContainer,g=e.getCurrentAnchor,x=r.useState([]),N=(0,O.Z)(x,2),B=N[0],R=N[1],M=r.useState(null),z=(0,O.Z)(M,2),U=z[0],D=z[1],G=r.useRef(U),L=r.useRef(null),H=r.useRef(null),F=r.useRef(!1),q=r.useContext(k.E_),K=q.direction,W=q.getTargetContainer,Y=null!==(t=null!=E?E:W)&&void 0!==t?t:T,Q=JSON.stringify(B),X=r.useCallback((function(e){B.includes(e)||R((function(t){return[].concat((0,w.Z)(t),[e])}))}),[Q]),$=r.useCallback((function(e){B.includes(e)&&R((function(t){return t.filter((function(t){return t!==e}))}))}),[Q]),V=function(e){if(G.current!==e){var t="function"==typeof g?g(e):e;D(t),G.current=t,null==b||b(e)}},J=r.useCallback((function(){if(!F.current){var e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,r=[],o=Y();if(e.forEach((function(e){var a=_.exec(null==e?void 0:e.toString());if(a){var c=document.getElementById(a[1]);if(c){var l=A(c,o);l<t+n&&r.push({link:e,top:l})}}})),r.length){return r.reduce((function(e,t){return t.top>e.top?t:e})).link}return""}(B,void 0!==v?v:l||0,d);V(e)}}),[Q,v,l]),ee=r.useCallback((function(e){V(e);var t=Y(),n=(0,j.Z)(t,!0),r=_.exec(e);if(r){var o=document.getElementById(r[1]);if(o){var a=n+A(o,t);a-=void 0!==v?v:l||0,F.current=!0,(0,P.Z)(a,{getContainer:Y,callback:function(){F.current=!1}})}}}),[v,l]),te=m()((0,C.Z)({},"".concat(n,"-ink-ball-visible"),U),"".concat(n,"-ink-ball")),ne=m()("".concat(n,"-wrapper"),(0,C.Z)({},"".concat(n,"-rtl"),"rtl"===K),a),re=m()(n,(0,C.Z)({},"".concat(n,"-fixed"),!u&&!f)),oe=(0,Z.Z)({maxHeight:l?"calc(100vh - ".concat(l,"px)"):"100vh"},c),ae=r.createElement("div",{ref:L,className:ne,style:oe},r.createElement("div",{className:re},r.createElement("div",{className:"".concat(n,"-ink")},r.createElement("span",{className:te,ref:H})),p));r.useEffect((function(){var e=Y(),t=(0,S.Z)(e,"scroll",J);return J(),function(){null==t||t.remove()}}),[Q]),r.useEffect((function(){"function"==typeof g&&V(g(G.current||""))}),[g]),r.useEffect((function(){!function(){var e,t=null===(e=L.current)||void 0===e?void 0:e.querySelector(".".concat(n,"-link-title-active"));t&&H.current&&(H.current.style.top="".concat(t.offsetTop+t.clientHeight/2-4.5,"px"))}()}),[g,Q,U]);var ce=r.useMemo((function(){return{registerLink:X,unregisterLink:$,scrollTo:ee,activeLink:U,onClick:y}}),[U,y,ee]);return r.createElement(I.Provider,{value:ce},u?r.createElement(h.Z,{offsetTop:l,target:Y},ae):ae)},R=function(e){var t=e.href,n=void 0===t?"#":t,o=e.title,a=e.prefixCls,c=e.children,l=e.className,i=e.target,u=r.useContext(I)||{},s=u.registerLink,f=u.unregisterLink,p=u.scrollTo,d=u.onClick,v=u.activeLink;r.useEffect((function(){return null==s||s(n),function(){null==f||f(n)}}),[n,s,f]);var y=function(e){null==d||d(e,{title:o,href:n}),null==p||p(n)};return r.createElement(k.C,null,(function(e){var t=(0,e.getPrefixCls)("anchor",a),u=v===n,s=m()("".concat(t,"-link"),l,(0,C.Z)({},"".concat(t,"-link-active"),u)),f=m()("".concat(t,"-link-title"),(0,C.Z)({},"".concat(t,"-link-title-active"),u));return r.createElement("div",{className:s},r.createElement("a",{className:f,href:n,title:"string"==typeof o?o:"",target:i,onClick:y},o),c)}))},M=function(e){var t=e.prefixCls,n=(0,r.useContext(k.E_).getPrefixCls)("anchor",t);return r.createElement(B,(0,Z.Z)({},e,{anchorPrefixCls:n}))};M.Link=R;var z=M,U=n(33268),D=n(17795);function G(e,t){return[e,t].join("-").replace(/\s/g,"")}var L="NQw43F8NtCIjmzSiZZGj",H="BVzbDnIgEfMkcaxMrB_o",F="TSYU6zi1Cq8u3wSeuNFE",q="uuXsflXOszU98QpyCH2h",K="xgkSBOTh6pEFi7X3o_Qz",W="qyoLykX_tCQBmxEAF2k3",Y="aOqBEe2fBScGqUl6adAn",Q="PWfL6spZ5MmHsyRXa155",X="gTuDmoyxOEMHRAx1o25B",$="xaEp9jFSvx4nAbiVMGQ9",V="ZKxNLepiofE4CGWPW8VQ",J="PQeuwbuBIGorJjDRBuyR",ee="h246Opzpag0WC8Gfu9cz",te="Kbf_DdOh0Cs2Xzfwk_x_",ne="nSBMiSfztom8h1rzma2y",re="MDtq6mS2bPsyR_A_u__T",oe="Y5aZ95ni3pUZPeMvvPYE";function ae(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,c,l=[],i=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{if(!i&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ce(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ce(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var le=(0,D.Z)({scriptUrl:"//at.alicdn.com/t/font_470089_1lnym745udm.js"}),ie=function(e){var t=e.exampleTopics,n=ae((0,r.useState)([]),2),o=n[0],a=(n[1],(0,l.bU)()),c=ae((0,r.useState)([]),2),i=c[0],u=c[1];return r.createElement(z,{className:re},r.createElement(U.Z,{mode:"inline",selectedKeys:o,style:{height:"100vh"},openKeys:i,onOpenChange:function(e){return u(e)},forceSubMenuRender:!0},t.map((function(e){return r.createElement(U.Z.SubMenu,{key:e.id,title:r.createElement("div",null,r.createElement(le,{className:W,type:"icon-".concat(e.icon)}),r.createElement("span",null,e.title[a.id]))},e.examples.map((function(t){return r.createElement(U.Z.Item,{key:t.id},r.createElement(z.Link,{href:"#".concat(G(e.id,t.id)),title:r.createElement("div",null,r.createElement("span",null,t.title[a.id]))}))})))}))))};function ue(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,c,l=[],i=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{if(!i&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return se(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return se(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function se(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var fe=function(e){var t=e.exampleTopics,n=(0,N.Z)("(min-width: 767.99px)",!0),o=ue((0,r.useState)(!1),2),c=o[0],l=o[1];return r.createElement(h.Z,{offsetTop:0,className:K,style:{height:n?"100vh":"inherit"}},n?r.createElement("div",null,r.createElement(a.Z.Sider,{width:"auto",theme:"light",className:q},r.createElement(ie,{exampleTopics:t}))):r.createElement(E.Z,{handler:c?r.createElement(g.Z,{className:Q}):r.createElement(x.Z,{className:Q}),wrapperClassName:Y,onChange:function(e){return l(!!e)},width:280},r.createElement(ie,{exampleTopics:t})))},me=n(49172),pe=n(50952),de=n(50945),ve=n(69909);function ye(e){return ve.Y.includes(e)}function be(e){var t,n=e.prefixCls,o=e.value,a=e.current,c=e.offset,l=void 0===c?0:c;return l&&(t={position:"absolute",top:"".concat(l,"00%"),left:0}),r.createElement("span",{style:t,className:m()("".concat(n,"-only-unit"),{current:a})},o)}function he(e,t,n){for(var r=e,o=0;(r+10)%10!==t;)r+=n,o+=n;return o}function Ee(e){var t,n,o=e.prefixCls,a=e.count,c=e.value,l=Number(c),i=Math.abs(a),u=r.useState(l),s=(0,O.Z)(u,2),f=s[0],m=s[1],p=r.useState(i),d=(0,O.Z)(p,2),v=d[0],y=d[1],b=function(){m(l),y(i)};if(r.useEffect((function(){var e=setTimeout((function(){b()}),1e3);return function(){clearTimeout(e)}}),[l]),f===l||Number.isNaN(l)||Number.isNaN(f))t=[r.createElement(be,(0,Z.Z)({},e,{key:l,current:!0}))],n={transition:"none"};else{t=[];for(var h=l+10,E=[],g=l;g<=h;g+=1)E.push(g);var x=E.findIndex((function(e){return e%10===f}));t=E.map((function(t,n){var o=t%10;return r.createElement(be,(0,Z.Z)({},e,{key:t,value:o,offset:n-x,current:n===x}))})),n={transform:"translateY(".concat(-he(f,l,v<i?1:-1),"00%)")}}return r.createElement("span",{className:"".concat(o,"-only"),style:n,onTransitionEnd:b},t)}var ge=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},xe=function(e){var t=e.prefixCls,n=e.count,o=e.className,a=e.motionClassName,c=e.style,l=e.title,i=e.show,u=e.component,s=void 0===u?"sup":u,f=e.children,p=ge(e,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),d=(0,r.useContext(k.E_).getPrefixCls)("scroll-number",t),v=(0,Z.Z)((0,Z.Z)({},p),{"data-show":i,style:c,className:m()(d,o,a),title:l}),y=n;if(n&&Number(n)%1==0){var b=String(n).split("");y=b.map((function(e,t){return r.createElement(Ee,{prefixCls:d,count:Number(n),value:e,key:b.length-t})}))}return c&&c.borderColor&&(v.style=(0,Z.Z)((0,Z.Z)({},c),{boxShadow:"0 0 0 1px ".concat(c.borderColor," inset")})),f?(0,de.Tm)(f,(function(e){return{className:m()("".concat(d,"-custom-component"),null==e?void 0:e.className,a)}})):r.createElement(s,v,y)},Ne=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},Ze=function(e){var t=e.prefixCls,n=e.scrollNumberPrefixCls,o=e.children,a=e.status,c=e.text,l=e.color,i=e.count,u=void 0===i?null:i,s=e.overflowCount,f=void 0===s?99:s,p=e.dot,d=void 0!==p&&p,v=e.size,y=void 0===v?"default":v,b=e.title,h=e.offset,E=e.style,g=e.className,x=e.showZero,N=void 0!==x&&x,w=Ne(e,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","showZero"]),O=r.useContext(k.E_),S=O.getPrefixCls,j=O.direction,P=S("badge",t),I=u>f?"".concat(f,"+"):u,T="0"===I||0===I,A=(null!=a||null!=l)&&(null===u||T&&!N),_=d&&!T,B=_?"":I,R=(0,r.useMemo)((function(){return(null==B||""===B||T&&!N)&&!_}),[B,T,N,_]),M=(0,r.useRef)(u);R||(M.current=u);var z=M.current,U=(0,r.useRef)(B);R||(U.current=B);var D=U.current,G=(0,r.useRef)(_);R||(G.current=_);var L=(0,r.useMemo)((function(){if(!h)return(0,Z.Z)({},E);var e={marginTop:h[1]};return"rtl"===j?e.left=parseInt(h[0],10):e.right=-parseInt(h[0],10),(0,Z.Z)((0,Z.Z)({},e),E)}),[j,h,E]),H=null!=b?b:"string"==typeof z||"number"==typeof z?z:void 0,F=R||!c?null:r.createElement("span",{className:"".concat(P,"-status-text")},c),q=z&&"object"===(0,me.Z)(z)?(0,de.Tm)(z,(function(e){return{style:(0,Z.Z)((0,Z.Z)({},L),e.style)}})):void 0,K=m()((0,C.Z)((0,C.Z)((0,C.Z)({},"".concat(P,"-status-dot"),A),"".concat(P,"-status-").concat(a),!!a),"".concat(P,"-status-").concat(l),ye(l))),W={};l&&!ye(l)&&(W.background=l);var Y=m()(P,(0,C.Z)((0,C.Z)((0,C.Z)({},"".concat(P,"-status"),A),"".concat(P,"-not-a-wrapper"),!o),"".concat(P,"-rtl"),"rtl"===j),g);if(!o&&A){var Q=L.color;return r.createElement("span",(0,Z.Z)({},w,{className:Y,style:L}),r.createElement("span",{className:K,style:W}),c&&r.createElement("span",{style:{color:Q},className:"".concat(P,"-status-text")},c))}return r.createElement("span",(0,Z.Z)({},w,{className:Y}),o,r.createElement(pe.ZP,{visible:!R,motionName:"".concat(P,"-zoom"),motionAppear:!1,motionDeadline:1e3},(function(e){var t=e.className,o=S("scroll-number",n),c=G.current,i=m()((0,C.Z)((0,C.Z)((0,C.Z)((0,C.Z)((0,C.Z)((0,C.Z)({},"".concat(P,"-dot"),c),"".concat(P,"-count"),!c),"".concat(P,"-count-sm"),"small"===y),"".concat(P,"-multiple-words"),!c&&D&&D.toString().length>1),"".concat(P,"-status-").concat(a),!!a),"".concat(P,"-status-").concat(l),ye(l))),u=(0,Z.Z)({},L);return l&&!ye(l)&&((u=u||{}).background=l),r.createElement(xe,{prefixCls:o,show:!R,motionClassName:t,className:i,count:D,title:H,style:u,key:"scrollNumber"},q)})),F)};Ze.Ribbon=function(e){var t=e.className,n=e.prefixCls,o=e.style,a=e.color,c=e.children,l=e.text,i=e.placement,u=void 0===i?"end":i,s=r.useContext(k.E_),f=s.getPrefixCls,p=s.direction,d=f("ribbon",n),v=ye(a),y=m()(d,"".concat(d,"-placement-").concat(u),(0,C.Z)((0,C.Z)({},"".concat(d,"-rtl"),"rtl"===p),"".concat(d,"-color-").concat(a),v),t),b={},h={};return a&&!v&&(b.background=a,h.color=a),r.createElement("div",{className:"".concat(d,"-wrapper")},c,r.createElement("div",{className:y,style:(0,Z.Z)((0,Z.Z)({},b),o)},r.createElement("span",{className:"".concat(d,"-text")},l),r.createElement("div",{className:"".concat(d,"-corner"),style:h})))};var Ce=Ze,we=n(73628),Oe=function(e){var t=e.demo,n=e.topicId,o=e.exampleId,a=(0,l.bU)(),c=function(){var e=t.screenshot||"https://gw.alipayobjects.com/os/s/prod/antv/assets/image/screenshot-placeholder-b8e70.png";return r.createElement(r.Fragment,null,r.createElement("div",{className:m()("demo-card-screenshot",te),style:{backgroundImage:'url("'.concat(e,'")')}}))};return r.createElement(l.rU,{className:ee,to:"".concat("zh"==a.id?"":"/en","/examples/").concat(n,"/").concat(o,"/#").concat(t.id)},t.isNew?r.createElement(Ce.Ribbon,{text:"new",className:ne},c()):c(),r.createElement("h4",null,(0,we.ic)(t.title)))};function Se(e){return Se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Se(e)}function ke(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function je(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ke(Object(n),!0).forEach((function(t){Pe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ke(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Pe(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==Se(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==Se(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===Se(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ie=function(e){var t=e.exampleTopics,n=(0,l.bU)(),o=t.reduce((function(e,t){var n=t.examples.map((function(e){return je(je({},e),{},{targetTopic:t})}));return e.concat(n)}),[]);return r.createElement("div",{className:X},r.createElement("div",{className:$},o.map((function(e,t){return r.createElement("div",{key:t},r.createElement("h2",{id:G(e.targetTopic.id,e.id)},e.title[n.id]),r.createElement("ul",{className:V},e.demos.map((function(t){return r.createElement("li",{className:J,key:t.id,title:t.title[n.id]},r.createElement(Oe,{demo:t,topicId:e.targetTopic.id,exampleId:e.id}))}))))}))))},Te=n(41999);function Ae(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,c,l=[],i=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{if(!i&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return _e(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _e(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Be=function(){var e=(0,o.s0)(),t=(0,l.bU)(),n=(0,r.useContext)(Te.w).meta.exampleTopics,f=Ae((0,we.tF)(),2),m=f[0],p=f[1];return(0,r.useEffect)((function(){var t=window.location.pathname;t.includes("/zh/")&&e(t.replace("/zh/","/"))}),[]),r.createElement(r.Fragment,null,r.createElement(i.H,{title:{zh:"所有图表",en:"Gallery"}[t.id]}),r.createElement(u.h,{isHomePage:!1}),r.createElement(a.Z,{hasSider:!0,className:H},r.createElement(fe,{exampleTopics:n}),r.createElement(b,{className:L},r.createElement("div",{className:F,style:{width:"100%"}},r.createElement(Ie,{exampleTopics:n}),r.createElement("div",null,r.createElement(d,{type:"prev",post:m}),r.createElement(d,{type:"next",post:p})),r.createElement(c.Z,{style:{right:32}},r.createElement("div",{className:oe},r.createElement(v.Z,null)))))),r.createElement(s.$,{isDynamicFooter:!0}))}}}]);