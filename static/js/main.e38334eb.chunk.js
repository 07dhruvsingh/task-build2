(this.webpackJsonpdhruv_app=this.webpackJsonpdhruv_app||[]).push([[0],{21:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),i=n(15),a=n.n(i),r=(n(21),n.p,n(6)),j=n(16),d=n.n(j),l=(n(40),n(0));var b=function(e){var t=e.news.split("[")[0];return Object(l.jsxs)("div",{className:"news-card",children:[Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:e.title})}),Object(l.jsxs)("div",{className:"img-news",children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{className:"img",src:e.img})}),Object(l.jsx)("div",{children:Object(l.jsxs)("h3",{children:[t," ",Object(l.jsx)("a",{href:e.url,children:"Read More"})," "]})})]})]})};n(42);var u=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(!1),j=Object(r.a)(a,2),u=j[0],o=j[1];console.log(n),s.a.useEffect((function(){d.a.get("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=48b65ee8c6044d1c9e4faed1d3b00314").then((function(e){i(e.data.articles),o(!0)}))}));var h=n.map((function(e){return Object(l.jsx)(b,{title:e.title,img:e.urlToImage,url:e.url,news:e.content},e.publishedAt)}));return u?Object(l.jsx)("div",{children:h}):Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Loading..."})})};n(43);var o=function(){var e=new Date;return e=e.toDateString(),Object(l.jsxs)("div",{className:"navbar",children:[Object(l.jsx)("h1",{className:"navbar-title",children:"Today's News"}),Object(l.jsx)("h2",{className:"navbar-date",children:e})]})};n(44);var h=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o,{}),Object(l.jsx)(u,{})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),v()}},[[45,1,2]]]);
//# sourceMappingURL=main.e38334eb.chunk.js.map