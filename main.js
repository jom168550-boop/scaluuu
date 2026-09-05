/* =========================================================
   ScaleMedia — Digital Marketing Agency Engine
   ========================================================= */
const CONFIG = {
  brand: { name: "ScaleMedia", domain: "scalemedia.co.in" },

  contact: {
    email: "hello@scalemedia.co.in",
    phone: "+91 98200 12345",
    whatsapp: "919820012345", // digits only with country code
    formEndpoint: ""     // Optional backend / Formspree URL
  },

  social: {
    instagram: "https://instagram.com/scalemedia_1",
    linkedin: "https://linkedin.com/company/scalemedia",
    facebook: "https://facebook.com/scalemedia.in"
  },

  images: {
    hero: "./images/hero_growth_dashboard.png",
    about: "",
    project1: "./images/project_ecommerce.png",
    project2: "./images/project_b2b_saas.png",
    project3: "./images/project_realestate.png",
    project4: "./images/project_ecommerce.png"
  },

  trustPillars: [
    "Strategy & Audits",
    "Creative & Content",
    "Performance Ads",
    "Conversion Systems"
  ],

  services: [
    { i:"01", name:"Social Media Management", desc:"Strategy, content planning, publishing and community management designed to build a strong digital presence.", more:"Includes editorial calendars, custom reels & monthly performance audits." },
    { i:"02", name:"Content Strategy & Production", desc:"Content that communicates your brand, captures attention and moves people toward action.", more:"High-converting Reels, carousels, photography & copy design." },
    { i:"03", name:"Meta & Google Ads", desc:"Performance advertising campaigns focused on qualified traffic, leads and measurable revenue growth.", more:"Full-funnel audience targeting, retargeting & ROAS optimization." },
    { i:"04", name:"Lead Generation", desc:"We build campaigns and conversion funnels designed to turn digital attention into qualified business opportunities.", more:"High-converting landing pages, lead magnet forms & CRM handoffs." },
    { i:"05", name:"Search Engine Optimization (SEO)", desc:"Build long-term organic visibility and attract high-intent customers actively searching for your services.", more:"Technical site audits, keyphrase optimization & local Mumbai SEO." },
    { i:"06", name:"Branding & Positioning", desc:"Create a distinct visual identity and messaging framework that makes your business recognizable and trusted.", more:"Identity design, typography, style guides & brand messaging." },
    { i:"07", name:"Web Design & Development", desc:"Conversion-focused, lightning-fast websites engineered to communicate your value proposition and generate leads.", more:"Responsive design, UX optimization & Analytics integration." },
    { i:"08", name:"Growth Marketing Strategy", desc:"A complete, multi-channel roadmap connecting content, advertising, SEO and conversion rate optimization.", more:"Quarterly roadmap planning, market analysis & growth auditing." }
  ],

  compare: {
    traditional: [
      "Random posting without strategy",
      "Focus on vanity likes & impressions",
      "Siloed content & ad campaigns",
      "Guessing audience interest",
      "Hoping leads manifest"
    ],
    scalemedia: [
      "Market Research & Competitor Audit",
      "Core Positioning & Value Strategy",
      "High-Impact Creative Production",
      "Multi-Channel Targeted Distribution",
      "Lead Capture & CRM Funnel Engine",
      "Weekly Data Testing & Optimization",
      "Measurable Business Revenue Growth"
    ]
  },

  why: [
    { n:"01", title:"Strategy First", body:"Every campaign begins with understanding your business, target audience, margins, and concrete revenue objectives." },
    { n:"02", title:"Creative That Performs", body:"Content isn't created just to look pretty. Every reel, carousel, and copy variant is engineered to capture interest and convert." },
    { n:"03", title:"Performance Mindset", body:"We continuously test audiences, ad creatives, and landing pages to ensure maximum ROI for every marketing rupee spent." },
    { n:"04", title:"One Integrated System", body:"Strategy, content, advertising, and technology work synchronously under one unified growth system." }
  ],

  process: [
    { n:"01", name:"Discovery", desc:"We analyze your existing brand presence, audience data, competitors, and conversion leaks." },
    { n:"02", name:"Strategy", desc:"We build a tailored marketing roadmap detailing target offers, messaging, and ad funnels." },
    { n:"03", name:"Content", desc:"Our team produces high-converting content, ad creatives, copy, and landing page assets." },
    { n:"04", name:"Launch", desc:"We launch campaigns across Meta, Google, and Organic channels with tracking setup." },
    { n:"05", name:"Optimize", desc:"We analyze real-time performance data, double down on winning hooks, and eliminate wasted spend." },
    { n:"06", name:"Scale", desc:"Clear, transparent reporting on leads, cost per acquisition, and revenue growth trajectory." }
  ],

  work: [
    {
      cat: "E-Commerce & Fashion",
      client: "Aura Apparel Mumbai",
      desc: "Scaled D2C clothing brand revenue through high-converting Instagram Reels creative and full-funnel Meta catalog ads.",
      services: ["Social Media", "Meta Ads", "Reels Production"],
      results: "+310% Online Sales Growth | 4.2x ROAS",
      image: "project1"
    },
    {
      cat: "B2B SaaS & Tech",
      client: "CloudPulse Enterprise",
      desc: "Built a predictable qualified demo booking system using targeted LinkedIn content and Google Search lead campaigns.",
      services: ["Lead Generation", "Google Ads", "Content Strategy"],
      results: "420+ B2B Leads Captured | -38% CPA",
      image: "project2"
    },
    {
      cat: "Real Estate & Luxury",
      client: "Skyline Properties Thane",
      desc: "Executed ultra-targeted lead generation campaign for luxury residential towers across Thane and Navi Mumbai.",
      services: ["Meta Lead Ads", "Landing Page Dev", "SEO"],
      results: "₹4.2 Cr Project Sales Generated | 85 Site Visits",
      image: "project3"
    },
    {
      cat: "Lifestyle & Healthcare",
      client: "Veda Wellness Clinics",
      desc: "Repositioned brand identity and launched local SEO + hyper-targeted clinic consultation ad funnels.",
      services: ["Branding", "Local SEO", "Performance Marketing"],
      results: "+180% New Client Bookings | Top 3 Google Map Rank",
      image: "project4"
    }
  ],

  results: [
    { num: "₹12 Cr+", label: "Client Revenue Generated" },
    { num: "4.1x", label: "Average Ad Campaign ROAS" },
    { num: "15,000+", label: "Qualified Leads Delivered" },
    { num: "45+", label: "Growth Campaigns Managed" },
    { num: "98%", label: "Client Retention Rate" }
  ]
};

