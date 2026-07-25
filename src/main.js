import "./style.css";
import { CATS, SITES } from "./data.js";

const shotUrl = (u, w) => `https://image.thum.io/get/width/${w}/crop/900/${u}`;
const $ = (id) => document.getElementById(id);

/* filters */
const base = ["storytelling", "structure", "editorial", "hotel", "cultural", "experimental"];
const order = ["all", ...base, ...Object.keys(CATS).filter((k) => !base.includes(k))];
let active = "all";

function renderFilters() {
  $("filters").innerHTML = order.map((k) => {
    const n = k === "all" ? SITES.length : SITES.filter((s) => s.cat === k).length;
    const label = k === "all" ? "All" : CATS[k].name;
    return `<button data-k="${k}" class="${k === active ? "active" : ""}">${label}<span class="n">${n}</span></button>`;
  }).join("");
}

$("filters").addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  active = b.dataset.k;
  renderFilters();
  renderMain();
});

/* cards */
function card(s, i) {
  return `<article class="card" data-i="${SITES.indexOf(s)}">
    <div class="shot"><div class="fallback">loading preview…</div>
      <img loading="lazy" src="${shotUrl(s.url, 600)}" alt="${s.name} preview" onerror="this.remove()"></div>
    <div class="card-body">
      <div class="card-top"><h3>${s.name}</h3><span class="sub">${s.sub}</span></div>
      <div class="tags">${s.tags.slice(0, 3).map((t) => `<span class="chip">${t}</span>`).join("")}
        ${s.tags.length > 3 ? `<span class="more">+${s.tags.length - 3}</span>` : ""}</div>
      <div class="card-foot"><span>◆ ${CATS[s.cat].name}</span><span class="idx">${String(i + 1).padStart(2, "0")} / ${SITES.length}</span></div>
    </div></article>`;
}

function renderMain() {
  const cats = active === "all" ? order.slice(1) : [active];
  $("main").innerHTML = cats.map((k) => {
    const sites = SITES.filter((s) => s.cat === k);
    if (!sites.length) return "";
    const c = CATS[k];
    return `<section class="cat">
      <div class="cat-head"><h2>${c.name}</h2><p>${c.desc}</p>
        <div class="cat-vocab">${c.vocab.map((v) => `<span class="chip">${v}</span>`).join("")}</div></div>
      <div class="grid">${sites.map((s) => card(s, SITES.indexOf(s))).join("")}</div>
    </section>`;
  }).join("");
}

$("main").addEventListener("click", (e) => {
  const c = e.target.closest(".card");
  if (c) openModal(SITES[+c.dataset.i]);
});

/* modal */
let current = null;

function openModal(s) {
  current = s;
  $("mShot").innerHTML = `<img src="${shotUrl(s.url, 1200)}" alt="${s.name} preview" onerror="this.remove()">`;
  $("mTitle").textContent = s.name;
  $("mSub").textContent = s.sub;
  $("mDesc").textContent = s.desc;
  $("mNote").style.display = s.note ? "" : "none";
  $("mNote").textContent = s.note ? "your note: " + s.note : "";
  $("mTags").innerHTML = s.tags.map((t) => `<span class="chip">${t}</span>`).join("");
  $("mBrief").innerHTML = "<b>WEBSITE BRIEF</b>\n\n" + s.brief.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  $("btnVisit").href = s.url;
  $("btnLive").textContent = "Load Live Preview";
  $("modal").showModal();
}

function copyBtn(btn, text) {
  navigator.clipboard.writeText(text).then(() => {
    const t = btn.textContent;
    btn.textContent = "Copied ✓";
    btn.classList.add("copied");
    setTimeout(() => { btn.textContent = t; btn.classList.remove("copied"); }, 1400);
  });
}

$("btnBrief").onclick = (e) => copyBtn(e.target,
  `Create a complete website for me.\n\nREFERENCE: ${current.name} (${current.url})\nDESIGN LANGUAGE: ${CATS[current.cat].name} - ${CATS[current.cat].desc}\nVOCABULARY: ${current.tags.join(", ")}\n\n${current.brief}`);
$("btnPrompt").onclick = (e) => copyBtn(e.target, current.img);
$("btnLive").onclick = (e) => {
  $("mShot").innerHTML = `<iframe src="${current.url}" title="${current.name}"></iframe>`;
  e.target.textContent = "Live (may be blocked by site)";
};
$("btnClose").onclick = () => $("modal").close();
$("modal").addEventListener("click", (e) => { if (e.target === $("modal")) $("modal").close(); });

renderFilters();
renderMain();
