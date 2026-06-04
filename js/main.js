/* ── FADE-IN OBSERVER ── */
const fadeObs = new IntersectionObserver(
  (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
  { threshold: 0.1 }
);
document.querySelectorAll(".fade-in").forEach((el) => fadeObs.observe(el));

/* ── NAV SCROLL TINT ── */
const nav = document.getElementById("main-nav");
if (nav) {
  window.addEventListener("scroll", () => {
    nav.style.borderBottomColor = window.scrollY > 60
      ? "rgba(27,86,176,0.2)"
      : "rgba(255,255,255,0.07)";
  });
}

/* ── ACTIVE NAV LINK ── */
(function setActiveNav() {
  const page = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a, .nav-mobile-menu a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === page || (page === "" && href === "index.html") || (page === "index.html" && href === "index.html")) {
      a.classList.add("active");
    } else if (href === page) {
      a.classList.add("active");
    }
  });
})();

/* ── MOBILE MENU ── */
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
    const icon = menuBtn.querySelector("i");
    icon.className = mobileMenu.classList.contains("open") ? "fas fa-times" : "fas fa-bars";
  });
  mobileMenu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      menuBtn.querySelector("i").className = "fas fa-bars";
    })
  );
}

/* ── PROJECT FILTER (projects.html only) ── */
const filterTabs = document.querySelectorAll(".filter-tab");
const projCards = document.querySelectorAll(".proj-card");
if (filterTabs.length && projCards.length) {
  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      const filter = tab.dataset.filter;
      projCards.forEach((card) => {
        const cats = card.dataset.cats || "";
        const show = filter === "all" || cats.includes(filter);
        card.setAttribute("data-hidden", show ? "false" : "true");
      });
    });
  });
}

/* ── FORM SUBMIT FEEDBACK ── */
const submitBtn = document.getElementById("submit-btn");
if (submitBtn) {
  submitBtn.addEventListener("click", function () {
    this.innerHTML = '<i class="fas fa-check"></i> Enquiry Sent — We\'ll be in touch';
    this.style.background = "var(--steel)";
    setTimeout(() => {
      this.innerHTML = '<i class="fas fa-paper-plane"></i> Submit Enquiry';
      this.style.background = "";
    }, 3500);
  });
}

/* ── SMOOTH SCROLL for anchor links ── */
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