/* =========================================================
   DOM RENDERERS & INTERACTIVITY
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initCustomCursor();
  initHeadingMasks();
  initScrollProgress();
  initHeroVisual();
  renderTrustMarks();
  renderServices();
  renderComparison();
  renderWhyGrid();
  initProcessStepper();
  renderFeaturedWork();
  renderResults();
  initFormHandler();
  initContactInfo();
  initWhatsAppFloat();
  renderFooter();
  initIntersectionObserver();
});

/* ---------- Navbar & Mobile Menu ---------- */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("navToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const navLogos = document.querySelectorAll(".nav-logo");
  const navLinks = document.querySelectorAll(".nav-links a");

  setTimeout(() => {
    navLogos.forEach(logo => logo.classList.add("show"));
    navLinks.forEach((link, i) => {
      setTimeout(() => link.classList.add("show"), i * 80);
    });
  }, 100);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  if (navToggle && mobileMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("open");
      navToggle.classList.toggle("open", isOpen);
      navToggle.setAttribute("aria-expanded", isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        navToggle.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }
}

/* ---------- Custom Cursor ---------- */
function initCustomCursor() {
  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  if (!dot || !ring) return;

  if (window.matchMedia("(pointer: fine)").matches) {
    document.body.classList.add("has-custom-cursor");

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    });

    function animateRing() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      requestAnimationFrame(animateRing);
    }
    animateRing();

    const interactiveEls = document.querySelectorAll("a, button, input, select, textarea, .service-card, .work-card, .p-step");
    interactiveEls.forEach(el => {
      el.addEventListener("mouseenter", () => ring.classList.add("active"));
      el.addEventListener("mouseleave", () => ring.classList.remove("active"));
    });
  }
}

/* ---------- Heading Line-Mask Reveal ---------- */
function initHeadingMasks() {
  const maskHeadings = document.querySelectorAll(".mask-heading");
  maskHeadings.forEach(h => {
    const text = h.innerText.trim();
    if (!text || h.querySelector(".mask-line")) return;

    const words = text.split(" ");
    let lines = [];
    let currentLine = [];
    
    words.forEach(word => {
      currentLine.push(word);
      if (currentLine.join(" ").length > 24) {
        lines.push(currentLine.join(" "));
        currentLine = [];
      }
    });
    if (currentLine.length > 0) lines.push(currentLine.join(" "));

    h.innerHTML = lines.map(line => `
      <span class="mask-line">
        <span class="mask-line-inner">${line}</span>
      </span>
    `).join("");
  });
}

