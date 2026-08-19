const D = window.PORTFOLIO_DATA;
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* =========================================================
   ICONS (small inline set, no external icon font needed)
   ========================================================= */
const ICONS = {
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v16H4z"/><path d="M4 6l8 7 8-7"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>'
};

/* =========================================================
   RENDER: NAV
   ========================================================= */
function renderNav() {
  const links = $("#navLinks");
  links.innerHTML = D.nav.map(n => `<button data-goto="${n.id}">${n.label}</button>`).join("");

  const mobile = $("#mobilePanel");
  mobile.innerHTML = D.nav.map(n => `<button data-goto="${n.id}">${n.label}</button>`).join("");

  $$("[data-goto]").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.dataset.goto);
      if (target) target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
      closeMobile();
    });
  });

  $("#navContactBtn").addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
  });
}

function closeMobile() {
  $("#mobilePanel").classList.remove("open");
  $("#hamburgerBtn").setAttribute("aria-expanded", "false");
}
$("#hamburgerBtn").addEventListener("click", () => {
  const panel = $("#mobilePanel");
  const open = panel.classList.toggle("open");
  $("#hamburgerBtn").setAttribute("aria-expanded", String(open));
});

/* Scroll-spy */
function initScrollSpy() {
  const sections = D.nav.map(n => document.getElementById(n.id)).filter(Boolean);
  const navButtons = $$("#navLinks button");
  const mobileButtons = $$("#mobilePanel button");

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navButtons.forEach(b => b.classList.toggle("active", b.dataset.goto === id));
        mobileButtons.forEach(b => b.classList.toggle("active", b.dataset.goto === id));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

  sections.forEach(s => obs.observe(s));
}

/* =========================================================
   RENDER: THEME TOGGLE
   ========================================================= */
/* =========================================================
   RENDER: HERO
   ========================================================= */
function renderHero() {
  $("#heroIntro").textContent = D.profile.heroIntro;
  $("#heroTags").innerHTML = D.profile.focusAreas.map(t => `<span class="hero-tag">${t}</span>`).join("");
  $("#heroDownloadCv").href = D.resume.file;
  $("#heroDownloadCv").download = D.resume.filename;
  $("#heroPortrait").src = D.profile.photo;

  const skillIcons = {
  "Next.js": `
    <svg viewBox="0 0 24 24" aria-label="Next.js">
      <circle cx="12" cy="12" r="10" fill="currentColor"/>
      <path d="M7.5 16V8l9 8V8" 
        fill="none" 
        stroke="white" 
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"/>
    </svg>
  `,

  "HTML": `
    <svg viewBox="0 0 24 24" aria-label="HTML">
      <path d="M4 3l1.5 17L12 22l6.5-2L20 3H4z" fill="#E44D26"/>
      <path d="M12 20V5h6.5l-1.2 13.5L12 20z" fill="#F16529"/>
      <path d="M12 9H8.5l.2 2H12v2H8.2l.3 3L12 17v3l-5.4-1.5L6 14h2.2l.1.9 3.7 1.1v-3H6.9L6.4 7H12z" fill="white"/>
    </svg>
  `,

  "CSS": `
    <svg viewBox="0 0 24 24" aria-label="CSS">
      <path d="M4 3l1.5 17L12 22l6.5-2L20 3H4z" fill="#264DE4"/>
      <path d="M12 20V5h6.5l-1.2 13.5L12 20z" fill="#2965F1"/>
      <path d="M12 9H8.5l.2 2H12v2H8.2l.3 3L12 17v3l-5.4-1.5L6 14h2.2l.1.9 3.7 1.1v-3H6.9L6.4 7H12z" fill="white"/>
    </svg>
  `,

  "JavaScript": `
    <svg viewBox="0 0 24 24" aria-label="JavaScript">
      <rect x="3" y="3" width="18" height="18" fill="#F7DF1E"/>
      <path d="M12 17.5c.7 1.2 1.8 1.8 3.2 1.8 1.4 0 2.4-.7 2.4-1.9 0-1.3-1-1.8-2.7-2.5l-.6-.3c-1.7-.7-2.8-1.5-2.8-3.3 0-1.6 1.2-2.9 3.2-2.9 1.4 0 2.4.5 3.1 1.8l-1.7 1.1c-.4-.7-.8-1-1.5-1-.7 0-1.1.4-1.1 1 0 .7.4 1 1.5 1.5l.6.3c2 .9 3.1 1.7 3.1 3.6 0 2.1-1.6 3.2-3.8 3.2-2.1 0-3.5-1-4.2-2.3zM6.2 17.7c.3.6.6 1.1 1.3 1.1.7 0 1.1-.3 1.1-1.4v-7.5h2.3v7.5c0 2.4-1.4 3.5-3.5 3.5-1.9 0-3-1-3.6-2.2z" fill="#000"/>
    </svg>
  `,

  "IT Technical Support": `
    <svg viewBox="0 0 24 24" aria-label="IT Technical Support">
      <path d="M4 5h16v11H4z" fill="none" stroke="currentColor" stroke-width="1.8"/>
      <path d="M8 20h8M12 16v4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      <circle cx="12" cy="10.5" r="2.5" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <path d="M8.5 10.5a3.5 3.5 0 0 1 7 0" fill="none" stroke="currentColor" stroke-width="1.5"/>
    </svg>
  `
};

const preferred = ["Next.js", "HTML", "CSS", "JavaScript", "IT Technical Support"];
const available = D.skillGroups.flatMap(g => g.items);

$("#skillOrbit").innerHTML = preferred
  .filter(skill => available.includes(skill))
  .slice(0, 4)
  .map((skill, i) => `
    <button
      class="skill-float skill-float-${i}"
      type="button"
      aria-label="${skill}"
      aria-expanded="false"
    >
      ${skillIcons[skill]}
      <span class="skill-tooltip" role="tooltip">${skill}</span>
    </button>
  `)
  .join("");
}

