(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65869b11"],{"107e":function(n,o,t){"use strict";t.r(o);var e=function(){var n=this,o=n.$createElement,t=n._self._c||o;return n.pokemon?t("Pokemon",{attrs:{pokemon:n.pokemon}}):n._e()},a=[],c=(t("99af"),t("24dd")),r={Pokemon:c["a"]},u=function(){return this.$route.params.pokemon},p={key:u},i={},s=t("bc3a"),m=t.n(s),k=function(n){var o=this,t=this.$route.params.tier;m.a.get("/pokemon/".concat(t,"/").concat(n)).then((function(n){o.pokemon=n.data.pokemon}))},d={key:k},f={data:function(){return{pokemon:!1}},components:r,computed:p,methods:i,watch:d,created:function(){var n=this,o=this.$route.params.tier,t=this.$route.params.pokemon;m.a.get("/pokemon/".concat(o,"/").concat(t)).then((function(o){n.pokemon=o.data.pokemon}))}},h=f,l=(t("e9ad"),t("2877")),w=Object(l["a"])(h,e,a,!1,null,null,null);o["default"]=w.exports},7795:function(n,o,t){},e9ad:function(n,o,t){"use strict";var e=t("7795"),a=t.n(e);a.a}}]);
//# sourceMappingURL=chunk-65869b11.a046f7f7.js.map