/* ---------- Scroll Progress Bar ---------- */
function initScrollProgress() {
  const bar = document.getElementById("scrollProgress");
  if (!bar) return;

  window.addEventListener("scroll", () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    bar.style.width = `${scrolled}%`;
  });
}

/* ---------- Hero Methodology Graph Visual ---------- */
function initHeroVisual() {
  const cards = document.querySelectorAll("#heroVisual .hv-card");
  const lines = document.querySelectorAll("#heroVisual .hv-line");
  const nodes = document.querySelectorAll("#heroVisual .hv-node-dot");
  const heroReveals = document.querySelectorAll(".hero-reveal");

  setTimeout(() => {
    heroReveals.forEach((el, idx) => {
      setTimeout(() => el.classList.add("is-visible"), idx * 120);
    });

    cards.forEach((card, idx) => {
      setTimeout(() => card.classList.add("show"), 300 + idx * 150);
    });
    lines.forEach((line, idx) => {
      setTimeout(() => line.classList.add("show"), 600 + idx * 200);
    });
    nodes.forEach((node, idx) => {
      setTimeout(() => node.classList.add("show"), 800 + idx * 200);
    });
  }, 150);

  const heroStage = document.getElementById("hero");
  if (heroStage && window.innerWidth > 900) {
    heroStage.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const xPercent = (clientX / window.innerWidth - 0.5) * 20;
      const yPercent = (clientY / window.innerHeight - 0.5) * 20;

      cards.forEach(card => {
        const depth = parseFloat(card.getAttribute("data-depth") || 15);
        const moveX = (xPercent * depth) / 10;
        const moveY = (yPercent * depth) / 10;
        card.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      });
    });
  }
}

/* ---------- Trust Marks ---------- */
function renderTrustMarks() {
  const container = document.getElementById("trustMarks");
  if (!container) return;

  container.innerHTML = CONFIG.trustPillars.map(pillar => `
    <div class="trust-mark reveal">
      <span>${pillar}</span>
    </div>
  `).join("");
}

/* ---------- Services Grid ---------- */
function renderServices() {
  const container = document.getElementById("serviceGrid");
  if (!container) return;

  container.innerHTML = CONFIG.services.map(s => `
    <div class="service-card reveal">
      <div class="service-top">
        <span class="service-index">${s.i}</span>
        <span class="service-arrow">↗</span>
      </div>
      <h3 class="service-name">${s.name}</h3>
      <p class="service-desc">${s.desc}</p>
      <div class="service-more">→ ${s.more}</div>
    </div>
  `).join("");
}

/* ---------- Comparison Section ---------- */
function renderComparison() {
  const tradContainer = document.getElementById("compareTraditional");
  const scaleContainer = document.getElementById("compareScaleMedia");

  if (tradContainer) {
    tradContainer.innerHTML = CONFIG.compare.traditional.map((item, idx) => `
      <div class="compare-step">
        <span class="num">0${idx + 1}</span>
        <span>${item}</span>
      </div>
    `).join("");
  }

  if (scaleContainer) {
    scaleContainer.innerHTML = CONFIG.compare.scalemedia.map((item, idx) => `
      <div class="compare-step">
        <span class="num">0${idx + 1}</span>
        <span>${item}</span>
      </div>
    `).join("");
  }
}

/* ---------- Why Grid ---------- */
function renderWhyGrid() {
  const container = document.getElementById("whyGrid");
  if (!container) return;

  container.innerHTML = CONFIG.why.map(item => `
    <div class="why-card reveal">
      <div class="why-num">${item.n}</div>
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    </div>
  `).join("");
}

/* ---------- PROCESS / SCROLL-DRIVEN 6-STEP ANIMATED TIMELINE ---------- */
function initProcessStepper() {
  const desktopContainer = document.getElementById("processDesktop");
  const mobileContainer = document.getElementById("processMobile");

  if (desktopContainer) {
    const stepsHtml = CONFIG.process.map((p, idx) => `
      <div class="p-step ${idx === 0 ? 'active' : ''}" data-index="${idx}">
        <div class="p-dot">${idx + 1}</div>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
      </div>
    `).join("");

    desktopContainer.insertAdjacentHTML("beforeend", stepsHtml);

    const stepEls = desktopContainer.querySelectorAll(".p-step");
    stepEls.forEach(step => {
      step.addEventListener("click", () => {
        const idx = parseInt(step.getAttribute("data-index"));
        scrollToProcessStep(idx);
      });
    });
  }

  if (mobileContainer) {
    mobileContainer.innerHTML = CONFIG.process.map((p, idx) => `
      <div class="pm-item" data-index="${idx}">
        <span class="pm-num">0${idx + 1}</span>
        <div>
          <h3>${p.name}</h3>
          <p>${p.desc}</p>
        </div>
      </div>
    `).join("");
  }

  window.addEventListener("scroll", onScrollProcess, { passive: true });
  window.addEventListener("resize", onScrollProcess, { passive: true });
  
  updateProcessScrollProgress();
}

