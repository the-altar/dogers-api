(function(e){function t(t){for(var a,r,o=t[0],c=t[1],u=t[2],l=0,d=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var o=n[r];0!==s[o]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},s={app:0},i=[];function o(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-699b6dd7":"935dc96d","chunk-741f5406":"8b92e0f6","chunk-4a436443":"36927d9c","chunk-5c097eba":"106fd83f","chunk-65869b11":"a046f7f7","chunk-891bc77e":"3b89017e","chunk-61101ea0":"0c1b01b6","chunk-7e78c016":"4d2cf5c4","chunk-edfcc9b4":"b7e72f08","chunk-d2070820":"7ac441f7","chunk-0e395d44":"deaee8c1"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-699b6dd7":1,"chunk-4a436443":1,"chunk-5c097eba":1,"chunk-65869b11":1,"chunk-891bc77e":1,"chunk-61101ea0":1,"chunk-7e78c016":1,"chunk-edfcc9b4":1,"chunk-d2070820":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-699b6dd7":"ab9a5d12","chunk-741f5406":"31d6cfe0","chunk-4a436443":"a270a51e","chunk-5c097eba":"a9792af2","chunk-65869b11":"0e433876","chunk-891bc77e":"4368bddd","chunk-61101ea0":"55731bfa","chunk-7e78c016":"7899db66","chunk-edfcc9b4":"742c4426","chunk-d2070820":"d7816575","chunk-0e395d44":"31d6cfe0"}[e]+".css",s=c.p+a,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var u=i[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===s))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===a||l===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||s,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=s;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[e]=0})));var a=s[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=s[e]=[t,n]}));t.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}s[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:"app-content-"+e.theme,attrs:{id:"app"}},[n("NavBar"),n("section",{class:"app-content-"+e.theme,attrs:{id:"app-content"}},[e.isMobile?n("router-view",{staticClass:"mobile",attrs:{name:"mobile"}}):n("router-view",{attrs:{name:"desktop"}})],1)],1)},s=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:"nav nav-"+e.theme},[e.isMobile?e._e():n("div",{staticClass:"nav-side"},[n("router-link",{staticClass:"nav-opt",attrs:{to:"/"}},[e._v("home")]),n("router-link",{staticClass:"nav-opt",attrs:{to:"/dex/ou"}},[e._v("battle dex")]),n("router-link",{staticClass:"nav-opt",attrs:{to:"/battlepark"}},[e._v("battle park")]),n("p",{staticClass:"nav-update"},[e._v("latest update: 08/2020")])],1),n("div",[n("label",{staticClass:"nav-theme"},[e._v("Theme:")]),n("select",{on:{change:e.setTheme}},[n("option",{attrs:{value:"light"}},[e._v("Light")]),n("option",{attrs:{value:"dark"}},[e._v("Dark")])])])])},o=[],c={methods:{setTheme:function(e){this.$store.commit("dex/SET_THEME",e.target.value)}},computed:{tier:function(){return this.$route.params.tier},pokemon:function(){return this.$route.params.pokemon}}},u=c,l=(n("ed6b"),n("2877")),d=Object(l["a"])(u,i,o,!1,null,null,null),f=d.exports,h={components:{NavBar:f}},m=h,p=(n("5c0b"),Object(l["a"])(m,r,s,!1,null,null,null)),g=p.exports,b=(n("d3b7"),n("8c4f"));a["a"].use(b["a"]);var k=[{path:"/",name:"home",components:{desktop:function(){return n.e("chunk-d2070820").then(n.bind(null,"e0c8"))},mobile:function(){return n.e("chunk-699b6dd7").then(n.bind(null,"4383"))}}},{path:"/dex/:tier",name:"tier",components:{desktop:function(){return Promise.all([n.e("chunk-741f5406"),n.e("chunk-5c097eba"),n.e("chunk-891bc77e")]).then(n.bind(null,"1b2f"))},mobile:function(){return Promise.all([n.e("chunk-741f5406"),n.e("chunk-7e78c016")]).then(n.bind(null,"2f65"))}}},{path:"/dex/:tier/:pokemon",name:"pokemonviewer",components:{mobile:function(){return Promise.all([n.e("chunk-741f5406"),n.e("chunk-5c097eba"),n.e("chunk-65869b11")]).then(n.bind(null,"107e"))}}},{path:"/battlepark",name:"battlepark",components:{desktop:function(){return Promise.all([n.e("chunk-741f5406"),n.e("chunk-edfcc9b4")]).then(n.bind(null,"af08"))},mobile:function(){return Promise.all([n.e("chunk-741f5406"),n.e("chunk-61101ea0")]).then(n.bind(null,"6d3b"))}}},{path:"/battlepark/:tier/:id",name:"sharemyteam",components:{desktop:function(){return Promise.all([n.e("chunk-741f5406"),n.e("chunk-4a436443")]).then(n.bind(null,"f749"))},mobile:function(){return Promise.all([n.e("chunk-741f5406"),n.e("chunk-4a436443")]).then(n.bind(null,"f749"))}}}],v=new b["a"]({mode:"history",base:"/",routes:k}),y=v,T=n("2f62"),S=function(e){return e.selectedPokemon},E=function(e){return 0!=e.battledex},P=function(e){return e.battledex},A=function(e){return function(t){return e.battledex[t]}},w=function(e){return e.isLoading},x=function(e){return e.theme},D={getTheme:x,getBattledex:P,getSelectedPokemon:S,getSelectFromBattledex:A,isBattleDexAvailable:E,isLoading:w},O=function(e,t){e.battledex=t},_=function(e,t){e.selectedPokemon=t},L=function(e,t){e.isLoading=t},C=function(e,t){e.theme=t},M={SET_BATTLEDEX:O,SET_LOADING_STATE:L,SET_SELECTED_POKEMON:_,SET_THEME:C},j={battledex:!1,selectedPokemon:!1,isLoading:!1,theme:"light"},B={namespaced:!0,state:j,getters:D,mutations:M},N=function(e){return e.battleResults},R=function(e){return function(t){return-1!==t?e.battleResults[t]:e.overall.battleResults}},K=function(e){return function(t){return-1!==t?e.battleSize:e.overall.battleSize}},$=function(e){return e.battleSize},F=function(e){return e.customizedBattleResults},z=function(e){return e.selectedAllyPokemon},I={getBattleResults:N,getBattleSize:$,getCustomizedBattleResults:F,getSelectedAllyPokemon:z,getBattleResultsByKey:R,getBattleSizeByKey:K},H=(n("a434"),n("b64b"),n("5530")),U=n("b85c"),Y=n("dc4e");function G(e,t){var n=0,a=e.length;while(n<a){var r=n+a>>>1;e[r].damageTaken>t?n=r+1:a=r}return n}var J=function(e,t){var n,a={},r="",s={},i=[],o=Object(U["a"])(t.pokemon);try{for(o.s();!(n=o.n()).done;){var c=n.value;t.defense?(c.data.moves=c.moves,a[c.data.slug]=Object(Y["b"])(t.tier,Object(H["a"])(Object(H["a"])({},c.data),{},{spread:{stats:c.spread,nature:c.nature}}),t.weak,s)):a[c.data.slug]=Object(Y["a"])(t.tier,Object(H["a"])(Object(H["a"])({},c.data),{},{spread:{stats:c.spread,nature:c.nature}}),t.weak,s),r=c.data.slug}}catch(f){o.e(f)}finally{o.f()}for(var u in s)for(var l in s[u]){var d=G(i,s[u][l].damageTaken);i.splice(d,0,s[u][l])}e.overall.battleResults=i,e.overall.battleSize=i.length,e.battleResults=a,e.selectedAllyPokemon=r,e.battleSize=Object.keys(a[r]).length},X=function(e,t){e.selectedAllyPokemon=t},q={SET_BATTLE_RESULTS:J,SET_SELECTED_ALLY_POKEMON:X},V={},Q={battleResults:{},customizedBattleResults:{},battleSize:0,selectedAllyPokemon:{},overall:{battleResults:[],battleSize:0}},W={namespaced:!0,state:Q,getters:I,mutations:q,actions:V};a["a"].use(T["a"]);var Z=new T["a"].Store({modules:{dex:B,battle:W}}),ee=(n("6418"),{data:function(){return{dex:{ou:100,uu:100,nu:100,ru:100,ubers:100,vgc:50,bss:50,monotype:100,lc:5,nfe:100}}},computed:{battledex:function(){return this.$store.getters["dex/getBattledex"]},battledex_size:function(){return Object.keys(this.$store.getters["dex/getBattledex"]).length},getSelectedPokemon:function(){return this.$store.getters["dex/getSelectedPokemon"]},isLoading:function(){return this.$store.getters["dex/isLoading"]},isDexLoaded:function(){return this.$store.getters["dex/isBattleDexAvailable"]}},methods:{select:function(e,t){var n=this.$store.getters["dex/getSelectFromBattledex"](t);return void 0!==n?(n.key=t,n):{slug:t}},setSelectedPokemon:function(e){var t=this.select("battledex",e);this.$store.commit("dex/SET_SELECTED_POKEMON",t)},unsetSelectedPokemon:function(){this.$store.commit("dex/SET_SELECTED_POKEMON",!1)},getDefaultTierLevel:function(e){return this.dex[e]}}});function te(e){var t=e.$options.title;if(t)return"function"===typeof t?t.call(e):t}var ne={created:function(){var e=te(this);e&&(document.title=e)}},ae=n("873b");a["a"].config.productionTip=!1,a["a"].mixin(ee),a["a"].mixin(ne),a["a"].mixin(ae["a"]),new a["a"]({router:y,store:Z,render:function(e){return e(g)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},6418:function(e,t,n){},"873b":function(e,t,n){"use strict";t["a"]={computed:{theme:function(){return this.$store.getters["dex/getTheme"]},isMobile:function(){return window.innerWidth<=900}}}},"9c0c":function(e,t,n){},d5a8:function(e,t,n){},dc4e:function(e,t,n){"use strict";n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return T}));n("caad"),n("b0c0"),n("a9e3"),n("b680"),n("2532");var a=n("5530"),r=n("b85c"),s={normal:{weakTo:{fighting:2},resists:{ghost:0}},fighting:{weakTo:{flying:2,psychic:2,fairy:2},resists:{rock:.5,bug:.5,dark:.5}},flying:{weakTo:{electric:2,ice:2,rock:2},resists:{bug:.5,grass:.5,fighting:.5,ground:0}},poison:{weakTo:{psychic:2,ground:2},resists:{poison:.5,fighting:.5,bug:.5,grass:.5,fairy:.5}},ground:{weakTo:{water:2,ice:2,grass:2},resists:{poison:.5,rock:.5,electric:0}},rock:{weakTo:{fighting:2,steel:2,grass:2,ground:2,water:2},resists:{normal:.5,fire:.5,poison:.5,flying:.5}},bug:{weakTo:{flying:2,fire:2,rock:2},resists:{bug:.5,fighting:.5,grass:.5}},ghost:{weakTo:{ghost:2,dark:2},resists:{poison:.5,normal:0,fighting:0,bug:.5}},steel:{weakTo:{fire:2,fighting:2,ground:2},resists:{normal:.5,grass:.5,ice:.5,flying:.5,psychic:.5,bug:.5,rock:.5,poison:0,dragon:.5,steel:.5,fairy:.5}},fire:{weakTo:{water:2,rock:2,ground:2},resists:{fire:.5,grass:.5,bug:.5,steel:.5,fairy:.5,ice:.5}},water:{weakTo:{grass:2,electric:2},resists:{water:.5,ice:.5,fire:.5,steel:.5}},grass:{weakTo:{flying:2,poison:2,bug:2,fire:2,ice:2},resists:{water:.5,grass:.5,electric:.5,ground:.5}},electric:{weakTo:{ground:2},resists:{flying:.5,steel:.5,electric:.5}},psychic:{weakTo:{bug:2,ghost:2,dark:2},resists:{fighting:.5,psychic:.5}},ice:{weakTo:{fighting:2,rock:2,steel:2,fire:2},resists:{ice:.5}},dragon:{weakTo:{dragon:2,fairy:2,ice:2},resists:{water:.5,fire:.5,grass:.5,electric:.5}},dark:{weakTo:{fighting:2,fairy:2,bug:2},resists:{ghost:.5,fighting:.5,psychic:0}},fairy:{weakTo:{poison:2,steel:2},resists:{fighting:.5,bug:.5,dark:.5,dragon:0}}},i={HP:0,ATTACK:1,DEF:2,SPA:3,SPD:4,SPE:5},o={LONELY:{increase:i.ATTACK,decrease:i.DEF},ADAMANT:{increase:i.ATTACK,decrease:i.SPA},NAUGHTY:{increase:i.ATTACK,decrease:i.SPD},BRAVE:{increase:i.ATTACK,decrease:i.SPE},BOLD:{increase:i.DEF,decrease:i.ATTACK},IMPISH:{increase:i.DEF,decrease:i.SPA},LAX:{increase:i.DEF,decrease:i.SPD},RELAXED:{increase:i.DEF,decrease:i.SPE},MODEST:{increase:i.SPA,decrease:i.ATTACK},MILD:{increase:i.SPA,decrease:i.DEF},RASH:{increase:i.SPA,decrease:i.SPD},QUIET:{increase:i.SPA,decrease:i.SPE},CALM:{increase:i.SPD,decrease:i.ATTACK},GENTLE:{increase:i.SPD,decrease:i.DEF},CAREFUL:{increase:i.SPD,decrease:i.SPA},SASSY:{increase:i.SPD,decrease:i.SPE},TIMID:{increase:i.SPE,decrease:i.ATTACK},HASTY:{increase:i.SPE,decrease:i.DEF},JOLLY:{increase:i.SPE,decrease:i.SPA},NAIVE:{increase:i.SPE,decrease:i.SPD}},c={lifeorb:1.3},u={choiceband:1.5,choicespecs:1.5},l={"Shadow Shield":.5,Multiscale:.5,Filter:.75,"Solid Rock":.75},d=function(e,t){return t.includes(e)?1.5:1},f=function(e,t){var n,a=1,i=Object(r["a"])(t);try{for(i.s();!(n=i.n()).done;){var o=n.value;e in s[o].weakTo?a*=s[o].weakTo[e]:e in s[o].resists&&(a*=s[o].resists[e])}}catch(c){i.e(c)}finally{i.f()}return a},h={status:!1,physical:!0,special:!0},m={bss:50,vgc:50,lc:5,uu:100,ubers:100,ou:100,nfe:100,mono:100,ru:100};function p(e,t,n){return Math.floor((2*e[0]+31+Math.floor(t[0]/4))*n/100)+n+10}function g(e,t,n,a){var r=0;return r=Math.floor(1*(Math.floor((2*e[a]+31+Math.floor(t[a]/4))*n/100)+5)),r}function b(e,t){for(var n=[p(e.stats,e.spread.stats,t)],a=1;a<=5;a++)n.push(g(e.stats,e.spread.stats,t,a));var r=o[e.spread.nature.toUpperCase()];return void 0!==r&&(n[r.increase]=Math.floor(1.1*n[r.increase]),n[r.decrease]=Math.floor(.9*n[r.decrease])),n}function k(e){var t=Number(e.power);return t}function v(e,t,n,a){var r=0;switch(n.category){case"special":var s=1;u[t.item]&&(s=u[t.item]),r=t.stats[3]*s/e.stats[4];break;case"physical":var i=1;u[t.item]&&(i=u[t.item]),r=t.stats[1]*i/e.stats[2];break}var o=d(n.type,t.types),h=f(n.type,e.types),m=k(n),p=Math.floor(Math.floor(Math.floor(2*a/5+2)*m*r)/50)+2;return p*=o*h,c[t.item]&&(p*=c[t.item]),l[e.ability]&&(p*=l[e.ability]),(p/e.stats[0]*100).toFixed(1)}var y=function(e,t,n,a){var s=m[e],i={stats:b(t,s),types:t.types,ability:t.abilities[0][0].name};console.log(i);var o=[];for(var c in n)if(void 0===a[c]&&(a[c]={}),void 0!==n[c].spreads){n[c].spread=n[c].spreads[0][0];var u,l={stats:b(n[c],s),types:n[c].types,item:n[c].items[0].slug},d=Object(r["a"])(n[c].moves);try{for(d.s();!(u=d.n()).done;){var f=u.value;if(h[f.category]){void 0===a[c][f.name]&&(a[c][f.name]={});var p=v(i,l,f,s);o.push({damageTaken:p,attacker:c,move:f.name,nature:n[c].spread.nature,spread:n[c].spread.stats,item:n[c].items[0].slug}),p>100&&(p=100),a[c][f.name]={damageTaken:Number(p)/6+Number(a[c][f.name].damageTaken||0),attacker:c,move:f.name,nature:n[c].spread.nature,spread:n[c].spread.stats,item:n[c].items[0].slug}}}}catch(g){d.e(g)}finally{d.f()}}return o.sort((function(e,t){return t.damageTaken-e.damageTaken}))},T=function(e,t,n,s){var i=[],o=m[e],c={stats:b(t,o),types:t.types,ability:t.abilities[0][0].name,spread:Object(a["a"])({},t.spread)};console.log(c);var u,l=Object(r["a"])(n);try{for(l.s();!(u=l.n()).done;){var d=u.value,f=t.slug;void 0===s[f]&&(s[f]={}),d.spread=d.spreads[0][0];var h,p={stats:b(d,o),types:d.types,item:d.items[0].slug},g=Object(r["a"])(t.moves);try{for(g.s();!(h=g.n()).done;){var k=h.value;void 0===s[f][k.name]&&(s[f][k.name]={});var y=v(p,c,k,o);i.push({damageDealt:y,sufferer:d.slug,move:k.name,nature:d.spread.nature,spread:d.spread.stats,item:d.items[0].slug}),y>100&&(y=100),s[f][k.name]={damageDealt:Number(y)/6+Number(s[f][k.name].damageTaken||0),sufferer:d.slug,move:k.name,nature:d.spread.nature,spread:d.spread.stats,item:d.items[0].slug}}}catch(T){g.e(T)}finally{g.f()}}}catch(T){l.e(T)}finally{l.f()}return i.sort((function(e,t){return t.damageDealt-e.damageDealt}))}},ed6b:function(e,t,n){"use strict";var a=n("d5a8"),r=n.n(a);r.a}});
//# sourceMappingURL=app.17540913.js.map