const skillButtons = $$(".skill-float");

skillButtons.forEach(button => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();

    const isOpen = button.classList.contains("tooltip-open");

    // Close all other tooltips
    skillButtons.forEach(item => {
      item.classList.remove("tooltip-open");
      item.setAttribute("aria-expanded", "false");
    });

    // Toggle the tapped tooltip
    if (!isOpen) {
      button.classList.add("tooltip-open");
      button.setAttribute("aria-expanded", "true");
    }
  });
});

// Close tooltip when tapping anywhere else
document.addEventListener("click", () => {
  skillButtons.forEach(button => {
    button.classList.remove("tooltip-open");
    button.setAttribute("aria-expanded", "false");
  });
});
/* =========================================================
   RENDER: ABOUT
   ========================================================= */
function renderAbout() {
  $("#aboutText").innerHTML = `<p>${D.profile.summary}</p>`;
  $("#focusList").innerHTML = D.profile.focusAreas.map(f => `<li>${f}</li>`).join("");
  $("#aboutCards").innerHTML = D.aboutCards.map(c => `
    <div class="about-card">
      <div class="k">${c.label}</div>
      <div class="v">${c.value}</div>
    </div>
  `).join("");
}

/* =========================================================
   RENDER: SKILLS
   ========================================================= */
function renderSkills() {
  const filters = $("#skillFilters");
  const groupsEl = $("#skillGroups");

  filters.innerHTML = ['<button class="filter-chip active" data-filter="all">All</button>']
    .concat(D.skillGroups.map(g => `<button class="filter-chip" data-filter="${g.id}">${g.label}</button>`))
    .join("");

  function paint(filter) {
    const groups = filter === "all" ? D.skillGroups : D.skillGroups.filter(g => g.id === filter);
    groupsEl.innerHTML = groups.map(g => `
      <div class="skill-group">
        <h3>${g.label}</h3>
        <div class="skill-chip-list">
          ${g.items.map(i => `<span class="skill-chip">${i}</span>`).join("")}
        </div>
      </div>
    `).join("");
  }
  paint("all");

  filters.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-chip");
    if (!btn) return;
    $$(".filter-chip", filters).forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    paint(btn.dataset.filter);
  });

  $("#languagesRow").innerHTML = D.languages.map(l => `
    <div class="lang-pill">${l.name} <span class="badge">${l.level}</span></div>
  `).join("");
}

/* =========================================================
   RENDER: EXPERIENCE TIMELINE
   ========================================================= */
function renderExperience() {
  const tl = $("#timeline");
  tl.innerHTML = D.experience.map((job, idx) => `
    <div class="tl-item ${job.current ? "current" : ""} ${idx === 0 ? "open" : ""}" data-idx="${idx}">
      <div class="tl-dot"></div>
      <div class="tl-period mono">${job.period}</div>
      <div class="tl-head">
        <div>
          <div class="tl-title">${job.title}</div>
          <div class="tl-company">${job.company}</div>
        </div>
        <div class="tl-toggle" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
        </div>
      </div>
      <div class="tl-body">
        <p class="tl-overview">${job.overview}</p>
        <ul class="tl-resp">${job.responsibilities.map(r => `<li>${r}</li>`).join("")}</ul>
        <div class="tl-tools">${job.tools.map(t => `<span>${t}</span>`).join("")}</div>
      </div>
    </div>
  `).join("");

  $$(".tl-head", tl).forEach(head => {
    head.addEventListener("click", () => {
      head.closest(".tl-item").classList.toggle("open");
    });
  });
}

/* =========================================================
   RENDER: PROJECTS + MODAL
   ========================================================= */
