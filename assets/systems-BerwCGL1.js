import{a as s}from"./data-B5KkmLZi.js";const t=a=>document.getElementById(a),d=a=>a.replace(/&/g,"&amp;").replace(/</g,"&lt;"),o=a=>a.replace(/^\//,"");function p(a,e){return`<article class="card" data-i="${e}">
    <div class="shot sys-shot">
      <iframe loading="lazy" src="${o(a.variants[0].file)}" title="${a.name} preview" tabindex="-1" scrolling="no"></iframe>
    </div>
    <div class="card-body">
      <div class="card-top"><h3>${a.name}</h3><span class="sub">${a.sub}</span></div>
      <div class="swatches">${a.palette.map(n=>`<span class="swatch" style="background:${n}"></span>`).join("")}</div>
      <div class="tags">${a.vocab.slice(0,3).map(n=>`<span class="chip">${n}</span>`).join("")}
        <span class="more">+${a.vocab.length-3}</span></div>
      <div class="card-foot"><span>◈ Design System</span><span class="idx">${String(e+1).padStart(2,"0")} / ${s.length}</span></div>
    </div></article>`}t("main").innerHTML=`<section class="cat">
  <div class="cat-head">
    <p>Directions distilled from the mood board and website references. Each comes in two rendered variants: Taste (anti-slop, adapts to each system) and Impeccable (fixed amber and burnt orange brand). Click one to compare, copy its brief, or grab the image prompt.</p>
    <div class="cat-vocab">${["from the mood board","2 rendered variants each","click to compare"].map(a=>`<span class="chip">${a}</span>`).join("")}</div>
  </div>
  <div class="grid">${s.map((a,e)=>p(a,e)).join("")}</div>
</section>`;let i=null;function l(a,e){t("mShot").innerHTML=`
    <div class="vtabs">${a.variants.map((n,c)=>`<button class="${c===e?"on":""}" data-v="${c}">${n.label} variant</button>`).join("")}
      <a href="${o(a.variants[e].file)}" target="_blank" rel="noopener">Open full ↗</a></div>
    <iframe src="${o(a.variants[e].file)}" title="${a.name} ${a.variants[e].label}"></iframe>`}function m(a){i=a,l(a,0),t("mTitle").textContent=a.name,t("mSub").textContent=a.sub,t("mDesc").textContent=a.desc;const e=t("mNote");e&&(e.style.display=a.note?"":"none",e.textContent=a.note?"your note: "+a.note:""),t("mExtra").innerHTML=`
    <div class="sys-block"><b>Why this system for Ije</b><p>${a.reasoning}</p></div>
    <div class="sys-block"><b>Pulled from</b><ul>${a.inspirations.map(n=>`<li>${n}</li>`).join("")}</ul></div>
    <div class="sys-block"><b>Ingredients</b><p>${a.details}</p></div>
    <div class="sys-block"><b>Palette</b><div class="swatches">${a.palette.map(n=>`<span class="swatch big" style="background:${n}" title="${n}"></span><code>${n}</code>`).join("")}</div></div>`,t("mTags").innerHTML=a.vocab.map(n=>`<span class="chip">${n}</span>`).join(""),t("mBrief").innerHTML=`<b>DESIGN SYSTEM BRIEF</b>

`+d(a.brief),t("modal").showModal()}t("main").addEventListener("click",a=>{const e=a.target.closest(".card");e&&m(s[+e.dataset.i])});t("mShot").addEventListener("click",a=>{const e=a.target.closest("button[data-v]");e&&i&&l(i,+e.dataset.v)});function r(a,e){navigator.clipboard.writeText(e).then(()=>{const n=a.textContent;a.textContent="Copied ✓",a.classList.add("copied"),setTimeout(()=>{a.textContent=n,a.classList.remove("copied")},1400)})}t("btnBrief").onclick=a=>r(a.target,`Create a complete website for Ije, a curated social dining experience in Lagos, using this design system.

DESIGN SYSTEM: ${i.name}
${i.desc}
VOCABULARY: ${i.vocab.join(", ")}
PALETTE: ${i.palette.join(", ")}

${i.brief}`);t("btnPrompt").onclick=a=>r(a.target,i.img);t("btnClose").onclick=()=>t("modal").close();t("modal").addEventListener("click",a=>{a.target===t("modal")&&t("modal").close()});