let isScrollTicking = false;
function onScrollProcess() {
  if (!isScrollTicking) {
    window.requestAnimationFrame(() => {
      updateProcessScrollProgress();
      isScrollTicking = false;
    });
    isScrollTicking = true;
  }
}

function updateProcessScrollProgress() {
  const section = document.getElementById("process-section");
  if (!section) return;

  const rect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Calculate scroll ratio through section (0 to 1)
  const startOffset = windowHeight * 0.75;
  const endOffset = windowHeight * 0.35;
  const scrollableDistance = rect.height + (startOffset - endOffset);
  const currentScroll = startOffset - rect.top;

  let progress = currentScroll / scrollableDistance;
  progress = Math.max(0, Math.min(1, progress));

  // Desktop horizontal line & step progression
  const desktopContainer = document.getElementById("processDesktop");
  const lineFill = document.getElementById("processFill");
  
  if (desktopContainer) {
    const stepEls = desktopContainer.querySelectorAll(".p-step");
    const totalSteps = CONFIG.process.length - 1;

    if (lineFill) {
      lineFill.style.width = `${progress * 100}%`;
    }

    stepEls.forEach((s, idx) => {
      const threshold = idx / totalSteps;
      const isActive = (idx === 0) || (progress >= threshold - 0.04);
      s.classList.toggle("active", isActive);
    });
  }

  // Mobile vertical timeline scroll reveal
  const mobileContainer = document.getElementById("processMobile");
  if (mobileContainer) {
    const mobileItems = mobileContainer.querySelectorAll(".pm-item");
    mobileItems.forEach(item => {
      const itemRect = item.getBoundingClientRect();
      if (itemRect.top < windowHeight * 0.82) {
        item.classList.add("active-mobile");
      }
    });
  }
}

function scrollToProcessStep(stepIndex) {
  const section = document.getElementById("process-section");
  if (!section) return;
  
  const rect = section.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const windowHeight = window.innerHeight;

  const startOffset = windowHeight * 0.75;
  const endOffset = windowHeight * 0.35;
  const scrollableDistance = rect.height + (startOffset - endOffset);
  
  const targetProgress = stepIndex / (CONFIG.process.length - 1);
  const targetOffset = (targetProgress * scrollableDistance) - startOffset;
  const targetY = scrollTop + rect.top + targetOffset;

  window.scrollTo({
    top: targetY,
    behavior: "smooth"
  });
}

/* ---------- Featured Work Grid ---------- */
function renderFeaturedWork() {
  const container = document.getElementById("workGrid");
  if (!container) return;

  container.innerHTML = CONFIG.work.map(w => {
    const imgSrc = CONFIG.images[w.image] || "";
    const visualContent = imgSrc ? 
      `<img src="${imgSrc}" alt="${w.client} - ${w.cat}" loading="lazy">` : 
      `<div class="ph-visual"><span class="ph-label">${w.cat}</span><span class="ph-corner">${w.client}</span></div>`;

    return `
      <div class="work-card reveal">
        <div class="work-visual">
          ${visualContent}
        </div>
        <div class="work-body">
          <span class="work-cat">${w.cat}</span>
          <h3 class="work-client">${w.client}</h3>
          <p class="work-desc">${w.desc}</p>
          <div class="work-services">
            ${w.services.map(s => `<span>${s}</span>`).join("")}
          </div>
          <div class="work-results">⚡ ${w.results}</div>
          <a href="#contact" class="work-link">Discuss Similar Project →</a>
        </div>
      </div>
    `;
  }).join("");
}

/* ---------- Results Grid ---------- */
function renderResults() {
  const container = document.getElementById("resultsGrid");
  if (!container) return;

  container.innerHTML = CONFIG.results.map(r => `
    <div class="result-card reveal">
      <div class="result-num">${r.num}</div>
      <div class="result-label">${r.label}</div>
    </div>
  `).join("");
}

