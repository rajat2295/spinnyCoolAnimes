(this.webpackJsonpanimesearch=this.webpackJsonpanimesearch||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){e.exports=a(38)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),l=a.n(c),o=(a(25),a(26),a(27),a(18)),u=(a(12),a(2)),i=a(19),s=a(10),m=a.n(s),d=a(1),f=a(15),E=function(e){var t=fetch(e,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log("Fetcherr",e)}));return t},h=function(e){var t=e.query,a=e.oldUrl;return function(){var e=Object(f.a)(m.a.mark((function e(n,r){var c,l,o,u,i,s,f;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c="",l=1,!a){e.next=19;break}return c=a,e.prev=4,l=r().page,o=r().searchData,e.next=9,E(c,t,l);case 9:u=e.sent,i=o.concat(u.results),n(p(i)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.log("error");case 17:e.next=36;break;case 19:return c="https://api.jikan.moe/v3/search/anime?q=".concat(t,"&limit=16&page=").concat(l),e.prev=20,n(b({url:"fetching..."})),n(p([])),e.next=25,E(c,t,l);case 25:s=e.sent,delete(f=Object(d.a)({},s)).results,f.url=c,n(p(s.results)),n(b(f)),e.next=36;break;case 33:e.prev=33,e.t1=e.catch(20),console.log("error");case 36:case"end":return e.stop()}}),e,null,[[4,14],[20,33]])})));return function(t,a){return e.apply(this,arguments)}}()},p=function(e){return{type:"SET_SEARCH_RESULT_DATA",payload:Object(i.a)(e)}},b=function(e){return{type:"SET_SEARCH_DEBUG_DATA",payload:Object(d.a)({},e)}},v=(a(35),Object(n.memo)((function(e){var t=e.data,a=void 0===t?{}:t,n=a.url,c=a.request_cached,l=a.request_cache_expiry;return r.a.createElement("div",{className:"debug"},"Requesting: ",r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",id:"search_query_url",href:n},n),r.a.createElement("br",null),"Request Cached: ",!!l&&r.a.createElement("span",{id:"request_cached",style:{color:c?"#5DAE28":"#CE3C2D"}},c?"True":"False"),r.a.createElement("br",null))}))),g=(a(36),Object(n.memo)((function(e){var t=e.label,a=void 0===t?"":t,c=e.onClickHandler,l=e.customClass;return r.a.createElement(n.Fragment,null,r.a.createElement("button",{className:l,onClick:function(){return c()}},a))}))),_=function(e){var t=e.onChangeHandler,a=e.performSearch;return r.a.createElement(n.Fragment,null,r.a.createElement("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault(),a()}},r.a.createElement("input",{id:"search_query",spellCheck:"false",onChange:function(e){return t(e.target.value)},type:"text",name:"query",placeholder:"search for an anime, e.g Naruto"}),r.a.createElement(g,{onClickHandler:function(){return null},customClass:"searchButton",label:"Go"})))},j=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e})).debugData,a=void 0===t?{}:t,c=Object(n.useState)(""),l=Object(o.a)(c,2),i=l[0],s=l[1];return r.a.createElement("div",{className:"search"},r.a.createElement(_,{onChangeHandler:function(e){s(e)},performSearch:function(){e(h({query:i}))}}),Object.keys(a).length>0&&r.a.createElement(v,{data:a}))},O=(a(13),Object(n.memo)((function(e){var t=e.url,a=void 0===t?"":t,n=e.imageUrl,c=void 0===n?"":n,l=e.name,o=void 0===l?"":l;return r.a.createElement("div",{href:a,className:"card"},r.a.createElement("div",{className:"card__image"},r.a.createElement("img",{style:{backgroundImage:"url(".concat("/spinnyCoolAnimes","/images/tenor.gif)")},loading:"lazy",src:c,alt:o})),r.a.createElement("div",{className:"card__name"},r.a.createElement("div",null,r.a.createElement("span",null,o))))}))),y=Object(n.memo)((function(e){var t=e.cardList,a=void 0===t?[]:t;return r.a.createElement("div",{className:"cards"},a.map((function(e){return r.a.createElement(O,{key:e.url,url:e.url,imageUrl:e.image_url,name:e.title})})))})),C=(a(37),function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.searchData})),a=Object(u.c)((function(e){return e.debugData?e.debugData:{}})),c=a.last_page,l=void 0===c?"":c,o=a.url,i=Object(u.c)((function(e){return e.page?e.page:1}));return r.a.createElement(n.Fragment,null,t&&t.length>0&&r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"cards"},r.a.createElement(y,{cardList:t})),i!==l&&r.a.createElement(g,{onClickHandler:function(){var t;i!==l&&e((t=Number(i)+1,{type:"SET_SEARCH_PAGE",payload:Object(d.a)({},t)})),e(h({oldUrl:o}))},customClass:"transWhite",label:"View More"})))}),S=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"searchBar"},r.a.createElement(j,null),r.a.createElement(C,null)))};var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=a(3),D={page:1},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"SET_SEARCH_RESULT_DATA":return Object(d.a)(Object(d.a)({},e),{},{searchData:n});case"SET_SEARCH_DEBUG_DATA":return Object(d.a)(Object(d.a)({},e),{},{debugData:n});case"SET_SEARCH_PAGE":return Object(d.a)(Object(d.a)({},e),{},{page:n});default:return e}},w=a(16),N=a(17),q=Object(A.createStore)(T,Object(N.composeWithDevTools)(Object(A.applyMiddleware)(w.a)));l.a.render(r.a.createElement(u.a,{store:q},r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[20,1,2]]]);
//# sourceMappingURL=main.7f73d419.chunk.js.map