function renderProjects() {
  const grid = $("#projectGrid");
  grid.innerHTML = D.projects.map(p => `
    <div class="project-card" data-id="${p.id}">
      <div class="project-role">${p.role}</div>
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <div class="project-tech">${p.tech.map(t => `<span>${t}</span>`).join("")}</div>
      <div class="project-more">View details →</div>
    </div>
  `).join("");

  $$(".project-card", grid).forEach(card => {
    card.addEventListener("click", () => openProjectModal(card.dataset.id));
  });

  const overlay = $("#projectModal");
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeProjectModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeProjectModal();
  });
}

function openProjectModal(id) {
  const p = D.projects.find(x => x.id === id);
  if (!p) return;
  const content = $("#modalContent");
  content.innerHTML = `
    <button class="modal-close" id="modalCloseBtn" aria-label="Close">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
    </button>
    <span class="project-role">${p.role}</span>
    <h3>${p.name}</h3>
    <div class="modal-section">
      <h4>Overview</h4>
      <p>${p.description}</p>
    </div>
    <div class="modal-section">
      <h4>Key Features</h4>
      <ul>${p.features.map(f => `<li>${f}</li>`).join("")}</ul>
    </div>
    <div class="modal-section">
      <h4>Technology</h4>
      <div class="project-tech">${p.tech.map(t => `<span>${t}</span>`).join("")}</div>
    </div>
  `;
  $("#modalCloseBtn").addEventListener("click", closeProjectModal);
  $("#projectModal").classList.add("open");
}
function closeProjectModal() {
  $("#projectModal").classList.remove("open");
}

/* =========================================================
   RENDER: EDUCATION + CERTS
   ========================================================= */
function renderEducation() {
  $("#eduList").innerHTML = D.education.map(e => `
    <div class="edu-card">
      <h3>${e.degree}</h3>
      <div class="school">${e.school}</div>
      <div class="period mono">${e.period}</div>
    </div>
  `).join("");

  $("#certList").innerHTML = D.certifications.map(c => `
    <div class="cert-item">
      <div>
        <div class="name">${c.name}</div>
        <div class="org">${c.org}</div>
      </div>
      <div class="date mono">${c.date}</div>
    </div>
  `).join("");
}

/* =========================================================
   RENDER: RESUME
   ========================================================= */
function renderResume() {
  $("#resumeDownload").href = D.resume.file;
  $("#resumeDownload").download = D.resume.filename;
  $("#resumeView").href = D.resume.file;
}

/* =========================================================
   RENDER: CONTACT
   ========================================================= */
function renderContact() {
  $("#contactList").innerHTML = `
    <div class="contact-row">
      <div class="ic">${ICONS.mail}</div>
      <div><div class="t">Email</div><div class="d">${D.profile.email}</div></div>
    </div>
    <div class="contact-row">
      <div class="ic">${ICONS.phone}</div>
      <div><div class="t">Phone</div><div class="d">${D.profile.phone}</div></div>
    </div>
    <div class="contact-row">
      <div class="ic">${ICONS.pin}</div>
      <div><div class="t">Location</div><div class="d">${D.profile.location}</div></div>
    </div>
  `;

  const form = $("#contactForm");
  const status = $("#formStatus");

  function validate() {
    let ok = true;
    const fields = [
      { id: "cf-name", err: "err-name", test: v => v.trim().length > 1, msg: "Please enter your name." },
      { id: "cf-email", err: "err-email", test: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), msg: "Enter a valid email address." },
      { id: "cf-subject", err: "err-subject", test: v => v.trim().length > 2, msg: "Please add a subject." },
      { id: "cf-message", err: "err-message", test: v => v.trim().length > 9, msg: "Message should be at least 10 characters." }
    ];
    fields.forEach(f => {
      const input = document.getElementById(f.id);
      const errEl = document.getElementById(f.err);
      if (!f.test(input.value)) {
        errEl.textContent = f.msg;
        ok = false;
      } else {
        errEl.textContent = "";
      }
    });
    return ok;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    status.classList.remove("show", "ok");
    if (!validate()) {
      status.textContent = "Please fix the highlighted fields.";
      status.classList.add("show");
      return;
    }
    const name = $("#cf-name").value.trim();
    const subject = $("#cf-subject").value.trim();
    const message = $("#cf-message").value.trim();
    const emailAddr = $("#cf-email").value.trim();

    // No backend is wired up — hand off to the visitor's mail client
    // with the message pre-filled, addressed to the real inbox above.
    const mailto = `mailto:${D.profile.email}?subject=${encodeURIComponent(subject + " — from " + name)}&body=${encodeURIComponent(message + "\n\nReply to: " + emailAddr)}`;
    window.location.href = mailto;

    status.textContent = "Opening your email client to send this message…";
    status.classList.add("show", "ok");
    form.reset();
  });
}

