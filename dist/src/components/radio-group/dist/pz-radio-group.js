!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["pz-radio-group"]=t():e["pz-radio-group"]=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){var n,r,u={};n=o(1),r=o(2),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports.default);var p="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;r&&(p.template=r),p.computed||(p.computed={}),Object.keys(u).forEach(function(e){var t=u[e];p.computed[e]=function(){return t}})},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"PZCheckboxGroup",data:function(){return{value:""}},watch:{value:function(e){}},computed:{},mounted:function(){this.$on("checkChange",this.checkChange)},methods:{checkChange:function(e,t){this.value=e,this.$emit("input",this.value,!1)}},components:{}}},function(e,t){e.exports=" <div class=radio-group> <slot></slot> </div> "}])});