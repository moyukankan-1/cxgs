(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ed58999e"],{1823:function(t,i,s){"use strict";var e=s("e49c"),a=s.n(e);a.a},"4d4c":function(t,i,s){"use strict";var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"click-move"},[s("ul",t._l(t.titles,(function(i){return s("li",{key:i.id,class:i.id==t.idx?"active":"",on:{click:function(s){return t.activeClick(i.id)}}},[t._v(" "+t._s(i.title)+" "),s("hr",{directives:[{name:"show",rawName:"v-show",value:i.id==t.idx,expression:"item.id == idx"}]})])})),0)])},a=[],l={props:["titles"],data:function(){return{idx:0}},methods:{activeClick:function(t){this.idx=t,this.$emit("already",t)}}},r=l,c=(s("1823"),s("2877")),n=Object(c["a"])(r,e,a,!1,null,"156d01ba",null);i["a"]=n.exports},"70b3":function(t,i,s){"use strict";var e=s("b692"),a=s.n(e);a.a},"7e02":function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"history"},[s("header-top",{attrs:{title:"历史考试",show:!0}}),s("clickMove",{attrs:{titles:t.titles.item},on:{already:t.already}}),s("scroll",{ref:"scroll",staticClass:"scroll",attrs:{"pull-up-load":t.pullUpLoad},on:{pullUp:t.loadMore}},[s("ul",t._l(t.history,(function(i){return s("li",{key:i.id,staticClass:"lis",on:{click:function(s){return t.result(i.id)}}},[s("h3",[t._v(t._s(i.title))]),s("div",{staticClass:"li-container"},[s("li",[s("div",[t._v(t._s(i.answerNumber))]),s("p",[t._v("答题数")])]),s("li",[s("div",[t._v(t._s(i.answerNumber))]),s("p",[t._v("答题数")])]),s("li",[s("div",[t._v(t._s(i.trueNumber))]),s("p",[t._v("答对数")])]),s("li",[s("div",[t._v(t._s(i.falseNumber))]),s("p",[t._v("答错数")])])]),s("div",{staticClass:"li-bottom"},[s("div",[t._v(t._s(i.time))]),s("div",[t._v("正确率："),s("span",[t._v(t._s(i.accuracy))])])])])})),0)]),s("dia-log",{directives:[{name:"show",rawName:"v-show",value:t.dialogShow,expression:"dialogShow"}],attrs:{text:t.message}}),s("loading",{attrs:{isLoading:t.isLoading}})],1)},a=[],l=s("2909"),r=s("e725"),c=s("4d4c"),n=s("c0cd"),o=s("bf46"),u=s("7ac2"),d=s("3191"),h=s("9690"),v={components:{headerTop:r["a"],clickMove:c["a"],Scroll:n["a"],diaLog:o["a"],Loading:u["a"]},data:function(){return{titles:{item:[{id:0,title:"练习考试"},{id:1,title:"闯关模式"}]},history:[],type:1,message:"",dialogShow:!1,pullUpLoad:!0,page:1,isPull:!1,isLoading:!0,success:!1}},methods:{getHistory:function(){var t=this,i={userId:Object(h["c"])(),sessionId:Object(h["a"])(),token:Object(h["b"])(),historyType:this.type,currentPage:this.page,examNumber:10};Object(d["h"])(i).then((function(i){var s;(t.isLoading=!1,t.isPull)?(""==i.data.data.examList&&(t.success=!0),(s=t.history).push.apply(s,Object(l["a"])(i.data.data.examList))):t.history=i.data.data.examList})).catch((function(t){}))},already:function(t){0==t?this.type=1:1==t&&(this.type=2),this.page=1,this.isPull=!1,this.$refs.scroll.scroll.scrollTo(0,0,0),this.getHistory()},loadMore:function(){this.isLoading=!0,this.page++,this.getHistory(),this.isPull=!0,this.$refs.scroll.scroll.finishPullUp(),this.$refs.scroll.scroll.refresh()},result:function(t){this.$router.push({path:"/result",query:{id:t}})}},activated:function(){this.$refs.scroll.scroll.refresh()},mounted:function(){this.getHistory()}},p=v,f=(s("d192"),s("2877")),_=Object(f["a"])(p,e,a,!1,null,"5d0ac112",null);i["default"]=_.exports},b692:function(t,i,s){},bf46:function(t,i,s){"use strict";var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"dialog"},[t._v(" "+t._s(t.text)+" ")])},a=[],l={props:["text"],data:function(){return{}}},r=l,c=(s("70b3"),s("2877")),n=Object(c["a"])(r,e,a,!1,null,"b55ab304",null);i["a"]=n.exports},d192:function(t,i,s){"use strict";var e=s("d40a"),a=s.n(e);a.a},d40a:function(t,i,s){},e49c:function(t,i,s){}}]);