(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c4286a0"],{"171b":function(t,n,e){},2156:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"result"},[e("header-top",{attrs:{title:"考试结果",show:!0}}),e("div",{staticClass:"result-top"},[e("div",{staticClass:"top"},[e("div",{staticClass:"top-true"},[e("span",[t._v(t._s(t.resultList.accuracy))]),e("p",[t._v("正确率")])]),e("span",{staticClass:"top-span1"},[t._v("查看错题")]),e("span",{staticClass:"top-span2",on:{click:function(n){return t.rank(t.resultId)}}},[t._v("排行榜")])])]),e("div",{staticClass:"result-container"},[e("div",{staticClass:"container-title"},[e("h4",[t._v("答题卡")]),e("p",[t._v("用时"+t._s(t.resultList.time))])]),e("ul",t._l(t.resultList.answerList,(function(n){return e("li",{key:n.id},[e("span",[t._v(t._s(n.shitiTihao))]),e("svg-icon",{attrs:{"icon-class":t._f("accuracy")(n.result)}})],1)})),0)]),e("loading",{attrs:{isLoading:t.isLoading}})],1)},s=[],u=e("e725"),a=e("3191"),i=e("7ac2"),o=e("9690"),c={components:{headerTop:u["a"],Loading:i["a"]},data:function(){return{resultId:this.$route.query.id,resultList:{},isLoading:!0}},filters:{accuracy:function(t){return 0==t?"error":1==t?"yes":"yuan"}},methods:{getDetail:function(){var t=this,n={userId:Object(o["c"])(),sessionId:Object(o["a"])(),token:Object(o["b"])(),id:this.resultId};Object(a["e"])(n).then((function(n){t.isLoading=!1,t.resultList=n.data.data})).catch((function(t){}))},rank:function(t){this.$router.push({path:"/rank",query:{id:t}})}},mounted:function(){this.getDetail()}},d=c,l=(e("6c31"),e("2877")),f=Object(l["a"])(d,r,s,!1,null,"5054a220",null);n["default"]=f.exports},3191:function(t,n,e){"use strict";e.d(n,"i",(function(){return s})),e.d(n,"t",(function(){return u})),e.d(n,"k",(function(){return a})),e.d(n,"l",(function(){return i})),e.d(n,"j",(function(){return o})),e.d(n,"a",(function(){return c})),e.d(n,"h",(function(){return d})),e.d(n,"e",(function(){return l})),e.d(n,"n",(function(){return f})),e.d(n,"b",(function(){return h})),e.d(n,"c",(function(){return m})),e.d(n,"m",(function(){return p})),e.d(n,"s",(function(){return v})),e.d(n,"f",(function(){return b})),e.d(n,"g",(function(){return q})),e.d(n,"p",(function(){return _})),e.d(n,"o",(function(){return g})),e.d(n,"r",(function(){return w})),e.d(n,"q",(function(){return k})),e.d(n,"d",(function(){return L}));var r=e("b775");function s(t){return r["a"].request({method:"post",url:"Index/index.html",data:t})}function u(t){return r["a"].request({method:"post",url:"Video/learn.html",data:t})}function a(t){return r["a"].request({method:"post",url:"Video/detail.html",data:t})}function i(t){return r["a"].request({method:"post",url:"Practice/index.html",data:t})}function o(t){return r["a"].request({method:"post",url:"Practice/join.html",data:t})}function c(t){return r["a"].request({method:"post",url:"Practice/answer.html",data:t})}function d(t){return r["a"].request({method:"post",url:"History/index.html",data:t})}function l(t){return r["a"].request({method:"post",url:"History/detail.html",data:t})}function f(t){return r["a"].request({method:"post",url:"History/rank.html",data:t})}function h(t){return r["a"].request({method:"post",url:"Article/list.html",data:t})}function m(t){return r["a"].request({method:"post",url:"Article/detail.html",data:t})}function p(t){return r["a"].request({method:"post",url:"Questions/index.html",data:t})}function v(t){return r["a"].request({method:"post",url:"User/index.html",data:t})}function b(t){return r["a"].request({method:"post",url:"WrongQuestions/index.html",data:t})}function q(t){return r["a"].request({method:"post",url:"WrongQuestions/join.html",data:t})}function _(t){return r["a"].request({method:"post",url:"User/resetPassword.html",data:t})}function g(t){return r["a"].request({method:"post",url:"User/detail.html",data:t})}function w(t){return r["a"].request({method:"post",url:"User/uploadImage.html",data:t})}function k(t){return r["a"].request({method:"post",url:"User/save.html",data:t})}function L(t){return r["a"].request({method:"post",url:"Assessment/index.html",data:t})}},"37a6":function(t,n,e){"use strict";var r=e("5d81"),s=e.n(r);s.a},"4b6a":function(t,n,e){},"5d81":function(t,n,e){},"6c31":function(t,n,e){"use strict";var r=e("171b"),s=e.n(r);s.a},"7ac2":function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"loading"},[e("div",{staticClass:"ring"})])},s=[],u={props:["isLoading"],data:function(){return{}}},a=u,i=(e("cb14"),e("2877")),o=Object(i["a"])(a,r,s,!1,null,"f4c79d7c",null);n["a"]=o.exports},cb14:function(t,n,e){"use strict";var r=e("4b6a"),s=e.n(r);s.a},e725:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"header"},[e("div",{on:{click:t.black}},[e("svg-icon",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],attrs:{"icon-class":"back"}})],1),e("h3",[t._v(t._s(t.title))])])},s=[],u={props:["title","show"],data:function(){return{}},methods:{black:function(){this.$router.back()}}},a=u,i=(e("37a6"),e("2877")),o=Object(i["a"])(a,r,s,!1,null,"c2ab5796",null);n["a"]=o.exports}}]);