"use strict";(self["webpackChunkshopping_test"]=self["webpackChunkshopping_test"]||[]).push([[280],{8711:function(e,t,s){s.d(t,{Z:function(){return m}});var i=s(3396);const o={class:"items"},n={class:"item"},r={class:"item"};function d(e,t){const s=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",o,[(0,i._)("div",n,[(0,i.Wm)(s,{to:"OrderView"},{default:(0,i.w5)((()=>[(0,i.Uk)("訂單查詢")])),_:1})]),(0,i._)("div",r,[(0,i.Wm)(s,{to:"Member"},{default:(0,i.w5)((()=>[(0,i.Uk)("會員資料")])),_:1})])])}var a=s(89);const c={},l=(0,a.Z)(c,[["render",d],["__scopeId","data-v-70d65ab8"]]);var m=l},4280:function(e,t,s){s.r(t),s.d(t,{default:function(){return C}});var i=s(3396),o=s(7139);const n={class:"container"},r={key:0},d={key:1},a={class:"item-img"},c=["src"],l={class:"item-title"},m={class:"item-number"},h={class:"item-cost"},u={class:"member"},p={class:"item-name"},v={class:"item-phone"},g={class:"item-selectedArea"},y={class:"item-SevenShop"},_=["disabled","onClick"];function w(e,t,s,w,f,b){const k=(0,i.up)("OrderEle");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(k),(0,i._)("div",n,[0===f.delivery.length?((0,i.wg)(),(0,i.iD)("div",r,"您沒有任何訂單")):((0,i.wg)(),(0,i.iD)("div",d,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(f.delivery,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{key:t},[(0,i._)("div",null,[(0,i._)("div",a,[(0,i._)("img",{src:e.img,alt:""},null,8,c)]),(0,i._)("div",l,(0,o.zw)(e.title),1),(0,i._)("div",m,(0,o.zw)(e.id),1),(0,i._)("div",h,(0,o.zw)(e.cost),1)])])))),128))])),(0,i._)("div",u,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(f.member,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{key:t},[(0,i._)("div",p,(0,o.zw)(e.name),1),(0,i._)("div",v,(0,o.zw)(e.phone),1),(0,i._)("div",g,(0,o.zw)(e.selectedAreaName),1),(0,i._)("div",y,(0,o.zw)(e.SevenShopName),1),(0,i._)("button",{disabled:!1===e.status,onClick:t=>b.cancel(e.id)}," 取消訂單 ",8,_)])))),128))])])],64)}s(560);var f=s(8711),b={data(){return{delivery:[],products:[],orders:[],member:[]}},components:{OrderEle:f.Z},computed:{loginedUserInfo(){return this.$store.getters.loginedUserInfo}},created(){this.$axios.get("https://my-json-server.typicode.com/Wayne-Chou/shopping/products").then((e=>{this.products=e.data})),this.$axios.get("https://my-json-server.typicode.com/Wayne-Chou/shopping/orders").then((e=>{this.orders=e.data.filter((e=>e.userId===this.loginedUserInfo.id)),this.orders.forEach((e=>{e.productNumber.forEach((e=>{this.delivery.push(this.products.find((t=>t.id===e)))}))}))})),this.$axios.get("https://my-json-server.typicode.com/Wayne-Chou/shopping/sevenDatil").then((e=>{this.member=e.data,console.log("member",e)}))},methods:{cancel(e){let t={status:!1};this.$axios.patch("https://my-json-server.typicode.com/Wayne-Chou/shopping/sevenDatil"+e,t).then((()=>{this.$axios.get("https://my-json-server.typicode.com/Wayne-Chou/shopping/sevenDatil").then((e=>{this.member=e.data,console.log("member",e)}))}))}}},k=s(89);const D=(0,k.Z)(b,[["render",w],["__scopeId","data-v-4cd8e2e8"]]);var C=D}}]);
//# sourceMappingURL=280.3d01b264.js.map