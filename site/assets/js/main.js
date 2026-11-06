
document.documentElement.classList.add("has-js");

const revealSections = document.querySelectorAll("[data-reveal]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const siteHeader = document.querySelector("[data-site-header]");
const headerSentinel = document.querySelector("[data-header-sentinel]");
const scrollProgress = document.querySelector("[data-scroll-progress]");
const navToggle = document.querySelector("[data-nav-toggle]");
const siteNavigation = document.querySelector("[data-site-navigation]");
const hero = document.querySelector(".hero");
const environmentContext = document.querySelector(".environment-context");
const about = document.querySelector(".about");
const aboutChapterLabel = document.querySelector("[data-about-chapter-label]");
const services = document.querySelector(".services");
const serviceItems = Array.from(document.querySelectorAll("[data-service-index]"));
const serviceCurrent = document.querySelector("[data-service-current]");
const serviceProgress = document.querySelector("[data-service-progress]");
const managementOpening = document.querySelector(".management-focus__opening");
const managementChapters = Array.from(document.querySelectorAll("[data-management-chapter]"));

if (siteHeader && navToggle && siteNavigation) {
  const navLinks = siteNavigation.querySelectorAll("a[href^=\"#\"]");
  const desktopNavigation = window.matchMedia("(min-width: 48rem)");

  const setNavigation = (isOpen, restoreFocus = false) => {
    navToggle.setAttribute("aria-expanded", String(isOpen));
    siteNavigation.classList.toggle("is-open", isOpen);
    siteHeader.classList.toggle("is-menu-open", isOpen);

    if (restoreFocus) {
      navToggle.focus();
    }
  };

  navToggle.addEventListener("click", () => {
    setNavigation(navToggle.getAttribute("aria-expanded") !== "true");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => setNavigation(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
      setNavigation(false, true);
    }
  });

  document.addEventListener("click", (event) => {
    if (navToggle.getAttribute("aria-expanded") === "true" && !siteHeader.contains(event.target)) {
      setNavigation(false);
    }
  });

  desktopNavigation.addEventListener("change", () => setNavigation(false));
}

const revealAll = () => {
  revealSections.forEach((section) => section.classList.add("is-visible"));
};

if (reduceMotion.matches || !("IntersectionObserver" in window)) {
  revealAll();
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("is-visible", entry.isIntersecting);
      });
    },
    {
      rootMargin: "-18% 0px -10% 0px",
      threshold: 0.01,
    },
  );

  revealSections.forEach((section) => revealObserver.observe(section));
}

if (siteHeader && headerSentinel) {
  if (!("IntersectionObserver" in window)) {
    siteHeader.classList.add("is-scrolled");
  } else {
    const headerObserver = new IntersectionObserver(([entry]) => {
      siteHeader.classList.toggle("is-scrolled", !entry.isIntersecting);
    });

    headerObserver.observe(headerSentinel);
  }
}

if (!reduceMotion.matches) {
  let ticking = false;

  const updateScrollMotion = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const pageProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;

    if (scrollProgress) {
      scrollProgress.style.transform = `scaleX(${Math.min(1, Math.max(0, pageProgress))})`;
    }

    if (hero) {
      const heroProgress = Math.min(1, Math.max(0, window.scrollY / Math.max(1, hero.offsetHeight * 0.72)));
      hero.style.setProperty("--hero-exit", heroProgress.toFixed(3));
    }

    if (environmentContext && window.matchMedia("(min-width: 68rem)").matches) {
      const rect = environmentContext.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight);
      const sceneProgress = Math.min(1, Math.max(0, -rect.top / travel));
      environmentContext.style.setProperty("--scene-progress", sceneProgress.toFixed(3));
      environmentContext.classList.toggle("is-stage-two", sceneProgress > 0.48);
      environmentContext.classList.toggle("is-exiting", sceneProgress > 0.86);
    } else if (environmentContext) {
      environmentContext.classList.remove("is-exiting");
    }

    if (about && window.matchMedia("(min-width: 68rem)").matches) {
      const rect = about.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight);
      const aboutProgress = Math.min(1, Math.max(0, -rect.top / travel));

      about.style.setProperty("--about-progress", aboutProgress.toFixed(3));
      about.classList.toggle("is-method", aboutProgress > 0.38);
      about.classList.toggle("is-method-step-1", aboutProgress > 0.48);
      about.classList.toggle("is-method-step-2", aboutProgress > 0.64);
      about.classList.toggle("is-method-step-3", aboutProgress > 0.78);
      about.classList.toggle("is-exiting", aboutProgress > 0.92);

      if (aboutChapterLabel) {
        aboutChapterLabel.textContent = aboutProgress > 0.38 ? "Cara kami bekerja" : "Tentang DEA";
      }
    } else if (about) {
      about.classList.remove(
        "is-method",
        "is-method-step-1",
        "is-method-step-2",
        "is-method-step-3",
        "is-exiting",
      );

      if (aboutChapterLabel) {
        aboutChapterLabel.textContent = "Tentang DEA";
      }
    }

    if (managementOpening) {
      const openingRect = managementOpening.getBoundingClientRect();
      managementOpening.classList.toggle("is-past", openingRect.bottom < window.innerHeight * 0.22);
    }

    managementChapters.forEach((chapter) => {
      const chapterRect = chapter.getBoundingClientRect();
      chapter.classList.toggle("is-past", chapterRect.bottom < window.innerHeight * 0.22);
    });

    if (services && serviceItems.length) {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight * 0.5;
      const servicesRect = services.getBoundingClientRect();
      let activeIndex = 0;
      let activeDistance = Number.POSITIVE_INFINITY;

      serviceItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height * 0.5;
        const distance = Math.abs(itemCenter - viewportCenter);
        const isPast = rect.bottom <= viewportHeight * 0.14;
        const isInView = rect.top < viewportHeight * 0.86 && rect.bottom > viewportHeight * 0.14;

        item.classList.toggle("is-past", isPast);
        item.classList.toggle("is-in-view", isInView);

        if (distance < activeDistance) {
          activeDistance = distance;
          activeIndex = index;
        }
      });

      serviceItems.forEach((item, index) => item.classList.toggle("is-active", index === activeIndex));
      services.classList.toggle("is-exiting", servicesRect.bottom < viewportHeight * 0.35);

      if (serviceCurrent) {
        serviceCurrent.textContent = String(activeIndex + 1).padStart(2, "0");
      }

      if (serviceProgress) {
        serviceProgress.style.transform = `scaleX(${(activeIndex + 1) / serviceItems.length})`;
      }
    }

    ticking = false;
  };

  const requestScrollMotion = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScrollMotion);
      ticking = true;
    }
  };

  updateScrollMotion();
  window.addEventListener("scroll", requestScrollMotion, { passive: true });
  window.addEventListener("resize", requestScrollMotion);
}
