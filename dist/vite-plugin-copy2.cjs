"use strict";function e(e,r,t,n,a,u,c){try{var i=e[u](c);var s=i.value}catch(o){t(o);return}if(i.done){r(s)}else{Promise.resolve(s).then(n,a)}}function r(r){return function(){var t=this,n=arguments;return new Promise(function(a,u){var c=r.apply(t,n);function i(r){e(c,a,u,i,s,"next",r)}function s(r){e(c,a,u,i,s,"throw",r)}i(undefined)})}}import t from"regenerator-runtime";var n=Object.defineProperty;var a=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var c=Object.prototype.hasOwnProperty;var i=function(e,r){for(var t in r)n(e,t,{get:r[t],enumerable:!0})},s=function(e,r,t,i){var s=true,o=false,f=undefined;if(r&&typeof r=="object"||typeof r=="function")try{var p=function(){var u=v.value;!c.call(e,u)&&u!==t&&n(e,u,{get:function(){return r[u]},enumerable:!(i=a(r,u))||i.enumerable})};for(var l=u(r)[Symbol.iterator](),v;!(s=(v=l.next()).done);s=true)p()}catch(x){o=true;f=x}finally{try{if(!s&&l.return!=null){l.return()}}finally{if(o){throw f}}}return e};var o=function(e){return s(n({},"__esModule",{value:!0}),e)};var f={};i(f,{VitePluginCopy:function(){return h}});module.exports=o(f);var p=require("fs"),l=require("fs/promises"),v=require("path");function x(e){return $.apply(this,arguments)}function $(){$=r(t.mark(function e(e){var n;return t.wrap(function e(a){while(1)switch(a.prev=a.next){case 0:n=(0,v.dirname)(e);a.next=3;return(0,l.access)(n,p.constants.F_OK).catch(function(){var e=r(t.mark(function e(r){return t.wrap(function e(t){while(1)switch(t.prev=t.next){case 0:t.t0=r.code=="ENOENT";if(!t.t0){t.next=4;break}t.next=4;return x(n);case 4:case"end":return t.stop()}},e)}));return function(r){return e.apply(this,arguments)}}());case 3:a.next=5;return(0,l.access)(e,p.constants.F_OK).catch(function(){var e=r(t.mark(function e(r){return t.wrap(function e(t){while(1)switch(t.prev=t.next){case 0:t.t0=r.code=="ENOENT";if(!t.t0){t.next=4;break}t.next=4;return(0,l.mkdir)(e);case 4:case"end":return t.stop()}},e)}));return function(r){return e.apply(this,arguments)}}());case 5:case"end":return a.stop()}},e)}));return $.apply(this,arguments)}function h(e){return{name:"vit-plugin-copy2",apply:"build",generateBundle:r(t.mark(function r(){var n,a,u,c,i,s,o,f,l,$,h,y,_,w;return t.wrap(function r(t){while(1)switch(t.prev=t.next){case 0:n=true,a=false,u=undefined,c=true,i=false,s=undefined;if(!Array.isArray(e)){t.next=53;break}t.prev=2;o=e[Symbol.iterator]();case 4:if(c=(f=o.next()).done){t.next=39;break}l=f.value,$=l.src,h=l.dest;t.next=8;return x(h);case 8:if(!(t.sent,Array.isArray($))){t.next=34;break}t.prev=9;y=$[Symbol.iterator]();case 11:if(n=(_=y.next()).done){t.next=18;break}w=_.value;t.next=15;return(0,p.copyFileSync)(w,(0,v.join)(h,(0,v.basename)(w)));case 15:n=true;t.next=11;break;case 18:t.next=24;break;case 20:t.prev=20;t.t0=t["catch"](9);a=true;u=t.t0;case 24:t.prev=24;t.prev=25;if(!n&&y.return!=null){y.return()}case 27:t.prev=27;if(!a){t.next=30;break}throw u;case 30:return t.finish(27);case 31:return t.finish(24);case 32:t.next=36;break;case 34:t.next=36;return(0,p.copyFileSync)($,(0,v.join)(h,(0,v.basename)($)));case 36:c=true;t.next=4;break;case 39:t.next=45;break;case 41:t.prev=41;t.t1=t["catch"](2);i=true;s=t.t1;case 45:t.prev=45;t.prev=46;if(!c&&o.return!=null){o.return()}case 48:t.prev=48;if(!i){t.next=51;break}throw s;case 51:return t.finish(48);case 52:return t.finish(45);case 53:case"end":return t.stop()}},r,null,[[2,41,45,53],[9,20,24,32],[25,,27,31],[46,,48,52]])}))}}0&&(module.exports={VitePluginCopy:VitePluginCopy})