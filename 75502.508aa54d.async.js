!function(){"use strict";var e={},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))},n.u=function(e){return e+"."+{10286:"7f82c35a",29610:"97017a87",79487:"86e9fea8",89101:"a93df93e"}[e]+".async.js"},n.miniCssF=function(e){},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",function(){n.b=self.location+"";var e={75502:1};n.f.i=function(t,r){e[t]||importScripts(n.p+n.u(t))};var t=self.webpackChunk_antv_g6_site=self.webpackChunk_antv_g6_site||[],r=t.push.bind(t);t.push=function(t){var a=t[0],o=t[1],i=t[2];for(var s in o)n.o(o,s)&&(n.m[s]=o[s]);for(i&&i(n);a.length;)e[a.pop()]=1;r(t)}}();var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)};function a(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}c((r=r.apply(e,t||[])).next())}))}function o(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(i=0)),i;)try{if(n=1,r&&(a=2&s[0]?r.return:s[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,s[1])).done)return a;switch(r=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){i.label=s[1];break}if(6===s[0]&&i.label<a[1]){i.label=a[1],a=s;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(s);break}a[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{n=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}Object.create;Object.create;"function"==typeof SuppressedError&&SuppressedError;const i=Symbol("Comlink.proxy"),s=Symbol("Comlink.endpoint"),c=Symbol("Comlink.releaseProxy"),u=Symbol("Comlink.finalizer"),l=Symbol("Comlink.thrown"),f=e=>"object"==typeof e&&null!==e||"function"==typeof e,p=new Map([["proxy",{canHandle:e=>f(e)&&e[i],serialize(e){const{port1:t,port2:n}=new MessageChannel;return d(e,t),[n,[n]]},deserialize(e){return e.start(),y(e,[],t);var t}}],["throw",{canHandle:e=>f(e)&&l in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function d(e,t=globalThis,n=["*"]){t.addEventListener("message",(function r(a){if(!a||!a.data)return;if(!function(e,t){for(const n of e){if(t===n||"*"===n)return!0;if(n instanceof RegExp&&n.test(t))return!0}return!1}(n,a.origin))return void console.warn(`Invalid origin '${a.origin}' for comlink proxy`);const{id:o,type:i,path:s}=Object.assign({path:[]},a.data),c=(a.data.argumentList||[]).map(O);let f;try{const t=s.slice(0,-1).reduce(((e,t)=>e[t]),e),n=s.reduce(((e,t)=>e[t]),e);switch(i){case"GET":f=n;break;case"SET":t[s.slice(-1)[0]]=O(a.data.value),f=!0;break;case"APPLY":f=n.apply(t,c);break;case"CONSTRUCT":f=S(new n(...c));break;case"ENDPOINT":{const{port1:t,port2:n}=new MessageChannel;d(e,n),f=k(t,[t])}break;case"RELEASE":f=void 0;break;default:return}}catch(e){f={value:e,[l]:0}}Promise.resolve(f).catch((e=>({value:e,[l]:0}))).then((n=>{const[a,s]=_(n);t.postMessage(Object.assign(Object.assign({},a),{id:o}),s),"RELEASE"===i&&(t.removeEventListener("message",r),h(t),u in e&&"function"==typeof e[u]&&e[u]())})).catch((e=>{const[n,r]=_({value:new TypeError("Unserializable return value"),[l]:0});t.postMessage(Object.assign(Object.assign({},n),{id:o}),r)}))})),t.start&&t.start()}function h(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function g(e){if(e)throw new Error("Proxy has been released and is not useable")}function v(e){return j(e,{type:"RELEASE"}).then((()=>{h(e)}))}const b=new WeakMap,m="FinalizationRegistry"in globalThis&&new FinalizationRegistry((e=>{const t=(b.get(e)||0)-1;b.set(e,t),0===t&&v(e)}));function y(e,t=[],n=function(){}){let r=!1;const a=new Proxy(n,{get(n,o){if(g(r),o===c)return()=>{!function(e){m&&m.unregister(e)}(a),v(e),r=!0};if("then"===o){if(0===t.length)return{then:()=>a};const n=j(e,{type:"GET",path:t.map((e=>e.toString()))}).then(O);return n.then.bind(n)}return y(e,[...t,o])},set(n,a,o){g(r);const[i,s]=_(o);return j(e,{type:"SET",path:[...t,a].map((e=>e.toString())),value:i},s).then(O)},apply(n,a,o){g(r);const i=t[t.length-1];if(i===s)return j(e,{type:"ENDPOINT"}).then(O);if("bind"===i)return y(e,t.slice(0,-1));const[c,u]=w(o);return j(e,{type:"APPLY",path:t.map((e=>e.toString())),argumentList:c},u).then(O)},construct(n,a){g(r);const[o,i]=w(a);return j(e,{type:"CONSTRUCT",path:t.map((e=>e.toString())),argumentList:o},i).then(O)}});return function(e,t){const n=(b.get(t)||0)+1;b.set(t,n),m&&m.register(e,t,e)}(a,e),a}function w(e){const t=e.map(_);return[t.map((e=>e[0])),(n=t.map((e=>e[1])),Array.prototype.concat.apply([],n))];var n}const E=new WeakMap;function k(e,t){return E.set(e,t),e}function S(e){return Object.assign(e,{[i]:!0})}function _(e){for(const[t,n]of p)if(n.canHandle(e)){const[r,a]=n.serialize(e);return[{type:"HANDLER",name:t,value:r},a]}return[{type:"RAW",value:e},E.get(e)||[]]}function O(e){switch(e.type){case"HANDLER":return p.get(e.name).deserialize(e.value);case"RAW":return e.value}}function j(e,t,n){return new Promise((r=>{const a=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function t(n){n.data&&n.data.id&&n.data.id===a&&(e.removeEventListener("message",t),r(n.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:a},t),n)}))}var P={dimensions:2,chunk_size:256,min_movement:.4,distance_threshold_mode:0,ka:0,kg:0,kr:0,speed:0,prevent_overlapping:!1,kr_prime:0,node_radius:0,strong_gravity:!1,lin_log:!1,dissuade_hubs:!1,edge_strength:0,link_distance:0,node_strength:0,coulomb_dis_scale:0,factor:0,interval:0,damping:0,center:[0,0],max_speed:0,max_distance:100},x=function(e,t){return function(n){var a=r(r({name:e},P),n);if(2===e){var o=a.width*a.height,i=Math.sqrt(o)/10,s=o/(a.nodes.length+1),c=Math.sqrt(s);a.ka=c,a.interval=.99,a.damping=i}var u=t(a);return{nodes:k(u,[u])}}},T=function(e){return function(t){var n=e(t),r=n.nodes,a=n.edges;return{nodes:k(r,[r]),edges:k(a,[a])}}};function M(e){var t=e.force,n=e.dagre;return{forceatlas2:x(0,t),force2:x(1,t),fruchterman:x(2,t),dagre:T(n)}}d((function(e){return a(this,void 0,void 0,(function(){var t,r;return o(this,(function(a){switch(a.label){case 0:return e?[4,n.e(29610).then(n.bind(n,79487))]:[3,4];case 1:return[4,(t=a.sent()).default()];case 2:return a.sent(),[4,t.initThreadPool(navigator.hardwareConcurrency)];case 3:return a.sent(),[2,S(M(t))];case 4:return[4,n.e(10286).then(n.bind(n,10286))];case 5:return[4,(r=a.sent()).default()];case 6:return a.sent(),[2,S(M(r))]}}))}))}))}();