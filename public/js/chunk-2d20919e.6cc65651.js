(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20919e"],{a82c:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"tier"},[o("PokemonView",{attrs:{pokemon:e.getSelectedPokemon}})],1)},a=[],s=o("6a76"),c=o("bc3a"),i=o.n(c),r={components:{PokemonView:s["a"]},created:function(){var e=this,t=this.$route.params.tier,o=this.$route.params.pokemon;i.a.post("/pokemon",{pokemon:o,tier:t}).then((function(t){e.$store.commit("set_selectedPokemon",t.data.pokemon)}))}},m=r,p=o("2877"),u=Object(p["a"])(m,n,a,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d20919e.6cc65651.js.map