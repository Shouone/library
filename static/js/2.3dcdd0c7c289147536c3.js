webpackJsonp([2],{"/GWY":function(t,n){},"1kS7":function(t,n){n.f=Object.getOwnPropertySymbols},Dd8w:function(t,n,e){"use strict";n.__esModule=!0;var o,c=e("woOf"),s=(o=c)&&o.__esModule?o:{default:o};n.default=s.default||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}},NpIQ:function(t,n){n.f={}.propertyIsEnumerable},QV70:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("Dd8w"),c=e.n(o),s=e("uGP+"),r={props:{numall:{type:Number,default:!1},numprice:{type:Number,default:!1}},data:function(){return{}},created:function(){},methods:{},computed:{},components:{}},i={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"jiesuan"},[n("p",[this._v("合计："+this._s(this.numprice)+" 元")]),this._v(" "),n("button",[this._v("结算（"+this._s(this.numall)+"）")])])},staticRenderFns:[]};var a=e("VU/8")(r,i,!1,function(t){e("nHFS")},"data-v-4a8c22c6",null).exports,u=e("NYxO"),l=e("Cpzh"),f={data:function(){return{}},created:function(){},watch:{},methods:{add:function(t){this.$store.commit(l.a,t)},reduce:function(t){this.$store.commit(l.c,t)},remove:function(t){this.$store.commit(l.d,t)}},computed:c()({cartList:function(){return this.$store.state.cartList}},Object(u.b)(["count"]),Object(u.b)(["price"])),components:{Mheader:s.a,Jiesuan:a}},d={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("Mheader",[t._v("购物")]),t._v(" "),e("div",{staticClass:"content"},[e("ul",{staticClass:"bookList"},t._l(t.cartList,function(n,o){return e("li",[e("img",{attrs:{src:n.bookCover,alt:""}}),t._v(" "),e("div",{staticClass:"bookInfo"},[e("h3",[t._v(t._s(n.bookName))]),t._v(" "),e("p",[t._v("单价："+t._s(n.bookPrice))]),t._v(" "),e("p",[e("button",{staticClass:"btn1",on:{click:function(e){t.reduce(n)}}},[t._v("-")]),t._v("\n          "+t._s(n.bookCount)+"\n        "),e("button",{staticClass:"btn2",on:{click:function(e){t.add(n)}}},[t._v("+")])]),t._v(" "),e("button",{staticClass:"colect",on:{click:function(e){t.remove(n)}}},[t._v("删除")])])])})),t._v(" "),e("Jiesuan",{attrs:{numall:t.count,numprice:t.price}})],1)],1)},staticRenderFns:[]};var v=e("VU/8")(f,d,!1,function(t){e("/GWY")},"data-v-c442a13e",null);n.default=v.exports},R4wc:function(t,n,e){var o=e("kM2E");o(o.S+o.F,"Object",{assign:e("To3L")})},To3L:function(t,n,e){"use strict";var o=e("lktj"),c=e("1kS7"),s=e("NpIQ"),r=e("sB3e"),i=e("MU5D"),a=Object.assign;t.exports=!a||e("S82l")(function(){var t={},n={},e=Symbol(),o="abcdefghijklmnopqrst";return t[e]=7,o.split("").forEach(function(t){n[t]=t}),7!=a({},t)[e]||Object.keys(a({},n)).join("")!=o})?function(t,n){for(var e=r(t),a=arguments.length,u=1,l=c.f,f=s.f;a>u;)for(var d,v=i(arguments[u++]),p=l?o(v).concat(l(v)):o(v),_=p.length,b=0;_>b;)f.call(v,d=p[b++])&&(e[d]=v[d]);return e}:a},V3tA:function(t,n,e){e("R4wc"),t.exports=e("FeBl").Object.assign},nHFS:function(t,n){},woOf:function(t,n,e){t.exports={default:e("V3tA"),__esModule:!0}}});
//# sourceMappingURL=2.3dcdd0c7c289147536c3.js.map