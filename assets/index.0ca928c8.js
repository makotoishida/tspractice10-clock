const u=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}};u();const d=document.querySelector("#app");function f(){const e=new Date;a(e)}function a(e){const o=e.getHours(),i=e.getMinutes(),r=e.getSeconds(),t=360*r/60,n=360*i/60+t/60,s=360*(o%12)/12+n/12;d.innerHTML=`
    <div class="clock">
      <svg version="1.1" baseProfile="full" width="400" height="400" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#ffc" />
        <circle cx="200" cy="200" r="190" fill="#fefefe" stroke="#888" />
        ${g(e)}
        ${c(16,128,s,"#1010e0d0")}
        ${c(10,158,n,"#4040e0d0")}
        ${c(3,170,t,"#f060e0d0")}
      </svg>
    </div>
  `}function c(e,o,i,r){return`<polygon points="-${e},${o*.04} -${e*.4},-${o*.96} 0,-${o} ${e*.4},-${o*.96} ${e},${o*.04}" style="transform: translate(50%, 50%) rotate(${i}deg) " fill="${r}" />`}function g(e){return`<text x="200" y="280" font-size="40" text-anchor="middle" fill="#88c">
    ${m(e)}
  </text>`}function m(e){const o=e.getHours(),i=e.getMinutes(),r=e.getSeconds();return`${l(o)}:${l(i)}:${l(r)}`}function l(e){return`0${e}`.slice(-2)}setInterval(()=>f(),1e3);f();