/* =========================================================
   REVEAL ON SCROLL
   ========================================================= */
function initReveal() {
  if (prefersReducedMotion) {
    $$(".reveal").forEach(el => el.classList.add("is-visible"));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  $$(".reveal").forEach(el => obs.observe(el));
}

/* =========================================================
   BACK TO TOP + FOOTER YEAR
   ========================================================= */
function initMisc() {
  $("#year").textContent = new Date().getFullYear();
  const btn = $("#backToTop");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 600);
  }, { passive: true });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  });
}

/* =========================================================
   LIGHTWEIGHT INTERACTIONS — CSS/DOM only, no WebGL
   ========================================================= */
function initTheme() {
  const key = "portfolio-theme";
  const saved = localStorage.getItem(key);
  let theme = saved || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
  const body = document.body, icon = $("#themeIcon");
  function apply() {
    body.dataset.theme = theme;
    localStorage.setItem(key, theme);
    icon.innerHTML = theme === "dark"
      ? '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'
      : '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>';
  }
  apply();
  $("#themeToggle").addEventListener("click", () => { theme = theme === "dark" ? "light" : "dark"; apply(); });
}

function initInteractions() {
  const finePointer = matchMedia("(hover:hover) and (pointer:fine)").matches;
  const stage = $("#portraitStage");
  const cursor = $("#cursorRing");
  const progress = $("#scrollProgress");

  const updateScroll = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${max ? scrollY / max : 0})`;
  };
  addEventListener("scroll", updateScroll, {passive:true}); updateScroll();

  if (!prefersReducedMotion) {
    const particles = $("#particles");
    for (let i=0;i<22;i++) {
      const p=document.createElement("span"); p.className="particle";
      p.style.left=(Math.random()*100)+"%"; p.style.top=(Math.random()*100)+"%";
      p.style.animationDelay=(-Math.random()*12)+"s"; p.style.animationDuration=(9+Math.random()*8)+"s";
      particles.appendChild(p);
    }
  }

  if (!finePointer || prefersReducedMotion) return;
  document.documentElement.classList.add("has-fine-pointer");

  let cx=0, cy=0, tx=0, ty=0, raf;
  function cursorLoop(){ cx+=(tx-cx)*.18; cy+=(ty-cy)*.18; cursor.style.transform=`translate3d(${cx}px,${cy}px,0)`; raf=requestAnimationFrame(cursorLoop); }
  cursorLoop();

  addEventListener("pointermove", e => {
    tx=e.clientX; ty=e.clientY;
    const x=(e.clientX/innerWidth-.5), y=(e.clientY/innerHeight-.5);
    document.documentElement.style.setProperty("--mouse-x", `${x*12}px`);
    document.documentElement.style.setProperty("--mouse-y", `${y*12}px`);
    if(stage){
      const r=stage.getBoundingClientRect();
      const sx=((e.clientX-r.left)/r.width-.5)*2, sy=((e.clientY-r.top)/r.height-.5)*2;
      stage.style.setProperty("--rx", `${-sy*4}deg`);
      stage.style.setProperty("--ry", `${sx*6}deg`);
      stage.style.setProperty("--px", `${sx*10}px`);
      stage.style.setProperty("--py", `${sy*10}px`);
    }
  }, {passive:true});

  document.addEventListener("pointerover", e => cursor.classList.toggle("active", !!e.target.closest("a,button,.project-card,.skill-chip,.skill-float")));
  document.addEventListener("pointerout", e => { if(e.target.closest("a,button,.project-card,.skill-chip,.skill-float")) cursor.classList.remove("active"); });

  document.addEventListener("click", e => {
    const ripple=document.createElement("span"); ripple.className="click-ripple";
    ripple.style.left=e.clientX+"px"; ripple.style.top=e.clientY+"px";
    document.body.appendChild(ripple); ripple.addEventListener("animationend",()=>ripple.remove());
  });

  $$(".hero-cta .btn, #navContactBtn").forEach(btn => {
    btn.addEventListener("pointermove", e => {
      const r=btn.getBoundingClientRect(), x=(e.clientX-r.left-r.width/2)/r.width, y=(e.clientY-r.top-r.height/2)/r.height;
      btn.style.transform=`translate(${x*7}px,${y*5}px) scale(1.02)`;
    });
    btn.addEventListener("pointerleave", ()=>btn.style.transform="");
  });
}

/* =========================================================
   INIT
   ========================================================= */
function init() {
  renderNav();
  renderHero();
  renderAbout();
  renderSkills();
  renderExperience();
  renderProjects();
  renderEducation();
  renderResume();
  renderContact();
  initTheme();
  initScrollSpy();
  initReveal();
  initMisc();
  initInteractions();
}

document.addEventListener("DOMContentLoaded", init);
