(function(e){function t(t){for(var n,a,i=t[0],c=t[1],u=t[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==o[i]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},o={app:0},s=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{"chunk-741f5406":"be7bbceb",about:"4fdffcfc","chunk-02ff62d3":"d4ace279","chunk-10e651e8":"ab2f0376","chunk-614d608d":"fb55e7ff","chunk-39a2e188":"e0f6adfb","chunk-3e1ead93":"599f0834","chunk-5ba0e9ca":"00c07892"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"chunk-614d608d":1,"chunk-5ba0e9ca":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({about:"about"}[e]||e)+"."+{"chunk-741f5406":"31d6cfe0",about:"31d6cfe0","chunk-02ff62d3":"31d6cfe0","chunk-10e651e8":"31d6cfe0","chunk-614d608d":"49ce55af","chunk-39a2e188":"31d6cfe0","chunk-3e1ead93":"31d6cfe0","chunk-5ba0e9ca":"49ce55af"}[e]+".css",o=c.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],l=u.getAttribute("data-href");if(l===n||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete a[e],d.parentNode.removeChild(d),r(s)},d.href=o;var g=document.getElementsByTagName("head")[0];g.appendChild(d)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",f.name="ChunkLoadError",f.type=n,f.request=a,r[1](f)}o[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("NavBar"),r("router-view",{staticClass:"tier"})],1)},o=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"nav"},[e._v("NavBar")])},i=[],c=r("2877"),u={},l=Object(c["a"])(u,s,i,!1,null,null,null),f=l.exports,d={components:{NavBar:f}},g=d,m=Object(c["a"])(g,a,o,!1,null,null,null),h=m.exports,p=(r("d3b7"),r("8c4f"));n["a"].use(p["a"]);var v=[{path:"/",name:"home",component:function(){return Promise.all([r.e("chunk-741f5406"),r.e("about")]).then(r.bind(null,"bb51"))}},{path:"/dex/:tier",name:"tier",component:function(){return Promise.all([r.e("chunk-741f5406"),r.e("chunk-02ff62d3"),r.e("chunk-3e1ead93")]).then(r.bind(null,"407c"))}},{path:"/pokemon/:tier/:pokemon",name:"pokemon",component:function(){return Promise.all([r.e("chunk-741f5406"),r.e("chunk-02ff62d3"),r.e("chunk-39a2e188")]).then(r.bind(null,"a82c"))}},{path:"/breakmyteam",name:"breakmyteam",component:function(){return Promise.all([r.e("chunk-741f5406"),r.e("chunk-02ff62d3"),r.e("chunk-5ba0e9ca")]).then(r.bind(null,"04f4"))}},{path:"/breakmyteam/shared/:tier/:id",name:"sharemyteam",component:function(){return Promise.all([r.e("chunk-741f5406"),r.e("chunk-02ff62d3"),r.e("chunk-10e651e8"),r.e("chunk-614d608d")]).then(r.bind(null,"bbee"))}}],k=new p["a"]({mode:"history",base:"/",routes:v}),b=k,y=r("2f62"),T=function(e){return e.showModal},w=function(e){return e.selectedPokemon},S=function(e){return 0!=e.battledex},x=function(e){return e.battledex},E=function(e){return function(t){return e.battledex[t]}},M=function(e){return e.isLoading},P={getModalState:T,getBattledex:x,getSelectedPokemon:w,getSelectFromBattledex:E,isBattleDexAvailable:S,isLoading:M},_=function(e,t){e.battledex=t},O=function(e,t){e.selectedPokemon=t},L=function(e,t){e.isLoading=t},A=function(e,t){e.showModal=t},B={SET_BATTLEDEX:_,SET_LOADING_STATE:L,SET_MODAL_STATE:A,SET_SELECTED_POKEMON:O},j={battledex:!1,selectedPokemon:!1,isLoading:!1,showModal:!0},N={namespaced:!0,state:j,getters:P,mutations:B},C=function(e){return e.battleResults},$=function(e){return e.battleSize},D=function(e){return e.customizedBattleResults},z=function(e){return e.selectedAllyPokemon},R={getBattleResults:C,getBattleSize:$,getCustomizedBattleResults:D,getSelectedAllyPokemon:z},K=(r("b64b"),r("a9e3"),function(e){var t=["hp","atk","def","spa","spd","spe"],r={};for(var n in e){var a=e[n][0].stats;for(var o in a){var s=t[o],i=Number(a[o]);s in r?(r[s].min>=i&&(r[s].min=i),r[s].max<=i&&(r[s].max=i)):r[s]={min:i,max:i}}}return r}),F=(r("99af"),r("caad"),r("b0c0"),r("2532"),{normal:{weakTo:{fighting:2},resists:{ghost:0}},fighting:{weakTo:{flying:2,psychic:2,fairy:2},resists:{rock:.5,bug:.5,dark:.5}},flying:{weakTo:{electric:2,ice:2,rock:2},resists:{bug:.5,grass:.5,fighting:.5,ground:0}},poison:{weakTo:{psychic:2,ground:2},resists:{poison:.5,fighting:.5,bug:.5,grass:.5,fairy:.5}},ground:{weakTo:{water:2,ice:2,grass:2},resists:{poison:.5,rock:.5,electric:0}},rock:{weakTo:{fighting:2,steel:2,grass:2,ground:2,water:2},resists:{normal:.5,fire:.5,poison:.5,flying:.5}},bug:{weakTo:{flying:2,fire:2,rock:2},resists:{bug:.5,fighting:.5,grass:.5}},ghost:{weakTo:{ghost:2,dark:2},resists:{poison:.5,normal:0,fighting:0,bug:.5}},steel:{weakTo:{fire:2,fighting:2,ground:2},resists:{normal:.5,grass:.5,ice:.5,flying:.5,psychic:.5,bug:.5,rock:.5,poison:0,dragon:.5,steel:.5,fairy:.5}},fire:{weakTo:{water:2,rock:2,ground:2},resists:{fire:.5,grass:.5,bug:.5,steel:.5,fairy:.5,ice:.5}},water:{weakTo:{grass:2,electric:2},resists:{water:.5,ice:.5,fire:.5,steel:.5}},grass:{weakTo:{flying:2,poison:2,bug:2,fire:2,ice:2},resists:{water:.5,grass:.5,electric:.5,ground:.5}},electric:{weakTo:{ground:2},resists:{flying:.5,steel:.5,electric:.5}},psychic:{weakTo:{bug:2,ghost:2,dark:2},resists:{fighting:.5,psychic:.5}},ice:{weakTo:{fighting:2,rock:2,steel:2,fire:2},resists:{ice:.5}},dragon:{weakTo:{dragon:2,fairy:2,ice:2},resists:{water:.5,fire:.5,grass:.5,electric:.5}},dark:{weakTo:{fighting:2,fairy:2,bug:2},resists:{ghost:.5,fighting:.5,psychic:0}},fairy:{weakTo:{poison:2,steel:2},resists:{fighting:.5,bug:.5,dark:.5,dragon:0}}});function q(e,t){var r=0,n=0,a="";if("physical"==e){var o=1;n=t.parsedSpreads["atk"].max,r=Math.floor(1*(Math.floor((2*t.stats[o]+31+Math.floor(n/4))*t.level/100)+5)),a="atk"}else{var s=3;n=t.parsedSpreads["spa"].max,r=Math.floor(1*(Math.floor((2*t.stats[s]+31+Math.floor(n/4))*t.level/100)+5)),a="spa"}return{base:r,evs:"".concat(n).concat(a)}}function I(e,t){var r=0;return r="physical"==e?Math.floor(1*(Math.floor((2*t.data.stats[2]+31+Math.floor(t.spread[2]/4))*t.level/100)+5)):Math.floor(1*(Math.floor((2*t.data.stats[4]+31+Math.floor(t.spread[4]/4))*t.level/100)+5)),r}function J(e){return Math.floor((2*e.data.stats[0]+31+Math.floor(e.spread[0]/4))*e.level/100)+e.level+10}function U(e,t,r){var n=1;for(var a in t.types.includes(r.type)&&(n*=1.5),e.data.types){var o=e.data.types[a];r.type in F[o].weakTo?n*=F[o].weakTo[r.type]:r.type in F[o].resists&&(n*=F[o].resists[r.type])}return n}var G=function(e,t,r){var n=q(e.category,r),a=I(e.category,t),o=J(t),s=U(t,r,e),i=Math.floor(Math.floor(Math.floor(2*r.level/5+2)*e.power*n.base/a)/50)+2;return i*=s,{aggressor:r.slug,victim:t.data.slug,damage:i/o*100,move:e.name,evs:n.evs}},H=function(e,t){var r={team:{},aggr:{}};for(var n in e)if(e[n]){var a=e[n];for(var o in a.parsedSpreads=K(a.spreads),a.moves){var s=a.moves[o];if(Number(s.power)>0)for(var i in t){var c=t[i],u=G(s,c,a);u.aggressor in r.aggr?r.aggr[u.aggressor].push({foe:u.victim,damage:u.damage,move:u.move}):(r.aggr[u.aggressor]=[],r.aggr[u.aggressor].push({foe:u.victim,damage:u.damage,move:u.move})),u.victim in r.team?r.team[u.victim].push({targetedBy:u.aggressor,damage:u.damage,move:u.move,evs:u.evs}):(r.team[u.victim]=[],r.team[u.victim].push({targetedBy:u.aggressor,damage:u.damage,move:u.move,evs:u.evs}))}}}for(var l in r.team)r.team[l].sort((function(e,t){return t.damage-e.damage}));return r},X=function(e,t){var r=H(t.weak,t.pokemon);e.battleResults=r,e.selectedAllyPokemon=Object.keys(r.team)[0],e.battleSize=Object.keys(r.team[e.selectedAllyPokemon]).length},Y=function(e,t){e.selectedAllyPokemon=t},Q={SET_BATTLE_RESULTS:X,SET_SELECTED_ALLY_POKEMON:Y},V={},W={battleResults:{},customizedBattleResults:{},battleSize:0,selectedAllyPokemon:{}},Z={namespaced:!0,state:W,getters:R,mutations:Q,actions:V};n["a"].use(y["a"]);var ee=new y["a"].Store({modules:{dex:N,battle:Z}}),te=(r("6418"),{data:function(){return{dex:{ou:100,uu:100,nu:100,ru:100,ubers:100,vgc:50,bss:50,monotype:100}}},computed:{battledex:function(){return this.$store.getters["dex/getBattledex"]},battledex_size:function(){return Object.keys(this.$store.getters["dex/getBattledex"]).length},getSelectedPokemon:function(){return this.$store.getters["dex/getSelectedPokemon"]},isLoading:function(){return this.$store.getters["dex/isLoading"]},modalState:function(){return this.$store.getters["dex/getModalState"]}},methods:{select:function(e,t){var r=this.$store.getters["dex/getSelectFromBattledex"](t);return void 0!==r?(r.key=t,r):{slug:t}},setSelectedPokemon:function(e){var t=this.select("battledex",e);this.$store.commit("dex/SET_SELECTED_POKEMON",t)},unsetSelectedPokemon:function(){this.$store.commit("dex/SET_SELECTED_POKEMON",!1)},setModalState:function(e){this.$store.commit("dex/SET_MODAL_STATE",e)},getDefaultTierLevel:function(e){return this.dex[e]}}});function re(e){var t=e.$options.title;if(t)return"function"===typeof t?t.call(e):t}var ne={created:function(){var e=re(this);e&&(document.title=e)}};n["a"].config.productionTip=!1,n["a"].mixin(te),n["a"].mixin(ne),new n["a"]({router:b,store:ee,render:function(e){return e(h)}}).$mount("#app")},6418:function(e,t,r){}});
//# sourceMappingURL=app.b0466015.js.map