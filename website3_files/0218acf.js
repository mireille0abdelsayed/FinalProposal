(window.webpackJsonp=window.webpackJsonp||[]).push([[105,40],{685:function(t,e,n){var content=n(711);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("d4374b0a",content,!0,{sourceMap:!1})},710:function(t,e,n){"use strict";n(685)},711:function(t,e,n){var o=n(14)((function(i){return i[1]}));o.push([t.i,'.intro[data-v-7c1635e1]{position:relative;max-height:none;overflow:hidden;padding-top:90px}@media(max-width:768px){.intro[data-v-7c1635e1]{padding-top:32px}}.intro.is-expanded[data-v-7c1635e1]{padding-bottom:70px}.intro-content[data-v-7c1635e1]{font-size:17px;line-height:25px;font-weight:300}@media(max-width:768px){.intro-content[data-v-7c1635e1]{font-size:16px}}.intro-content__slogan[data-v-7c1635e1]{padding-bottom:32px}.intro-content__title[data-v-7c1635e1]{font-size:30px;font-weight:300;line-height:40px;max-width:962px;width:100%;margin:auto auto 40px}@media(max-width:768px){.intro-content__title[data-v-7c1635e1]{font-size:20px;font-weight:300;line-height:30px;margin-bottom:20px}}.intro-content__split[data-v-7c1635e1]{position:relative;max-width:760px;width:100%;margin:auto}.intro-content__extended[data-v-7c1635e1]{position:relative;margin:0 auto;padding:20px 0;max-width:962px;width:100%}.intro-content__extended[data-v-7c1635e1]:before{content:"";position:absolute;display:block;left:0;bottom:0;width:100%;height:100%;background:linear-gradient(transparent,#111 50%);opacity:0;z-index:2;pointer-events:none}.intro-content__hidden[data-v-7c1635e1]{transition:opacity .2s ease-out}.has-hidden-text .intro-content__hidden[data-v-7c1635e1]{opacity:0}.has-hidden-text .intro-content__hidden[data-v-7c1635e1]:before{opacity:1}.intro-content__more[data-v-7c1635e1]{position:absolute;top:20px;left:0;right:0;margin:0 auto;cursor:pointer;opacity:0;z-index:3}.intro-content__more p[data-v-7c1635e1]{margin-bottom:0}.has-hidden-text .intro-content__more[data-v-7c1635e1]{opacity:1}.intro-content__more span[data-v-7c1635e1]{display:inline-block;width:50px;height:1px;background:var(--c-white);margin-right:10px}.intro-content__close[data-v-7c1635e1]{padding-top:35px;padding-bottom:15px;cursor:pointer}.intro-content__close span[data-v-7c1635e1]{display:inline-block;width:50px;height:1px;background:var(--c-white);margin-right:10px}.intro-content__close p[data-v-7c1635e1]{margin-bottom:0}.intro.has-hidden-text__extended[data-v-7c1635e1]:before{opacity:.5}.intro.has-hidden-text .intro-summary[data-v-7c1635e1]{height:135px}@media(max-width:768px){.intro.has-hidden-text .intro-summary[data-v-7c1635e1]{height:99px}}',""]),o.locals={},t.exports=o},750:function(t,e,n){"use strict";n.r(e);var o={mixins:[n(212).a],props:{slogan:{type:String,required:!1,default:"En quelques mots"},title:{type:String,required:!1,default:""},content:{type:String,required:!1,default:""},summary:{type:String,required:!0,default:""},expanded:{type:Boolean,required:!1,default:!1}},data:function(){return{expandText:!1}},mounted:function(){this.expanded&&(this.expandText=!0)}},r=(n(710),n(1)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"intro tc f",class:[!t.expandText&&t.summary&&"has-hidden-text",t.expanded&&"is-expanded"]},[n("div",{staticClass:"container"},[n("div",{staticClass:"intro-inner c10 m-c12 ma"},[n("div",{ref:"content",staticClass:"intro-content"},[n("div",{staticClass:"intro-content__slogan"},[t._v("\n          "+t._s(t.$t("chronicles.article.summary"))+"\n        ")]),t._v(" "),n("div",{directives:[{name:"inview",rawName:"v-inview:class",value:["in-view"],expression:"['in-view']",arg:"class"}],staticClass:"intro-content__title fw200",attrs:{"data-up":""}},[t._v("\n          "+t._s(t.title)+"\n        ")]),t._v(" "),n("div",{staticClass:"intro-content__split"},[n("p",{directives:[{name:"inview",rawName:"v-inview:class",value:["in-view"],expression:"['in-view']",arg:"class"}],staticClass:"intro-content__description c8 m-c12 ma",attrs:{"data-up":""}},[t._v("\n            "+t._s(t.content)+"\n          ")])]),t._v(" "),t.summary?n("div",{directives:[{name:"inview",rawName:"v-inview:class",value:["in-view"],expression:"['in-view']",arg:"class"}],ref:"extra",staticClass:"intro-content__extended",attrs:{"data-fade":""}},[n("div",{staticClass:"intro-content__hidden m-c12 ma"},[n("div",{staticClass:"intro-summary"},[t._v(t._s(t.summary))]),t._v(" "),t.expandText&&!t.expanded?n("div",{staticClass:"intro-content__close f jcc aic",on:{click:function(e){t.expandText=!1}}},[n("span"),t._v(" "),n("p",[t._v(t._s(t.$t("chronicles.summary.collapse")))])]):t._e()]),t._v(" "),t.expandText?t._e():n("div",{staticClass:"intro-content__more f jcc aic",on:{click:function(e){t.expandText=!0}}},[n("span"),t._v(" "),n("p",[t._v(t._s(t.$t("chronicles.summary.expand")))])])]):t._e()])])])])}),[],!1,null,"7c1635e1",null);e.default=component.exports},829:function(t,e,n){var content=n(905);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("02cd597a",content,!0,{sourceMap:!1})},904:function(t,e,n){"use strict";n(829)},905:function(t,e,n){var o=n(14)((function(i){return i[1]}));o.push([t.i,'.about-title{text-align:center;margin:223px auto 0;line-height:87%;width:100%}@media(min-width:1441px){.about-title{max-width:1350px}}@media(max-width:1200px){.about-title{max-width:960px}}.about-himage{margin:84px auto 0;position:relative;padding-bottom:103px}.about-himage:before{content:"";height:50%;position:absolute;bottom:-1px;left:0;width:100%;z-index:0;background-color:#fff}.about-himage picture{display:block;margin:auto;width:100%}@media(min-width:1441px){.about-himage picture{max-width:1350px}}@media(max-width:1200px){.about-himage picture{max-width:960px}}.about-body{position:relative;background-color:#fff}.about-body:after{content:"";position:absolute;bottom:-3px;left:0;width:100%;height:6px;background-color:#fff}.about-chapters .article-row{flex-direction:row-reverse}@media(max-width:1200px){.about-chapters .article-row{flex-direction:column}}.about-chapters.is-even .article-row{flex-direction:row}@media(max-width:1200px){.about-chapters.is-even .article-row{flex-direction:column}}.about-footer{padding:100px 0}@media(max-width:768px){.about-footer{padding:60px 0}}.about-footer__title{padding-bottom:60px}@media(max-width:768px){.about-footer__title{padding-bottom:40px}.about-footer__title h2{font-size:30px;line-height:20px}}.about-footer__desc{width:70%;margin:0 auto}@media(max-width:768px){.about-footer__desc{width:85%}}.about-timage-1{margin-bottom:40px}.about .floating-image{max-width:calc(57% - 50px);margin-left:43%;position:relative;z-index:6;margin-bottom:100px;margin-top:0}@media(max-width:768px){.about .floating-image{max-width:60%;margin-top:-140px;margin-bottom:30px}}.about .abs-image-container figure{position:absolute;width:100%}@media(max-width:768px){.about .abs-image-container figure{position:relative}}.about .hero{width:95%;margin-top:101px;padding-bottom:100px}@media screen and (min-width:1779.7552836485px){.about .hero{width:calc(50vw + 801.072px)}}.about .simage-1{margin-bottom:100px}@media(max-width:768px){.about-title{margin-top:97px}.about-title :first-child{font-weight:200}.about-timage-1{margin-left:0}.about-timage-1,.about .simage-1{width:100%;margin:0 auto}.about-himage{padding-bottom:38px;margin-top:15px}.about .simage-1{margin-bottom:48px}.about .simage-1 .c7{width:100%}.about .timage-2 .text-image-image{width:62.38%}.about .floating-image{margin-left:auto}.about .hero{width:100%;margin-top:20px;padding-bottom:40px}}',""]),o.locals={},t.exports=o},969:function(t,e,n){"use strict";n.r(e);n(18),n(16),n(19),n(20);var o=n(6),r=n(12),c=(n(40),n(13),n(54),n(9),n(11),n(23),n(42),n(47),n(5));function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={data:function(){return{title:"",description:"",ogimage:this.$t("chronicles.seo.fallbackimage"),responseData:[],sections:[],container:{},articles:[]}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,o,r,c,d,l,m,h,x,f,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$nuxt.$i18n.locale,e.next=3,t.$axios.$post("/api/about",{data:{query:t.$nuxt.$route.query,lang:n}});case 3:o=e.sent,r=o[":items"].container,c=o[":items"].container[":items"],d=o[":items"].container[":itemsOrder"],t.setLanguages(o[":items"].languageselector),t.title=(o[":items"].pageproperties.socialMediaSharing.title||t.$nuxt.$i18n.$t("chronicles.about.seo.title"))+t.$nuxt.$i18n.t("chronicles.seo.suffix"),t.description=o[":items"].pageproperties.socialMediaSharing.description||t.$nuxt.$i18n.$t("chronicles.about.seo.description"),l=[],m={},r[":itemsOrder"].forEach((function(t){var e=r[":items"][t];e.type=e[":type"].split("/").pop(),m[e.type]=e})),d.forEach((function(t){"list"!==t&&l.push(c[t])})),h=[],x=[],f={},v=m.container,v[":itemsOrder"].forEach((function(t){var e=v[":items"][t];e.type=e[":type"].split("/").pop(),f[e.type]=e,h.push(e)})),h.forEach((function(t){var e={components:[]};t[":itemsOrder"].forEach((function(n,o){var r=t[":items"][n];r.type=t[":items"][n][":type"].split("/").pop(),r.pos=o,"title"===r.type&&(e.title=r.text),e.components.push(r)})),x.push(e)})),t.articles=x,t.container=m;case 23:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.title,meta:[{hid:"og:title",property:"og:title",content:this.title},{hid:"description",name:"description",content:this.description},{hid:"og:description",name:"og:description",content:this.description},{hid:"og:image",name:"og:image",content:this.ogimage},{hid:"twitter:site",name:"twitter:site",content:"@audemarspiguet"},{hid:"twitter:creator",name:"twitter:creator",content:"@audemarspiguet"},{hid:"twitter:card",name:"twitter:card",content:"summary"},{hid:"twitter:title",name:"twitter:title",content:this.title},{hid:"twitter:description",name:"twitter:description",content:this.description},{hid:"twitter:image",name:"twitter:image",content:this.ogimage}]}},methods:l(l({},Object(c.d)({setAssetModal:"ui/SET_ASSET_MODAL",setAssetData:"ui/SET_ASSET_DATA",setLanguages:"languages/setLanguages"})),{},{onAssetShow:function(t){if(""!==t){var e=t.split("/").pop(),n=this.$i18n.locale;window.history.pushState("asset","Title","/".concat(n,"/asset/").concat(e)),this.setAssetData(t),this.setAssetModal(!0),this.$dataLayerPush({event:"Asset Modal Article Open",content:[{title:"Article image",path:t}]})}}})},h=(n(904),n(1)),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.container.hero?n("blocks-full-hero",[n("details-hero",{attrs:{category:"",title:t.container.hero.title,subtitle:t.container.hero.subtitle,image:t.container.hero.image}})],1):t._e(),t._v(" "),t.container.summary?n("details-intro",{attrs:{title:t.container.summary.headline,content:t.container.summary.subline,summary:t.container.summary.summary,expanded:!0}}):t._e(),t._v(" "),n("div",t._l(t.articles,(function(t,e){return n("details-chapter",{key:e,ref:"chapter",refInFor:!0,staticClass:"about-chapters",attrs:{"chapter-title":t.title.text,order:e%2?"odd":"even",items:t.components,number:e+1,"disable-shares":!0}})})),1),t._v(" "),t.container.title&&t.container.text?n("div",{staticClass:"about-footer"},[n("div",{staticClass:"container"},[n("div",{staticClass:"about-footer__inner"},[n("div",{staticClass:"about-footer__title tc"},[n("h2",{staticClass:"h1 f-times"},[t._v(t._s(t.container.title.text))])]),t._v(" "),n("div",{staticClass:"about-footer__desc",domProps:{innerHTML:t._s(t.container.text.text)}})])])]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DetailsHero:n(672).default,BlocksFullHero:n(678).default,DetailsIntro:n(750).default,DetailsChapter:n(860).default})}}]);