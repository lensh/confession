(function(e){function t(t){for(var n,i,l=t[0],s=t[1],u=t[2],f=0,p=[];f<l.length;f++)i=l[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);c&&c(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,l=1;l<r.length;l++){var s=r[l];0!==o[s]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var c=s;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("confession")],1)},a=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-main",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"正在生成链接"}},[r("h2",[e._v("表白页面自动生成")]),r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"你的名字",prop:"you"}},[r("el-input",{attrs:{placeholder:"不能为空"},model:{value:e.form.you,callback:function(t){e.$set(e.form,"you",t)},expression:"form.you"}})],1),r("el-form-item",{attrs:{label:"Ta的名字",prop:"ta"}},[r("el-input",{attrs:{placeholder:"不能为空"},model:{value:e.form.ta,callback:function(t){e.$set(e.form,"ta",t)},expression:"form.ta"}})],1),r("el-form-item",{attrs:{label:"有效期",prop:"valid_month"}},[r("el-input",{attrs:{placeholder:"单位:月"},model:{value:e.form.valid_month,callback:function(t){e.$set(e.form,"valid_month",e._n(t))},expression:"form.valid_month"}}),e.form.valid_month?r("p",[e._v("价格:200/月，合计"+e._s(e.price)+"元")]):e._e()],1),r("el-form-item",{attrs:{label:"表白话语",prop:"words"}},[r("el-input",{attrs:{type:"textarea",placeholder:"注意分行"},model:{value:e.form.words,callback:function(t){e.$set(e.form,"words",t)},expression:"form.words"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("生成链接")])],1)],1),r("el-dialog",{attrs:{title:"提示",visible:e.isShowDialog,width:"350px",center:""},on:{"update:visible":function(t){e.isShowDialog=t}}},[r("span",[e._v(e._s(e.desc)+" "+e._s(e.link))]),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.copyLink}},[e._v("复制链接")])],1)]),r("textarea",{staticStyle:{opacity:"0"},attrs:{id:"input"}})],1)},l=[],s=(r("dca8"),r("ac1f"),r("1276"),r("9911"),["亲爱的，做我女朋友吧！","你是一个活泼、可爱的女孩 ，善良且天真浪漫","虽然我们接触的时间不长，只有短短几个月","却让我感觉是那么的熟悉与开心","难以忘记初次见面的感觉，我被一种神奇的东西吸引","那时我的心七上八下的，我相信这就是一见钟情","那以后，你的一个微笑，一个表情，都深深的留在了我的心里","我一次次的更加确定，你就是我一直等待的人","只要你愿意，我可以陪你去任何你想去的地方","只要你愿意，我可以陪你去吃任何你喜欢吃的东西","只要你愿意，我可以陪你去做你想做的事","总之你愿意，我会一直陪着你","亲爱的，能够遇见你，对我来说是最大的幸福","在以后的日子里，也许有很多的无法确定","但唯一可以确定的是，我会一直珍惜你","陪伴是最长情的告白"]),u={you:[{required:!0,message:"请输入你的名字",trigger:"blur"},{min:1,max:10,message:"长度在 1 到 10 个字符",trigger:"blur"}],ta:[{required:!0,message:"请输入Ta的名字",trigger:"blur"},{min:1,max:10,message:"长度在 1 到 10 个字符",trigger:"blur"}],valid_month:[{required:!0,message:"请输入有效期"},{type:"number",message:"有效期必须为数字"}]},c={data:function(){return{loading:!1,isShowDialog:!1,link:"",desc:"",form:{you:"",ta:"",valid_month:"",words:""},rules:Object.freeze(u)}},computed:{price:function(){return 200*this.form.valid_month}},methods:{submitForm:function(){var e=this;this.$refs["form"].validate((function(t){if(!t)return e.$alert("请填写相关字段","提示"),!1;e.loading=!0;var r=e.form.words,n=r?r.split("\n"):s,o=Object.assign({},e.form,{words:n});e.createLink(o)}))},createLink:function(e){var t=this;this.$http.post("/api/getLink",e).then((function(e){return e.data})).then((function(e){var r=e.code,n=e.desc,o=e.link;t.loading=!1,t.isShowDialog=!0,t.desc=n,0==r&&(t.link=o)}))},copyLink:function(){var e=document.getElementById("input");e.value=this.link,e.select(),document.execCommand("copy"),this.$alert("复制成功","提示")}}},f=c,p=(r("99b2"),r("2877")),d=Object(p["a"])(f,i,l,!1,null,"ff050faa",null),m=d.exports,v={name:"App",components:{confession:m}},h=v,b=(r("034f"),Object(p["a"])(h,o,a,!1,null,null,null)),g=b.exports,y=r("bc3a"),_=r.n(y),w=r("2106"),x=r.n(w),k=r("5c96"),O=r.n(k);r("0fae");n["default"].use(x.a,_.a),n["default"].use(O.a),n["default"].config.productionTip=!0,new n["default"]({render:function(e){return e(g)}}).$mount("#app")},"85ec":function(e,t,r){},"99b2":function(e,t,r){"use strict";r("f4a7")},f4a7:function(e,t,r){}});
//# sourceMappingURL=app.bbbcdd0a.js.map