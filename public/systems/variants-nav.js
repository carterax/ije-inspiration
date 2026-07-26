/* Generic variant navigator. Include at end of any /systems/{id}-{skill}-{v}.html page.
   Spawning: a variant can spawn sub-variants. Add a file like {id}-taste-1a.html,
   then list it as kids: [{ v: "1a", label: "MOSAIC · LIST" }] on its parent.
   Kids render as full tabs right after their parent (V1A style). */
(function () {
  const MANIFESTS = {
    "danfo-pop": {
      name: "DANFO POP",
      skills: {
        taste: [
          { v: "1", label: "SPLIT POSTER", kids: [] },
          { v: "2", label: "STACKED BROADSIDE", kids: [] },
          { v: "3", label: "TYPE BLAST", kids: [] },
          { v: "4", label: "PHOTO GROUND", kids: [] },
          { v: "5", label: "BUS TICKET", kids: [] },
        ],
        impeccable: [
          { v: "1", label: "SPLIT POSTER", kids: [] },
          { v: "2", label: "STACKED BROADSIDE", kids: [] },
          { v: "3", label: "TYPE BLAST", kids: [] },
          { v: "4", label: "PHOTO GROUND", kids: [] },
          { v: "5", label: "ROUTE BOARD", kids: [] },
        ],
      },
    },
    "papercut": {
      name: "PAPERCUT COLLAGE",
      skills: {
        taste: [
          { v: "1", label: "SPLIT SCRAPS", kids: [] },
          { v: "2", label: "SCRAP BOARD", kids: [] },
          { v: "3", label: "TYPE TORN", kids: [] },
          { v: "4", label: "PHOTO COLLAGE", kids: [] },
          { v: "5", label: "RANSOM NOTE", kids: [] },
        ],
        impeccable: [
          { v: "1", label: "SPLIT SCRAPS", kids: [] },
          { v: "2", label: "SCRAP BOARD", kids: [] },
          { v: "3", label: "TYPE TORN", kids: [] },
          { v: "4", label: "PHOTO COLLAGE", kids: [] },
          { v: "5", label: "SCRAPBOOK", kids: [] },
        ],
      },
    },
    "market-textile": {
      name: "MARKET TEXTILE",
      skills: {
        taste: [
          { v: "1", label: "SPLIT STALL", kids: [] },
          { v: "2", label: "SWATCH WALL", kids: [] },
          { v: "3", label: "TYPE WAX", kids: [] },
          { v: "4", label: "PHOTO BOLTS", kids: [] },
          { v: "5", label: "TAILOR TICKET", kids: [] },
        ],
        impeccable: [
          { v: "1", label: "SPLIT STALL", kids: [] },
          { v: "2", label: "SWATCH WALL", kids: [] },
          { v: "3", label: "TYPE WAX", kids: [] },
          { v: "4", label: "PHOTO BOLTS", kids: [] },
          { v: "5", label: "YARD GOODS", kids: [] },
        ],
      },
    },
    "gele-studio": {
      name: "GELE STUDIO",
      skills: {
        taste: [
          { v: "1", label: "SPLIT PORTRAIT", kids: [] },
          { v: "2", label: "GALLERY WALL", kids: [] },
          { v: "3", label: "TYPE GILDED", kids: [] },
          { v: "4", label: "PHOTO EDITORIAL", kids: [] },
          { v: "5", label: "DRESS CODE", kids: [] },
        ],
        impeccable: [
          { v: "1", label: "SPLIT PORTRAIT", kids: [] },
          { v: "2", label: "GALLERY WALL", kids: [] },
          { v: "3", label: "TYPE GILDED", kids: [] },
          { v: "4", label: "PHOTO EDITORIAL", kids: [] },
          { v: "5", label: "VINYL LOUNGE", kids: [] },
        ],
      },
    },
    "paper-mask": {
      name: "PAPER MASK",
      skills: {
        taste: [
          { v: "1", label: "SPLIT EXHIBIT", kids: [] },
          { v: "2", label: "GALLERY WALK", kids: [] },
          { v: "3", label: "TYPE UNMASKED", kids: [] },
          { v: "4", label: "PHOTO PLINTHS", kids: [] },
          { v: "5", label: "CATALOGUE CARD", kids: [] },
        ],
        impeccable: [
          { v: "1", label: "SPLIT EXHIBIT", kids: [] },
          { v: "2", label: "GALLERY WALK", kids: [] },
          { v: "3", label: "TYPE UNMASKED", kids: [] },
          { v: "4", label: "PHOTO PLINTHS", kids: [] },
          { v: "5", label: "AUDIO GUIDE", kids: [] },
        ],
      },
    },
    "spotify-social": {
      name: "SPOTIFY SOCIAL",
      skills: {
        taste: [
          { v: "1", label: "MOSAIC SPLIT", kids: [
            { v: "1a", label: "MOSAIC · LIST" },
            { v: "1b", label: "EXPERIENCE FIRST" },
            { v: "1c", label: "PRINTED MIX" },
            { v: "1d", label: "INVITATION" },
            { v: "1e", label: "PHOTO FIRST" },
            { v: "1f", label: "OPEN PLAN" },
          ] },
          { v: "2", label: "LIST FIRST", kids: [] },
          { v: "3", label: "TYPE BOARD", kids: [] },
          { v: "4", label: "PHOTO TILES", kids: [] },
          { v: "5", label: "WEEK STRIP", kids: [] },
        ],
        impeccable: [
          { v: "1", label: "MOSAIC SPLIT", kids: [] },
          { v: "2", label: "LIST FIRST", kids: [] },
          { v: "3", label: "TYPE BOARD", kids: [] },
          { v: "4", label: "PHOTO TILES", kids: [] },
          { v: "5", label: "SEAT MAP", kids: [] },
        ],
      },
    },
    "courtyard": {
      name: "COURTYARD AFTER DARK",
      skills: {
        taste: [
          { v: "1", label: "SPLIT GLOW", kids: [] },
          { v: "2", label: "NIGHT TIMELINE", kids: [] },
          { v: "3", label: "TYPE CANDLE", kids: [] },
          { v: "4", label: "PHOTO DUSK", kids: [] },
          { v: "5", label: "MENU NIGHT", kids: [] },
        ],
        impeccable: [
          { v: "1", label: "SPLIT GLOW", kids: [] },
          { v: "2", label: "NIGHT TIMELINE", kids: [] },
          { v: "3", label: "TYPE CANDLE", kids: [] },
          { v: "4", label: "PHOTO DUSK", kids: [] },
          { v: "5", label: "INVITATION", kids: [] },
        ],
      },
    },
    "ephemera": {
      name: "EPHEMERA ARCHIVE",
      skills: {
        taste: [
          { v: "1", label: "SPLIT RECEIPT", kids: [] },
          { v: "2", label: "SPECIMEN WALL", kids: [] },
          { v: "3", label: "TYPE LEDGER", kids: [] },
          { v: "4", label: "PHOTO ARCHIVE", kids: [] },
          { v: "5", label: "SHOEBOX", kids: [] },
        ],
        impeccable: [
          { v: "1", label: "SPLIT RECEIPT", kids: [] },
          { v: "2", label: "SPECIMEN WALL", kids: [] },
          { v: "3", label: "TYPE LEDGER", kids: [] },
          { v: "4", label: "PHOTO ARCHIVE", kids: [] },
          { v: "5", label: "TICKET BOOK", kids: [] },
        ],
      },
    },
  };

  const m = location.pathname.match(/\/systems\/([a-z0-9-]+)-(taste|impeccable)-(\d+[a-z]?)\.html/);
  if (!m || !MANIFESTS[m[1]]) return;
  const [, id, skill, cur] = m;
  const M = MANIFESTS[id];
  const page = (s, v) => `${id}-${s}-${v}.html`;
  const entries = M.skills[skill];
  const total = M.skills.taste.length + M.skills.impeccable.length;

  const tabs = entries.map((e) => {
    const kids = e.kids.map((k) =>
      `<a class="vn-tab vn-sub ${k.v === cur ? "on" : ""}" href="${page(skill, k.v)}">
        <b>V${k.v.toUpperCase()}</b><span>${k.label}</span></a>`).join("");
    return `<a class="vn-tab ${e.v === cur ? "on" : ""}" href="${page(skill, e.v)}">
      <b>V${e.v}</b><span>${e.label}</span></a>${kids}`;
  }).join("");

  const bar = document.createElement("div");
  bar.id = "vn-bar";
  bar.innerHTML = `
    <span class="vn-brand">IJE <i>·</i> ${M.name} <em>${total} DIRECTIONS</em></span>
    ${tabs}
    <span class="vn-right">
      <a class="vn-skill ${skill === "taste" ? "on" : ""}" href="${page("taste", cur.replace(/[a-z]$/, ""))}">TASTE</a>
      <a class="vn-skill ${skill === "impeccable" ? "on" : ""}" href="${page("impeccable", cur.replace(/[a-z]$/, ""))}">IMPECCABLE</a>
      <a class="vn-all" href="${id}-index.html">ALL ${total}</a>
      <span class="vn-keys">KEYS 1-5 · T/I = SKILL · G = GRID</span>
    </span>`;

  const css = document.createElement("style");
  css.textContent = `
    #vn-bar{position:fixed;top:0;left:0;right:0;z-index:9999;display:flex;align-items:stretch;
      gap:0;background:#16130e;color:#cfc6b4;font:500 10px/1.3 "JetBrains Mono","IBM Plex Mono",monospace;
      letter-spacing:.1em;text-transform:uppercase;height:46px;border-bottom:1px solid #2e2820}
    #vn-bar a{text-decoration:none;color:inherit}
    .vn-brand{display:flex;align-items:center;padding:0 18px;font-weight:700;color:#f6efdc;white-space:nowrap}
    .vn-brand i{color:#cf5b23;margin:0 8px;font-style:normal}
    .vn-brand em{font-style:normal;color:#8a8172;margin-left:8px;font-weight:500}
    .vn-tab{display:flex;flex-direction:column;justify-content:center;padding:0 16px;border-left:1px solid #2e2820;white-space:nowrap}
    .vn-tab b{font-size:11px;color:#f6efdc}
    .vn-tab span{color:#8a8172;margin-top:2px}
    .vn-tab:hover{background:#221d15}
    .vn-tab.on{background:#cf5b23}
    .vn-tab.on b,.vn-tab.on span{color:#f6efdc}
    .vn-sub{background:#1d1812;border-left-style:dashed}
    .vn-sub b{color:#cfc6b4}
    .vn-sub span::before{content:"· "}
    .vn-right{margin-left:auto;display:flex;align-items:center}
    .vn-skill{padding:6px 12px;border:1px solid #2e2820;margin-right:8px}
    .vn-skill.on{background:#f6efdc;color:#16130e;font-weight:700}
    .vn-all{padding:6px 12px;border:1px solid #cf5b23;color:#cf5b23;margin-right:14px}
    .vn-all:hover{background:#cf5b23;color:#f6efdc}
    .vn-keys{color:#8a8172;padding-right:18px;white-space:nowrap}
    body{padding-top:46px!important}
    @media(max-width:1100px){.vn-keys{display:none}}
    @media(max-width:900px){.vn-tab span{display:none}.vn-brand em{display:none}}`;

  document.head.appendChild(css);
  document.body.appendChild(bar);

  addEventListener("keydown", (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey || /input|textarea/i.test(e.target.tagName)) return;
    const k = e.key.toLowerCase();
    if (/^[1-5]$/.test(k)) location.href = page(skill, k);
    else if (k === "t") location.href = page("taste", cur.replace(/[a-z]$/, ""));
    else if (k === "i") location.href = page("impeccable", cur.replace(/[a-z]$/, ""));
    else if (k === "g") location.href = `${id}-index.html`;
  });
})();
