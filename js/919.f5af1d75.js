"use strict";(self["webpackChunkshopping_test"]=self["webpackChunkshopping_test"]||[]).push([[919],{8711:function(e,r,s){s.d(r,{Z:function(){return u}});var o=s(3396);const a={class:"items"},n={class:"item"},t={class:"item"};function d(e,r){const s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("div",n,[(0,o.Wm)(s,{to:"OrderView"},{default:(0,o.w5)((()=>[(0,o.Uk)("訂單查詢")])),_:1})]),(0,o._)("div",t,[(0,o.Wm)(s,{to:"Member"},{default:(0,o.w5)((()=>[(0,o.Uk)("會員資料")])),_:1})])])}var m=s(89);const i={},l=(0,m.Z)(i,[["render",d],["__scopeId","data-v-70d65ab8"]]);var u=l},1919:function(e,r,s){s.r(r),s.d(r,{default:function(){return z}});var o=s(3396),a=s(7139),n=s(9242);const t=e=>((0,o.dD)("data-v-211710d2"),e=e(),(0,o.Cn)(),e),d={class:"box"},m=t((()=>(0,o._)("label",{for:"user"},"姓名",-1))),i={key:0,class:"error-message"},l=t((()=>(0,o._)("br",null,null,-1))),u=t((()=>(0,o._)("label",{for:"address"},"地址",-1))),p={key:1,class:"error-message"},c=t((()=>(0,o._)("br",null,null,-1))),h=t((()=>(0,o._)("label",{for:"phone"},"手機號碼",-1))),w={key:2,class:"error-message"},b=t((()=>(0,o._)("br",null,null,-1))),_=t((()=>(0,o._)("label",{for:"password"},"密碼",-1))),k={key:3,class:"error-message"},f=t((()=>(0,o._)("br",null,null,-1))),y=t((()=>(0,o._)("label",{for:"confirmPassword"},"確認密碼",-1))),g={key:4,class:"error-message"};function v(e,r,s,t,v,q){const P=(0,o.up)("OrderEle");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(P),(0,o._)("div",d,[(0,o._)("h1",null,"會員資料"+(0,a.zw)(v.member.username),1),m,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":r[0]||(r[0]=e=>v.member.username=e),type:"text",id:"user",name:"user",required:""},null,512),[[n.nr,v.member.username]]),v.errors.username?((0,o.wg)(),(0,o.iD)("div",i,(0,a.zw)(v.errors.username),1)):(0,o.kq)("",!0),l,u,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":r[1]||(r[1]=e=>v.member.address=e),type:"text",id:"address",name:"address",required:""},null,512),[[n.nr,v.member.address]]),v.errors.address?((0,o.wg)(),(0,o.iD)("div",p,(0,a.zw)(v.errors.address),1)):(0,o.kq)("",!0),c,h,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":r[2]||(r[2]=e=>v.member.phone=e),type:"tel",id:"phone",name:"phone",required:""},null,512),[[n.nr,v.member.phone]]),v.errors.phone?((0,o.wg)(),(0,o.iD)("div",w,(0,a.zw)(v.errors.phone),1)):(0,o.kq)("",!0),b,_,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":r[3]||(r[3]=e=>v.member.password=e),type:"password",id:"password",name:"password",required:""},null,512),[[n.nr,v.member.password]]),v.errors.password?((0,o.wg)(),(0,o.iD)("div",k,(0,a.zw)(v.errors.password),1)):(0,o.kq)("",!0),f,y,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":r[4]||(r[4]=e=>v.member.checkPassword=e),type:"password",id:"confirmPassword",name:"confirmPassword",required:""},null,512),[[n.nr,v.member.checkPassword]]),v.errors.checkPassword?((0,o.wg)(),(0,o.iD)("div",g,(0,a.zw)(v.errors.checkPassword),1)):(0,o.kq)("",!0),(0,o._)("button",{onClick:r[5]||(r[5]=e=>q.change(v.member.id)),class:"btn"},"確認修改")])],64)}var q=s(8711),P={data(){return{username:"",password:"",phone:"",checkPassword:"",address:"",member:{},errors:{}}},components:{OrderEle:q.Z},computed:{userInfo(){return this.$store.state.userInfo}},created(){this.member=this.userInfo},methods:{change(e){this.errors={},this.username.match(/^[A-Za-z\u4e00-\u9fa5]+$/)||(this.errors.name="姓名只能包含中英文字符"),/^\d{10}$/.test(this.member.phone)||(this.errors.phone="手機號碼必須是10位數"),this.password!==this.checkPassword&&(this.errors.password="密碼不一致",this.errors.checkPassword="密碼不一致");let r={username:this.member.username,phone:this.member.phone,address:this.member.address,password:this.member.password};this.$axios.patch("https://my-json-server.typicode.com/Wayne-Chou/shopping/member"+e,r).then((()=>{this.$axios.get("https://my-json-server.typicode.com/Wayne-Chou/shopping/member"+e).then((e=>{this.member=e.data,this.$store.commit("setUserInfo",e.data),console.log("member",e)}))}))}}},D=s(89);const U=(0,D.Z)(P,[["render",v],["__scopeId","data-v-211710d2"]]);var z=U}}]);
//# sourceMappingURL=919.f5af1d75.js.map