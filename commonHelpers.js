import{a as g,S as f,i as l}from"./assets/vendor-06b1bbdf.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();let c=2;async function y(r,o){const s="https://pixabay.com/api/",a="43257905-28a3b58ba6106b31a5e4f67d7",e=new URLSearchParams({key:a,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}),{data:t}=await g(`${s}?${e}`);return console.log(t),t}const d=document.querySelector(".gallery-nav");function h(r){const o=r.hits.map(({webformatURL:a,largeImageURL:e,tags:t,likes:i,views:u,comments:m,downloads:p})=>`
        <li class="gallery-item">
        <a class="gallery-link" href="${e}">
        <img 
        class="gallery-image"
        src="${a}"
        alt="${t}"/>
        <div class="image-information">
        <p>Likes: ${i}</p>
        <p>Views: ${u}</p>
        <p>Comments: ${m}</p>
        <p>Downloads: ${p}</p>
        </div>
        
        </a>
        </li>`).join("");d.insertAdjacentHTML("beforeend",o),new f(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}console.log(c);const n=document.querySelector(".loader"),b=document.querySelector(".input-field"),L=document.querySelector(".js-load-more");L.addEventListener("click",loadFoto);b.addEventListener("submit",w);function w(r){r.preventDefault(),d.innerHTML="",n.classList.remove(".hidden");const o=r.target.elements.designation.value.trim();y(o,c).then(s=>{console.log(s),s.totalHits===0||o===""?(n.classList.add(".hidden"),l.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"red",position:"bottomCenter",iconColor:"white"})):(n.classList.add(".hidden"),l.success({iconColor:"yellow",message:"Enjoy watching!",position:"topRight",backgroundColor:"blue",messageColor:"yellow"}),h(s))}),r.target.reset()}
//# sourceMappingURL=commonHelpers.js.map
