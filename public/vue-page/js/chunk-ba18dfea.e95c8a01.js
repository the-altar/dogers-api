(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ba18dfea"],{"04f4":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"mysquad"},[a("BreakMyTeam",{attrs:{latestEntries:t.le}})],1)},n=[],r=a("bc3a"),o=a.n(r),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"square"},[a("div",{staticClass:"square__options"},[a("button",[t._v(" Latest entries ")]),a("button",{staticClass:"square_upload",on:{click:function(e){return t.activateModal("yourUploads","modal--long")}}},[t._v(" Your uploads ")]),a("button",{staticClass:"square_upload",on:{click:function(e){return t.activateModal("importSlot","modal--large")}}},[t._v("new team")])]),a("LatestEntries",{attrs:{teams:t.latestEntries}}),a("transition",{attrs:{name:"bounce"}},[t.uploadModal?a("Modal",{attrs:{sizeClass:t.modalSize},on:{"close-my-modal":function(e){t.uploadModal=!1}}},[a(t.selectedComponent,{tag:"component"})],1):t._e()],1)],1)},l=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"square_latest"},[a("div",{staticClass:"square_latest_entries"},t._l(t.teams,(function(e,s){return a("div",{key:s,staticClass:"square_latest_entry"},[a("div",{staticClass:"square_latest_entry_members"},t._l(e.teamMembers,(function(t,e){return a("div",{key:e},[a("img",{attrs:{src:"/2d/"+t.name+".png"}})])})),0),a("div",{staticClass:"square_latest_entry_tier",class:e.tier},[a("p",[t._v(t._s(e.tier))])]),a("button",{staticClass:"square_latest_entry_visit",on:{click:function(a){return t.$router.push({path:"/mysquad/shared/"+e.tier+"/"+e._id})}}},[t._v("view")])])})),0)])},u=[],d={props:["teams"]},f=d,m=a("2877"),p=Object(m["a"])(f,c,u,!1,null,null,null),_=p.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"square_import"},[a("h1",[t._v("Import text from pokemon showdown and select a tier to proceed")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.rawData,expression:"rawData"}],staticClass:"square_import_text",domProps:{value:t.rawData},on:{input:function(e){e.target.composing||(t.rawData=e.target.value)}}}),a("div",{staticClass:"square_import_format"},t._l(Object.keys(t.dex),(function(e,s){return a("div",{key:s,staticClass:"square_import_format_tier",class:{"square_import_format_tier-active":t.selectedTier==e},on:{click:function(a){if(a.target!==a.currentTarget)return null;t.selectedTier=e}}},[t._v(" "+t._s(e)+" ")])})),0),a("button",{staticClass:"square_upload square_upload--small",on:{click:function(e){return t.upload(!1)}}},[t._v("Save")])])},h=[],g=(a("4160"),a("d3b7"),a("159b"),function(){return a.e("chunk-2a61fdef").then(a.bind(null,"e6fe"))}),b={data:function(){return{selectedTier:"",rawData:"",loading:!1,localData:[]}},methods:{upload:function(t){var e=this;!1!==this.selectedTier&&(this.loading=!0,g().then((function(a){var s={};for(var n in s.pokemon=a.parseTeam(e.rawData),s.pokemon)void 0===s.pokemon[n].level&&(s.pokemon[n].level=e.dex[e.selectedTier]);s.raw=e.rawData,s.tier={defaultLevel:e.dex[e.selectedTier],alias:e.selectedTier},s.getData=t,o.a.post("/mysquad",s).then((function(t){if(t.data.sucess){var a=[];t.data.response.pokemon.forEach((function(t){a.push({name:t.data.slug})})),o.a.post("/mysquad/upload",{raw:t.data.response.raw,tier:t.data.response.tier,teamMembers:a}).then((function(t){1===t.data.code&&(e.localData.push(t.data.id),localStorage.setItem("saved",JSON.stringify(e.localData)),e.loading=!1,e.$router.push({path:t.data.path}))})).catch((function(t){alert(t)}))}else alert(t.data.message)}))})))}},created:function(){var t=JSON.parse(localStorage.getItem("saved"));null!==t&&(this.localData=t)}},y=b,C=Object(m["a"])(y,v,h,!1,null,null,null),S=C.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.uploaded,(function(e,s){return a("section",{key:s},[t._l(e.teamMembers,(function(t,e){return a("img",{key:e,attrs:{src:"/2d/"+t.name+".png"}})})),a("button",{on:{click:function(a){return t.$router.push({path:"/mysquad/shared/"+e.tier+"/"+e._id})}}},[t._v("edit")])],2)})),0)},M=[],k={data:function(){return{uploaded:[]}},created:function(){var t=this,e=JSON.parse(localStorage.getItem("saved"));e&&o.a.post("/mysquad/myuploads",e).then((function(e){t.uploaded=e.data})).catch((function(t){console.log(t)}))}},q=k,T=Object(m["a"])(q,L,M,!1,null,null,null),E=T.exports,w=a("cb15"),x={data:function(){return{uploadModal:!1,modalSize:"",selectedComponent:""}},components:{importSlot:S,yourUploads:E,LatestEntries:_,Modal:w["a"]},props:["latestEntries"],methods:{activateModal:function(t,e){this.selectedComponent=t,this.modalSize=e,this.uploadModal=!0}}},D=x,O=Object(m["a"])(D,i,l,!1,null,null,null),$=O.exports,N={title:"Battle Square",components:{BreakMyTeam:$},data:function(){return{team:"",parsed:!1,selectedTier:!1,loading:!1,tiers:{ou:100,vgc:50,bss:50,ru:100,nu:100,ubers:100,monotype:100,uu:100},le:[]}},created:function(){var t=this;this.loading=!1,o.a.post("/mysquad/shared/latest").then((function(e){t.le=e.data.teams}))}},j=N,P=Object(m["a"])(j,s,n,!1,null,null,null);e["default"]=P.exports},"159b":function(t,e,a){var s=a("da84"),n=a("fdbc"),r=a("17c2"),o=a("9112");for(var i in n){var l=s[i],c=l&&l.prototype;if(c&&c.forEach!==r)try{o(c,"forEach",r)}catch(u){c.forEach=r}}},"17c2":function(t,e,a){"use strict";var s=a("b727").forEach,n=a("a640"),r=a("ae40"),o=n("forEach"),i=r("forEach");t.exports=o&&i?[].forEach:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,e,a){"use strict";var s=a("23e7"),n=a("17c2");s({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},a640:function(t,e,a){"use strict";var s=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&s((function(){a.call(null,e||function(){throw 1},1)}))}},b727:function(t,e,a){var s=a("0366"),n=a("44ad"),r=a("7b0b"),o=a("50c4"),i=a("65f0"),l=[].push,c=function(t){var e=1==t,a=2==t,c=3==t,u=4==t,d=6==t,f=5==t||d;return function(m,p,_,v){for(var h,g,b=r(m),y=n(b),C=s(p,_,3),S=o(y.length),L=0,M=v||i,k=e?M(m,S):a?M(m,0):void 0;S>L;L++)if((f||L in y)&&(h=y[L],g=C(h,L,b),t))if(e)k[L]=g;else if(g)switch(t){case 3:return!0;case 5:return h;case 6:return L;case 2:l.call(k,h)}else if(u)return!1;return d?-1:c||u?u:k}};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6)}},cb15:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"modal",on:{click:function(e){return e.target!==e.currentTarget?null:t.closeMyModal(e)}}},[a("section",{staticClass:"modal__content",class:t.sizeClass},[a("div",{staticClass:"modal__bar"},[a("button",{staticClass:"modal__close",on:{click:t.closeMyModal}},[t._v("X")])]),a("section",{staticClass:"modal__settings"},[t._t("default")],2)])])},n=[],r={name:"Modal",props:["sizeClass"],methods:{closeMyModal:function(t){t.stopPropagation(),this.$emit("close-my-modal",!1)}}},o=r,i=a("2877"),l=Object(i["a"])(o,s,n,!1,null,null,null);e["a"]=l.exports},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-ba18dfea.e95c8a01.js.map