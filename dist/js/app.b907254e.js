(function(e){function t(t){for(var a,r,i=t[0],u=t[1],s=t[2],l=0,f=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);p&&p(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},o={app:0},c=[];function i(e){return u.p+"js/"+({account:"account",createAccount:"createAccount",login:"login"}[e]||e)+"."+{account:"1b3c117f",createAccount:"304cca2c",login:"b0507f30"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={account:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({account:"account",createAccount:"createAccount",login:"login"}[e]||e)+"."+{account:"7cc00650",createAccount:"31d6cfe0",login:"31d6cfe0"}[e]+".css",o=u.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===a||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],p.parentNode.removeChild(p),n(c)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}o[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var p=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"4be0":function(e,t,n){"use strict";n("d3b4")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},o=[],c={name:"App",data:function(){return{}}},i=c,u=(n("034f"),n("2877")),s=Object(u["a"])(i,r,o,!1,null,null,null),l=s.exports,f=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("HomeAppBar"),n("v-main",[n("v-row",{staticClass:"mt-2 d-flex justify-center align-center flex-column"},[n("h1",{staticClass:"titles mr-4"},[e._v("Anegy")]),n("h2",{staticClass:"titles"},[e._v(" With Anegy you can discover all the movies and series ever made. ")])])],1),n("WebsiteFooter")],1)},d=[],h=n("68c1"),m=n("836a"),v={name:"Homepage",components:{HomeAppBar:h["a"],WebsiteFooter:m["a"]},data:function(){return{}},methods:{},mounted:function(){}},b=v,g=(n("4be0"),n("6544")),y=n.n(g),w=n("7496"),_=n("f6c4"),x=n("0fd9"),A=Object(u["a"])(b,p,d,!1,null,null,null),C=A.exports;y()(A,{VApp:w["a"],VMain:_["a"],VRow:x["a"]}),a["a"].use(f["a"]);var S=[{path:"/",name:"Homepage",component:C},{path:"/movies/popular",name:"Popular Movies",component:function(){return n.e("account").then(n.bind(null,"0fa0"))}},{path:"/movies/playing",name:"Playing Movies",component:function(){return n.e("account").then(n.bind(null,"0fa0"))}},{path:"/movies/top-rated",name:"Top Rated Movies",component:function(){return n.e("account").then(n.bind(null,"0fa0"))}},{path:"/movies/upcoming",name:"Upcoming Movies",component:function(){return n.e("account").then(n.bind(null,"0fa0"))}},{path:"/series/popular",name:"Popular Series",component:function(){return n.e("account").then(n.bind(null,"b58f"))}},{path:"/series/playing",name:"Playing Series",component:function(){return n.e("account").then(n.bind(null,"b58f"))}},{path:"/series/top-rated",name:"Top Rated Series",component:function(){return n.e("account").then(n.bind(null,"b58f"))}},{path:"/series/upcoming",name:"Upcoming Series",component:function(){return n.e("account").then(n.bind(null,"b58f"))}},{path:"/account",name:"Account",component:function(){return n.e("account").then(n.bind(null,"a3f2"))}},{path:"/create-account",name:"Create Account",component:function(){return n.e("createAccount").then(n.bind(null,"e753"))}},{path:"/login",name:"Login",component:function(){return n.e("login").then(n.bind(null,"1c92"))}},{path:"/404",name:"404",component:function(){return n.e("login").then(n.bind(null,"8cdb"))}}],k=new f["a"]({mode:"history",base:"/",routes:S}),j=k,O=n("2f62");a["a"].use(O["a"]);var P=new O["a"].Store({state:{drawer:!1},mutations:{setDrawerInput:function(e,t){return e.drawer=t}},actions:{setDrawerInput:function(e,t){var n=e.commit;return n("setDrawerInput",t)}},getters:{drawer:function(e){return e.drawer}}}),E=n("f309");a["a"].use(E["a"]);var M=new E["a"]({theme:{themes:{light:{primary:"#e0dfdf",secondary:"#f32b2b",accent:"#23a9a7"},dark:{primary:"#1b1b1f",secondary:"#690f0f",accent:"#23a9a7"}}}});a["a"].config.productionTip=!1,new a["a"]({router:j,store:P,vuetify:M,render:function(e){return e(l)}}).$mount("#app")},"68c1":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{attrs:{app:"",color:"secondary","clipped-left":""}},[n("v-btn",{staticClass:"white--text",attrs:{icon:"",to:"/movies/popular"}},[n("v-icon",[e._v("fas fa-video")])],1),n("v-btn",{staticClass:"white--text",attrs:{icon:"",to:"/series/popular"}},[n("v-icon",[e._v("fas fa-tv")])],1),n("v-btn",{staticClass:"white--text",attrs:{icon:"",to:"/"}},[n("v-icon",[e._v("fas fa-home")])],1),n("v-spacer"),1==this.show?n("v-text-field",{staticClass:"mt-6 shrink",attrs:{label:"Search",solo:"",rounded:"",dense:"",flat:""}}):e._e(),n("v-btn",{staticClass:"white--text",attrs:{icon:""},on:{click:e.showSearch}},[n("v-icon",[e._v("fas fa-search")])],1),e.$vuetify.theme.dark?n("v-btn",{staticClass:"white--text",attrs:{icon:""},on:{click:e.darkMode}},[n("v-icon",[e._v("fas fa-sun")])],1):n("v-btn",{staticClass:"white--text",attrs:{icon:""},on:{click:e.darkMode}},[n("v-icon",[e._v("fas fa-moon")])],1)],1)},r=[],o=(n("d3b7"),n("25f0"),n("bc3a")),c=n.n(o),i={name:"AppBar",data:function(){return{show:!1}},methods:{openAccount:function(){this.$router.push({path:"/account"})},darkMode:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark,localStorage.setItem("dark_theme",this.$vuetify.theme.dark.toString())},showSearch:function(){0==this.show?this.show=!0:this.show=!1},searchMulti:function(e){c()({method:"post",url:"http://localhost/Library/Search/Search.php",data:{query:e}}).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}))}}},u=i,s=n("2877"),l=n("6544"),f=n.n(l),p=n("40dc"),d=n("8336"),h=n("132d"),m=n("2fa4"),v=n("8654"),b=Object(s["a"])(u,a,r,!1,null,null,null);t["a"]=b.exports;f()(b,{VAppBar:p["a"],VBtn:d["a"],VIcon:h["a"],VSpacer:m["a"],VTextField:v["a"]})},"836a":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"d-flex justify-center flex-row",staticStyle:{"border-radius":"0px"},attrs:{color:"secondary"}},[n("v-footer",{attrs:{color:"secondary"}},[n("v-card-text",{staticClass:"white--text"},[e._v(" ©"+e._s((new Date).getFullYear())+" — "),n("strong",[e._v("Anegy")]),n("v-img",{staticClass:"mt-2",attrs:{"max-width":"100px",src:"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg"}})],1)],1)],1)},r=[],o={},c=o,i=n("2877"),u=n("6544"),s=n.n(u),l=n("b0af"),f=n("99d9"),p=n("553a"),d=n("adda"),h=Object(i["a"])(c,a,r,!1,null,null,null);t["a"]=h.exports;s()(h,{VCard:l["a"],VCardText:f["b"],VFooter:p["a"],VImg:d["a"]})},"85ec":function(e,t,n){},d3b4:function(e,t,n){}});
//# sourceMappingURL=app.b907254e.js.map