document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("nav");
  const navTrigger = document.querySelector(".nav-trigger");

  if (nav && navTrigger) {
    navTrigger.addEventListener("click", (event) => {
      event.preventDefault();
      nav.classList.toggle("nav-open");
      navTrigger.classList.toggle("nav-open");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("nav-open");
        navTrigger.classList.remove("nav-open");
      });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const href = anchor.getAttribute("href");
      if (!href || href === "#" || href === "#0") {
        return;
      }

      const target = document.querySelector(href);
      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});
