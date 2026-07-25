import "./style.css";
import { SYSTEMS } from "./data.js";

const $ = (id) => document.getElementById(id);
const esc = (t) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;");
// data.js stores absolute /systems/... paths; serve them relative so the app
// works under a subpath (GitHub Pages)
const rel = (f) => f.replace(/^\//, "");

function systemCard(sys, i) {
  return `<article class="card" data-i="${i}">
    <div class="shot sys-shot">
      <iframe loading="lazy" src="${rel(sys.variants[0].file)}" title="${sys.name} preview" tabindex="-1" scrolling="no"></iframe>
    </div>
    <div class="card-body">
      <div class="card-top"><h3>${sys.name}</h3><span class="sub">${sys.sub}</span></div>
      <div class="swatches">${sys.palette.map((c) => `<span class="swatch" style="background:${c}"></span>`).join("")}</div>
      <div class="tags">${sys.vocab.slice(0, 3).map((t) => `<span class="chip">${t}</span>`).join("")}
        <span class="more">+${sys.vocab.length - 3}</span></div>
      <div class="card-foot"><span>◈ Design System</span><span class="idx">${String(i + 1).padStart(2, "0")} / ${SYSTEMS.length}</span></div>
    </div></article>`;
}

$("main").innerHTML = `<section class="cat">
  <div class="cat-head">
    <p>Directions distilled from the mood board and website references. Each comes in two rendered variants: Taste (anti-slop, adapts to each system) and Impeccable (fixed amber and burnt orange brand). Click one to compare, copy its brief, or grab the image prompt.</p>
    <div class="cat-vocab">${["from the mood board", "2 rendered variants each", "click to compare"].map((v) => `<span class="chip">${v}</span>`).join("")}</div>
  </div>
  <div class="grid">${SYSTEMS.map((s, i) => systemCard(s, i)).join("")}</div>
</section>`;

let current = null;

function renderVariant(sys, idx) {
  $("mShot").innerHTML = `
    <div class="vtabs">${sys.variants.map((v, i) =>
      `<button class="${i === idx ? "on" : ""}" data-v="${i}">${v.label} variant</button>`).join("")}
      <a href="${rel(sys.variants[idx].file)}" target="_blank" rel="noopener">Open full ↗</a></div>
    <iframe src="${rel(sys.variants[idx].file)}" title="${sys.name} ${sys.variants[idx].label}"></iframe>`;
}

function openModal(sys) {
  current = sys;
  renderVariant(sys, 0);
  $("mTitle").textContent = sys.name;
  $("mSub").textContent = sys.sub;
  $("mDesc").textContent = sys.desc;
  const noteEl = $("mNote");
  if (noteEl) {
    noteEl.style.display = sys.note ? "" : "none";
    noteEl.textContent = sys.note ? "your note: " + sys.note : "";
  }
  $("mExtra").innerHTML = `
    <div class="sys-block"><b>Why this system for Ije</b><p>${sys.reasoning}</p></div>
    <div class="sys-block"><b>Pulled from</b><ul>${sys.inspirations.map((x) => `<li>${x}</li>`).join("")}</ul></div>
    <div class="sys-block"><b>Ingredients</b><p>${sys.details}</p></div>
    <div class="sys-block"><b>Palette</b><div class="swatches">${sys.palette.map((c) => `<span class="swatch big" style="background:${c}" title="${c}"></span><code>${c}</code>`).join("")}</div></div>`;
  $("mTags").innerHTML = sys.vocab.map((t) => `<span class="chip">${t}</span>`).join("");
  $("mBrief").innerHTML = "<b>DESIGN SYSTEM BRIEF</b>\n\n" + esc(sys.brief);
  $("modal").showModal();
}

$("main").addEventListener("click", (e) => {
  const c = e.target.closest(".card");
  if (c) openModal(SYSTEMS[+c.dataset.i]);
});

$("mShot").addEventListener("click", (e) => {
  const b = e.target.closest("button[data-v]");
  if (b && current) renderVariant(current, +b.dataset.v);
});

function copyBtn(btn, text) {
  navigator.clipboard.writeText(text).then(() => {
    const t = btn.textContent;
    btn.textContent = "Copied ✓";
    btn.classList.add("copied");
    setTimeout(() => { btn.textContent = t; btn.classList.remove("copied"); }, 1400);
  });
}

$("btnBrief").onclick = (e) => copyBtn(e.target,
  `Create a complete website for Ije, a curated social dining experience in Lagos, using this design system.\n\nDESIGN SYSTEM: ${current.name}\n${current.desc}\nVOCABULARY: ${current.vocab.join(", ")}\nPALETTE: ${current.palette.join(", ")}\n\n${current.brief}`);
$("btnPrompt").onclick = (e) => copyBtn(e.target, current.img);
$("btnClose").onclick = () => $("modal").close();
$("modal").addEventListener("click", (e) => { if (e.target === $("modal")) $("modal").close(); });
