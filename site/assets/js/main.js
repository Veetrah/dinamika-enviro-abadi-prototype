
document.documentElement.classList.add("has-js");

const revealSections = document.querySelectorAll("[data-reveal]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const siteHeader = document.querySelector("[data-site-header]");
const headerSentinel = document.querySelector("[data-header-sentinel]");

const revealAll = () => {
  revealSections.forEach((section) => section.classList.add("is-visible"));
};

if (reduceMotion.matches || !("IntersectionObserver" in window)) {
  revealAll();
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -12%",
      threshold: 0.12,
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
