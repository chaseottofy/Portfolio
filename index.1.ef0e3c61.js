(()=>{"use strict";var h={};h.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),(()=>{var e;h.g.importScripts&&(e=h.g.location+"");var r=h.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var a=t.length-1;a>-1&&!e;)e=t[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),h.p=e})();var Lr={};function Le(e,r){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=Se(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(o){throw o},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var c=!0,l=!1,s;return{s:function(){t=t.call(e)},n:function(){var o=t.next();return c=o.done,o},e:function(o){l=!0,s=o},f:function(){try{!c&&t.return!=null&&t.return()}finally{if(l)throw s}}}}function Se(e,r){if(e){if(typeof e=="string")return J(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return J(e,r)}}function J(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a}var x=document.querySelector(".body"),_e=document.querySelector('meta[name="color-scheme"]'),q=document.querySelectorAll(".theme-input"),Ae=document.querySelectorAll(".theme-label"),Ee=function(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"},P=function(r){localStorage.setItem("portfolio-theme",r),_e.setAttribute("content",r),x.classList.remove("theme__dark"),x.classList.remove("theme__light"),x.classList.add("theme__".concat(r))},Te=function(){var r=localStorage.getItem("portfolio-theme"),t=Ee();q[2].setAttribute("value",t),Ae[2].dataset.systemTheme=t,!r||r!=="dark"&&r!=="light"?(P(t),q[2].checked=!0):(P(r),q[r==="dark"?0:1].checked=!0)},Ce=function(r){var t=r.target.value;P(t==="system"?r.target.getAttribute("data-system-theme"):t)},je=function(){var r=Le(q),t;try{for(r.s();!(t=r.n()).done;){var a=t.value;a.addEventListener("change",Ce)}}catch(i){r.e(i)}finally{r.f()}},Ie=function(){Te(),je(),document.querySelector(".header").classList.add("header-animate"),setTimeout(function(){x.classList.remove("disable-transitions")},200)};const Oe=Ie;function Me(e,r){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=xe(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(o){throw o},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var c=!0,l=!1,s;return{s:function(){t=t.call(e)},n:function(){var o=t.next();return c=o.done,o},e:function(o){l=!0,s=o},f:function(){try{!c&&t.return!=null&&t.return()}finally{if(l)throw s}}}}function xe(e,r){if(e){if(typeof e=="string")return Y(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Y(e,r)}}function Y(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a}var $=document.querySelector(".header"),qe=document.querySelectorAll(".nav-menu--link"),Pe=function(){window.scrollTo({top:0,behavior:"smooth"})},He=function(r){document.querySelector("".concat(r.target.getAttribute("href"))).scrollIntoView({behavior:"smooth"})},Z=function(){window.pageYOffset>window.innerHeight?$.classList.add("header-filter"):$.classList.remove("header-filter")},Fe=function(){Z(),window.addEventListener("scroll",Z,{passive:!0});var r=Me(qe),t;try{for(r.s();!(t=r.n()).done;){var a=t.value;a.addEventListener("click",He,{passive:!0})}}catch(i){r.e(i)}finally{r.f()}document.querySelector(".header-logo").addEventListener("click",function(){Pe()},{passive:!0})};const Be=Fe;function We(e){if(Array.isArray(e))return e}function Ue(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var a,i,c,l,s=[],n=!0,o=!1;try{if(c=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;n=!1}else for(;!(n=(a=c.call(t)).done)&&(s.push(a.value),s.length!==r);n=!0);}catch(d){o=!0,i=d}finally{try{if(!n&&t.return!=null&&(l=t.return(),Object(l)!==l))return}finally{if(o)throw i}}return s}}function K(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a}function Re(e,r){if(e){if(typeof e=="string")return K(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return K(e,r)}}function Ge(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k(e,r){return We(e)||Ue(e,r)||Re(e,r)||Ge()}const Ne=JSON.parse('{"github":{"cname":"badge-github","href":"https://github.com/chaseottofy","title":"Github","dataAcc":"@chaseottofy","dataBef":null,"idx":0},"youtube":{"cname":"badge-youtube","href":"https://www.youtube.com/channel/UCawR0cR_xHGCnKy3Vg6yc7g","title":"YouTube","dataAcc":"3.6k subs","dataBef":["@otto-fy","550,000 views"],"idx":1},"codepen":{"cname":"badge-codepen","href":"https://codepen.io/chaseottofy","title":"Codepen","dataAcc":"@chaseottofy","dataBef":null,"idx":2},"codewars":{"cname":"badge-codewars","href":"https://www.codewars.com/users/chaseottofy","title":"Codewars","dataAcc":"Top 0.5%","dataBef":["@protto","#2500"],"idx":3}}');var De=document.querySelector(".contact-menu"),Ve=document.querySelector(".img-bent-arrowsrc"),ze=Ve.getAttribute("src"),Je=document.querySelectorAll(".cm-body--img"),Ye=function(r,t,a,i,c,l){var s=document.createElement("div");s.classList.add("cm-right--top__cell"),s.classList.add(r);var n=document.createElement("a");n.classList.add("cm-right--top__cell-badge"),n.href=t,n.title=a,n.target="_blank",n.rel="noreferrer";var o=document.createElement("div");o.classList.add("badge-top");var d=document.createElement("div");d.classList.add("badge-top--profile");var u=document.createElement("div");u.classList.add("badge-top--container--svg");var f=document.createElement("img");f.classList.add("cm-header--img"),f.src=Je[l].getAttribute("src"),f.alt="";var p=document.createElement("span");if(p.setAttribute("data-acc",i),c){var m=k(c,2),v=m[0],b=m[1];p.classList.add("badge-prof"),p.setAttribute("data-bef",b),p.textContent=v,f.classList.add("badge-mug")}else p.setAttribute("data-acc",i),p.textContent=i,f.classList.add("img-icon");var y=document.createElement("div");y.classList.add("badge-footer");var g=document.createElement("img");g.setAttribute("class","img-icon cm-bent--arrow"),g.src=ze,g.alt="";var w=document.createElement("span");return w.textContent=a,u.append(f),d.append(u,p),o.append(d),y.append(g,w),n.append(o,y),s.append(n),s},$e=function(){var r=document.createElement("div");r.classList.add("cm-right");var t=document.createElement("div");t.classList.add("cm-right--top");for(var a=0,i=Object.values(Ne);a<i.length;a++){var c=i[a];t.append(Ye(c.cname,c.href,c.title,c.dataAcc,c.dataBef,c.idx))}r.append(t),De.append(r)};const Ze=$e;var R=document.querySelector(".nav-multi__contact"),H=document.querySelector(".contact-menu"),Ke=function(){var r=function a(i){!i||!i.target||i.target.closest(".contact-menu")||i.target.closest(".nav-multi__contact")||(H.classList.remove("contact-menu--active"),R.firstChild.classList.remove("nav-menu--contact--active"),H.firstElementChild.remove(),window.removeEventListener("mousemove",a))},t=function(){window.innerWidth<=640||H.classList.contains("contact-menu--active")||(H.classList.add("contact-menu--active"),Ze(),R.firstChild.classList.add("nav-menu--contact--active"),window.addEventListener("mousemove",r))};R.addEventListener("mouseenter",t)},Qe=function(){Ke()};const Xe=Qe;var L=document.querySelector(".toast-wrapper"),C=0,et=function(){L.children.length>=4&&L.removeChild(L.children[L.children.length-1]);for(var r=0;r<L.children.length;r+=1){var t=L.children[r],a=+t.getAttribute("toast-idx");a===4&&t.classList.add("hide-toast"),t.setAttribute("class","toast toast--".concat(r+1)),t.style.zIndex=9e3-r,t.style.bottom="".concat(r+2,"rem")}},tt=function(r){C<=3&&(C+=1);var t=0,a=document.createElement("aside");a.classList.add("toast"),a.style.zIndex=9e3,a.style.bottom="2rem",a.setAttribute("toast-idx",C);var i=document.createElement("span");i.classList.add("toast-progress"),i.style.width="".concat(t,"%");var c=document.createElement("span");c.classList.add("toast-progress--length");var l=document.createElement("span");l.classList.add("toast-message"),l.textContent="copied! ".concat(r),a.append(i,c,l),L.prepend(a),et(),setInterval(function(){t+=1,i.style.width="".concat(t,"%"),t===100&&(a.remove(),C>0&&(C-=1),clearInterval())},10)};const Q=tt;function X(e,r){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=rt(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(o){throw o},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var c=!0,l=!1,s;return{s:function(){t=t.call(e)},n:function(){var o=t.next();return c=o.done,o},e:function(o){l=!0,s=o},f:function(){try{!c&&t.return!=null&&t.return()}finally{if(l)throw s}}}}function rt(e,r){if(e){if(typeof e=="string")return ee(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ee(e,r)}}function ee(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a}var at=document.querySelectorAll(".cm-copy--email"),nt=document.querySelectorAll(".cm-copy--phone"),ot=function(r){try{return navigator.clipboard.writeText(r)}catch(t){console.assert(!1,t)}return!1},te=function(r){ot(r),Q(r)},it=function(){return te("ottofy@zohomail.com")},ct=function(){return te("9709882548")},st=function(){var r=X(at),t;try{for(r.s();!(t=r.n()).done;){var a=t.value;a.addEventListener("click",it)}}catch(s){r.e(s)}finally{r.f()}var i=X(nt),c;try{for(i.s();!(c=i.n()).done;){var l=c.value;l.addEventListener("click",ct)}}catch(s){i.e(s)}finally{i.f()}};const lt=st;var dt=function(){var r=document.createElement("div");r.classList.add("spinner-wrapper");var t=document.createElement("div");t.classList.add("spinner");for(var a=0;a<12;a+=1){var i=document.createElement("div");i.classList.add("spinner-cell"),t.append(i)}return r.append(t),r};const re=dt,ut=h.p+"images/cweeklgdark.a0c1c9ae.webp",mt=h.p+"images/cweekmddark.2191379c.webp",pt=h.p+"images/cmonthlgdark.100d2004.webp",ft=h.p+"images/cmonthmddark.7ab887cd.webp",vt=h.p+"images/cyearlgdark.f8ef2ed7.webp",ht=h.p+"images/cyearmddark.b50efa56.webp",yt=h.p+"images/clistlgdark2.fc5263d7.webp",gt=h.p+"images/clistmddark.5f63efc8.webp",bt=h.p+"images/reactlg.05b2cb69.webp",wt=h.p+"images/reactmd.3a43d265.webp";var kt={cweeklgdark:ut,cweekmddark:mt,cmonthlgdark:pt,cmonthmddark:ft,cyearlgdark:vt,cyearmddark:ht,clistlgdark:yt,clistmddark:gt},Lt={reactlg:bt,reactmd:wt},St={calendar:kt,react:Lt};const ae=St;function _t(e,r){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=At(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(o){throw o},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var c=!0,l=!1,s;return{s:function(){t=t.call(e)},n:function(){var o=t.next();return c=o.done,o},e:function(o){l=!0,s=o},f:function(){try{!c&&t.return!=null&&t.return()}finally{if(l)throw s}}}}function At(e,r){if(e){if(typeof e=="string")return ne(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ne(e,r)}}function ne(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a}var Et=[["cweeklgdark","cweekmddark","Calendar Week"],["cmonthlgdark","cmonthmddark","Calendar Month"],["cyearlgdark","cyearmddark","Calendar Year"],["clistlgdark","clistmddark","Calendar List"]],Tt=function(r){var t=document.createElement("aside");t.classList.add("img-skeleton"),t.append(re()),r.prepend(t)},Ct=function(r,t){Tt(r.parentElement);var a=k(t,3),i=a[0],c=a[1],l=a[2],s=function(p,m){var v=document.createElement("source");return v.srcset=p,v.media=m,v.type="image/webp",v},n=s(i,"(min-width: 640px)"),o=s(c,"(max-width: 640px)");r.append(n,o);var d=new Image;d.src=i,d.alt=l,d.style="max-width:100vw;",d.type="image/webp";var u=document.querySelector(".img-skeleton");d.decode().then(function(){r.append(d),u&&u.remove()}).catch(function(f){console.assert(!1,f),u&&u.remove()})},jt=function(r,t,a,i,c){var l=document.createElement("picture"),s=_t(a),n;try{for(s.s();!(n=s.n()).done;){var o=n.value;l.classList.add(o)}}catch(v){s.e(v)}finally{s.f()}l.setAttribute("data-hasimg","true"),l.setAttribute(t,i),r.append(l);var d=k(Et[+i-2],3),u=d[0],f=d[1],p=d[2],m=c?ae.calendar:ae.react;Ct(l,c?[m[u],m[f],p]:[m.reactlg,m.reactmd,"React Components"])};const It=jt,Ot=JSON.parse(`{"calendar":{"title":"Google Calendar 2.0","links":{"github":["https://github.com/chaseottofy/google-calendar-clone-vanilla","Google Calendar 2.0 Github Repository"],"live":["https://chaseottofy.github.io/google-calendar-clone-vanilla/","Google Calendar 2.0 Live Demo"],"audit":["https://pagespeed.web.dev/analysis/https-chaseottofy-github-io-google-calendar-clone-vanilla/3ra0nt0y2h?form_factor=desktop","Pagespeed.web.dev View Last Audit"],"screenshots":["https://flic.kr/s/aHBqjAqx9t","Google Calendar 2.0 Screenshots on Flickr"]},"features":{"about":["Fully functional, zero dependency clone of Google Calendar in its entirety.","(Does not include any content dependent on Google's API EX. Google Maps, Google MEET, etc.)","Zero third party resources used (aside from webpack & google svgs).","Written entirely in vanilla javascript, HTML, and vanilla CSS.","Optimized for performance, accessibility, and responsiveness. Stays true to the original, negates pixel-perfection only where necessary."],"performance":["Tiny 40kb build.","Heap is on average 92% smaller.","92% less css rules.","90% less css selectors.","80% less queries.","50% less dom nodes.","Perfect lighthouse score.","Now Responsive down to 280px!"],"new features":["42 new color options.","Three themes available (light, dark, and high contrast.","Transfer all events from one category to another.","Toggle animations on/off.","New sorting animations.","Now has month and year picker.","Datepicker now highlights dates with events.","Datepicker now highlights current week in week view.","Yearpicker now highlights dates with events.","Single page functionality."],"messsage":["something something"]}},"markdown":{"title":"Markdown to HTML","links":{"github":["https://github.com/chaseottofy/react-lite-markdown","Markdown Lite Github Repository"],"live":["https://chaseottofy.github.io/react-lite-markdown/","Markdown Lite Live Demo"],"audit":["https://pagespeed.web.dev/analysis/https-chaseottofy-github-io-react-lite-markdown/ov2k7dtd51?form_factor=desktop","Pagespeed.web.dev View Last Audit"],"screenshots":["https://flic.kr/s/aHBqjAB58q","Markdown Lite Screenshots on Flickr"]},"features":{"about":["Custom markdown parser/editor with real-time preview. Built with React.","What separates this from many other react markdown editors is the avoidance of dangerouslySetInnerHTML and the ability to resize the editor/preview panels. It also incorporates a dynamic numbered line system (similar to notepad++), along with three contrast-accessible themes, local storage, and a file upload/download system.","Note that this is not traditional markdown. I've kept things limited to purely what I find useful/use most of the time.","Markdown expressions are rendered/represented as react elements. Aside from avoiding potential security risks, delivering content through an actual react element raises performance significantly. Using setDangerousHtml & then performing HTML sanitation goes against every core principle of react's reconciliation process."],"performance":["50kb build.","Perfect lighthouse score.","Responsive down to mobile.","Passes all accessibility tests.","Avoids dangerouslySetInnerHTML."],"features":["Editor with real-time preview.","Three themes available (light, dark, and high contrast.","Switch between column and row layouts.","Custom dynamic number line system.","See real-time file, word, character, and line counts.","Local storage integration.","Save and upload files.","Copy to clipboard."],"commands":["# Heading 1","## Heading 2","### Heading 3","*text* bold","[link](url) link","{url} image","> blockquote","- list","___ horizontal linebreak"]}}}`);var Mt=function(){var r=document.createElement("div");r.classList.add("scrollbar-measure"),document.body.append(r);var t=r.offsetWidth-r.clientWidth;return r.remove(),t};const F=Mt;function xt(e,r){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=qt(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(o){throw o},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var c=!0,l=!1,s;return{s:function(){t=t.call(e)},n:function(){var o=t.next();return c=o.done,o},e:function(o){l=!0,s=o},f:function(){try{!c&&t.return!=null&&t.return()}finally{if(l)throw s}}}}function qt(e,r){if(e){if(typeof e=="string")return oe(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return oe(e,r)}}function oe(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a}var _=document.querySelector(".project-overview--wrapper"),B=document.querySelector("body"),ie=document.querySelector(".header"),ce=function(){_.classList.add("hide-po"),_.firstElementChild.remove(),_.removeEventListener("click",G),window.removeEventListener("keydown",se),B.classList.remove("body-prevent-scroll"),B.removeAttribute("style"),ie.removeAttribute("style")},G=function(r){(r.target.classList.contains("po-header--close")||r.target.classList.contains("project-overview--wrapper"))&&ce()},se=function(r){r.key==="Escape"&&ce()},Pt=function(){var r=document.createElement("hr");return r},Ht=function(r,t,a){var i=document.createElement("a");return i.href=r,i.target="_blank",i.rel="noopener noreferrer",i.textContent=t,i.title=a,i},Ft=function(r,t){var a=document.createElement("h4");a.textContent=r,a.classList.add("po-title");var i=document.createElement("ul");i.classList.add("po-list");var c=xt(t),l;try{for(c.s();!(l=c.n()).done;){var s=l.value,n=document.createElement("li");n.classList.add("po-list--item"),n.textContent=s,i.append(n)}}catch(o){c.e(o)}finally{c.f()}return[a,i]},Bt=function(r){var t=r.title,a=r.links,i=r.features,c=document.createElement("div");c.classList.add("project-overview--modal");var l=document.createElement("div");l.classList.add("po-header");var s=document.createElement("h3"),n=document.createElement("span");n.textContent="Project Overview: ",n.classList.add("po-header--title");var o=document.createElement("br");s.textContent=t;var d=document.createElement("button");d.textContent="x",d.classList.add("po-header--close"),d.title="Close Project Overview",d.ariaLabel="button",d.addEventListener("click",G,{once:!0}),n.append(o,s),l.append(n,d);var u=document.createElement("div");u.classList.add("po-body");var f=document.createElement("h4");f.classList.add("po-title"),f.textContent="Links",u.append(f);var p=document.createElement("div");p.classList.add("proj-overview--links");for(var m=0,v=Object.entries(a);m<v.length;m++){var b=k(v[m],2),y=b[0],g=b[1],w=k(g,2),D=w[0],V=w[1];p.append(Ht(D,y,V))}u.append(p);for(var S=0,E=Object.entries(i);S<E.length;S++){var T=k(E[S],2),O=T[0],z=T[1],M=Ft(O,z),ke=k(M,2),wr=ke[0],kr=ke[1];u.append(wr,kr,Pt())}c.append(l,u),_.append(c)},Wt=function(r){_.classList.remove("hide-po"),B.classList.add("body-prevent-scroll"),B.style.paddingRight="".concat(F(),"px"),ie.style.paddingRight="".concat(F(),"px"),Bt(Ot[r.target.getAttribute("data-proj")]),_.addEventListener("click",G),window.addEventListener("keydown",se),r.target.blur()};const Ut=Wt;function le(e,r){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=Rt(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(o){throw o},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var c=!0,l=!1,s;return{s:function(){t=t.call(e)},n:function(){var o=t.next();return c=o.done,o},e:function(o){l=!0,s=o},f:function(){try{!c&&t.return!=null&&t.return()}finally{if(l)throw s}}}}function Rt(e,r){if(e){if(typeof e=="string")return de(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return de(e,r)}}function de(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a}var ue=document.querySelectorAll(".proj-cal--tab"),me=document.querySelectorAll(".proj-comp--tab"),Gt=document.querySelectorAll(".open-overview--btn"),Nt=function(){var r={calendar:["day","week","month","year","list"],comparr:["vanilla","react"],vanilla:"https://codepen.io/chaseottofy/pens/public",react:"https://chaseottofy.github.io/react-boilerplate/"},t=function(l,s,n,o){var d="".concat(s,"-current"),u=document.querySelector(".".concat(d)),f=+u.getAttribute("data-".concat(s,"-nth"));if(l!==f){var p="".concat(s,"-cell__image--").concat(l),m=document.querySelector(".".concat(p));if(m===null){var v=s==="cal",b=[p,"".concat(s,"-current"),v?"project-image__calendar":"project-image__components"];It(u.parentElement,"data-".concat(s,"-nth"),b,+l,v),u.classList.remove(d),u.classList.add("fade-img--out"),setTimeout(function(){u.classList.add("hide-img"),u.classList.remove("fade-img--out")},200)}else u.classList.remove(d),u.classList.add("hide-img"),m.classList.remove("hide-img"),m.classList.add(d);if(o){var y=r[n],g=document.querySelector(".component-search");g.setAttribute("href",y);var w=g.lastElementChild;w.textContent="".concat(n," components")}}},a=function(l,s,n,o){var d=le(l.entries()),u;try{var f=function(){var m=k(u.value,2),v=m[0],b=m[1];b.addEventListener("click",function(){t(v+1,s,n[v],o)})};for(d.s();!(u=d.n()).done;)f()}catch(p){d.e(p)}finally{d.f()}},i=function(){ue[0].previousElementSibling.checked=!0,a(ue,"cal",r.calendar,!1),me[0].previousElementSibling.checked=!0,a(me,"comp",r.comparr,!0)};i()},Dt=function(){var r=le(Gt),t;try{for(r.s();!(t=r.n()).done;){var a=t.value;a.addEventListener("click",Ut)}}catch(i){r.e(i)}finally{r.f()}},Vt=function(){Nt(),Dt()};const zt=Vt,pe=JSON.parse('{"calendar":{"title":"Google Calendar 2.0","link":"https://pagespeed.web.dev/analysis/https-chaseottofy-github-io-google-calendar-clone-vanilla/3ra0nt0y2h?form_factor=desktop","score":["0.3","0.3","0.0","0.0"]},"markdown":{"title":"Markdown Lite ","link":"https://pagespeed.web.dev/analysis/https-chaseottofy-github-io-react-lite-markdown/ov2k7dtd51?form_factor=desktop","score":["0.3","0.3","0.0","0.0"]},"content":[["First Contentful Paint","Marks the time at which the first text or image is painted."],["Largest Contentful Paint","Marks the time at which the largest text or image is painted."],["Total Blocking Time","Sum of all time periods between FCP and Time to Interactive."],["Cumulative Layout Shift","Measures the movement of visible elements within the viewport."]]}');var fe=document.querySelector(".lighthouse-modal--wrapper"),Jt=function(r){fe.classList.remove("hide-lh-modal");var t=pe[r],a=[t.title,t.link,t.score,pe.content],i=a[0],c=a[1],l=a[2],s=a[3],n=document.createElement("div");n.classList.add("lighthouse-modal");var o=document.createElement("div"),d=document.createElement("span"),u=document.createElement("button");o.classList.add("lighthouse-modal__header"),d.classList.add("lh-appname");var f=document.createElement("span");f.textContent="Audit: ";var p=document.createElement("br");d.append(f,p,i),u.classList.add("close-lh-btn"),u.textContent="x";var m=document.createElement("div"),v=document.createElement("div"),b=document.createElement("span");m.classList.add("lighthouse-modal__body"),v.classList.add("lh-main"),b.textContent="100",b.classList.add("lh-main__score");var y=document.createElement("a");y.setAttribute("href",c),y.setAttribute("title","pagespeed.web.dev"),y.setAttribute("target","_blank"),y.setAttribute("rel","noopener noreferrer"),y.textContent="View latest audit",y.classList.add("lh-main__score-title"),o.append(d,u),v.append(b,y),m.append(v);for(var g=0;g<4;g+=1){var w=k(s[g],2),D=w[0],V=w[1],S=document.createElement("div");S.classList.add("lh-sub");var E=document.createElement("div");E.classList.add("lh-sub-title"),E.textContent=D;var T=document.createElement("div");T.classList.add("lh-sub__metrics-title");var O=document.createElement("span");O.classList.add("lh-sub__metrics-title"),O.textContent=l[g],T.append(O);var z=document.createElement("hr"),M=document.createElement("div");M.classList.add("lh-sub-subtitle"),M.textContent=V,S.append(E,T,z,M),m.append(S)}n.append(o,m),fe.append(n)};const Yt=Jt;function $t(e,r){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=Zt(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(o){throw o},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var c=!0,l=!1,s;return{s:function(){t=t.call(e)},n:function(){var o=t.next();return c=o.done,o},e:function(o){l=!0,s=o},f:function(){try{!c&&t.return!=null&&t.return()}finally{if(l)throw s}}}}function Zt(e,r){if(e){if(typeof e=="string")return ve(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ve(e,r)}}function ve(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a}var W=document.querySelector(".body"),he=document.querySelector(".header"),Kt=document.querySelectorAll(".open-lh--btn"),j=document.querySelector(".lighthouse-modal--wrapper"),Qt=function(){var r=function(){j.firstElementChild.remove(),j.classList.add("hide-lh-modal"),j.removeEventListener("click",t),window.removeEventListener("keydown",a),W.removeAttribute("style"),W.classList.remove("body-prevent-scroll"),he.removeAttribute("style")},t=function(o){(o.target.classList.contains("lighthouse-modal--wrapper")||o.target.closest(".close-lh-btn"))&&r()},a=function(o){o.key==="Escape"&&r()},i=function(o){j.classList.contains("hide-lh-modal")&&(Yt(o.target.getAttribute("data-lh-proj")),j.addEventListener("click",t),window.addEventListener("keydown",a),W.classList.add("body-prevent-scroll"),W.style.paddingRight="".concat(F(),"px"),he.style.paddingRight="".concat(F(),"px"))},c=$t(Kt),l;try{for(c.s();!(l=c.n()).done;){var s=l.value;s.addEventListener("click",i)}}catch(n){c.e(n)}finally{c.f()}},Xt=function(){Qt()};const er=Xt;function tr(e,r){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=rr(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(o){throw o},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var c=!0,l=!1,s;return{s:function(){t=t.call(e)},n:function(){var o=t.next();return c=o.done,o},e:function(o){l=!0,s=o},f:function(){try{!c&&t.return!=null&&t.return()}finally{if(l)throw s}}}}function rr(e,r){if(e){if(typeof e=="string")return ye(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ye(e,r)}}function ye(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a}var U=document.querySelector(".contact-form"),ge=document.querySelector(".form-name--input"),A=document.querySelector(".form-contact--input"),be=document.querySelector(".form-message--input"),I=document.querySelector(".submit-form--btn"),ar=document.querySelectorAll(".contact-option--input"),N=document.querySelector(".contact-form--wrapper"),nr=function(r){var t=r.target.value;t==="phone"?(A.type="tel",A.placeholder="Enter your phone number"):t==="email"&&(A.type="email",A.placeholder="Enter your email address")},or=function(){ge.value&&A.value&&be.value?(I.disabled=!1,I.classList.add("btn-allow")):(I.disabled=!0,I.classList.remove("btn-allow"))},ir=function(){var r=document.createElement("div");r.classList.add("success-message"),r.append(re()),N.classList.add("disable-form"),N.append(r)},we=function(){ge.classList.toggle("skeleton"),A.classList.toggle("skeleton"),be.classList.toggle("skeleton")},cr=function(){U.reset(),document.querySelector(".success-message").remove(),I.classList.remove("btn-allow"),N.classList.remove("disable-form"),we()},sr=function(r){r.preventDefault();var t=new FormData(U);we(),ir(),fetch("https://script.google.com/macros/s/".concat("AKfycbxIsWwtex_ib3i5kVnzqpa0SVy9wcPfZUAJEUsYY8--2Qp5ivNachSFNUs_mbyatgdo","/exec"),{method:"POST",body:t}).then(function(a){return a.text()}).then(function(){Q("Message Sent!"),cr()})},lr=function(){var r=tr(ar),t;try{for(r.s();!(t=r.n()).done;){var a=t.value;a.addEventListener("change",nr)}}catch(i){r.e(i)}finally{r.f()}U.addEventListener("input",or),U.addEventListener("submit",sr)};const dr=lr;var ur=document.querySelector(".cm-left--time"),mr=function(){return new Date().toLocaleString("en-US",{timeZone:"America/Denver",hour:"numeric",minute:"numeric",hour12:!0})},pr=function(){ur.textContent="MST: ".concat(mr())};const fr=pr;var vr=function(){var r=`
      ,o888888o. 8888888 8888888888 8888888 8888888888 ,o888888o.     
   . 8888     '88.     8 8888             8 8888    . 8888     '88.   
  ,8 8888       '8b    8 8888             8 8888   ,8 8888       '8b  
  88 8888        '8b   8 8888             8 8888   88 8888        '8b 
  88 8888         88   8 8888             8 8888   88 8888         88 
  88 8888         88   8 8888             8 8888   88 8888         88 
  88 8888        ,8P   8 8888             8 8888   88 8888        ,8P 
  '8 8888       ,8P    8 8888             8 8888   '8 8888       ,8P  
   ' 8888     ,88'     8 8888             8 8888    ' 8888     ,88'   
      '8888888P'       8 8888             8 8888       '8888888P'   
  `,t=document.querySelector(".ascii-wrapper");t.textContent=r};const hr=vr;var yr=function(){fr(),hr()};const gr=yr;var br=function(){Oe(),Be(),Xe(),lt(),zt(),er(),dr(),gr()};br()})();

//# sourceMappingURL=index.1.ef0e3c61.js.map