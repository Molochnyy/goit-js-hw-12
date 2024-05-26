import{a as g,S as v,i}from"./assets/vendor-b11e2a50.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();let c=1,u="",d=0;function w(){const t=document.querySelector(".loader");t.style.display="block"}function L(){const t=document.querySelector(".loader");t.style.display="none"}async function m(t,s=1){w();const a=`https://pixabay.com/api/?${new URLSearchParams({key:"44066114-c3ff57994064ae6e377a0cfb1",q:t.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s})}`;try{const e=await g.get(a);return d=e.data.totalHits,e.data}catch(e){throw console.error("Error:",e),e}finally{L()}}function P(){c=1}function S(){c+=1}function f(){return c}function b(t){u=t}function y(){return u}function q(){return d}const p=document.querySelector(".list"),x=new v(".item-list-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}),h=t=>{const s=t.hits.map(r=>`
      <li class="item-list">
        <a href="${r.largeImageURL}" class="item-list-link">
          <img class="item-list-img" src="${r.webformatURL}" alt="${r.tags}">
        </a>
        <div class='markup-info'>
          <div class="item-list-info-text">
            <h3 class="item-list-title">Likes</h3>
            <p class="item-list-text">${r.likes}</p>
          </div>
          <div class="item-list-info-text">
            <h3 class="item-list-title">Views</h3>
            <p class="item-list-text">${r.views}</p>
          </div>
          <div class="item-list-info-text">
            <h3 class="item-list-title">Comments</h3>
            <p class="item-list-text">${r.comments}</p>
          </div>
          <div class="item-list-info-text">
            <h3 class="item-list-title">Downloads</h3>
            <p class="item-list-text">${r.downloads}</p>
          </div>
        </div>
      </li>
    `).join("");p.insertAdjacentHTML("beforeend",s),x.refresh()},E=document.querySelector(".searchButton"),n=document.querySelector(".load-more"),$=()=>{const t=document.querySelector(".input");t.value=""};E.addEventListener("click",async t=>{t.preventDefault();const s=document.querySelector(".input");if(s.value.trim()===""){i.error({title:"Error",message:"The search field cannot be empty! Please enter the search query!"});return}P(),b(s.value),p.innerHTML="",n.style.display="none";try{const r=await m(y(),f());h(r),r.hits.length&&(n.style.display="block"),r.totalHits===0&&i.error({title:"Error",message:"Sorry, there was an error when receiving data. Please try again!"})}catch{i.error({title:"Error",message:"Sorry, there was an error when receiving data. Please try again!"})}$()});n.addEventListener("click",async()=>{S();try{const t=await m(y(),f());h(t),document.querySelectorAll(".item-list").length>=q()&&(n.style.display="none",i.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}));const{height:r}=document.querySelector(".item-list").getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}catch{i.error({title:"Error",message:"Sorry, there was an error when receiving data. Please try again!"})}});
//# sourceMappingURL=commonHelpers.js.map
