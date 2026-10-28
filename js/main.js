/* Renders the page from window.SITE (js/data.js).
   You shouldn't need to edit this file to add content. */
(function () {
  const S = window.SITE;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---- icons ---- */
  const ICONS = {
    github: '<svg viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
    x: '<svg viewBox="0 0 24 24"><path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.4l-5.8-7.58-6.63 7.58H.49l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93zm-1.29 19.5h2.04L6.48 3.24H4.3l13.31 17.41z"/></svg>',
    researchgate: '<svg viewBox="0 0 24 24"><path d="M3 3h18v18H3z" fill="none" stroke="currentColor" stroke-width="2"/><text x="12" y="16.5" text-anchor="middle" font-size="10" font-weight="700" font-family="sans-serif">RG</text></svg>'
  };

  /* default thumbnails, one per area */
  const AREA_ART = {
    ultrasound: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="32" cy="32" r="6"/><circle cx="32" cy="32" r="14" stroke-dasharray="4 4"/><circle cx="32" cy="32" r="24"/></svg>',
    microscopy: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="20" cy="22" r="9"/><circle cx="42" cy="18" r="7"/><circle cx="40" cy="40" r="11"/><circle cx="18" cy="46" r="6"/><circle cx="40" cy="40" r="3" fill="currentColor"/><circle cx="20" cy="22" r="2.5" fill="currentColor"/></svg>',
    remote: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="8" y="8" width="48" height="48" rx="3"/><path d="M8 24h48M8 40h48M24 8v48M40 8v48"/><rect x="24" y="24" width="16" height="16" fill="currentColor" opacity=".35"/></svg>',
    teaching: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 16c9-4 18-4 26 2 8-6 17-6 26-2v34c-9-4-18-4-26 2-8-6-17-6-26-2z"/><path d="M32 18v34"/></svg>'
  };

  const LANG_COLORS = { Python: "#3572A5", MATLAB: "#e16737", SQL: "#e38c00", "C++": "#f34b7d", Java: "#b07219" };

  /* ---- header & about ---- */
  const P = S.profile;
  /* page title: keep "<page> · " prefix if the page sets data-page-title */
  const pageTitle = document.body.dataset.pageTitle;
  document.title = pageTitle ? `${pageTitle} · ${P.name}` : P.name;
  $("name").textContent = P.name;
  $("role").textContent = P.role;
  $("affiliation").textContent = P.affiliation;
  if (P.photo) { $("photo").src = P.photo; $("photo").alt = P.name; $("photo").hidden = false; }
  $("links").innerHTML = P.links.map((l) =>
    `<a href="${esc(l.url)}" target="_blank" rel="noopener">${ICONS[l.icon] || ""}${esc(l.label)}</a>`).join("");
  if ($("bio")) $("bio").innerHTML = P.bio.map((p) => `<p>${esc(p)}</p>`).join("");
  if ($("education")) $("education").innerHTML = P.education.map((e) => `<li>${esc(e)}</li>`).join("");
  const rg = P.links.find((l) => l.icon === "researchgate");
  if (rg && $("rg-link")) $("rg-link").href = rg.url;
  $("year").textContent = new Date().getFullYear();
  $("updated").textContent = P.updated || "";
  $("construction").hidden = !P.underConstruction;

  /* ---- publications lookup ---- */
  const pubByKey = Object.fromEntries(S.publications.map((p) => [p.key, p]));
  const pubUrl = (p) => p.doi
    ? `https://doi.org/${p.doi}`
    : `https://scholar.google.com/scholar?q=${encodeURIComponent('"' + p.title + '"')}`;

  /* which repos cite each paper (for "Code" badges in the list) */
  const codeFor = {};
  S.repos.forEach((r) => (r.papers || []).forEach((k) => (codeFor[k] = codeFor[k] || []).push(r)));

  /* ---- cards ---- */
  function card(r) {
    const thumb = r.thumb
      ? `<a class="thumb" href="${esc(r.url)}" target="_blank" rel="noopener" tabindex="-1"><img src="${esc(r.thumb)}" alt="" loading="lazy"></a>`
      : `<div class="thumb placeholder" aria-hidden="true">${AREA_ART[r.area] || ""}</div>`;
    const papers = (r.papers || []).map((k) => pubByKey[k]).filter(Boolean)
      .map((p) => `<a class="paper-link" href="${pubUrl(p)}" target="_blank" rel="noopener" title="${esc(p.title)}">${esc(shortVenue(p))} ${p.year} ↗</a>`)
      .join("");
    return `
      <article class="card" data-tags="${esc((r.tags || []).join("|"))}">
        ${thumb}
        <div class="card-body">
          <h4><a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.name)}</a></h4>
          ${r.note ? `<p class="note">${esc(r.note)}</p>` : ""}
          <p class="desc">${esc(r.description)}</p>
          <div class="tags">${(r.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
          <div class="card-foot">
            ${r.language ? `<span class="lang" style="--lang-color:${LANG_COLORS[r.language] || "#888"}">${esc(r.language)}</span>` : ""}
            ${papers}
          </div>
        </div>
      </article>`;
  }

  function shortVenue(p) {
    return p.venue.split(",")[0]
      .replace("International Journal of Computer Assisted Radiology and Surgery", "IJCARS")
      .replace("Computer Methods and Programs in Biomedicine", "CMPB")
      .replace("Ultrasound in Medicine & Biology", "UMB")
      .replace("International Journal of Hypertension", "Int J Hypertens")
      .replace("Congreso Argentino de Agroinformática (CAI)", "CAI")
      .replace(/^Proc\. /, "");
  }

  function areaBlock(a) {
    const repos = S.repos.filter((r) => r.area === a.id);
    if (!repos.length) return "";
    const tag = a.group === "teaching" ? "h2" : "h3";
    return `
      <div class="area" id="area-${a.id}" style="--area-color: var(--area-${a.id}, var(--accent))">
        <div class="area-head"><${tag}>${esc(a.title)}</${tag}><p>${esc(a.blurb)}</p></div>
        <div class="grid">${repos.map(card).join("")}</div>
      </div>`;
  }

  /* ================= HOME ================= */
  if ($("research-areas")) {
    $("research-areas").innerHTML = S.areas.filter((a) => a.group === "research").map(areaBlock).join("");
    $("teaching-areas").innerHTML = S.areas.filter((a) => a.group === "teaching").map(areaBlock).join("");

    /* ---- technique filter (research areas only) ---- */
    const researchCards = [...document.querySelectorAll("#research .card")];
    const counts = {};
    researchCards.forEach((c) => c.dataset.tags.split("|").filter(Boolean).forEach((t) => (counts[t] = (counts[t] || 0) + 1)));
    const tags = Object.keys(counts).sort((a, b) => counts[b] - counts[a] || a.localeCompare(b));
    let active = null;
    $("filters").innerHTML = ['<button class="chip" aria-pressed="true" data-tag="">All</button>']
      .concat(tags.map((t) => `<button class="chip" aria-pressed="false" data-tag="${esc(t)}">${esc(t)}</button>`)).join("");
    $("filters").addEventListener("click", (e) => {
      const b = e.target.closest(".chip"); if (!b) return;
      active = b.dataset.tag || null;
      $("filters").querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", String(c === b)));
      researchCards.forEach((c) => (c.hidden = active && !c.dataset.tags.split("|").includes(active)));
      document.querySelectorAll("#research .area").forEach((a) => (a.hidden = !a.querySelector(".card:not([hidden])")));
    });
  }

  /* ---- publications ---- */
  const hl = (s) => esc(s).replace(/(Lo Vercio\s+[A-Z]{1,2}‡?)/g, "<strong>$1</strong>");
  const codeLinks = (p) => (codeFor[p.key] || [])
    .map((r) => `<a class="pub-code" href="${esc(r.url)}" target="_blank" rel="noopener">code</a>`).join("");

  function pubItem(p, opts = {}) {
    return `
      <li class="pub${opts.featured ? " pub-featured" : ""}">
        <span class="pub-year">${p.year}</span>
        <div>
          <a class="pub-title" href="${pubUrl(p)}" target="_blank" rel="noopener">${esc(p.title)}</a>
          ${!opts.featured && p.featured ? '<span class="pub-star" title="Featured">★ featured</span>' : ""}
          ${codeLinks(p)}
          ${opts.featured && p.highlight ? `<p class="pub-highlight">${esc(p.highlight)}</p>` : ""}
          <div class="pub-meta">${hl(p.authors.replace(/\.$/, ""))}. <em>${esc(p.venue)}</em></div>
        </div>
      </li>`;
  }

  /* Featured research (Home) */
  if ($("featured")) {
    const list = S.publications.filter((p) => p.featured).sort((a, b) => b.year - a.year);
    $("featured").innerHTML = `<ul class="pub-list">${list.map((p) => pubItem(p, { featured: true })).join("")}</ul>`;
  }

  /* Full list (Publications page) */
  if ($("pubs")) {
    const GROUPS = [["journal", "Journal articles"], ["tutorial", "Tutorials & reviews"], ["conference", "Selected conference papers"]];
    $("pubs").innerHTML = GROUPS.map(([type, label]) => {
      const list = S.publications.filter((p) => p.type === type).sort((a, b) => b.year - a.year);
      if (!list.length) return "";
      return `<div class="pub-group"><h3>${label}</h3><ul class="pub-list">${list.map((p) => pubItem(p)).join("")}</ul></div>`;
    }).join("");
  }

  /* ---- teaching (Teaching page) ---- */
  function teachItem(c) {
    return `
      <li class="pub teach">
        <span class="pub-year">${esc(c.year).replace(/,\s*/g, ", ")}</span>
        <div>
          <span class="pub-title">${esc(c.title)}</span>
          <span class="pub-code">${esc(c.role)}</span>
          ${c.topics ? `<div class="pub-meta">${esc(c.topics)}</div>` : ""}
        </div>
      </li>`;
  }

  /* grouped by university, in the order they appear in data.js */
  if ($("teach")) {
    const C = S.teaching_courses || [];
    const unis = [...new Set(C.map((c) => c.university))];
    $("teach").innerHTML = unis.map((u) =>
      `<div class="pub-group"><h3>${esc(u)}</h3><ul class="pub-list">${C.filter((c) => c.university === u).map(teachItem).join("")}</ul></div>`
    ).join("");
  }

  /* mark current page in the nav */
  /* works for "/", "/index.html", "/publications" and "/publications.html" */
  const page = (s) => (s.split("/").pop() || "index").replace(/\.html$/, "");
  const here = page(location.pathname);
  document.querySelectorAll(".toc a").forEach((a) => {
    if (page(a.getAttribute("href")) === here) a.setAttribute("aria-current", "page");
  });
})();
