const a=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}};a();const d=document.querySelector("#app");function f(){const e=new Date;u(e)}function u(e){const r=e.getHours(),s=e.getMinutes(),o=e.getSeconds(),t=360*o/60,n=360*s/60+t/60,i=360*(r%12)/12+n/12;d.innerHTML=`
    <div class="clock">
      <svg version="1.1" baseProfile="full" width="400" height="400" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#ffc" />
        <circle cx="200" cy="200" r="190" fill="#fefefe" stroke="#888" />
        ${g()}
        ${$(e)}
        ${c(16,128,i,"#1010e0d0")}
        ${c(10,158,n,"#4040e0d0")}
        ${c(3,170,t,"#f060e0d0")}
      </svg>
    </div>
  `}function g(){return[...new Array(12)].map((r,s)=>{const o=360*s/12-90,t=200+Math.cos(o*Math.PI/180)*140,n=200+Math.sin(o*Math.PI/180)*140+12;return`<rect x="-3" y="${-18-165}" rx="4" ry="4" width="5" height="18" fille="#000" style="transform: translate(50%,50%) rotate(${o}deg)" />
      <text x="${t}" y="${n}" font-size="28" text-anchor="middle" fill="#404040f0">${s===0?12:s}</text>`}).join("")}function c(e,r,s,o){return`<polygon points="-${e},${r*.04} -${e*.4},-${r*.96} 0,-${r} ${e*.4},-${r*.96} ${e},${r*.04}" style="transform: translate(50%, 50%) rotate(${s}deg) " fill="${o}" />`}function $(e){return`<text x="200" y="280" font-size="40" text-anchor="middle" fill="#404040e0">
    ${m(e)}
  </text>`}function m(e){const r=e.getHours(),s=e.getMinutes(),o=e.getSeconds();return`${l(r)}:${l(s)}:${l(o)}`}function l(e){return`0${e}`.slice(-2)}setInterval(()=>f(),1e3);f();
