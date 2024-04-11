"use strict";(self.microchunkLoader=self.microchunkLoader||[]).push([[662],{7587:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});let n=r(8775),a=r(7403);t.default=function({html:e,height:t=null,width:r=null,children:o,dataNtpc:l=""}){return(0,a.useEffect)(()=>{l&&performance.mark("mark_feature_usage",{detail:{feature:`next-third-parties-${l}`}})},[l]),(0,n.jsxs)(n.Fragment,{children:[o,e?(0,n.jsx)("div",{style:{height:null!=t?`${t}px`:"auto",width:null!=r?`${r}px`:"auto"},"data-ntpc":l,dangerouslySetInnerHTML:{__html:e}}):null]})}},2402:function(e,t,r){let n;var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=void 0;let o=r(8775),l=r(7403),i=a(r(7573));t.GoogleAnalytics=function(e){let{gaId:t,dataLayerName:r="dataLayer"}=e;return void 0===n&&(n=r),(0,l.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-ga"}})},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.default,{id:"_next-ga-init",dangerouslySetInnerHTML:{__html:`
          window['${r}'] = window['${r}'] || [];
          function gtag(){window['${r}'].push(arguments);}
          gtag('js', new Date());

          gtag('config', '${t}');`}}),(0,o.jsx)(i.default,{id:"_next-ga",src:`https://www.googletagmanager.com/gtag/js?id=${t}`})]})};let u=(...e)=>{if(void 0===n){console.warn("@next/third-parties: GA has not been initialized");return}window[n]?window[n].push(...e):console.warn(`@next/third-parties: GA dataLayer ${n} does not exist`)};t.sendGAEvent=u},4885:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let a=r(8775),o=r(2235),l=n(r(7587));t.default=function(e){let{apiKey:t,...r}=e,n={...r,key:t},{html:i}=(0,o.GoogleMapsEmbed)(n);return(0,a.jsx)(l.default,{height:n.height||null,width:n.width||null,html:i,dataNtpc:"GoogleMapsEmbed"})}},7142:function(e,t,r){let n;var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendGTMEvent=t.GoogleTagManager=void 0;let o=r(8775),l=r(7403),i=a(r(7573));t.GoogleTagManager=function(e){let{gtmId:t,dataLayerName:r="dataLayer",auth:a,preview:u,dataLayer:s}=e;void 0===n&&(n=r);let d="dataLayer"!==r?`$l=${r}`:"",c=a?`&gtm_auth=${a}`:"",f=u?`&gtm_preview=${u}&gtm_cookies_win=x`:"";return(0,l.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-gtm"}})},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.default,{id:"_next-gtm-init",dangerouslySetInnerHTML:{__html:`
      (function(w,l){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        ${s?`w[l].push(${JSON.stringify(s)})`:""}
      })(window,'${r}');`}}),(0,o.jsx)(i.default,{id:"_next-gtm","data-ntpc":"GTM",src:`https://www.googletagmanager.com/gtm.js?id=${t}${d}${c}${f}`})]})};let u=e=>{if(void 0===n){console.warn("@next/third-parties: GTM has not been initialized");return}window[n]?window[n].push(e):console.warn(`@next/third-parties: GTM dataLayer ${n} does not exist`)};t.sendGTMEvent=u},3804:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=t.sendGTMEvent=t.GoogleTagManager=t.YouTubeEmbed=t.GoogleMapsEmbed=void 0;var a=r(4885);Object.defineProperty(t,"GoogleMapsEmbed",{enumerable:!0,get:function(){return n(a).default}});var o=r(697);Object.defineProperty(t,"YouTubeEmbed",{enumerable:!0,get:function(){return n(o).default}});var l=r(7142);Object.defineProperty(t,"GoogleTagManager",{enumerable:!0,get:function(){return l.GoogleTagManager}}),Object.defineProperty(t,"sendGTMEvent",{enumerable:!0,get:function(){return l.sendGTMEvent}});var i=r(2402);Object.defineProperty(t,"GoogleAnalytics",{enumerable:!0,get:function(){return i.GoogleAnalytics}}),Object.defineProperty(t,"sendGAEvent",{enumerable:!0,get:function(){return i.sendGAEvent}})},697:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let a=r(8775),o=n(r(7573)),l=r(2235),i=n(r(7587)),u={server:"beforeInteractive",client:"afterInteractive",idle:"lazyOnload",worker:"worker"};t.default=function(e){let{html:t,scripts:r,stylesheets:n}=(0,l.YouTubeEmbed)(e);return(0,a.jsx)(i.default,{height:e.height||null,width:e.width||null,html:t,dataNtpc:"YouTubeEmbed",children:null==r?void 0:r.map(e=>(0,a.jsx)(o.default,{src:e.url,strategy:u[e.strategy],stylesheets:n},e.url))})}},3662:function(e,t,r){r.r(t),r.d(t,{default:function(){return o}});var n=r(8775);r(7403);var a=r(3804);function o(){return(0,n.jsx)(a.GoogleAnalytics,{gaId:" G-4N5P9JYTPV"})}},2235:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.YouTubeEmbed=t.GoogleMapsEmbed=t.GoogleAnalytics=void 0;var n=r(5911);Object.defineProperty(t,"GoogleAnalytics",{enumerable:!0,get:function(){return n.GoogleAnalytics}});var a=r(6398);Object.defineProperty(t,"GoogleMapsEmbed",{enumerable:!0,get:function(){return a.GoogleMapsEmbed}});var o=r(2594);Object.defineProperty(t,"YouTubeEmbed",{enumerable:!0,get:function(){return o.YouTubeEmbed}})},5911:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleAnalytics=void 0;let o=a(r(452)),l=r(5909),i=e=>{var t=n(e,[]);return(0,l.formatData)(o.default,t)};t.GoogleAnalytics=i},6398:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleMapsEmbed=void 0;let o=a(r(4399)),l=r(5909),i=e=>{var t=n(e,[]);return(0,l.formatData)(o.default,t)};t.GoogleMapsEmbed=i},2594:function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.YouTubeEmbed=void 0;let o=a(r(9699)),l=r(5909),i=e=>{var t=n(e,[]);return(0,l.formatData)(o.default,t)};t.YouTubeEmbed=i},5909:function(e,t){function r(e,t,r=!1){return t?Object.keys(e).filter(e=>r?!t.includes(e):t.includes(e)).reduce((t,r)=>(t[r]=e[r],t),{}):{}}function n(e,t,r,n){let a=n&&Object.keys(n).length>0?new URL(Object.values(n)[0],e):new URL(e);return t&&r&&t.forEach(e=>{r[e]&&a.searchParams.set(e,r[e])}),a.toString()}function a(e,t,r,a,o){var l;if(!t)return`<${e}></${e}>`;let i=(null===(l=t.src)||void 0===l?void 0:l.url)?Object.assign(Object.assign({},t),{src:n(t.src.url,t.src.params,a,o)}):t,u=Object.keys(Object.assign(Object.assign({},i),r)).reduce((e,t)=>{let n=null==r?void 0:r[t],a=i[t],o=null!=n?n:a,l=!0===o?t:`${t}="${o}"`;return o?e+` ${l}`:e},"");return`<${e}${u}></${e}>`}Object.defineProperty(t,"__esModule",{value:!0}),t.formatData=t.createHtml=t.formatUrl=void 0,t.formatUrl=n,t.createHtml=a,t.formatData=function(e,t){var o,l,i,u,s;let d=null===(o=e.scripts)||void 0===o?void 0:o.reduce((e,t)=>[...e,...Array.isArray(t.params)?t.params:[]],[]),c=r(t,d),f=r(t,null===(i=null===(l=e.html)||void 0===l?void 0:l.attributes.src)||void 0===i?void 0:i.params),g=r(t,[null===(s=null===(u=e.html)||void 0===u?void 0:u.attributes.src)||void 0===s?void 0:s.slugParam]),p=r(t,[...Object.keys(c),...Object.keys(f),...Object.keys(g)],!0);return Object.assign(Object.assign({},e),{html:e.html?a(e.html.element,e.html.attributes,p,f,g):null,scripts:e.scripts?e.scripts.map(e=>Object.assign(Object.assign({},e),{url:n(e.url,e.params,c)})):null})}},452:function(e){e.exports=JSON.parse('{"id":"google-analytics","description":"Install a Google Analytics tag on your website","website":"https://analytics.google.com/analytics/web/","scripts":[{"url":"https://www.googletagmanager.com/gtag/js","params":["id"],"strategy":"worker","location":"head","action":"append"},{"code":"window.dataLayer=window.dataLayer||[];window.gtag=function gtag(){window.dataLayer.push(arguments);};gtag(\'js\',new Date());gtag(\'config\',\'${args.id}\')","strategy":"worker","location":"head","action":"append"}]}')},4399:function(e){e.exports=JSON.parse('{"id":"google-maps-embed","description":"Embed a Google Maps embed on your webpage","website":"https://developers.google.com/maps/documentation/embed/get-started","html":{"element":"iframe","attributes":{"loading":"lazy","src":{"url":"https://www.google.com/maps/embed/v1/place","slugParam":"mode","params":["key","q","center","zoom","maptype","language","region"]},"referrerpolicy":"no-referrer-when-downgrade","frameborder":"0","style":"border:0","allowfullscreen":true,"width":null,"height":null}}}')},9699:function(e){e.exports=JSON.parse('{"id":"youtube-embed","description":"Embed a YouTube embed on your webpage.","website":"https://github.com/paulirish/lite-youtube-embed","html":{"element":"lite-youtube","attributes":{"videoid":null,"playlabel":null}},"stylesheets":["https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.css"],"scripts":[{"url":"https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.js","strategy":"idle","location":"head","action":"append"}]}')}}]);