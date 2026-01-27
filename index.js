import{a as d,S as m,i as n}from"./assets/vendor-CyQxvrJ3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const y="54379663-e2fd745327bebc4e5f575e9d2",p="https://pixabay.com/api/";async function g(o){return(await d.get(p,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){const t=o.map(({webformatURL:s,largeImageURL:i,tags:e,likes:r,views:a,comments:u,downloads:f})=>` <li class="gallery-item">
            <a href='${i}'>
                <img clsss="gallery-img" src="${s}" alt="${e}" >
            </a>
            <div class="info">
          <p class="info-container">Likes ${r}</p>
          <p>Views ${a}</p>
          <p>Comments ${u}</p>
          <p>Downloads ${f}</p>
        </div>
    </li> `).join("");c.insertAdjacentHTML("beforeend",t),h.refresh()}function b(){c.innerHTML=""}function v(){l.classList.add("is-visible")}function S(){l.classList.remove("is-visible")}const q=document.querySelector(".form");q.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements["search-text"].value.trim();if(t){b(),v();try{const s=await g(t);if(s.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}L(s.hits)}catch{n.error({message:"Sorry, there are no images matching your search query. Please try again!"})}finally{S()}}});
//# sourceMappingURL=index.js.map
