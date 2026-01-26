import{a as d,S as m,i as n}from"./assets/vendor-CyQxvrJ3.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p="54379663-e2fd745327bebc4e5f575e9d2",y="https://pixabay.com/api/";async function g(o){return(await d.get(y,{params:{key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){const r=o.map(({webformatURL:s,largeImageURL:i,tags:e,likes:t,views:a,comments:u,downloads:f})=>` <li class="gallery-item">
            <a href='${i}'>
                <img src="${s}" alt="${e}" >
            </a>
            <div class="info">
          <p>Likes: ${t}</p>
          <p>Views: ${a}</p>
          <p>Comments: ${u}</p>
          <p>Downloads: ${f}</p>
        </div>
    </li> `).join("");c.insertAdjacentHTML("beforeend",r),h.refresh()}function b(){c.innerHTML=""}function v(){l.classList.add("is-visible")}function w(){l.classList.remove("is-visible")}const S=document.querySelector(".form");S.addEventListener("submit",async o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(r){b(),v();try{const s=await g(r);if(s.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}L(s.hits)}catch{n.error({message:"Something went wrong. Please try again later!"})}finally{w()}}});
//# sourceMappingURL=index.js.map
