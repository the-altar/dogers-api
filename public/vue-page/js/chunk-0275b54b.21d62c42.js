(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0275b54b"],{"2ca0":function(e,t,r){"use strict";var a=r("23e7"),n=r("06cf").f,i=r("50c4"),s=r("5a34"),c=r("1d80"),o=r("ab13"),l=r("c430"),u="".startsWith,f=Math.min,v=o("startsWith"),h=!l&&!v&&!!function(){var e=n(String.prototype,"startsWith");return e&&!e.writable}();a({target:"String",proto:!0,forced:!h&&!v},{startsWith:function(e){var t=String(c(this));s(e);var r=i(f(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return u?u.call(t,a,r):t.slice(r,r+a.length)===a}})},5319:function(e,t,r){"use strict";var a=r("d784"),n=r("825a"),i=r("7b0b"),s=r("50c4"),c=r("a691"),o=r("1d80"),l=r("8aa5"),u=r("14c3"),f=Math.max,v=Math.min,h=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,d=/\$([$&'`]|\d\d?)/g,g=function(e){return void 0===e?e:String(e)};a("replace",2,(function(e,t,r,a){var L=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=a.REPLACE_KEEPS_$0,w=L?"$":"$0";return[function(r,a){var n=o(this),i=void 0==r?void 0:r[e];return void 0!==i?i.call(r,n,a):t.call(String(n),r,a)},function(e,a){if(!L&&b||"string"===typeof a&&-1===a.indexOf(w)){var i=r(t,e,this,a);if(i.done)return i.value}var o=n(e),h=String(this),p="function"===typeof a;p||(a=String(a));var d=o.global;if(d){var E=o.unicode;o.lastIndex=0}var x=[];while(1){var C=u(o,h);if(null===C)break;if(x.push(C),!d)break;var m=String(C[0]);""===m&&(o.lastIndex=l(h,s(o.lastIndex),E))}for(var O="",W=0,A=0;A<x.length;A++){C=x[A];for(var k=String(C[0]),y=f(v(c(C.index),h.length),0),$=[],I=1;I<C.length;I++)$.push(g(C[I]));var N=C.groups;if(p){var _=[k].concat($,y,h);void 0!==N&&_.push(N);var M=String(a.apply(void 0,_))}else M=S(k,h,y,$,N,a);y>=W&&(O+=h.slice(W,y)+M,W=y+k.length)}return O+h.slice(W)}];function S(e,r,a,n,s,c){var o=a+e.length,l=n.length,u=d;return void 0!==s&&(s=i(s),u=p),t.call(c,u,(function(t,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return r.slice(0,a);case"'":return r.slice(o);case"<":c=s[i.slice(1,-1)];break;default:var u=+i;if(0===u)return t;if(u>l){var f=h(u/10);return 0===f?t:f<=l?void 0===n[f-1]?i.charAt(1):n[f-1]+i.charAt(1):t}c=n[u-1]}return void 0===c?"":c}))}}))},c975:function(e,t,r){"use strict";var a=r("23e7"),n=r("4d64").indexOf,i=r("a640"),s=r("ae40"),c=[].indexOf,o=!!c&&1/[1].indexOf(1,-0)<0,l=i("indexOf"),u=s("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:o||!l||!u},{indexOf:function(e){return o?c.apply(this,arguments)||0:n(this,e,arguments.length>1?arguments[1]:void 0)}})},e6fe:function(e,t,r){"use strict";r.r(t),r.d(t,"parseTeam",(function(){return l}));r("4160"),r("caad"),r("c975"),r("fb6a"),r("b0c0"),r("a9e3"),r("ac1f"),r("2532"),r("5319"),r("1276"),r("2ca0"),r("159b");function a(e,t){e.startsWith("Ability:")&&(e=e.replace(/\s/g,"").split(":")[1].toLocaleLowerCase(),t.ability=e)}function n(e,t){e.startsWith("Level:")&&(e=e.replace(/\s/g,"").split(":")[1].toLocaleLowerCase(),t.level=Number(e))}function i(e,t){var r,a="";e=e.replace(/\s/g,"").split("@");var n=e[0].indexOf("(");if(n>-1&&"(M)"!==e[0].slice(n,n+3)&&"(F)"!==e[0].slice(n,n+3))for(var i=n+1;i<e[0].indexOf(")");i++)a+=e[0][i].toLocaleLowerCase();else a=e[0].includes("(")?e[0].slice(0,e[0].indexOf("(")).toLocaleLowerCase():e[0].toLocaleLowerCase();r=void 0===e[1]?"":e[1].toLocaleLowerCase().replace("-",""),t.name=a.replace("'",""),t.item=r}function s(e,t){t.spread=[0,0,0,0,0,0];var r={hp:0,atk:1,def:2,spa:3,spd:4,spe:5};e=e.split(":"),e[1].split(" / ").forEach((function(e){var a=e.replace(/[0-9' ']/g,"").toLocaleLowerCase(),n=Number(e.replace(/[^0-9]/g,""));t.spread[r[a]]=n}))}function c(e,t){t.ivs=[31,31,31,31,31,31];var r={hp:0,atk:1,def:2,spa:3,spd:4,spe:5};e=e.split(":"),e[1].split(" / ").forEach((function(e){var a=e.replace(/[0-9' ']/g,"").toLocaleLowerCase(),n=Number(e.replace(/[^0-9]/g,""));t.ivs[r[a]]=n}))}function o(e,t){t.moves=[];for(var r=0;r<e.length;r++){var a=e[r].replace(/[^a-zA-Z]/g,"");""!==a&&t.moves.push(a.toLocaleLowerCase())}}var l=function(e){for(var t=[],r=e.split("\n\n"),l=0;l<r.length;l++){var u={};if(r[l]<3)break;var f=r[l].split("\n");i(f[0],u),a(f[1],u);var v=2;v<f.length&&f[v].startsWith("Level:")&&(n(f[v],u),v++),v<f.length&&f[v].startsWith("Shiny:")&&v++,v<f.length&&f[v].startsWith("Happiness:")&&v++,v<f.length&&f[v].startsWith("EVs:")&&(s(f[v],u),v++),v<f.length&&f[v].includes("Nature")&&(u.nature=f[v].split(" ")[0].toLocaleLowerCase(),v++),v<f.length&&f[v].startsWith("IVs:")&&(c(f[v],u),v++),o(f.slice(v,f.length),u),t.push(u)}return t}}}]);
//# sourceMappingURL=chunk-0275b54b.21d62c42.js.map