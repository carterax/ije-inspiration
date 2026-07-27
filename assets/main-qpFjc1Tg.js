import{C as l,S as s}from"./data-B5KkmLZi.js";const m=(t,n)=>`https://image.thum.io/get/width/${n}/crop/900/${t}`,e=t=>document.getElementById(t),d=["storytelling","structure","editorial","hotel","cultural","experimental"],p=["all",...d,...Object.keys(l).filter(t=>!d.includes(t))];let r="all";function v(){e("filters").innerHTML=p.map(t=>{const n=t==="all"?s.length:s.filter(o=>o.cat===t).length,i=t==="all"?"All":l[t].name;return`<button data-k="${t}" class="${t===r?"active":""}">${i}<span class="n">${n}</span></button>`}).join("")}e("filters").addEventListener("click",t=>{const n=t.target.closest("button");n&&(r=n.dataset.k,v(),$())});function u(t,n){return`<article class="card" data-i="${s.indexOf(t)}">
    <div class="shot"><div class="fallback">loading preview…</div>
      <img loading="lazy" src="${m(t.url,600)}" alt="${t.name} preview" onerror="this.remove()"></div>
    <div class="card-body">
      <div class="card-top"><h3>${t.name}</h3><span class="sub">${t.sub}</span></div>
      <div class="tags">${t.tags.slice(0,3).map(i=>`<span class="chip">${i}</span>`).join("")}
        ${t.tags.length>3?`<span class="more">+${t.tags.length-3}</span>`:""}</div>
      <div class="card-foot"><span>◆ ${l[t.cat].name}</span><span class="idx">${String(n+1).padStart(2,"0")} / ${s.length}</span></div>
    </div></article>`}function $(){const t=r==="all"?p.slice(1):[r];e("main").innerHTML=t.map(n=>{const i=s.filter(c=>c.cat===n);if(!i.length)return"";const o=l[n];return`<section class="cat">
      <div class="cat-head"><h2>${o.name}</h2><p>${o.desc}</p>
        <div class="cat-vocab">${o.vocab.map(c=>`<span class="chip">${c}</span>`).join("")}</div></div>
      <div class="grid">${i.map(c=>u(c,s.indexOf(c))).join("")}</div>
    </section>`}).join("")}e("main").addEventListener("click",t=>{const n=t.target.closest(".card");n&&f(s[+n.dataset.i])});let a=null;function f(t){a=t,e("mShot").innerHTML=`<img src="${m(t.url,1200)}" alt="${t.name} preview" onerror="this.remove()">`,e("mTitle").textContent=t.name,e("mSub").textContent=t.sub,e("mDesc").textContent=t.desc,e("mNote").style.display=t.note?"":"none",e("mNote").textContent=t.note?"your note: "+t.note:"",e("mTags").innerHTML=t.tags.map(n=>`<span class="chip">${n}</span>`).join(""),e("mBrief").innerHTML=`<b>WEBSITE BRIEF</b>

`+t.brief.replace(/&/g,"&amp;").replace(/</g,"&lt;"),e("btnVisit").href=t.url,e("btnLive").textContent="Load Live Preview",e("modal").showModal()}function g(t,n){navigator.clipboard.writeText(n).then(()=>{const i=t.textContent;t.textContent="Copied ✓",t.classList.add("copied"),setTimeout(()=>{t.textContent=i,t.classList.remove("copied")},1400)})}e("btnBrief").onclick=t=>g(t.target,`Create a complete website for me.

REFERENCE: ${a.name} (${a.url})
DESIGN LANGUAGE: ${l[a.cat].name} - ${l[a.cat].desc}
VOCABULARY: ${a.tags.join(", ")}

${a.brief}`);e("btnPrompt").onclick=t=>g(t.target,a.img);e("btnLive").onclick=t=>{e("mShot").innerHTML=`<iframe src="${a.url}" title="${a.name}"></iframe>`,t.target.textContent="Live (may be blocked by site)"};e("btnClose").onclick=()=>e("modal").close();e("modal").addEventListener("click",t=>{t.target===e("modal")&&e("modal").close()});v();$();
