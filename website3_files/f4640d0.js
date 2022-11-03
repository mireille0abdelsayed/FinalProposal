(window.webpackJsonp=window.webpackJsonp||[]).push([[109,29,39],{667:function(e,t,r){var content=r(674);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(15).default)("6a17d36c",content,!0,{sourceMap:!1})},670:function(e,t,r){var content=r(680);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(15).default)("01641996",content,!0,{sourceMap:!1})},672:function(e,t,r){"use strict";r.r(t);r(47),r(23),r(42),r(34),r(352),r(96);var n={props:{title:{type:String,required:!1,default:""},category:{type:String,required:!1,default:""},duration:{type:String,required:!1,default:""},subtitle:{type:String,required:!1,default:""},alt:{type:String,required:!1,default:""},image:{type:Object,required:!0},link:{type:Object,required:!1,default:null}},methods:{convertUrl:function(e){return this.retrieveCategory(e)?"/".concat(this.retrieveCategory(e),"/").concat(this.retrieveSlug(e)):e},retrieveSlug:function(e){return e.split("/").pop()},retrieveCategory:function(e){var t=e.split("/").slice(-2,-1)[0];return"articles"===t?"article":"models"===t?"model":"calibres"===t?"calibre":"edutainment"===t&&"edutainment"},isSameDomain:function(){return!(!this.link||!this.link.href||this.link.href.startsWith("http"))}}},o=(r(673),r(1)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hero-container"},[r("div",{staticClass:"hero f aic"},[r("div",{staticClass:"hero-content rel z2"},[e.category||e.duration?r("div",{staticClass:"hero-content__slogan"},[e.category?r("span",{staticClass:"type"},[e._v(e._s(e.$t("chronicles.types."+e.category.toLowerCase())))]):e._e(),e._v(" "),e.duration?r("span",{staticClass:"duration"},[e._v(" — "+e._s(e.duration)+" "+e._s(e.$t("chronicles.article.timetoread")))]):e._e()]):e._e(),e._v(" "),r("h1",[r("span",{staticClass:"hero-content__title"},[e._v(e._s(e.title))]),e._v(" "),r("span",{staticClass:"hero-content__subtitle f-times"},[e._v(e._s(e.subtitle))])]),e._v(" "),e.link?r("div",{staticClass:"hero-cta"},[e.isSameDomain()?r("elements-line-cta",{directives:[{name:"inview",rawName:"v-inview:class",value:["in-view"],expression:"['in-view']",arg:"class"}],attrs:{"data-up":"",title:e.link.text,link:e.localePath(e.convertUrl(e.link.href))}}):r("elements-line-cta",{directives:[{name:"inview",rawName:"v-inview:class",value:["in-view"],expression:"['in-view']",arg:"class"}],attrs:{"data-up":"",title:e.link.text,link:e.link.href}})],1):e._e()]),e._v(" "),r("div",{staticClass:"hero-wallpaper abs top left x y oh"},[r("picture",[e.image?r("source",{attrs:{srcset:e.$config.imageUrl+encodeURI(e.image.fileReference),media:"(min-width: 768px)"}}):e._e(),e._v(" "),e.image&&e.image.mobileFileReference?r("source",{attrs:{srcset:e.$config.imageUrl+encodeURI(e.image.mobileFileReference),media:"(max-width: 768px)"}}):e._e(),e._v(" "),e.image&&!e.image.mobileFileReference?r("source",{attrs:{srcset:e.$config.imageUrl+encodeURI(e.image.fileReference),media:"(max-width: 768px)"}}):e._e(),e._v(" "),e.image?r("img",{directives:[{name:"inview",rawName:"v-inview:class",value:["in-view"],expression:"['in-view']",arg:"class"}],staticClass:"x y o-cover",attrs:{sizes:"(min-width: 768px), (max-width: 768px)",srcset:e.$config.imageUrl+encodeURI(e.image.fileReference)+" 2000w,"+e.$config.imageUrl+encodeURI(e.image.mobileFileReference)+" 768w",alt:e.image.altText?e.image.altText:"","data-scale-in":""}}):e._e()])])])])}),[],!1,null,"0da6cf1a",null);t.default=component.exports;installComponents(component,{ElementsLineCta:r(214).default})},673:function(e,t,r){"use strict";r(667)},674:function(e,t,r){var n=r(14)((function(i){return i[1]}));n.push([e.i,'.hero-content__slogan[data-v-0da6cf1a]{padding-bottom:20px}.hero-content__subtitle[data-v-0da6cf1a]{display:block}.hero-content h1[data-v-0da6cf1a]{margin-bottom:15px}@media(max-width:1279px){.hero-content h1[data-v-0da6cf1a]{font-size:36px;line-height:36px;letter-spacing:0}}.hero-content .hero-cta[data-v-0da6cf1a]{display:inline-block}.hero-wallpaper[data-v-0da6cf1a]:before{content:"";position:absolute;top:0;left:0;display:block;width:100%;height:100%;background:#020024;background:linear-gradient(180deg,rgba(2,0,36,0),#000)}',""]),n.locals={},e.exports=n},678:function(e,t,r){"use strict";r.r(t);r(679);var n=r(1),component=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"wrapper rel"},[r("div",{staticClass:"container y"},[r("div",{staticClass:"wrapper-inner y f aic jcc tc"},[e._t("default")],2)])])}),[],!1,null,"350f6d53",null);t.default=component.exports},679:function(e,t,r){"use strict";r(670)},680:function(e,t,r){var n=r(14)((function(i){return i[1]}));n.push([e.i,".wrapper[data-v-350f6d53]{width:100%;height:55vw}@media(max-width:768px){.wrapper[data-v-350f6d53]{height:90vh}}",""]),n.locals={},e.exports=n},979:function(e,t,r){"use strict";r.r(t);r(18),r(16),r(9),r(19),r(11),r(20);var n=r(6),o=r(12),c=(r(40),r(13),r(54),r(47),r(5));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var r,n,o,c,l,d,h,m,f,title,v,w,_;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$axios,n=e.params,o=e.i18n,c=e.route,l=e.error,d=e.$config,h=n.slug,m=o.localeProperties.code,t.next=5,r.$post("/api/calibres/".concat(h),{data:{query:c.query,lang:m}});case 5:if((f=t.sent)[":items"]){t.next=8;break}return t.abrupt("return",l({statusCode:404,message:"Calibre not found"}));case 8:return title=f[":items"].pageproperties.socialMediaSharing.title||f[":items"].container[":items"].hero.title,v=(f[":items"].pageproperties.socialMediaSharing.title||title)+o.t("chronicles.seo.suffix"),w=f[":items"].pageproperties.socialMediaSharing.description,_=d.imageUrl+(f[":items"].container[":items"].hero.image.fileReference||f[":items"].pageproperties.image.fileReference),t.abrupt("return",{responseData:f,title:title,description:w,ogtitle:v,ogimage:_});case 13:case"end":return t.stop()}}),t)})))()},data:function(){return{items:{relatedcontent:{relatedContent:[]}},sections:[]}},head:function(){return{title:this.title+this.$t("chronicles.seo.suffix"),meta:[{hid:"og:title",property:"og:title",content:this.ogtitle},{hid:"description",name:"description",content:this.description},{hid:"og:description",name:"og:description",content:this.description},{hid:"og:image",name:"og:image",content:this.ogimage},{hid:"type",name:"type",content:"Article"},{hid:"twitter:site",name:"twitter:site",content:"@audemarspiguet"},{hid:"twitter:creator",name:"twitter:creator",content:"@audemarspiguet"},{hid:"twitter:card",name:"twitter:card",content:"summary_large_image"},{hid:"twitter:title",name:"twitter:title",content:this.ogtitle},{hid:"twitter:description",name:"twitter:description",content:this.description},{hid:"twitter:image",name:"twitter:image",content:this.ogimage}]}},mounted:function(){this.showBar(!0),this.getSections(),this.setArticleUrl(this.$route.path),this.setLanguages(this.responseData[":items"].languageselector)},beforeDestroy:function(){this.showBar(!1),this.showChapterList(!1),this.setTime(""),this.setToggleRelated(!1)},methods:d(d({},Object(c.d)({setLanguages:"languages/setLanguages",setTime:"chapter/setTime",setName:"chapter/setName",showBar:"chapter/showBar",setChapterType:"chapter/setChapterType",showChapterList:"chapter/showChapterList",showAssetModel:"ui/SHOW_ASSET_MODEL",setArticleUrl:"ui/SET_ARTICLE_URL",setCurrentArticle:"chapter/SET_CURRENT_ARTICLE",setRelatedContent:"chapter/SET_RELATED_CONTENT",setToggleRelated:"chapter/setToggleRelated"})),{},{getSections:function(){var e,t,r,n;this.items=this.responseData[":items"].container[":items"],this.setTime("".concat(null===(e=this.items)||void 0===e||null===(t=e.duration)||void 0===t?void 0:t.duration," ").concat(this.$t("chronicles.article.timetoread"))),this.setName(null===(r=this.items.hero)||void 0===r?void 0:r.title),this.setChapterType("calibre"),null!==(n=this.items.relatedcontent)&&void 0!==n&&n.relatedContent&&this.setRelatedContent(this.items.relatedcontent.relatedContent)}})},m=r(1),component=Object(m.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"calibre-container"},[e.items.hero?r("blocks-full-hero",[r("details-hero",{attrs:{title:e.items.hero.title,subtitle:e.items.hero.subtitle,category:"Calibre",image:e.items.hero.image,alt:e.items.hero.image.altText}})],1):e._e(),e._v(" "),e.items.callibrecard?r("cards-modele",{attrs:{order:0,item:e.items.callibrecard,category:"calibre"}}):e._e()],1),e._v(" "),r("chapter-wrapper"),e._v(" "),r("chapter-relations")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{DetailsHero:r(672).default,BlocksFullHero:r(678).default,CardsModele:r(880).default,ChapterWrapper:r(824).default,ChapterRelations:r(353).default})}}]);