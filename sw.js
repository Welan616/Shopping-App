if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const f=e=>s(e,r),a={module:{uri:r},exports:c,require:f};i[r]=Promise.all(n.map((e=>a[e]||f(e)))).then((e=>(o(...e),c)))}}define(["./workbox-9a84fccb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"dexie.min.js",revision:"45cbf2991685e99b99e63dce3c234f44"},{url:"index.css",revision:"67534061e435cfc025b2b853f8b2ceb4"},{url:"index.html",revision:"ed4d29a833567ee240c19add88a3cfed"},{url:"index.js",revision:"02bfd4582c98f239b20927a615657a23"},{url:"package-lock.json",revision:"2e48b12840f2f545f8aeb8f00ec6e07d"},{url:"package.json",revision:"4a4fbe29de38ab527197dafb5c5afc27"},{url:"shopping-app-images/assets/icon-192.png",revision:"45f0e9513ee33bdb3ff8879f7c2fc268"},{url:"shopping-app-images/assets/icon-384.png",revision:"3cf251a83522d13e74d40f753556f2a0"},{url:"shopping-app-images/assets/icon-512.png",revision:"69cea7d072d7e42f2bad8b6b1a562b09"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map