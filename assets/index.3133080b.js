const $=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}};$();const m=document.querySelector("#app"),y=[{title:"Honolulu",tz:-10},{title:"Tokyo",tz:9},{title:"Los Angels",tz:-7},{title:"New York",tz:-4},{title:"UTC",tz:0}];function f(){const t=new Date,o=y.map(r=>p(t,180,r.title,r.tz)).join("");m.innerHTML=o}function p(t,o,r,s){const e=new Date(t);e.setHours(t.getUTCHours()+s);const n=e.getHours(),i=e.getMinutes(),d=e.getSeconds(),a=360*d/60,u=360*i/60+a/60,g=360*(n%12)/12+u/12;return`
    <div class="clock" style="width: ${o}px; height: ${o}px; margin: 0 auto;">
      <svg version="1.1" width="100%" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="200" r="190" fill="#fefefe" stroke="#888" />
        ${h()}
        ${x(r)}
        ${w(t)}
        ${c(16,128,g,"#1010e0d0")}
        ${c(10,158,u,"#4040e0d0")}
        ${c(3,170,a,"#f060e0d0")}
      </svg>
    </div>
  `}function h(){return[...new Array(12)].map((o,r)=>{const s=360*r/12-90,e=200+Math.cos(s*Math.PI/180)*140,n=200+Math.sin(s*Math.PI/180)*140+12;return`<rect x="-3" y="${-18-165}" rx="4" ry="4" width="5" height="18" fille="#000" style="transform: translate(50%,50%) rotate(${s}deg)" />
      <text x="${e}" y="${n}" font-size="28" text-anchor="middle" fill="#404040f0">${r===0?12:r}</text>`}).join("")}function c(t,o,r,s){return`<polygon points="-${t},${o*.04} -${t*.4},-${o*.96} 0,-${o} ${t*.4},-${o*.96} ${t},${o*.04}" style="transform: translate(50%, 50%) rotate(${r}deg) " fill="${s}" />`}function x(t){return`<text x="200" y="160" font-size="36" text-anchor="middle" fill="#404040e0">
    ${t}
  </text>`}function w(t){return`<text x="200" y="270" font-size="32" text-anchor="middle" fill="#404040e0">
    ${v(t)}
  </text>`}function v(t){const o=t.getHours(),r=t.getMinutes(),s=t.getSeconds();return`${l(o)}:${l(r)}:${l(s)}`}function l(t){return`0${t}`.slice(-2)}setInterval(()=>f(),1e3);f();
