"use strict";(self["webpackChunkshopping_test"]=self["webpackChunkshopping_test"]||[]).push([[243],{6243:function(t,i,s){s.r(i),s.d(i,{default:function(){return w}});var e=s(3396),r=s(7139);const o={class:"container"},d={key:0},n={key:1},a={class:"item-img"},c=["src"],h={class:"item-title"},l={class:"item-number"},u={class:"item-cost"};function f(t,i,s,f,g,p){return(0,e.wg)(),(0,e.iD)("div",o,[0===g.favorite.length?((0,e.wg)(),(0,e.iD)("div",d,"您的最愛是空的")):((0,e.wg)(),(0,e.iD)("div",n,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(g.favorite,((t,i)=>((0,e.wg)(),(0,e.iD)("div",{key:i},[(0,e._)("div",null,[(0,e._)("div",a,[(0,e._)("img",{src:t.img,alt:""},null,8,c)]),(0,e._)("div",h,(0,r.zw)(t.title),1),(0,e._)("div",l,(0,r.zw)(t.id),1),(0,e._)("div",u,(0,r.zw)(t.cost),1)])])))),128))]))])}s(560);var g={data(){return{wishList:[],products:[],favorite:[]}},created(){this.$axios.get("http://localhost:3000/products/").then((t=>{this.products=t.data})),this.$axios.get("http://localhost:3000/wishList/").then((t=>{this.wishList=t.data.filter((t=>t.userId===this.loginedUserInfo.id)),this.wishList.forEach((t=>{this.favorite.push(this.products.find((i=>i.id===t.productNumber)))}))}))},computed:{loginedUserInfo(){return this.$store.getters.loginedUserInfo}}},p=s(89);const v=(0,p.Z)(g,[["render",f],["__scopeId","data-v-35fcd37b"]]);var w=v}}]);
//# sourceMappingURL=243.fae89eca.js.map