"use strict";(self["webpackChunkshopping_test"]=self["webpackChunkshopping_test"]||[]).push([[255],{1255:function(e,s,r){r.r(s),r.d(s,{default:function(){return J}});var a=r(3396),o=r(9242),d=r(7139);const t=e=>((0,a.dD)("data-v-18016560"),e=e(),(0,a.Cn)(),e),l={class:"panel-group container"},i=(0,a.uE)('<input type="radio" name="panel-radio" id="radio1" class="panel-control" checked data-v-18016560><input type="radio" name="panel-radio" id="radio2" class="panel-control" data-v-18016560><div class="tab-group" data-v-18016560><label for="radio1" class="active" data-v-18016560>登入</label><label for="radio2" data-v-18016560>註冊</label></div>',3),n={class:"content-group"},p={class:"content content1"},u={class:"box"},h=t((()=>(0,a._)("label",{for:"user_name"},"信箱",-1))),c=t((()=>(0,a._)("br",null,null,-1))),m=t((()=>(0,a._)("label",{for:"password"},"密碼",-1))),w=t((()=>(0,a._)("br",null,null,-1))),_={class:"content content2"},b={class:"box"},v=t((()=>(0,a._)("label",{for:"username"},"信箱",-1))),k={key:0,class:"error-message"},g=t((()=>(0,a._)("br",null,null,-1))),y=t((()=>(0,a._)("label",{for:"r_password"},"密碼",-1))),f={key:1,class:"error-message"},q=t((()=>(0,a._)("br",null,null,-1))),S=t((()=>(0,a._)("label",{for:"check_password"},"確認密碼",-1))),D={key:2,class:"error-message"},x=t((()=>(0,a._)("br",null,null,-1))),U=t((()=>(0,a._)("label",{for:"phone"},"手機號碼",-1))),C={key:3,class:"error-message"},V=t((()=>(0,a._)("br",null,null,-1))),$=t((()=>(0,a._)("label",{for:"address"},"地址",-1))),z={key:4,class:"error-message"},T=t((()=>(0,a._)("br",null,null,-1))),j={key:0,class:"error modal_box"},I=t((()=>(0,a._)("div",{class:"modal"},[(0,a._)("div",{class:"modal_header"},[(0,a._)("h5",{class:"modal_title"},"帳號密碼不能為空")])],-1))),W=[I],Z={key:1,class:"success modal_box"},A=t((()=>(0,a._)("div",{class:"modal"},[(0,a._)("div",{class:"modal_header"},[(0,a._)("h5",{class:"modal_title"},"登入成功!")])],-1))),E=[A],H={key:2,class:"fail modal_box"},M=t((()=>(0,a._)("div",{class:"modal"},[(0,a._)("div",{class:"modal_header"},[(0,a._)("h5",{class:"modal_title"},"登入失敗")])],-1))),O=[M];function Y(e,s,r,t,I,A){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",l,[i,(0,a._)("div",n,[(0,a._)("div",p,[(0,a._)("div",u,[h,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>I.username=e),type:"email",id:"user_name",name:"username",required:""},null,512),[[o.nr,I.username]]),c,m,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":s[1]||(s[1]=e=>I.password=e),type:"password",id:"password",name:"password",required:""},null,512),[[o.nr,I.password]]),w,(0,a._)("button",{onClick:s[2]||(s[2]=(...e)=>A.login&&A.login(...e)),class:"login"},"登入")])]),(0,a._)("div",_,[(0,a._)("div",b,[v,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":s[3]||(s[3]=e=>I.username=e),type:"email",id:"username",name:"username",required:""},null,512),[[o.nr,I.username]]),I.errors.username?((0,a.wg)(),(0,a.iD)("div",k,(0,d.zw)(I.errors.username),1)):(0,a.kq)("",!0),g,y,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":s[4]||(s[4]=e=>I.password=e),type:"password",id:"r_password",name:"password",required:""},null,512),[[o.nr,I.password]]),I.errors.password?((0,a.wg)(),(0,a.iD)("div",f,(0,d.zw)(I.errors.password),1)):(0,a.kq)("",!0),q,S,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":s[5]||(s[5]=e=>I.check_password=e),type:"password",id:"check_password",name:"password",required:""},null,512),[[o.nr,I.check_password]]),I.errors.check_password?((0,a.wg)(),(0,a.iD)("div",D,(0,d.zw)(I.errors.check_password),1)):(0,a.kq)("",!0),x,U,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":s[6]||(s[6]=e=>I.phone=e),type:"text",id:"phone",name:"phone",required:""},null,512),[[o.nr,I.phone]]),I.errors.phone?((0,a.wg)(),(0,a.iD)("div",C,(0,d.zw)(I.errors.phone),1)):(0,a.kq)("",!0),V,$,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":s[7]||(s[7]=e=>I.address=e),type:"text",id:"address",name:"address",required:""},null,512),[[o.nr,I.address]]),I.errors.address?((0,a.wg)(),(0,a.iD)("div",z,(0,d.zw)(I.errors.address),1)):(0,a.kq)("",!0),T,(0,a._)("button",{onClick:s[8]||(s[8]=(...e)=>A.register&&A.register(...e)),class:"register"},"註冊")])])])]),I.errorShow?((0,a.wg)(),(0,a.iD)("div",j,W)):I.successShow?((0,a.wg)(),(0,a.iD)("div",Z,E)):I.failShow?((0,a.wg)(),(0,a.iD)("div",H,O)):(0,a.kq)("",!0)],64)}r(560);var B={data(){return{errorShow:!1,successShow:!1,failShow:!1,username:"",password:"",check_password:"",phone:"",address:"",member:[],errors:{}}},created(){this.$axios.get("https://my-json-server.typicode.com/Wayne-Chou/shopping/member").then((e=>{this.member=e.data}))},methods:{register(){if(this.errors={},this.username.match(/^[A-Za-z\u4e00-\u9fa5]+$/)?this.errors.username="不能為空":this.errors.username="姓名只能包含中英文字符",/^\d{10}$/.test.phone?this.errors.phone="不能為空":this.errors.phone="手機號碼必須是10位數",this.password!==this.check_password?(this.errors.password="密碼不一致",this.errors.check_password="密碼不一致"):(this.errors.password="不能為空",this.errors.check_password="不能為空"),""===this.address&&(this.errors.address="地址不能為空"),0===Object.keys(this.errors).length){let e={username:this.username,password:this.password,check_password:this.check_password,phone:this.phone,address:this.address};this.$axios.post("https://my-json-server.typicode.com/Wayne-Chou/shopping/member",e).then((()=>{this.$store.commit("setUserInfo",e)}))}},login(){if(""===this.username&&""===this.password)setTimeout((()=>{this.errorShow=!0}),1e3),setTimeout((()=>{this.errorShow=!1}),5e3);else if(this.member.find((e=>e.username===this.username&&e.password===this.password))){let e=this.member.find((e=>e.username===this.username&&e.password===this.password));this.$store.commit("setUserInfo",e),setTimeout((()=>{this.successShow=!0,console.log(78)}),1e3),setTimeout((()=>{this.successShow=!1,this.$router.push({name:"Member"}),console.log(1651)}),5e3)}else setTimeout((()=>{this.failShow=!0}),1e3),setTimeout((()=>{this.failShow=!1}),5e3)}}},F=r(89);const G=(0,F.Z)(B,[["render",Y],["__scopeId","data-v-18016560"]]);var J=G}}]);
//# sourceMappingURL=255.69cce620.js.map