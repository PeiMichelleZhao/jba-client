webpackJsonp([1],{"/ZhR":function(e,t){},"1/oy":function(e,t){},"6s00":function(e,t){},"9M+g":function(e,t){},"9Q/C":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i("7+uW").a.mixin({methods:{getUserId:function(){return"123456"}}})},"9xlA":function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,".carousel[data-v-694f8b22]{display:inline}.carousel .jba-card[data-v-694f8b22]{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;margin:8px;height:365px}",""])},GfHa:function(e,t){},GzCZ:function(e,t){},Id91:function(e,t){},K7Ig:function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var o=i("VU/8")({name:"App"},n,!1,function(e){i("gsu9")},null,null).exports,a=i("/ocq"),r=i("Dd8w"),c=i.n(r),d={name:"Card",props:["videoData","cardIndex"],data:function(){return{}},methods:{playVideo:function(){Events.fire("play-video",{videoUrl:this.videoData.contents[0].url}),Events.fire("record-play",{movieId:this.videoData.id})},keyAction:function(e){37===e.keyCode||38===e.keyCode?this.cardIndex>0&&this.$parent.$children[this.cardIndex-1].$el.focus():39===e.keyCode||40===e.keyCode?this.cardIndex<this.$parent.$children.length-1&&this.$parent.$children[this.cardIndex+1].$el.focus():13===e.keyCode&&this.playVideo()}}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"jba-card",on:{click:this.playVideo,keyup:this.keyAction}},[t("div",[t("img",{attrs:{src:this.videoData.images[0].url}}),this._v(" "),t("span",{domProps:{textContent:this._s(this.videoData.title)}})])])},staticRenderFns:[]};var u=i("VU/8")(d,l,!1,function(e){i("6s00")},"data-v-eda33152",null).exports,h=i("NYxO"),f={name:"Carousel",data:function(){return{}},components:{card:u},methods:c()({},Object(h.b)("video",["loadVideos"])),computed:c()({},Object(h.c)("video",["allVideos"])),mounted:function(){this.loadVideos()}},p={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"carousel"},this._l(this.allVideos,function(e,i){return t("card",{key:i,attrs:{videoData:e,cardIndex:i,tabindex:i+1}})}))},staticRenderFns:[]};var v=i("VU/8")(f,p,!1,function(e){i("NgJy")},"data-v-5364c182",null).exports,m={name:"player",data:function(){return{videoUrl:""}},methods:{playerInitialize:function(){var e=this;this.videoPlayer?this.videoPlayer.src([{src:this.videoUrl,type:"video/mp4"}]):this.videoPlayer=videojs(this.$el,{sources:[{src:this.videoUrl,type:"video/mp4"}]},function(){this.on("ended",function(){e.minimizeScreen()}),this.on("fullscreenchange",function(){void 0===this.isFullScreen?this.isFullScreen=!1:this.isFullScreen=!this.isFullScreen,this.isFullScreen||e.minimizeScreen()})})},minimizeScreen:function(){this.videoPlayer.pause(),this.videoPlayer.exitFullscreen()}},mounted:function(){},created:function(){var e=this;Events.listen("play-video",function(t){e.videoUrl=t.videoUrl,e.playerInitialize(),e.videoPlayer.play(),e.videoPlayer.requestFullscreen()})}},y={render:function(){var e=this.$createElement;return(this._self._c||e)("video",{ref:"player",staticClass:"video-js jba-video",attrs:{id:"my-video",preload:"auto"}})},staticRenderFns:[]};var b={name:"player-modal",data:function(){return{videoUrl:""}},methods:{beforeOpen:function(e){this.videoUrl=e.params.videoUrl},opened:function(){this.player=videojs(this.$refs.player,{sources:[{src:this.videoUrl,type:"video/mp4"}]}),this.player.play(),this.player.requestFullscreen()},beforeClose:function(e){}},mounted:function(){}},g={render:function(){var e=this.$createElement,t=this._self._c||e;return t("modal",{attrs:{name:"playerModal",width:800,height:450},on:{"before-open":this.beforeOpen,opened:this.opened,"before-close":this.beforeClose}},[t("video",{ref:"player",staticClass:"video-js jba-video",attrs:{id:"jba-video",controls:"",preload:"auto",autoplay:""}})])},staticRenderFns:[]};var x={name:"jba-menu",data:function(){return{}},components:{player:i("VU/8")(m,y,!1,function(e){i("K7Ig")},"data-v-185a0221",null).exports,"player-modal":i("VU/8")(b,g,!1,function(e){i("/ZhR")},"data-v-255007cf",null).exports},methods:c()({gotoHome:function(){this.$router.push("/")},gotoHistory:function(){this.$router.push("play-history")},recordPlay:function(e){var t=this;this.hasHistory?this.axios.put(this.apiUrl,{userId:t.getUserId(),movieId:e}).then(function(e){}):this.axios.post(this.apiUrl,{userId:t.getUserId(),movieId:e}).then(function(e){t.forceLoadHistories({userId:t.getUserId()})})}},Object(h.b)("history",["loadHistories","forceLoadHistories"])),computed:c()({},Object(h.c)("history",["hasHistory"])),mounted:function(){this.loadHistories({userId:this.getUserId()})},created:function(){var e=this;Events.listen("record-play",function(t){e.recordPlay(t.movieId)})}},j={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-container",{staticClass:"header",attrs:{fluid:""}},[i("b-row",[i("b-col",{attrs:{cols:"4"}},[i("span",{staticClass:"jba-menu",on:{click:e.gotoHome}},[e._v("Home")])]),e._v(" "),i("b-col",{attrs:{cols:"4"}}),e._v(" "),i("b-col",{attrs:{cols:"4"}},[i("span",{staticClass:"jba-menu",on:{click:e.gotoHistory}},[e._v("History")])])],1),e._v(" "),i("player"),e._v(" "),i("player-modal")],1)},staticRenderFns:[]};var _=i("VU/8")(x,j,!1,function(e){i("ksre")},"data-v-7abb4f83",null).exports,V={name:"Homepage",data:function(){return{}},components:{carousel:v,"jba-menu":_},methods:{}},I={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("jba-menu"),this._v(" "),t("carousel")],1)},staticRenderFns:[]};var H=i("VU/8")(V,I,!1,function(e){i("GzCZ")},"data-v-123210be",null).exports,U={name:"history",data:function(){return{historyVideos:[]}},components:{card:u},computed:c()({},Object(h.c)("history",["histories"]),Object(h.c)("video",["allVideos"])),mounted:function(){var e=this;this.lodash.forEachRight(this.histories,function(t){e.lodash.forEach(e.allVideos,function(i){t.M.movieId.S===i.id&&(i.playTime=t.M.playTime.S,e.historyVideos.push(i))})})}},C={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"carousel"},this._l(this.historyVideos,function(e,i){return t("card",{key:i,attrs:{videoData:e,tabindex:i+1}})}))},staticRenderFns:[]};var $={name:"PlayHistory",data:function(){return{}},components:{history:i("VU/8")(U,C,!1,function(e){i("dssv")},"data-v-694f8b22",null).exports,"jba-menu":_},methods:c()({},Object(h.b)("history",["forceLoadHistories"]),Object(h.b)("video",["loadVideos"])),computed:c()({},Object(h.c)("history",["histories"]),Object(h.c)("video",["allVideos"])),mounted:function(){this.loadVideos(),this.forceLoadHistories({userId:this.getUserId()})}},k={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("jba-menu"),e._v(" "),e.histories.length>0&&e.allVideos.length>0?i("history"):e._e(),e._v(" "),e.histories.length<0||e.allVideos.length<0?i("div",[i("span",[e._v("No history.")])]):e._e()],1)},staticRenderFns:[]};var w=i("VU/8")($,k,!1,function(e){i("rK+A")},"data-v-1cb537f2",null).exports,F=i("e6fC");s.a.use(a.a),s.a.use(F.a);var E=new a.a({routes:[{path:"/",name:"Homepage",component:H},{path:"/play-history",name:"PlayHistory",component:w}]}),O=i("mtWM"),P=i.n(O),R=i("Rf8U"),S=i.n(R),z={allVideos:[]},A={namespaced:!0,state:z,getters:{},actions:{loadVideos:function(e){if(0===z.allVideos.length){s.a.axios.get("https://jbanew.staging.joybusinessacademy.com/api/v2/assignment/videos").then(function(t){e.commit("setVideos",t.data)})}}},mutations:{setVideos:function(e,t){t&&t.source&&t.source.videos&&t.source.videos.entries&&(e.allVideos=t.source.videos.entries)}}},D={hasHistory:!1,histories:[]},M={namespaced:!0,state:D,getters:{},actions:{loadHistories:function(e,t){if(!D.hasHistory){var i="https://5hcvigg9je.execute-api.ap-southeast-2.amazonaws.com/dev/jba/history?userId="+t.userId;s.a.axios.get(i).then(function(t){e.commit("setHistories",t.data)})}},forceLoadHistories:function(e,t){var i="https://5hcvigg9je.execute-api.ap-southeast-2.amazonaws.com/dev/jba/history?userId="+t.userId;s.a.axios.get(i).then(function(t){e.commit("setHistories",t.data)})}},mutations:{setHistories:function(e,t){t&&t.plays?(e.hasHistory=!0,e.histories=t.plays.L):e.hasHistory=!1}}};s.a.use(h.a);var N=new h.a.Store({modules:{video:A,history:M}}),Z=i("rifk"),L=i.n(Z),W=i("NETs"),q=i.n(W);i("qb6w"),i("9M+g");s.a.use(q.a,{name:"lodash"}),s.a.use(F.a),s.a.use(S.a,P.a),s.a.use(L.a),i("eCRS"),i("n64D"),i("9Q/C"),s.a.config.productionTip=!1,new s.a({el:"#app",store:N,router:E,components:{App:o},template:"<App/>"})},NgJy:function(e,t,i){var s=i("Y8xc");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);i("rjj0")("109af77f",s,!0,{})},Y8xc:function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,".carousel[data-v-5364c182]{display:inline}.carousel .jba-card[data-v-5364c182]{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;margin:8px;height:365px}",""])},dssv:function(e,t,i){var s=i("9xlA");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);i("rjj0")("0276c0bc",s,!0,{})},eCRS:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("Zrlr"),n=i.n(s),o=i("wxAW"),a=i.n(o),r=i("7+uW");window.Events=new(function(){function e(){n()(this,e),this.vue=new r.a}return a()(e,[{key:"fire",value:function(e,t){this.vue.$emit(e,t)}},{key:"listen",value:function(e,t){this.vue.$off(e),this.vue.$on(e,t)}}]),e}())},gsu9:function(e,t){},ksre:function(e,t){},n64D:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i("7+uW").a.mixin({data:function(){return{get apiUrl(){return"https://5hcvigg9je.execute-api.ap-southeast-2.amazonaws.com/dev/jba/history"}}}})},qb6w:function(e,t){},"rK+A":function(e,t){},zj2Q:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.b07abb374f7f8f64f8af.js.map