/* ---------- Contact Info & Form Handler ---------- */
function initContactInfo() {
  const detailContainer = document.getElementById("contactDetail");
  const whatsappContainer = document.getElementById("whatsappBox");

  if (detailContainer) {
    detailContainer.innerHTML = `
      <div><strong>Email:</strong> ${CONFIG.contact.email ? `<a href="mailto:${CONFIG.contact.email}">${CONFIG.contact.email}</a>` : 'Available upon project request'}</div>
      <div><strong>Phone / WhatsApp:</strong> ${CONFIG.contact.phone || 'Available upon request'}</div>
      <div><strong>Service Region:</strong> Mumbai, Navi Mumbai, Thane & Remote</div>
    `;
  }

  if (whatsappContainer && CONFIG.contact.whatsapp) {
    whatsappContainer.innerHTML = `
      <h4>Prefer direct WhatsApp chat?</h4>
      <p>Connect with our strategy team immediately to discuss your growth goals.</p>
      <a href="https://wa.me/${CONFIG.contact.whatsapp}?text=Hi%20ScaleMedia%2C%20I'd%20like%20to%20discuss%20a%20digital%20marketing%20strategy%20for%20my%20business." target="_blank" rel="noopener" class="btn btn-whatsapp">Chat on WhatsApp →</a>
    `;
  }
}

function initFormHandler() {
  const form = document.getElementById("enquiryForm");
  const note = document.getElementById("formNote");
  const submitBtn = document.getElementById("submitBtn");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const hp = document.getElementById("f-website2");
    if (hp && hp.value !== "") {
      return;
    }

    const nameInput = document.getElementById("f-name");
    const emailInput = document.getElementById("f-email");
    const errName = document.getElementById("err-name");
    const errEmail = document.getElementById("err-email");

    let valid = true;

    nameInput.parentElement.classList.remove("error");
    emailInput.parentElement.classList.remove("error");
    if (errName) errName.innerText = "";
    if (errEmail) errEmail.innerText = "";

    if (!nameInput.value.trim()) {
      nameInput.parentElement.classList.add("error");
      if (errName) errName.innerText = "Full Name is required";
      valid = false;
    }

    if (!emailInput.value.trim() || !emailInput.value.includes("@")) {
      emailInput.parentElement.classList.add("error");
      if (errEmail) errEmail.innerText = "Please enter a valid email address";
      valid = false;
    }

    if (!valid) return;

    submitBtn.disabled = true;
    submitBtn.innerText = "Sending...";
    note.className = "form-note";
    note.innerText = "Submitting your enquiry...";

    if (CONFIG.contact.formEndpoint) {
      try {
        const formData = new FormData(form);
        const res = await fetch(CONFIG.contact.formEndpoint, {
          method: "POST",
          body: formData,
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          showSuccess();
        } else {
          showError("Unable to submit right now. Please email us directly.");
        }
      } catch (err) {
        showError("Network error. Please try again or reach out via WhatsApp.");
      }
    } else {
      setTimeout(() => {
        showSuccess();
      }, 1000);
    }

    function showSuccess() {
      submitBtn.disabled = false;
      submitBtn.innerText = "Enquiry Sent!";
      note.className = "form-note status-success";
      note.innerText = "Thank you! Our growth strategist will contact you within 1 business day.";
      form.reset();
    }

    function showError(msg) {
      submitBtn.disabled = false;
      submitBtn.innerText = "Send Enquiry";
      note.className = "form-note status-error";
      note.innerText = msg;
    }
  });
}

/* ---------- Floating WhatsApp Button ---------- */
function initWhatsAppFloat() {
  const slot = document.getElementById("whatsappFloatSlot");
  if (!slot || !CONFIG.contact.whatsapp) return;

  slot.innerHTML = `
    <a href="https://wa.me/${CONFIG.contact.whatsapp}?text=Hi%20ScaleMedia%2C%20I'm%20interested%20in%20growing%20my%20business." id="whatsappFloat" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
      <svg viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
    </a>
  `;
}

/* ---------- Footer Builder ---------- */
function renderFooter() {
  const contactCol = document.getElementById("footerContactCol");
  if (!contactCol) return;

  contactCol.innerHTML = `
    <h5>Contact</h5>
    <a href="mailto:${CONFIG.contact.email}">${CONFIG.contact.email}</a>
    <span>${CONFIG.contact.phone}</span>
    <span>Mumbai · Navi Mumbai · Thane</span>
    ${CONFIG.social.instagram ? `<a href="${CONFIG.social.instagram}" target="_blank" rel="noopener">Instagram</a>` : ''}
    ${CONFIG.social.linkedin ? `<a href="${CONFIG.social.linkedin}" target="_blank" rel="noopener">LinkedIn</a>` : ''}
  `;
}

/* ---------- Intersection Observer for Reveals ---------- */
function initIntersectionObserver() {
  const reveals = document.querySelectorAll(".reveal, .mask-heading, .trust-mark, .compare-col");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: "0px 0px -40px 0px"
  });

  reveals.forEach(el => observer.observe(el));
}
